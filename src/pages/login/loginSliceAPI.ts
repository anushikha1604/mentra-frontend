import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginSliceAPI = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://cipherlab-dev.azurewebsites.net/api/Account`,
  }),
  endpoints: (builder) => ({
    authenticateAPI: builder.mutation({
      query(reqObj) {
        return {
          url: `authenticate`,
          method: 'POST',
          body: reqObj,
        };
      },
    }),
  }),
});

export const { useAuthenticateAPIMutation } = loginSliceAPI;
