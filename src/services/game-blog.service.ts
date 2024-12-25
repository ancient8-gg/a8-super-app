import qs from 'qs'

import { strapiAxios } from '@/services/axios'

import {
  GameBlog,
  GameBlogSort,
  GetListGameBlogDto,
} from '@/types/game-blog.type'
import { StrapiResponseList } from '@/types/strapi.type'

const GAME_BLOG_CONTROLLER = '/home-game-blogs'

class GameBlogService {
  async getList({
    sort = GameBlogSort.PRIORITY,
    page = 1,
    pageSize = 10,
  }: GetListGameBlogDto = {}) {
    const sortValue: string[] = []
    switch (sort) {
      case GameBlogSort.PRIORITY:
      default:
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
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      },
    )

    const { data } = await strapiAxios.get<StrapiResponseList<GameBlog>>(
      `${GAME_BLOG_CONTROLLER}?${query}`,
    )

    return data
  }
}

export const gameBlogService = new GameBlogService()
