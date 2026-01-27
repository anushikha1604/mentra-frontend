import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';
export interface Company {
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

const [LIST_TAG] = ['Companies'];
export const companySlice = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseURL}`,
  }),
  tagTypes: [LIST_TAG],
  endpoints: (builder) => ({
    getAPI: builder.query<Company[], void>({
      query: () => `companies`,
      providesTags: [LIST_TAG],
    }),
    getAPIById: builder.query<Company, Company>({
      query: (store) => `company/${store.companyId}`,
      providesTags: [LIST_TAG],
    }),
    addAPI: builder.mutation<Company, Company>({
      query(reqObj) {
        return {
          url: `createcompany`,
          method: 'POST',
          body: reqObj,
        };
      },
    }),
    updateAPI: builder.mutation<Company, Company>({
      query(store) {
        return {
          url: `company/${store.companyId}`,
          method: 'PUT',
          body: store,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    removeAPI: builder.mutation<Company, Company>({
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
