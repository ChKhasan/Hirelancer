<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] xl:px-0 gap-8 py-[80px] xl:py-0 border border-solid border-grey-light rounded-3xl number-card xl:border-0"
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
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]">
        Kirish yoki ro'yxatdan o'tish
      </h4>
      <p class="flex text-base text-grey-64 mt-2 xl:text-[14px]">
        Единая авторизация и регистрация
      </p>
    </div>
    <div class="xl:pt-2">
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <a-form-model-item
          ref="name"
          class="auth-item"
          label="Telefon raqamingizni kiriting"
          prop="phone"
        >
          <!-- <a-input v-model="form.name" /> -->
          <div
            class="input-block border border-solid flex items-center"
            :class="onFocus ? 'border-blue boxShadow' : 'border-border-darik'"
          >
            <span class="mr-1 text-base text-black">+998</span>
            <input
              v-mask="'## ### ## ##'"
              @focus="onFocus = true"
              @blur="onFocus = false"
              v-model="form.phone"
              type="text"
            />
          </div>
        </a-form-model-item>
        <p class="text-grey-40 text-[14px] mt-[11px]">
          Kiritgan telefon raqamingizga tasdiqlash kodi yuboriladi
        </p>
      </a-form-model>
    </div>
    <div
      class="buttons grid grid-cols-2 gap-4 xl:gap-2 xl:flex xl:flex-col-reverse xl:absolute xl:bottom-4 xl:w-full xl:left-0"
    >
      <button
        @click="$router.go(-1)"
        class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
      >
        Bekor qilish
      </button>
      <button
        @click="onSubmit"
        class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
      >
        Kodni jo’natish
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onFocus: false,
      other: "",
      form: {
        phone: "",
        role: "Freelancer",
      },
      rules: {
        phone: [
          { required: true, message: "This field is required", trigger: "blur" },
          { min: 12, message: "Length should 9", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      const data = {
        ...this.form,
        phone: `+998${this.form.phone.replaceAll(" ", "")}`,
      };
      localStorage.setItem("phone", this.form.phone.replaceAll(" ", ""));
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("checkNumber", data);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="css" scoped>
.boxShadow {
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.auth-item .input-block {
  height: 47px;
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s;
}
.auth-item .input-block input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-color: transparent;
}
@media (max-width: 1200px) {
  .auth-item .input-block {
    height: 44px;
  }
  .auth-item .input-block input {
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
