<template>
  <el-container>
    <el-header>
      <nav-bar />
    </el-header>
    
    <el-container>
      <el-aside :width="asideWidth">
        <side-bar />
      </el-aside>

      <el-main>
        <tags-view />
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AppMain from './AppMain'
import TagsView from './TagsView'

export default {
  name: 'Layout',
  components: {
    'side-bar': Sidebar,
    'nav-bar': Navbar,
    'app-main': AppMain,
    'tags-view': TagsView
  },
  computed: {
    asideWidth() {
      return this.$store.getters.getSliderStateWidth
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-container
    width 100%
    height 100%

  .el-header
    padding 0
    font-size 0
    line-height 60px
    background white
    box-sizing border-box
    overflow hidden

  .el-aside
    transition width .4s
    background #556d84
    color #fff

  .el-main
    padding 0
    height 100%
    overflow auto
</style>
