import { Flex, Typography, Button, Image } from 'antd'
import Icon from '@ant-design/icons'

import LinkExternal from '@/components/systems/link-external'
import CardWidget from './CardWidget'

import { APP_ROUTES } from '@/constants'

import { FireIcon, VerifyIcon } from '@/assets/icon'

import A8Token from '@/assets/icon/token/token-a8.png'
import NftThumbnail from '@/assets/img/widget/nft-thumbnail.jpeg'

import './marketplace-widget.scss'

function CardNft() {
  return (
    <Flex vertical className="card-nft" gap={12}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={13}>
          <Image
            src={NftThumbnail.src}
            className="rounded-lg w-10 !h-10"
            alt="nft-thumbnail"
            preview={false}
          />

          <Flex align="center" gap={4}>
            <Typography.Text className="font-bold text-white">
              Hairy The Bene
            </Typography.Text>
            <Icon component={VerifyIcon} />
          </Flex>
        </Flex>

        <Icon component={FireIcon} />
      </Flex>

      <Flex justify="space-between">
        <Flex vertical gap={4}>
          <Typography.Text className="text-[13px] text-[#888E8F]">
            Floor Price
          </Typography.Text>

          <Flex align="center" gap={4}>
            <Typography.Text className="text-[13px]">10008</Typography.Text>

            <Image
              src={A8Token.src}
              className="w-[14px] !h-[14px]"
              alt="a8-token"
              preview={false}
            />

            <Typography.Text className="text-[13px] text-[#888E8F]">
              ~1000 $
            </Typography.Text>
          </Flex>
        </Flex>

        <Flex vertical gap={4}>
          <Typography.Text className="text-[13px] text-[#888E8F]">
            Volume
          </Typography.Text>

          <Flex align="center" gap={4}>
            <Typography.Text className="text-[13px]">10008</Typography.Text>

            <Image
              src={A8Token.src}
              className="w-[14px] !h-[14px]"
              alt="a8-token"
              preview={false}
            />

            <Typography.Text className="text-[13px] text-[#888E8F]">
              ~1000 $
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

function MarketplaceWidget() {
  return (
    <CardWidget classname="h-[380px] mobile:h-[340px]">
      <Flex vertical justify="space-between" className="h-full">
        <Flex justify="space-between" align="center">
          <Typography.Text className="title-gradient text-[22px]/[40px] mobile:text-[18px]/[22px] font-bold">
            Marketplace
          </Typography.Text>

          <LinkExternal href={APP_ROUTES.MARKETPLACE}>
            <Button type="primary" className="h-10 w-[128px] font-bold">
              EXPLORE
            </Button>
          </LinkExternal>
        </Flex>

        <Flex vertical gap={12}>
          {/*TODO: mapping later*/}
          <CardNft />
          <CardNft />
        </Flex>
      </Flex>
    </CardWidget>
  )
}

export default MarketplaceWidget
