import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

import './card-widget.scss'

type CardWidgetProps = {
  classname?: string
  bgGradient?: boolean
} & PropsWithChildren

function CardWidget({ children, classname = '', bgGradient }: CardWidgetProps) {
  return (
    <div
      className={clsx(
        'px-6 py-8 mobile:px-3 mobile:py-4 rounded-3xl',
        'border border-white/8 hover:border-primary transition bg-[#101010]',
        bgGradient && 'card-widget-bg-gradient',
        classname,
      )}
    >
      {children}
    </div>
  )
}

export default CardWidget
