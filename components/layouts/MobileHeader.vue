<template lang="html">
  <div class="mobile-header px-4 hidden bg-white w-full py-2 z-50">
    <div class="flex justify-between items-center">
      <!-- <button
        v-for="item in titleList"
        v-if="$route.name?.includes('profile') && item.pathName === $route.name"
        @click="$router.go(-1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M16.6667 13.3334L10 20M10 20L16.6667 26.6667M10 20L30 20"
            stroke="#020105"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button> -->
      <!-- <h4
        v-for="item in titleList"
        v-if="item.pathName === $route.name"
        class="text-black text-[18px] font-medium"
      >
        {{ item.title }}
      </h4> -->
      <nuxt-link to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="19"
          viewBox="0 0 94 19"
          fill="none"
        >
          <path
            d="M16.2854 18.0236H5.27264C3.81812 18.0236 2.57138 17.4992 1.53244 16.4505C0.510814 15.384 0 14.1043 0 12.6112V0H4.90901V12.1579C4.90901 12.389 4.98693 12.5845 5.14277 12.7445C5.29861 12.9045 5.48042 12.9845 5.68821 12.9845H15.8699C16.095 12.9845 16.2854 12.9045 16.4413 12.7445C16.5971 12.5845 16.675 12.389 16.675 12.1579V0H21.5581V12.6112C21.5581 14.1043 21.0386 15.384 19.9997 16.4505C18.978 17.4992 17.74 18.0236 16.2854 18.0236Z"
            fill="#5C46E6"
          />
          <path
            d="M40.4327 18.0236H24.1473V0H40.4327C41.8873 0 43.1253 0.533243 44.147 1.59973C45.1859 2.64844 45.7054 3.91933 45.7054 5.41241V12.6112C45.7054 14.1043 45.1859 15.384 44.147 16.4505C43.1253 17.4992 41.8873 18.0236 40.4327 18.0236ZM29.0563 12.9845H40.0172C40.2423 12.9845 40.4327 12.9045 40.5886 12.7445C40.7444 12.5845 40.8223 12.3979 40.8223 12.1846V5.83901C40.8223 5.62571 40.7444 5.43907 40.5886 5.2791C40.4327 5.11913 40.2423 5.03914 40.0172 5.03914H29.0563V12.9845Z"
            fill="#5C46E6"
          />
          <path
            d="M64.5801 18.0769H53.5673C52.1127 18.0769 50.866 17.5526 49.8271 16.5039C48.8054 15.4374 48.2946 14.1665 48.2946 12.6912V5.41241C48.2946 3.91933 48.8054 2.64844 49.8271 1.59973C50.866 0.533243 52.1127 0 53.5673 0H64.5801C66.0346 0 67.2726 0.533243 68.2943 1.59973C69.3332 2.64844 69.8527 3.91933 69.8527 5.41241V12.6912C69.8527 14.1665 69.3332 15.4374 68.2943 16.5039C67.2726 17.5526 66.0346 18.0769 64.5801 18.0769Z"
            fill="#5C46E6"
          />
          <path
            d="M88.7274 18.0769H77.7146C76.26 18.0769 75.0133 17.5526 73.9744 16.5039C72.9527 15.4374 72.4419 14.1665 72.4419 12.6912V5.41241C72.4419 3.91933 72.9527 2.64844 73.9744 1.59973C75.0133 0.533243 76.26 0 77.7146 0H88.7274C90.1819 0 91.42 0.533243 92.4416 1.59973C93.4805 2.64844 94 5.41241 94 5.41241V12.6912C94 14.1665 93.4805 15.4374 92.4416 16.5039C91.42 17.5526 90.1819 18.0769 88.7274 18.0769Z"
            fill="#5C46E6"
          />
          <ellipse cx="53.3539" cy="5.27462" rx="2.70558" ry="2.7773" fill="white" />
          <ellipse cx="78.2453" cy="5.27462" rx="2.70558" ry="2.7773" fill="white" /></svg
      ></nuxt-link>
      <button class="h-10 w-10 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.416687 1.33337C0.416687 0.643018 0.976331 0.083374 1.66669 0.083374H18.3334C19.0237 0.083374 19.5834 0.643018 19.5834 1.33337C19.5834 2.02373 19.0237 2.58337 18.3334 2.58337H1.66669C0.976331 2.58337 0.416687 2.02373 0.416687 1.33337ZM0.416687 8.00004C0.416687 7.30968 0.976331 6.75004 1.66669 6.75004H18.3334C19.0237 6.75004 19.5834 7.30968 19.5834 8.00004C19.5834 8.6904 19.0237 9.25004 18.3334 9.25004H1.66669C0.976331 9.25004 0.416687 8.6904 0.416687 8.00004ZM1.66669 13.4167C0.976331 13.4167 0.416687 13.9764 0.416687 14.6667C0.416687 15.3571 0.976331 15.9167 1.66669 15.9167H18.3334C19.0237 15.9167 19.5834 15.3571 19.5834 14.6667C19.5834 13.9764 19.0237 13.4167 18.3334 13.4167H1.66669Z"
            fill="#5C46E6"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="'index' === $route.name"
      class="search h-12 flex items-center border border-solid border-border-darik rounded-lg px-4"
    >
      <div class="flex justify-between w-full">
        <input type="text" placeholder="Qidiruv" class="w-[80%]" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleList: [
        {
          title: "Buyurtmalar",
          pathName: "orders",
          shodow: true,
        },
        {
          title: "Freelanserlar",
          pathName: "freelancers",
          shodow: true,
        },
        {
          title: "Портфолио",
          pathName: "profile-user-portfolio",
          shodow: true,
        },
        {
          title: "Профиль",
          pathName: "profile-user-info",
          shodow: true,
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.mobile-header {
  box-shadow: 0px 4px 12px 0px rgba(92, 70, 229, 0.06);
}
</style>
