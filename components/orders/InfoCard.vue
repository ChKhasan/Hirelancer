<template lang="html">
  <div class="info-card px-6 py-6 rounded-[16px] bg-bg-grey flex justify-between items-center">
    <div class="flex flex-col gap-[8px] max-w-[75%]">
      <h5 class="text-[20px] text-black font-medium">{{ title }}</h5>
      <p class="text-base text-grey-80">
        {{ subtitle }}
      </p>
    </div>
    <button
      class="flex gap-[8px] border border-solid border-blue px-6 py-3 rounded-[8px] text-blue text-[14px] font-medium"
    >
      {{ btn }} <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  props: ["title", "subtitle", "btn"],
};
</script>
<style lang=""></style>
