import { type ReactNode } from 'react';
import { useStore } from '@shared/store/store';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const theme = useStore((state) => state.theme);

  return <div className={theme}>{children}</div>;
};
