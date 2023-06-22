<template lang="pug">
.vmodal
  .vmodal--background(@click="emitCloseModal")
  .vmodal--panel
    .vmodal--icon-row
      p.vmodal--title {{ title }}
      icon.vmodal--icon(
        icon="fa-solid fa-xmark"
        @click="emitCloseModal"
      )
    .vmodal--content
      slot
</template>
<script>
  export default{
    data() {
      return {};
    },
    props: {
      title: {
        type: String,
        default: "",
        required: false,
      },
    },
    computed: {},
    methods: {
      emitCloseModal() {
        this.$emit('closeModal')
      }
    },
  }
</script>
<style scoped>
  .vmodal--background {
    @apply w-full h-full bg-black fixed z-40 opacity-80;
  }
  .vmodal--panel {
    @apply bg-white w-full z-50 fixed bottom-0 overflow-hidden rounded-t-2xl h-5/6 pb-10 
    md:max-w-[580px] md:max-h-[400px] md:inset-0 md:rounded-2xl md:m-auto;
  }
  .vmodal--icon-row {
    @apply  w-full text-right flex justify-between items-center pt-6 px-6;
  }
  .vmodal--icon {
    @apply text-4xl cursor-pointer;
  }
  .vmodal--content {
    @apply p-8 overflow-scroll h-full;
  }
  .vmodal--content-topic {
    @apply font-bold;
  }
  .vmodal--title {
    @apply font-bold text-xl;
  }
</style>
  