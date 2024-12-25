import { orderbookAxios } from './axios'

import { GetOrderByCollectionDto } from '@/types'

const LISTING_CONTROLLER = '/listings'

class OrderbookService {
  async getBestByCollection({ slug }: GetOrderByCollectionDto) {
    const { data } = await orderbookAxios.get<any>( //TODO: add type later
      `${LISTING_CONTROLLER}/collection/${slug}/best`,
    )
    return data
  }
}

export const orderbookService = new OrderbookService()
