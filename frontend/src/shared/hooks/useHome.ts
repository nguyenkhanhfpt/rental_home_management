import { homeService } from '@shared/api/services/home.service';

export interface Home {
  id: number | null;
  name: string;
  shortName: string;
  address: string;
  status: number;
}

export function useHome() {
  const fetchHomes = async () => {
    try {
      const response = await homeService.list();

      return response.data as Home[]; // Assuming the response data is an array of Home objects
    } catch (err: any) {
    } finally {
    }
  };

  const fetchHome = async (homeId: number) => {
    try {
      const response = await homeService.detail(homeId);

      return response.data as Home; // Assuming the response data is an array of Home objects
    } catch (err: any) {
    } finally {
    }
  };

  return { fetchHomes, fetchHome };
}
