<template lang="pug">
.schedule-info
  .schedule-info--card
    .schedule-info--row
      p.text-lg {{ cardData.date }}
      p.schedule-info--status(:class="statusColor") {{ getStatus }}
    .schedule-info--col
      p Horário: {{ cardData.time }}
      p Valor: R$ {{ cardData.totalAmount }}
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import VButton from '../../../global_components/VButton.vue'

export default{
  data() {
    return {
      statusColor: ""
    };
  },
  mounted() {},
  props: {
    cardData: Object,
  },
  computed: {
    getStatus() {
      switch (this.cardData.status) {
        case 'concluded':
          this.statusColor = "bg-success-0"
          return "Concluído"
        case 'booked':
        this.statusColor = "bg-info-0"
          return "Agendado"
        case 'canceled':
        this.statusColor = "bg-error-0"
          return "Cancelado"
      default:
          break;
      }
    },
  },
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
  @apply bg-grey-2 w-full h-28 flex flex-col justify-center gap-4 rounded-xl text-center flex-shrink-0 px-4 py-2;
}
.schedule-info--row {
  @apply flex w-full justify-between font-bold;
}
.schedule-info--col {
  @apply w-full text-left;
}
.schedule-info--status {
  @apply rounded-full flex justify-center items-center text-white px-4 text-sm min-w-[100px];
}

</style>

      
    
    
    