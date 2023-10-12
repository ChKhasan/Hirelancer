<template lang="html">
  <div class="portfolio-card rounded-lg overflow-hidden">
    <div class="image h-[270px] relative">
      <img
        class="h-full w-full object-cover"
        src="@/assets/images/Portfolio.png"
        alt=""
      />
      <div class="absolute right-[14px] top-[14px] flex gap-[12px]">
        <div
          class="text-blue text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.8477 7.38982C16.7174 8.30488 16.7174 9.69512 15.8477 10.6102C14.3809 12.1535 11.8616 14.25 9 14.25C6.13836 14.25 3.61912 12.1535 2.15228 10.6102C1.28257 9.69512 1.28257 8.30488 2.15228 7.38982C3.61912 5.8465 6.13836 3.75 9 3.75C11.8616 3.75 14.3809 5.8465 15.8477 7.38982Z"
              stroke="#5C46E6"
            />
            <path
              d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
              stroke="#5C46E6"
            />
          </svg>
          300
        </div>
        <div
          class="text-green text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M4.5 6H3C2.17157 6 1.5 6.67157 1.5 7.5V14.25C1.5 15.0784 2.17157 15.75 3 15.75H4.5C5.32843 15.75 6 15.0784 6 14.25V7.5C6 6.67157 5.32843 6 4.5 6Z"
              stroke="#009A10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9077 15.75H9.15833C8.56605 15.75 7.98703 15.5747 7.49423 15.2462L6.33398 14.4727C6.12533 14.3336 6 14.0994 6 13.8486V7.69917C6 7.56865 6.03406 7.44039 6.09882 7.32707L9 2.25H9.99653C11.4941 2.25 12.3873 3.91902 11.5566 5.16506L10.5 6.75H14.5788C15.5547 6.75 16.2707 7.66708 16.034 8.6138L14.8181 13.4776C14.4842 14.8131 13.2843 15.75 11.9077 15.75Z"
              stroke="#009A10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          15
        </div>
      </div>
    </div>
    <div
      class="body px-4 pt-3 pb-4 flex rounded-b-lg flex-col gap-[6px] border-[0] border-t-0 border-b border-x border-solid border-grey-8"
    >
      <h4 class="text-black text-[18px] font-semibold">Сайт для компании PromAvto</h4>
      <div class="flex justify-between">
        <p class="text-[15px] text-grey-40">Веб-дизайн</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.count {
  box-shadow: 0px 4px 16px 0px rgba(11, 11, 21, 0.16);
}
</style>
