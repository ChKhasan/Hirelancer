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
    <div class="profile-layout max-w-[1680px] mx-auto pt-12 xl:pt-6 xl:pb-6 pb-[100px]">
      <div class="profile-grid">
        <PersonalBlock
          :profile="$route.name.includes('profile')"
          class="xl:hidden"
          :userInfo="$store.state.userInfo"
        />

        <PersonalBlockMobile
          class="hidden xl:flex"
          :class="{ 'xl:hidden': $route.name !== `profile-user` }"
          :user="false"
        />
        <div class="min-w-0 x" :class="{ 'xl:hidden': $route.name == `profile-user` }">
          <ProfileTab v-if="$route.name.includes('profile')" />
          <Nuxt />
        </div>
      </div>
      <Loader v-if="loading" />
    </div>
    <TheFooter />
    <BottomBar v-if="routes.includes($route.name)" />
  </div>
</template>
<script>
import PersonalBlock from "@/components/profile/PersonalBlock.vue";
import PersonalBlockMobile from "@/components/profile/PersonalBlockMobile.vue";
import ProfileTab from "@/components/profile/ProfileTab.vue";
import Loader from "@/components/Loader.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BottomBar from "../components/BottomBar.vue";

export default {
  name: "ProfileLayout",
  middleware: "auth",
  data() {
    return {
      routes: ["freelancers", "profile-index", "index", "orders"],
      loading: false,
    };
  },
  computed: {
    authHandle() {
      return this.$store.state.auth;
    },
  },
  async mounted() {
    if (localStorage.getItem("auth-token")) {
      try {
        this.loading = true;
        const [userInfoData] = await Promise.all([
          this.$store.dispatch("fetchAuth/getUserInfo"),
        ]);
        this.userInfo = userInfoData;
        this.$store.commit("getUserInfo", userInfoData);
        this.loading = false;
      } catch (e) {
        if (e.response.status == 401) {
          this.$store.dispatch("logout");
        }
      } finally {
        this.loading = false;
      }
    } else {
      this.$router.push("/");
    }
  },
  watch: {
    authHandle() {
      if (!localStorage.getItem("auth-token")) {
        this.$router.push("/");
      }
    },
  },
  components: {
    PersonalBlock,
    ProfileTab,
    PersonalBlockMobile,
    Loader,
    MobileHeader,
    TheHeader,
    TheFooter,
    BottomBar,
  },
};
</script>
<style lang="css" scoped>
.profile-grid {
  display: grid;
  grid-template-columns: 408px 1fr;
  grid-gap: 37px;
}
@media (max-width: 1200px) {
  .profile-grid {
    grid-template-columns: 1fr;
    grid-gap: 37px;
  }
}
</style>
