import { Typography } from 'antd'

import './index.scss'

type SectionTitleProps = {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography.Title
      level={3}
      className="section-title font-bold uppercase !text-[50px] mobile:!text-xl"
    >
      {title}
    </Typography.Title>
  )
}

export default SectionTitle
