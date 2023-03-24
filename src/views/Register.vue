<template lang="pug">
VContainer.register.bg-primary-0.h-screen.max-w-full.place-content-center(class="flex md:items-center md:justify-around")
  VContainer(class="md:flex md:items-center md:justify-around max-w-[400px] md:max-w-[2008px]")
    .register--logo.hidden(class="lg:block")
        img(
          src="../assets/Logo.svg",
          class="sm:max-w-[300px] md:max-w-full"
        )
    .register--inputs(class="md:w-[500px]")    
      p.text-3xl.text-orange-0.font-bold.mb-7(class="lg:text-4xl") Faça seu cadastro
      VInput(
        placeholder="CPF"
        class="mt-2"
        inputId="CPF"
      )#CPF
      VInput(
        placeholder="Nome"
        class="mt-2"
        inputId="Name"
      )#Name
      VInput(
        placeholder="Sobrenome"
        class="mt-2"
        inputId="Surname"
      )#Surname
      VInput(
        placeholder="Data de nascimento"
        class="mt-2"
        inputId="DOB"
      )#DOB
      VInput(
        placeholder="E-mail"
        class="mt-2"
        inputId="Email"
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
      )#Phone
      VInput(
        placeholder="Senha"
        class="mt-2"
        inputId="Password"
        inputType="password"
      )#Password
      VInput(
        placeholder="Confirme sua senha"
        class="mt-2"
        inputId="PasswordConfirm"
        inputType="password"
      )#PasswordConfirm
      VButton(
        text="Cadastrar"
        class="md:w-6/12"
      ).w-40.mt-10.text-white.disable

</template>
<script>
import VContainer from '../global_components/VContainer.vue'
import VInput from '../global_components/VInput.vue'
import VButton from '../global_components/VButton.vue'
  export default{
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: {
      VContainer, 
      VInput,
      VButton
    }
}
</script>
<style scoped>
</style>
  