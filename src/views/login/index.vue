<template>
  <div class="login-page">
    <div class="login-wrap">
      <el-col class="login-col" :span="10">
        <div class="logo">
          <icon name="tree" :scale="8"></icon>
          <div class="title">
            <a>
              <span>VUE</span><span class="subtitle">EDEN</span>
            </a>
          </div>
        </div>
        
        <div class="login-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-ruleForm">
            <el-form-item prop="username">
              <el-input placeholder="please enter username" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="please enter password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item class="btn">
              <el-button :loading="loading" type="primary" @click="handleLogin('ruleForm')">Login</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="login-footer">
          <el-col :span="12">
            <el-checkbox v-model="remember" label="Remember" name="type"></el-checkbox>
          </el-col>
          <el-col class="forgetpwd" :span="12">
            <span>Forget Password</span>
          </el-col>
        </div>
      </el-col>

      <el-col class="login-col" :span="14">
        <div class="wallpaper"></div>
      </el-col>
    </div>
  </div>
</template>

<script>
const useRegexp = {
  exist: /\S+/
}

const validobj = {
  username: [{ ruleName: 'exist', error: 'please input username !' }],
  password: [{ ruleName: 'exist', error: 'please input password !' }]
}

export default {
  name: 'login',
  data() {
    const validfn = (rule, value, callback) => {
      const _validobj = validobj[rule.field.replace(/^\S+(?=\.)\./g, '')]
      const _typeof = val =>
        Object.prototype.toString
          .call(val)
          .replace(/^\S+\s/, '')
          .replace(/]$/, '')
          .toLocaleLowerCase()
      for (let i = 0; i < _validobj.length; i++) {
        let _rule = useRegexp[_validobj[i].ruleName]
        if (_typeof(_rule) === 'regexp') {
          if (!_rule.test(value)) {
            return callback(new Error(_validobj[i].error))
          }
        } else if (_typeof(_rule) === 'function') {
          if (_rule(value, _validobj[i].params)) {
            return callback(new Error(_validobj[i].error))
          }
        }
      }
      callback()
    }

    return {
      ruleForm: {
        username: 'admin',
        password: ''
      },
      rules: {
        username: [{ validator: validfn, trigger: 'blur', required: true }],
        password: [{ validator: validfn, trigger: 'blur', required: true }]
      },
      remember: true,
      loading: false
    }
  },
  methods: {
    handleLogin(formName) {
      this.loading = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, password } = this.ruleForm
          this.$store
            .dispatch('loginbyUser', {
              username: username.trim(),
              password: password
            })
            .then(response => {
              this.loading = false
              if (response.data) {
                this.$router.push({ path: '/' })
              } else {
                this.$message({
                  message: response.message,
                  type: 'error',
                  duration: 10000,
                  showClose: true
                })
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          this.loading = false
          this.$message.error('Login form does not pass !')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.login-form
  .el-form-item__content
    line-height 40px
  .el-input__inner
    padding-top: 2px;
    height 40px
    line-height 40px

.btn button
    width: 100%
    padding 12px 20px
</style>

<style lang="stylus" scoped>
@import "../../assets/styl/variables.styl"

.login-col
  height 100%

.login-page
  display flex
  justify-content center
  align-items center
  position absolute
  height 100%
  width 100%

.login-wrap
  width 900px
  height 400px
  background white
  border-radius 4px
  transform translateY(-25px)

  .logo
    padding-top 26px
    text-align center
    .title
      font-weight bold
      color main-color
      padding-top 8px
      font-size 22px

      a
        cursor cell
      a:before
        content '['
        opacity 0
        margin-right 10px

        transform translateX(-10px)
        transition transform .2s, opacity .2s
      a:after
        content ']'
        opacity 0
        margin-left 10px

        transform translateX(10px)
        transition transform .2s, opacity .2s
      a:hover:before
      a:hover:after
        opacity 1
        transform translateX(0)

    .subtitle
      color sub-color

  .login-form
    padding 30px
    padding-bottom 0

  .login-footer
    padding 0 30px 
    .forgetpwd
      text-align right 
      span
        cursor pointer
        font-size 14px
        font-weight 500
        color #606266

  .wallpaper
    width 100%
    height 100%
    background url('../../assets/images/loginwallpaper.jpg')
    background-size cover
</style>
