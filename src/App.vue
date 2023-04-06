<template lang="pug">
#app.app-container
  Navbar(v-if="isLogged")
  .app-container-logged--header(v-if="isLogged")
    icon.app-container-logged--header-icon(
      icon='fa-solid fa-bars'
      @click="handleMenuMobileOpen"
    )
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
      },
  },
  methods: {
    ...mapActions([
      'setIsMenuMobileOpen'
    ]),
    handleMenuMobileOpen() {
        this.setIsMenuMobileOpen(true)
      }
  },
}
</script>
<style scoped>
  .text-black{
    color: rgb(113, 42, 42);
  }
  .app-container-logged--header {
    @apply w-full z-30 fixed top-0 left-0 right-0 p-7;
  }
  .app-container-logged--header-icon {
    @apply text-4xl text-grey-0;
  }
</style>
