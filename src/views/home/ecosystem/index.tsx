import clsx from 'clsx'
import { ArrowRight } from 'iconsax-react'

import { Flex, Button, Row, Col } from 'antd'

import SectionTitle from '@/components/section-title'
import CardDApp from './CardDApp'

import { useDApp } from '@/hooks/home/dapp/useDApp'

function DAppEcosystem() {
  const { data } = useDApp()

  return (
    <Flex vertical className="w-full gap-[60px] mobile:gap-6">
      <Flex justify="space-between" align="center">
        <SectionTitle title="Dapps Ecosystem" />

        <Button
          href="https://ancient8.gg/ecosystem/"
          target="_blank"
          type="text"
          className={clsx(
            'bg-transparent text-[#F1F2F3] text-[18px] font-bold',
            'hover:!bg-transparent hover:!text-primary',
            'mobile:hidden',
          )}
        >
          VIEW MORE <ArrowRight size={24} />
        </Button>
      </Flex>

      <Row
        gutter={[
          { xs: 0, sm: 0, md: 20, lg: 24 },
          { xs: 12, sm: 12, md: 24, lg: 32 },
        ]}
      >
        {data.map((value, index) => (
          <Col xs={24} sm={24} lg={12} xl={8} key={index}>
            <CardDApp data={value} />
          </Col>
        ))}
      </Row>

      <Button
        href="https://ancient8.gg/ecosystem/"
        target="_blank"
        type="text"
        className={clsx(
          'bg-transparent text-[#F1F2F3] text-sm font-bold',
          'hover:!bg-transparent hover:!text-primary',
          'hidden mobile:flex mobile:-mt-2',
        )}
      >
        VIEW MORE <ArrowRight size={24} />
      </Button>
    </Flex>
  )
}

export default DAppEcosystem
