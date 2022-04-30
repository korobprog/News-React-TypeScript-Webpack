import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = '19fda756c8a34265b57408e22f7241cb'

export const newsApi = createApi({
  reducerPath: 'getNews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/top-headlines/sources?',
  }),
  endpoints: (builder) => ({
    newsApi: builder.query({
      query: () => `$urlToImage&=apiKey=${apiKey}`,
    }),
  }),
})

export const { useNewsApiQuery } = newsApi
