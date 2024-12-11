type ApiConfig = {
  strapiApi: string
  bridgeApi: string
}

export const apiConfig: ApiConfig = {
  strapiApi: process.env.NEXT_PUBLIC_STRAPI_API as string,
  bridgeApi: process.env.NEXT_PUBLIC_BRIDGE_API as string,
}
