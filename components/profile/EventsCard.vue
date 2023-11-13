<template lang="html">
  <div
    class="events-card border border-solid border-grey-8 rounded-[12px] px-4 py-4 card cursor-pointer xl:px-2 xl:py-2"
  >
    <div class="body flex flex-col justify-between xl:py-1 xl:pl-1">
      <div class="flex flex-col gap-2">
        <h3 class="text-[20px] font-semibold text-black hover:text-blue xl:text-[14px]">
          Innoweek 2023
        </h3>
        <p class="text-grey-40 text-[14px] xl:text-[12px]">#innoweek2023</p>
      </div>
      <p class="text-grey-40 text-[14px] font-medium flex gap-2 items-center xl:text-[12px] ">
        <svg
        class="xl:h-4 xl:w-4"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M2.25 6.75V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V6.75M2.25 6.75V5.625C2.25 3.96815 3.59315 2.625 5.25 2.625H12.75C14.4069 2.625 15.75 3.96815 15.75 5.625V6.75M2.25 6.75H15.75M12 1.5V3.75M6 1.5V3.75"
            stroke="#9A999B"
            stroke-linecap="round"
          /></svg
        >16.10.2023
      </p>
    </div>
    <div class="image h-[216px] rounded-[6px] overflow-hidden xl:h-[113px]">
      <img
        class="w-full h-full object-cover"
        src="../../assets/images/events.png"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.events-card {
  display: grid;
  grid-template-columns: 2fr 3fr;
}
@media (max-width: 1200px) {
  .events-card {
    grid-template-columns: 2.5fr 3fr;
    gap: 12px;
  }
}
</style>
