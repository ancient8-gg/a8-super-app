import { useQuery } from '@tanstack/react-query'

import { strapiAxios } from '@/services/axios'
import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import type { DAppType } from '@/types/dapp.type'
import { StrapiList } from '@/types'

export const useDApp = () => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_DAPP_ECOSYSTEM],
    queryFn: async () => {
      const { data } = await strapiAxios.get<StrapiList<DAppType>>(
        '/home-ecosystems',
        {
          params: {
            'pagination[pageSize]': 100,
            'populate[0]': 'thumbnail',
          },
        },
      )
      return data
    },
  })

  return extractStrapiListQueryResult<DAppType>(queryResult)
}
