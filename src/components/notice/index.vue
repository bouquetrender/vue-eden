<template>
  <el-badge is-dot class="notice-area">
    <icon name="notice" :scale="2.8"></icon>
  </el-badge>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style lang="stylus" scoped>
.notice-area
  width: 26px
  height: 34px
  cursor pointer
</style>
