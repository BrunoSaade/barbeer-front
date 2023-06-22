<template lang="pug">
VModal(
  v-show="mustShowModal"
  title="Escolha o barbeiro"
  @closeModal="mustShowModal = !mustShowModal"
)
  .vmodal--barber-option(
    :key="index" 
    v-for="barber, index in barbers"
  )
    img(
      src="../../assets/defaultBarber.svg" 
      alt="alt" 
      class="w-[48px] h-[48px] cursor-pointer"
    )
    .vmodal--barber-data
      p {{ barber.name }}
      p.text-sm(:class="barber.available ? 'text-success-0' : 'text-error-0'") {{ barber.available ? 'Disponível' : 'O barbeiro tem outros agendamentos no horário selecionado'}}
VContainer.main
  VContainer.main--sec-container
    VDatePicker 
    VTurnPicker.mt-6
    VTimePicker.mt-6
    ScheduleInfo(@onclick="mustShowModal = !mustShowModal").mt-6
    .flex-col.text-white.text-end.my-5
      p.text-sm Total
      p.text-xl R$ 50,00
      P.text-sm 40min
    .flex.justify-center
      VButton(
          @click="handleBooking"
          text="Agendar"
          class="!bg-orange-1"
        ).w-32.text-white 
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'
import VDatePicker from '../../global_components/VDatePicker.vue'
import VTimePicker from '../../global_components/VTimePicker.vue'
import VTurnPicker from '../../global_components/VTurnPicker.vue'
import ScheduleInfo from '../../components/partials/schedule/ScheduleInfo.vue'
import VModal from '../../global_components/VModal.vue'
import PrivacyPolicie from '../../global_components/PrivacyPolicie.vue'
import VButton from '../../global_components/VButton.vue'

export default{
  data() {
      return {
        mustShowModal: false,
        barbers: [
          {
            name: 'Bruno',
            available: true,
          },
          {
            name: 'Jose',
            available: true,
          },
          {
            name: 'Rafael',
            available: false,
          },
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
    handleBooking() {
      console.log("Agendar")
    }
  },
  components: {
    VContainer,
    VDatePicker,
    VTimePicker,
    VTurnPicker,
    ScheduleInfo,
    VModal, 
    PrivacyPolicie,
    VButton
  }
}
</script>
<style scoped>
  .main {
    @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around pt-32;
  }
  .main--sec-container {
    @apply block max-w-[360px] md:max-w-[500px];
  }
  .vmodal--barber-option {
    @apply flex justify-start items-center gap-4 w-full border-b py-5;
  }
</style>
  


