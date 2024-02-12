<template lang="html">
  <div
    class="info-card px-6 py-6 xl:px-4 xl:py-4 rounded-[16px] bg-bg-grey flex justify-between items-center xl:flex-col xl:items-start xl:gap-6"
  >
    <div class="flex flex-col gap-2 max-w-[75%] xl:max-w-full">
      <h5 class="text-[20px] xl:text-[18px] text-black font-medium xl:font-semibold">
        {{ title }}
      </h5>
      <span
        class="text-base text-grey-80 xl:text-[14px] xl:leading-[19.5px]"
        v-html="subtitle"
      >
      </span>
    </div>
    <button
      @click="$emit('submit')"
      class="xl:w-full xl:flex xl:justify-center flex gap-2 border border-solid border-blue px-6 py-3 rounded-[8px] text-blue text-[14px] font-medium"
      :class="{
        'pointer-events-none opacity-50':
          order?.requests.find(
            (item) => item.freelancer_id == $store.state.userInfo?.id
          ) || order?.client?.id == $store.state.userInfo?.id,
      }"
    >
      {{ btn }}
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  props: ["title", "subtitle", "btn", "order"],
};
</script>
<style lang=""></style>
