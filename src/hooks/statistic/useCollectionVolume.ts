import { useQuery } from '@tanstack/react-query'

import { statisticsService } from '@/services'

import { QUERY_KEY } from '@/constants'

import { GetVolumesCollectionDto } from '@/types'

export const useCollectionVolume = (dto: GetVolumesCollectionDto) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_VOLUME_COLLECTION, dto],
    queryFn: () => statisticsService.getVolumesByCollection(dto),
    enabled: !!dto.address,
  })
}
