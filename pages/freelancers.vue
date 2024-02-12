<template lang="html">
  <transition name="fade-left" mode="out-in">
    <div class="freelancers pt-16 pb-[120px] xl:px-4 xl:pt-6 xl:pb-6">
      <div class="grid grid-cols-3">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :draggable="true"
          @dragstart="onDragStart(index)"
          @dragover.prevent
          @drop="onDrop(index)"
          @click="selectTab(tab.id)"
          :class="{ active: selectedTab === tab.id }"
        >
          {{ tab.title }}
        </div>
      </div>
      {{ selectedTab }}
      <div class="2xl:container mx-auto">
        <div class="title flex justify-between xl:hidden">
          <h2 class="text-black text-[32px] font-semibold">Frilanserlar</h2>
          <div class="button flex gap-6 items-center">
            <button
              class="h-[52px] w-[52px] flex justify-center items-center border-[2px] border-solid border-grey-light rounded-full overflow-hidden"
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
              v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
              @click="$router.push('/profile/customer')"
              class="xl:hidden h-[60px] w-[204px] flex justify-center items-center bg-blue rounded-xl text-base font-medium text-white"
            >
              Buyurtma qoshish
            </button>
            <button
              v-else
              @click="$router.push('/registration')"
              class="xl:hidden h-[60px] w-[204px] flex justify-center items-center bg-blue rounded-xl text-base font-medium text-white"
            >
              Buyurtma qoshish
            </button>
          </div>
        </div>
        <div class="filter-head hidden xl:flex justify-between xl:mb-6">
          <h4 class="text-black text-[14px] font-medium">
            {{ totalPage.toLocaleString() }} результатов
          </h4>
          <button
            @click="open"
            class="flex items-center gap-2 text-blue text-[14px] font-medium"
          >
            Фильтры<svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 5H8.33333"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 10H10"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8333 10H17.5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6667 5L17.5 5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8333 15L16.6667 15"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 15H5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="6.66667"
                cy="15"
                r="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
              <ellipse
                cx="14.1667"
                cy="10"
                rx="1.66667"
                ry="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
              <ellipse
                cx="10"
                cy="5.00004"
                rx="1.66667"
                ry="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div class="tab flex gap-4 xl:grid xl:grid-cols-2">
          <button
            class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg xl:justify-center xl:h-[44px] text-[14px] text-grey-64 border border-solid border-bg-grey"
            :class="{ active: true }"
          >
            Фрилансеры
          </button>
          <button
            class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg xl:justify-center xl:h-[44px] text-[14px] text-grey-64 border border-solid border-bg-grey"
          >
            Команды
          </button>
        </div>
        <div class="body mt-8 xl:mt-4">
          <FreelancersFilter
            class="xl:hidden"
            :specialities="specialities"
            @filter="queryCreater"
          />
          <FreelancersContainer
            :freelancers="freelancers"
            :specialities="specialities"
            @deleteFilter="queryCreater"
            :loading="loading"
            :totalPage="totalPage"
            @getData="__GET_FREELANCERS"
          />
        </div>
        <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer">
          <FreelancersFilter
            class="hidden xl:flex pb-6"
            :specialities="specialities"
            @filter="queryCreater"
          />
        </vue-bottom-sheet-vue2>
      </div>
    </div>
  </transition>
</template>
<script>
import FreelancersContainer from "../components/freelancers/FreelancersContainer.vue";
import FreelancersFilter from "../components/freelancers/FreelancersFilter.vue";
import global from "@/mixins/global";
export default {
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  mixins: [global],
  data() {
    return {
      loading: false,
      tabs: [
        { id: 1, title: "Tab 1" },
        { id: 2, title: "Tab 2" },
        { id: 3, title: "Tab 3" },
      ],
      selectedTab: 1,
      dragIndex: null,
    };
  },
  async asyncData({ store, query }) {
    store.commit("setPageData", { title: "TitleQul" });
    const [freeLancersData, specialitiesData] = await Promise.all([
      store.dispatch("fetchFreelancers/getFreelancers", {
        params: { page: query.page || 1, page_size: query.page_size || 5, ...query },
      }),
      store.dispatch("fetchSpecialities/getSpecialities"),
    ]);
    const freelancers = freeLancersData.data;
    const specialities = specialitiesData.content;
    const totalPage = freeLancersData?.meta?.total;
    console.log(freelancers);
    return {
      freelancers,
      specialities,
      totalPage,
    };
  },
  mounted() {
    this.getFirstData();
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  methods: {
    selectTab(tabId) {
      this.selectedTab = tabId;
    },
    onDragStart(index) {
      this.dragIndex = index;
    },
    onDrop(dropIndex) {
      const draggedTab = this.tabs.splice(this.dragIndex, 1)[0];
      this.tabs.splice(dropIndex, 0, draggedTab);
      this.dragIndex = null;
    },
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
    async queryCreater(name, id) {
      let query = { ...this.$route.query };
      if (!this.$route.query[name]) {
        await this.$router.replace({
          path: "freelancers",
          query: {
            ...query,
            page: 1,
            [`${name}`]: id,
          },
        });
      } else {
        delete query[name];
        await this.$router.replace({
          path: "freelancers",
          query: { ...query },
        });
      }
      this.__GET_FREELANCERS();
    },

    async __GET_FREELANCERS() {
      this.loading = true;
      try {
        const data = await this.$store.dispatch("fetchFreelancers/getFreelancers", {
          params: { ...this.$route.query },
        });
        this.freelancers = data.data;
        this.totalPage = data?.meta?.total;
        this.loading = false;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },

  components: { FreelancersFilter, FreelancersContainer },
};
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
@media (max-width: 1200px) {
  .body {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
}
</style>
