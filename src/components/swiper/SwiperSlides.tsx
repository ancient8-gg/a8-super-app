import React, { Fragment, ReactNode } from 'react'
import { ArrowLeft } from 'iconsax-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { Button } from 'antd'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.scss'

interface SwiperSlidesProps {
  items: (ReactNode | null | undefined)[]
  spaceBetween?: number
  slidesPerView?: number
  centeredSlides?: boolean
  breakpoints?: Record<string, { slidesPerView: number }>
  pagination?: boolean
  isLoop?: boolean
  dynamicMainBullets?: number
  showNavigationButtons?: boolean
  className?: string
}

function SwiperSlides({
  items,
  spaceBetween = 24,
  slidesPerView = 1,
  centeredSlides = false,
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1.33 },
    1280: { slidesPerView: 1.33 },
  },
  pagination = false,
  isLoop = false,
  dynamicMainBullets = 3,
  showNavigationButtons = true,
  className = '',
}: SwiperSlidesProps) {
  return (
    <div className="swiper-slides-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        navigation={{
          prevEl: `.swiper-nav-btn-prev`,
          nextEl: `.swiper-nav-btn-next`,
        }}
        pagination={{
          clickable: true,
          enabled: pagination,
          type: 'bullets',
          dynamicBullets: true,
          dynamicMainBullets: dynamicMainBullets ?? items.length,
        }}
        breakpoints={breakpoints}
        loop={isLoop}
        className={className}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {showNavigationButtons && (
        <Fragment>
          <Button className="swiper-nav-btn swiper-nav-btn-prev">
            <ArrowLeft size="24" />
          </Button>
          <Button className="swiper-nav-btn swiper-nav-btn-next">
            <ArrowLeft size="24" className="rotate-180" />
          </Button>
        </Fragment>
      )}
    </div>
  )
}

export default SwiperSlides
