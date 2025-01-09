import { useMemo } from 'react'
import numbro from 'numbro'

import { useBestByCollection } from '@/hooks/listing/useBestListingByToken'
import { useCollectionVolume } from '@/hooks/statistic/useCollectionVolume'
import { useGetCoinUsdPrice } from '@/hooks/currency-pricing/useTokenUsdPrice'

import { formatPrice } from '@/utils/currency.util'
import { TokenSymbol } from '@/constants'

const MAX_VALUE_TO_SHOW = 1_000_000

const numbroFormatOptions: numbro.Format = {
  thousandSeparated: true,
  mantissa: 0,
  optionalMantissa: true,
  trimMantissa: true,
}

const numbroFormatCurrencyOptions: numbro.Format = {
  ...numbroFormatOptions,
  prefix: '~$',
}

const forceWholeNumber = (number: number) => {
  const str = number.toString()
  return str.split('.')[0]
}

export function useNftMetrics(
  slug: string,
  address: string,
  currency: TokenSymbol,
) {
  const { data: best } = useBestByCollection({ slug })
  const { data: volumeData } = useCollectionVolume({ address })
  const { data: coinUsdRate } = useGetCoinUsdPrice(currency)

  const price = useMemo(() => {
    if (!best?.listings || best.listings.length === 0) return null

    const rawPrice = best.listings[0].price.current.value
    const decimals = best.listings[0].price.current.decimals
    return formatPrice(rawPrice, decimals)
  }, [best])

  const { priceToShow, priceUsdToShow } = useMemo(() => {
    if (!price && price !== 0)
      return {
        priceToShow: '--',
        priceUsdToShow: '--',
      }

    const priceToShow = numbro(forceWholeNumber(price))
      .format({
        ...numbroFormatOptions,
        average: price >= MAX_VALUE_TO_SHOW,
      })
      .toUpperCase()

    const priceUsd = price * coinUsdRate

    const priceUsdToShow = numbro(forceWholeNumber(priceUsd))
      .format({
        ...numbroFormatCurrencyOptions,
        average: priceUsd >= MAX_VALUE_TO_SHOW,
      })
      .toUpperCase()

    return { priceToShow, priceUsdToShow }
  }, [coinUsdRate, price])

  const { volumeToShow, volumeUsdToShow } = useMemo(() => {
    if (!volumeData?.all?.volume && volumeData?.all?.volume !== 0)
      return {
        volumeToShow: '--',
        volumeUsdToShow: '--',
      }

    const volume = volumeData.all.volume

    const volumeToShow = numbro(forceWholeNumber(volume))
      .format({
        ...numbroFormatOptions,
        average: volume >= MAX_VALUE_TO_SHOW,
      })
      .toUpperCase()

    const priceUsd = volume * coinUsdRate

    const volumeUsdToShow = numbro(forceWholeNumber(priceUsd))
      .format({
        ...numbroFormatCurrencyOptions,
        average: priceUsd >= MAX_VALUE_TO_SHOW,
      })
      .toUpperCase()

    return { volumeToShow, volumeUsdToShow }
  }, [coinUsdRate, volumeData])

  return {
    priceToShow,
    priceUsdToShow,
    volumeToShow,
    volumeUsdToShow,
  }
}
