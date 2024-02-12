<template lang="html">
  <div>
    <div
      class="select-freelancer-card relative px-4 py-4 rounded-2xl bg-white flex flex-col gap-4"
    >
      <nuxt-link :to="`/freelancer/${freelancer?.id}`" class="absolute right-4 top-4"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 1.875L12.5 1.875C12.1548 1.875 11.875 2.15482 11.875 2.5C11.875 2.84518 12.1548 3.125 12.5 3.125L15.9911 3.125L7.89139 11.2247C7.64731 11.4688 7.64731 11.8645 7.89139 12.1086C8.13547 12.3527 8.5312 12.3527 8.77528 12.1086L16.875 4.00888L16.875 7.49999C16.875 7.84517 17.1548 8.12499 17.5 8.12499C17.8452 8.12499 18.125 7.84517 18.125 7.49999L18.125 2.5C18.125 2.15482 17.8452 1.875 17.5 1.875ZM5.83333 3.54167C3.64721 3.54167 1.875 5.31387 1.875 7.5V14.1667C1.875 16.3528 3.64721 18.125 5.83333 18.125H12.5C14.6861 18.125 16.4583 16.3528 16.4583 14.1667V10C16.4583 9.65482 16.1785 9.375 15.8333 9.375C15.4882 9.375 15.2083 9.65482 15.2083 10V14.1667C15.2083 15.6624 13.9958 16.875 12.5 16.875H5.83333C4.33756 16.875 3.125 15.6624 3.125 14.1667V7.5C3.125 6.00423 4.33756 4.79167 5.83333 4.79167H10C10.3452 4.79167 10.625 4.51184 10.625 4.16667C10.625 3.82149 10.3452 3.54167 10 3.54167H5.83333Z"
            fill="#5C46E6"
          />
        </svg>
      </nuxt-link>
      <div class="head flex justify-center">
        <div class="w-[60px] h-[60px] relative">
          <div
            class="image relative w-[60px] h-[60px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
          >
            <img
              class="w-full h-full object-cover"
              src="@/assets/images/user-avatar.jpg"
              alt=""
            />
          </div>
          <span class="absolute right-0 bottom-0">
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
                d="M9 10.9305L10.0962 12.306C10.4044 12.6059 10.8833 12.56 11.1379 12.2061L14 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="body flex flex-col gap-4">
        <h5
          class="text-base font-medium text-black flex gap-2 mx-auto items-center cursor-pointer"
          @click="$router.push(`/freelancer/${freelancer?.id}`)"
        >
          {{ freelancer?.name }}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.1976 6.07715H13.9309V12.8096M6.08594 13.9221L13.9209 6.08715"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h5>
        <a
          href=""
          class="border border-solid border-[#1878F3] rounded-lg flex gap-2 justify-center h-12 items-center text-base font-medium text-[#1878F3]"
          ><svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1559_17786)">
              <path
                d="M3.39279 10.7969L18.7815 4.14624C19.5051 3.83349 20.2892 4.44207 20.1658 5.22072L18.0618 18.4967C17.9318 19.3167 16.9169 19.6304 16.347 19.0266L12.8941 15.3691C12.2169 14.6518 12.1639 13.548 12.7691 12.7691L15.2071 9.63132C15.3464 9.45195 15.1264 9.21597 14.9377 9.34253L10.0904 12.5944C9.26782 13.1462 8.26975 13.3732 7.28942 13.2314L3.64636 12.7045C2.64838 12.5602 2.46717 11.1969 3.39279 10.7969Z"
                fill="#1878F3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1559_17786">
                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          @arcsobirov
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["freelancer"],
};
</script>
<style lang=""></style>
