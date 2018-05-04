<template>
  <el-menu
    mode="vertical"
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  ></el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
