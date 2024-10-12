<template>
  <div class="course-table">
    <h2>日程表</h2>
    <div class="controls">
      <button @click="showModal = true">添加课表</button>
      <select v-model="selectedWeek" @change="updateWeek">
        <option v-for="week in weeks" :key="week" :value="week">
          第{{ week }}周
        </option>
      </select>
    </div>  
    <table>
      <thead>
        <tr>
          <th>时间</th>
          <th>周日</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
        </tr>
      </thead>
      <tbody>
        <!-- 上午课程 -->
        <tr>
          <td>8:00-8:45</td>
          <td>{{ currentWeekData[0][0] }}</td>
          <td>{{ currentWeekData[0][1] }}</td>
          <td>{{ currentWeekData[0][2] }}</td>
          <td>{{ currentWeekData[0][3] }}</td>
          <td>{{ currentWeekData[0][4] }}</td>
          <td>{{ currentWeekData[0][5] }}</td>
          <td>{{ currentWeekData[0][6] }}</td>
        </tr>
        <tr>
          <td>8:50-9:35</td>
          <td>{{ currentWeekData[1][0] }}</td>
          <td>{{ currentWeekData[1][1] }}</td>
          <td>{{ currentWeekData[1][2] }}</td>
          <td>{{ currentWeekData[1][3] }}</td>
          <td>{{ currentWeekData[1][4] }}</td>
          <td>{{ currentWeekData[1][5] }}</td>
          <td>{{ currentWeekData[1][6] }}</td>
        </tr>
        <tr>
          <td>9:50-10:35</td>
          <td>{{ currentWeekData[2][0] }}</td>
          <td>{{ currentWeekData[2][1] }}</td>
          <td>{{ currentWeekData[2][2] }}</td>
          <td>{{ currentWeekData[2][3] }}</td>
          <td>{{ currentWeekData[2][4] }}</td>
          <td>{{ currentWeekData[2][5] }}</td>
          <td>{{ currentWeekData[2][6] }}</td>
        </tr>
        <tr>
          <td>10:40-11:25</td>
          <td>{{ currentWeekData[3][0] }}</td>
          <td>{{ currentWeekData[3][1] }}</td>
          <td>{{ currentWeekData[3][2] }}</td>
          <td>{{ currentWeekData[3][3] }}</td>
          <td>{{ currentWeekData[3][4] }}</td>
          <td>{{ currentWeekData[3][5] }}</td>
          <td>{{ currentWeekData[3][6] }}</td>
        </tr>
        <tr>
          <td>11:30-12:15</td>
          <td>{{ currentWeekData[4][0] }}</td>
          <td>{{ currentWeekData[4][1] }}</td>
          <td>{{ currentWeekData[4][2] }}</td>
          <td>{{ currentWeekData[4][3] }}</td>
          <td>{{ currentWeekData[4][4] }}</td>
          <td>{{ currentWeekData[4][5] }}</td>
          <td>{{ currentWeekData[4][6] }}</td>
        </tr>
        <!-- 上午与下午间隔 -->
        <tr class="interval">
          <td colspan="8">午间休息</td>
        </tr>
        <!-- 下午课程 -->
        <tr>
          <td>14:05-14:50</td>
          <td>{{ currentWeekData[5][0] }}</td>
          <td>{{ currentWeekData[5][1] }}</td>
          <td>{{ currentWeekData[5][2] }}</td>
          <td>{{ currentWeekData[5][3] }}</td>
          <td>{{ currentWeekData[5][4] }}</td>
          <td>{{ currentWeekData[5][5] }}</td>
          <td>{{ currentWeekData[5][6] }}</td>
        </tr>
        <tr>
          <td>14:55-15:40</td>
          <td>{{ currentWeekData[6][0] }}</td>
          <td>{{ currentWeekData[6][1] }}</td>
          <td>{{ currentWeekData[6][2] }}</td>
          <td>{{ currentWeekData[6][3] }}</td>
          <td>{{ currentWeekData[6][4] }}</td>
          <td>{{ currentWeekData[6][5] }}</td>
          <td>{{ currentWeekData[6][6] }}</td>
        </tr>
        <tr>
          <td>15:45-16:30</td>
          <td>{{ currentWeekData[7][0] }}</td>
          <td>{{ currentWeekData[7][1] }}</td>
          <td>{{ currentWeekData[7][2] }}</td>
          <td>{{ currentWeekData[7][3] }}</td>
          <td>{{ currentWeekData[7][4] }}</td>
          <td>{{ currentWeekData[7][5] }}</td>
          <td>{{ currentWeekData[7][6] }}</td>
        </tr>
        <tr>
          <td>16:40-17:25</td>
          <td>{{ currentWeekData[8][0] }}</td>
          <td>{{ currentWeekData[8][1] }}</td>
          <td>{{ currentWeekData[8][2] }}</td>
          <td>{{ currentWeekData[8][3] }}</td>
          <td>{{ currentWeekData[8][4] }}</td>
          <td>{{ currentWeekData[8][5] }}</td>
          <td>{{ currentWeekData[8][6] }}</td>
        </tr>
        <tr>
          <td>17:30-18:15</td>
          <td>{{ currentWeekData[9][0] }}</td>
          <td>{{ currentWeekData[9][1] }}</td>
          <td>{{ currentWeekData[9][2] }}</td>
          <td>{{ currentWeekData[9][3] }}</td>
          <td>{{ currentWeekData[9][4] }}</td>
          <td>{{ currentWeekData[9][5] }}</td>
          <td>{{ currentWeekData[9][6] }}</td>
        </tr>
        <!-- 下午与晚上间隔 -->
        <tr class="interval">
          <td colspan="8">晚间休息</td>
        </tr>
        <!-- 晚上课程 -->
        <tr>
          <td>18:30-19:15</td>
          <td>{{ currentWeekData[10][0] }}</td>
          <td>{{ currentWeekData[10][1] }}</td>
          <td>{{ currentWeekData[10][2] }}</td>
          <td>{{ currentWeekData[10][3] }}</td>
          <td>{{ currentWeekData[10][4] }}</td>
          <td>{{ currentWeekData[10][5] }}</td>
          <td>{{ currentWeekData[10][6] }}</td>
        </tr>
        <tr>
          <td>19:20-20:05</td>
          <td>{{ currentWeekData[11][0] }}</td>
          <td>{{ currentWeekData[11][1] }}</td>
          <td>{{ currentWeekData[11][2] }}</td>
          <td>{{ currentWeekData[11][3] }}</td>
          <td>{{ currentWeekData[11][4] }}</td>
          <td>{{ currentWeekData[11][5] }}</td>
          <td>{{ currentWeekData[11][6] }}</td>
        </tr>
        <tr>
          <td>20:10-20:55</td>
          <td>{{ currentWeekData[12][0] }}</td>
          <td>{{ currentWeekData[12][1] }}</td>
          <td>{{ currentWeekData[12][2] }}</td>
          <td>{{ currentWeekData[12][3] }}</td>
          <td>{{ currentWeekData[12][4] }}</td>
          <td>{{ currentWeekData[12][5] }}</td>
          <td>{{ currentWeekData[12][6] }}</td>
        </tr>
      </tbody>
    </table>

   <!-- 模态窗口 -->
<div v-if="showModal" class="modal">
  <div class="modal-content">
    <h3>添加课表</h3>
    <form @submit.prevent="addCourse">
      <div class="form-group">
        <label>课程名称:</label>
        <input v-model="newCourse.name" type="text" required>
      </div>
      <div class="form-group">
        <label>课程时间（起始周 - 结束周）:</label>
        <input v-model.number="newCourse.startWeek" type="number" min="1" max="18" placeholder="起始周" required>
        <input v-model.number="newCourse.endWeek" type="number" min="1" max="18" placeholder="结束周" required>
      </div>
      <div class="form-group">
        <label>课程节次（起始节次 - 结束节次）:</label>
        <input v-model.number="newCourse.startPeriod" type="number" min="1" max="13" placeholder="起始节次" required>
        <input v-model.number="newCourse.endPeriod" type="number" min="1" max="13" placeholder="结束节次" required>
      </div>
      <div class="form-group">
        <label>星期:</label>
        <select v-model.number="newCourse.day" required>
          <option value="0">周日</option>
          <option value="1">周一</option>
          <option value="2">周二</option>
          <option value="3">周三</option>
          <option value="4">周四</option>
          <option value="5">周五</option>
          <option value="6">周六</option>
        </select>
      </div>
      <div class="form-actions">
        <button type="submit">添加</button>
        <button @click="showModal = false" type="button">取消</button>
      </div>
    </form>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'CourseTable',
  data() {
    return {
      showModal: false,
      selectedWeek: 1,
      weeks: Array.from({ length: 18 }, (v, i) => i + 1),
      courses: Array.from({ length: 18 }, () => Array.from({ length: 13 }, () => Array(7).fill(''))),
      newCourse: {
        name: '',
        startWeek: 1,
        endWeek: 1,
        startPeriod: 1,
        endPeriod: 1,
        day: 0,
      },
    };
  },
  computed: {
    currentWeekData() {
      return this.courses[this.selectedWeek - 1];
    },
  },
  methods: {
    updateWeek() {
      // 触发计算属性更新
    },
    async addCourse() {
      let user = await this.$axios.post("/webadmin/getuser");
      let data = {
        user_id: user.data.data.user_id,
        course_name: this.newCourse.name,
        startWeek: this.newCourse.startWeek,
        endWeek: this.newCourse.endWeek,
        startPeriod: this.newCourse.startPeriod,
        endPeriod: this.newCourse.endPeriod,
        day: this.newCourse.day,
      }
      let res = await this.$axios.post('/web/setCourseTable', this.qs.stringify(data))
      this.showModal = false;
      this.resetNewCourse();
      window.location.reload();
  },

    async getCoursecontent() {
      let user = await this.$axios.post("/webadmin/getuser");
      let data = { user_id: user.data.data.user_id }
      let res = await this.$axios.post('/web/getCourseTable', this.qs.stringify(data))
      if (res.data.state === 's') {
        const courses = res.data.data; // 获取到的课程数据
        this.populateCourses(courses);
      }
    },
    populateCourses(courses) {
      // 清空现有课表数据
      this.courses = Array.from({ length: 18 }, () => Array.from({ length: 13 }, () => Array(7).fill('')));
      // 遍历课程数据并填充课表
      courses.forEach(course => {
        const { course_name, start_week, end_week, start_period, end_period, day } = course;
        for (let week = start_week; week <= end_week; week++) {
          for (let period = start_period - 1; period < end_period; period++) {
            this.$set(this.courses[week - 1][period], day, course_name);
          }
        }
      });
    },
    resetNewCourse() {
      this.newCourse = {
        name: '',
        startWeek: 1,
        endWeek: 1,
        startPeriod: 1,
        endPeriod: 1,
        day: 0,
      };
    },
  },
  mounted() {
    this.getCoursecontent(); // 在组件挂载时获取课程表信息
  },
  watch: {
    selectedWeek(newVal) {
      // 当selectedWeek变化时，确保currentWeekData正确更新
      this.updateWeek();
    }
  },
};
</script>

<style>
.course-table {
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
  max-width: 1000px;
}

.course-table .controls {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 垂直方向上顶部对齐 */
}
.course-table .controls button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  height: 50px;
}
.course-table .controls select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 50px;
  width: 120px;
  text-align: center; /* 将文本水平居中 */
}

.course-table h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
  color: #333;
}

.course-table table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.course-table th,
.course-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.course-table th {
  background-color: #f5f5f5;
  color: #555;
  text-transform: uppercase;
}

.course-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.course-table tr:hover {
  background-color: #f1f1f1;
}

.course-table td:hover {
  background-color: #f1f1f1;
}

.course-table td:first-child {
  font-weight: bold;
  background-color: #fafafa;
}

.course-table th,
.course-table td:first-child {
  background-color: #f0f0f0;
}

.interval td {
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: center;
  padding: 16px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  margin: 10px auto;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.modal {
  
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.modal-content h3 {
  margin-bottom: 20px;
}

.modal-content label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.modal-content input,
.modal-content select {
  width: calc(100% - 16px);
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-actions {
  display: flex;
  justify-content: space-between; /* 按钮分布在左右两侧 */
}

.form-actions button {
  width: 45%; /* 将按钮宽度调整为适当大小 */
}

.form-actions button:nth-child(2) {
  order: -1; /* 调换按钮位置 */
}
</style>
