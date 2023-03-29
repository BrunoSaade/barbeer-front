<template lang="pug">
.vinput--container.relative
  label(for="").absolute.top-2.left-3(v-if="!!iconName")
    icon(:icon='iconName')
  input(
    :class="[{'pl-8': iconName}, 'h-[40px] placeholder:text-grey-1']" 
    :placeholder="placeholder"
    :type="inputType"
    :id="inputId"
    @input="emitValue"
    v-model="content"
    v-mask="vmask"
  ).w-full.rounded-full.bg-grey-0.px-4.outline-none
  
</template>
<script>
  export default{
    data() {
      return {
        content: ""
      };
    },
    props: {
      placeholder: String,
      inputType: {
        type: String,
        required: false,
      },
      iconName: {
        type: String,
        required: false
      },
      inputId: {
        type: String,
        required: true
      },
      vmask: {
        type: String,
        required: false
      },
    },
    computed: {},
    methods: {
      emitValue() {
        this.$emit('value', this.content)
      }
    },
  }
</script>
<style scoped>
</style>
  