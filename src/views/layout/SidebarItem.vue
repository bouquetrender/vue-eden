<template>
  <div class="sidebar-wrap">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <router-link 
        v-if="onlyOneShowingChildren(item.children) && !item.children[0].children && !item.alwaysShow" 
        :key="item.children[0].name"
        :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <icon
            v-if="item.children[0].meta && item.children[0].meta.icon" 
            :name="item.children[0].meta.icon" 
            :scale="2">
          </icon>
          <span
            slot="title"
            v-if="item.children[0].meta && item.children[0].meta.title">
            {{generateTitle(item.children[0].meta.title)}}
          </span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  methods: {
    onlyOneShowingChildren(children) {
      return children.filter(item => !item.hidden).length === 1
    },
    generateTitle(title) {
      const hasKey = this.$te('route.' + title)
      const translatedTitle = this.$t('route.' + title)

      if (hasKey) {
        return translatedTitle
      }
      return title
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-menu-item
  font-family "PingFang SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", "微软雅黑", Arial, sans-serif !important
  font-size 0
  svg
    margin-right 10px
  span 
    font-size 14px
.svg-icon
  fill currentColor
</style>
