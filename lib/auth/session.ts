import { cookies } from 'next/headers';
import { verifyToken } from './jwt';
import type { User } from '@/lib/types';
import { cache } from 'react';

export const getSession = cache(async (): Promise<User | null> => {
  const token = cookies().get('token')?.value;
  
  if (!token) {
    return null;
  }

  try {
    const payload = verifyToken(token);
    return {
      id: payload.userId,
      email: payload.email,
      role: payload.role as 'admin' | 'user',
      name: payload.name,
    };
  } catch {
    return null;
  }
});