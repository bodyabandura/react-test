import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { House } from '../../Types/House';

const BASE_URL = 'https://wizard-world-api.herokuapp.com';

export const HousesApi = createApi({
  reducerPath: 'HousesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getAllHouses: builder.query<House[], void>({
      query: () => 'houses'
    }),
  })
})

export const {
  useGetAllHousesQuery,
} = HousesApi;
