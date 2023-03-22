<template lang="pug">
VContainer.home.bg-primary-0.h-screen
  .home--logo
    img(src="../assets/Logo.svg")
  .home--inputs
    VInput(placeholder="Email").mt-2
    VInput(
      placeholder="Senha"
      inputType="password"
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
  