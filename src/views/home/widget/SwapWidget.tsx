import numbro from 'numbro'

import { Flex, Typography, Image, Divider } from 'antd'
import Icon from '@ant-design/icons'

import CardWidget from './CardWidget'

import { useUsdPrice } from '@/hooks/useUsdPrice'

import { Swap } from '@/assets/img/widget'
import EthToken from '@/assets/icon/token/token-eth.png'
import A8Token from '@/assets/icon/token/token-a8.png'

const numbroFormatCurrencyOptions: numbro.Format = {
  thousandSeparated: true,
  mantissa: 2,
  optionalMantissa: true,
  trimMantissa: true,
}

function SwapWidget() {
  const { ancient8, ethereum } = useUsdPrice()

  return (
    <CardWidget classname="h-full min-h-[262px]">
      <Flex vertical justify="space-between" className="h-full">
        <Flex justify="space-between" align="center">
          <Flex vertical gap={12}>
            <Typography.Text className="title-gradient text-2xl font-bold">
              Swap Token
            </Typography.Text>

            <Typography.Text className="text-white/50 text-base">
              Swap any ERC tokens
            </Typography.Text>
          </Flex>

          <Icon component={Swap} />
        </Flex>

        <Flex justify="space-between" className="w-full">
          <Flex align="center" gap={12}>
            <Flex align="center" gap={8}>
              <Image
                rootClassName="w-9 h-9"
                src={EthToken.src}
                alt="eth-token"
                preview={false}
              />

              <Typography.Text>ETH</Typography.Text>
            </Flex>

            <Typography.Text>
              ${numbro(ethereum).format(numbroFormatCurrencyOptions)}
            </Typography.Text>
          </Flex>

          <Divider type="vertical" className="h-[30px]" />

          <Flex align="center" gap={12}>
            <Flex align="center" gap={8}>
              <Image
                rootClassName="w-9 h-9"
                src={A8Token.src}
                alt="eth-token"
                preview={false}
              />

              <Typography.Text>ETH</Typography.Text>
            </Flex>

            <Typography.Text>
              ${numbro(ancient8).format(numbroFormatCurrencyOptions)}
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </CardWidget>
  )
}

export default SwapWidget
