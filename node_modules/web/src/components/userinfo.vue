<template>
  <div class="adminhome">
    <div class="left">
      <li class="comment even thread-odd thread-alt depth-1" id="li-comment-4">
        <article id="comment-4">
          <img :src="form.avatar" class="avatar touxiang avatar-60 photo" height="60" width="60" />

          <div class="comment-meta">
            <h5 class="author">{{form.nickname}}</h5>

            <p class="date" v-if="form.realstate==3">认证用户</p>
            <p class="date" v-else>未认证用户</p>
          </div>
          <div @click="$router.push('/admin/myself') ">编辑信息</div>
        </article>
      </li>
      <div class="xinxi">
        <p style="color: #000;">邮箱：</p>
        <p>{{form.mail}}</p>
      </div>
      <div class="xinxi">
        <p style="color: #000;">QQ：</p>
        <p>{{form.qq}}</p>
      </div>
      <div class="xinxi">
        <p style="color: #000;">个人简介：</p>
        <p>{{form.synopsis}}</p>
      </div>
    </div>
    <div class="chart-container">
      <chart style="width: 100%;" :options="optioncontentshadow" :auto-resize="true"></chart>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      optioncontentshadow: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: []
          }
        ]
      }
    };
  },
  methods: {
    async getuser() {
      let res = await this.$axios.post("/webadmin/getuser");
      this.form = res.data.data;
    },
    async getusernumbering() {
      let res = await this.$axios.post("/webadmin/getusernumbering");
      this.optioncontentshadow.series[0].data.push(res.data.data.help, res.data.data.activity, res.data.data.article, res.data.data.job, res.data.data.oldstuff);
      this.optioncontentshadow.xAxis[0].data = ['问答交流', '校内活动'];
    }
  },
  created() {
    this.getuser();
    this.getusernumbering();
  }
};
</script>

<style scoped>
.adminhome {
  display: flex;
  flex-direction: column;
}

.left {
  width: 100%;
}

.chart-container {
  width: 100%;
  margin-top: 30px;
}

.xinxi p {
  display: inline;
}

.xinxi {
  margin-top: 30px;
  margin-left: 30px;
}

li {
  list-style-type: none;
}
</style>
