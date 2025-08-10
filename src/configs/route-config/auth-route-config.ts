import React from 'react';

const authRoute = [
  {
    key: 'signIn',
    path: `/sign-in`,
    component: React.lazy(() => import('../../view/auth/sign-in')),
    authority: [],
  },
];

export default authRoute;
