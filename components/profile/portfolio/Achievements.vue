<template lang="html">
  <div class="achievements">
    <div
      class="border border-solid border-grey-8 rounded-2xl xl:border-b xl:pb-6 xl:border xl:border-solid xl:border-border-darik xl:px-4 xl:py-4"
      :class="{ 'profile-info': profile }"
    >
      <div
        class="head px-6 py-4 border-[0] border-b border-solid border-grey-8 xl:px-0 xl:pt-0 xl:border-0"
      >
        <h6
          class="text-[18px] font-medium text-black xl:flex xl:justify-between xl:w-full items-center"
        >
          Достижения
          <span class="hidden xl:block">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.5L12 14.5L17 10.5"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </h6>
      </div>
      <div
        class="body pt-6 px-6 flex flex-col gap-6 max-h-[340px] overflow-y-scroll mr-2 xl:px-0 xl:pt-0 xl:gap-4 xl:mr-[-14px]"
      >
        <div
          class="pb-6 border-[0] border-b border-solid border-grey-8 flex flex-col gap-2 xl:pb-0 xl:border-0"
          v-for="item in data"
          :key="item"
        >
          <div class="flex gap-2 items-center">
            <img
              class="xl:w-5 xl:h-5"
              loading="lazy"
              src="../../../assets/images/achir.png"
              alt=""
            />
            <h6
              class="text-grey-80 text-base font-semibold xl:text-[14px] xl:font-medium"
            >
              Лучший дизайнер
            </h6>
          </div>
          <p class="text-base text-grey-64 xl:text-[14px] leanding-[19px]">
            Эффективный и яркий дизайн сайтов. 967+ успешных проектов. 16 лет опыта.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Achievements",
  props: ["profile"],

  data() {
    return {
      data: [1, 2, 3, 4],
    };
  },
};
</script>
<style lang="css" scoped>
.body::-webkit-scrollbar {
  width: 4px;
}
.body::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: var(--grey-8);
}
@media (max-width: 1200px) {
  .profile-info {
    border-radius: 0;
    border: 0;
    border-top: 1px solid var(--border-darik);
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
