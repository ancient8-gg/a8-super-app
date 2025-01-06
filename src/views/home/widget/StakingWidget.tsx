import { useQuery } from '@tanstack/react-query'
import { formatUnits } from 'viem'
import numbro from 'numbro'

import { Flex, Typography, Button, Image } from 'antd'

import CardWidget from './CardWidget'
import LinkExternal from '@/components/systems/link-external'

import locationConfig from '@/configs/location.config'

import A8TokenRound from '@/assets/icon/token/a8-token-round.png'
import BlockscoutService from '@/services/blockscout.service'

const STAKING_ADDRESS = '0xd42D4417D7f757BAD6A5EA5E40a53649fD50B349'
const A8_TOKEN_ADDRESS_ETH = '0x3E5A19c91266aD8cE2477B91585d1856B84062dF'

function StakingWidget() {
  const { data: a8Balance } = useQuery({
    queryKey: ['get-a8-balance'],
    initialData: '0',
    queryFn: async () => {
      const { data } = await BlockscoutService.getAddressTokenBalances(
        STAKING_ADDRESS,
      )

      const A8_TOKEN = data.find(
        (token) =>
          token.token.address.toLowerCase() ===
          A8_TOKEN_ADDRESS_ETH.toLowerCase(),
      )

      if (A8_TOKEN) {
        return formatUnits(
          BigInt(A8_TOKEN.value),
          Number(A8_TOKEN.token.decimals),
        )
      }

      return '0'
    },
  })

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
              {`${numbro(a8Balance).format({
                average: true,
                postfix: '+',
              })}`.toUpperCase()}
            </Typography.Text>

            <Typography.Text className="text-base text-white/50">
              $A8 Staked
            </Typography.Text>
          </Flex>

          <LinkExternal href={locationConfig.staking}>
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
