import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Response {
  status: string
  totalResults: number
  articles: Articles[]
}

export interface Articles {
  source: Source
  author: null | string
  title: string
  description: string
  url: string
  urlToImage: null | string
  publishedAt: Date
  content: string
}

export interface Source {
  id: null | string
  name: string
}

export const newsApi = createApi({
  reducerPath: 'getNews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/top-headlines/',
  }),
  endpoints: (builder) => ({
    newsApi: builder.query<Articles[], string>({
      query: (title) => ({
        url: '/',
        params: {
          apiKey: '19fda756c8a34265b57408e22f7241cb', //import.meta.env.REACT_APP_NEWS_API_KEY,
          q: title,
          plot: 'full',
        },
      }),
      transformResponse: (response: Response) => response.articles,
    }),
  }),
})

export const { useNewsApiQuery } = newsApi
