import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

import CardBorderGradient from '@/components/systems/card/CardBorderGradient'

import './card-widget.scss'

type CardWidgetProps = {
  classname?: string
  bgGradient?: boolean
} & PropsWithChildren

function CardWidget({ children, classname = '', bgGradient }: CardWidgetProps) {
  return (
    <CardBorderGradient
      className={clsx(
        'px-6 py-8 mobile:px-3 mobile:py-4 bg-[#101010]',
        bgGradient && 'card-widget-bg-gradient',
        classname,
      )}
      rootClassName="w-full h-full rounded-3xl"
    >
      {children}
    </CardBorderGradient>
  )
}

export default CardWidget
