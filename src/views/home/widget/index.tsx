import { Row, Col } from 'antd'

import MarketplaceWidget from './MarketplaceWidget'
import StakingWidget from './StakingWidget'
import BridgeWidget from './BridgeWidget'
import SwapWidget from './SwapWidget'
import GameProtocolWidget from './GameProtocolWidget'
import EventWidget from './event/EventWidget'

function WidgetSection() {
  return (
    <Row gutter={[20, 27]}>
      <Col xs={24} sm={24} lg={12} xl={8}>
        <MarketplaceWidget />
      </Col>

      <Col xs={12} sm={12} lg={12} xl={8}>
        <StakingWidget />
      </Col>

      <Col xs={12} sm={12} lg={12} xl={8}>
        <BridgeWidget />
      </Col>

      <Col xs={24} sm={24} lg={12} xl={9}>
        <SwapWidget />
      </Col>

      <Col xs={24} sm={24} lg={12} xl={8}>
        <GameProtocolWidget />
      </Col>

      <Col xs={24} sm={24} lg={12} xl={7}>
        <EventWidget />
      </Col>
    </Row>
  )
}

export default WidgetSection
