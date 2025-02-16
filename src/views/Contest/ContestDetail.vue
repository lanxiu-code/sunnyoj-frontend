<template>
  <div class="contestDetail">
    <a-row justify="center">
      <a-col :sm="24" :lg="18">
        <a-card :bordered="false" class="card">
          <a-space>
            <a-typography-title :level="3"
              >第 26 场 算法入门比赛</a-typography-title
            >
            <a-tag color="#55acee"> ACM赛制 </a-tag>
            <a-tag color="#55acee"> 入门赛 </a-tag>
          </a-space>
          <a-typography-paragraph style="color: rgb(106 99 99)">
            本场比赛为「算法双周赛」第二十六场蓝桥入门赛，赛题共计 6
            题，比赛时间为 2025 年 02月 08 日（星期六），下午 19:00 ~ 21:00，共
            2 小时。参赛奖励最高200元。
          </a-typography-paragraph>
        </a-card>
      </a-col>
    </a-row>
    <a-row justify="center">
      <a-col :sm="24" :md="18" :lg="13">
        <a-card class="card" :bordered="false">
          <a-table
            :pagination="pagination"
            :dataSource="dataSource"
            :columns="columns"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <CheckCircleTwoTone
                  v-show="record.status === 1"
                  style="font-size: 1.25rem"
                  two-tone-color="#52c41a"
                />
              </template>
              <template v-else-if="column.dataIndex === 'operation'">
                <a-button
                  type="primary"
                  @click="jump(`/problems/${record.questionId}`)"
                  >开始挑战</a-button
                >
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :sm="24" :md="18" :lg="5">
        <a-card class="card" :bordered="false">
          <a-list item-layout="horizontal" :data-source="rankList">
            <template #renderItem="{ item }">
              <a-list-item>
                <template #extra>
                  <span class="score">80分</span>
                </template>
                <a-list-item-meta>
                  <template #title>
                    {{ item.userName }}
                  </template>
                  <template #description>
                    <span>通过次数：{{ item.submitNum }}</span>
                  </template>
                  <template #avatar>
                    <a-space>
                      <span :class="{ rank: true, top3: item.rank <= 3 }">{{
                        item.rank
                      }}</span>
                      <a-avatar
                        src="https://img2.baidu.com/it/u=2349510311,2740160586&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"
                      />
                    </a-space>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { CheckCircleTwoTone } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const rankList: any[] = [
  {
    rank: 1,
    userName: "张三",
    submitNum: 100,
    score: 90,
  },
  {
    rank: 2,
    userName: "李四",
    submitNum: 111,
    score: 80,
  },
  {
    rank: 3,
    userName: "王五",
    submitNum: 100,
    score: 70,
  },
  {
    rank: 4,
    userName: "赵六",
    submitNum: 100,
    score: 60,
  },
];
const dataSource = ref([
  {
    questionId: "1",
    title: "【入门】A+B Problem",
    score: 10,
    passRate: "99.9%",
    status: 1,
  },
  {
    questionId: "2",
    title: "【入门】A+B Problem",
    score: 10,
    passRate: "90.9%",
    status: 0,
  },
]);
const columns = ref([
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    align: "center",
    width: 100,
    fixed: "left",
  },
  {
    title: "题目编号",
    dataIndex: "questionId",
    key: "questionId",
    align: "center",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "分数",
    dataIndex: "score",
    key: "score",
    align: "center",
  },
  {
    title: "通过率",
    dataIndex: "passRate",
    key: "passRate",
    align: "center",
    width: 100,
    fixed: "right",
  },
  {
    title: "操作",
    align: "center",
    dataIndex: "operation",
  },
]);
const jump = (url: string) => {
  router.push(url);
};
</script>

<style lang="scss" scoped>
@import url("@/assets/style/card.scss");
.contestDetail {
  .score {
    font-size: 25px;
    color: #65656d;
  }
  .rank {
    font-size: 25px;
    font-style: italic;
  }
  .top3 {
    color: #ffb416;
  }
}
</style>
