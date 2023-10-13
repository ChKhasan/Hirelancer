<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] gap-8 py-[80px] border border-solid border-grey-light rounded-3xl number-card"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="27"
            viewBox="0 0 145 27"
            fill="none"
          >
            <path
              d="M24.969 26.9204H8.08407C5.85398 26.9204 3.94248 26.1372 2.34956 24.5708C0.783186 22.9779 0 21.0664 0 18.8363V0H7.52655V18.1593C7.52655 18.5044 7.64602 18.7965 7.88496 19.0354C8.12389 19.2743 8.40265 19.3938 8.72124 19.3938H24.3319C24.677 19.3938 24.969 19.2743 25.208 19.0354C25.4469 18.7965 25.5664 18.5044 25.5664 18.1593V0H33.0531V18.8363C33.0531 21.0664 32.2566 22.9779 30.6637 24.5708C29.0973 26.1372 27.1991 26.9204 24.969 26.9204Z"
              fill="#5C46E6"
            />
            <path
              d="M61.992 26.9204H37.023V0H61.992C64.2221 0 66.1203 0.79646 67.6867 2.38938C69.2796 3.95575 70.076 5.85398 70.076 8.08407V18.8363C70.076 21.0664 69.2796 22.9779 67.6867 24.5708C66.1203 26.1372 64.2221 26.9204 61.992 26.9204ZM44.5495 19.3938H61.3548C61.6999 19.3938 61.992 19.2743 62.2309 19.0354C62.4699 18.7965 62.5893 18.5177 62.5893 18.1991V8.72124C62.5893 8.40265 62.4699 8.12389 62.2309 7.88496C61.992 7.64602 61.6999 7.52655 61.3548 7.52655H44.5495V19.3938Z"
              fill="#5C46E6"
            />
            <path
              d="M99.0149 27H82.13C79.8999 27 77.9884 26.2168 76.3955 24.6504C74.8291 23.0575 74.0459 21.1593 74.0459 18.9558V8.08407C74.0459 5.85398 74.8291 3.95575 76.3955 2.38938C77.9884 0.79646 79.8999 0 82.13 0H99.0149C101.245 0 103.143 0.79646 104.71 2.38938C106.303 3.95575 107.099 5.85398 107.099 8.08407V18.9558C107.099 21.1593 106.303 23.0575 104.71 24.6504C103.143 26.2168 101.245 27 99.0149 27Z"
              fill="#5C46E6"
            />
            <path
              d="M136.038 27H119.153C116.923 27 115.011 26.2168 113.418 24.6504C111.852 23.0575 111.069 21.1593 111.069 18.9558V8.08407C111.069 5.85398 111.852 3.95575 113.418 2.38938C115.011 0.79646 116.923 0 119.153 0H136.038C138.268 0 140.166 0.79646 141.733 2.38938C143.326 3.95575 144.122 8.08407 144.122 8.08407V18.9558C144.122 21.1593 143.326 23.0575 141.733 24.6504C140.166 26.2168 138.268 27 136.038 27Z"
              fill="#5C46E6"
            />
            <circle cx="81.8028" cy="7.87821" r="4.14823" fill="white" />
            <circle cx="119.966" cy="7.87821" r="4.14823" fill="white" /></svg></span
      ></nuxt-link>
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px]">Royxatdan otish</h4>
      <p class="flex text-base text-grey-64 mt-2">Foydalanuvchi turini tanlang</p>
    </div>
    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-8">
          <a-form-model-item
            ref="name"
            class="auth-item"
            label="Telefon raqamingizni kiriting"
            prop="phone_number"
          >
            <!-- <a-input v-model="form.name" /> -->
            <div
              class="rounded-[8px] px-4 py-3 h-[47px] bg-bg-grey border border-solid border-border-darik flex items-center justify-between gap-4"
            >
              <span class="mr-1 text-base text-black px-3 py-[6px] rounded-[4px] bg-white"
                >+998</span
              >
              <input
                class="w-full pointer-events-none"
                v-mask="'## ### ## ##'"
                v-model="form.phone_number"
                type="text"
              />
              <button class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.3865 6.33114L18.169 10.1136M3 21.5L6.67278 20.8008C7.45152 20.6526 8.16769 20.2736 8.72823 19.713L20.1837 8.25754C21.2721 7.16918 21.2721 5.40462 20.1837 4.31626C19.0954 3.22791 17.3308 3.22791 16.2425 4.31627L4.78696 15.7718C4.22642 16.3323 3.8474 17.0485 3.69916 17.8272L3 21.5Z"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="auth-item required"
            label="Tasdiqlash kodini kiriting"
            prop="phone_number"
          >
            <div
              class="rounded-[8px] sms-input pl-4 pr-2 py-3 h-[47px] bg-white border border-solid border-border-darik flex items-center justify-between gap-4"
              :class="{ 'border-red': smsError && form.password.length != 6 }"
            >
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                :num-inputs="6"
                separator=""
                :should-auto-focus="true"
                placeholder="*"
                :is-input-num="true"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
              <div
                class="mr-1 text-base text-black px-4 py-[6px] rounded-[4px] bg-bg-grey flex gap-2 items-center"
              >
                <span
                  ><a-progress
                    class="sms-progress flex items-center"
                    type="circle"
                    :percent="timeProgress"
                /></span>
                <p class="text-base text-black font-medium">
                  00:{{ time >= 10 ? time : `0${time}` }}
                </p>
              </div>
            </div></a-form-model-item
          >
        </div>
        <button
          :class="{ 'opacity-50 pointer-events-none': time > 0 }"
          class="text-blue text-[15px] mt-3"
        >
          Qayta jonatish
        </button>

        <p class="text-grey-40 text-[14px] mt-6">
          +998
          {{
            `${form?.phone_number}`
              .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)
              .filter((item, index) => index != 0)
              .join(" ")
          }}
          telefon raqamingizga tasdiqlash kodi yuborildi
        </p>
      </a-form-model>
      <div class="buttons grid grid-cols-2 gap-4 mt-6">
        <button
          @click="$router.go(-1)"
          class="h-[60px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] text-black font-medium"
        >
          Bekor qilish
        </button>
        <button
          @click="onSubmit"
          class="h-[60px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] text-white font-medium"
        >
          Kodni jo’natish
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      other: "",
      timeProgress: 100,
      smsError: false,
      time: 60,
      form: {
        phone_number: "999999990",
        password: "",
      },
      rules: {
        phone_number: [
          { required: true, message: "This field is required", trigger: "blur" },
          { min: 9, message: "Length should 9", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    if (localStorage.getItem("phone"))
      this.form.phone_number = localStorage.getItem("phone");
    this.setInputPlaceholder();
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      if (this.timeProgress > 0) {
        this.timeProgress -= 100 / 60;
      }
    }, 1000);
  },
  methods: {
    setInputPlaceholder() {
      this.$refs.otpInput.$el
        .querySelectorAll("input")
        .forEach((input) => (input.placeholder = "*"));
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
      this.form.password = value;
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
      this.form.password = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
    onSubmit() {
      const data = {
        phone: `+998${this.form.phone_number.replaceAll(" ", "")}`,
        password: this.form.password,
        role: "Freelancer",
      };
      if (this.form.password.length != 6) {
        this.smsError = true;
      } else {
        this.smsError = false;
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendCode", data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.otp-input) {
  width: 24px;
  height: 24px;
  padding: 5px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
} /*
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
.auth-item input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-color: transparent;
  background-color: transparent;
}
.sms-progress {
  display: flex !important;
}
.sms-progress :deep(.ant-progress-inner) {
  width: 20px !important;
  height: 20px !important;
}
.sms-progress :deep(.ant-progress-text) {
  display: none !important;
}
.sms-progress :deep(.ant-progress-circle-path) {
  stroke-width: 20px;
  stroke: var(--blue) !important;
}
.required :deep(label)::before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: "*";
  position: absolute;
  right: -5px;
  top: 0;
}
.required :deep(label) {
  padding-right: 10px;
}
</style>
