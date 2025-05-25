import { type ReactNode, useEffect } from 'react';
import { useStore } from '@shared/store/store';
import { useLocalStorage } from '@shared/lib/hooks';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const theme = useStore((state) => state.theme);
  const setUser = useStore((state) => state.setUser);
  const [storedValue] = useLocalStorage('user', null);

  useEffect(() => {
    if (storedValue) {
      console.log('Restoring user from local storage:', storedValue);
      setUser(storedValue);
    }
  }, []);

  return <div className={theme}>{children}</div>;
};
