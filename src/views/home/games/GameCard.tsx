import Link from 'next/link'

import { Flex, Image, Typography } from 'antd'

import { APP_ROUTES } from '@/constants'

import { IGame } from '@/types/game.type'

interface GameCardProps {
  gameDetails: IGame
}

function GameCard({ gameDetails }: GameCardProps) {
  const { slug, title, thumbnail, genre } = gameDetails

  return (
    <Link
      href={{
        pathname: APP_ROUTES.GAME_DETAIL,
        query: {
          gameId: slug,
        },
      }}
      target="_blank"
    >
      <div className="max-w-[312px] mobile:w-[165px] h-[432px] mobile:h-[230px] game-card">
        <Image
          src={thumbnail.url}
          alt={title}
          width="100%"
          height="100%"
          className="object-cover rounded-xl"
          preview={false}
        />
        <div className="w-max absolute z-10 bottom-[27px] mobile:bottom-[5px] left-2/4 -translate-x-2/4">
          <Flex
            className="gap-3 mobile:gap-[6px] text-center"
            vertical
            justify="center"
          >
            <Typography.Text className="game-title uppercase font-bold text-xl text-white mobile:text-sm leading-[1.2]">
              {title}
            </Typography.Text>

            <Flex
              className="game-category h-[31px] gap-2 mobile:gap-1 mobile:h-[24px]"
              justify="center"
            >
              {genre.map((item, index) => (
                <Flex
                  className="game-category__item px-4 mobile:px-[6px] py-2 mobile:py-[6px]"
                  justify="center"
                  align="center"
                  key={index}
                >
                  <Typography.Text className="text-sm mobile:text-[11px] font-normal leading-[1.1] text-[#E1E2E5] break-normal">
                    {item}
                  </Typography.Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </div>
      </div>
    </Link>
  )
}

export default GameCard