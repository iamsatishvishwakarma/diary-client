import type { LoginRequest } from '../../types/request/auth';
import type { UserCreateRequest, UserDetailsRequest } from '../../types/request/user';
import type {
  UserCreateResponse,
  UserListResponse,
  UserUpdateResponse,
} from '../../types/response/user';
import { baseApi } from '../api/base-api';
import { setUserList } from './user-slice';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userList: builder.mutation<UserListResponse, LoginRequest>({
      query: (body) => ({
        url: '/v1/user/list',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserList(data));
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),
    userCreate: builder.mutation<UserCreateRequest, UserCreateResponse>({
      query: (body) => ({
        url: '/v1/user/create',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),
    userDetails: builder.mutation<UserDetailsRequest, UserUpdateResponse>({
      query: (body) => ({
        url: '/v1/user/details',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),
  }),
});

export const { useUserListMutation, useUserCreateMutation, useUserDetailsMutation } = userApi;
