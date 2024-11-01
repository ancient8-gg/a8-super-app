type ApiConfig = {
  strapiApi: string
}

export const apiConfig: ApiConfig = {
  strapiApi: process.env.NEXT_PUBLIC_STRAPI_API as string,
}
