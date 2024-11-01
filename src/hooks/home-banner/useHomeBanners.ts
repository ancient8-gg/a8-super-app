import { useQuery } from '@tanstack/react-query'

import { bannerService } from '@/services'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import { GetListHomeBannerDto, HomeBanner } from '@/types'

export const useHomeBanners = (dto?: GetListHomeBannerDto) => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_BANNERS, dto],
    queryFn: () => bannerService.getList(dto),
  })

  return extractStrapiListQueryResult<HomeBanner>(queryResult)
}
