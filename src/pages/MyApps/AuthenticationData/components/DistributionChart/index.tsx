import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import { echartOnResize } from '../index'

let barChart: echarts.EChartsType | null
const DistributionChart = ({ chartData }: { chartData: TLineChart }) => {
  type EChartsOption = echarts.EChartsOption
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: chartData.yAxis,
      axisLabel: {
        show: true,
        interval: 0,
        formatter: function (params) {
          let newLabel = ''
          const paramsNameNumber = params.length
          const provideNumber = 5 // 一行显示几个字
          if (paramsNameNumber > provideNumber) {
            const rowNumber = Math.ceil(paramsNameNumber / provideNumber)
            for (let index = 0; index < rowNumber; index++) {
              let tempStr = ''
              const start = index * provideNumber
              const end = start + provideNumber
              if (index === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber)
              } else {
                tempStr = params.substring(start, end) + '\n'
              }
              newLabel += tempStr
            }
          } else {
            newLabel = params
          }
          return newLabel
        }
      }
    },
    series: [
      {
        type: 'bar',
        data: chartData.xAxis
      }
    ]
  }

  useEffect(() => {
    if (!barChart) {
      const distribution = document.getElementById('distribution')
      if (!distribution) return
      barChart = echarts.init(distribution)
    }
    barChart.setOption(option)
    barChart.resize()
    echartOnResize(barChart)
    return () => {
      barChart = null
      window.onresize = () => {}
    }
  }, [option])

  return <div id='distribution' style={{ height: 352 }}></div>
}

export default React.memo(DistributionChart)
