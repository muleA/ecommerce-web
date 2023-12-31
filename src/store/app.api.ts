import { axiosBaseQuery } from '../shared/axios-base-query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: '', defaultHeaders: {} }),
  tagTypes: ['Order', 'Menu', 'FoodItem', 'Schedule'],
  endpoints: () => ({}),
});
