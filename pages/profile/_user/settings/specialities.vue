<template lang="html">
  <div class="profile">
    <ProfileLayout :profile="true">
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
              class="py-[7px] text-base text-white h-[38px] flex items-center rounded-[4px] gap-2 border border-solid border-main-color pl-2 pr-3 bg-main-color"
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
    </ProfileLayout>
    <a-modal
      v-model="visible"
      :body-style="{ padding: '32px 40px', borderRadius: '30px' }"
      :dialog-style="{ padding: '32px', borderRadius: '24px' }"
      centered
      class="modal"
      :closable="false"
      width="1198px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <h6 class="text-black text-[24px] font-semibold">Sohangizni tanlang</h6>
          <p class="text-[18px] text-grey-80 flex gap-2 items-center">
            <span class="text-main-color font-medium">{{ checkedList.length }}</span
            >: yonalish tanlandi
            <span>(max 3 ta)</span>
          </p>
        </div>
        <div class="modal-body">
          <div
            class="flex flex-col gap-4 max-h-[620px] overflow-y-scroll modal-list pr-[9px]"
          >
            <div
              class="cursor-pointer flex gap-3 items-center h-[67px] px-6 rounded-xl bg-bg-f9 text-black text-base font-medium border-[2px] border-solid border-bg-f9"
              v-for="item in specialities"
              @click="onSelect(item?.id)"
              :class="{
                active: (modalList ? modalList : specialities[0]?.id) == item?.id,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.9997 47.1665C19.7523 47.1665 13.0664 40.3609 13.0664 31.9657C13.0664 23.6363 17.8326 13.9167 25.2689 10.4409C26.1357 10.0357 27.0677 9.83317 27.9997 9.83317V47.1665Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.3"
                  d="M30.7308 10.4412C29.864 10.0361 28.932 9.8335 28 9.8335V22.9003L36.2724 14.6279C34.662 12.8586 32.7997 11.4082 30.7308 10.4412Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.4"
                  d="M28 22.9003V33.167L40.3466 20.8203C39.2787 18.5427 37.9049 16.4214 36.2724 14.6279L28 22.9003Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.6"
                  d="M28 42.4998L42.5805 27.9193C42.17 25.5104 41.4098 23.0876 40.3466 20.8198L28 33.1665V42.4998Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.7"
                  d="M42.5805 27.9194L28 42.5V47.1665C36.2475 47.1665 42.9333 40.3609 42.9333 31.9657C42.9333 30.6419 42.8129 29.2829 42.5805 27.9194Z"
                  fill="#009A10"
                />
              </svg>
              {{ item?.name_ru }}
            </div>
          </div>
          <div class="modal-board flex flex-col justify-between">
            <div class="flex gap-3 flex-wrap">
              <button
                class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                v-for="child in specialities?.find(
                  (elem) =>
                    elem.id == (modalList != null ? modalList : specialities[0]?.id)
                )?.children"
                @click="onchecked(child)"
              >
                <a-checkbox
                  :checked="
                    Boolean(checkedList.find((elemChild) => elemChild.id == child.id))
                  "
                />
                <p class="text-grey-80 text-[14px] font-medium">
                  {{ child?.name_ru }}{{ child?.id }}
                </p>
              </button>
            </div>
            <div class="flex gap-4 justify-end">
              <button
                @click="closeChecked"
                class="h-[60px] border border-solid w-[227px] border-border-darik rounded-[12px] flex justify-center items-center text-[18px] text-black font-medium"
              >
                Bekor qilish
              </button>
              <button
                @click="saveChecked"
                class="h-[60px] border border-solid w-[227px] border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] text-white font-medium"
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
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
import moment from "moment";
export default {
  data() {
    return {
      checkedList: [],
      activeCheckedList: [],
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
        this.checkedList = [...this.activeCheckedList];
        this.loading = false;
      } catch (e) {}
    },
    closeChecked() {
      this.checkedList = [];
      this.visible = false;
    },
    async saveChecked() {
      this.activeCheckedList = await [...this.checkedList];
      this.checkedList = [];
      this.onSubmit();
      this.visible = false;
    },
    onchecked(obj) {
      if (this.checkedList.includes(obj)) {
        this.checkedList = this.checkedList.filter((item) => item.id != obj.id);
      } else {
        if (this.checkedList.length == 3) {
          this.checkedList.shift();
        }
        this.checkedList.push(obj);
      }
    },
    async deleteChecked(id) {
      this.onSubmit(id);
    },
    onSelect(id) {
      this.modalList = id;
      console.log(id);
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
