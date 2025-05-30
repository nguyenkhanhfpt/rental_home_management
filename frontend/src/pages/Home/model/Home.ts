import { useState } from 'react';
import { Home, useHome } from '@/shared/hooks/useHome';

const initHomeState: Home[] = [];

export const useHomeFeature = () => {
  const [homes, setHomes] = useState<Home[]>(initHomeState);
  const { fetchHomes } = useHome();

  const getHomes = async () => {
    try {
      // Simulate fetching homes from an API
      const response = await fetchHomes();
      setHomes(response); // Assuming the response data is an array of Home objects
    } catch (err: any) {
      // setError(err.message || "Failed to fetch homes");
    } finally {
      // setLoading(false);
    }
  };

  return {
    getHomes,
    homes,
    loading: false,
    error: null,
  };
};
