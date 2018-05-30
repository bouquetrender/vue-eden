<template>
  <div class="profile-container">
    <el-row class="header">
      <el-col :sm="24" :lg="12" class="header-left">
        <div class="header-avatar">
          <img :src="avatarUrl" />
        </div>
        <div class="header-content">
          <div class="title">
            早上好 {{username}}，您有 <span>6</span> 条未读消息请尽快查阅。
          </div>
          <div class="sub">
            职位：前端工程师 (EGOJUMP 公司 - 研发部)
          </div>
          <div class="sub">
            最后登陆时间：{{lastLoginDate}}
          </div>
        </div>
      </el-col>
      <el-col :sm="24" :lg="12"></el-col>
    </el-row>

    <el-row class="profile-content" :gutter="20">
      <el-col :sm="24" :lg="18" class="profile-content__left">
        <el-alert
          title="提示：您在 2018/05/23 生成的系统报告已提交成功"
          type="success">
        </el-alert>
        <el-alert
          title="警告：目前系统有三个资源值请求数量过大"
          type="warning">
        </el-alert>
        <el-card shadow="hover">
          <div slot="header">
            <span class="card-title">个人动态</span>
          </div>
          <div class="feed" v-for="(item, index) in feedmock" :key="index">
            <div class="line">
              <div>{{item.content}}</div>
              <div class="time">{{item.time}}</div>
              <el-button class="details" type="primary" size="mini" plain>详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="6" class="profile-content__right">
        <el-input
          size="medium"
          placeholder="搜索伊甸园"
          suffix-icon="el-icon-search"
          v-model="search">
        </el-input>

        <el-card shadow="hover">
          <div slot="header">
            <span class="card-title">信息模块</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
          </div>
        </el-card>

        <el-card shadow="hover">
          <div slot="header">
            <span class="card-title">信息模块</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
            Lorem ipsum dolor sit amet consiquest dio.
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'

const feedmock = [
  {
    content: '审核 NeverBehave/telegram-recorder 项目并通过',
    time: '一小时前'
  },
  {
    content: '开始监控 spring-raining 和另外两个用户',
    time: '五小时前'
  },
  {
    content: '审核 tonsky/FiraCode 项目并通过',
    time: '一天前'
  },
  {
    content: '开始监控 vladocar 和另外两个用户',
    time: '一天前'
  },
  {
    content: '开始监控 skevy 和另外五个用户',
    time: '五天前'
  },
  {
    content: '开始监控 ChainCool 和另外两个用户',
    time: '十二天前'
  },
  {
    content: '创建了一个项目命名 Sakuyakun/vue-eden',
    time: '一个月前'
  }
]

const visitHistoryMock = [
  '权限控制',
  '首页',
  '控件',
  '个人中心',
  '表格展示',
  '组件展示',
  '审核列表',
  '帮助中心',
  '消息列表'
]

export default {
  name: 'profile',
  data() {
    return {
      search: '',
      feedmock,
      visitHistoryMock,
      avatarUrl: this.$store.state.user.avatar,
      username: this.$store.state.user.name,
      lastLoginDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

title-color = #464646
title-sub = #8c8c8c

.profile-container
  .el-card
    font-size 14px

  @extend .edenfont-content
  width 100%
  .header
    padding 15px
    margin -15px
    box-sizing unset
    background white
    height 130px
    &-left
      height 100%
      display flex
      box-sizing border-box
      align-items center
    &-avatar
      margin-left 20px
      display inline-block
      vertical-align middle
      width 100px
      img 
        border-radius 50%
        width 100%
    &-content
      flex 1
      margin-left 20px
      height 85px
      display inline-block
      vertical-align middle
      .title
        font-size 18px
        font-weight bold
        color title-color
        span
          cursor pointer
          color main-color
          &:hover
            text-decoration-line underline
      .sub
        margin-top 20px
        color title-sub
        font-size 14px
      .sub:last-child
        margin-top 10px

  .profile-content
    margin-top 30px
    &__left
      margin-bottom 20px
      .el-alert
        margin-bottom 20px
      .feed
        height 63px
        border-bottom 1px solid #e0e0e0
        .line
          position relative
        .time
          color #a7a7a7
          font-size 14px
          margin-top 10px
        .details
          position absolute
          right 0
          top 0
      .feed:not(:first-child)
        margin-top 25px
      .feed:last-child
        border-bottom 0px

    &__right
      .el-card:not(:first-child)
        margin-top 20px
    .card-title
      color #585858
</style>
