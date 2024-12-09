import { GetListDto, StrapiContent } from './common.type'
import { StrapiMedia } from './strapi.type'

export type GameBlog = {
  id: number
  slug: string
  spotlight: string
  title: string
  description: string
  thumbnail: StrapiContent<StrapiMedia>
}

export enum GameBlogSort {
  NEW = 'GAME_BLOG_SORT:NEW',
}

export type GetListGameBlogDto = GetListDto<GameBlogSort>
