<template lang="pug">
VContainer.register.bg-primary-0.h-screen.max-w-full.place-content-center(class="flex md:items-center md:justify-around")
  VContainer(class="md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px]")
    p main
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'
import VInput from '../../global_components/VInput.vue'
import VButton from '../../global_components/VButton.vue'
import VCheckBox from '../../global_components/VCheckBox.vue'
  export default{
    data() {
        return {};
    },
    mounted() {},
    computed: {
      ...mapGetters([
        'getCpf'
      ]),
    },
    methods: {
      ...mapActions([
        "setCpf",
        "setName",
        "setSurname",
        "setDob",
        "setEmail",
        "setPhone",
        "setPassword"
      ]),
      cpf(value) {
        this.setCpf(value)
      },
      name(value) {
        this.setName(value)
      },
      surname(value) {
        this.setSurname(value)
      },
      dob(value) {
        this.setDob(value)
      },
      email(value) {
        this.setEmail(value)
      },
      phone(value) {
        this.setPhone(value)
      },
      password(value) {
        this.setPassword(value)
      },
      handleLogin(){
        this.$router.push('/')
      },
      handleBack(){
        this.$router.push('/')
      },
    },
    components: {
      VContainer, 
      VInput,
      VButton,
      VCheckBox
    }
}
</script>
<style scoped>
.register--arrowBack {
  @apply flex text-xl text-left items-center text-grey-0 mb-5 md:hidden;
}
</style>
  


