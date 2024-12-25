import type { ReactNode } from 'react'
import clsx from 'clsx'

import { Typography } from 'antd'

import './index.scss'

type SectionTitleProps = {
  title: string | ReactNode
  className?: string
}

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <Typography.Title
      level={3}
      className={clsx(
        'section-title font-bold uppercase !text-[50px] mobile:!text-xl',
        className,
      )}
    >
      {title}
    </Typography.Title>
  )
}

export default SectionTitle
