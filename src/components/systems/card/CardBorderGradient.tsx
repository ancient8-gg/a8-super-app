import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

import './card-border-gradient.scss'

type CardBorderGradientProps = {
  className?: string
  rootClassName?: string
} & PropsWithChildren

function CardBorderGradient({
  children,
  className,
  rootClassName,
}: CardBorderGradientProps) {
  return (
    <div className={clsx('card-border-gradient', rootClassName)}>
      <div className="gradient-outer">
        <div className="gradient-inner" />
      </div>

      <div className={clsx('card-border-gradient-content', className)}>
        {children}
      </div>
    </div>
  )
}

export default CardBorderGradient
