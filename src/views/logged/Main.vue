<template lang="pug">
VContainer.register.bg-primary-0.h-screen.max-w-full.place-content-center(class="flex md:items-center md:justify-around")
  VContainer(class="md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px]")
    p main
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
      'setIsLogged'
    ]),
  },
  components: {
    VContainer
  }
}
</script>
<style scoped>
.register--arrowBack {
  @apply flex text-xl text-left items-center text-grey-0 mb-5 md:hidden;
}
</style>
  


