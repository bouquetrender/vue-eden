<template>
  <div class="sidebar-wrap">
    <div class="left-area">
      <icon class="el-header__icon" name="tree" :scale="4"></icon>
      <span class="el-header__title">
        VUE<span class="subtitle">EDEN</span>
        <span class="version-wrap">{{system_version}}</span>
      </span>
    </div>

    <div class="middle-area">
      <div class="middle-area__cgwrap" @click="handleSwitchNavbar">
        <icon class="category-icon" name="category" :scale="2.8"></icon>
      </div>

      <div class="middle-area__msglist">
        <vue-seamless-scroll :class-option="classOption" class="seamless-warp" :data="messageList">
          <ul class="seamless-warp__item">
            <li class="seamless-warp__li" v-for="(item, key) in messageList" :key="key">
              <div class="seamless-warp__content">
                <span class="seamless-warp__date" v-text="item.date"></span>
                <span class="seamless-warp__title" v-text="item.msg"></span>
              </div>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>

    <div class="right-area">

      <lang-select></lang-select>

      <notice></notice>
      
      <fullscreen class="fullscreen"></fullscreen>

      <infodrop></infodrop>

    </div>
  </div>
</template>

<script>
import fullscreen from '@/components/fullscreen'
import notice from '@/components/notice'
import langselect from '@/components/langselect'
import infodrop from './SidebarInfoDrop'
import dayjs from 'dayjs'

export default {
  name: 'Sidebar',
  components: {
    fullscreen,
    notice,
    'lang-select': langselect,
    infodrop
  },
  mounted() {

  },
  data() {
    return {
      system_version: this.$store.state.app.version,
      messageList: [
        {
          date: dayjs().format('YYYY/MM/DD'),
          msg: 'You have a new message from unknown name.' 
        },
        {
          date: dayjs().format('YYYY/MM/DD'),
          msg: 'Chekcout today eden system report.' 
        },
        {
          date: dayjs().format('YYYY/MM/DD'),
          msg: 'Eden system has some new update, check it.' 
        }
      ]
    }
  },
  methods: {
    handleSwitchNavbar() {
      this.$store.dispatch('toggleSideBar')
    }
  },
  computed: {
    classOption() {
      return {
        singleHeight: 60,
        limitMoveNum: 2,
        waitTime: 2000,
      }
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
    width 220px
    padding-left 8px
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
        margin 0 20px
    &__msglist
      float left
      height 60px
      width 80%
      color #565656
      font-weight 500
      .seamless-warp
        font-size 14px
        height 60px
        overflow hidden
        cursor pointer
        &__content
          transition color .4s
          height 60px
          width 100%
          &:hover
            color #333333
        &__date
          margin-right 8px
    &:after
      content: ''
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
    margin-left -4px
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
