import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'

import QueryClientProvider from '@/providers/QueryClientProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import { wagmiConfig } from '@/configs'

import '../../public/antd.min.css'
import '@/styles/globals.css'
import '@ancient8/components/styles.scss'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider>
        <RainbowKitProvider theme={darkTheme()}>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
