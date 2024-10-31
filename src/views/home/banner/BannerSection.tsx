import { Carousel } from 'antd'

import BannerItem from './BannerItem'

import { useHomeBanners } from '@/hooks/home-banner/useHomeBanners'

const BannerSection = () => {
  const { data } = useHomeBanners()

  return (
    <Carousel arrows infinite={false}>
      {data.map((bannerData) => (
        <BannerItem key={bannerData.id} bannerData={bannerData} />
      ))}
    </Carousel>
  )
}

export default BannerSection
