import axios from 'axios'

import { proxyConfig } from '@/configs'

const coingeckoProxy = `${proxyConfig.coingeckoProxy}/coingecko/simple/price`

interface CoinPriceResponseType {
  [key: string]: {
    usd: number
  }
}

class CoinPriceService {
  async fetchUsdPrice(coingeckoId: string): Promise<CoinPriceResponseType> {
    try {
      const { data } = await axios.get(coingeckoProxy, {
        params: {
          ids: coingeckoId,
          vs_currencies: 'usd',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return data
    } catch {
      return { [coingeckoId]: { usd: 0 } }
    }
  }
}

export const coinPriceService = new CoinPriceService()
