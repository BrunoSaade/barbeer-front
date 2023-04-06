<template lang="pug">
VContainer.profile
  VContainer.profile--sec-container
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'

export default{
  data() {
      return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    VContainer
  }
}
</script>
<style scoped>
.profile {
    @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around;
  }
  .profile--sec-container {
    @apply md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px];
  }
</style>
  


