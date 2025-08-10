import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import appConfig from '../configs/app-config';
import { protectedRoutes, publicRoutes } from '../configs/route-config';
import ProtectedRoute from '../components/route/protected-route';
import AuthorityGuard from '../components/route/authority-guard';
import AppRoute from '../components/route/app-route';
import PublicRoute from '../components/route/public-route';
import type { ResourcePermission } from '../utils/hooks/use-authority';

const { authenticatedEntryPath } = appConfig;

const userAuthority: ResourcePermission[] = [
  {
    resource: 'dashboard',
    actions: ['read', 'delete'],
  },
  {
    resource: 'user',
    actions: ['read', 'create'],
  },
];

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<ProtectedRoute />}
      >
        <Route
          path='/'
          element={
            <Navigate
              replace
              to={authenticatedEntryPath}
            />
          }
        />
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AuthorityGuard
                userPermissions={userAuthority}
                resource={route.resource}
                action={route.action}
              >
                <AppRoute component={route.component} />
              </AuthorityGuard>
            }
          />
        ))}
        <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        />
      </Route>
      <Route
        path='/'
        element={<PublicRoute />}
      >
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AppRoute component={route.component} />}
          />
        ))}
      </Route>
    </Routes>
  );
};

const Views = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
