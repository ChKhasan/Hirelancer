<template lang="html">
  <div class="portfolios flex flex-col gap-6 xl:gap-4">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold xl:text-base xl:flex xl:justify-between xl:w-full">Статистика <span class="xl:block hidden"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10L12 14L17 10" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></h1>
    </div>
    <div class="list statistics-list grid grid-cols-3 gap-4 xl:grid-cols-2 xl:gap-2">
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </div>
  </div>
</template>
<script>
import StatisticCard from "./StatisticCard.vue";
export default {
  components: { StatisticCard },
};
</script>
<style lang="css" scoped></style>
