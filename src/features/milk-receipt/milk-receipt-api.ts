import type { MilkReceiptResponse } from '../../types/response/milk-receipt';
import { baseApi } from '../api/base-api';
import { setMilkReceiptList } from './milk-receipt-slice';

export const milkReceiptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    milkReceiptList: builder.mutation<MilkReceiptResponse, unknown>({
      query: (body) => ({
        url: '/v1/milk-receipt/list',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMilkReceiptList(data));
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),
    // userCreate: builder.mutation<UserCreateRequest, UserCreateResponse>({
    //   query: (body) => ({
    //     url: '/v1/user/create',
    //     method: 'POST',
    //     body,
    //   }),
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //     } catch (err) {
    //       console.error('Login error:', err);
    //     }
    //   },
    // }),
    // userDetails: builder.mutation<UserDetailsRequest, UserUpdateResponse>({
    //   query: (body) => ({
    //     url: '/v1/user/details',
    //     method: 'POST',
    //     body,
    //   }),
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //     } catch (err) {
    //       console.error('Login error:', err);
    //     }
    //   },
    // }),
  }),
});

export const { useMilkReceiptListMutation } = milkReceiptApi;
