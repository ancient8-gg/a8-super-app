import { ChainId } from './chain.type'
import { GetListDto } from './common.type'
import { StrapiContent, StrapiMedia } from './strapi.type'

export type INftCollection = {
  address: string
  chain: ChainId
  description: string
  locale: string
  name: string
  slug: string
  cover: StrapiContent<StrapiMedia>
  thumbnail: StrapiContent<StrapiMedia>
  verified: boolean
  website?: string
  twitterUrl?: string
  discordUrl?: string
  telegramUrl?: string
  blockscanUrl?: string
}

export enum NftCollectionSort {
  NEW = 'NFT_COLLECTION_SORT:NEW',
  PRIORITY = 'NFT_COLLECTION_SORT:PRIORITY',
}

export type GetListNftCollectionDto = GetListDto<NftCollectionSort>
