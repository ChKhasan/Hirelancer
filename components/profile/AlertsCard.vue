<template lang="html">
  <div class="alerts-card rounded-[8px] bg-bg-grey px-6 pb-[25px] pt-[36px] relative h-[195px]">
    <button class="top-2 right-2 absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M13.5355 6.46489L6.46448 13.536M13.5355 13.5359L6.46448 6.46484"
          stroke="#5D5D5F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-2">
        <h3 class="text-base font-medium text-black">Сообщение от Akmal Ikromov</h3>
        <p class="text-[14px] text-gray-64">
          У заказчиков должна быть возможность оценить ваши навыки
        </p>
      </div>
      <nuxt-link
        to=""
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
        >Прочитать
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11.6667 13.333L15 9.99967M15 9.99967L11.6667 6.66634M15 9.99967L5 9.99967"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
