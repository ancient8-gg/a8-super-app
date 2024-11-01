import { GetListDto } from './common.type'

export type HomeBanner = {
  title: string
  description: string
  image: string
  actionTitle: string
  actionUrl: string
  priority: number
}

export enum HomeBannerSort {
  PRIORITY = 'HOME_BANNER_SORT:PRIORITY',
}

export type GetListHomeBannerDto = GetListDto<HomeBannerSort>
