<template>
  <div class="sidebar-wrap">
    <div class="left-area">
      <icon class="el-header__icon" name="tree" :scale="4"></icon>
      <span class="el-header__title">
        VUE<span class="subtitle">EDEN</span>
        <span class="version-wrap">
          {{system_version}}
        </span>
      </span>
    </div>

    <div class="middle-area">
      <div class="middle-area__cgwrap" @click="handleSwitchNavbar">
        <icon class="category-icon" name="category" :scale="2.8"></icon>
      </div>

      <div class="middle-area__msglist">
        <breadcrumb />
        
        <seamless-list 
          :messageList="messageList"
          :singleHeight="60"
          :limitMoveNum="2"
        />
      </div>
    </div>

    <div class="right-area">
      <lang-select />
      <notice />
      <fullscreen class="fullscreen" />
      <infodrop />
    </div>
  </div>
</template>

<script>
import fullscreen from '@/components/fullscreen'
import notice from '@/components/notice'
import langselect from '@/components/langselect'
import infodrop from './SidebarInfoDrop'
import seamlessList from '@/components/seamlessList'
import breadcrumb from '@/components/breadcrumb'
import dayjs from 'dayjs'

export default {
  name: 'Sidebar',
  components: {
    fullscreen,
    notice,
    infodrop,
    breadcrumb,
    'lang-select': langselect,
    'seamless-list': seamlessList
  },
  mounted() {},
  data() {
    return {
      system_version: this.$store.state.app.version,
      messageList: [
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: 'You have a new message from unknown name.'
        },
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: 'Chekcout today eden system report.'
        },
        {
          date: dayjs().format('YYYY-MM-DD'),
          msg: 'Eden system has some new update, check it.'
        }
      ]
    }
  },
  methods: {
    handleSwitchNavbar() {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

right-area-width = 250px

.el-header
  position relative

  .sidebar-wrap
    display flex

  .left-area
    width 240px
    padding-left 12px
    box-sizing border-box
  
  .middle-area
    height 60px
    flex 1
    &__cgwrap
      float left
      height 100%
      .category-icon
        cursor pointer
        height 100%
        margin 0 20px 0 15px
    &__msglist
      float left
      height 60px
      width 80%
      color #808080
      font-weight 500
    &:after
      content ''
      clear both
      display block
      width 100%

  .right-area
    padding-right 16px
    height 60px
    width right-area-width
    display flex
    align-items center
    justify-content flex-end
    .fullscreen
      height: 100%
      padding: 0 22px

  &__title
  &__icon
    vertical-align middle

  &__title
    font-size 20px
    font-weight bold
    color main-color
    .subtitle
      color sub-color
    .version-wrap
      background #eaeaea
      padding 3px 8px
      font-size 12px
      margin-left 8px
      border-radius 3px
      vertical-align top
</style>
