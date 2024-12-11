import qs from 'qs'
import { strapiAxios } from './axios'

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants'
import {
  GetListNftCollectionDto,
  INftCollection,
  NftCollectionSort,
} from '@/types/nft-collection.type'
import { StrapiResponseList, StrapiResponseOne } from '@/types/strapi.type'

const NFT_COLLECTION_CONTROLLER = '/nft-collections'

class NftCollectionService {
  async getList({
    sort = NftCollectionSort.NEW,
    pageSize = DEFAULT_PAGE_SIZE,
    page = DEFAULT_PAGE,
  }: GetListNftCollectionDto = {}) {
    const sortValue: string[] = []
    switch (sort) {
      case NftCollectionSort.NEW:
      default:
        sortValue.push('createdAt:desc')
        break
    }
    const query = qs.stringify(
      {
        sort: sortValue,
        pagination: {
          page,
          pageSize,
        },
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      },
    )

    const { data } = await strapiAxios.get<StrapiResponseList<INftCollection>>(
      `${NFT_COLLECTION_CONTROLLER}?${query}`,
    )

    return data
  }

  async getById(id: string) {
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      },
    )
    const { data } = await strapiAxios.get<StrapiResponseOne<INftCollection>>(
      `${NFT_COLLECTION_CONTROLLER}/${id}?${query}`,
    )

    return data
  }

  async getBySlug(slug: string) {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        pagination: {
          pageSize: 1,
          page: 0,
        },
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      },
    )
    const { data } = await strapiAxios.get<StrapiResponseList<INftCollection>>(
      `${NFT_COLLECTION_CONTROLLER}?${query}`,
    )

    return data
  }
}

export const nftCollectionService = new NftCollectionService()
