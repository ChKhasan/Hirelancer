<template lang="html">
  <div class="2xl:container mx-auto mt-[96px]">
    <div class="flex justify-between mb-[40px] items-center">
      <h1 class="text-black text-[32px] font-semibold">Eng yaxshi frilanserlar</h1>
      <nuxt-link class="flex gap-[6px] text-blue text-[18px] font-medium" to="/"
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
    <div class="list">
      <FreeLancerCard
        v-for="freelancer in freelancers"
        :key="freelancer?.id"
        :freelancer="freelancer"
      />
    </div>
  </div>
</template>
<script>
import FreeLancerCard from "./FreelancerCard.vue";
export default {
  props: ["freelancers"],
  components: {
    FreeLancerCard,
  },
};
</script>
<style lang="css" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 16px;
}
</style>
