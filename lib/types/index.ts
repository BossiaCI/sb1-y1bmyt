// Domain Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}

// Application Types
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface NavigationItem {
  title: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavigationItem[];
}