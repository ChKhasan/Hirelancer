<template lang="html">
  <div>
    <a-modal
      class="complaint-modal"
      v-model="visible"
      :body-style="{ padding: '16px', paddingLrft: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="954px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-6 pl-4">
        <div class="flex flex-col gap-8">
          <div class="flex justify-between">
            <h4 class="text-black text-[24px] font-semibold">
              Loyihani rostan ham tugatmoqchimisiz?
            </h4>
            <button @click="visible = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.6565 10.3428L10.3428 21.6566M21.6565 21.6565L10.3428 10.3428"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="head flex gap-[37px] justify-start items-center">
            <div class="rating flex flex-col gap-2">
              <p class="text-[14px] text-grey-40 whitespace-nowrap">
                Frilanserga baho berish
              </p>
              <a-rate v-model="form.stars" />
            </div>
            <a-select
              v-model="form.is_positive"
              placeholder="Положительный"
              class="w-full"
            >
              <a-select-option
                :value="optin.value"
                v-for="optin in options"
                :key="optin.value"
              >
                {{ optin.label }}</a-select-option
              >
            </a-select>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <a-form-model :model="form" ref="ruleForm" :rules="rules">
            <a-form-model-item prop="feedback" class="form-item w-full mb-0">
              <a-input
                v-model="form.feedback"
                type="textarea"
                rows="6"
                placeholder="Frilanserga fikr qoldirish"
              />
            </a-form-model-item>
          </a-form-model>
          <div class="flex justify-between">
            <span class="flex">
              <a-radio v-model="done" class="flex">
                <p class="text-[20px] text-grey-80 font-medium">Ha</p>
              </a-radio>
            </span>
            <div class="flex gap-4">
              <button
                @click="handleOk"
                class="h-[54px] items-center w-[194px] flex justify-center gap-2 border border-solid border-grey-light bg-grey-light rounded-[8px] text-base font-medium text-black"
              >
                Bekor qilish
              </button>
              <button
                @click="onSubmit"
                class="h-[54px] items-center w-[194px] flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-base font-medium text-white"
                :class="{ 'pointer-events-none opacity-50': !done }"
              >
                Saqlash
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: ["visibleProp", "title"],
  data() {
    return {
      visible: false,
      done: false,
      value: undefined,
      options: [
        {
          label: "Положительный",
          value: 1,
        },
        {
          label: "Отрицательный",
          value: 0,
        },
      ],
      text: "",
      rules: {
        feedback: [
          { required: true, message: "This field is required", trigger: "blur" },
        ],
      },
      form: {
        order: null,
        stars: 5,
        feedback: "",
        is_positive: 1,
      },
    };
  },
  mounted() {
    this.form.order = this.$route.params.id;
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
        }
      });
    },
    handleOk() {
      this.visible = false;
      this.$emit("handleOkProp");
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.$emit("handleOkProp");
      }
    },
    visibleProp(val) {
      this.visible = val;
    },
  },
};
</script>
<style lang="css" scoped>
.complaint-modal :deep(.ant-modal-content) {
  border-radius: 16px;
}
.complaint-modal :deep(.form-item textarea) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: £FFF;
}
:deep(.ant-select-selection--single) {
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  max-width: 280px;
}
:deep(.ant-rate) {
  height: 20px;
  display: flex;
  align-items: center;
}
:deep(.ant-select-selection__rendered),
:deep(.ant-select-selection-selected-value) {
  height: 100%;
}
:deep(.ant-select-selection-selected-value) {
  display: flex !important;
  align-items: center;
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
:deep(.ant-radio-checked .ant-radio-inner) {
  border-color: var(--main-color);
}
:deep(.ant-radio-inner::after) {
  background: var(--main-color);
}
:deep(.ant-radio-checked::after) {
  border-color: var(--main-color);
}
:deep(.ant-radio-wrapper) {
  display: flex;
  align-items: center;
}
</style>
