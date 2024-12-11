import Link from 'next/link'
import { useMemo } from 'react'

import { Flex, Image, Typography } from 'antd'

import { ViewMoreIcon } from '@/components/icons'
import SwiperSlides from '@/components/swiper/SwiperSlides'

import { useGamesBlog } from '@/hooks/game-blog/useGameBlogs'
import useIsMobile from '@/hooks/useIsMobile'

import { APP_ROUTES } from '@/constants'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './game-blog.scss'

function GameBlogSection() {
  const isMobile = useIsMobile()

  const { data: gameBlogsData } = useGamesBlog()

  const gameBlogs = useMemo(() => {
    return gameBlogsData.map((item) => (
      <div className="game-blog__item" key={item.id}>
        <Flex className="mobile:flex-col mobile:items-center gap-10 mobile:gap-4 w-full">
          <div className="game-thumbnail h-[388px] mobile:h-[217px]">
            <Image
              src={item.thumbnail.url}
              width="100%"
              height="100%"
              alt="game-thumbnail"
              preview={false}
              className="object-cover"
            />
          </div>

          <Flex
            vertical
            justify="space-between"
            className="mobile:gap-4 flex-1"
          >
            <Flex className="gap-5 mobile:gap-3" vertical>
              <Typography.Text className="text-[#D8FF76] text-lg mobile:text-[13px] font-medium uppercase leading-[1.1]">
                {item.spotlight}
              </Typography.Text>

              <Flex vertical className="gap-3 mobile:gap-1">
                <Typography.Text className="text-[#F1F2F3] text-2xl mobile:text-lg font-bold uppercase leading-[1.1]">
                  {item.title}
                </Typography.Text>
                <Typography.Paragraph className="text-[#C4C6CD] text-base mobile:text-sm leading-[1.4] !mb-0">
                  {item.description}
                </Typography.Paragraph>
              </Flex>
            </Flex>
            <Link
              href={{
                pathname: APP_ROUTES.GAME_BLOG_DETAIL,
                query: {
                  blogId: item.slug,
                },
              }}
              className="flex justify-center items-center mobile:w-[343px] h-[48px] rounded-3xl bg-[#D8FF76] hover:!bg-[#C7F651] gap-[6px]"
              target="_blank"
            >
              <Typography.Text className="!text-[#090A0B] text-base leading-[1.3] font-bold">
                View
              </Typography.Text>
              <ViewMoreIcon />
            </Link>
          </Flex>
        </Flex>
      </div>
    ))
  }, [gameBlogsData])

  return (
    <div className="game-blog-container">
      <SwiperSlides
        items={gameBlogs}
        slidesPerView={isMobile ? 1 : 1.33}
        pagination={true}
        showNavigationButtons={!isMobile}
        className="game-blog-swiper"
      />
    </div>
  )
}

export default GameBlogSection
