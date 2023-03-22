<template lang="pug">
button(class="h-[40px]").rounded-full {{ text }}
</template>
<script>
  export default{
    data() {
      return {};
    },
    props: {
      text: String,
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
</style>
  