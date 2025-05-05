import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Store } from './types';

const initialState = {
  theme: 'light' as const,
  isAuthenticated: false,
  user: null,
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      ...initialState,
      setTheme: (theme) => set({ theme }),
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
); 