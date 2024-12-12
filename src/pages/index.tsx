import { getMainLayout } from '@/layouts'
import BannerSection from '@/views/home/banner/BannerSection'
import GamesSection from '@/views/home/games'
import WidgetSection from '@/views/home/widget'
import NftCollection from '@/views/home/nft-collection'
import DAppEcosystem from '@/views/home/ecosystem'

function Home() {
  return (
    <div className="flex flex-col gap-24 mobile:gap-12">
      <BannerSection />

      <WidgetSection />

      <GamesSection />

      <NftCollection />

      <DAppEcosystem />
    </div>
  )
}

Home.getLayout = getMainLayout

export default Home
