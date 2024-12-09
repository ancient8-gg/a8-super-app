import { useState, useEffect } from 'react'

import { Flex, Typography, Button } from 'antd'
import { Menu, ArrowRight } from 'iconsax-react'

import LinkExternal from '@/components/systems/link-external'
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
        <Menu size="12" variant="Bold" />
        <Typography.Text className="text-[#0A0A0A] font-bold text-sm">
          GAME PROJECT NAME
        </Typography.Text>
        <Menu size="12" variant="Bold" />
      </Flex>

      <Flex justify="space-between" align="flex-end">
        <Typography.Text className="banner-title w-[524px]">
          {gameActive.title}
        </Typography.Text>

        <LinkExternal href={gameActive.actionUrl ?? ''}>
          <Button className="rounded-full border-primary text-primary h-10 px-5">
            Explore <ArrowRight size="24" />
          </Button>
        </LinkExternal>
      </Flex>

      <HomeBannerSwiper items={data} setActiveIdx={setActiveIdx} />
    </Flex>
  )
}

export default BannerSection
