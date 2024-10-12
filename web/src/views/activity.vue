<template>
  <div class="activity">
    <div v-title data-title="MyCampus | 活动"></div>
      <div class="page-container">
        <div class="container">
          <div class="row">
            <div class="span4">
              <ActivityOverview @activity-selected="handleActivitySelected" />
            </div>
            <div class="span8">
              <ActivityDetail :id="selectedActivityId" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ActivityOverview from '@/components/activityoverview.vue'
import ActivityDetail from '@/components/activitycontent.vue'

export default {
  components: {
    ActivityOverview,
    ActivityDetail
  },
  data() {
    return {
      selectedActivityId: null
    }
  },
  methods: {
    handleActivitySelected(activityId) {
      this.selectedActivityId = activityId
    }
  }
}
</script>

<style scoped>
.page-container {
  margin-top: 20px;
}
</style>
