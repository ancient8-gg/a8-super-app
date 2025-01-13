import Link from 'next/link'

import { Col, Flex, Image, Row, Typography } from 'antd'

import { A8TokenIcon, VerifiedIcon } from '@/components/icons'

import { useNftMetrics } from '@/hooks/nft-collection/useNftMetrics'

import locationConfig from '@/configs/location.config'
import { TokenSymbol } from '@/constants'

import { INftCollection } from '@/types/nft-collection.type'

type NftCollectionCardProps = {
  nftDetails: INftCollection
}

function NftCollectionCard({ nftDetails }: NftCollectionCardProps) {
  const { priceToShow, priceUsdToShow, volumeToShow, volumeUsdToShow } =
    useNftMetrics(nftDetails.slug, nftDetails.address, TokenSymbol.A8)

  return (
    <Link
      href={`${locationConfig.nftMarketplace}/collections/${nftDetails.slug}`}
      className="nft-collection-card"
    >
      <div className="nft-collection-card--inner flex-[0_0_auto] inline-block w-[392px] mobile:w-[244px] h-[528px] mobile:h-[336px] rounded-2xl p-8 mobile:p-5">
        <Row gutter={[0, { lg: 23, sm: 14, xs: 14 }]}>
          <Col span={24}>
            <Flex gap={6} align="center" className="h-[26px] mobile:h-[18px] ">
              <Typography.Paragraph
                className="text-[#F5F6F7] text-2xl mobile:text-base leading-[1.1] font-bold !mb-0"
                ellipsis={{ rows: 1, tooltip: nftDetails.name }}
              >
                {nftDetails.name}
              </Typography.Paragraph>
              <VerifiedIcon className="mobile:w-4 mobile:h-4" />
            </Flex>
          </Col>
          <Col span={24} className="px-5 h-[326px] mobile:h-[186px]">
            <Image
              src={nftDetails.thumbnail.url}
              width="100%"
              height="100%"
              alt="nft-collection-thumbnail"
              preview={false}
              className="rounded-xl object-cover"
            />
          </Col>

          <Col span={24}>
            <Row gutter={[{ lg: 0, sm: 20, xs: 20 }, 0]}>
              <Col span={12} className="pl-5 mobile:pl-0">
                <Flex vertical className="h-[64px]">
                  <Typography.Text
                    type="secondary"
                    className="text-[13px] mobile:text-xs leading-[1.2]"
                  >
                    FLOOR PRICE
                  </Typography.Text>
                  <Flex vertical gap={6}>
                    <Flex
                      gap={4}
                      className="mt-2 mb-1 font-bold text-md"
                      align="center"
                    >
                      <Typography.Text>{priceToShow}</Typography.Text>
                      <A8TokenIcon size={16} />
                    </Flex>
                    <Typography.Text className="text-[#888E8F] text-[12px]">
                      {priceUsdToShow}
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Col>
              <Col span={12}>
                <Flex vertical className="h-[64px]">
                  <Typography.Text
                    type="secondary"
                    className="text-[13px] mobile:text-xs leading-[1.2]"
                  >
                    TOTAL VOLUME
                  </Typography.Text>
                  <Flex vertical gap={6}>
                    <Flex
                      gap={4}
                      className="mt-2 mb-1 font-bold text-md mobile:text-sm leading-[1.4]"
                      align="center"
                    >
                      <Typography.Text>{volumeToShow}</Typography.Text>
                      <A8TokenIcon size={16} />
                    </Flex>
                    <Typography.Text className="text-[#888E8F] text-[12px]">
                      {volumeUsdToShow}
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Link>
  )
}

export default NftCollectionCard
