<template>
  <div class="tags-view">
  </div>
</template>

<script>
export default {
  name: 'tagsviews'
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

.tags-view
  background tags-bar-color
  height 40px
  width 100%
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)
  border-top 1px solid #e6e6e6
  box-sizing border-box
</style>
