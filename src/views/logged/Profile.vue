<template lang="pug">
VContainer.profile
  VContainer.profile--sec-container
    .profile--row
      img(
        src="../../assets/defaultBarber.svg" 
        alt="alt" 
        class="w-[250px] h-[250px] cursor-pointer"
      )
    VInput(
      placeholder="Nome e sobrenome"
      class="mt-10"
      inputId="NOME"
      @value="name"
    )#NOME
    VInput(
      placeholder="Telefone"
      class="mt-4"
      inputId="Phone"
      @value="phone"
      vmask="(00) 00000-0000"
    )#Phone
    VInput(
      placeholder="E-mail"
      class="mt-4"
      inputId="Email"
      @value="email"
    )#Email
    VInput(
      placeholder="Senha atual"
      class="mt-4"
      inputId="Password"
      inputType="password"
      @value="password"
    )#Password
    VInput(
      placeholder="Senha nova"
      class="mt-4"
      inputId="PasswordNew"
      inputType="password"
    )#PasswordNew
    VInput(
      placeholder="Confirme sua senha"
      class="mt-4"
      inputId="PasswordConfirm"
      inputType="password"
    )#PasswordConfirm
    .profile--row
      VButton(
        text="Editar perfil"
        class="md:w-6/12"
      ).w-40.mt-10.text-white.disable
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../../global_components/VContainer.vue'
import VInput from '../../global_components/VInput.vue'
import VButton from '../../global_components/VButton.vue'

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
    VInput,
    VButton
  }
}
</script>
<style scoped>
.profile {
  @apply bg-primary-0 h-screen max-w-full place-content-center flex md:items-center md:justify-around;
}
.profile--sec-container {
  @apply  max-w-[400px] md:max-w-[580px] mt-20;
}
.profile--row {
  @apply flex justify-center;
}
.navbar--mobile-avatar {
  @apply flex justify-center mt-20;
}
</style>
  


