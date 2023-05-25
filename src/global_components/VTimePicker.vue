<template lang="pug">
.vtime-picker
  .vtime-picker--row 
    //- .vtime-picker--card
    //-   p 14:00
    .vtime-picker--card(
      v-for="(item, index) in scheduleTime" 
      :class="{'!bg-orange-1 !text-white': selectedIndex === index}"
      :key="index"
      @click="handleTime(item, index)"
    )
      .date-picker--text
        .date-picker--weekDay {{ item }}
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default{
    data() {
      return {
        scheduleTime: [],
        selectedTime: "",
        selectedIndex: 0,
        turn: "night",
      };
    },
    mounted() {
      this.generateScheduleTime()
    },
    props: {},
    computed: {
      ...mapGetters([
        "getTurnChoosed"
      ])
    },
    methods: {
      handleTime(item, index) {
        this.selectedTime = item
        this.selectedIndex = index
        console.log(this.selectedTime)
      },
      generateScheduleTime() {

        const startTime = {
          morning: 8, // Início às 8:00 da manhã
          afternoon: 12, // Início às 16:00 (4:00 da tarde)
          night: 19 // Início às 19:00 (7:00 da noite)
        }[this.getTurnChoosed];

        const hours = [];
        let hour = startTime;
        let minutes = 0;
        while (hour <= (this.getTurnChoosed === "morning" ? 11 : (this.getTurnChoosed === "afternoon" ? 18 : 20))) {
          hours.push(`${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
          minutes += 40;
          if (minutes >= 60) {
            minutes = 0;
            hour++;
          }
        }
        this.scheduleTime = hours;
      },
    },
  }
</script>
<style scoped>
.vtime-picker--row {
  @apply flex overflow-hidden overflow-x-scroll gap-4;
}
.vtime-picker--card {
  @apply bg-grey-2 hover:bg-grey-3 w-[9.5rem] h-12 rounded-xl text-center flex justify-center items-center flex-shrink-0;
}
.date-picker--text {
  @apply font-bold text-lg;
}

.vtime-picker--row::-webkit-scrollbar{
  display: none;
}
</style>
  