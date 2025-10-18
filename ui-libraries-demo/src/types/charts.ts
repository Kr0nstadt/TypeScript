export interface ChartDataItem {
  period: string
  value: number
  category: string
}

export interface PieChartDataItem {
  type: string
  value: number
  percentage: number
}

export interface ColumnChartDataItem {
  name: string
  sales: number
  revenue: number
}

export interface StatsCardData {
  title: string
  value: number | string
  growth?: number
  icon?: string
}