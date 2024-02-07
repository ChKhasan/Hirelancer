<template lang="html">
  <div class="profile">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="head flex flex-col gap-4 mt-8">
      <h3 class="text-[24px] text-black font-semibold">Настройки</h3>
    </div>
    <div class="buttons flex gap-6 mt-4">
      <button
        :to="`/profile/${$route.params.user}/settings`"
        @click="$router.push(`/profile/${$route.params.user}/settings`)"
        :class="{ active: !$route.name.includes('settings') }"
        class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
      >
        Shaxsiy ma'lumotlar
      </button>
      <button
        @click="$router.push(`/profile/${$route.params.user}/specialities`)"
        :class="{ active: $route.name.includes('specialities') }"
        class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
      >
        Mutaxassisliklar
      </button>
    </div>
    <div class="max-w-[818px] pt-6 flex flex-col gap-6 relative">
      <div class="px-8 py-6 border border-solid border-border-darik rounded-[16px]">
        <h3 class="text-[20px] text-black font-medium mb-6">
          Mutaxassisligingizni tanlang
        </h3>

        <div class="specialities-list flex justify-start gap-[10px]" v-if="loading">
          <a-skeleton
            :paragraph="false"
            width="50px"
            size="large"
            height="38px"
            v-for="elem in [1, 2, 3, 4]"
            :key="elem"
          />
        </div>
        <div
          class="specialities-list flex justify-start flex-wrap gap-[10px] pb-6 border-[0] border-b border-solid border-border-darik"
          v-else
        >
          <div
            v-for="elem in activeCheckedList"
            :key="elem?.id"
            class="py-[7px] text-base text-grey-80 font-medium h-[38px] flex items-center rounded-[4px] gap-2 border border-solid border-grey-light pl-2 pr-3 bg-bg-grey"
          >
            {{ elem?.name_ru }}
            <button @click="deleteChecked(elem?.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.71277 9.77342C9.00567 10.0663 9.48054 10.0663 9.77343 9.77342C10.0663 9.48053 10.0663 9.00566 9.77343 8.71276L6.06114 5.00047L9.77342 1.28819C10.0663 0.995293 10.0663 0.52042 9.77342 0.227527C9.48053 -0.0653667 9.00566 -0.0653667 8.71276 0.227527L5.00048 3.93981L1.28815 0.227483C0.995258 -0.065411 0.520385 -0.0654107 0.227491 0.227483C-0.0654019 0.520376 -0.0654023 0.995249 0.227491 1.28814L3.93982 5.00047L0.227483 8.71281C-0.065411 9.0057 -0.0654107 9.48057 0.227483 9.77347C0.520376 10.0664 0.995249 10.0664 1.28814 9.77347L5.00048 6.06113L8.71277 9.77342Z"
                  fill="#353437"
                />
              </svg>
            </button>
          </div>

          <button
            @click="visible = true"
            class="py-[7px] text-base text-white h-[38px] flex items-center rounded-[4px] gap-2 border border-solid border-main-color pl-2 pr-3 bg-main-color xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6V18M18 12L6 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >Qo’shish
          </button>
          <button
            @click="open"
            class="py-[7px] text-base text-white h-[38px] items-center rounded-[4px] gap-2 border border-solid border-main-color pl-2 pr-3 bg-main-color hidden xl:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6V18M18 12L6 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >Qo’shish
          </button>
        </div>
        <div class="flex justify-between mt-4">
          <p class="text-[14px] text-grey-64">Mutaxasliklaringizni tanlang. Max 3 ta</p>
          <button class="text-main-color text-[14px]">Kopaytirish</button>
        </div>
      </div>
    </div>
    <SpicialsticsCheck
      @saveChecked="saveChecked"
      :visible="visible"
      @handleOk="handleOk"
      :specialities="specialities"
      :activeCheckedList="activeCheckedList"
      :openBottom="openBottom"
    />
  </div>
</template>
<script>
import PersonalInfo from "@/components/profile/portfolio/PersonalInfo.vue";
import Achievements from "@/components/profile/portfolio/Achievements.vue";
import Portfolios from "@/components/profile/portfolio/Portfolios.vue";
import Events from "@/components/profile/Events.vue";
import Alerts from "@/components/profile/Alerts.vue";
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import Statistics from "@/components/profile/Statistics.vue";
import Comments from "@/components/profile/Comments.vue";
import SpicialsticsCheck from "@/components/modals/SpicialsticsCheck.vue";
export default {
  layout: "profileLayout",
  data() {
    return {
      activeCheckedList: [],
      openBottom: false,
      errorSelect: false,
      modalList: null,
      visible: false,
      userInfo: {},
      specialities: [],
      loading: true,
    };
  },

  async mounted() {
    this.__GET_SPECIAL();
  },
  methods: {
    async __GET_SPECIAL() {
      try {
        this.loading = true;
        if (localStorage.getItem("auth-token")) {
          const [specialitiesData, userInfoData] = await Promise.all([
            this.$store.dispatch("fetchSpecialities/getSpecialities", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
              },
            }),
            this.$store.dispatch("fetchAuth/getUserInfo"),
          ]);
          this.specialities = specialitiesData.content;
          this.activeCheckedList = userInfoData.specialities;
          this.loading = false;
        }
      } finally {
        this.loading = false;
      }
    },
    async saveChecked(checkedList) {
      this.activeCheckedList = await [...checkedList];
      this.onSubmit();
      this.visible = false;
      this.close();
    },
    async deleteChecked(id) {
      this.onSubmit(id);
    },
    onSubmit(id) {
      let formData = new FormData();
      this.activeCheckedList.forEach((item) => {
        if (id != item.id) {
          formData.append("specialities[]", item.id);
        }
      });
      this.__POST_REGISTER(formData);
    },
    open() {
      this.openBottom = true;
    },
    close() {
      this.openBottom = false;
    },
    async __POST_REGISTER(form) {
      try {
        const data = await this.$store.dispatch(
          "fetchSpecialities/postSpecialities",
          form
        );
        if (data.success) {
          this.$notification["success"]({
            message: "Success",
            description: "Успешно изменен",
          });
          this.__GET_SPECIAL();
        }
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    handleOk() {
      this.visible = false;
    },
  },
  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
    Statistics,
    Alerts,
    Comments,
    SpicialsticsCheck,
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
.specialities-list :deep(.ant-skeleton-title) {
  height: 38px;
  margin-top: 0;
}

.modal :deep(.ant-modal-content) {
  border-radius: 30px;
}

.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

.modal-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */

.modal-list::-webkit-scrollbar-track {
  border-radius: 50px;
  background: var(--bg-grey);
  width: 4px;
}

/* Handle */

.modal-list::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 50px;
  background: var(--border-darik);
}

.modal-list .active {
  border-color: var(--blue);
  color: var(--blue);
}
</style>
