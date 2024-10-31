import { Button, Col, Flex, Image, Row, Typography } from 'antd'

import { HomeBanner } from '@/types'

type BannerItemProps = {
  bannerData: HomeBanner
}

const BannerItem = ({ bannerData }: BannerItemProps) => {
  return (
    <Row>
      <Col span={12}>
        <div>
          <Image
            src={bannerData.image}
            alt="game-banner"
            preview={false}
            className="object-cover"
            width={'100%'}
            height={'100%'}
          />
        </div>
      </Col>
      <Col span={12}>
        <Flex
          vertical
          justify="space-between"
          align="space-between"
          className="h-full"
        >
          <div>
            <Typography.Text type="success">{bannerData.title}</Typography.Text>
            <Typography.Paragraph type="secondary" className="!text-white">
              {bannerData.description}
            </Typography.Paragraph>
          </div>

          <Button href={bannerData.actionUrl} target="_blank" type="primary">
            {bannerData.actionTitle}
          </Button>
        </Flex>
      </Col>
    </Row>
  )
}

export default BannerItem
