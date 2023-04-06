<template lang="pug">
.navbar
  .navbar--mobile(v-if="getIsMenuMobileOpen")
    .vnavbar--mobile-background(@click="handleMenuMobileOpen")
    .navbar--mobile-menu
      .navbar--mobile-arrowBack(@click="handleMenuMobileOpen")
        icon(icon='fa-solid fa-arrow-left')
      .navbar--mobile-avatar 
        img(
          :src="`https://ui-avatars.com/api/?name=${name}&background=17241D&color=FFFFFFBF&rounded=true&size=200`"
        )
      .navbar--mobile-container
        .navbar--mobile-content
          .navbar--mobile-content-action
            icon.icon--action(icon='fa-solid fa-pen')
            p Perfil
          .navbar--mobile-content-action
            icon.icon--action(icon='fa-solid fa-book') 
            p Agendamentos
          .navbar--mobile-content-action(@click="handleLogout")
            icon.icon--action(icon='fa-solid fa-right-from-bracket') 
            p Sair
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default{
    data() {
      return {};
    },
    props: {},
    mounted() {
      this.setIsMenuMobileOpen(false)
    },
    computed: {
      ...mapGetters([
        'getIsMenuMobileOpen',
        'getUserCompleteName'
      ]),
      name() {
        const userName = this.getUserCompleteName
        const groupNames = userName.split(" ")
        if (groupNames?.length > 1) {
          const [name] = groupNames
          const [surname] = groupNames?.reverse()
          return `${name} ${surname}`
        }
        return groupNames?.[0]
      }
    },
    methods: {
      ...mapActions([
        'setIsMenuMobileOpen'
      ]),
      handleMenuMobileOpen() {
        this.setIsMenuMobileOpen(false)
      },
      handleLogout() {
        this.$router.push('/')
      }
    },
  }
</script>
<style scoped>
.vnavbar--mobile-background {
  @apply w-full h-full bg-black fixed z-40 opacity-80;
}
.navbar--mobile-menu {
  @apply w-[88%] max-w-[991px] bg-orange-1 h-screen z-50 fixed p-7 rounded-tr-[50px];
}
.navbar--mobile-arrowBack {
  @apply flex text-4xl text-left items-center text-grey-0;
}
.icon--action {
  @apply text-2xl text-grey-0;
}
.navbar--mobile-content-action {
  @apply flex items-center mb-6 gap-3;
}
p {
  @apply text-xl text-grey-0;
}
.navbar--mobile-container {
  @apply flex h-2/4;
}
.navbar--mobile-content {
  @apply w-full self-center;
}
.navbar--mobile-avatar {
  @apply flex justify-center mt-20;
}
</style>
  