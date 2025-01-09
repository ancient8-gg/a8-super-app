import qs from 'qs'
import { strapiAxios } from './axios'

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants'

import {
  GetListHomeBannerDto,
  HomeBanner,
  HomeBannerSort,
  StrapiList,
} from '@/types'

const BANNER_CONTROLLER = '/home-banners'

class BannerService {
  async getList({
    sort = HomeBannerSort.PRIORITY,
    pageSize = DEFAULT_PAGE_SIZE,
    page = DEFAULT_PAGE,
  }: GetListHomeBannerDto = {}) {
    const sortValue: string[] = []
    switch (sort) {
      case HomeBannerSort.PRIORITY:
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

    const { data } = await strapiAxios.get<StrapiList<HomeBanner>>(
      `${BANNER_CONTROLLER}?${query}`,
    )

    return data
  }
}

export const bannerService = new BannerService()
