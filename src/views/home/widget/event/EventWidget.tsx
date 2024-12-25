import CardWidget from '../CardWidget'
import EventSwiper from './EventSwiper'

import { useEventWidget } from '@/hooks/home/widget/useEventWidget'

function EventWidget() {
  const { data } = useEventWidget()

  return (
    <CardWidget classname="h-[262px] !py-6">
      <EventSwiper items={data} />
    </CardWidget>
  )
}

export default EventWidget
