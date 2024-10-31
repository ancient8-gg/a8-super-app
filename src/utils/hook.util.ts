import { UseQueryResult } from '@tanstack/react-query'

import { StrapiList } from '@/types'

export const extractStrapiListQueryResult = <T>(
  queryResult: UseQueryResult<StrapiList<T>, Error>,
) => {
  const { data, ...rest } = queryResult
  return {
    ...rest,
    data: data?.data || [],
    total: data?.meta.pagination.total || 0,
  }
}
