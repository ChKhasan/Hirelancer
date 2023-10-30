<template lang="html">
  <div class="2xl:container mx-auto mt-[96px] xl:mt-[40px] xl:px-4">
    <div class="flex justify-between mb-[40px] items-center xl:mb-[16px]">
      <h1 class="text-black text-[32px] font-semibold xl:text-[18px]">
        Eng yaxshi frilanserlar
      </h1>
      <nuxt-link
        class="flex gap-[6px] items-center text-blue text-[18px] font-medium xl:text-[14px]"
        to="/"
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
    <button
      class="hidden xl:flex mx-auto mt-4 rounded-lg gap-4 w-[352px] h-16 items-center justify-center border border-grey-8 border-solid text-blue font-medium text-[18px] font-tt xl:mx-0 xl:w-[100%] xl:mt-[12px] xl:h-12 xl:text-[14px] xl:border-main-color"
    >
      Ko’proq ko’rish
      <svg
        class="xl:w-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M21.3779 12.5C21.3779 17.4706 17.3485 21.5 12.3779 21.5C7.40737 21.5 3.37793 17.4706 3.37793 12.5C3.37793 7.52944 7.40737 3.5 12.3779 3.5C15.7092 3.5 18.6177 5.30989 20.1739 8M20.1739 8V3.5M20.1739 8H15.7529"
          stroke="#5C46E6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
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
@media screen and (max-width: 1024px) {
  .list {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
</style>
