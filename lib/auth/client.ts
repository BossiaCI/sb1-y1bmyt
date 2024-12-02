import { User } from '@/lib/types';

export async function loginUser(email: string, password: string) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Login failed');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.user;
}

export async function registerUser(name: string, email: string, password: string) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Registration failed');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.user;
}

export function getStoredUser(): User | null {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const [, payload] = token.split('.');
    const decodedUser = JSON.parse(atob(payload));
    return {
      id: decodedUser.userId,
      email: decodedUser.email,
      role: decodedUser.role,
      name: decodedUser.name,
    };
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem('token');
}