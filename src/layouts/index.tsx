import type { PropsWithChildren, ReactNode } from 'react'
import { Layout } from '@ancient8/components'

import ThemeProvider from '@/providers/ThemeProvider'

import { apiConfig } from '@/configs'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      config={{
        sider: {
          baseUrl: `${apiConfig.strapiApi}/side-menus`,
        },
      }}
    >
      <div className="px-10 mobile:px-4 pt-[27px] w-[calc(100vw_-_71px)] mobile:w-[100vw]">
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
