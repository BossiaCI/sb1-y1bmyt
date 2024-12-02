'use client';

import { Badge } from '@/components/ui/badge';

interface OnlineBadgeProps {
  isOnline: boolean;
}

export function OnlineBadge({ isOnline }: OnlineBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={`${
        isOnline ? 'border-green-500 text-green-500' : 'border-gray-500 text-gray-500'
      }`}
    >
      {isOnline ? 'Online' : 'Offline'}
    </Badge>
  );
}