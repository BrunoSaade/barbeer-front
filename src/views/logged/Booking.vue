<template lang="pug">
VContainer.booking
  VContainer.booking--sec-container
    .register--arrowBack(@click="handleBack")
      icon.cursor-pointer(icon='fa-solid fa-arrow-left')
      p.ml-3.cursor-pointer Voltar
    BookingCard.mt-4(:key="index" v-for="data, index in cardData" :cardData="data")
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'
import BookingCard from '../../components/partials/booking/BookingCard.vue'

export default{
  data() {
      return {
        cardData: [
          {
            date: '10/02/2023',
            status: 'concluded',
            time: '15:40',
            totalAmount: "50,00",
          },
          {
            date: '15/08/2023',
            status: 'booked',
            time: '08:40',
            totalAmount: "50,00",
          },
          {
            date: '12/06/2023',
            status: 'canceled',
            time: '08:40',
            totalAmount: "50,00",
          }
        ]
      };
  },
  mounted() {
    this.setIsLogged(true)
  },
  computed: {},
  methods: {
    ...mapActions([
      'setIsLogged',
    ]),
    handleBack() {
      this.$router.push('/logged/main')
    }
  },
  components: {
    VContainer,
    BookingCard
  }
}
</script>
<style scoped>
.booking {
  @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around;
}
.booking--sec-container {
  @apply max-w-[400px] md:max-w-[580px] mt-20;
}
.vturn-picker--card {
  @apply bg-grey-2 hover:bg-grey-3 w-32 h-8 rounded-lg text-center flex justify-center items-center cursor-pointer;
}
.register--arrowBack {
  @apply flex text-xl text-left items-center text-grey-0 mb-5;
}
</style>
  


