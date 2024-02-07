<template lang="html">
  <div class="profile-layout max-w-[1680px] mx-auto pt-12 xl:pt-6 xl:pb-6 pb-[100px]">
    <div class="profile-grid">
      <PersonalBlock :profile="profile" class="xl:hidden" :userInfo="freelancer"  />

      <div class="min-w-0">
        <PersonalBlockMobile
          :freelancer="freelancer"
          :user="true"
          class="hidden xl:flex"
          v-if="!$route.name.includes('profile')"
        />
        <ProfileTab v-if="profile" />
        <FreelancerTab v-else />
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import PersonalBlock from "../../components/profile/PersonalBlock.vue";
import PersonalBlockMobile from "../../components/profile/PersonalBlockMobile.vue";
import ProfileTab from "../../components/profile/ProfileTab.vue";
import Loader from "../Loader.vue";
import FreelancerTab from "./FreelancerTab.vue";

export default {
  name: "ProfileLayout",
  props: ["profile", "freelancer", "show"],
  data() {
    return {};
  },

  components: {
    PersonalBlock,
    ProfileTab,
    FreelancerTab,
    PersonalBlockMobile,
    Loader,
    FreelancerTab,
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
