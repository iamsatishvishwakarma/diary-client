import { Navigate } from 'react-router-dom';
import useAuthority, {
  type Action,
  type ResourcePermission,
} from '../../utils/hooks/use-authority';

interface AuthorityGuardProps {
  userPermissions: ResourcePermission[];
  resource: string;
  action: Action;
  children: React.ReactNode;
}

const AuthorityGuard: React.FC<AuthorityGuardProps> = (props) => {
  const { userPermissions, resource, action, children } = props;
  const roleMatched: boolean = useAuthority(userPermissions, resource, action);

  return roleMatched ? children : <Navigate to='/access-denied' />;
};

export default AuthorityGuard;
