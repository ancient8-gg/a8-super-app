import { useState } from 'react'

import { Flex, Typography, Button } from 'antd'
import { Menu as MenuIcon, ArrowRight } from 'iconsax-react'

import LinkExternal from '@/components/systems/link-external'
import SectionTitle from '@/components/section-title'
import HomeBannerSwiper from './HomeBannerSwiper'

import { useHomeBanners } from '@/hooks/home-banner/useHomeBanners'

import './index.scss'

const BannerSection = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const { data } = useHomeBanners()

  const gameActive = data?.[activeIdx]

  return (
    <Flex vertical className="banner-section" gap={20}>
      <Flex align="center" className="game-project-name w-fit" gap={10}>
        <MenuIcon size="12" variant="Bold" />
        <Typography.Text className="text-[#0A0A0A] font-bold text-sm">
          {gameActive?.spotlight}
        </Typography.Text>
        <MenuIcon size="12" variant="Bold" />
      </Flex>

      <Flex className="justify-between items-end mobile:flex-col mobile:items-start mobile:gap-5">
        <SectionTitle
          title={gameActive?.title}
          className="h-[120px] mobile:h-fit"
        />

        <LinkExternal
          href={gameActive?.actionUrl ?? ''}
          className="mobile:w-full"
        >
          <Button className="rounded-full border-primary bg-transparent text-primary h-10 px-5 mobile:w-full">
            Explore <ArrowRight size="24" />
          </Button>
        </LinkExternal>
      </Flex>

      <HomeBannerSwiper items={data} setActiveIdx={setActiveIdx} />
    </Flex>
  )
}

export default BannerSection
