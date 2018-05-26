<template>
  <div class="dashboard-wrap">
    <el-row :gutter="20">
      <el-col :span="6">
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
      <el-col :span="6">
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
      <el-col :span="6">
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
      <el-col :span="6">
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
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import TWEEN from '@tweenjs/tween.js'

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

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
  name: 'home',
  data() {
    return {
      newUsers: 0,
      tweenedNewUsers: 0,
      pageVisits: 0,
      tweenedPageVisits: 0,
      download: 0,
      tweenDownload: 0,
      switchPlayer: 0,
      tweenSwitchPlayer: 0,
      randomfn: null
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
    this.randomfn = null
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
        this.newUsers = randomIntegerInRange(0, 10000)
        this.pageVisits = randomIntegerInRange(0, 100000)
        this.download = randomIntegerInRange(0, 1000)
        this.switchPlayer = randomIntegerInRange(0, 10000)
      }, 3000)
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

.dashboard-wrap
  .box1
    box-style(#41b883)
  .box2
    box-style(#9ab7e0)
  .box3
    box-style(#f7c94d)
  .box4
    box-style(#e45f5f)
</style>
