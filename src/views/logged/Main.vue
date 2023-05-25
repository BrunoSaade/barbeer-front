<template lang="pug">
VContainer.main
  VContainer.main--sec-container
    VDatePicker 
    VTurnPicker.mt-4
    VTimePicker.mt-4
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'
import VDatePicker from '../../global_components/VDatePicker.vue'
import VTimePicker from '../../global_components/VTimePicker.vue'
import VTurnPicker from '../../global_components/VTurnPicker.vue'

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
    VContainer,
    VDatePicker,
    VTimePicker,
    VTurnPicker
  }
}
</script>
<style scoped>
  .main {
    @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around pt-32;
  }
  .main--sec-container {
    @apply md:flex md:items-center md:justify-around max-w-[360px] md:max-w-[2008px];
  }
</style>
  


