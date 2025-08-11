import type {
  MilkReceiptFilterRequest,
  MilkReceiptRequest,
} from '../../types/request/milk-receipt';
import type {
  MilkReceiptCreateResponse,
  MilkReceiptResponse,
} from '../../types/response/milk-receipt';
import { baseApi } from '../api/base-api';

export const milkReceiptApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['MilkReceipt'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      milkReceiptList: builder.query<MilkReceiptResponse, MilkReceiptFilterRequest>({
        query: (body) => ({
          url: '/v1/milk-receipt/list',
          method: 'POST',
          body,
        }),
        providesTags: ['MilkReceipt'],
      }),
      createMilkReceipt: builder.mutation<MilkReceiptCreateResponse, MilkReceiptRequest>({
        query: (body) => ({
          url: '/v1/milk-receipt/create',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['MilkReceipt'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            dispatch(milkReceiptApi.util.invalidateTags(['MilkReceipt']));
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

export const {
  useMilkReceiptListQuery,
  useLazyMilkReceiptListQuery,
  useCreateMilkReceiptMutation,
} = milkReceiptApi;
