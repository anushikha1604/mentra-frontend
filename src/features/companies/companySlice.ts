import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';
export interface Row {
  _id: string;
  companyId: string;
  CompanyName: string;
  emailId: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  createdAt: string;
  updatedAt: string;
}

const [LIST_TAG] = ['LIST_TAG'];
export const companySlice = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseURL}`,
  }),
  tagTypes: [LIST_TAG],
  endpoints: (builder) => ({
    getAPI: builder.query<{ data: Row[] }, void>({
      query: () => `companies`,
      providesTags: [LIST_TAG],
    }),
    getAPIById: builder.query<Row, Row>({
      query: (store) => `company/${store.companyId}`,
      providesTags: [LIST_TAG],
    }),
    addAPI: builder.mutation<Row, Row>({
      query(reqObj) {
        return {
          url: `createcompany`,
          method: 'POST',
          body: reqObj,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    updateAPI: builder.mutation<Row, Row>({
      query(store) {
        return {
          url: `company/${store.companyId}`,
          method: 'PUT',
          body: store,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    removeAPI: builder.mutation<Row, Row>({
      query(store) {
        return {
          url: `company/${store.companyId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
  }),
});

export const {
  useGetAPIQuery,
  useAddAPIMutation,
  useRemoveAPIMutation,
  useUpdateAPIMutation,
} = companySlice;
