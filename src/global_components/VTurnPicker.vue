<template lang="pug">
.vturn-picker
  .vturn-picker--row 
    .vturn-picker--card(
      v-for="(turn, index) in turns" 
      :class="{'!bg-orange-1 !text-white': selectedIndex === index}"
      :key="index"
      @click="handleTurn(turn, index)"
    )
      .date-picker--text
        .date-picker--weekDay {{ translateTurnToPortuguese(turn) }}
</template>
<script>
import { mapMutations } from 'vuex';
  export default{
    data() {
      return {
        scheduleTime: [],
        selectedTurn: "",
        selectedIndex: 0,
        turns: [
          "morning",
          "afternoon",
          "night"
        ]
      };
    },
    mounted() {},
    props: {},
    computed: {},
    methods: {
      ...mapMutations([
        "setTurnChoosed"
      ]),
      handleTurn(turn, index) {
        this.selectedTurn = turn
        this.selectedIndex = index
        console.log(turn)
        this.setTurnChoosed(turn.toLowerCase())
      },
      translateTurnToPortuguese(turn) {
        switch (turn) {
          case "morning":
            return "Manhã"
          case "afternoon":
            return "Tarde"
          case "night":
            return "Noite"
          default:
            break;
        }
      }
    },
  }
</script>
<style scoped>
.vturn-picker--row {
  @apply flex bg-grey-2 rounded-xl h-12 items-center p-1;
}
.vturn-picker--card {
  @apply bg-grey-2 hover:bg-grey-3 w-32 h-8 rounded-lg text-center flex justify-center items-center;
}
.vturn-picker--text {
  @apply font-bold text-lg;
}
.date-picker--weekDay {
  @apply font-bold;
}
</style>
  