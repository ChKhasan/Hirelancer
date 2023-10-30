<template lang="html">
  <div class="layout W-100">
    <MobileHeader class="xl:block" />
    <TheHeader class="xl:hidden" />
    <div class="header-bg xl:block hidden h-[56px] w-full"></div>
    <Nuxt />
    <TheFooter />
    <BottomBar />
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
  async mounted() {
    try {
      const [userInfoData] = await Promise.all([
        this.$store.dispatch("fetchAuth/getUserInfo"),
      ]);
      this.$store.commit("getUserInfo", userInfoData);
    } catch (e) {}
  },
  components: { TheHeader, TheFooter, BottomBar, MobileHeader },
};
</script>
<style lang="css"></style>
