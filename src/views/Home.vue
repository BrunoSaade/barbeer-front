<template lang="pug">
VContainer.home.bg-primary-0.h-screen.max-w-full(class="md:flex md:items-center md:justify-around")
  VContainer(class="md:flex md:items-center md:justify-around md:max-w-[2008px]")
    .home--logo
      img(
        src="../assets/Logo.svg",
      )
    .home--inputs
      p.text-3xl.text-orange-0.font-bold.mb-7.hidden(class="md:block lg:text-4xl") Faça seu login
      VInput(
        placeholder="Email"
        iconName="fa-solid fa-user"
        inputId="Email"
      ).mt-2
      VInput(
        placeholder="Senha"
        inputType="password"
        inputId="Password"
        iconName="fa-solid fa-lock"
      ).mt-3
      .block
        p.mt-2.text-center.text-grey-0
          a(href="") Esqueceu sua senha?
        VButton(text="Entrar").bg-orange-0.w-40.mt-10.text-white
        p.mt-10.text-center.text-grey-0
          a(href="") Não tem uma conta? Cadastre-se

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
      VButton,
    }
}
</script>
<style scoped>
</style>
  