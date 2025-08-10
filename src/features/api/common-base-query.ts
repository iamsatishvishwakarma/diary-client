import { fetchBaseQuery, type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AuthState } from '../../types/auth';
import appConfig from '../../configs/app-config';
import { REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from '../../constants/api-constant';
import { logout } from '../auth/auth-slice';

type CustomError = {
  status: number;
  message: string;
};

const unauthorizedCodes: readonly number[] = [401, 403];

export const customBaseQuery: BaseQueryFn<
  string | { url: string; method?: string; body?: unknown },
  unknown,
  CustomError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: appConfig.apiPrefix,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: AuthState['data'] }).auth.token;
      if (token) headers.set(REQUEST_HEADER_AUTH_KEY, `${TOKEN_TYPE}${token}`);
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);
  if (result.error) {
    const err = result.error as FetchBaseQueryError & { data: { message: string }; error: string };
    if (unauthorizedCodes.includes(err.status as number)) {
      api.dispatch(logout());
    }
    const message =
      typeof err.data === 'object' && err.data && 'message' in err.data
        ? (err.data as { message: string }).message
        : typeof err.error === 'string'
          ? err.error
          : 'Something went wrong';

    return {
      error: {
        status: typeof err.status === 'number' ? err.status : 500,
        message,
      },
    };
  }

  return result;
};
