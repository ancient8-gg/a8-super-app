import { sepolia, ancient8, ancient8Sepolia, mainnet } from 'viem/chains'
import {
  type Chain as RainbowKitChain,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  bitgetWallet,
  coinbaseWallet,
  coin98Wallet,
  okxWallet,
} from '@rainbow-me/rainbowkit/wallets'
import * as allWallets from '@rainbow-me/rainbowkit/wallets'

import A8Logo from '@/assets/img/logo/a8-logo-chain.png'

const supportedChains =
  process.env.NEXT_PUBLIC_ENV === 'production'
    ? ([mainnet, { ...ancient8, iconUrl: A8Logo.src }] as [
        RainbowKitChain,
        ...RainbowKitChain[],
      ])
    : ([sepolia, { ...ancient8Sepolia, iconUrl: A8Logo.src }] as [
        RainbowKitChain,
        ...RainbowKitChain[],
      ])

export const wagmiConfig = getDefaultConfig({
  appName: 'a8-super-app',
  projectId: process.env.NEXT_PUBLIC_WAGMI_PROJECT_ID as string,
  chains: supportedChains,
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        bitgetWallet,
        coinbaseWallet,
        coin98Wallet,
        okxWallet,
      ],
    },
    {
      groupName: 'All',
      wallets: Object.values(allWallets),
    },
  ],
})
