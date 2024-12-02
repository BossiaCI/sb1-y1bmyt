'use client';

import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<string, any> = {
    active: { variant: 'default', className: 'bg-green-500' },
    blocked: { variant: 'secondary', className: 'bg-orange-500 text-white' },
    banned: { variant: 'destructive' },
    archived: { variant: 'outline' },
  };

  const { variant, className } = variants[status] || variants.active;

  return (
    <Badge variant={variant} className={className}>
      {status}
    </Badge>
  );
}