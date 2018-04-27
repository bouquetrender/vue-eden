<template>
  <el-container>
    <el-header>
      <side-bar></side-bar>
    </el-header>
    
    <el-container>
      <el-aside>
        <nav-bar></nav-bar>
      </el-aside>

      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

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
    width: 100%
    height: 100%

  .el-header
    padding: 0 10px !important
    font-size: 0
    line-height 60px
    background: white

  .el-aside
    width: 250px !important
    background: #556d84
    color: #fff
</style>
