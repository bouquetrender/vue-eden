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

    </div>

    <div class="right-area">

      <notice></notice>
      
      <fullscreen class="fullscreen"></fullscreen>

      <div class="info-area">
        <el-dropdown class="info-area__dropdown">
          <span class="el-dropdown-link">
            Sakuya<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Lock</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>
  </div>
</template>

<script>
import fullscreen from '@/components/fullscreen'
import notice from '@/components/notice'

export default {
  name: 'Sidebar',
  components: {
    fullscreen,
    notice
  },
  data () {
    return {
      system_version: this.$store.state.app.version
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styl/variables.styl"

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
    flex 1

  .right-area
    padding-right 16px
    height 60px
    width right-area-width
    display flex
    align-items center
    justify-content flex-end

    .info-area
      &__dropdown
        cursor pointer
        vertical-align middle

    .fullscreen
      height: 60px
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
