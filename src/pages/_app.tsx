import type { AppProps } from 'next/app'

import QueryClientProvider from '@/providers/QueryClientProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import '../../public/antd.min.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
