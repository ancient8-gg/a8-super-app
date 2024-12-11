import { Flex, Typography, Image } from 'antd'

import CardWidget from './CardWidget'

import GameProtocolImg from '@/assets/img/widget/games.png'

function GameProtocolWidget() {
  return (
    <CardWidget classname="h-[262px] !p-0">
      <Flex align="center" justify="space-between" className="h-full px-6">
        <Flex vertical gap={12}>
          <Typography.Text className="title-gradient text-[22px]/[22px] font-bold">
            Games
            <br />
            Protocols
          </Typography.Text>

          <Typography.Text className="text-white/50 leading-4 font-medium">
            50+ Games &
            <br />
            Protocols
            <br />
            on Ancient8
          </Typography.Text>
        </Flex>

        <Image
          className="!h-[262px]"
          src={GameProtocolImg.src}
          alt="games-protocol"
          preview={false}
        />
      </Flex>
    </CardWidget>
  )
}

export default GameProtocolWidget
