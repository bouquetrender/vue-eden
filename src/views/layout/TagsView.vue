<template>
  <div class="tags-view">
    <div ref="tagsView"
      class="tags-outer" 
      @mousewheel="handlescroll"
      @DOMMouseScroll="handlescroll">
      <div class="tags-handle">
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
            {{$t('tags.handle')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="closeOther">{{$t('tags.closeother')}}</el-dropdown-item>
            <el-dropdown-item command="closeAll">{{$t('tags.closeall')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div ref="tagsScroll"
        class="tags-inner"
        :style="{ left: tagsScrollLeft + 'px' }">
        <el-tag
          size="large"
          color="white"
          v-for="tag in tags"
          :key="tag.name"
          :closable="true"  
          @on-close="closePage"
          @click.native="linkTo(tag)">
          {{tag.name}}
        </el-tag>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'tagsviews',
  data() {
    return {
      tagsScrollLeft: 0,
      tags: [
        { name: '标签一' },
        { name: '标签二' },
        { name: '标签三' },
        { name: '标签四' },
        { name: '标签五' },
        { name: '标签六' }
      ]
    }
  },
  methods: {
    closePage() {},
    linkTo(tag) {},
    handleCommand(command) {},
    handlescroll() {},
    getTitle(title) {
      if (this.$te(`route.${title}`)) {
        return this.$t(`route.${title}`)
      }
      return title
    }
  }
}
</script>

<style lang="stylus">
.tags-handle
  .el-button--medium
    padding 11px 16px
    border-radius 0

.tags-inner
  .el-tag
    border-radius 2px
    cursor pointer
    border 1px solid #e9eaec
    color #4c4c4c
    margin 1px 4px 0px 0px
</style>

<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

.tags-view
  background tags-bar-color
  height 40px
  width 100%
  box-shadow 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)
  border-top 1px solid #e6e6e6
  box-sizing border-box
  overflow hidden
  z-index -1
  .tags-outer
    width 100%
    height 100%
    position relative
    box-sizing border-box
    padding-right 120px
  .tags-handle
    overflow hidden
    width 108px
    height 100%
    position absolute
    right 0
    top 0
    box-sizing border-box
    text-align center
    background white
    box-shadow -3px 0 15px 3px rgba(0, 0, 0, .1)
    z-index 10
  .tags-inner
    height 100%
    overflow visible
    white-space nowrap
    position absolute
    box-sizing border-box
    padding 2px 10px
    transition left .3s ease
</style>
