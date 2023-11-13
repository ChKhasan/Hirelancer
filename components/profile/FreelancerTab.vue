<template lang="html">
  <div class="freelancer-tab flex justify-start ">
    <div class="rounded-2xl bg-bg-grey px-4 py-4 flex gap-6">
      <nuxt-link
        to="/freelancer"
        :class="{ active: $route.name == 'freelancer' }"
        class="text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M5.33301 20.3412V15.8342C5.33301 14.7292 6.22801 13.8342 7.33301 13.8342H16.666C17.771 13.8342 18.666 14.7292 18.666 15.8342V20.3412M14.9634 7.62316C14.9634 9.25958 13.6368 10.5862 12.0004 10.5862C10.364 10.5862 9.03738 9.25958 9.03738 7.62316C9.03738 5.98674 10.364 4.66016 12.0004 4.66016C13.6368 4.66016 14.9634 5.98674 14.9634 7.62316Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Профиль</nuxt-link
      >

      <nuxt-link
        to="/freelancer/portfolio"
        :class="{ active: $route.name == 'freelancer-portfolio' }"
        class="text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M3 16.6368V17.6797C3 19.3365 4.34315 20.6797 6 20.6797H18C19.6569 20.6797 21 19.3365 21 17.6797V16.6368M12 14.0703V14.0736M6 8.67969H18C19.6569 8.67969 21 10.0228 21 11.6797V13.028L13.2847 16.6843C12.4716 17.0696 11.5284 17.0696 10.7153 16.6843L3 13.028V11.6797C3 10.0228 4.34315 8.67969 6 8.67969ZM16.5036 8.67958V7.32031C16.5036 5.66346 15.1604 4.32031 13.5036 4.32031H10.4961C8.83924 4.32031 7.49609 5.66346 7.49609 7.32031V8.67958H16.5036Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Портфолио</nuxt-link
      >
      <nuxt-link
        to="/"
        class="opacity-50 pointer-events-none text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M4 20.9805V4.01953M6.66016 5.70741L7.6792 6.12805C9.47537 6.86947 11.5109 6.75623 13.2137 5.82015C14.5913 5.06291 16.199 4.83815 17.7314 5.18859L20 5.70741V14.5139L17.7314 13.995C16.199 13.6446 14.5913 13.8694 13.2137 14.6266C11.5109 15.5627 9.47537 15.6759 7.6792 14.9345L6.66016 14.5139"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Бизнесы</nuxt-link
      >
      <nuxt-link
        to="/"
        class="opacity-50 pointer-events-none text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M17 7.41697V19.832H1V1.16797H10.751M17 7.41697L10.751 1.16797M17 7.41697H10.751V1.16797"
              stroke="#5D5D5F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        Бизнесы</nuxt-link
      >
      <nuxt-link
        to="/"
        class="opacity-50 pointer-events-none text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7.26034 16.6016V4.42188H19.7937V17.581C19.7937 19.2378 18.4505 20.581 16.7937 20.581H6.97387C5.31702 20.581 3.97388 19.2378 3.97388 17.581V9.56386M10.457 7.83594H16.6395M10.457 11.1172H16.6395M10.457 14.3984H16.6395"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Блоги</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.freelancer-tab .active {
  background-color: var(--blue);
  color: white;
  box-shadow: 0px 4px 15px 0px rgba(92, 70, 229, 0.29);
}
.freelancer-tab .active svg path {
  stroke: white;
}
</style>
