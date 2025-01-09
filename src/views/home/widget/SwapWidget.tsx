import numbro from 'numbro'
import { useWindowSize } from 'react-use'

import { Flex, Typography, Image } from 'antd'

import CardWidget from './CardWidget'

import useIsMobile from '@/hooks/useIsMobile'
import { useGetCoinUsdPrice } from '@/hooks/currency-pricing/useTokenUsdPrice'

import Swap from '@/assets/img/widget/swap.png'
import EthToken from '@/assets/icon/token/token-eth.png'
import A8Token from '@/assets/icon/token/token-a8.png'

import { TokenSymbol, APP_ROUTES } from '@/constants'

const numbroFormatCurrencyOptions: numbro.Format = {
  thousandSeparated: true,
  mantissa: 2,
  optionalMantissa: true,
  trimMantissa: true,
}

function SwapWidget() {
  const isMobile = useIsMobile()
  const { width: windowWidth } = useWindowSize()

  const { data: ancient8 } = useGetCoinUsdPrice(TokenSymbol.A8)
  const { data: ethereum } = useGetCoinUsdPrice(TokenSymbol.ETH)

  if (isMobile)
    return (
      <CardWidget classname="!h-full mobile:!h-[171px]">
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
                  A8
                </Typography.Text>
              </Flex>

              <Typography.Text className="text-[13px] text-[#F1F2F3] font-medium">
                ${numbro(ancient8).format(numbroFormatCurrencyOptions)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </CardWidget>
    )

  return (
    <a href={APP_ROUTES.SWAP}>
      <CardWidget classname="!h-full !min-h-[262px]">
        <Flex vertical justify="space-between" className="h-full">
          <Flex justify="space-between" align="center">
            <Flex vertical gap={6}>
              <Typography.Text className="title-gradient text-2xl font-bold">
                Swap Token
              </Typography.Text>

              <Typography.Text className="text-white/50 text-base">
                Swap tokens on Ancient8 Chain
              </Typography.Text>
            </Flex>

            <Image
              rootClassName="w-[70px] h-[70px]"
              src={Swap.src}
              alt="swap"
              preview={false}
            />
          </Flex>

          <Flex
            justify="space-between"
            gap={8}
            vertical={
              (windowWidth < 1370 && windowWidth >= 1200) ||
              (windowWidth >= 992 && windowWidth < 1040)
            }
          >
            <Flex
              justify="space-between"
              align="center"
              gap={12}
              className="border border-white/12 rounded-full p-2 py-1.5 pr-3 bg-white/3 basis-1/2"
            >
              <Flex align="center" gap={8}>
                <Image
                  rootClassName="w-8 h-8"
                  src={EthToken.src}
                  alt="eth-token"
                  preview={false}
                />

                <Typography.Text className="text-base text-[#C4C6CD] font-medium">
                  ETH
                </Typography.Text>
              </Flex>

              <Typography.Text className="text-base text-[#F1F2F3] font-medium">
                ${numbro(ethereum).format(numbroFormatCurrencyOptions)}
              </Typography.Text>
            </Flex>

            <Flex
              justify="space-between"
              align="center"
              gap={12}
              className="border border-white/12 rounded-full p-2 py-1.5 pr-3 bg-white/3 basis-1/2"
            >
              <Flex align="center" gap={8}>
                <Image
                  rootClassName="w-8 h-8"
                  src={A8Token.src}
                  alt="a8-token"
                  preview={false}
                />

                <Typography.Text className="text-base text-[#C4C6CD] font-medium">
                  A8
                </Typography.Text>
              </Flex>

              <Typography.Text className="text-base text-[#F1F2F3] font-medium">
                ${numbro(ancient8).format(numbroFormatCurrencyOptions)}
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </CardWidget>
    </a>
  )
}

export default SwapWidget
