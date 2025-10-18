import React from 'react'
import { Row, Col, Card } from 'antd'
import { Line, Pie, Column } from '@ant-design/charts'
import {
  ChartDataItem,
  PieChartDataItem,
  ColumnChartDataItem,
} from '../../types/charts'

interface ChartsProps {
  lineData: ChartDataItem[]
  pieData: PieChartDataItem[]
  columnData: ColumnChartDataItem[]
}

export const Charts: React.FC<ChartsProps> = ({
  lineData,
  pieData,
  columnData,
}) => {
  const lineConfig = {
    data: lineData,
    xField: 'period',
    yField: 'value',
    seriesField: 'category',
    point: {
      size: 5,
      shape: 'diamond',
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  }

  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Всего',
      },
    },
  }

  const columnConfig = {
    data: columnData,
    xField: 'name',
    yField: 'sales',
    seriesField: 'name',
    isGroup: true,
    columnStyle: {
      radius: [4, 4, 0, 0],
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    animation: {
      appear: {
        animation: 'scale-in-y',
        duration: 1000,
      },
    },
  }

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
      <Col span={12}>
        <Card title="Динамика показателей" bordered={false}>
          <Line {...lineConfig} />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Распределение по категориям" bordered={false}>
          <Pie {...pieConfig} />
        </Card>
      </Col>
      <Col span={24}>
        <Card title="Сравнительный анализ" bordered={false}>
          <Column {...columnConfig} />
        </Card>
      </Col>
    </Row>
  )
}