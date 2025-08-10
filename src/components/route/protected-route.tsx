import { Navigate, Outlet, useLocation } from 'react-router-dom';
import appConfig from '../../configs/app-config';
import { REDIRECT_URL_KEY } from '../../constants/app-constant';
import { useAuth } from '../../utils/hooks/use-auth';

const { unAuthenticatedEntryPath } = appConfig;

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
        replace
      />
    );
  }

  // if (location.pathname !== '/verification/otp' && user && !user.isAcountVerified) {
  //   return (
  //     <Navigate
  //       to='/verification/otp'
  //       replace
  //     />
  //   );
  // }

  return <Outlet />;
};

export default ProtectedRoute;
