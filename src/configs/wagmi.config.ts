import { sepolia, ancient8 } from 'viem/chains'
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

const supportedChains = [sepolia, ancient8] as [
  RainbowKitChain,
  ...RainbowKitChain[],
]

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
