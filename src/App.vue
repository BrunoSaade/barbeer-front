<template lang="pug">
#app.app-container
  Navbar(v-if="isLogged")
  router-view
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import Navbar from './global_components/Navbar.vue'
import Home from './views/Home.vue';
export default{
  components: { Navbar, Home },
  data() {
      return {};
  },
  mounted() {},
  computed: {
    ...mapGetters([
        'getIsLogged'
      ]),
      isLogged() {
        return this.getIsLogged
      }
  },
  methods: {},
}
</script>
<style scoped>
  .text-black{
    color: rgb(113, 42, 42);
  }
</style>
