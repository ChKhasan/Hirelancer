<template lang="html">
  <div class="profile">
    <ProfileLayout :profile="false">
      <div class="mt-8">
        <Alerts />
      </div>
      <div class="personal-information mt-8">
        <PersonalInfo :isEdit="true"/>
        <Achievements />
      </div>
      <div class="personal-information mt-[45px]">
        <Statistics />
      </div>
      <div class="mt-[45px]">
        <Events />
      </div>
      <div class="mt-[40px]">
        <Comments />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import PersonalInfo from "../../components/profile/portfolio/PersonalInfo.vue";
import Achievements from "../../components/profile/portfolio/Achievements.vue";
import Portfolios from "../../components/profile/portfolio/Portfolios.vue";
import Events from "../../components/profile/Events.vue";
import Alerts from "../../components/profile/Alerts.vue";
import ProfileLayout from "../../components/profile/ProfileLayout.vue";
import Statistics from "../../components/profile/Statistics.vue";
import Comments from "../../components/profile/Comments.vue";

export default {
  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
    Statistics,
    Alerts,
    Comments,
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
