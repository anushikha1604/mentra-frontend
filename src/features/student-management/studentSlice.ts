import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';
import { Row } from './student';

const [LIST_TAG] = ['LIST_TAG'];
export const studentSlice = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseURL}`,
  }),
  tagTypes: [LIST_TAG],
  endpoints: (builder) => ({
    getAPI: builder.query<Row[], void>({
      query: () => `students`,
      providesTags: [LIST_TAG],
    }),
    getAPIById: builder.query<Row, Row>({
      query: (store) => `student/${store.studentId}`,
      providesTags: [LIST_TAG],
    }),
    addAPI: builder.mutation<Row, Row>({
      query(reqObj) {
        return {
          url: `createstudent`,
          method: 'POST',
          body: reqObj,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    updateAPI: builder.mutation<Row, Row>({
      query(store) {
        return {
          url: `student/${store.studentId}`,
          method: 'PUT',
          body: store,
        };
      },
      invalidatesTags: [LIST_TAG],
    }),
    removeAPI: builder.mutation<Row, Row>({
      query(store) {
        return {
          url: `student/${store.studentId}`,
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
} = studentSlice;
