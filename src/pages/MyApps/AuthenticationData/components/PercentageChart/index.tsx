import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import type { TPercentage } from '@mock/myApp'
import { echartOnResize } from '../index'

let barChart: echarts.EChartsType | null
const PercentageChart = ({ chartData }: { chartData: TPercentage }) => {
  type EChartsOption = echarts.EChartsOption
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: chartData.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: chartData.yAxis,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }

  useEffect(() => {
    if (!barChart) {
      const percentage = document.getElementById('percentage')
      if (!percentage) return
      barChart = echarts.init(percentage)
    }
    barChart.setOption(option)
    barChart.resize()
    echartOnResize(barChart)
    return () => {
      barChart = null
      window.onresize = () => {}
    }
  }, [option])

  return <div id='percentage' style={{ height: 352 }}></div>
}

export default React.memo(PercentageChart)
