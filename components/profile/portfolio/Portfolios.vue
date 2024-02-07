<template lang="html">
  <div class="portfolios flex flex-col gap-6 xl:gap-4">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold xl:text-[18px]">Портфолио</h1>
      <nuxt-link class="flex gap-[6px] text-blue text-base font-medium xl:hidden" to="/orders"
        >Ko’proq ko’rish
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 16L18 12M18 12L14 8M18 12L6 12"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></nuxt-link>
    </div>
    <div class="list grid grid-cols-3 gap-4 xl:grid-cols-2 xl:gap-1">
      <PortfolioCard
        v-for="portfolio in portfolios"
        :portfolio="portfolio"
        :key="portfolio?.id"
      />

      <PortfolioMoreCard class="xl:hidden" v-if="portfolios.length > 5"/>
    </div>
    <button @click="$router.push(`/freelancer/${$route.params.index}/portfolio`)" class="hidden xl:flex gap-2 w-full justify-center h-[52px] items-center rounded-[12px] bg-main-color text-[14px] text-white font-medium">Смотрите больше <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5"/>
<path d="M13 15L16 12M16 12L13 9M16 12L8 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
  </div>
</template>
<script>
import PortfolioCard from "./PortfolioCard.vue";
import PortfolioMoreCard from "./PortfolioMoreCard.vue";

export default {
  props: ["portfolios"],
  components: { PortfolioCard, PortfolioMoreCard },
};
</script>
<style lang="css" scoped></style>
