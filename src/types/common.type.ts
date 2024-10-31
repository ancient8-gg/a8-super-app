export type StrapiContent<T> = T & {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type StrapiList<T> = {
  data: StrapiContent<T>[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type GetListDto<T> = {
  sort?: T
  pageSize?: number
  page?: number
}
