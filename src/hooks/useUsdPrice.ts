import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { apiConfig } from '@/configs'

export type TokenIdType = 'ethereum' | 'ancient8'

type ResType = Record<TokenIdType, { usd: number }>

export const useUsdPrice = () => {
  const { data: price } = useQuery({
    queryKey: ['usd-price'],
    initialData: {
      ancient8: { usd: 2.2 },
      ethereum: { usd: 2400 },
    } as ResType,
    queryFn: async () => {
      const { data } = await axios.get<ResType>(
        `${apiConfig.bridgeApi}/price`,
        {
          params: {
            ids: 'ancient8,ethereum',
            vs_currencies: 'usd',
          },
        },
      )
      return data
    },
    refetchIntervalInBackground: true,
    refetchInterval: 1000 * 60 * 5,
  })

  return {
    ancient8: price?.ancient8?.usd ?? 0,
    ethereum: price?.ethereum?.usd ?? 0,
  } as Record<TokenIdType, number>
}
