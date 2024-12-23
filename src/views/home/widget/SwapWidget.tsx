import numbro from 'numbro'

import { Flex, Typography, Image, Divider } from 'antd'
import Icon from '@ant-design/icons'

import CardWidget from './CardWidget'

import { useUsdPrice } from '@/hooks/useUsdPrice'
import useIsMobile from '@/hooks/useIsMobile'

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
  const isMobile = useIsMobile()
  const { ancient8, ethereum } = useUsdPrice()

  if (isMobile)
    return (
      <CardWidget classname="h-full mobile:h-[171px]">
        <Flex
          vertical
          align="center"
          justify="space-between"
          className="h-full"
        >
          <Typography.Text className="title-gradient text-lg font-bold">
            Swap Token
          </Typography.Text>

          <Flex vertical gap={6}>
            <Flex
              align="center"
              justify="space-between"
              className="w-[140px] h-[34px] border border-white/12 rounded-full px-2 bg-white/3"
            >
              <Flex align="center" gap={8}>
                <Image
                  rootClassName="w-[18px] h-[18px]"
                  src={A8Token.src}
                  alt="a8-token"
                  preview={false}
                />

                <Typography.Text className="text-xs text-[#C4C6CD]">
                  ETH
                </Typography.Text>
              </Flex>

              <Typography.Text className="text-[13px] text-[#F1F2F3] font-medium">
                ${numbro(ancient8).format(numbroFormatCurrencyOptions)}
              </Typography.Text>
            </Flex>

            <Flex
              align="center"
              justify="space-between"
              className="w-[140px] h-[34px] border border-white/12 rounded-full px-2 bg-white/3"
            >
              <Flex align="center" gap={8}>
                <Image
                  rootClassName="w-[18px] h-[18px]"
                  src={EthToken.src}
                  alt="eth-token"
                  preview={false}
                />

                <Typography.Text className="text-xs text-[#C4C6CD]">
                  ETH
                </Typography.Text>
              </Flex>

              <Typography.Text className="text-[13px] text-[#F1F2F3] font-medium">
                ${numbro(ethereum).format(numbroFormatCurrencyOptions)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </CardWidget>
    )

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
