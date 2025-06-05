import { homeService } from '@shared/api/services/home.service';

export interface Home {
  id: number | null;
  name: string;
  shortName: string;
  address: string;
  status?: string;
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

  const createHome = async (home: Home) => {
    try {
      const response = await homeService.create(home);
      return response.data as Home; // Assuming the response data is the created Home object
    } catch (err: any) {
    } finally {
    }
  };

  const updateHome = async (home: Home) => {
    try {
      const response = await homeService.update(home.id as number, home);
      return response.data as Home; // Assuming the response data is the updated Home object
    } catch (err: any) {
    } finally {
    }
  };

  const deleteHome = async (homeId: number) => {
    try {
      const response = await homeService.delete(homeId);
      return response.data; // Assuming the response data is a success message or status
    } catch (err: any) {
    } finally {
    }
  };

  return { fetchHomes, fetchHome, createHome, updateHome, deleteHome };
}
