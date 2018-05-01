<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (this.$store.state.app.firstLogin === 'yep') {
      this.$notify({
        title: 'Welcome, Sakuya',
        message: 'First login system, You can view eden system documentation',
        duration: 0
      });
      this.$store.dispatch('setFirstLogin')
    }
  }
}
</script>
