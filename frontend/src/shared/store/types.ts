export interface AppState {
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
  user: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface Store extends AppState {
  setTheme: (theme: AppState['theme']) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}
