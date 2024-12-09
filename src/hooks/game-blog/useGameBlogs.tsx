import { useQuery } from '@tanstack/react-query'

import { gameBlogService } from '@/services'

import { extractStrapiListQueryResult } from '@/utils'

import { QUERY_KEY } from '@/constants'

import { GameBlog, GetListGameBlogDto } from '@/types/game-blog.type'

export const useGamesBlog = (dto?: GetListGameBlogDto) => {
  const queryResult = useQuery({
    queryKey: [QUERY_KEY.GET_HOME_GAMES_BLOG, dto],
    queryFn: () => gameBlogService.getList(dto),
  })

  return extractStrapiListQueryResult<GameBlog>(queryResult)
}
