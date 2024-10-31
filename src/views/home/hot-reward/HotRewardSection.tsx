import { Button, Col, Flex, Row, Typography } from 'antd'

import HotRewardItem from './HotRewardItem'

import { useRewards } from '@/hooks/reward/useRewards'

export default function HotRewardSection() {
  const { data } = useRewards()
  console.log({ data })

  return (
    <Row>
      <Col span={24}>
        <Flex justify="space-between">
          <Typography.Text className="uppercase text-white">
            Hot rewards
          </Typography.Text>
          <Button type="primary" onClick={() => {}}>
            See all --&gt;
          </Button>
        </Flex>
      </Col>
      <Col span={24} className="overflow-x-scroll">
        <Flex gap={40}>
          {data.map((reward) => (
            <HotRewardItem key={reward.id} rewardData={reward} />
          ))}
        </Flex>
      </Col>
    </Row>
  )
}
