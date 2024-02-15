<template lang="html">
  <div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ padding: '16px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="712px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-4">
        <div class="flex justify-end">
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
        <div class="flex gap-8 flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
          >
            <circle cx="53" cy="53" r="53" fill="#5C46E6" />
            <path
              opacity="0.4"
              d="M69.6663 64.667V59.667C69.6663 56.9056 67.4278 54.667 64.6663 54.667H62.9997C61.9505 54.667 60.9625 55.161 60.333 56.0003L58.333 58.667C57.074 60.3457 55.0981 61.3337 52.9997 61.3337C50.9013 61.3337 48.9254 60.3457 47.6663 58.667L45.6663 56.0003C45.0368 55.161 44.0489 54.667 42.9997 54.667H41.333C38.5716 54.667 36.333 56.9056 36.333 59.667V64.667C36.333 67.4284 38.5716 69.667 41.333 69.667H64.6663C67.4278 69.667 69.6663 67.4284 69.6663 64.667Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41.3337 54.6663H43.0003C44.0495 54.6663 45.0375 55.1603 45.667 55.9997L47.667 58.6663C48.926 60.345 50.9019 61.333 53.0003 61.333C55.0987 61.333 57.0746 60.345 58.3337 58.6663L60.3337 55.9997C60.9632 55.1603 61.9511 54.6663 63.0003 54.6663H64.667C65.2514 54.6663 65.8124 54.7666 66.3337 54.9508V42.9997C66.3337 39.3178 63.3489 36.333 59.667 36.333H46.3337C42.6518 36.333 39.667 39.3178 39.667 42.9997V54.9508C40.1883 54.7666 40.7493 54.6663 41.3337 54.6663ZM50.917 47.1663C50.917 45.5555 52.2228 44.2497 53.8337 44.2497C55.4445 44.2497 56.7503 45.5555 56.7503 47.1663C56.7503 48.7772 55.4445 50.083 53.8337 50.083C52.2228 50.083 50.917 48.7772 50.917 47.1663ZM53.8337 41.7497C50.8421 41.7497 48.417 44.1748 48.417 47.1663C48.417 48.2092 48.7117 49.1833 49.2224 50.0098L47.1164 52.1158C46.6283 52.6039 46.6283 53.3954 47.1164 53.8836C47.6046 54.3717 48.3961 54.3717 48.8842 53.8836L50.9902 51.7776C51.8167 52.2883 52.7908 52.583 53.8337 52.583C56.8252 52.583 59.2503 50.1579 59.2503 47.1663C59.2503 44.1748 56.8252 41.7497 53.8337 41.7497Z"
              fill="white"
            />
          </svg>
          <h4 class="text-black text-[24px] font-medium mb-10">
            Loyihani yopish uchun mijozni tasdig’i kutilmoqda
          </h4>
        </div>
        <div class="flex justify-center">
          <button
            @click="$emit('submit')"
            class="h-[54px] items-center w-[194px] flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-base font-medium text-white"
          >
            Yaxshi, yopish 
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
    </a-modal>
  </div>
</template>
<script>
export default {
  props: ["visibleProp"],
  data() {
    return {
      visible: true,
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
.close-modal :deep(.ant-modal-content) {
  border-radius: 16px;
}
</style>
