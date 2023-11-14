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
              Loyihani yopish uchun mijozni tasdig’i kutilmoqda
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
          <div class="card client-card flex gap-3">
            <div
              class="image w-[60px] h-[60px] rounded-full border-[2px] border-solid border-agro-green relative"
            >
              <img
                loading="lazy"
                class="w-full h-full"
                src="../../assets/images/Avatar 5.png"
                alt=""
              />
              <span class="absolute bottom-0 right-[-7px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.88302 1.99531C10.4792 1.33021 11.5208 1.33021 12.117 1.99531L13.523 3.56392C13.9638 4.05575 14.5813 4.35314 15.2407 4.39115L17.3437 4.51237C18.2354 4.56377 18.8849 5.37819 18.7366 6.25896L18.3868 8.3362C18.2771 8.98752 18.4297 9.65576 18.8111 10.195L20.0275 11.9148C20.5432 12.6439 20.3115 13.6595 19.5304 14.0927L17.6882 15.1144C17.1106 15.4347 16.6833 15.9706 16.4995 16.605L15.9134 18.6283C15.6648 19.4862 14.7263 19.9382 13.9006 19.5976L11.9533 18.7943C11.3427 18.5425 10.6573 18.5425 10.0467 18.7943L8.09938 19.5976C7.27369 19.9382 6.33517 19.4862 6.08664 18.6283L5.5005 16.605C5.31672 15.9706 4.88936 15.4347 4.31177 15.1144L2.46963 14.0927C1.68855 13.6595 1.45675 12.644 1.97252 11.9148L3.18894 10.195C3.57035 9.65576 3.72287 8.98751 3.6132 8.3362L3.26342 6.25896C3.11511 5.37819 3.76459 4.56377 4.65628 4.51237L6.75927 4.39115C7.41866 4.35314 8.03621 4.05575 8.47704 3.56392L9.88302 1.99531Z"
                    fill="#5C46E5"
                    stroke="white"
                  />
                  <path
                    d="M9 11.6527L10.0962 12.8303C10.4044 13.087 10.8833 13.0477 11.1379 12.7448L14 10"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div class="body flex flex-col justify-center">
              <div class="flex justify-between mb-[2px]">
                <p class="text-[14px] text-grey-64">Клиент:</p>
              </div>
              <h4 class="text-black text-base font-medium">Muhammadullo Egamberdiyev</h4>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <a-form-model :model="form" ref="ruleForm" :rules="rules">
            <a-form-model-item prop="deadline" class="form-item w-full mb-0">
              <a-input
                v-model="text"
                type="textarea"
                rows="6"
                placeholder="Frilanserga fikr qoldirish"
              />
            </a-form-model-item>
          </a-form-model>
          <div class="flex justify-end">
            <button
              @click="$emit('submit')"
              class="h-[54px] items-center w-[194px] flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-base font-medium text-white"
            >
              Yuborish
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
    </a-modal>
  </div>
</template>
<script>
export default {
  props: ["visibleProp"],
  data() {
    return {
      visible: false,
      text: "",
      rules: {},
      form: {},
    };
  },
  methods: {
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
</style>
