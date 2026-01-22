import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';
import { get } from 'http';

const [LIST_TAG] = ['Companies'];
export const companySlice = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseURL}`,
  }),
  tagTypes: [LIST_TAG],
  endpoints: (builder) => ({
    getAPI: builder.query({
      query: () => `list`,
      providesTags: [LIST_TAG],
    }),
    getAPIById: builder.query({
      query: (id) => `company/${id}`,
      providesTags: [LIST_TAG],
    }),
    addAPI: builder.mutation({
      query(reqObj) {
        return {
          url: `createcompany`,
          method: 'POST',
          body: reqObj,
        };
      },
    }),
    updateAPI: builder.mutation({
      query(store) {
        return {
          url: `company/${store.id}`,
          method: 'PUT',
          body: store,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    removeAPI: builder.mutation({
      query(store) {
        return {
          url: `company/${store.id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [LIST_TAG],
    }),

    getBranchesAPI: builder.query({
      query: ({ storeId }) =>
        `list?${storeId !== undefined ? `store_id=${storeId}` : ''}`,
    }),
  }),
});

export const {
  useGetAPIQuery,
  useAddAPIMutation,
  useRemoveAPIMutation,
  useUpdateAPIMutation,
  useGetBranchesAPIQuery,
} = companySlice;
