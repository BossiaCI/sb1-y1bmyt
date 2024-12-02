'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@prisma/client';
import { DataTableColumnHeader } from './data-table-column-header';
import { RoleBadge } from './badges/role-badge';
import { StatusBadge } from './badges/status-badge';
import { OnlineBadge } from './badges/online-badge';

type UserTableItem = Pick<User, 'id' | 'name' | 'email' | 'role' | 'status' | 'isOnline' | 'createdAt'>;

export const columns: ColumnDef<UserTableItem>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => <RoleBadge role={row.getValue('role')} />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <StatusBadge status={row.getValue('status')} />,
  },
  {
    accessorKey: 'isOnline',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Online" />
    ),
    cell: ({ row }) => <OnlineBadge isOnline={row.getValue('isOnline')} />,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Joined" />
    ),
    cell: ({ row }) => {
      return new Date(row.getValue('createdAt')).toLocaleDateString();
    },
  },
];