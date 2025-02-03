import type { PropsWithChildren, ReactNode } from 'react'
import { Layout } from '@ancient8/components'

import ThemeProvider from '@/providers/ThemeProvider'

import { apiConfig, proxyConfig } from '@/configs'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          baseUrl: `${apiConfig.strapiApi}/side-menus`,
        },
        header: {
          baseUrl: `${apiConfig.strapiApi}/user-nav-menus`,
          startsA8Proxy: proxyConfig.coingeckoProxy,
        },
      }}
    >
      <div className="px-10 mobile:px-4 pt-[27px]">
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
