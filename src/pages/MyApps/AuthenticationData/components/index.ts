import * as echarts from 'echarts'

const echartInstances: echarts.ECharts[] = []

const echartOnResize = (instance: echarts.ECharts) => {
  echartInstances.push(instance)
  window.onresize = () => {
    echartInstances.forEach(echart => echart.resize())
  }
}

export { echartOnResize }
