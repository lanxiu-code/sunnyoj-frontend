<template>
  <a-table :pagination="pagination" :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <CheckCircleTwoTone
          v-show="record.status === 1"
          style="font-size: 1.25rem"
          two-tone-color="#52c41a"
        />
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <a-button type="primary" @click="jump(`/problems/${record.questionId}`)"
          >开始挑战</a-button
        >
      </template>
    </template>
  </a-table>
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
<style lang="scss" scoped></style>
