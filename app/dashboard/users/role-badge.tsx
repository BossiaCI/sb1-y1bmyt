'use client';

import { Badge } from '@/components/ui/badge';

interface RoleBadgeProps {
  role: string;
}

export function RoleBadge({ role }: Readonly<RoleBadgeProps>) {
  return (
    <Badge variant={role === 'admin' ? 'default' : 'secondary'}>
      {role}
    </Badge>
  );
}