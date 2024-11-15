<template>
  <div class="activity">
    <div class="row-fluid top-cats">
      <section class="widget">
        <div class="page-header" style="position:relative;cursor:pointer">
          <div>
            <h3>活动中心</h3>
          </div>
        </div>
        <ul class="articles">
          <li
            class="article-entry standard clickable-activity"
            v-for="(activity, id) in tableData"
            :key="id"
            @click="selectActivity(activity.activity_id)"
          >
            <h4>{{ activity.activity_title }}</h4>
            <span class="article-meta">
              <a class="iconfont">&#xe619;</a>
              {{ activity.createtime | dataFormat }}
              <a class="iconfont" style="margin-left:50px">&#xe609;</a>
              {{ activity.activity_locale }}
            </span>
            <span class="like-count">
              <a class="iconfont" style="color:red">&#xe647;</a>
              {{ activity.activity_read_num }}
            </span>
          </li>
        </ul>
      </section>
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="pagelistquery.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallttle: '',
      lables: [],
      pagelistquery: {
        lable: '',
        total: 0,
        pagesize: 10,
        page: 1
      },
      tableData: {}
    }
  },
  methods: {
    changelable(lable) {
      this.pagelistquery.lable = lable
      this.smallttle = this.pagelistquery.lable
      this.getactivitylist()
    },
    handleCurrentChange(val) {
      this.pagelistquery.page = val
      this.gethelplist()
      console.log(`当前页: ${val}`)
    },
    async getactivitylist() {
      let res = await this.$axios.post(
        '/web/webgetwebactivitylist',
        this.qs.stringify(this.pagelistquery)
      )
      if (res.data.state.type === 'SUCCESS') {
        this.tableData = res.data.data
        this.pagelistquery.total = res.data.count
      }
    },
    selectActivity(activityId) {
      this.$emit('activity-selected', activityId)
    },
    async lablelist() {
      let res = await this.$axios.post(
        '/admin/lablelist',
        this.qs.stringify({ lable_name: '活动分类' })
      )
      if (res.data.state.type === 'SUCCESS') {
        // this.lable = res.data.data
        this.lables = JSON.parse(res.data.data[0].lable)
        console.log('分类列表')
        console.log(this.lables)
      }
    }
  },
  created() {
    this.getactivitylist()
    this.lablelist()
  }
}
</script>

<style scoped>
.activity {
  margin-right: 20px; /* 增加外边距 */
}
.clickable-activity {
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.clickable-activity:hover {
  background-color: #f0f0f0; /* 背景颜色变化 */
  color: #007bff; /* 字体颜色变化 */
}
</style>
