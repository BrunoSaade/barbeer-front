<template lang="pug">
button(
  :class="[isDisabled ? 'bg-grey-0': 'bg-orange-0', 'h-[40px]']",
  :disabled="isDisabled"
).rounded-full {{ text }}
</template>
<script>
  export default{
    data() {
      return {};
    },
    props: {
      text: String,
      isDisabled: {
        type: Boolean,
        default: false,
        required: false,
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  button:active {
    @apply opacity-50;
  }
  button:hover {
    @apply border border-solid;
  }
</style>
  