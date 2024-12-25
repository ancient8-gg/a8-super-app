import qs from 'qs'

import { strapiAxios } from './axios'

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants'

import { GameSort, IGame, GetListGameDto } from '@/types/game.type'
import { StrapiResponseList } from '@/types/strapi.type'

const GAME_CONTROLLER = '/home-games'

class GameService {
  async getList({
    sort = GameSort.PRIORITY,
    pageSize = DEFAULT_PAGE_SIZE,
    page = DEFAULT_PAGE,
  }: GetListGameDto = {}) {
    const sortValue: string[] = []
    switch (sort) {
      case GameSort.PRIORITY:
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

    const { data } = await strapiAxios.get<StrapiResponseList<IGame>>(
      `${GAME_CONTROLLER}?${query}`,
    )

    return data
  }
}

export const gameService = new GameService()
