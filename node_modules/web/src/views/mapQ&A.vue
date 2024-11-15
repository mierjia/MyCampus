<template>
  <div class="help">
    <div v-title data-title="MyCampus | 地图气泡"></div>

    <!-- Start of Page Container -->
    <div class="page-container">
      <div class="container">
        <div class="row">
          <!-- start of page content -->
          <div class="span8">
            <div>
              <h1>地图气泡</h1>
            </div>
            <!-- Add MapContainer component here -->
            <MapContainer />
          </div>
          <!-- start of sidebar -->
          <div class="span8">
            <!-- Add help component here -->
            <Help />
          </div>
          <!-- end of page sidebar -->
        </div>
      </div>
    </div>
    <!-- End of Page Container -->
  </div>
</template>

<script>
import MapContainer from '@/components/MapContainer.vue';
import Help from '@/components/Q&A.vue';

export default {
  name: 'HelpPage',
  components: {
    Help,
    MapContainer
  }
}
</script>

<style>
.help {
  min-height: 200px;
}

.span6 {
  width: 50%;
  float: left; /* 使其左右布局 */
  box-sizing: border-box; /* 包含内边距和边框在内的宽度计算 */
}

.page-container {
  display: flex;
  flex-wrap: wrap;
}

.page-content, .page-sidebar {
  flex: 1;
}
</style>
