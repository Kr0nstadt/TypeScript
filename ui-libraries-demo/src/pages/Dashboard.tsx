import React from 'react'
import { AppLayout } from '../components/Layout/AppLayout'
import { StatisticsCards } from '../components/Dashboard/StatisticsCards'
import { Charts } from '../components/Dashboard/Charts'
import {
  ChartDataItem,
  PieChartDataItem,
  ColumnChartDataItem,
  StatsCardData,
} from '../types/charts'

const Dashboard: React.FC = () => {
  // Данные для статистических карточек
  const statsData: StatsCardData[] = [
    {
      title: 'Общий доход',
      value: 112893,
      growth: 12.5,
    },
    {
      title: 'Новые пользователи',
      value: 2840,
      growth: 8.2,
    },
    {
      title: 'Конверсия',
      value: 6.32,
      growth: -2.1,
    },
    {
      title: 'Оборот',
      value: 89341,
      growth: 15.8,
    },
  ]

  // Данные для линейного графика
  const lineData: ChartDataItem[] = [
    { period: 'Янв', value: 120, category: 'Продажи' },
    { period: 'Фев', value: 150, category: 'Продажи' },
    { period: 'Мар', value: 180, category: 'Продажи' },
    { period: 'Апр', value: 200, category: 'Продажи' },
    { period: 'Май', value: 190, category: 'Продажи' },
    { period: 'Июн', value: 220, category: 'Продажи' },
    { period: 'Янв', value: 80, category: 'Производство' },
    { period: 'Фев', value: 90, category: 'Производство' },
    { period: 'Мар', value: 110, category: 'Производство' },
    { period: 'Апр', value: 130, category: 'Производство' },
    { period: 'Май', value: 150, category: 'Производство' },
    { period: 'Июн', value: 170, category: 'Производство' },
  ]

  // Данные для круговой диаграммы
  const pieData: PieChartDataItem[] = [
    { type: 'Категория A', value: 27, percentage: 27 },
    { type: 'Категория B', value: 25, percentage: 25 },
    { type: 'Категория C', value: 18, percentage: 18 },
    { type: 'Категория D', value: 15, percentage: 15 },
    { type: 'Категория E', value: 10, percentage: 10 },
    { type: 'Прочее', value: 5, percentage: 5 },
  ]

  // Данные для столбчатой диаграммы
  const columnData: ColumnChartDataItem[] = [
    { name: 'Продукт A', sales: 3800, revenue: 43000 },
    { name: 'Продукт B', sales: 5200, revenue: 61000 },
    { name: 'Продукт C', sales: 2800, revenue: 32000 },
    { name: 'Продукт D', sales: 4100, revenue: 48000 },
    { name: 'Продукт E', sales: 3300, revenue: 39000 },
  ]

  return (
    <AppLayout>
      <StatisticsCards data={statsData} />
      <Charts
        lineData={lineData}
        pieData={pieData}
        columnData={columnData}
      />
    </AppLayout>
  )
}

export default Dashboard