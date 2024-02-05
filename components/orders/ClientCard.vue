<template lang="html">
  <div
    class="card client-card px-[22px] py-[22px] xl:px-4 xl:py-4 border border-solid border-grey-8 rounded-2xl"
  >
    <div
      class="image w-[60px] h-[60px] xl:w-[52px] xl:h-[52px] rounded-full border-[2px] border-solid border-agro-green relative"
    >
      <img
        loading="lazy"
        class="w-full h-full"
        src="../../assets/images/Avatar 5.png"
        alt=""
      />
      <span class="absolute bottom-0 right-[-7px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.88302 1.99531C10.4792 1.33021 11.5208 1.33021 12.117 1.99531L13.523 3.56392C13.9638 4.05575 14.5813 4.35314 15.2407 4.39115L17.3437 4.51237C18.2354 4.56377 18.8849 5.37819 18.7366 6.25896L18.3868 8.3362C18.2771 8.98752 18.4297 9.65576 18.8111 10.195L20.0275 11.9148C20.5432 12.6439 20.3115 13.6595 19.5304 14.0927L17.6882 15.1144C17.1106 15.4347 16.6833 15.9706 16.4995 16.605L15.9134 18.6283C15.6648 19.4862 14.7263 19.9382 13.9006 19.5976L11.9533 18.7943C11.3427 18.5425 10.6573 18.5425 10.0467 18.7943L8.09938 19.5976C7.27369 19.9382 6.33517 19.4862 6.08664 18.6283L5.5005 16.605C5.31672 15.9706 4.88936 15.4347 4.31177 15.1144L2.46963 14.0927C1.68855 13.6595 1.45675 12.644 1.97252 11.9148L3.18894 10.195C3.57035 9.65576 3.72287 8.98751 3.6132 8.3362L3.26342 6.25896C3.11511 5.37819 3.76459 4.56377 4.65628 4.51237L6.75927 4.39115C7.41866 4.35314 8.03621 4.05575 8.47704 3.56392L9.88302 1.99531Z"
            fill="#5C46E5"
            stroke="white"
          />
          <path
            d="M9 11.6527L10.0962 12.8303C10.4044 13.087 10.8833 13.0477 11.1379 12.7448L14 10"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <div class="body flex flex-col justify-center">
      <div
        class="flex justify-between mb-[2px] xl:mb-[6px] xl:relative cursor-pointer"
        @click="$router.push(`/freelancer/${client?.id}`)"
      >
        <p class="text-[14px] xl:text-[12px] text-grey-64 leading-[15px]">Клиент:</p>
        <svg
          class="xl:absolute xl:right-0"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.19907 6.07751H13.9324V12.81M6.0874 13.9225L13.9224 6.08751"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h4 class="text-black text-base font-medium xl:text-[14px]">
        {{ client?.name }} {{ client?.surname }}
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  props: ["client"],
};
</script>
<style lang="css" scoped>
.card {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 12px;
}
@media (max-width: 1200px) {
  .card {
    grid-template-columns: 52px 1fr;
    grid-gap: 8px;
  }
}
</style>
