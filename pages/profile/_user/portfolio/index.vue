<template lang="html">
  <div class="portfolio xl:px-4">
    <ProfileLayout :profile="true">
      <div class="head flex flex-col gap-4 mt-8 xl:mt-0">
        <h3 class="text-[24px] text-black font-semibold xl:hidden">Портфолио</h3>
        <div class="flex justify-between items-center">
          <div class="buttons flex gap-6 xl:overflow-x-scroll xl:gap-3">
            <button
              class="px-6 py-3 rounded-[12px] border-solid xl:rounded-lg border-[2px] border-bg-grey bg-bg-grey text-base xl:min-w-[120px] xl:py-2 xl:flex xl:justify-center whitespace-nowrap xl:text-[14px] text-grey-64 font-medium"
            >
              All works
            </button>
            <button
              class="active px-6 py-3 rounded-[12px] border-solid xl:rounded-lg border-[2px] xl:border border-bg-grey bg-bg-grey text-base xl:min-w-[120px] xl:py-2 xl:flex xl:justify-center whitespace-nowrap xl:text-[14px] text-grey-64 font-medium"
            >
              Веб-дизайн
            </button>
            <button
              class="px-6 py-3 rounded-[12px] border-solid xl:rounded-lg border-[2px] border-bg-grey bg-bg-grey text-base xl:min-w-[120px] xl:py-2 xl:flex xl:justify-center whitespace-nowrap xl:text-[14px] text-grey-64 font-medium"
            >
              Логотипы
            </button>
            <button
              class="px-6 py-3 rounded-[12px] border-solid xl:rounded-lg border-[2px] border-bg-grey bg-bg-grey text-base xl:min-w-[120px] xl:py-2 xl:flex xl:justify-center whitespace-nowrap xl:text-[14px] text-grey-64 font-medium"
            >
              Фото
            </button>
          </div>
          <div class="flex gap-[27px] xl:hidden">
            <button
              class="border border-solid border-grey-8 rounded-[12px] h-12 w-12 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.875 8.58366C15.875 12.6107 12.6104 15.8753 8.58329 15.8753C4.55622 15.8753 1.29163 12.6107 1.29163 8.58366C1.29163 4.55658 4.55622 1.29199 8.58329 1.29199C12.6104 1.29199 15.875 4.55658 15.875 8.58366ZM8.58329 17.1253C13.3007 17.1253 17.125 13.3011 17.125 8.58366C17.125 3.86623 13.3007 0.0419922 8.58329 0.0419922C3.86586 0.0419922 0.041626 3.86623 0.041626 8.58366C0.041626 13.3011 3.86586 17.1253 8.58329 17.1253ZM16.1086 15.2251C15.8645 14.981 15.4688 14.981 15.2247 15.2251C14.9806 15.4691 14.9806 15.8649 15.2247 16.1089L16.8913 17.7756C17.1354 18.0197 17.5311 18.0197 17.7752 17.7756C18.0193 17.5315 18.0193 17.1358 17.7752 16.8917L16.1086 15.2251Z"
                  fill="#020105"
                />
              </svg>
            </button>
            <button
              @click="$router.push('/profile/portfolio/add')"
              class="bg-blue flex gap-2 h-12 px-6 rounded-[8px] text-white text-base text-medium items-center"
            >
              Добавить проект
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M7.16675 10.0003H13.8334M10.5001 6.66699V13.3337M18.8334 10.0003C18.8334 14.6027 15.1025 18.3337 10.5001 18.3337C5.89771 18.3337 2.16675 14.6027 2.16675 10.0003C2.16675 5.39795 5.89771 1.66699 10.5001 1.66699C15.1025 1.66699 18.8334 5.39795 18.8334 10.0003Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-2 xl:gap-1 xl:mt-4"
        v-if="loading"
      >
        <a-skeleton
          :paragraph="false"
          class="loading-card"
          v-for="elem in [1, 2, 3, 4, 5, 6]"
          :key="elem"
        />
      </div>
      <div
        class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-2 xl:gap-1 xl:mt-4"
        v-else
      >
        <PortfolioCard
          v-for="portfolio in portfolios"
          :key="portfolio?.id"
          :portfolio="portfolio"
        />
      </div>

      <div>
        <VPagination />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";

export default {
  data() {
    return {
      loading: false,
      portfolios: [],
    };
  },
  async mounted() {
    this.loading = true;
    const [portfolioData] = await Promise.all([
      this.$store.dispatch("fetchPortfolio/getWorks"),
    ]);
    this.portfolios = portfolioData.content;
    this.loading = false;
  },
  components: {
    ProfileLayout,
    PortfolioCard,
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 390px;
}
.buttons {
  padding-bottom: 5px;
}
.buttons::-webkit-scrollbar {
  height: 0;
}
@media (max-width: 1200px) {
  :deep(.loading-card .ant-skeleton-title) {
    height: 217px;
  }
}
</style>
