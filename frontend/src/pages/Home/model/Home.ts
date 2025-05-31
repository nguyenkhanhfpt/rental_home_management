import { useState } from 'react';
import { Home, useHome } from '@/shared/hooks/useHome';

const initHomesState: Home[] = [];
const initHomeState: Home | null = null;

export const useHomeFeature = () => {
  const [homes, setHomes] = useState<Home[]>(initHomesState);
  const [home, setHome] = useState<Home | null>(initHomeState);
  const [searchHome, setSearchHome] = useState('');
  const { fetchHomes, fetchHome } = useHome();

  const getHomes = async () => {
    try {
      // Simulate fetching homes from an API
      const response = await fetchHomes();
      setHomes(response as Home[]); // Assuming the response data is an array of Home objects
    } catch (err: any) {
      // setError(err.message || "Failed to fetch homes");
    } finally {
      // setLoading(false);
    }
  };

  const changeSearchHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchHome(value);
  };

  const getHomeDetail = async (homeId: number) => {
    try {
      // Simulate fetching homes from an API
      const response = await fetchHome(homeId);
      setHome(response as Home); // Assuming the response data is an array of Home objects
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
    searchHome,
    changeSearchHome,
    getHomeDetail,
    home
  };
};
