<template lang="html">
  <div class="place flex flex-col mb-[96px] xl:mb-[40px]">
    <h2
      class="text-black text-[32px] mb-8 font-semibold xl:text-[18px] xl:mb-4"
    >
      Buyurtma qanday beriladi
    </h2>
    <div class="list">
      <SpecialistsCard
        v-for="elem in specialities"
        :key="elem?.id"
        :obj="elem"
      />
    </div>
    <button
      class="mx-auto mt-6 rounded-lg flex gap-4 w-[352px] h-16 items-center justify-center border border-grey-8 border-solid text-blue font-medium text-[18px] font-tt xl:mx-0 xl:w-[100%] xl:mt-[12px] xl:h-12 xl:text-[14px] xl:border-main-color"
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
import SpecialistsCard from "./SpecialistsCard.vue";

export default { props: ["specialities"], components: { SpecialistsCard } };
</script>
<style lang="css" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
