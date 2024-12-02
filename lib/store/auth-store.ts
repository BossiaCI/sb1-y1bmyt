import { create } from 'zustand';
import { AuthState, User } from '@/lib/types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  
  setUser: (user: User | null) => set({ user, isLoading: false }),
  setError: (error: string) => set({ error, isLoading: false }),
  logout: async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    set({ user: null, error: null });
  },
}));