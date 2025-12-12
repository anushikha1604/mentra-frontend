import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from '../../constants/API';

export const loginSliceAPI = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseURL,
  }),
  endpoints: (builder) => ({
    authenticateAPI: builder.mutation({
      query(reqObj) {
        return {
          url: `login`,
          method: 'POST',
          body: reqObj,
        };
      },
    }),
  }),
});

export const { useAuthenticateAPIMutation } = loginSliceAPI;
