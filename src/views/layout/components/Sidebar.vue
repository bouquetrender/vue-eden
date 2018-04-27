<template>
  <div>
    <icon class="el-header__icon" name="tree" :scale="4"></icon>
    <span class="el-header__title">
      VUE<span class="mainver">EDEN</span> <span class="version_name">{{version}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      version: this._VERSION
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header
    &__title
    &__icon
      vertical-align: middle
    &__title
      margin-left: -4px
      font-size: 20px
      font-weight: bold
      color: #41b883
      .mainver
        color: #0e2b46
      .version_name
        background: #eaeaea
        padding: 3px 8px
        font-size: 12px
        margin-left: 8px
        border-radius: 3px
        vertical-align: top
</style>
