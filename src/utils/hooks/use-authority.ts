import { useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';

export type Action = 'read' | 'create' | 'update' | 'delete';

export interface ResourcePermission {
  resource: string;
  actions: Action[];
}

function useAuthority(
  userPermissions: ResourcePermission[] = [],
  resource: string,
  requiredActions: Action,
  emptyCheck = false
): boolean {
  const isAllowed = useMemo(() => {
    if (isEmpty(userPermissions) || !resource || isEmpty(requiredActions)) return false;

    const permission = userPermissions.find((p) => p.resource === resource);
    if (!permission) return false;

    return permission.actions.includes(requiredActions);
  }, [userPermissions, resource, requiredActions]);

  if (!resource || isEmpty(requiredActions)) {
    return !emptyCheck;
  }

  return isAllowed;
}

export default useAuthority;
