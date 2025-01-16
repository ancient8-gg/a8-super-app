import { GetListDto } from './common.type'

export type HomeBanner = {
  id: number
  title: string
  description: string
  image: string
  actionUrl: string
  priority: number
  spotlight?: string
}

export enum HomeBannerSort {
  PRIORITY = 'HOME_BANNER_SORT:PRIORITY',
}

export type GetListHomeBannerDto = GetListDto<HomeBannerSort>
