<template>
  <div class="info-area">
    <el-dropdown class="info-area__dropdown">
      <span class="el-dropdown-link">
        Sakuya<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{$t('sidebarDropDown.profile')}}</el-dropdown-item>
        <el-dropdown-item>{{$t('sidebarDropDown.lock')}}</el-dropdown-item>
        <el-dropdown-item>{{$t('sidebarDropDown.logout')}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style lang="stylus" scoped>
.info-area
  &__dropdown
    cursor pointer
    vertical-align middle
</style>
