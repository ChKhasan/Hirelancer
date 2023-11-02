<template lang="html">
  <div>
    <a-modal
      class="xl:hidden flex"
      v-model="visible"
      :body-style="{ padding: '16px', borderRadius: '24px' }"
      :dialog-style="{ padding: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="955px"
      @ok="handleOk"
    >
      <div class="flex flex-col items-center gap-6 relative">
        <button @click="handleOk" class="absolute top-0 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M27.0718 12.929L12.9297 27.0711M27.0718 27.071L12.9297 12.9289"
              stroke="#020105"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span class="py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
              fill="#009A10"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.8419 25.6321C59.1497 26.6493 59.3853 28.5341 58.3681 29.842L42.3401 50.4494C39.8452 53.6571 35.1524 54.0733 32.1319 51.3549L21.9931 42.23C20.7616 41.1216 20.6618 39.2248 21.7701 37.9932C22.8785 36.7617 24.7754 36.6619 26.0069 37.7703L36.1456 46.8951C36.5771 47.2835 37.2476 47.224 37.604 46.7658L53.632 26.1583C54.6492 24.8505 56.534 24.6149 57.8419 25.6321Z"
              fill="#009A10"
            /></svg
        ></span>
        <div class="flex flex-col gap-4 items-center mt-[-16px]">
          <h4 class="text-[24px] text-black font-medium">Ваша заявка отправлена</h4>
          <div class="flex flex-col justify-center items-center">
            <p class="text text-base text-black">
              Sledite za statusom zayavki cherez telegram bot
            </p>
            <a class="text-black" href="">@udoo_alert_bot</a>
          </div>
        </div>
        <div class="buttons flex flex-col gap-4 items-center mb-6">
          <a
            href="#"
            class="hover:text-white h-[40px] px-6 rounded-[8px] bg-light-blue2 text-white text-base font-medium flex gap-[10px] items-center"
          >
            Открыть телеграм-бот<svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M0.896699 6.79637L16.2854 0.145754C17.009 -0.166999 17.7932 0.441585 17.6698 1.22023L15.5657 14.4962C15.4358 15.3162 14.4208 15.6299 13.8509 15.0262L10.398 11.3686C9.72083 10.6514 9.66776 9.54749 10.273 8.76857L12.711 5.63084C12.8503 5.45146 12.6303 5.21549 12.4416 5.34204L7.5943 8.59387C6.77172 9.14569 5.77366 9.37269 4.79333 9.2309L1.15027 8.70401C0.152284 8.55968 -0.0289275 7.1964 0.896699 6.79637Z"
                fill="white"
              />
            </svg>
          </a>
          <button
            @click="visible = false"
            class="px-6 justify-center h-[40px] rounded-[8px] border border-solid border-blue bg-white text-blue text-base font-medium flex items-center"
          >
            Посмотреть заказ
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
:deep(.ant-modal-content) {
  border-radius: 24px;
}
</style>
