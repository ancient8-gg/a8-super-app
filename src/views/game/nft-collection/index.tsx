import React from 'react'

import { Col, Flex, Row, Typography } from 'antd'

import NftCollectionCard from '@/components/nft-collection-card'
import SectionTitle from '@/components/section-title'
import NavigateButton from '@/components/navigate-button/NavigateButton'

import { useNftCollections } from '@/hooks/nft-collection/useNftCollections'
import { useCustomSwiper } from '@/hooks/custom-swiper/useCustomSwiper'

import { NftCollectionSort } from '@/types/nft-collection.type'

function NftCollection() {
  // TODO: use temporary hook to show data, mapping data later
  const { data: nftCollections } = useNftCollections({
    sort: NftCollectionSort.PRIORITY,
  })

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
      gutter={[0, { lg: 40, sm: 20, xs: 20 }]}
      className="nft-collection-container"
    >
      <Col span={24}>
        <Flex justify="space-between" gap={8} vertical>
          <SectionTitle
            title="NFT Collections"
            className="!text-[42px] !font-bold"
          />

          <Typography.Text className="hidden mobile:block text-sm leading-[142%] text-[#ffffff99]">
            All Collection using this game
          </Typography.Text>
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
        </Flex>
      </Col>
    </Row>
  )
}

export default NftCollection
