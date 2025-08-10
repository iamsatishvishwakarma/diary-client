import authRoute from './auth-route-config';
import pageRoute from './page-route-config';

export const publicRoutes = [...authRoute];

export const protectedRoutes = [...pageRoute];
