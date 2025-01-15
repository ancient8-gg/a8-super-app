import { useState } from 'react'

import { Flex, Image, Typography } from 'antd'

import LinkExternal from '@/components/systems/link-external'
import MarqueeComponent from '@/components/systems/marquee'
import { MarqueeContext } from '@/components/systems/marquee/MarqueeContext'

import { IGame } from '@/types/game.type'

interface GameCardProps {
  gameDetails: IGame
}

function GameCard({ gameDetails }: GameCardProps) {
  const { title, genre, thumbnail, website } = gameDetails
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <LinkExternal href={website}>
      <MarqueeContext.Provider value={{ isHover, setIsHover }}>
        <div
          className="max-w-[312px] mobile:max-w-[165px] h-[432px] mobile:h-[230px] game-card"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Image
            src={thumbnail.url}
            alt={title}
            width="100%"
            height="100%"
            className="object-cover rounded-xl"
            preview={false}
          />
          <div className="w-full absolute z-10 bottom-[27px] mobile:bottom-[6px] left-2/4 -translate-x-2/4 h-[67px] mobile:h-[47px]">
            <Flex
              className="gap-3 mobile:gap-[6px] text-center"
              vertical
              justify="center"
            >
              <Typography.Text className="uppercase font-bold text-xl text-white mobile:text-sm !leading-[1.2]">
                {title}
              </Typography.Text>

              <MarqueeComponent>
                <Flex
                  className="game-category h-[31px] mobile:h-[24px] gap-2 mobile:gap-1"
                  justify="center"
                >
                  {genre?.map((item, index) => (
                    <Flex
                      className="game-category__item px-4 mobile:px-[6px] py-2 mobile:py-[6px]"
                      justify="center"
                      align="center"
                      key={index}
                    >
                      <Typography.Text className="text-sm mobile:text-[11px] font-normal leading-[1.1] text-[#E1E2E5] whitespace-nowrap">
                        {item}
                      </Typography.Text>
                    </Flex>
                  ))}
                </Flex>
              </MarqueeComponent>
            </Flex>
          </div>
        </div>
      </MarqueeContext.Provider>
    </LinkExternal>
  )
}

export default GameCard
