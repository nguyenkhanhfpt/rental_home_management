import React, { useState } from 'react';
import { Home, useHome } from '@/shared/hooks/useHome';
import { useNavigate } from 'react-router-dom';

const initHomesState: Home[] = [];
const initHomeState: Home | null = null;

const initFormData: Home = {
  id: null,
  name: '',
  shortName: '',
  address: '',
};

export const useHomeFeature = () => {
  const [homes, setHomes] = useState<Home[]>(initHomesState);
  const [home, setHome] = useState<Home | null>(initHomeState);
  const [searchHome, setSearchHome] = useState('');
  const [formData, setFormData] = useState<Home>(initFormData);
  const { fetchHomes, fetchHome, createHome } = useHome();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getHomes = async () => {
    try {
      setLoading(true);
      const response = await fetchHomes();
      setHomes(response as Home[]); // Assuming the response data is an array of Home objects
    } catch (err: any) {
      // setError(err.message || "Failed to fetch homes");
    } finally {
      setLoading(false);
    }
  };

  const changeSearchHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchHome(value);
  };

  const getHomeDetail = async (homeId: number) => {
    try {
      setLoading(true);
      const response = await fetchHome(homeId);
      setHome(response as Home); // Assuming the response data is an array of Home objects
    } catch (err: any) {
      // setError(err.message || "Failed to fetch homes");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    // setFormErrors((prev) => ({
    //   ...prev,
    //   [name]: '',
    // }));

    console.log(formData);
  };

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createHome(formData);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error: any) {
      if (Array.isArray(error.errors)) {
        // setFormErrors(newErrors);
      } else {
      }
    }
  };

  return {
    getHomes,
    homes,
    error: null,
    searchHome,
    changeSearchHome,
    getHomeDetail,
    home,
    formData,
    setFormData,
    loading,
    handleChange,
    handleCreate,
  };
};
