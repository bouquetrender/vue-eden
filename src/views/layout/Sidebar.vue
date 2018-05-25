<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      class="sidebar-menu"
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="bg"
      :text-color="tc"
      :active-text-color="atc">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  data() {
    return {
      bg: '#556d84',
      tc: '#fff',
      atc: '#41B883'
    }
  },
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
