import { Navigate, Outlet } from 'react-router';
import appConfig from '../../configs/app-config';
import { useAuth } from '../../utils/hooks/use-auth';

const { authenticatedEntryPath } = appConfig;

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />;
};

export default PublicRoute;
