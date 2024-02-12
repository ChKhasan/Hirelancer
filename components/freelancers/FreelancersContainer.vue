<template lang="html">
  <div class="freelancer-container">
    <div class="filter-items flex gap-4 xl:hidden">
      <div
        v-for="elem in specialities
          .flatMap((item) => {
            return item.children;
          })
          .filter((elem1) =>
            Boolean(
              Object.entries($route.query)
                .filter((elemQuery) => elemQuery[0].includes('specialities'))
                .find((findItem) => findItem[1] == String(elem1?.id))
            )
          )"
        class="h-[40px] px-[24px] rounded-[8px] border border-solid border-grey-light bg-bg-grey flex gap-2 items-center text-black text-[14px]"
      >
        {{ elem?.name_ru }}
        <button @click="$emit('deleteFilter', `specialities[${elem?.id}]`, elem?.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
              stroke="#BB2649"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="body flex flex-col gap-8 mt-[26px] xl:mt-0">
      <div class="list grid grid-cols-3 xl:grid-cols-1 gap-4" v-if="loading">
        <a-skeleton
          :paragraph="false"
          class="loading-card"
          v-for="elem in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="elem"
        />
      </div>
      <div class="list grid grid-cols-3 xl:grid-cols-1 gap-4" v-else>
        <FreelancerCard
          v-for="freelancer in freelancers"
          :freelancer="freelancer"
          :key="freelancer?.id"
        />
      </div>

      <VPagination :load="true" :totalPage="totalPage" @getData="__GET_FREELANCERS" />
    </div>
  </div>
</template>
<script>
import VPagination from "../VPagination.vue";
import FreelancerCard from "../home/FreelancerCard.vue";

export default {
  props: ["freelancers", "specialities", "loading", "totalPage"],
  methods: {
    __GET_FREELANCERS() {
      this.$emit("getData");
    },
  },
  components: { FreelancerCard, VPagination },
};
</script>
<style lang="css" scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 133px;
}
</style>
