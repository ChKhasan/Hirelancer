<template lang="html">
  <div
    class="card freelancer-card px-6 py-6 border border-solid border-grey-8 rounded-2xl cursor-pointer xl:rounded-[16px] xl:p-[16px]"
    @click="$router.push('/freelancer')"
  >
    <div class="image w-[80px] h-[80px] relative xl:w-[66px] xl:h-[66px]">
      <!-- <img v-if="freelancer?.avatar" class="w-full h-full object-cover" :src="freelancer?.avatar" alt="" /> -->
      <div class="rounded-full overflow-hidden h-full w-full">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/Avatar 5.png"
          alt=""
        />
      </div>
      <span class="absolute right-0 bottom-0" v-if="freelancer?.approved"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.51069 1.66159C10.3055 0.774783 11.6945 0.774783 12.4893 1.66159L13.8953 3.23019C14.248 3.62366 14.742 3.86157 15.2695 3.89198L17.3725 4.0132C18.5614 4.08174 19.4274 5.16763 19.2296 6.34198L18.8799 8.41923C18.7921 8.94028 18.9141 9.47487 19.2193 9.90625L20.4357 11.626C21.1234 12.5983 20.8143 13.9524 19.7729 14.53L17.9307 15.5516C17.4687 15.8079 17.1268 16.2366 16.9798 16.7441L16.3936 18.7674C16.0622 19.9113 14.8109 20.5139 13.71 20.0598L11.7626 19.2566C11.2742 19.0551 10.7258 19.0551 10.2374 19.2566L8.29004 20.0598C7.18913 20.5139 5.93776 19.9113 5.60639 18.7674L5.02025 16.7441C4.87322 16.2366 4.53133 15.8079 4.06926 15.5516L2.22712 14.53C1.18568 13.9524 0.87662 12.5983 1.56432 11.626L2.78074 9.90625C3.08586 9.47487 3.20788 8.94028 3.12014 8.41923L2.77036 6.34198C2.57262 5.16763 3.43859 4.08174 4.6275 4.0132L6.7305 3.89198C7.25801 3.86157 7.75205 3.62366 8.10472 3.23019L9.51069 1.66159Z"
            fill="#5C46E5"
          />
          <path
            d="M9 11.6527L10.0962 12.8303C10.4044 13.087 10.8833 13.0477 11.1379 12.7448L14 10"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></span>
    </div>
    <div class="body flex flex-col justify-between xl:w-[70%] xl:gap-[8px] gap-3">
      <div>
        <h4
          class="text-[14px] font-medium text-black truncate name whitespace-normal"
        >
          {{ freelancer?.name }}
        </h4>
        <div class="flex items-center gap-3 mt-2">
          <p class="text-xs font-medium text-yellow flex gap-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M5.85246 1.90841C6.32186 0.91953 7.67811 0.919528 8.14751 1.9084L8.95876 3.61743C9.14516 4.01012 9.50547 4.28229 9.92227 4.34526L11.7363 4.61932C12.7859 4.77789 13.205 6.11898 12.4455 6.88871L11.1329 8.21901C10.8313 8.52467 10.6936 8.96506 10.7648 9.39666L11.0747 11.2751C11.254 12.3619 10.1568 13.1908 9.21796 12.6776L7.59547 11.7908C7.22267 11.587 6.7773 11.587 6.40451 11.7908L4.78202 12.6776C3.84322 13.1908 2.74599 12.3619 2.92528 11.2751L3.23515 9.39666C3.30635 8.96506 3.16872 8.52467 2.86712 8.21901L1.5545 6.88871C0.794995 6.11898 1.2141 4.77789 2.26371 4.61932L4.07771 4.34526C4.49451 4.28229 4.85482 4.01012 5.04122 3.61744L5.85246 1.90841Z"
                fill="#F2C94C"
              /></svg
            >{{ freelancer?.rating }} ({{ freelancer?.rating_count }})
          </p>
          <p class="text-[14px] flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3.49999 4.66667H2.33332C1.68899 4.66667 1.16666 5.189 1.16666 5.83333V11.0833C1.16666 11.7277 1.68899 12.25 2.33332 12.25H3.49999C4.14432 12.25 4.66666 11.7277 4.66666 11.0833V5.83333C4.66666 5.189 4.14432 4.66667 3.49999 4.66667Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.26151 12.25H7.12313C6.66247 12.25 6.21212 12.1136 5.82883 11.8581L4.92641 11.2565C4.76413 11.1483 4.66666 10.9662 4.66666 10.7711V5.98825C4.66666 5.88673 4.69315 5.78697 4.74351 5.69883L6.99999 1.75H7.77507C8.93983 1.75 9.63457 3.04813 8.98848 4.01727L8.16666 5.25H11.3391C12.0981 5.25 12.655 5.96329 12.4709 6.69962L11.5252 10.4826C11.2655 11.5213 10.3322 12.25 9.26151 12.25Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            ><span class="text-green">26</span
            ><span class="text-grey-40">/</span
            ><span class="text-pantone-2023">2</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1451_10014)">
                <path
                  d="M10.5 8.75L11.6667 8.75C12.311 8.75 12.8333 8.22766 12.8333 7.58333L12.8333 3.5C12.8333 2.85567 12.311 2.33333 11.6667 2.33333L10.5 2.33333C9.85566 2.33333 9.33332 2.85567 9.33332 3.5L9.33332 7.58333C9.33332 8.22766 9.85566 8.75 10.5 8.75Z"
                  stroke="#BB2649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.73847 1.75L6.87685 1.75C7.3375 1.75 7.78785 1.88635 8.17115 2.14188L9.07356 2.74349C9.23585 2.85168 9.33332 3.03382 9.33332 3.22886L9.33332 8.01175C9.33332 8.11327 9.30683 8.21303 9.25646 8.30117L6.99999 12.25L6.22491 12.25C5.06015 12.25 4.36541 10.9519 5.0115 9.98273L5.83332 8.75L2.66089 8.75C1.90189 8.75 1.34498 8.03671 1.52906 7.30038L2.4748 3.51742C2.73448 2.47869 3.66777 1.75 4.73847 1.75Z"
                  stroke="#BB2649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1451_10014">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(14 14) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
      </div>
      <div class="flex justify-between">
        <div
          class="bg-apple-grey text-xs font-medium text-grey-64 px-4 flex items-center rounded-[22px] h-[28px]"
        >
          Adobe Photoshop
        </div>
        <p
          :class="{ online: freelancer?.online }"
          class="text-[14px] text-grey-24 flex gap-[4px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#C2C2C3" /></svg
          >{{ freelancer?.online ? "Online" : "Offline" }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["freelancer"],
};
</script>
<style lang="css" scoped>
.card {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 17px;
}
.online {
  color: var(--green);
}
.online svg circle {
  fill: var(--green);
}
.name {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
@media screen and (max-width: 1024px) {
  .card {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
