<template lang="html">
  <div class="profile-tab flex justify-start">
    <div class="rounded-2xl bg-bg-grey px-4 py-4 flex gap-6 xl:hidden">
      <nuxt-link
        :to="`/profile/${$route.params.user}`"
        :class="{ active: $route.name == 'profile-user' }"
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
        Профиль
      </nuxt-link>
      <nuxt-link
        :to="`/profile/${$route.params.user}/orders/active/status`"
        :class="{ active: $route.name.includes('orders') }"
        class="text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.667 20.4139L12 16.5839L5.33301 20.4139V7.58594C5.33301 5.92894 6.67601 4.58594 8.33301 4.58594H15.666C17.323 4.58594 18.666 5.92894 18.666 7.58594V20.4139H18.667Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Проект</nuxt-link
      >

      <nuxt-link
        v-if="$route.params.user == 'freelancer'"
        :to="`/profile/${$route.params.user}/portfolio`"
        :class="{ active: $route.name.includes('portfolio') }"
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
        v-if="$route.params.user == 'freelancer'"
        to="/"
        class="opacity-50 pointer-events-none text-black  text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
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
        v-if="$route.params.user == 'freelancer'"
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
        v-if="$route.params.user == 'freelancer'"
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
      <nuxt-link
      v-if="$route.params.user == 'customer'"
        :to="`/profile/${$route.params.user}/performers`"
        :class="{ active: $route.name.includes('performers') }"
        class="text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.8284 12.5C18.8284 11.987 18.7674 11.49 18.6604 11.01L19.7884 9.91997C20.3514 9.37497 20.4724 8.51697 20.0804 7.83897C19.6884 7.15997 18.8854 6.83597 18.1314 7.05097L16.6204 7.48197C15.8874 6.80697 15.0114 6.28497 14.0374 5.98097L13.6574 4.46097C13.4674 3.70097 12.7844 3.16797 12.0004 3.16797C11.2164 3.16797 10.5334 3.70097 10.3434 4.46197L9.9634 5.98097C8.9914 6.28397 8.1184 6.80397 7.3864 7.47697L5.8644 7.04197C5.1114 6.82597 4.3084 7.15097 3.9164 7.82997C3.5244 8.50897 3.6444 9.36697 4.2084 9.91097L5.3414 11.006C5.2334 11.488 5.1724 11.986 5.1724 12.5C5.1724 13.01 5.2324 13.505 5.3384 13.983L4.2034 15.081C3.6404 15.626 3.5194 16.484 3.9114 17.162C4.3034 17.841 5.1064 18.165 5.8604 17.95L7.3784 17.516C8.1094 18.19 8.9824 18.711 9.9534 19.016L10.3344 20.539C10.5244 21.299 11.2074 21.832 11.9914 21.832C12.7754 21.832 13.4584 21.299 13.6484 20.538L14.0274 19.022C15.0024 18.719 15.8794 18.198 16.6134 17.525L18.1274 17.958C18.8804 18.173 19.6844 17.849 20.0754 17.17C20.4674 16.491 20.3464 15.633 19.7834 15.089L18.6584 14.001C18.7664 13.517 18.8284 13.016 18.8284 12.5ZM12.0004 15.166C10.5284 15.166 9.3344 13.972 9.3344 12.5C9.3344 11.028 10.5284 9.83397 12.0004 9.83397C13.4724 9.83397 14.6664 11.028 14.6664 12.5C14.6664 13.972 13.4724 15.166 12.0004 15.166Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Исполнители</nuxt-link
      >
      <nuxt-link
        :to="`/profile/${$route.params.user}/settings`"
        :class="{ active: $route.name.includes('settings') }"
        class="text-black text-base font-medium flex flex-col gap-2 items-center bg-white px-4 justify-center min-w-[120px] min-h-[79px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.8284 12.5C18.8284 11.987 18.7674 11.49 18.6604 11.01L19.7884 9.91997C20.3514 9.37497 20.4724 8.51697 20.0804 7.83897C19.6884 7.15997 18.8854 6.83597 18.1314 7.05097L16.6204 7.48197C15.8874 6.80697 15.0114 6.28497 14.0374 5.98097L13.6574 4.46097C13.4674 3.70097 12.7844 3.16797 12.0004 3.16797C11.2164 3.16797 10.5334 3.70097 10.3434 4.46197L9.9634 5.98097C8.9914 6.28397 8.1184 6.80397 7.3864 7.47697L5.8644 7.04197C5.1114 6.82597 4.3084 7.15097 3.9164 7.82997C3.5244 8.50897 3.6444 9.36697 4.2084 9.91097L5.3414 11.006C5.2334 11.488 5.1724 11.986 5.1724 12.5C5.1724 13.01 5.2324 13.505 5.3384 13.983L4.2034 15.081C3.6404 15.626 3.5194 16.484 3.9114 17.162C4.3034 17.841 5.1064 18.165 5.8604 17.95L7.3784 17.516C8.1094 18.19 8.9824 18.711 9.9534 19.016L10.3344 20.539C10.5244 21.299 11.2074 21.832 11.9914 21.832C12.7754 21.832 13.4584 21.299 13.6484 20.538L14.0274 19.022C15.0024 18.719 15.8794 18.198 16.6134 17.525L18.1274 17.958C18.8804 18.173 19.6844 17.849 20.0754 17.17C20.4674 16.491 20.3464 15.633 19.7834 15.089L18.6584 14.001C18.7664 13.517 18.8284 13.016 18.8284 12.5ZM12.0004 15.166C10.5284 15.166 9.3344 13.972 9.3344 12.5C9.3344 11.028 10.5284 9.83397 12.0004 9.83397C13.4724 9.83397 14.6664 11.028 14.6664 12.5C14.6664 13.972 13.4724 15.166 12.0004 15.166Z"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Настройки</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.profile-tab .active {
  background-color: var(--blue);
  color: white;
  box-shadow: 0px 4px 15px 0px rgba(92, 70, 229, 0.29);
}
.profile-tab .active svg path {
  stroke: white;
}
</style>
