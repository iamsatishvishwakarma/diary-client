import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './common-base-query';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
