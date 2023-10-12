<template lang="html">
  <div class="portfolios flex flex-col gap-6">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold">Статистика</h1>
    </div>
    <div class="list statistics-list">
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
<style lang="css" scoped>
.statistics-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
</style>
