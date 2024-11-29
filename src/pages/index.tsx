// import BannerSection from '@/views/home/banner/BannerSection'
// import HotRewardSection from '@/views/home/hot-reward/HotRewardSection'
import { getMainLayout } from '@/layouts'

const Home = () => {
  return (
    <div>
      {/* <BannerSection />
      <HotRewardSection /> */}
      <img src='/fakelove.jpg' width="100%"/>
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
