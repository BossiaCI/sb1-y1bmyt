'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth-store';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block bg-muted">
        <div className="h-full flex flex-col justify-center items-center px-8">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-3xl font-bold">Welcome to SaaS Platform</h1>
            <p className="text-muted-foreground">
              Streamline your workflow, boost productivity, and scale your business
              with our comprehensive suite of tools and features.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        {children}
      </div>
    </div>
  );
}