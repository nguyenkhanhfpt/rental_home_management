export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  TIMEOUT: 10000,
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
  },
  ARTICLES: {
    LIST: '/articles',
    DETAIL: (id: string) => `/articles/${id}`,
    CREATE: '/articles',
    UPDATE: (id: string) => `/articles/${id}`,
    DELETE: (id: string) => `/articles/${id}`,
  },
  HOME: {
    LIST: '/homes',
    DETAIL: (id: number) => `/homes/${id}`,
    CREATE: '/homes',
    UPDATE: (id: number) => `/homes/${id}`,
    DELETE: (id: number) => `/homes/${id}`,
  },
} as const;
