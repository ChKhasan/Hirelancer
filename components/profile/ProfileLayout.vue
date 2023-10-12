<template lang="html">
  <div class="profile-layout max-w-[1680px] mx-auto pt-12 pb-[100px]">
    <div class="profile-grid">
      <PersonalBlock :profile="profile" />
      <div class="min-w-0">
        <ProfileTab v-if="profile" />
        <FreelancerTab v-else />
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import PersonalBlock from "../../components/profile/PersonalBlock.vue";
import ProfileTab from "../../components/profile/ProfileTab.vue";
import FreelancerTab from "./FreelancerTab.vue";

export default {
  props: ["profile"],
  components: {
    PersonalBlock,
    ProfileTab,
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
</style>
