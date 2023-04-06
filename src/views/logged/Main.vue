<template lang="pug">
VContainer.main
  VContainer.main--sec-container
    .main--header 
      icon.main--header-icon(
        icon='fa-solid fa-bars'
        @click="handleMenuMobileOpen"
      )
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'

export default{
  data() {
      return {};
  },
  mounted() {
    this.setIsLogged(true)
  },
  computed: {},
  methods: {
    ...mapActions([
      'setIsLogged',
      'setIsMenuMobileOpen'
    ]),
    handleMenuMobileOpen() {
      this.setIsMenuMobileOpen(true)
    }
  },
  components: {
    VContainer
  }
}
</script>
<style scoped>
  .main {
    @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around;
  }
  .main--sec-container {
    @apply md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px];
  }
  .main--header {
    @apply w-full z-30 fixed top-0 left-0 right-0 p-7;
  }
  .main--header-icon {
    @apply text-4xl text-grey-0;
  }
</style>
  


