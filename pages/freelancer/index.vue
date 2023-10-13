<template lang="html">
  <div class="profile">
    <ProfileLayout :profile="false">
      <div class="personal-information mt-8">
        <PersonalInfo :isEdit="false" />
        <Achievements />
      </div>
      <div class="portfolio-block mt-[40px]">
        <Portfolios />
      </div>
      <div class="events-block mt-[45px]">
        <Events />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import PersonalInfo from "../../components/profile/portfolio/PersonalInfo.vue";
import Achievements from "../../components/profile/portfolio/Achievements.vue";
import Portfolios from "../../components/profile/portfolio/Portfolios.vue";
import Events from "../../components/profile/Events.vue";
import ProfileLayout from "../../components/profile/ProfileLayout.vue";

export default {

  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
  },
};
</script>
<style lang="css" scoped>
.personal-information {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
</style>
