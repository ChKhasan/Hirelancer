<template lang="html">
  <div class="portfolios flex flex-col gap-6">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold">Портфолио</h1>
      <nuxt-link class="flex gap-[6px] text-blue text-base font-medium" to="/orders"
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
    <div class="list grid grid-cols-3 gap-4">
      <PortfolioCard
        v-for="portfolio in portfolios"
        :portfolio="portfolio"
        :key="portfolio?.id"
      />

      <PortfolioMoreCard v-if="portfolios.length > 5"/>
    </div>
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
