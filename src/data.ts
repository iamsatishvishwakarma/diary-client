export const users: UserRow[] = [
  {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/images/avatars/1.png',
    role: 'Admin',
    plan: 'Enterprise',
    status: 'active',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: '/images/avatars/2.png',
    role: 'Editor',
    plan: 'Team',
    status: 'pending',
  },
  {
    id: '3',
    fullName: 'Carlos Rivera',
    email: 'carlos.rivera@example.com',
    avatar: null,
    role: 'Author',
    plan: 'Basic',
    status: 'inactive',
  },
  {
    id: '4',
    fullName: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    avatar: '/images/avatars/3.png',
    role: 'Maintainer',
    plan: 'Company',
    status: 'active',
  },
  {
    id: '5',
    fullName: 'David Kim',
    email: 'david.kim@example.com',
    avatar: '/images/avatars/4.png',
    role: 'Subscriber',
    plan: 'Basic',
    status: 'active',
  },
];

export type UserRow = {
  id: string;
  fullName: string;
  email: string;
  avatar: string | null;
  role: string;
  plan: string;
  status: string;
};

export type Order = 'asc' | 'desc';
