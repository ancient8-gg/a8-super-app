import qs from 'qs'
import { strapiAxios } from './axios'

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants'

import { GetListRewardDto, Reward, RewardSort, StrapiList } from '@/types'

const REWARD_CONTROLLER = '/rewards'

class RewardService {
  async getList({
    sort = RewardSort.PRIORITY,
    page = DEFAULT_PAGE,
    pageSize = DEFAULT_PAGE_SIZE,
  }: GetListRewardDto = {}) {
    const sortValue: string[] = []
    switch (sort) {
      case RewardSort.PRIORITY:
      default:
        // Note: Small priority number will be displayed first
        sortValue.push('priority:asc')
        break
    }

    const query = qs.stringify(
      {
        sort: sortValue,
        pagination: {
          page,
          pageSize,
        },
      },
      {
        encodeValuesOnly: true,
      },
    )

    const { data } = await strapiAxios.get<StrapiList<Reward>>(
      `${REWARD_CONTROLLER}?${query}`,
    )

    return data
  }
}

export const rewardService = new RewardService()
