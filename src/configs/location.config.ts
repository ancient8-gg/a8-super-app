type Config = {
  nftMarketplace: string
  staking: string
}

const locationConfig: Config = {
  nftMarketplace: process.env.NEXT_PUBLIC_NFT_MARKETPLACE_URL as string,
  staking: process.env.NEXT_PUBLIC_STAKING_URL as string,
}

export default locationConfig
