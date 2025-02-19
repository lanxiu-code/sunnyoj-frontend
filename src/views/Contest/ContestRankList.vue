<template>
  <div class="contestRankList">
    <a-table
      :pagination="pagination"
      :dataSource="dataSource"
      :columns="columns"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'rank'">
          <span :class="{ rank: true, top3: record.rank <= 3 }">{{
            record.rank
          }}</span>
        </template>
        <template v-if="column.key === 'user'">
          <a-avatar
            :size="{ sm: 10, md: 20, lg: 30, xl: 40, xxl: 50 }"
            :src="record.user.userAvatar"
          >
          </a-avatar>
        </template>
        <template v-if="column.key === 'score'">
          <span class="score">80分</span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    rank: "1",
    user: {
      userAvatar:
        "https://img0.baidu.com/it/u=226178105,492713281&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto",
      userName: "美羊羊",
    },
    score: 90,
    time: "2020-01-01 20:00",
    submitNum: 100,
  },
  {
    rank: "2",
    user: {
      userAvatar:
        "https://img1.baidu.com/it/u=3146615866,1419710076&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto",
      userName: "沸羊羊",
    },
    time: "2020-01-02 20:00",
    score: 80,
    submitNum: 50,
  },
]);
const columns = ref([
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
    align: "center",
    width: 100,
    fixed: "left",
  },
  {
    title: "用户",
    dataIndex: "user",
    key: "user",
    align: "center",
  },
  {
    title: "用时",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: "提交次数",
    dataIndex: "submitNum",
    key: "submitNum",
    align: "center",
  },
  {
    title: "得分",
    dataIndex: "score",
    key: "score",
    align: "center",
    width: 100,
    fixed: "right",
  },
]);
const jump = (url: string) => {
  router.push(url);
};
onMounted(() => {
  dataSource.value = dataSource.value.concat(dataSource.value);
});
</script>
<style lang="scss" scoped>
.contestRankList {
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
