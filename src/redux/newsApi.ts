import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface TopLevel {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author: null | string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: string
}

export interface Source {
  id: null | string
  name: string
}

export interface Params {
  to?: string
  from?: string
  page?: number
}

export enum Type {
  News = 'getNews',
}
export interface Page {
  page?: number
  pageSize?: number
}

export const newsApi = createApi({
  reducerPath: 'getNews',
  refetchOnFocus: true,
  tagTypes: ['getNews'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/everything',
  }),
  //https://newsapi.org/v2/everything/?q=russia&language
  endpoints: (builder) => ({
    newsApi: builder.query<Article[], Params>({
      query: ({ from, to, page }) => ({
        url: '/',
        params: {
          language: 'ru',
          q: 'ru',
          apiKey: 'a05140dd572a42c0a35b254e46c0bd0b', //import.meta.env.REACT_APP_NEWS_API_KEY, 19fda756c8a34265b57408e22f7241cb
          from,
          to,
          page,
        },
      }),
      transformResponse: (response: TopLevel) => response.articles,
    }),
  }),
})

export const { useNewsApiQuery } = newsApi

//19fda756c8a34265b57408e22f7241cb
