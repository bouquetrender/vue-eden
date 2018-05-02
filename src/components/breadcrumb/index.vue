<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb'
}
</script>

<style lang="stylus" scoped>
.breadcrumb
  display inline-block
  min-width 50px
  line-height 60px
</style>
