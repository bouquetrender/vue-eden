<template>
  <el-menu
    class="sidebar-menu"
    mode="vertical"
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    background-color="#556d84"
    text-color="#fff"
    active-text-color="#41B883"
  >
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    sidebarItem
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routers']),
    isCollapse() {
      if (this.sidebar.sliderState === 'full') {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar-menu
  border none
  height 100%
  width 100% !important
</style>
