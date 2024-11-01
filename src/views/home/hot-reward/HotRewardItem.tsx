import dayjs from 'dayjs'
import Countdown from 'react-countdown'

import { Flex, Image, Typography } from 'antd'

import RewardCountdown from './RewardCountdown'

import { Reward } from '@/types'

type HotRewardItemProps = {
  rewardData: Reward
}

export default function HotRewardItem({ rewardData }: HotRewardItemProps) {
  return (
    <div>
      <div className="p-2 w-96 h-[600px]">
        <Flex vertical gap={20}>
          <div className="w-full h-[400px]">
            <Image
              src={rewardData.thumbnail}
              className="object-cover"
              alt="reward-thumbnail"
              width={'100%'}
              height={'100%'}
              preview={false}
            />
          </div>
          <Typography.Text className="text-white font-bold text-3xl h-[72px]">
            {rewardData.title}
          </Typography.Text>
          <div className="overflow-hidden h-6">
            <div className="w-max flex gap-x-4">
              {rewardData.badges?.map((badge, index) => (
                <div key={index} className="inline-block">
                  <Typography.Text type="success">Badge: </Typography.Text>
                  <Typography.Text className="text-white">
                    {badge.title}
                  </Typography.Text>
                </div>
              ))}
            </div>
          </div>
        </Flex>
      </div>
      <div>
        <Flex className="bg-gray-800 p-4" gap={20}>
          <Typography.Text className="uppercase" type="success">
            Ends in:
          </Typography.Text>
          <Countdown
            renderer={RewardCountdown}
            date={dayjs(rewardData.endDate).valueOf()}
          />
        </Flex>
      </div>
    </div>
  )
}
