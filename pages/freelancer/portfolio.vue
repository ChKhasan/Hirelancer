<template lang="html">
  <div class="portfolio">
    <ProfileLayout :profile="false">
      <div class="head flex flex-col gap-4 mt-8 ">
        <h3 class="text-[24px] text-black font-semibold ">Портфолио</h3>
        <div class="flex justify-between items-center">
          <div class="buttons flex gap-6">
            <button
              class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
            >
              All works
            </button>
            <button
              class="active px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
            >
              Веб-дизайн
            </button>
            <button
              class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
            >
              Логотипы
            </button>
            <button
              class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
            >
              Фото
            </button>
          </div>
          <div class="flex gap-[27px]">
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
      <div class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] ">
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
        <PortfolioViewCard />
      </div>
      <div>
        <VPagination />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import ProfileLayout from "../../components/profile/ProfileLayout.vue";
import PortfolioCard from "../../components/profile/portfolio/PortfolioCard.vue";
import VPagination from "../../components/VPagination.vue";
import PortfolioViewCard from "../../components/profile/portfolio/PortfolioViewCard.vue";

export default {
  mounted() {
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
</style>
