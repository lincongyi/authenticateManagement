import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import { echartOnResize } from '../index'

let lineChart: echarts.EChartsType | null
const AmountChart = ({ chartData }: { chartData: TLineChart }) => {
  type EChartsOption = echarts.EChartsOption
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chartData.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: chartData.yAxis,
        type: 'line',
        areaStyle: {}
      }
    ]
  }

  useEffect(() => {
    if (!lineChart) {
      const amount = document.getElementById('amount')
      if (!amount) return
      lineChart = echarts.init(amount)
    }
    lineChart.setOption(option)
    lineChart.resize()
    echartOnResize(lineChart)
    return () => {
      lineChart = null
      window.onresize = () => {}
    }
  }, [option])

  return <div id='amount' style={{ height: 352 }}></div>
}

export default React.memo(AmountChart)
