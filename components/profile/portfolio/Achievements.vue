<template lang="html">
  <div class="achievements">
    <div class="border border-solid border-grey-8 rounded-2xl">
      <div class="head px-6 py-4 border-[0] border-b border-solid border-grey-8">
        <h6 class="text-[18px] font-medium text-black">Достижения</h6>
      </div>
      <div
        class="body pt-6 px-6 flex flex-col gap-6 max-h-[340px] overflow-y-scroll mr-2"
      >
        <div
          class="pb-6 border-[0] border-b border-solid border-grey-8 flex flex-col gap-2"
          v-for="item in data"
          :key="item"
        >
          <div class="flex gap-2 items-center">
            <img src="@/assets/images/Achir.png" alt="" />
            <h6 class="text-grey-80 text-base font-semibold">Лучший дизайнер</h6>
          </div>
          <p class="text-base text-grey-64">
            Эффективный и яркий дизайн сайтов. 967+ успешных проектов. 16 лет опыта.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
</style>
