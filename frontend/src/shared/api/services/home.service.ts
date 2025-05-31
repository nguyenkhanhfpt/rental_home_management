import { apiClient } from '../client';
import { API_ENDPOINTS } from '@shared/config/api';

export const homeService = {
  // Define methods for home service here
  list: () => {
    return apiClient.get(API_ENDPOINTS.HOME.LIST);
  },

  detail: (id: number) => {
    return apiClient.get(API_ENDPOINTS.HOME.DETAIL(id));
  },

  create: (data: any) => {
    return apiClient.post(API_ENDPOINTS.HOME.CREATE, data);
  },

  update: (id: number, data: any) => {
    return apiClient.put(API_ENDPOINTS.HOME.UPDATE(id), data);
  },

  delete: (id: number) => {
    return apiClient.delete(API_ENDPOINTS.HOME.DELETE(id));
  },
};
