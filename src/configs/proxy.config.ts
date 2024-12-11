type ProxyConfig = {
  coingeckoProxy: string
}

export const proxyConfig: ProxyConfig = {
  coingeckoProxy: process.env.NEXT_PUBLIC_STATS_ANCIENT8_PROXY as string,
}
