type ApiConfig = {
  strapiApi: string
  orderbookApi: string
  statisticApi: string
  utilsApi: string
}

export const apiConfig: ApiConfig = {
  strapiApi: process.env.NEXT_PUBLIC_STRAPI_API as string,
  orderbookApi: process.env.NEXT_PUBLIC_ORDERBOOK_API as string,
  statisticApi: process.env.NEXT_PUBLIC_STATISTIC_API as string,
  utilsApi: process.env.NEXT_PUBLIC_UTILS_API as string,
}
