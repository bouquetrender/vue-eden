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
        <!-- tags views here -->
        <app-main />
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AppMain from './AppMain'

export default {
  name: 'Layout',
  components: {
    'side-bar': Sidebar,
    'nav-bar': Navbar,
    'app-main': AppMain
  }
}
</script>

<style lang="stylus" scoped>
  .el-container
    width 100%
    height 100%

  .el-header
    box-sizing border-box
    padding 0
    font-size 0
    line-height 60px
    background white
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)

  .el-aside
    width 220px !important
    background #556d84
    color #fff

  .el-main
    padding: 0
</style>
