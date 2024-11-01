import { useQuery } from '@tanstack/react-query'

import { rewardService } from '@/services/reward.service'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import { GetListRewardDto } from '@/types'

export const useRewards = (dto?: GetListRewardDto) => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_REWARDS, dto],
    queryFn: () => rewardService.getList(dto),
  })

  return extractStrapiListQueryResult(queryResult)
}
