export const queryKeys = {
  user: ['user'] as const,
  users: ['users'] as const,
  profile: ['profile'] as const,
  settings: ['settings'] as const,
  post: (id: string | number) => ['post', id] as const,
  search: (term: string) => ['search', term] as const,
};

export type QueryKeys = typeof queryKeys;
