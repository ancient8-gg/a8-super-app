import { useMemo } from 'react'
import dayjs from 'dayjs'

import { Typography, Image, Flex } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import Socials, { SOCIAL_NAME } from './Socials'

import type { EventWidgetType } from '@/types/event-widget.type'
import type { StrapiContent } from '@/types'

import 'swiper/css'
import './event-swiper.scss'

type EventSwiperProps = {
  items: StrapiContent<EventWidgetType>[]
}

type EventCardProps = {
  data: StrapiContent<EventWidgetType>
}

function EventCard({ data }: EventCardProps) {
  const { title, startedAt, image } = data

  const socials = useMemo(() => {
    const { website, discord, telegram, x, youtube } = data

    const socials = [
      { name: SOCIAL_NAME.WEBSITE, url: website },
      { name: SOCIAL_NAME.DISCORD, url: discord },
      { name: SOCIAL_NAME.TELEGRAM, url: telegram },
      { name: SOCIAL_NAME.X, url: x },
      { name: SOCIAL_NAME.YOUTUBE, url: youtube },
    ]

    return socials.filter((s) => !!s.url)
  }, [data])

  return (
    <Flex vertical align="center" justify="space-between" className="h-full">
      <div className="event-swiper-card relative w-[250px] h-[150px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            rootClassName="absolute !h-full !w-full"
            className="!w-full !h-full object-cover"
            src={image?.url ?? ''}
            alt="event-img"
            preview={false}
          />
          <div className="image-mask"></div>
        </div>

        <Flex vertical className="absolute bottom-0 px-5 py-3">
          <Typography.Text className="text-ellipsis uppercase text-white text-lg font-bold">
            {title}
          </Typography.Text>

          <Typography.Text className="text-white text-xs">
            {dayjs(startedAt).format('MMMM D, YYYY')}
          </Typography.Text>
        </Flex>
      </div>

      <Socials socials={socials} />
    </Flex>
  )
}

function EventSwiper({ items }: EventSwiperProps) {
  const validItems = useMemo(() => items.filter((e) => !!e), [items])

  if (!validItems.length)
    return (
      <Flex className="h-[134px]" align="center">
        <Typography.Text className="text-[15px] font-medium uppercase">
          Updating event...
        </Typography.Text>
      </Flex>
    )

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      autoplay={{
        delay: 2500,
      }}
      slidesPerView="auto"
      spaceBetween={8}
      className="event-swiper"
      modules={[Autoplay]}
    >
      {validItems.map((item, idx) => (
        <SwiperSlide key={idx}>
          <EventCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default EventSwiper
