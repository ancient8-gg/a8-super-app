import { Flex, Typography, Button, Image } from 'antd'

import LinkExternal from '@/components/systems/link-external'
import CardWidget from './CardWidget'

import { APP_ROUTES } from '@/constants'

import A8TokenRound from '@/assets/icon/token/a8-token-round.png'

function StakingWidget() {
  return (
    <CardWidget bgGradient classname="h-[380px] mobile:h-[183px]">
      <Flex vertical justify="space-between" className="h-full">
        <Flex vertical gap={24} align="center">
          <Typography.Text className="title-gradient text-[22px]/[26px] mobile:text-[18px]/[22px] font-bold">
            Staking
          </Typography.Text>

          <Image
            rootClassName="w-[100px] h-[100px] mobile:w-[45px] mobile:h-[45px] backdrop-blur-md rounded-full"
            src={A8TokenRound.src}
            alt="a8-token-round"
            preview={false}
          />
        </Flex>

        <Flex
          className="justify-between mobile:justify-center"
          align="flex-end"
        >
          <Flex vertical className="mobile:hidden">
            <Typography.Text className="text-[#F1F2F3] font-bold text-[42px]">
              10M+
            </Typography.Text>

            <Typography.Text className="text-xl text-white/30">
              $A8 Staked
            </Typography.Text>
          </Flex>

          <LinkExternal href={APP_ROUTES.STAKING}>
            <Button
              type="primary"
              className="h-[52px] mobile:h-[36px] mobile:text-sm font-bold uppercase"
            >
              Stake Now
            </Button>
          </LinkExternal>
        </Flex>
      </Flex>
    </CardWidget>
  )
}

export default StakingWidget
