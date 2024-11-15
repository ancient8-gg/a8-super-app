import { PropsWithChildren } from 'react'

import { ConfigProvider } from 'antd'

import { theme } from '../theme/themeConfig'

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider theme={theme} prefixCls="a8-super-app">
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
