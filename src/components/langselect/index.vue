<template>
  <div class="el-langselect">
    <el-dropdown trigger="click" @command="handleSetLanguage">
      <div class="el-langselect__box">
        <icon class="el-langselect__icon" name="earth" :scale="2.9"></icon>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'langselect',
  computed: {
    language() {
      return this.$store.state.app.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      const message = this.$t('app.switchlang')
      this.$message({
        message,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-langselect
  padding 0 20px
  &__box
    cursor pointer
  &__icon
    vertical-align middle
    color #515151
    transition color .28s
    &:hover
      color #41b883
</style>
