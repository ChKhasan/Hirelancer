<template lang="html">
  <div
    class="modal h-[548px] xl:h-auto m-full mx-auto rounded-t-[16px] max-w-[1440px] bg-white px-8 xl:px-4 xl:pb-6"
  >
    <div class="max-w-[1200px] mx-auto pt-[48px] xl:pt-3 grid-container h-full">
      <div class="info relative flex flex-col gap-4 xl:gap-2">
        <h2 class="text-[24px] text-black font-semibold xl:text-[18px]">
          Отправить заявку
        </h2>
        <p class="text-base text-grey-80 xl:text-[14px]">
          Join our world-class innovation team, revolutionizing education at ASU Prep
          Digital. Our mission is to enhance student performance and provide access
        </p>
        <img
          loading="lazy"
          class="absolute bottom-0 xl:hidden"
          src="@/assets/images/bottom.png"
          alt=""
        />
      </div>
      <div class="form flex flex-col gap-[26px] xl:gap-10 relative">
        <a-form-model :model="form" ref="ruleForm" :rules="rules">
          <div class="grid grid-cols-2 gap-[19px] xl:grid-cols-1">
            <div class="flex flex-col justify-between">
              <a-form-model-item
                prop="deadline"
                class="form-item w-full mb-0"
                label="Срок исполнения в днях"
              >
                <a-input v-model="form.deadline" placeholder="0 дней" type="number" />
              </a-form-model-item>
              <a-form-model-item class="form-item w-full" label="Цена" prop="price">
                <a-input v-model="form.price" placeholder="0 сум" type="number" />
              </a-form-model-item>
            </div>
            <div>
              <a-form-model-item class="form-item w-full" label="Ваш отклик">
                <a-input
                  type="textarea"
                  rows="6"
                  v-model="form.additional_info"
                  placeholder="Дополнительная информация"
                />
              </a-form-model-item>
            </div>
          </div>
        </a-form-model>
        <p class="text-base text-grey-80  xl:mt-[-24px] xl:text-[14px]">
          Join our world-class innovation team, revolutionizing education at ASU Prep
          Digital. Our mission is to enhance student performance and provide access
        </p>
        <div class="buttons flex gap-4 xl:flex-col-reverse">
          <button
            class="px-[24px] items-center border border-solid rounded-[8px] xl:rounded-xl h-[52px] border-grey-24 flex justify-center text-base xl:text-[14px] text-grey-64 font-medium"
          >
            Отмена
          </button>
          <button
            @click="submitForm"
            class="px-[24px] gap-2 items-center border border-solid rounded-[8px] xl:rounded-xl h-[52px] border-blue bg-blue flex justify-center text-base xl:text-[14px] text-white font-medium"
          >
            Отправить заявку
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button class="absolute top-0 right-[-80px] xl:hidden" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M27.0713 12.929L12.9292 27.0711M27.0713 27.071L12.9292 12.9289"
              stroke="#BB2649"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        additional_info: "",
        price: "",
        deadline: "",
      },
      rules: {
        price: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
        ],
        deadline: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="css" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 85px;
}
.form-item :deep(label) {
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
}
.form-item :deep(input),
.form-item :deep(textarea) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  padding: 8px 16px;
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  width: 100%;
}
.form-item :deep(input) {
  height: 54px;
}
.form-item :deep(.ant-form-item-required) {
  padding-right: 10px;
}
.form-item :deep(.ant-form-item-required)::before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  line-height: 1;
  content: "*";
  position: absolute;
  right: -5px;
  top: 0;
}
.form-item :deep(.ant-form-item-required)::after {
  display: none !important;
}
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
  .form-item :deep(label) {
    font-size: 14px;
  }
  .form-item :deep(input) {
  height: 44px;
}
}
</style>
