import { TokenSymbol } from '@/constants'

export type GetVolumesCollectionDto = {
  address: string
  currency?: TokenSymbol
}

export type CollectionVolume = {
  volume: number
  currency: TokenSymbol
}

export type CollectionVolumesResponse = {
  '24h': CollectionVolume
  all: CollectionVolume
}
