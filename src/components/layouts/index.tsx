import { lazy, memo, Suspense, useMemo } from 'react';
import { useAuth } from '../../utils/hooks/use-auth';
const Layout = () => {
  const { isAuthenticated } = useAuth();

  const AppLayout = useMemo(() => {
    if (isAuthenticated) {
      return lazy(() => import('./theme-layout'));
    }
    return lazy(() => import('./auth-layout'));
  }, [isAuthenticated]);

  return (
    <Suspense fallback={<div>loading</div>}>
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
