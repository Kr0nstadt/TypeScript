import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { Line, Pie, Column } from '@ant-design/charts';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface StatsCard {
  title: string;
  value: number;
  precision?: number;
  growth?: number;
}

interface ChartData {
  period: string;
  value: number;
  category?: string;
}

interface PieData {
  type: string;
  value: number;
}

interface ColumnData {
  name: string;
  value: number;
}

const statsData: StatsCard[] = [
  { title: 'Продажи', value: 112893, growth: 12.5 },
  { title: 'Пользователи', value: 2840, growth: 8.2 },
  { title: 'Конверсия', value: 6.32, growth: -2.1, precision: 2 },
  { title: 'Оборот', value: 89341, growth: 15.8 },
];

const lineData: ChartData[] = [
  { period: 'Jan', value: 120, category: 'Sales' },
  { period: 'Feb', value: 150, category: 'Sales' },
  { period: 'Mar', value: 180, category: 'Sales' },
  { period: 'Apr', value: 200, category: 'Sales' },
  { period: 'May', value: 190, category: 'Sales' },
  { period: 'Jun', value: 220, category: 'Sales' },
  { period: 'Jan', value: 80, category: 'Revenue' },
  { period: 'Feb', value: 90, category: 'Revenue' },
  { period: 'Mar', value: 110, category: 'Revenue' },
  { period: 'Apr', value: 130, category: 'Revenue' },
  { period: 'May', value: 150, category: 'Revenue' },
  { period: 'Jun', value: 170, category: 'Revenue' },
];

const pieData: PieData[] = [
  { type: 'Category A', value: 27 },
  { type: 'Category B', value: 25 },
  { type: 'Category C', value: 18 },
  { type: 'Category D', value: 15 },
  { type: 'Category E', value: 10 },
  { type: 'Other', value: 5 },
];

const columnData: ColumnData[] = [
  { name: 'Product A', value: 3800 },
  { name: 'Product B', value: 5200 },
  { name: 'Product C', value: 2800 },
  { name: 'Product D', value: 4100 },
  { name: 'Product E', value: 3300 },
];

export const AntDashboard: React.FC = () => {
  const lineConfig = {
    data: lineData,
    xField: 'period',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v: string) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
    },
    interactions: [{ type: 'marker-active' }],
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'element-active' }],
  };

  const columnConfig = {
    data: columnData,
    xField: 'name',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: { alias: 'Продукт' },
      value: { alias: 'Значение' },
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        {statsData.map((stat, index) => (
          <Col span={6} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                precision={stat.precision}
                valueStyle={{
                  color: stat.growth && stat.growth >= 0 ? '#3f8600' : '#cf1322',
                }}
                prefix={
                  stat.growth ? (
                    stat.growth >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                  ) : null
                }
                suffix={stat.growth ? '%' : ''}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={16}>
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
      </Row>
      
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Продукты" bordered={false}>
            <Column {...columnConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};