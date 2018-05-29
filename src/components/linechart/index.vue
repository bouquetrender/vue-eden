<template>
  <div 
    :class="className" 
    :style="{height: height,width: width}">
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons'
import { debounce, randomIntegerInRange } from '@/utils/tools'

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '380px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      chart: null,
      updatefn: null
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.chartResizeHandle = debounce(() => {
        this.chart ? this.chart.resize() : null
      }, 50)
      window.addEventListener('resize', this.chartResizeHandle)
    }

    const sidebarElm = document.getElementsByClassName('el-aside')[0]
    sidebarElm.addEventListener('transitionend', this.chartResizeHandle)

    // 动态更新 line chart
    this.updatefn = setInterval(() => {
      let { PS4PlayerData, NSPlayerData } = this.chartData
      PS4PlayerData.shift()
      NSPlayerData.shift()
      PS4PlayerData.push(randomIntegerInRange(2000, 4600))
      NSPlayerData.push(randomIntegerInRange(2000, 4600))
      this.chart.setOption({
        series: [
          {
            name: 'PS4 Player',
            data: PS4PlayerData
          },
          {
            name: 'NS Player',
            data: NSPlayerData
          }
        ]
      })
    }, 3100)
  },
  beforeDestroy() {
    this.chart && this.autoResize
      ? window.removeEventListener('resize', this.chartResizeHandle)
      : null

    const sidebarElm = document.getElementsByClassName('el-aside')[0]
    sidebarElm
      ? sidebarElm.removeEventListener('transitionend', this.chartResizeHandle)
      : null

    this.chart.dispose()
    this.chart = null
    clearInterval(this.updatefn)
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setChartOptions(val)
      }
    }
  },
  methods: {
    setChartOptions({ PS4PlayerData, NSPlayerData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: xAxisData,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['PS4 Player', 'NS Player']
        },
        series: [
          {
            name: 'PS4 Player',
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: PS4PlayerData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'NS Player',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: NSPlayerData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setChartOptions(this.chartData)
    }
  }
}
</script>
