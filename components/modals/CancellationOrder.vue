<template lang="html">
  <div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ padding: '16px', paddingLrft: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="712px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-8 pl-4">
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
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="handleOk"
            class="h-[54px] items-center flex justify-center border border-solid border-grey-light rounded-[8px] text-base font-medium text-grey-64"
          >
            Yo’q
          </button>
          <button
            @click="$emit('submit')"
            class="h-[54px] items-center flex justify-center border border-solid border-light-red bg-light-red rounded-[8px] text-base font-medium text-white"
          >
            Ha
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
      visible: false,
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
