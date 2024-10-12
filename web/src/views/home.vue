<template>
  <div class="home">
    <div v-title data-title="MyCampus | 首页"></div>

    <!-- Start of Page Container -->
    <div class="page-container">
      <div class="container">
        <div class="row">
          <!-- adminhome组件 -->
          <div class="span6">
            <adminhome />
          </div>
          <!-- CourseTable组件 -->
          <div class="span6">
            <CourseTable />
          </div>
        </div>
      </div>
    </div>
    <!-- End of Page Container -->
  </div>
</template>

<script>
// @ is an alias to /src
import adminhome from '@/components/userinfo.vue';
import CourseTable from '@/components/CourseTable.vue'

export default {
  name: 'home',
  components: {
    adminhome,
    CourseTable
  }
}
</script>

<style>
.guomore {
  float: right;
}

.span6 {
  width: 50%;
  float: left; /* 使其左右布局 */
  box-sizing: border-box; /* 包含内边距和边框在内的宽度计算 */
}

.page-container {
  display: flex;
}

.row {
  display: flex;
  width: 100%;
  justify-content: space-between; /* 在行中间隔两个元素 */
}

.adminhome, .CourseTable {
  width: 100%;
}

.adminhome {
  margin-top: 100px; /* 添加顶部外边距 */
}
</style>
