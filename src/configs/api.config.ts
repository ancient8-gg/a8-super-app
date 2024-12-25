type ApiConfig = {
  strapiApi: string
  orderbookApi: string
  statisticApi: string
}

export const apiConfig: ApiConfig = {
  strapiApi: process.env.NEXT_PUBLIC_STRAPI_API as string,
  orderbookApi: process.env.NEXT_PUBLIC_ORDERBOOK_API as string,
  statisticApi: process.env.NEXT_PUBLIC_STATISTIC_API as string,
}
