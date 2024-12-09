import { useQuery } from '@tanstack/react-query'

import { gameService } from '@/services'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import { IGame, GetListGameDto } from '@/types/game.type'

export const useGames = (dto?: GetListGameDto) => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_GAMES, dto],
    queryFn: () => gameService.getList(dto),
  })

  return extractStrapiListQueryResult<IGame>(queryResult)
}
