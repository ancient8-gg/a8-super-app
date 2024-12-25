import { statisticAxios } from './axios'

import { TokenSymbol } from '@/constants'

import { CollectionVolumesResponse, GetVolumesCollectionDto } from '@/types'

const STATISTICS_CONTROLLER = '/stats'

class StatisticsService {
  async getVolumesByCollection({
    address,
    currency = TokenSymbol.A8,
  }: GetVolumesCollectionDto) {
    const { data } = await statisticAxios.get<CollectionVolumesResponse>(
      `${STATISTICS_CONTROLLER}/token/${address}/volumes`,
      { params: { currency } },
    )
    return data
  }
}

export const statisticsService = new StatisticsService()
