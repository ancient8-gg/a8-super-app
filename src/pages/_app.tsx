import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { Fragment, type ReactElement, type ReactNode } from 'react'

import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'

import SEO from '@/components/seo/SEO'
import QueryClientProvider from '@/providers/QueryClientProvider'

import { wagmiConfig } from '@/configs'

import '../../public/antd.min.css'
import '@ancient8/components/styles.scss'
import '@rainbow-me/rainbowkit/styles.css'
import '@/styles/globals.scss'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Fragment>
      <SEO
        title="Ancient8 App | Build on the Edge of Gaming"
        description="Join Ancient8 App to unlock a new era of Web3 gaming. Experience innovative tools, community engagement, and access to hundreds of games in one powerful platform."
      >
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </SEO>

      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider>
          <RainbowKitProvider theme={darkTheme()}>
            {getLayout(<Component {...pageProps} />)}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Fragment>
  )
}
