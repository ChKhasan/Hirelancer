<template lang="html">
  <div class="layout W-100">
    <div class="fixed top-0 left-0 w-full z-50" ref="mHeader">
      <MobileHeader class="xl:block" />
    </div>
    <TheHeader class="xl:hidden" />
    <div
      v-if="$route.name == 'index'"
      class="header-bg xl:block hidden w-full h-[104px]"
    ></div>
    <div v-else class="header-bg xl:block hidden w-full h-[56px]"></div>
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
  height: 100vh;
  overflow: hidden;
}
</style>
