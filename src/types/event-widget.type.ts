export type EventWidgetType = {
  id: number
  title: string
  image: {
    url: string | null
  }
  startedAt: Date
  // Social
  website?: string
  discord?: string
  telegram?: string
  x?: string
  youtube?: string
}
