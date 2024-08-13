import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantesType } from '../Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestaurantesType[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<RestaurantesType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetCardapioQuery } = api

export default api
