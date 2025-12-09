import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';

const [LIST_TAG] = ['Institutes'];
export const instituteSlice = createApi({
  reducerPath: 'instituteAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseURL}`,
  }),
  tagTypes: [LIST_TAG],
  endpoints: (builder) => ({
    getAPI: builder.query({
      query: ({ pageNumber, pageSize, storeId }) =>
        `list?store_id=${storeId}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
      providesTags: [LIST_TAG],
    }),
    addAPI: builder.mutation({
      query(reqObj) {
        return {
          url: `createuser`,
          method: 'POST',
          body: reqObj,
        };
      },
    }),
    updateAPI: builder.mutation({
      query(store) {
        return {
          url: `update`,
          method: 'PUT',
          body: store,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    removeAPI: builder.mutation({
      query(store) {
        return {
          url: `delete/${store.id}`,
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
} = instituteSlice;
