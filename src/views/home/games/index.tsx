import { Col, Flex, Row } from 'antd'

import SectionTitle from '@/components/section-title'
import GameCard from './GameCard'
import GameBlogSection from './GameBlog'

import { useGames } from '@/hooks/game/useGames'

import './index.scss'

function GamesSection() {
  const { data: games } = useGames({
    pageSize: 8,
  })

  return (
    <Flex vertical className="games-section gap-24 mobile:gap-12">
      <Row gutter={[0, { lg: 60, md: 24, xs: 24 }]} className="w-full">
        <Col span={24}>
          <SectionTitle title="Ancient8 Gaming" />
        </Col>
        <Col span={24}>
          <Row
            gutter={[
              { lg: 16, md: 12, xs: 12 },
              { lg: 24, md: 12, xs: 12 },
            ]}
            justify="space-between"
          >
            {games.map((game, index) => (
              <Col lg={6} md={12} xs={12} key={index}>
                <GameCard gameDetails={game} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <GameBlogSection />
    </Flex>
  )
}

export default GamesSection
