<template lang="html">
  <div class="portfolio xl:px-4">
    <ProfileLayout :profile="false" :freelancer="freelancer" :show="false">
      <div class="head flex flex-col gap-4 mt-8 xl:mt-6">
        <h3 class="text-[24px] text-black font-semibold xl:hidden">Портфолио</h3>
        <div class="flex justify-between items-center xl:mx-[-16px]">
          <div class="buttons flex gap-6 md:overflow-x-scroll w-full scroll-none xl:gap-2">
            <button
              class="xl:ml-4 px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              All works
            </button>
            <button
              class="active px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Веб-дизайн
            </button>
            <button
              class="px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Логотипы
            </button>
            <button
            
              class="xl:mr-4 px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Фото
            </button>
          </div>
          <div class="flex gap-[27px] md:hidden">
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
          </div>
        </div>
      </div>
      <div class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] md:grid-cols-2 xl:hidden">
        <PortfolioViewCard
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :key="portfolio?.id"
        />
      </div>
      <div class="list grid-cols-3 gap-4 xl:grid-cols-2 xl:gap-1 hidden xl:grid mt-4">
        <PortfolioCard
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :key="portfolio?.id"
        />

        <PortfolioMoreCard class="xl:hidden" v-if="portfolios.length > 5" />
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
import PortfolioViewCard from "@/components/profile/portfolio/PortfolioViewCard.vue";

export default {
  async asyncData({ store, query, params }) {
    try {
      const [freeLancerData, portfoliosData] = await Promise.all([
        store.dispatch("fetchFreelancers/getFreelancerById", {
          params: {
            params: {},
          },
          id: params.index,
        }),
        store.dispatch("fetchPortfolio/getWorks", {
          params: {
            freelancer: params.index,
          },
        }),
      ]);
      const portfolios = portfoliosData.data;
      const freelancer = freeLancerData.content;
      return {
        freelancer,
        portfolios,
      };
    } catch (e) {}
  },
  components: {
    ProfileLayout,
    PortfolioCard,
    PortfolioViewCard,
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
}
</style>
