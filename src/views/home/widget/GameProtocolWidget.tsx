import { Flex, Typography, Image } from 'antd'

import CardWidget from './CardWidget'

import useIsMobile from '@/hooks/useIsMobile'

import GameProtocolImg from '@/assets/img/widget/games.png'
import GameProtocolMobileImg from '@/assets/img/widget/game-mobile.png'

function GameProtocolWidget() {
  const isMobile = useIsMobile()

  if (isMobile)
    return (
      <CardWidget classname="!h-[262px] mobile:!h-[171px]">
        <Flex vertical gap={10} className="h-full overflow-hidden">
          <Typography.Text className="title-gradient text-lg leading-[1] font-bold text-center">
            Games
            <br />
            Protocols
          </Typography.Text>

          <Image
            className="w-full object-cover"
            src={GameProtocolMobileImg.src}
            alt="games-protocol"
            preview={false}
          />
        </Flex>
      </CardWidget>
    )

  return (
    <CardWidget classname="!h-[262px] !p-0 overflow-hidden">
      <Flex align="center" justify="space-between" className="h-full px-6">
        <Flex vertical gap={12}>
          <Typography.Text className="title-gradient text-[22px]/[22px] font-bold">
            Games
            <br />
            Protocols
          </Typography.Text>

          <Typography.Text className="text-white/50 leading-4">
            50+ Games &
            <br />
            Protocols
            <br />
            on Ancient8
          </Typography.Text>
        </Flex>

        <Image
          className="!h-[262px] !w-[unset]"
          src={GameProtocolImg.src}
          alt="games-protocol"
          preview={false}
        />
      </Flex>
    </CardWidget>
  )
}

export default GameProtocolWidget
