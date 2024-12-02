import { create } from 'zustand';
import { AuthState, User } from '@/lib/types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,
  
  setUser: (user: User | null) => set({ user, isLoading: false }),
  setError: (error: string) => set({ error, isLoading: false }),
  logout: async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    set(initialState);
  },
}));