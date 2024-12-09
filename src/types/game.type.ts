import { GetListDto } from './common.type'
import { StrapiContent, StrapiMedia } from './strapi.type'

export interface IGame {
  id: number
  slug: string
  title: string
  description: string
  thumbnail: StrapiContent<StrapiMedia>
  cover: StrapiContent<StrapiMedia>
  genre: string[]
  blockchain: string[]
  copyright: string
  state: string
}

export enum GameSort {
  NEW = 'GAME_SORT:NEW',
}

export type GetListGameDto = GetListDto<GameSort>
