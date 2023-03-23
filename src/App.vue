<template lang="pug">
#app.app-container
  router-view
</template>
<script>
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue';
export default{
  components: { Navbar, Home },
  data() {
      return {};
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
  .text-black{
    color: rgb(113, 42, 42);
  }
</style>
