<template>
  <div class="info-area">
    <el-dropdown @command="dropdownComm" class="info-area__dropdown">
      <span class="el-dropdown-link">
        Sakuya<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">{{$t('sidebarDropDown.profile')}}</el-dropdown-item>
        <el-dropdown-item command="lock">{{$t('sidebarDropDown.lock')}}</el-dropdown-item>
        <el-dropdown-item command="logout">{{$t('sidebarDropDown.logout')}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    dropdownComm(command) {
      switch (command) {
        case 'logout':
          this.logouthandle()
          break
        case 'lock':
          this.lockhandle()
          break
        case 'profile':
          this.profilehandle()
          break
      }
    },
    async logouthandle() {
      await this.$store.dispatch('logout')
      window.location.reload()
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-area
  &__dropdown
    cursor pointer
    vertical-align middle
</style>
