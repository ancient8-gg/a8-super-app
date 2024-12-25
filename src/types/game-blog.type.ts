import { GetListDto, StrapiContent } from './common.type'
import { StrapiMedia } from './strapi.type'

export type GameBlog = {
  id: number
  website: string
  spotlight: string
  title: string
  description: string
  thumbnail: StrapiContent<StrapiMedia>
  priority: number
}

export enum GameBlogSort {
  PRIORITY = 'GAME_BLOG_SORT:PRIORITY',
}

export type GetListGameBlogDto = GetListDto<GameBlogSort>
