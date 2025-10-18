import React from 'react'
import { Card, Statistic, Row, Col } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { StatsCardData } from '../../types/charts'

interface StatisticsCardsProps {
  data: StatsCardData[]
}

export const StatisticsCards: React.FC<StatisticsCardsProps> = ({ data }) => {
  return (
    <Row gutter={16}>
      {data.map((item, index) => (
        <Col span={6} key={index}>
          <Card>
            <Statistic
              title={item.title}
              value={item.value}
              precision={2}
              valueStyle={{
                color: item.growth && item.growth >= 0 ? '#3f8600' : '#cf1322',
              }}
              prefix={
                item.growth ? (
                  item.growth >= 0 ? (
                    <ArrowUpOutlined />
                  ) : (
                    <ArrowDownOutlined />
                  )
                ) : null
              }
              suffix={item.growth ? '%' : ''}
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}