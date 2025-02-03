import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});
