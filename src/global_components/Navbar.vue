<template lang="pug">
.navbar
  .navbar--mobile(v-if="getIsMenuMobileOpen")
    .vnavbar--mobile-background(@click="handleMenuMobileOpen")
    .navbar--mobile-menu
      .navbar--mobile-arrowBack(@click="handleMenuMobileOpen")
        icon(icon='fa-solid fa-arrow-left')
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default{
    data() {
      return {};
    },
    props: {},
    computed: {
      ...mapGetters([
        'getIsMenuMobileOpen'
      ]),
    },
    methods: {
      ...mapActions([
        'setIsMenuMobileOpen'
      ]),
      handleMenuMobileOpen() {
        this.setIsMenuMobileOpen(false)
      }
    },
  }
</script>
<style scoped>
.vnavbar--mobile-background {
  @apply w-full h-full bg-black fixed z-40 opacity-80;
}
.navbar--mobile-menu {
  @apply w-[88%] bg-orange-1 h-screen z-50 fixed p-7;
}
.navbar--mobile-arrowBack {
  @apply flex text-4xl text-left items-center text-grey-0;
}
</style>
  