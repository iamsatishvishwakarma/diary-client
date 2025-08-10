export const EApplicationEnvironment = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
} as const;
export type EApplicationEnvironment =
  (typeof EApplicationEnvironment)[keyof typeof EApplicationEnvironment];

export const APP_NAME = 'Milk Cash Tracker';
export const PERSIST_STORE_NAME = 'admin';
export const REDIRECT_URL_KEY = 'redirectUrl';
