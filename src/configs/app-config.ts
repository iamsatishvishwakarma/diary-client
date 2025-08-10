const appConfig = {
  apiPrefix: import.meta.env.VITE_API_URL,
  authenticatedEntryPath: '/dashboard',
  unAuthenticatedEntryPath: '/sign-in',
  locale: 'en',
  enableMock: true,
};

export default appConfig;
