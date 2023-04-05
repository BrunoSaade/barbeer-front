<template lang="pug">
.vcheck-box
  input#checkbox.vcheck-box--input(type='checkbox' name='checkbox')
  label(for='checkbox')
    slot
</template>
<script>
  export default{
    data() {
      return {
        content: ""
      };
    },
    props: {},
    computed: {},
    methods: {},
  }
</script>
<style scoped>
.vcheck-box {
  @apply flex justify-center gap-2;
}
.vcheck-box--input {
  @apply w-[20px]
}
</style>
  