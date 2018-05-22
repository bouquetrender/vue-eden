<template>
  <section class="main">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      // return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style scoped>
.main {
  height: calc(100% - 40px)
}
</style>

<style lang="stylus" scoped>
.main
  padding 20px
  overflow auto
  box-sizing border-box
</style>
