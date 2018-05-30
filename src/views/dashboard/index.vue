<template>
  <div class="dashboard-wrap">
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box1 widget-card">
          <div class="leftPart">
            <icon class="icon" name="user" :scale="5"></icon>
          </div>
          <div class="rightPart">
            <div class="number">{{tweenedNewUsers}}</div>
            <div class="font-center">New Users</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box2 widget-card">
          <div class="leftPart">
            <icon class="icon" name="eye" :scale="5"></icon>
          </div>
          <div class="rightPart">
            <div class="number">{{tweenedPageVisits}}</div>
            <div class="font-center">Page Visits</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box3 widget-card">
          <div class="leftPart">
            <icon class="icon" name="download" :scale="5"></icon>
          </div>
          <div class="rightPart">
            <div class="number">{{tweenDownload}}</div>
            <div class="font-center">Download Count</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box4 widget-card">
          <div class="leftPart">
            <icon class="icon" name="ns" :scale="5"></icon>
          </div>
          <div class="rightPart">
            <div class="number">{{tweenSwitchPlayer}}</div>
            <div class="font-center">Switch Player</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :sm="24" :lg="6">
        <el-card shadow="hover" class="todo-wrap">
          <div slot="header" class="todo-header">
            <span>{{$t('dashboard.todo')}}</span>
            <div class="enterTodo">
              <el-input @keyup.enter.native="addTasks" v-model="newTasks" placeholder="need to do"></el-input>
            </div>
          </div>
          <div class="todo-list">
            <div v-for="(todo, index) in todolist" :key="index">
              <el-checkbox v-model="todo.state" :class="todo.state ? 'deleteline' : ''">{{todo.task}}</el-checkbox>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="18">
        <div class="line-chart widget-card">
          <line-chart ref="lineChart" :chart-data="lineChartData"></line-chart>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :sm="24" :lg="12">
        <el-card shadow="hover" class="system-report">
          <div slot="header" class="report-header">
            <span class="">{{$t('dashboard.sr')}}</span>
          </div>
          <div class="report-content">
            <el-alert
              title="Keep me where the light is. Keep me where the light is."
              type="success">
            </el-alert>
            <el-alert
              title="Keep me where the light is. Keep me where the light is."
              type="success">
            </el-alert>
            <el-alert
              title="Keep me where the light is. Keep me where the light is."
              type="info">
            </el-alert>
            <el-row :gutter="24">
              <el-col :span="24" class="progress-wrap">
                <el-progress :width="120" type="circle" :percentage="100" status="success" color="#41b883"></el-progress>
                <el-progress :width="120" type="circle" :percentage="80" color="#4b79bb"></el-progress>
                <el-progress :width="120" type="circle" :percentage="50" status="exception" color="#e45f5f"></el-progress>
                <el-progress :width="120" type="circle" :percentage="62" status="exception" color="#e45f5f"></el-progress>
                <el-progress :width="120" type="circle" :percentage="83" status="exception" color="#e45f5f"></el-progress>
              </el-col>
            </el-row>
            <el-alert
              title="Keep me where the light is. Keep me where the light is."
              type="warning">
            </el-alert>
            <el-alert
              title="Keep me where the light is. Keep me where the light is."
              type="error">
            </el-alert>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card shadow="hover" class="pie-wrap">
          <div slot="header" class="pie-header">
            <span class="">{{$t('dashboard.pch')}}</span>
          </div>
          <pie-chart :chart-data="pieChartData" :legend-data="pieLegendData"></pie-chart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import TWEEN from '@tweenjs/tween.js'
import lineChart from '@/components/linechart'
import pieChart from '@/components/piechart'
import { randomIntegerInRange } from '@/utils/tools'

const chartData = {
  newGamer: {
    PS4PlayerData: [4352, 3120, 2561, 3234, 4305, 3170, 2165],
    NSPlayerData: [2120, 3282, 5291, 2554, 2162, 3140, 3145]
  },
  fpsGame: [
    { value: 320, name: 'Battlefield' },
    { value: 240, name: 'Call Of Duty' },
    { value: 149, name: 'Counter Strike' },
    { value: 400, name: 'Titanfall' },
    { value: 524, name: 'Splatoon' }
  ],
  fpsLegend: [
    'Battlefield',
    'Call Of Duty',
    'Counter Strike',
    'Splatoon',
    'Titanfall'
  ]
}

const tweenTransition = (newValue, oldValue, onUpdateFn) => {
  function animate() {
    if (TWEEN.update()) {
      requestAnimationFrame(animate)
    }
  }
  new TWEEN.Tween({ number: oldValue })
    .to({ number: newValue }, 1000)
    .onUpdate(onUpdateFn)
    .start()
  animate()
}

export default {
  name: 'dashboard',
  components: {
    lineChart,
    pieChart
  },
  data() {
    return {
      newUsers: 18273,
      tweenedNewUsers: 18273,
      pageVisits: 4824,
      tweenedPageVisits: 4824,
      download: 7921,
      tweenDownload: 7921,
      switchPlayer: 69281,
      tweenSwitchPlayer: 69281,
      randomfn: null,
      lineChartData: chartData.newGamer,
      pieChartData: chartData.fpsGame,
      pieLegendData: chartData.fpsLegend,
      newTasks: '',
      todolist: [
        {
          state: true,
          task: 'Try out the new Eden Tasks'
        },
        {
          state: false,
          task: 'Plan weekend outing'
        },
        {
          state: true,
          task: 'Publish Friday blog post on Github'
        },
        {
          state: false,
          task: 'Conduct user interviews'
        },
        {
          state: false,
          task: 'Tips for creating better to-do lists'
        },
        {
          state: false,
          task: 'Finish Documentation'
        },
        {
          state: false,
          task: 'Create Eden System Better'
        }
      ]
    }
  },
  watch: {
    newUsers(newValue, oldValue) {
      tweenTransition(newValue, oldValue, tween => {
        this.tweenedNewUsers = tween.number.toFixed(0)
      })
    },
    pageVisits(newValue, oldValue) {
      tweenTransition(newValue, oldValue, tween => {
        this.tweenedPageVisits = tween.number.toFixed(0)
      })
    },
    download(newValue, oldValue) {
      tweenTransition(newValue, oldValue, tween => {
        this.tweenDownload = tween.number.toFixed(0)
      })
    },
    switchPlayer(newValue, oldValue) {
      tweenTransition(newValue, oldValue, tween => {
        this.tweenSwitchPlayer = tween.number.toFixed(0)
      })
    }
  },
  mounted() {
    this.firstLoginnotify()
    this.randomNum()
  },
  beforeDestroy() {
    clearInterval(this.randomfn)
  },
  methods: {
    firstLoginnotify() {
      const USERNAME = Cookies.get('username') || 'Sakuya'
      if (this.$store.state.app.firstLogin === 'yep') {
        this.$notify.info({
          title: `Welcome, ${USERNAME}`,
          message: 'First login system, You can view eden system documentation',
          duration: 6000,
          offset: 60
        })
        this.$store.dispatch('setFirstLogin')
      }
    },
    randomNum() {
      this.randomfn = setInterval(() => {
        this.newUsers = randomIntegerInRange(100, 10000)
        this.pageVisits = randomIntegerInRange(100, 100000)
        this.download = randomIntegerInRange(100, 1000)
        this.switchPlayer = randomIntegerInRange(1000, 10000)
      }, 3000)
    },
    addTasks() {
      this.todolist.push({
        state: false,
        task: this.newTasks
      })
      this.newTasks = ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.flex-center
  display flex
  justify-content center
  align-items center

box-style(bg)
  width 100%
  height 130px
  background white
  display flex
  margin-top 15px
  .leftPart
    background bg
    width 130px
    @extend .flex-center
  .rightPart
    flex 1
    color #99a9c0
    @extend .flex-center
    flex-direction column
    .number
      font-size 30px
      padding-bottom 6px
    .font-center
      text-align center

.dashboard-row
  width 100%
  height 400px
  margin-top 15px
  background white

.dashboard-wrap
  margin-top: -15px
  .box1
    box-style(#41b883)
  .box2
    box-style(#9ab7e0)
  .box3
    box-style(#f7c94d)
  .box4
    box-style(#e45f5f)

  .line-chart
    @extend .dashboard-row
    padding 15px
    box-sizing border-box

  .todo-wrap
    @extend .dashboard-row
    .todo-header
      span
        font-weight bold
        color #6fb998
      .enterTodo
        float right
        width 140px
        position relative
        top -8px
        right -11px
    .todo-list
      div:not(:first-child)
        margin-top 15px
  
  .system-report
    @extend .dashboard-row
    height 520px
    .report-header
      span
        font-weight bold
        color #6fb998
    .report-content
      .el-alert:not(:first-child)
        margin-top 15px
      .progress-wrap
        margin-top 20px
        text-align center
        padding 20px
        .el-progress:not(:first-child)
          margin-left 20px
          
  .pie-wrap
    @extend .dashboard-row
    height 520px
    .pie-header
      span
        font-weight bold
        color #6fb998
</style>
