import { useQuery } from '@tanstack/react-query'

import { strapiAxios } from '@/services/axios'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import type { EventWidgetType } from '@/types/event-widget.type'
import { StrapiList } from '@/types'

export const useEventWidget = () => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_EVENT_WIDGET],
    queryFn: async () => {
      const { data } = await strapiAxios.get<StrapiList<EventWidgetType>>(
        '/home-widget-events',
        {
          params: {
            'pagination[pageSize]': 100,
            'populate[0]': 'image',
          },
        },
      )
      return data
    },
  })

  return extractStrapiListQueryResult<EventWidgetType>(queryResult)
}
