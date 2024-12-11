import { getMainLayout } from '@/layouts'
import BannerSection from '@/views/home/banner/BannerSection'
import GamesSection from '@/views/home/games'
import WidgetSection from '@/views/home/widget'

function Home() {
  return (
    <div className="flex flex-col gap-24 mobile:gap-12">
      <BannerSection />

      <WidgetSection />

      <GamesSection />
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
