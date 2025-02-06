import React from 'react'

import { Button, Col, Flex, Image, Row, Typography } from 'antd'

import SectionTitle from '@/components/section-title'
import { A8TokenIcon, EthereumIcon } from '@/components/icons'

import GameTokensImg from '@/assets/img/game-tokens.png'

// TODO: DUMMY DATA, mapping later
const listTokens = [
  {
    icon: <A8TokenIcon size={20} />,
    symbol: 'A8',
    chainName: 'Ancient8',
  },
  {
    icon: <EthereumIcon size={20} />,
    symbol: 'ETH',
    chainName: 'Ethereum',
  },
]

function GameTokens() {
  return (
    <Flex justify="space-between">
      <Flex
        className="gap-10 mobile:gap-5 mt-[64px] mobile:mt-0 mobile:w-full"
        vertical
      >
        <Flex justify="space-between" gap={8} vertical>
          <SectionTitle
            title="Game Tokens"
            className="!text-[42px] !font-bold"
          />
          <Typography.Text className="hidden mobile:block text-sm leading-[142%] text-[#ffffff99]">
            The Beacon is a fast-paced, action-heavy fantasy roguelite RPG,
          </Typography.Text>
        </Flex>

        <Row className="gap-5 mobile:gap-3 mobile:flex-col max-w-[860px] mobile:max-w-full">
          {listTokens.map((token, index) => (
            <Col key={index}>
              <Flex
                className="p-8 mobile:p-4 rounded-lg border-[1px] border-[#ffffff14] hover:bg-[#ffffff14] min-w-[420px] mobile:min-w-[343px]"
                justify="space-between"
                align="center"
              >
                <Flex vertical gap={6}>
                  <Flex className="gap-2 mobile:gap-1" align="center">
                    {token.icon}
                    <Typography.Text>{token.symbol}</Typography.Text>
                  </Flex>

                  <Typography.Text>{token.chainName}</Typography.Text>
                </Flex>
                <Button
                  target="_blank"
                  className="px-4 py-3 rounded-md bg-[#D8FF76] hover:!bg-[#C7F651] h-[48px] mobile:h-[40px]"
                >
                  <Typography.Text className="text-base mobile:text-[15px] font-bold leading-[1.4] mobile:leading-[1.3] text-[#000]">
                    Trade Now
                  </Typography.Text>
                </Button>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>

      <Image
        src={GameTokensImg.src}
        alt="Game Tokens"
        preview={false}
        className="!h-[422px] mobile:hidden"
      />
    </Flex>
  )
}

export default GameTokens
