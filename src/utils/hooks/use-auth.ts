import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export const useAuth = () => {
  const { token, signedIn } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.user.currentUser);

  const isAuthenticated = Boolean(token && signedIn);

  return {
    user,
    isAuthenticated,
    token,
  };
};
