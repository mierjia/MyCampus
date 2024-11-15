<template>
  <div class="hoothelp">
    <section class="widget">
      <router-link
        to="/help"
        tag="div"
        class="page-header"
        style="position:relative;cursor:pointer"
      >
        <h3>讨论/问答</h3>
      </router-link>
      <ul class="articles">
        <li
          class="article-entry standard"
          v-for="(item, id) in tableData"
          :key="id"
        >
          <h4>
            <router-link :to="'/helpcontent/' + item.help_id">{{
              item.help_title
            }}</router-link>
          </h4>
          <span class="article-meta">
            <a class="iconfont">&#xe619;</a>
            {{ item.createtime | dataFormat }}
            <a class="iconfont" style="margin-left:50px">&#xe688;</a>
          </span>
          <span class="like-count">
            <span class="like-count">
              <a class="iconfont" style="color:red">&#xe647;</a
              >{{ item.help_read_num }}
            </span>
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
</template>

<script>
export default {
  name: 'hoothelp',
  data() {
    return {
      smallttle: '',
      lables: [],
      pagelistquery: {
        lable: '',
        tag: '',
        pagesize: 10,
        page: 1
      },
      tableData: {}
    }
  },
  props: {
    tag: {}
  },
  methods: {
    changelable(lable) {
      this.pagelistquery.lable = lable
      this.smallttle = this.pagelistquery.lable
      this.pagelistquery.tag = ''
      this.gethelplist()
    },
    changetag() {
      this.pagelistquery.tag = this.tag
      this.smallttle = this.tag
    },
    handleCurrentChange(val) {
      this.pagelistquery.page = val
      this.gethelplist()
      console.log(`当前页: ${val}`)
    },
    async gethelplist() {
      console.log(this.pagelistquery)
      let res = await this.$axios.post(
        '/web/webgetwebhelplist',
        this.qs.stringify(this.pagelistquery)
      )
      if (res.data.state.type === 'SUCCESS') {
        this.tableData = res.data.data
        console.log(res.data)
        this.pagelistquery.total = res.data.count
      }
    },
    async lablelist() {
      let res = await this.$axios.post(
        '/admin/lablelist',
        this.qs.stringify({ lable_name: '问答分类' })
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
    this.tag && this.changetag()
    this.gethelplist()
    this.lablelist()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
