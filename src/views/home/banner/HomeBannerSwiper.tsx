import { useMemo, useState, Fragment } from 'react'

import { Image, Button } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { ArrowLeft } from 'iconsax-react'

import type { HomeBanner } from '@/types'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './home-banner-swiper.scss'

type HomeBannerSwiperProps = {
  items: HomeBanner[]
  setActiveIdx: (idx: number) => void
}

function HomeBannerSwiper({ items, setActiveIdx }: HomeBannerSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const validItems = useMemo(() => items.filter((e) => !!e), [items])

  if (!validItems.length) return null

  return (
    <div className="banner-swiper-container">
      <div className="relative">
        <Swiper
          className="banner-swiper-thumb"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={({ activeIndex }) => setActiveIdx(activeIndex)}
          onActiveIndexChange={({ activeIndex }) => setActiveIdx(activeIndex)}
          navigation={{
            nextEl: '.banner-swiper-nav-btn-next',
            prevEl: '.banner-swiper-nav-btn-prev',
          }}
        >
          {validItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={item.image}
                alt="game-banner"
                preview={false}
                rootClassName="w-full"
                className="aspect-[36/10] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Fragment>
          <Button className="banner-swiper-nav-btn banner-swiper-nav-btn-prev">
            <ArrowLeft size="24" />
          </Button>
          <Button className="banner-swiper-nav-btn banner-swiper-nav-btn-next">
            <ArrowLeft size="24" className="rotate-180" />
          </Button>
        </Fragment>
      </div>

      <Swiper
        className="banner-swiper-nav"
        id="banner-swiper-list"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        modules={[FreeMode, Thumbs]}
        freeMode
        watchSlidesProgress
        centerInsufficientSlides
      >
        {validItems.map((item, idx) => (
          <SwiperSlide key={idx} className="!w-fit">
            <Image
              src={item.image}
              alt="game-banner"
              preview={false}
              rootClassName="banner-nav-img w-[170px]"
              className="aspect-[17/10] !h-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeBannerSwiper
