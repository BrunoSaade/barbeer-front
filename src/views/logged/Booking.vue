<template lang="pug">
VContainer.booking
  VContainer.booking--sec-container
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
    ]),
  },
  components: {
    VContainer
  }
}
</script>
<style scoped>
.booking {
    @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around;
  }
  .booking--sec-container {
    @apply md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px];
  }
</style>
  


