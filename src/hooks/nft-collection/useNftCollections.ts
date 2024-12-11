import { useQuery } from '@tanstack/react-query'

import { nftCollectionService } from '@/services/nft-collection.service'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import { GetListNftCollectionDto } from '@/types/nft-collection.type'

export const useNftCollections = (dto?: GetListNftCollectionDto) => {
  const result = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_NFT_COLLECTION, dto],
    queryFn: () => nftCollectionService.getList(dto),
  })
  return extractStrapiListQueryResult(result)
}
