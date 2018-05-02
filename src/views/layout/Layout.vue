<template>
  <el-container>
    <el-header>
      <nav-bar />
    </el-header>
    
    <el-container>
      <el-aside>
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

  .el-aside
    width 240px !important
    background #556d84
    color #fff

  .el-main
    padding: 0
</style>
