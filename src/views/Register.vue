<template lang="pug">
VModal(
  :class="[{'hidden': !mustShowModal}]" 
  @closeModal="mustShowModal = !mustShowModal"
)  
VContainer.register.bg-primary-0.h-screen.max-w-full.place-content-center(class="flex md:items-center md:justify-around")
  VContainer(class="md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px]")
    .register--logo.hidden(class="lg:block")
      img(
        src="../assets/Logo.svg",
        class="sm:max-w-[300px] md:max-w-full"
      )
    .register--inputs(class="md:w-[500px]")    
      p.text-3xl.text-orange-0.font-bold.mb-7.hidden(class="lg:text-4xl md:block") Faça seu cadastro
      .register--arrowBack(@click="handleBack")
        icon(icon='fa-solid fa-arrow-left')
        p.ml-3 Voltar
      VInput(
        placeholder="CPF"
        class="mt-2"
        inputId="CPF"
        @value="cpf"
        vmask="000.000.000-00"
      )#CPF
      VInput(
        placeholder="Nome"
        class="mt-2"
        inputId="Name"
        @value="name"
      )#Name
      VInput(
        placeholder="Sobrenome"
        class="mt-2"
        inputId="Surname"
        @value="surname"
      )#Surname
      VInput(
        placeholder="Data de nascimento"
        class="mt-2"
        inputId="DOB"
        @value="dob"
        vmask="00/00/0000"
      )#DOB
      VInput(
        placeholder="E-mail"
        class="mt-2"
        inputId="Email"
        @value="email"
      )#Email
      VInput(
        placeholder="Confirme o E-mail"
        class="mt-2"
        inputId="EmailConfirm"
      )#EmailConfirm
      VInput(
        placeholder="Telefone"
        class="mt-2"
        inputId="Phone"
        @value="phone"
        vmask="(00) 00000-0000"
      )#Phone
      VInput(
        placeholder="Senha"
        class="mt-2"
        inputId="Password"
        inputType="password"
        @value="password"
      )#Password
      VInput(
        placeholder="Confirme sua senha"
        class="mt-2"
        inputId="PasswordConfirm"
        inputType="password"
      )#PasswordConfirm
      p.mt-4.text-center.text-grey-0 Li e concordo com os
        span
          a(@click="mustShowModal = !mustShowModal").cursor-pointer.m-1.font-bold Termos de Uso
      VButton(
        text="Cadastrar"
        class="md:w-6/12"
      ).w-40.mt-10.text-white.disable
      p.mt-4.text-center.text-grey-0.cursor-pointer
        a(@click="handleLogin") Já possuí uma conta? Faça login

</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import VContainer from '../global_components/VContainer.vue'
import VInput from '../global_components/VInput.vue'
import VButton from '../global_components/VButton.vue'
import VModal from '../global_components/VModal.vue'
  export default{
    data() {
        return {
          mustShowModal: false,
        };
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
      test() {
        console.log(8)
      }
    },
    components: {
      VContainer, 
      VInput,
      VButton,
      VModal
    }
}
</script>
<style scoped>
.register--arrowBack {
  @apply flex text-xl text-left items-center text-grey-0 mb-5 md:hidden;
}
</style>
  


