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
        :class="{ active: !$route.name.includes('specialities') }"
        class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
      >
        Shaxsiy ma'lumotlar
      </button>
      <button
        @click="$router.push(`/profile/${$route.params.user}/settings/specialities`)"
        :class="{ active: $route.name.includes('specialities') }"
        class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
      >
        Mutaxassisliklar
      </button>
    </div>
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <div class="max-w-[818px] pt-6 flex flex-col gap-6 relative">
        <div
          v-if="laoding"
          class="loader h-full w-full flex justify-center absolute top-0 left-0 pointer-events-none z-100 items-center"
        >
          <a-spin class="" />
        </div>
        <div
          :class="{ 'pointer-events-none': laoding }"
          class="px-8 py-6 border border-solid border-border-darik rounded-[16px] pb-[120px] relative z-0"
        >
          <h3 class="text-[20px] text-black font-medium mb-6">Shaxsiy ma'lumotlar</h3>
          <div>
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item ref="name" class="form-item" label="Ism">
                  <a-input v-model="form.name" placeholder="Ism" />
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Familya">
                  <a-input v-model="form.surname" placeholder="Familya" />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item
                  ref="name"
                  class="form-item"
                  label="Tug’ilgan kuningiz"
                >
                  <a-date-picker
                    @change="onChange"
                    v-model="form.date_of_birth"
                    class="w-full"
                    placeholder="kk/oo/yy"
                  />
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Your gender">
                  <a-select v-model="form.gender" placeholder="Jinsingizni tanlang">
                    <a-select-option
                      :value="item.value"
                      v-for="item in gendertypes"
                      :key="item.value"
                    >
                      {{ item.name }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item ref="name" class="form-item" label="Mamlakatingiz">
                  <a-select v-model="form.country_id" placeholder="Mamlakatingiz">
                    <a-select-option
                      :value="region?.id"
                      v-for="region in countries"
                      :key="region?.id"
                    >
                      {{ region?.name_ru }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Mintaqangiz">
                  <a-select v-model="form.region_id" placeholder="Mintaqangiz">
                    <a-select-option
                      :value="region?.id"
                      v-for="region in regions"
                      :key="region?.id"
                    >
                      {{ region?.name_ru }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
              </div>
              <div class="grid">
                <a-form-model-item ref="name" class="form-item" label="Bio">
                  <a-input v-model="form.bio" placeholder="O’zhaqingizda ma’lumot" />
                </a-form-model-item>
              </div>
            </div>
          </div>
        </div>
        <div
          class="px-8 py-6 border border-solid border-border-darik rounded-[16px]"
          :class="{ 'pointer-events-none': laoding }"
        >
          <h3 class="text-[20px] text-black font-medium mb-6">Aloqa ma'lumotlarim</h3>
          <div>
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item
                  ref="name"
                  class="form-item relative flex items-center"
                  label="Telefon raqamim"
                >
                  <a-input
                    v-model="form.phone"
                    placeholder="+998"
                    v-mask="'+998 ## ### ## ##'"
                  />
                  <span class="absolute right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M14.3876 3.22464C18.1926 3.22464 21.2766 6.30864 21.2766 10.1136M14.3876 6.76464C16.2366 6.76464 17.7366 8.26364 17.7366 10.1136M9.60659 14.8646C10.5066 15.7276 11.5616 16.4296 12.7276 16.9276L13.2466 17.1486L14.8416 15.5286C15.2376 15.1266 15.8106 14.9526 16.3636 15.0686L20.2276 15.8776C20.8816 16.0166 21.3486 16.5936 21.3486 17.2616V20.0436C21.3486 21.0386 20.5426 21.8446 19.5476 21.8446H18.6926C14.7586 21.8446 10.8766 20.5416 7.94059 17.9236C7.69859 17.7086 7.46359 17.4856 7.23459 17.2576L7.27159 17.2946C7.04259 17.0656 6.82059 16.8306 6.60559 16.5886C3.98659 13.6536 2.68359 9.77164 2.68359 5.83764V4.98264C2.68359 3.98764 3.48959 3.18164 4.48459 3.18164L7.26659 3.18164C7.93459 3.18164 8.51159 3.64864 8.65059 4.30264L9.46059 8.16664C9.57559 8.71864 9.40259 9.29264 9.00059 9.68864L7.38059 11.2836L7.60159 11.8026C8.09959 12.9676 8.74259 13.9646 9.60659 14.8646Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                  ></span>
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Telegram">
                  <a-input v-model="form.telegram" placeholder="@" />
                  <span class="absolute right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12.002 20.5C16.4203 20.5 20.002 16.9183 20.002 12.5C20.002 8.08172 16.4203 4.5 12.002 4.5C7.58367 4.5 4.00195 8.08172 4.00195 12.5C4.00195 16.9183 7.58367 20.5 12.002 20.5ZM12.002 22.5C6.4791 22.5 2.00195 18.0228 2.00195 12.5C2.00195 6.97715 6.4791 2.5 12.002 2.5C17.5248 2.5 22.002 6.97715 22.002 12.5C22.002 18.0228 17.5248 22.5 12.002 22.5ZM8.8921 13.6708L6.39405 12.8911C5.85414 12.7255 5.85093 12.354 6.51494 12.0871L16.248 8.32754C16.8125 8.09644 17.1335 8.38842 16.9505 9.11641L15.2927 16.9377C15.1773 17.4941 14.8417 17.6266 14.3769 17.3698L11.826 15.4823L10.6371 16.6297C10.5149 16.7476 10.4155 16.8489 10.2283 16.8743C10.041 16.8996 9.88661 16.8442 9.77434 16.5337L8.90475 13.6628L8.8921 13.6708Z"
                        fill="#5C46E6"
                      />
                    </svg>
                  </span>
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item ref="name" class="form-item" label="Facebook">
                  <a-input v-model="form.facebook" placeholder="@" />
                  <span class="absolute right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M13.002 20.4381C16.9483 19.946 20.002 16.5796 20.002 12.5C20.002 8.08172 16.4203 4.5 12.002 4.5C7.58367 4.5 4.00195 8.08172 4.00195 12.5C4.00195 16.5796 7.05564 19.946 11.002 20.4381L11.002 14.5H9.00195V12.5H11.002V10.8458C11.002 9.50855 11.1412 9.02362 11.4027 8.53473C11.6641 8.04584 12.0478 7.66216 12.5367 7.4007C12.9194 7.19604 13.3941 7.07252 14.2237 7.01954C14.5529 6.99851 14.9791 7.02533 15.502 7.1V9H15.002C14.0847 9 13.7062 9.04332 13.4799 9.16433C13.3396 9.23939 13.2414 9.33758 13.1663 9.47793C13.0453 9.70418 13.002 9.92853 13.002 10.8458V12.5H15.502L15.002 14.5H13.002L13.002 20.4381ZM12.002 22.5C6.4791 22.5 2.00195 18.0228 2.00195 12.5C2.00195 6.97715 6.4791 2.5 12.002 2.5C17.5248 2.5 22.002 6.97715 22.002 12.5C22.002 18.0228 17.5248 22.5 12.002 22.5Z"
                        fill="#5C46E6"
                      />
                    </svg>
                  </span>
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Eletron pochtam">
                  <a-input v-model="form.email" placeholder="http://" />
                  <span class="absolute right-4"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M3 3.5L21 3.5C21.5523 3.5 22 3.94772 22 4.5V20.5C22 21.0523 21.5523 21.5 21 21.5H3C2.44772 21.5 2 21.0523 2 20.5L2 4.5C2 3.94772 2.44772 3.5 3 3.5ZM20 7.73792L12.0718 14.838L4 7.71594L4 19.5H20V7.73792ZM4.51146 5.5L12.0619 12.162L19.501 5.5L4.51146 5.5Z"
                        fill="#5C46E6"
                      /></svg
                  ></span>
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <a-form-model-item ref="name" class="form-item" label="Instagram">
                  <a-input v-model="form.instagram" placeholder="@" />
                  <span class="absolute right-4"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12.002 9.5C10.3446 9.5 9.00195 10.8431 9.00195 12.5C9.00195 14.1573 10.3451 15.5 12.002 15.5C13.6593 15.5 15.002 14.1569 15.002 12.5C15.002 10.8427 13.6589 9.5 12.002 9.5ZM12.002 7.5C14.7624 7.5 17.002 9.7371 17.002 12.5C17.002 15.2605 14.7649 17.5 12.002 17.5C9.24148 17.5 7.00195 15.2629 7.00195 12.5C7.00195 9.73953 9.23905 7.5 12.002 7.5ZM18.502 7.24915C18.502 7.93926 17.9412 8.49917 17.252 8.49917C16.5619 8.49917 16.002 7.9384 16.002 7.24915C16.002 6.5599 16.5627 6 17.252 6C17.9403 5.99913 18.502 6.5599 18.502 7.24915ZM12.002 4.5C9.52747 4.5 9.12415 4.50655 7.97324 4.5578C7.18912 4.59461 6.6635 4.70007 6.17513 4.88967C5.74113 5.05799 5.42806 5.25898 5.09449 5.59255C4.75964 5.9274 4.55901 6.23963 4.39137 6.67383C4.20133 7.16332 4.0959 7.68811 4.05975 8.47115C4.008 9.5752 4.00195 9.96105 4.00195 12.5C4.00195 14.9745 4.0085 15.3778 4.05974 16.5286C4.09657 17.3124 4.20217 17.8388 4.39131 18.326C4.56007 18.7606 4.76147 19.0744 5.09343 19.4064C5.4296 19.7421 5.74276 19.9434 6.17284 20.1094C6.66716 20.3005 7.19245 20.4061 7.97309 20.4422C9.07715 20.4939 9.463 20.5 12.002 20.5C14.4765 20.5 14.8798 20.4934 16.0306 20.4422C16.8127 20.4055 17.3395 20.2996 17.828 20.1106C18.2614 19.9423 18.5762 19.7402 18.9084 19.4085C19.2446 19.0718 19.4455 18.7594 19.6117 18.3283C19.8023 17.8358 19.9081 17.3098 19.9442 16.5289C19.9959 15.4248 20.002 15.0389 20.002 12.5C20.002 10.0255 19.9954 9.62221 19.9442 8.47137C19.9074 7.68906 19.8015 7.16149 19.6123 6.67318C19.4444 6.24038 19.2427 5.92635 18.9094 5.59255C18.574 5.25715 18.2626 5.05693 17.8281 4.88942C17.339 4.69954 16.8134 4.59396 16.0308 4.55781C14.9268 4.50605 14.5409 4.5 12.002 4.5ZM12.002 2.5C14.7186 2.5 15.0578 2.51 16.1245 2.56C17.1886 2.60917 17.9145 2.7775 18.552 3.025C19.2111 3.27917 19.7678 3.6225 20.3236 4.17833C20.8786 4.73417 21.222 5.2925 21.477 5.95C21.7236 6.58667 21.892 7.31333 21.942 8.3775C21.9895 9.44417 22.002 9.78333 22.002 12.5C22.002 15.2167 21.992 15.5558 21.942 16.6225C21.8928 17.6867 21.7236 18.4125 21.477 19.05C21.2228 19.7092 20.8786 20.2658 20.3236 20.8217C19.7678 21.3767 19.2086 21.72 18.552 21.975C17.9145 22.2217 17.1886 22.39 16.1245 22.44C15.0578 22.4875 14.7186 22.5 12.002 22.5C9.28528 22.5 8.94611 22.49 7.87945 22.44C6.81528 22.3908 6.09028 22.2217 5.45195 21.975C4.79361 21.7208 4.23611 21.3767 3.68028 20.8217C3.12445 20.2658 2.78195 19.7067 2.52695 19.05C2.27945 18.4125 2.11195 17.6867 2.06195 16.6225C2.01445 15.5558 2.00195 15.2167 2.00195 12.5C2.00195 9.78333 2.01195 9.44417 2.06195 8.3775C2.11111 7.3125 2.27945 6.5875 2.52695 5.95C2.78111 5.29167 3.12445 4.73417 3.68028 4.17833C4.23611 3.6225 4.79445 3.28 5.45195 3.025C6.08945 2.7775 6.81445 2.61 7.87945 2.56C8.94611 2.5125 9.28528 2.5 12.002 2.5Z"
                        fill="#5C46E6"
                      /></svg
                  ></span>
                </a-form-model-item>
                <a-form-model-item ref="name" class="form-item" label="Linkedin">
                  <a-input v-model="form.linkedin" placeholder="@" />
                  <span class="absolute right-4"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M4.00195 3.5L20.002 3.5C20.5543 3.5 21.002 3.94772 21.002 4.5V20.5C21.002 21.0523 20.5543 21.5 20.002 21.5H4.00195C3.44966 21.5 3.00195 21.0523 3.00195 20.5L3.00195 4.5C3.00195 3.94772 3.44966 3.5 4.00195 3.5ZM5.00195 5.5L5.00195 19.5H19.002V5.5L5.00195 5.5ZM7.50195 9.5C6.67352 9.5 6.00195 8.82843 6.00195 8C6.00195 7.17157 6.67352 6.5 7.50195 6.5C8.33037 6.5 9.00195 7.17157 9.00195 8C9.00195 8.82843 8.33037 9.5 7.50195 9.5ZM6.50195 10.5H8.50195V18H6.50195L6.50195 10.5ZM12.002 10.9295C12.5864 10.3653 13.2675 10 14.002 10C16.073 10 17.502 11.6789 17.502 13.75V18H15.502V13.75C15.502 12.7835 14.7185 12 13.752 12C12.7855 12 12.002 12.7835 12.002 13.75V18H10.002V10.5H12.002V10.9295Z"
                        fill="#5C46E6"
                      /></svg
                  ></span>
                </a-form-model-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-4 max-w-[818px] mt-8">
        <button
          class="text-[18px] font-medium text-black border-[2px] border-solid border-border-darik rounded-[12px] h-[60px] w-[204px] flex justify-center items-center"
        >
          Bekor qilish
        </button>
        <button
          @click="onSubmit"
          class="text-[18px] font-medium text-white border-[2px] border-solid border-blue bg-blue rounded-[12px] h-[60px] w-[204px] flex justify-center items-center"
        >
          Saqlash
        </button>
      </div>
    </a-form-model>
    <!-- </ProfileLayout> -->
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
  layout: "profileLayout",
  data() {
    return {
      userInfo: {},
      laoding: false,
      form: {
        name: "",
        surname: "",
        avatar: "",
        gender: undefined,
        date_of_birth: "",
        region_id: undefined,
        country_id: undefined,
        bio: "",
        phone: null,
        email: "",
        telegram: "",
        instagram: "",
        facebook: "",
        linkedin: "",
        github: "",
        dribble: "",
        twitter: "",
        xing: "",
      },
      gendertypes: [
        {
          value: "male",
          name: "Erkak",
        },
        {
          value: "female",
          name: "Ayol",
        },
      ],
      rules: {
        name: [{ required: true, message: "This field is required", trigger: "blur" }],
        surname: [{ required: true, message: "This field is required", trigger: "blur" }],
        gender: [{ required: true, message: "This field is required", trigger: "blur" }],
        specialities: [
          { required: true, message: "This field is required", trigger: "blur" },
        ],
      },
    };
  },
  async asyncData({ store }) {
    const [regionsData, countriesData] = await Promise.all([
      store.dispatch("fetchRegions/getRegions"),
      store.dispatch("fetchRegions/getCountries"),
    ]);
    const regions = regionsData.content;
    const countries = countriesData.content;

    return {
      regions,
      countries,
    };
  },

  async mounted() {
    this.laoding = true;
    if (localStorage.getItem("auth-token")) {
      const [userInfoData] = await Promise.all([
        this.$store.dispatch("fetchAuth/getUserInfo"),
      ]);
      this.userInfo = userInfoData;
      if (userInfoData["name"]) {
        Object.keys(this.form).forEach((item) => {
          if (userInfoData[item]) {
            this.form[item] = userInfoData[item];
          }
        });
        Object.keys(userInfoData.contacts).forEach((item) => {
          if (userInfoData.contacts[item]) {
            this.form[item] = String(userInfoData.contacts[item]);
          }
        });
        this.form["country_id"] = userInfoData?.country?.id;
        this.form["region_id"] = userInfoData?.region?.id;
        this.form["bio"] = userInfoData?.bio ? userInfoData?.bio : "";
      }
    }
    this.laoding = false;
  },
  methods: {
    onChange(date, dateString) {},
    onSubmit() {
      const data = {
        ...this.form,
        date_of_birth: moment(this.form.date_of_birth).format("DD.MM.YYYY"),
        phone: this.form.phone.replaceAll(" ", ""),
      };
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__POST_REGISTER(data);
        } else {
          return false;
        }
      });
    },
    async __POST_REGISTER(form) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postUserEdit", form);
        if (data.success) {
          this.$notification["success"]({
            message: "Success",
            description: "Успешно изменен",
          });
        }
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
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
.personal-information {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
.form-item :deep(.ant-input) {
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-darik);
  height: 48px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-input:focus) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection) {
  border-radius: 8px;
  background: #fff;
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
.form-item :deep(.ant-select-selection__rendered .ant-select-selection-selected-value) {
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-form-item-label label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: relative;
  padding-right: 12px;
}
.form-item :deep(label::before) {
  position: absolute;
  right: -3px;
  top: 0;
}
.form-item :deep(label::after) {
  display: none;
}
.form-item :deep(.ant-radio-group) {
  width: 100%;
}
.form-item :deep(.ant-form-item-children) {
  display: flex;
  align-items: center;
}
.loader {
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 100;
  pointer-events: none;
}
</style>
