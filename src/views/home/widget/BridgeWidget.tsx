import { Flex, Typography, Button, Image } from 'antd'

import CardWidget from './CardWidget'
import LinkExternal from '@/components/systems/link-external'

import useIsMobile from '@/hooks/useIsMobile'

import { APP_ROUTES } from '@/constants'

import EthTokenRound from '@/assets/icon/token/eth-token-round.png'
import A8TokenRound from '@/assets/icon/token/a8-token-round.png'
import UsdtTokenRound from '@/assets/icon/token/usdc-token-round.png'

function BridgeWidget() {
  const isMobile = useIsMobile()

  return (
    <CardWidget bgGradient classname="h-[380px] mobile:h-[183px]">
      <Flex vertical justify="space-between" align="center" className="h-full">
        <Flex vertical gap={24} align="center">
          <Typography.Text className="title-gradient text-[22px]/[26px] mobile:text-[18px]/[22px] font-bold">
            Bridge
          </Typography.Text>

          <div className="-space-x-8 mobile:-space-x-4">
            <Image
              rootClassName="w-[100px] h-[100px] mobile:w-[45px] mobile:h-[45px] backdrop-blur-md rounded-full"
              className="rounded-full"
              src={EthTokenRound.src}
              alt="eth-token-round"
              preview={false}
            />
            <Image
              rootClassName="w-[100px] h-[100px] mobile:w-[45px] mobile:h-[45px] backdrop-blur-md rounded-full z-10"
              className="rounded-full"
              src={A8TokenRound.src}
              alt="a8-token-round"
              preview={false}
            />
            <Image
              rootClassName="w-[100px] h-[100px] mobile:w-[45px] mobile:h-[45px] backdrop-blur-md rounded-full"
              className="rounded-full"
              src={UsdtTokenRound.src}
              alt="usdt-token-round"
              preview={false}
            />
          </div>
        </Flex>

        <LinkExternal href={APP_ROUTES.BRIDGE}>
          <Button
            type="primary"
            className="h-[52px] mobile:h-[36px] mobile:text-sm font-bold uppercase"
          >
            {!isMobile ? 'Explore all bridge routes >' : 'EXPLORE'}
          </Button>
        </LinkExternal>
      </Flex>
    </CardWidget>
  )
}

export default BridgeWidget
