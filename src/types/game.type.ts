import { GetListDto } from './common.type'
import { StrapiContent, StrapiMedia } from './strapi.type'

export interface IGame {
  id: number
  title: string
  thumbnail: StrapiContent<StrapiMedia>
  genre?: string[]
  priority: number
}

export enum GameSort {
  PRIORITY = 'GAME_SORT:PRIORITY',
}

export type GetListGameDto = GetListDto<GameSort>
