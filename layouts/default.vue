<template lang="html">
  <div class="layout W-100">
    <div class="fixed top-0 left-0 w-full z-50" ref="mHeader">
      <MobileHeader class="xl:block" />
    </div>
    <TheHeader class="xl:hidden" ref="header" />
    <div
      v-if="$route.name == 'index'"
      class="header-bg xl:block hidden w-full h-[104px]"
    ></div>
    <div v-else class="header-bg xl:block hidden w-full" :style="`height: 56px`"></div>
    <!-- <h1>
      {{ layoutData }}
    </h1> -->
    <Nuxt />
    <TheFooter />
    <BottomBar v-if="routes.includes($route.name)" />
  </div>
</template>
<script>
import BottomBar from "../components/BottomBar.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheHeader from "../components/layouts/TheHeader.vue";

export default {
  head() {
    return {
      meta: [
        {
          name: "theme-color",
          content: "#5c46e5",
        },
      ],
    };
  },
  data() {
    return {
      routes: ["freelancers", "profile-index", "index", "orders"],
    };
  },
  computed: {
    layoutData() {
      return this.$store.state.pageData || {};
    },
    headerHeight() {
      return this.$refs.mHeader.offsetHeight;
    },
  },
  async mounted() {
    this.$router.afterEach(() => {
      window.scrollTo(0, 0);
    });
    if (localStorage.getItem("auth-token")) {
      try {
        const [userInfoData] = await Promise.all([
          this.$store.dispatch("fetchAuth/getUserInfo"),
        ]);
        this.$store.commit("getUserInfo", userInfoData);
      } catch (e) {}
    }
  },

  components: { TheHeader, TheFooter, BottomBar, MobileHeader },
};
</script>
<style lang="css">
.layout {
  overflow: hidden;
  width: 100%;
}
</style>
