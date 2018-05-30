<template>
  <div @click="handleScreenFull">
    <icon :class="`${iconClass}`" name="fullscreen" :scale="scale"></icon>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'fullscreen',
  props: {
    scale: {
      type: Number,
      default: 2.5
    },
    iconClass: {
      type: String
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      status: false
    }
  },
  methods: {
    handleScreenFull() {
      if (!this.enabled) return null
      if (!screenfull.enabled) {
        this.$message({
          message: 'fullscreen can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="stylus" scoped>
.svg-icon
  vertical-align middle
  cursor pointer
  color #515151
  transition color .28s
  &:hover
    color #41b883
</style>
