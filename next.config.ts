import { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_ENV === 'staging',
  reactStrictMode: true,
  transpilePackages: [
    '@ancient8/components',
    '@ant-design',
    'antd',
    'rc-notification',
    'rc-pagination',
    'rc-picker',
    'rc-input',
    'rc-table',
    'rc-tooltip',
    'rc-tree',
    'rc-util',
  ],
  webpack(config) {
    /**
     * Disable css module
     * Source: https://cwtuan.blogspot.com/2022/10/disable-css-module-in-nextjs-v1231-sept.html
     */
    config.module.rules.forEach((rule: any) => {
      const { oneOf } = rule
      if (oneOf) {
        oneOf.forEach((one: any) => {
          if (!`${one.issuer?.and}`.includes('_app')) return
          one.issuer.and = [path.resolve(__dirname)]
        })
      }
    })

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }

    /**
     * Make alias import in scss
     * https://stackoverflow.com/questions/72179248/how-do-i-configure-nextjs-to-correctly-handle-alias-paths-within-scss
     */
    config.resolve.alias['./@'] = path.resolve(__dirname, 'src')

    return config
  },
}

export default nextConfig
