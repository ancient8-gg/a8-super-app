import { Footer } from '@ancient8/components'

import { getMainLayout } from '@/layouts'
import SEO from '@/components/seo/SEO'
import BannerSection from '@/views/home/banner/BannerSection'
import GamesSection from '@/views/home/games'
import WidgetSection from '@/views/home/widget'
import NftCollection from '@/views/home/nft-collection'
import DAppEcosystem from '@/views/home/ecosystem'

function Home() {
  return (
    <>
      <SEO
        title="Ancient8 App | Build on the Edge of Gaming"
        description="Join Ancient8 App to unlock a new era of Web3 gaming. Experience innovative tools, community engagement, and access to hundreds of games in one powerful platform."
      />

      <div className="flex flex-col gap-24 mobile:gap-12 max-w-[1304px] mx-auto">
        <BannerSection />

        <WidgetSection />

        <GamesSection />

        <NftCollection />

        <DAppEcosystem />

        <Footer />
      </div>
    </>
  )
}

Home.getLayout = getMainLayout

export default Home
