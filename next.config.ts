import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_ENV === 'staging',
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    'antd',
    'rc-notification',
    'rc-pagination',
    'rc-picker',
    'rc-table',
    'rc-tooltip',
    'rc-tree',
    'rc-util',
  ],
}

export default nextConfig
