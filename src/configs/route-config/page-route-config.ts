import React, { type JSX } from 'react';
import type { Action } from '../../utils/hooks/use-authority';

export interface Route {
  key: string;
  path: string;
  component: string | React.LazyExoticComponent<() => JSX.Element>;
  resource: string;
  action: Action;
}

const pageRoute: Route[] = [
  {
    key: 'dashboard',
    path: `/dashboard`,
    component: React.lazy(() => import('../../view/dashboard')),
    resource: 'dashboard',
    action: 'read',
  },
  {
    key: 'users',
    path: `/users`,
    component: React.lazy(() => import('../../view/user')),
    resource: 'user',
    action: 'read',
  },
  {
    key: 'user-create',
    path: `/user/create`,
    component: React.lazy(() => import('../../view/user/components/create')),
    resource: 'user',
    action: 'create',
  },
  {
    key: 'verification-otp',
    path: `/verification/otp`,
    component: React.lazy(() => import('../../view/auth/otp-verification')),
    resource: 'user',
    action: 'create',
  },
  {
    key: 'milk-receipt',
    path: `/milk-receipt`,
    component: React.lazy(() => import('../../view/milk-receipt/milk-receipt-list')),
    resource: 'user',
    action: 'read',
  },
];

export default pageRoute;
