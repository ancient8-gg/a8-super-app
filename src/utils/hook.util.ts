import { UseQueryResult } from '@tanstack/react-query'

import { StrapiResponseList } from '@/types/strapi.type'

export const extractStrapiListQueryResult = <T>(
  queryResult: UseQueryResult<StrapiResponseList<T>, Error>,
) => {
  const { data, ...rest } = queryResult
  return {
    ...rest,
    data: data?.data || [],
    total: data?.meta.pagination.total || 0,
  }
}
