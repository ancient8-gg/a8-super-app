import type { PropsWithChildren, ReactNode } from 'react'
import { Layout } from '@ancient8/components'

import ThemeProvider from '@/providers/ThemeProvider'
import CsrProvider from '@/providers/CsrProvider'

import { apiConfig } from '@/configs'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <CsrProvider>
      <Layout
        config={{
          sider: {
            baseUrl: `${apiConfig.strapiApi}/side-menus`,
          },
        }}
        classNames={{
          /*TODO: remove on next pkg version*/
          content: 'min-w-[1px] flex-1',
        }}
      >
        <div className="px-10 mobile:px-4 pt-[27px]">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </Layout>
    </CsrProvider>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
