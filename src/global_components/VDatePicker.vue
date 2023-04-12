<template lang="pug">
.vdate-picker
  .vdate-picker--row 
    .vdate-picker--card(
      v-for="(item, index) in next30Days" 
      :class="{'!bg-orange-1 !text-white': selectedIndex === index}"
      :key="index"
      @click="handleDate(item, index)"
    )
      .date-picker--text
        .date-picker--weekDay {{ item.weekDay }}
        .date-picker--day {{ item.day }}
</template>
<script>
  export default{
    data() {
      return {
        next30Days: [],
        selectedDate: "",
        selectedIndex: 0,
      };
    },
    mounted() {
      this.getNext30Days()
    },
    props: {},
    computed: {},
    methods: {
      getNext30Days() {
        const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        const currentDate = new Date();
        
        for (let i = 0; i < 30; i++) {
          const date = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000));
          const weekDay = weekDays[date.getUTCDay()];
          const month = months[date.getUTCMonth()];
          const monthNumber = (date.getUTCMonth() + 1).toString().padStart(2, '0');
          const day = date.getUTCDate();
          const year = date.getUTCFullYear();
          
          this.next30Days.push({
            weekDay,
            month,
            monthNumber,
            day, 
            year
          });
        }
      },
      handleDate(item, index) {
        this.selectedDate = item.day + "/" + item.monthNumber + "/" + item.year
        this.selectedIndex = index
      },
    },
  }
</script>
<style scoped>
.vdate-picker--row {
  @apply flex overflow-hidden overflow-x-scroll gap-4;
}
.vdate-picker--card {
  @apply bg-grey-2 hover:bg-grey-3 w-24 h-24 rounded-xl text-center flex justify-center items-center flex-shrink-0;
}
.date-picker--text {
  @apply font-bold text-lg;
}
</style>
  