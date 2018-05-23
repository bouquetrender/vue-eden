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
      // TODO: cachedViews
      // return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 'calc(%s - %s)' % (100% 40px)
  padding 20px
  overflow auto
  box-sizing border-box
</style>
