import { useQuery } from '@tanstack/react-query'

import { coinPriceService } from '@/services'

import {
  QUERY_KEY,
  TIME_CACHE_PROXY_COINGECKO,
  TokenCoingeckoId,
  TokenSymbol,
} from '@/constants'

export const useGetCoinUsdPrice = (token?: TokenSymbol) => {
  const coingeckoId = token ? TokenCoingeckoId[token] : ''

  const { data, ...rest } = useQuery({
    queryKey: [QUERY_KEY.GET_COIN_USD_PRICE, token],
    queryFn: () => coinPriceService.fetchUsdPrice(coingeckoId),
    staleTime: TIME_CACHE_PROXY_COINGECKO,
    enabled: !!token,
  })

  return { data: data?.[coingeckoId]?.usd ?? 0, ...rest }
}
