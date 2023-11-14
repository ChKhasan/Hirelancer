<template lang="html">
  <div class="profile-layout max-w-[1680px] mx-auto pt-12 xl:pt-6 xl:pb-6 pb-[100px]">
    <div class="profile-grid">
      <PersonalBlock :profile="profile" class="xl:hidden" />
      <PersonalBlockMobile
        class="hidden xl:flex"
        :class="{ 'xl:hidden': $route.name !== `profile-user` }"
      />
      <div class="min-w-0 x" :class="{ 'xl:hidden': $route.name == `profile-user` }">
        <ProfileTab v-if="profile" />
        <FreelancerTab v-else />
        <slot></slot>
      </div>
    </div>
    <Loader v-if="loading" />
  </div>
</template>
<script>
import PersonalBlock from "../../components/profile/PersonalBlock.vue";
import PersonalBlockMobile from "../../components/profile/PersonalBlockMobile.vue";
import ProfileTab from "../../components/profile/ProfileTab.vue";
import FreelancerTab from "./FreelancerTab.vue";
import Loader from "../Loader.vue";

export default {
  name: "ProfileLayout",
  props: ["profile"],
  data() {
    return {
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
    FreelancerTab,
    PersonalBlockMobile,
    Loader,
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
