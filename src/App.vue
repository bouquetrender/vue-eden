<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'app',
  mounted() {
    const USERNAME = Cookies.get('username') || 'Sakuya'
    if (this.$store.state.app.firstLogin === 'yep') {
      this.$notify.info({
        title: `Welcome, ${USERNAME}`,
        message: 'First login system, You can view eden system documentation',
        duration: 6000,
        offset: 60
      })
      this.$store.dispatch('setFirstLogin')
    }
  }
}
</script>
