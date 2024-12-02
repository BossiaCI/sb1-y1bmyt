'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronLeft,
  Menu,
} from 'lucide-react';
import { NavigationItem } from '@/lib/types';

const navigationItems: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex flex-col h-screen border-r border-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4">
        <div className={cn('flex items-center', collapsed && 'hidden')}>
          <h1 className="text-xl font-bold">SaaS App</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu /> : <ChevronLeft />}
        </Button>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center px-3 py-2 rounded-md transition-colors',
              'hover:bg-accent hover:text-accent-foreground',
              pathname === item.href && 'bg-accent text-accent-foreground',
              collapsed && 'justify-center'
            )}
          >
            {item.icon && <item.icon className="w-5 h-5" />}
            {!collapsed && (
              <span className="ml-3 text-sm font-medium">{item.title}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}