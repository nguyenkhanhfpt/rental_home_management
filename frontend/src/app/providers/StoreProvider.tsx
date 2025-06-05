import { type ReactNode, useEffect } from 'react';
import { useStore } from '@shared/store/store';
import { useLocalStorage } from '@shared/lib/hooks';
import { useNavigate, useLocation } from 'react-router-dom';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const theme = useStore((state) => state.theme);
  const setUser = useStore((state) => state.setUser);
  const [storedValue] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();
  const notLoggedInRoutes = ['/login', '/register'];

  useEffect(() => {
    if (storedValue) {
      console.log('Restoring user from local storage:', storedValue);
      setUser(storedValue);
      if (notLoggedInRoutes.includes(location.pathname)) {
        navigate('/', { replace: true });
      }
    } else {
      if (!notLoggedInRoutes.includes(location.pathname)) {
        navigate('/login', { replace: true });
      }
    }
  }, []);

  return <div className={theme}>{children}</div>;
};
