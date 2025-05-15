import { apiClient } from '../client';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '../types/auth.types';
import { API_ENDPOINTS } from '@shared/config/api';

export const authService = {
  login: (data: LoginRequest) => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, data);
  },

  register: (data: RegisterRequest) => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, data);
  },

  logout: () => {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },
};
