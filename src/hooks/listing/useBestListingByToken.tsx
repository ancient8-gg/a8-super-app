import { useQuery } from '@tanstack/react-query'

import { orderbookService } from '@/services'

import { QUERY_KEY } from '@/constants'

import { GetOrderByCollectionDto } from '@/types'

export const useBestByCollection = (dto: GetOrderByCollectionDto) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_BEST_LISTING_BY_NFT, dto],
    queryFn: () => orderbookService.getBestByCollection(dto),
    enabled: !!dto.slug,
  })
}
