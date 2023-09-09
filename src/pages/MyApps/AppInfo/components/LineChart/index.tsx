import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const LineChart = ({ chartData }: { chartData: TLineChart }) => {
  type EChartsOption = echarts.EChartsOption
  let lineChart: echarts.EChartsType
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
        type: 'line'
      }
    ]
  }

  useEffect(() => {
    if (!lineChart) {
      const line = document.getElementById('line')
      if (!line) return
      lineChart = echarts.init(line)
      lineChart.setOption(option)
      lineChart.resize()
    }
    window.onresize = () => lineChart.resize()
    return () => {
      window.onresize = () => {}
    }
  }, [option])

  return (
    <>
      <div id='line' style={{ height: 352 }}></div>
    </>
  )
}

export default React.memo(LineChart)
