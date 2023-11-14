<template lang="html">
  <div
    ref="priceBox"
    class="bottom-bar px-3 hidden xl:block pb-3 bg-white z-50 pt-1 w-full fixed left-0 bottom-0 rounded-t-[16px] border-[0] border-t border-solid border-border-darik"
  >
    <div class="menu flex justify-between">
      <button
        @click="$router.push('/')"
        :class="{ active: $route.name === 'index' }"
        class="flex flex-col gap-1 items-center text-grey-64 text-[12px] font-medium px-1 pt-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M10 18H14"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linecap="round"
          /></svg
        >Bosh sahifa
      </button>
      <button
        @click="$router.push('/orders')"
        :class="{ active: $route.name === 'orders' }"
        class="flex flex-col gap-1 items-center text-grey-64 text-[12px] font-medium px-1 pt-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.63245 11.1026C6.44913 8.65258 8.74196 7 11.3245 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3245C6.2292 22 3.33738 17.9878 4.63245 14.1026L5.63245 11.1026Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M9 18C11.2544 19.3147 12.5778 19.3445 15 18"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          /></svg
        >Buyurtmalar
      </button>
      <button
        @click="$router.push('/freelancers')"
        :class="{ active: $route.name === 'freelancers' }"
        class="flex flex-col gap-1 items-center text-grey-64 text-[12px] font-medium px-1 pt-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <ellipse
            cx="12"
            cy="16.5"
            rx="6"
            ry="2.5"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.44547 13.2615C5.20689 13.313 4.06913 13.5361 3.18592 13.8894C2.68122 14.0913 2.22245 14.3505 1.87759 14.6766C1.53115 15.0042 1.25 15.4512 1.25 16C1.25 16.5488 1.53115 16.9958 1.87759 17.3234C2.22245 17.6495 2.68122 17.9087 3.18592 18.1106C3.68571 18.3105 4.26701 18.4687 4.90197 18.5778C4.40834 18.0453 4.09852 17.4503 4.01985 16.8195C3.92341 16.787 3.83104 16.7531 3.74301 16.7179C3.34289 16.5578 3.06943 16.386 2.90826 16.2336C2.7498 16.0837 2.74999 16.0046 2.75 16.0001L2.75 16L2.75 15.9999C2.74999 15.9954 2.7498 15.9163 2.90826 15.7664C3.06943 15.614 3.34289 15.4422 3.74301 15.2821C3.94597 15.201 4.17201 15.1266 4.41787 15.0608C4.83157 14.371 5.53447 13.756 6.44547 13.2615Z"
            fill="#5D5D5F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9802 16.8195C19.9015 17.4503 19.5917 18.0453 19.0981 18.5778C19.733 18.4687 20.3143 18.3105 20.8141 18.1106C21.3188 17.9087 21.7776 17.6495 22.1224 17.3234C22.4689 16.9958 22.75 16.5488 22.75 16C22.75 15.4512 22.4689 15.0042 22.1224 14.6766C21.7776 14.3505 21.3188 14.0913 20.8141 13.8894C19.9309 13.5361 18.7931 13.313 17.5546 13.2615C18.4656 13.756 19.1685 14.371 19.5822 15.0608C19.828 15.1266 20.0541 15.201 20.257 15.2821C20.6571 15.4422 20.9306 15.614 21.0918 15.7664C21.2502 15.9163 21.25 15.9954 21.25 15.9999V16V16.0001C21.25 16.0046 21.2502 16.0837 21.0918 16.2336C20.9306 16.386 20.6571 16.5578 20.257 16.7179C20.169 16.7531 20.0766 16.787 19.9802 16.8195Z"
            fill="#5D5D5F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5144 10.1522C16.2945 10.6126 16.0063 11.0341 15.6628 11.4036C16.0586 11.6243 16.5146 11.75 17 11.75C18.5188 11.75 19.75 10.5188 19.75 9C19.75 7.48122 18.5188 6.25 17 6.25C16.8957 6.25 16.7928 6.2558 16.6915 6.26711C16.8636 6.73272 16.9683 7.23096 16.9939 7.75001C16.9959 7.75 16.9979 7.75 17 7.75C17.6904 7.75 18.25 8.30964 18.25 9C18.25 9.69036 17.6904 10.25 17 10.25C16.8278 10.25 16.6637 10.2152 16.5144 10.1522Z"
            fill="#5D5D5F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.30845 6.26711C7.20719 6.2558 7.10427 6.25 7 6.25C5.48122 6.25 4.25 7.48122 4.25 9C4.25 10.5188 5.48122 11.75 7 11.75C7.48537 11.75 7.94138 11.6243 8.33721 11.4036C7.99374 11.0341 7.70549 10.6126 7.4856 10.1522C7.33631 10.2152 7.17222 10.25 7 10.25C6.30964 10.25 5.75 9.69036 5.75 9C5.75 8.30964 6.30964 7.75 7 7.75C7.00205 7.75 7.00409 7.75 7.00614 7.75001C7.0317 7.23096 7.13641 6.73272 7.30845 6.26711Z"
            fill="#5D5D5F"
          /></svg
        >Frilanserlar
      </button>
      <button
        @click="$router.push('/registration')"
        :class="{ active: $route.name.includes('profile') }"
        class="flex flex-col gap-1 items-center text-grey-64 text-[12px] font-medium px-1 pt-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-linejoin="round"
          /></svg
        >Kabinet
      </button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var header = this.$refs.priceBox;
    window.addEventListener("scroll", () => {
      let documentHeight = document.body.scrollHeight;
      let currentScroll = window.scrollY + window.innerHeight;
      let modifier = 200;
      if (window.innerWidth <= 576) {
        if (currentScroll + modifier > documentHeight) {
          header.style.display = `none`;
        } else {
          header.style.display = `block`;
        }
      }
    });
  },
};
</script>
<style lang="css" scoped>
.bottom-bar {
  box-shadow: 0px 4px 8px 0px rgba(0, 25, 53, 0.16);
}
.bottom-bar .active {
  color: var(--main-color);
}
.bottom-bar .active svg path {
  stroke: var(--main-color);
}
</style>
