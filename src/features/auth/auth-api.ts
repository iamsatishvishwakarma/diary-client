import type { LoginRequest, OtpVerificationRequest } from '../../types/request/auth';
import type { LoginResponse } from '../../types/response/auth';
import { baseApi } from '../api/base-api';
import { setUser } from '../user/user-slice';
import { setCredentials } from './auth-slice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
          dispatch(setUser(data));
        } catch (err) {
          if (err instanceof Error) {
            console.error('Login error:', err.message);
          }
        }
      },
    }),
    otpVerification: builder.mutation<LoginResponse, OtpVerificationRequest>({
      query: (body) => ({
        url: '/v1/auth/otp-verification',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          if (err instanceof Error) {
            console.error('Login error:', err.message);
          }
        }
      },
    }),
  }),
});

export const { useLoginMutation, useOtpVerificationMutation } = authApi;
