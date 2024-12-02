import { getSession } from '@/lib/auth/session';
import { prisma } from '@/lib/prisma';
import { DataTable } from './data-table';
import { columns } from './columns';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
  const session = await getSession();
  
  if (!session || session.role !== 'admin') {
    redirect('/login');
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      isOnline: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">
          Manage user accounts and permissions
        </p>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}