<template>
  <div class="activitycontent">
    <article class="type-post format-standard hentry clearfix">
      <h3>{{ content.activity_title }}</h3>
      <div>
        <div class="show_unit fl ativity">
          <a class="iconfont ic">&#xe622;</a>
          <a class="tagname">活动名称:</a>
          {{ content.activity_title }}
        </div>
        <el-popover placement="left" width="400" trigger="hover">
          <span>
            <li class="comment even thread-odd thread-alt depth-1" id="li-comment-4">
              <article id="comment-4">
                <img
                  :src="content.avatar"
                  class="avatar touxiang avatar-60 photo"
                  height="60"
                  width="60"
                />
                <div class="comment-meta">
                  <h5 class="author">{{ content.nickname }}</h5>
                  <p class="date" v-if="content.realstate == 3">认证用户</p>
                  <p class="date" v-else>未认证用户</p>
                </div>
              </article>
            </li>
            <div class="xinxi">
              <p style="color: #000;">账号：</p>
              <p>{{ content.username }}</p>
            </div>
            <div class="xinxi">
              <p style="color: #000;">邮箱：</p>
              <p>{{ content.mail }}</p>
            </div>
            <div class="xinxi">
              <p style="color: #000;">QQ：</p>
              <p>{{ content.qq }}</p>
            </div>
            <div class="xinxi">
              <p style="color: #000;">个人简介：</p>
              <p>{{ content.synopsis }}</p>
            </div>
            <el-button
              @click="jubao(content.username)"
              style="margin: 10px 150px"
              type="danger"
              plain
              >举报</el-button
            >
          </span>
          <div slot="reference" class="show_unit fl ativity">
            <a class="iconfont ic">&#xe66a;</a>
            <a class="tagname">发起者:</a>
            {{ content.nickname }}
          </div>
        </el-popover>
        <div class="show_unit fl ativity">
          <a class="iconfont ic">&#xe62a;</a>
          <a class="tagname">活动时间:</a>
          {{ content.activity_statetime | dataFormat }}——{{ content.activity_endtime | dataFormat }}
        </div>
        <div class="show_unit fl ativity">
          <a class="iconfont ic">&#xe62a;</a>
          <a class="tagname">活动人数:</a>
          {{ content.activity_num }}
        </div>
        <div class="show_unit fl ativity">
          <a class="iconfont ic">&#xe62a;</a>
          <a class="tagname">活动地点:</a>
          {{ content.activity_locale }}
        </div>
        <div style="clear:both"></div>
      </div>
      <h3>活动描述</h3>
      <blockquote v-html="content.activity_content"></blockquote>
    </article>
    <el-button
      type="primary"
      @click="setjoin"
      style="width: 80px; margin: 0 auto; display: block;"
      >参加</el-button
    >
    <div class="block">
      <h3>活动公告</h3>
      <el-timeline>
        <el-timeline-item
          v-for="(item, id) in announcementlist"
          :key="id"
          :timestamp="item.announcement_createtime | dataFormat"
          placement="top"
        >
          <el-card>
            <h4>{{ item.announcement_name }}</h4>
            <p>{{ item.announcement_content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="like-btn">
      <form id="like-it-form" action="#" method="post">
        <span class="like-it">66</span>
        <input type="hidden" name="post_id" value="99" />
        <input type="hidden" name="action" value="like_it" />
      </form>
    </div>
    <comment />
  </div>
</template>

<script>
import comment from '@/components/comment.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    comment
  },
  computed: {
    ...mapState({
      contentuserid: state => state.contentuserid,
      commentnum: state => state.commentnum
    })
  },
  data() {
    return {
      content: {},
      announcementlist: {}
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['setcontentid', 'setcontentinfo']),
    jubao(username) {
      let url = escape(window.location.href)
      this.$router.push({
        path: '/jubao',
        query: { user: username, url: url }
      })
    },
    async getactivitycontent() {
      let data = { id: this.id }
      let res = await this.$axios.post('/web/getactivitycontent', this.qs.stringify(data))
      if (res.data.state.type === 'SUCCESS') {
        this.content = res.data.data
        this.setcontentinfo({
          contentname: res.data.data.activity_title,
          contentuserid: res.data.data.user_id
        })
      }
    },
    async setjoin() {
      let data = {
        type: this.$route.name,
        contentname: this.content.activity_title,
        to_userid: this.contentuserid,
        content_id: this.content.activity_id
      }
      let res = await this.$axios.post('/web/setjoin', this.qs.stringify(data))
      if (res.data.state.type === 'SUCCESS') {
        this.$message.success('参加成功')
      } else {
        this.$message.error('你已经报名参加了本项目')
      }
    },
    async getannouncementlist() {
      let res = await this.$axios.post('/admin/announcementlist', this.qs.stringify({ content_id: this.id }))
      if (res.data.state.type === 'SUCCESS') {
        this.announcementlist = res.data.data
      }
    }
  },
  watch: {
    id: {
      handler(newVal) {
        this.getactivitycontent()
        this.getannouncementlist()
        this.setcontentid(this.id)
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getannouncementlist()
    this.setcontentid(this.id)
  }
}
</script>

<style scoped>
.activitycontent {
  min-height: 200px;
  padding-left: 20px; /* 增加左边距 */
}
.tagname {
  margin-right: 16px;
  font-size: 18px;
}
.show_unit {
  margin-bottom: 25px; /* 增加行间隔 */
}
</style>
