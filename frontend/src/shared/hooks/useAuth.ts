import { useState } from 'react';
import { useStore } from '@shared/store/store';
import { authService } from '@shared/api/services/auth.service';
import { LoginRequest, RegisterRequest } from '@shared/api/types/auth.types';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useStore();

  const login = async (data: LoginRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login(data);
      setUser(response.data);
      window.localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (err: any) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.register(data);
      setUser(response.data);
      window.localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (err: any) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      await authService.logout();
      useStore.getState().logout();
    } catch (err: any) {
      setError(err.message || 'Logout failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    loading,
    error,
  };
};
