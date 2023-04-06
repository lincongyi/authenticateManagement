import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const LineChart = () => {
  type EChartsOption = echarts.EChartsOption
  let lineChart: echarts.EChartsType
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [
        '2023-3-30',
        '2023-3-31',
        '2023-4-01',
        '2023-4-02',
        '2023-4-03',
        '2023-4-04',
        '2023-4-05'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
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
  }, [])

  return (
    <>
      <div id='line' style={{ height: 352 }}></div>
    </>
  )
}

export default LineChart
