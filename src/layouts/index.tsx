import type { PropsWithChildren, ReactNode } from 'react'

import { Layout } from '@ancient8/components'

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
      {children}
    </Layout>
  )
}

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default MainLayout
