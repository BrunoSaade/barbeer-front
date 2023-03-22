<template lang="pug">
input(
  class="h-[40px] placeholder:text-grey-1" 
  :placeholder="placeholder"
  :type="inputType"
).w-full.rounded-full.bg-grey-0.px-4.outline-none
</template>
<script>
  export default{
    data() {
      return {};
    },
    props: {
      placeholder: String,
      inputType: {
        type: String,
        required: false,
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
</style>
  