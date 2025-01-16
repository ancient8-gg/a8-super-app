type Config = {
  nftMarketplace: string
}

const locationConfig: Config = {
  nftMarketplace: process.env.NEXT_PUBLIC_NFT_MARKETPLACE_URL as string,
}

export default locationConfig
