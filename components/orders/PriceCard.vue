<template lang="html">
  <div class="card price-card px-[24px] py-[24px] rounded-2xl bg-bg-grey flex flex-col gap-6">
    <div class="flex flex-col gap-[10px]">
      <div class="flex flex-col">
        <p class="text-grey-64 text-[14px]">Buyrtma narxi:</p>

        <h1 class="text-blue text-[24px] font-semibold">99 200 000 so’m</h1>
      </div>
      <div class="flex flex-col">
        <p class="text-grey-64 text-[14px]">Срок:</p>
        <h4 class="text-black text-base font-semibold">По договоренности</h4>
      </div>
    </div>
    <div class="buttons flex flex-col gap-4">
      <button
        @click="$emit('open')"
        class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-blue border-blue text-base text-white font-medium"
      >
        Отправить заявку
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.35303 16V18.381C5.35303 19.124 6.13503 19.608 6.80003 19.275L21.353 12L6.80003 4.72501C6.13503 4.39201 5.35303 4.87601 5.35303 5.61901V12H12.02"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-white border-blue text-base text-blue font-medium"
      >
        Написать<svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M8.5 10H16.5M8.5 14H12.5M11.5 3H13.5C18.4706 3 22.5 7.02944 22.5 12C22.5 16.9706 18.4706 21 13.5 21H6.5C4.29086 21 2.5 19.2091 2.5 17V12C2.5 7.02944 6.52944 3 11.5 3Z"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped></style>
