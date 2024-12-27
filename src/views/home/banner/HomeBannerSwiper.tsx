import { useMemo, useState, Fragment } from 'react'

import { Image, Button } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
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
  const [autoplayPercentage, setAutoplayPercentage] = useState(0)

  const validItems = useMemo(() => items.filter((e) => !!e), [items])

  if (!validItems.length) return null

  return (
    <div className="banner-swiper-container">
      <div className="relative">
        <Swiper
          className="banner-swiper-thumb"
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          onSlideChange={({ activeIndex }) => setActiveIdx(activeIndex)}
          onActiveIndexChange={({ activeIndex }) => setActiveIdx(activeIndex)}
          onAutoplayTimeLeft={(_, __, percentage) => {
            const percentageValue = Number((1 - percentage) * 100)
            setAutoplayPercentage(percentageValue)
          }}
          navigation={{
            nextEl: '.banner-swiper-nav-btn-next',
            prevEl: '.banner-swiper-nav-btn-prev',
          }}
          spaceBetween={10}
        >
          {validItems.map((item, idx) => (
            <SwiperSlide key={idx} className="cursor-grab">
              <Image
                src={item.image}
                alt="game-banner"
                preview={false}
                rootClassName="w-full"
                className="aspect-[3/1] mobile:aspect-[5/3] object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
          <Fragment>
            <Button className="banner-swiper-nav-btn banner-swiper-nav-btn-prev">
              <ArrowLeft size="24" />
            </Button>
            <Button className="banner-swiper-nav-btn banner-swiper-nav-btn-next">
              <ArrowLeft size="24" className="rotate-180" />
            </Button>
          </Fragment>
        </Swiper>
      </div>

      {/*Progress bar for timeline switch next slide*/}
      <div className="h-1 rounded-full bg-[rgba(216,255,118,0.20)] mt-2">
        <div
          className="h-1 rounded-full bg-primary"
          style={{ width: `${autoplayPercentage}%` }}
        ></div>
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
          <SwiperSlide key={idx} className="!w-fit cursor-pointer">
            <Image
              src={item.image}
              alt="game-banner"
              preview={false}
              rootClassName="banner-nav-img w-[170px] mobile:w-[124px]"
              className="aspect-[17/10] !h-[100px] mobile:!h-[73px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeBannerSwiper
