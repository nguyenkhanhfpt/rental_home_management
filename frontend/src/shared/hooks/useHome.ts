import { useState } from 'react';
import { homeService } from '@shared/api/services/home.service';

export interface Home {
  id: number;
  name: string;
  shortName: string;
  address: string;
  status: number;
}

export function useHome() {
  // const [homes, setHomes] = useState<Home[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHomes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await homeService.list();
      // setHomes(response.data);

      return response.data as Home[]; // Assuming the response data is an array of Home objects
    } catch (err: any) {
      setError(err.message || 'Failed to fetch homes');
    } finally {
      setLoading(false);
    }
  };

  return { fetchHomes, loading, error };
}
