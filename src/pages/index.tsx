import BannerSection from '@/views/home/banner/BannerSection'
import HotRewardSection from '@/views/home/hot-reward/HotRewardSection'
import { getMainLayout } from '@/layouts'

const Home = () => {
  return (
    <div className="w-screen">
      <BannerSection />
      <HotRewardSection />
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
