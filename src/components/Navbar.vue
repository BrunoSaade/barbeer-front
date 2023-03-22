<template>
  <div class="h-[85px] bg-slate-100 fixed top-0 right-0 left-0 flex place-content-between items-center px-10">
    <Logo />
    <div class="flex place-content-between gap-x-3">
      <a href="/" class="navbar-item">Products</a>
      <a href="/" class="navbar-item">Companie</a>
    </div>
  </div>
</template>
<script>
import Logo from "../assets/Logo.vue";
export default{
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: { Logo }
}
</script>
<style scoped>
  .navbar-item {
    font-weight: bold;
  }
</style>
