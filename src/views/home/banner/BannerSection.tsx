import { useState, useEffect } from 'react'

import { Flex, Typography, Button } from 'antd'
import { Menu as MenuIcon, ArrowRight } from 'iconsax-react'

import LinkExternal from '@/components/systems/link-external'
import SectionTitle from '@/components/section-title'
import HomeBannerSwiper from './HomeBannerSwiper'

import { useHomeBanners } from '@/hooks/home-banner/useHomeBanners'

import './index.scss'

const DEFAULT_GAME_ACTIVE = {
  title: 'The Multiverse of Ancient8 Gaming',
  actionUrl: 'https://ancient8.com',
}

const BannerSection = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [gameActive, setGameActive] = useState(DEFAULT_GAME_ACTIVE)

  const { data } = useHomeBanners()

  useEffect(() => {
    setGameActive(data?.[activeIdx] ?? DEFAULT_GAME_ACTIVE)
  }, [activeIdx, data])

  return (
    <Flex vertical className="banner-section" gap={20}>
      <Flex align="center" className="game-project-name w-fit" gap={10}>
        <MenuIcon size="12" variant="Bold" />
        <Typography.Text className="text-[#0A0A0A] font-bold text-sm">
          GAME PROJECT NAME
        </Typography.Text>
        <MenuIcon size="12" variant="Bold" />
      </Flex>

      <Flex className="justify-between items-end mobile:flex-col mobile:gap-5">
        <SectionTitle title={gameActive.title} />

        <LinkExternal
          href={gameActive.actionUrl ?? ''}
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
