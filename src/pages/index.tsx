import BannerSection from '@/views/home/banner/BannerSection'
// import HotRewardSection from '@/views/home/hot-reward/HotRewardSection'
import { getMainLayout } from '@/layouts'
import GamesSection from '@/views/home/games'

function Home() {
  return (
    <div className="flex flex-col gap-96 mobile:gap-48">
      <BannerSection />
      {/* <HotRewardSection /> */}

      <GamesSection />

      {/*<Image*/}
      {/*  src="/fakelove.jpg"*/}
      {/*  alt="Fake Love"*/}
      {/*  layout="responsive"*/}
      {/*  width={100}*/}
      {/*  height={100}*/}
      {/*/>*/}
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
