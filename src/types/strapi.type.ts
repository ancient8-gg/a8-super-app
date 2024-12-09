/**
 * NOTE:
 *
 * These types are manually defined. Currently, there's no stable and official tool to automatically generate it.
 * Try to using automation tool (scripts, plugin, sdk...) later
 */

export type StrapiContent<T> = T & {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type StrapiResponseList<T> = {
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

export type StrapiResponseOne<T> = {
  data: StrapiContent<T>
  meta: object
}

export type StrapiMedia = {
  alternativeText: string | null
  caption: string | null
  ext: string
  formats: object
  hash: string
  height: number
  mime: string
  name: string
  previewUrl: null | string
  provider: string
  provider_metadata: null
  size: number
  url: string
  width: number
}
