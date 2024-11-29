// import BannerSection from '@/views/home/banner/BannerSection'
// import HotRewardSection from '@/views/home/hot-reward/HotRewardSection'
import { getMainLayout } from '@/layouts'
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      {/* <BannerSection />
      <HotRewardSection /> */}
      
      <Image 
        src="/fakelove.jpg" 
        alt="Fake Love" 
        layout="responsive" 
        width={100}
        height={100}
      />
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
