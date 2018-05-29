<template>
  <div class="notfound-wrap">
    <div class="content">
      <div class="title"><span>401</span> Permission Denied</div>
      <div class="sub">We couldn't find what you were looking for.</div>
      <el-button type="primary" @click="returnPrevPage">Back Home</el-button>
      <el-button type="primary" plain>Check Docs</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page401',
  methods: {
    returnPrevPage() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.notfound-wrap
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  transform translateY(-80px)
  .content
    text-align right
    .title
      -webkit-font-smoothing antialiased
      color #73b99a
      font-size 100px
      span
        font-size 240px
    .sub
      font-size 30px
      color #ccc
      padding-bottom 50px
</style>
