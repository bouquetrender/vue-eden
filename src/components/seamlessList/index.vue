<template>
  <vue-seamless-scroll :class-option="classOption" class="seamless-warp" :data="messageList">
    <ul class="seamless-warp__item">
      <li class="seamless-warp__li" v-for="(item, key) in messageList" :key="key">
        <div class="seamless-warp__content">
          <span class="seamless-warp__date" v-text="item.date"></span>
          <span class="seamless-warp__title" v-text="item.msg"></span>
        </div>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
export default {
  name: 'demo',
  props: {
    messageList: {
      type: Array,
      required: true
    },
    singleHeight: {
      type: Number,
      default: 20
    },
    limitMoveNum: {
      type: Number,
      default: 3
    },
    waitTime:{
      type: Number,
      default: 2000
    },
  },
  data () {
    return {
    }
  },
  computed: {
    classOption() {
      return {
        singleHeight: this.singleHeight,
        limitMoveNum: this.limitMoveNum,
        waitTime: this.waitTime,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.seamless-warp
  font-size 14px
  height 60px
  overflow hidden
  cursor pointer
  &__content
    transition color .4s
    height 60px
    width 100%
    &:hover
      color #333333
  &__date
    margin-right 8px
</style>
