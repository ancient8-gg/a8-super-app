import { GetListDto } from './common.type'

export type Reward = {
  title: string
  thumbnail: string
  category: RewardCategory
  endDate: string
  communityLogo: string
  badges: RewardBadge[] | null
  priority: number
}

type RewardBadge = {
  title: string
}

export enum RewardCategory {
  Dapp = 'REWARD_CATEGORY:DAPP',
  InGame = 'REWARD_CATEGORY:IN_GAME',
}

export enum RewardSort {
  PRIORITY = 'REWARD_SORT:PRIORITY',
}

export type GetListRewardDto = GetListDto<RewardSort>
