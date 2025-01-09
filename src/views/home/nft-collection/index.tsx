import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'iconsax-react'
import clsx from 'clsx'

import { Col, Flex, Row, Typography } from 'antd'

import NftCollectionCard from './NftCollectionCard'
import SectionTitle from '@/components/section-title'
import NavigateButton from '@/components/navigate-button/NavigateButton'

import { useNftCollections } from '@/hooks/nft-collection/useNftCollections'
import { useCustomSwiper } from '@/hooks/custom-swiper/useCustomSwiper'
import useIsMobile from '@/hooks/useIsMobile'

import locationConfig from '@/configs/location.config'
import { NftCollectionSort } from '@/types/nft-collection.type'

import './index.scss'

function NftCollection() {
  const { data: nftCollections } = useNftCollections({
    sort: NftCollectionSort.PRIORITY,
  })
  const isMobile = useIsMobile()

  const {
    showNavigate,
    prevActive,
    nextActive,
    onPrev,
    onNext,
    scrollRef,
    checkPrevAndNextState,
  } = useCustomSwiper({
    cardWidth: 418,
    totalSlide: nftCollections.length,
    gap: 24,
  })

  return (
    <Row
      gutter={[0, { lg: 60, sm: 24, xs: 24 }]}
      className="nft-collection-container"
    >
      <Col span={24}>
        <Flex justify="space-between">
          <SectionTitle title="NFT Collections" />
          {!isMobile && (
            <Link
              href={locationConfig.nftMarketplace}
              target="_blank"
              className={clsx(
                'flex items-center gap-[10px]',
                'uppercase text-lg mobile:text-sm text-[#F1F2F3] leading-[1.1] font-bold',
                'hover:!bg-transparent hover:!text-primary',
              )}
            >
              View more
              <ArrowRight size="24" />
            </Link>
          )}
        </Flex>
      </Col>
      <Col span={24}>
        <Flex vertical gap={24}>
          <Flex
            className="w-full overflow-x-scroll hide-scrollbar"
            wrap={false}
            gap={24}
            ref={scrollRef}
            onScroll={checkPrevAndNextState}
          >
            {nftCollections.map((item) => (
              <NftCollectionCard key={item.id} nftDetails={item} />
            ))}
          </Flex>

          {showNavigate && (
            <Flex justify="center" className="mobile:hidden" gap={12}>
              <NavigateButton active={prevActive} onClick={onPrev} isPrev />
              <NavigateButton active={nextActive} onClick={onNext} />
            </Flex>
          )}

          {isMobile && (
            <Link
              href={locationConfig.nftMarketplace}
              target="_self"
              className="flex items-center justify-center gap-[10px]"
            >
              <Typography.Text className="uppercase text-lg mobile:text-sm text-[#F1F2F3] leading-[1.1] font-bold">
                View more
              </Typography.Text>
              <ArrowRight size="18" color="#F1F2F3" />
            </Link>
          )}
        </Flex>
      </Col>
    </Row>
  )
}

export default NftCollection
