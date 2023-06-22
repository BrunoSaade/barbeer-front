<template lang="pug">
.schedule-info
  .schedule-info--card
    .schedule-info--row
      .schedule-info--col
        p.text-lg Corte detalhado
      .schedule-info--col 
        p.text-xl R$ 50,00
        p.text-sm 15:00 - 15:40
    hr
    .schedule-info--row.gap-3
      img(
        src="../../../assets/defaultBarber.svg" 
        alt="alt" 
        class="w-[48px] h-[48px] cursor-pointer"
        @click="handleEmitOpenModal"
      )
      p.text-left Qualquer pessoa
      VButton(
        @click="handleEmitOpenModal"
        text="Alterar"
        class="!bg-orange-1"
      ).w-32.text-white
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import VButton from '../../../global_components/VButton.vue'

export default{
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    handleEmitOpenModal() {
      this.$emit('onclick')
    }
  },
  components: {VButton}
}
</script>
<style scoped>
.schedule-info--card {
  @apply bg-grey-2 w-full h-44 flex flex-col justify-center gap-4 rounded-xl text-center flex-shrink-0 px-4 py-2;
}
.schedule-info--row {
  @apply flex w-full justify-around font-bold;
}
.schedule-info--col {
  @apply w-full;
}

</style>

      
    
    
    