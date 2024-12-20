import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

import { Flex, Image, Typography, Space } from 'antd'

import MarqueeComponent from '@/components/systems/marquee'
import { MarqueeContext } from '@/components/systems/marquee/MarqueeContext'

import type { StrapiContent } from '@/types'
import type { DAppType } from '@/types/dapp.type'

import './card-dapp.scss'

type CardDAppProps = {
  data: StrapiContent<DAppType>
}

function DAppTag({ title }: { title: string }) {
  return (
    <Flex
      className={clsx(
        'p-2.5 rounded border border-solid border-white/12',
        'text-base mobile:text-[13px] text-[#C4C6CD] whitespace-nowrap',
      )}
    >
      {title}
    </Flex>
  )
}

function CardDApp({ data }: CardDAppProps) {
  const { title, description, thumbnail, tags, website } = data

  const [isHover, setIsHover] = useState(false)

  return (
    <MarqueeContext.Provider value={{ isHover, setIsHover }}>
      <Link href={website || ''} target="_blank">
        <Flex
          vertical
          className="card-dapp p-6"
          gap={24}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Flex
            align="center"
            className="card-dapp-thumbnail w-[44px] h-[44px]"
          >
            <Image
              rootClassName="w-full"
              src={thumbnail.url ?? ''}
              alt="dapp-thumbnail"
              preview={false}
            />
          </Flex>

          <Flex vertical gap={20}>
            <Flex vertical gap={12}>
              <Typography.Text className="text-2xl mobile:text-base uppercase font-bold text-ellipsis">
                {title}
              </Typography.Text>
              <Typography.Text className="text-base mobile:text-[13px] text-[rgba(241,241,241,0.70)] text-ellipsis">
                {description}
              </Typography.Text>
            </Flex>

            <MarqueeComponent>
              <Space className={clsx(isHover && 'mr-2')}>
                {tags.split(',').map((tag, index) => (
                  <DAppTag title={tag.trim()} key={index} />
                ))}
              </Space>
            </MarqueeComponent>
          </Flex>
        </Flex>
      </Link>
    </MarqueeContext.Provider>
  )
}

export default CardDApp
