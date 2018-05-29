<template>
  <div :class="className" :style="{height:height, width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons'
import { debounce } from '@/utils/tools'

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
      default: '430px'
    },
    chartData: {
      type: Array
    },
    legendData: {
      type: Array
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.pieResizeHandle = debounce(() => {
      this.piechart ? this.piechart.resize() : null
    }, 50)
    window.addEventListener('resize', this.pieResizeHandle)
  },
  beforeDestroy() {
    this.piechart
      ? window.removeEventListener('resize', this.pieResizeHandle)
      : null
    this.piechart.dispose()
    this.piechart = null
  },
  methods: {
    initChart() {
      this.piechart = echarts.init(this.$el, 'macarons')
      this.piechart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: this.legendData
        },
        calculable: true,
        series: [
          {
            name: 'FPS GAME DATA',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 140],
            center: ['50%', '38%'],
            data: this.chartData,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
