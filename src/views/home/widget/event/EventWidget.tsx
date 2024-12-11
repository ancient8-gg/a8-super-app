import { Flex } from 'antd'

import CardWidget from '../CardWidget'
import EventSwiper from './EventSwiper'
import Socials from './Socials'

import { useEventWidget } from '@/hooks/home/widget/useEventWidget'

function EventWidget() {
  const { data } = useEventWidget()

  return (
    <CardWidget classname="h-[262px] py-6">
      <Flex vertical justify="space-between" align="center" className="h-full">
        <EventSwiper items={data} />

        <Socials />
      </Flex>
    </CardWidget>
  )
}

export default EventWidget
