import { useMemo } from 'react'
import numbro from 'numbro'

import { Flex, Typography, Button, Image } from 'antd'
import Icon from '@ant-design/icons'

import CardWidget from './CardWidget'

import { useNftCollections } from '@/hooks/nft-collection/useNftCollections'
import { useBestByCollection } from '@/hooks/listing/useBestListingByToken'
import { useCollectionVolume } from '@/hooks/statistic/useCollectionVolume'
import { useGetCoinUsdPrice } from '@/hooks/currency-pricing/useTokenUsdPrice'
import { formatPrice } from '@/utils/currency.util'

import locationConfig from '@/configs/location.config'
import { APP_ROUTES, TokenSymbol } from '@/constants'

import { FireIcon, VerifyIcon } from '@/assets/icon'

import A8Token from '@/assets/icon/token/token-a8.png'
import NftThumbnail from '@/assets/img/widget/nft-thumbnail.jpeg'

import type { StrapiContent } from '@/types'
import type { INftCollection } from '@/types/nft-collection.type'

import './marketplace-widget.scss'

type CardNftProps = {
  collection: StrapiContent<INftCollection>
}

const numbroFormatCurrencyOptions: numbro.Format = {
  thousandSeparated: true,
  mantissa: 2,
  optionalMantissa: true,
  trimMantissa: true,
  prefix: '~$',
}

function CardNft({ collection }: CardNftProps) {
  const { data: best } = useBestByCollection({
    slug: collection.slug,
  })

  const { data: volumeData } = useCollectionVolume({
    address: collection.address,
  })

  const { data: coinUsdRate } = useGetCoinUsdPrice(
    volumeData?.['all']?.currency as TokenSymbol,
  )

  const price = useMemo(() => {
    if (!best?.listings || best.listings.length === 0) return null

    const rawPrice = best.listings[0].price.current.value
    const decimals = best.listings[0].price.current.decimals
    return formatPrice(rawPrice, decimals)
  }, [best])

  return (
    <a href={`${locationConfig.nftMarketplace}/collections/${collection.slug}`}>
      <Flex vertical className="card-nft" gap={12}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={13}>
            <Image
              src={collection.thumbnail.url ?? NftThumbnail.src}
              className="rounded-lg !w-10 !h-10 aspect-square object-cover"
              alt="nft-thumbnail"
              preview={false}
            />

            <Flex align="center" gap={4}>
              <Typography.Text className="font-bold text-white">
                {collection.name ?? 'Hairy The Bene'}
              </Typography.Text>
              <Icon component={VerifyIcon} />
            </Flex>
          </Flex>

          <Icon component={FireIcon} />
        </Flex>

        <Flex justify="space-between">
          <Flex vertical gap={4}>
            <Typography.Text className="text-[13px] text-[#888E8F]">
              Floor Price
            </Typography.Text>

            <Flex align="center" gap={4}>
              <Typography.Text className="text-[13px]">
                {price !== null ? price : '--'}
              </Typography.Text>

              <Image
                src={A8Token.src}
                className="!w-[14px] !h-[14px]"
                alt="a8-token"
                preview={false}
              />

              <Typography.Text className="text-[13px] text-[#888E8F]">
                {price !== null
                  ? numbro((price ?? 0) * coinUsdRate).format(
                      numbroFormatCurrencyOptions,
                    )
                  : '--'}
              </Typography.Text>
            </Flex>
          </Flex>

          <Flex vertical gap={4}>
            <Typography.Text className="text-[13px] text-[#888E8F]">
              Volume
            </Typography.Text>

            <Flex align="center" gap={4}>
              <Typography.Text className="text-[13px]">
                {volumeData?.['all']?.volume ?? '--'}
              </Typography.Text>

              <Image
                src={A8Token.src}
                className="!w-[14px] !h-[14px]"
                alt="a8-token"
                preview={false}
              />

              <Typography.Text className="text-[13px] text-[#888E8F]">
                {volumeData?.['all']?.volume !== null
                  ? numbro(
                      (volumeData?.['all']?.volume ?? 0) * coinUsdRate,
                    ).format(numbroFormatCurrencyOptions)
                  : '--'}
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </a>
  )
}

function MarketplaceWidget() {
  const { data: nftCollections } = useNftCollections()

  return (
    <CardWidget classname="h-[380px] mobile:h-[340px]">
      <Flex vertical justify="space-between" className="h-full">
        <Flex justify="space-between" align="center">
          <Typography.Text className="title-gradient text-[22px]/[40px] mobile:text-[18px]/[22px] font-bold">
            Marketplace
          </Typography.Text>

          <a href={APP_ROUTES.MARKETPLACE}>
            <Button type="primary" className="h-10 w-[128px] font-bold">
              EXPLORE
            </Button>
          </a>
        </Flex>

        <Flex vertical gap={12}>
          {nftCollections.slice(0, 2).map((collection, idx) => (
            <CardNft collection={collection} key={idx} />
          ))}
        </Flex>
      </Flex>
    </CardWidget>
  )
}

export default MarketplaceWidget
