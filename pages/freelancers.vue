<template lang="html">
  <div class="freelancers pt-16 pb-[120px]">
    <div class="2xl:container mx-auto">
      <div class="title flex justify-between">
        <h2 class="text-black text-[32px] font-semibold">Frilanserlar</h2>
        <div class="button flex gap-6 items-center">
          <button
            class="h-[52px] w-[52px] flex justify-center items-center border-[2px] border-solid border-grey-light rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M19.1285 19.1288L24.9042 24.9057M21.6047 13.1512C21.6047 17.8201 17.8198 21.605 13.151 21.605C8.48212 21.605 4.69727 17.8201 4.69727 13.1512C4.69727 8.48238 8.48212 4.69753 13.151 4.69753C17.8198 4.69753 21.6047 8.48238 21.6047 13.1512Z"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="h-[60px] w-[204px] flex justify-center items-center bg-blue rounded-xl text-base font-medium text-white"
          >
            Buyurtma qoshish
          </button>
        </div>
      </div>
      <div class="tab flex gap-4">
        <button
          class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg text-[14px] text-grey-64 border border-solid border-bg-grey"
          :class="{ active: true }"
        >
          Фрилансеры
        </button>
        <button
          class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg text-[14px] text-grey-64 border border-solid border-bg-grey"
        >
          Команды
        </button>
      </div>
      <div class="body mt-8">
        <FreelancersFilter />
        <FreelancersContainer />
      </div>
    </div>
  </div>
</template>
<script>
import FreelancersContainer from "../components/freelancers/FreelancersContainer.vue";
import FreelancersFilter from "../components/freelancers/FreelancersFilter.vue";

export default { components: { FreelancersFilter, FreelancersContainer } };
</script>
<style lang="css" scoped>
.tab .active {
  border-color: var(--blue);
  background-color: white;
  color: var(--blue);
}
.body {
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-gap: 32px;
}
</style>
