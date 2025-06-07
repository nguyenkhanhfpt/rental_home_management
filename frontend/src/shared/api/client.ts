import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { API_CONFIG } from '@shared/config/api';
import { ApiError, ApiResponse } from './types';
import { useStore } from '@shared/store/store';

interface ValidationErrorResponse {
  resource: string;
  field: string;
  message: string;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.DEFAULT_HEADERS,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token =
          useStore.getState().user?.accessToken ||
          window.localStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ValidationErrorResponse[]>) => {
        const apiError: ApiError = {
          message: error.message || 'An error occurred',
          code: error.code,
          status: error.response?.status,
          errors: error.response?.data || [],
        };

        // Handle specific error cases
        if (error.response?.status === 401) {
          const token = useStore.getState().user?.refreshToken;

          if (token) {
            const user = useStore.getState().user;
            useStore.getState().setUser({
              ...user,
              accessToken: '',
            });
            // Attempt to refresh the token
            return this.client
              .request({
                method: 'GET',
                url: '/auth/refresh',
                headers: { Authorization: `Bearer ${token}` },
              })
              .then(
                (
                  response: AxiosResponse<
                    ApiResponse<{ accessToken: string; refreshToken: string }>
                  >
                ) => {
                  const { accessToken, refreshToken } = response.data;
                  useStore
                    .getState()
                    .setUser({ ...user, accessToken, refreshToken });
                  window.localStorage.setItem(
                    'user',
                    JSON.stringify({
                      ...JSON.parse(
                        window.localStorage.getItem('user') || '{}'
                      ),
                      accessToken,
                      refreshToken,
                    })
                  );

                  // Retry the original request with the new token
                  if (error.config) {
                    error.config.headers.Authorization = `Bearer ${accessToken}`;
                    return this.client.request(error.config);
                  }
                }
              )
              .catch(() => {
                // If refreshing fails, logout the user
                console.error('Token refresh failed, logging out');
                useStore.getState().logout();
                window.localStorage.removeItem('user');
              });
          } else {
            // If no token is available, logout the user
            useStore.getState().logout();
            window.localStorage.removeItem('user');
          }
        }

        return Promise.reject(apiError);
      }
    );
  }

  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.request(config);
    return {
      data: response.data,
      status: response.status,
      message: response.statusText,
    };
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'POST', url, data });
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PUT', url, data });
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'DELETE', url });
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: 'PATCH', url, data });
  }
}

export const apiClient = new ApiClient();
