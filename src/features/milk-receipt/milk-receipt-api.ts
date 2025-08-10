import type { MilkReceiptRequest } from '../../types/request/milk-receipt';
import type { MilkReceiptResponse } from '../../types/response/milk-receipt';
import { baseApi } from '../api/base-api';

export const milkReceiptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    milkReceiptList: builder.query<MilkReceiptResponse, void>({
      query: (body) => ({
        url: '/v1/milk-receipt/list',
        method: 'POST',
        body,
      }),
    }),
    createMilkReceipt: builder.mutation<MilkReceiptResponse['data'][0], MilkReceiptRequest>({
      query: (body) => ({
        url: '/v1/milk-receipt/create',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            milkReceiptApi.util.updateQueryData('milkReceiptList', undefined, (draft) => {
              draft.data.push(data);
            })
          );
        } catch (err) {
          console.error('Login error:', err);
        }
      },
    }),
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

export const { useMilkReceiptListQuery, useCreateMilkReceiptMutation } = milkReceiptApi;
