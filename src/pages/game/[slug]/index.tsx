import React from 'react'

import { Flex } from 'antd'

import { getMainLayout } from '@/layouts'
import GameTokens from '@/views/game/tokens'
import NftCollection from '@/views/game/nft-collection'

export default function GameDetails() {
  return (
    <Flex vertical className="game-details gap-[100px] mobile:gap-12">
      <GameTokens />

      <NftCollection />
    </Flex>
  )
}

GameDetails.getLayout = getMainLayout
