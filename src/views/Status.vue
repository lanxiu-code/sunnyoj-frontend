<template>
  <div class="statusPage">
    <a-row justify="center">
      <a-col :md="12" class="col">
        <a-space justify="space-between">
          <a-input
            placeholder="题目编号"
            v-model:value="searchParams.id"
            style="width: 11.25rem"
          />
          <a-input
            placeholder="用户"
            v-model:value="searchParams.userName"
            style="width: 11.25rem"
          />
          <a-select
            ref="select"
            v-model:value="searchParams.language"
            placeholder="选择语言"
          >
            <a-select-option
              v-for="item in languageList"
              :key="item.id"
              :value="item.id"
              >{{ item.label }}</a-select-option
            >
          </a-select>
          <a-select
            ref="select"
            v-model:value="searchParams.status"
            placeholder="选择状态"
          >
            <a-select-option
              v-for="item in statusList"
              :key="item.id"
              :value="item.id"
              >{{ item.label }}</a-select-option
            >
          </a-select>
          <a-button
            type="primary"
            html-type="submit"
            class="searchBtn"
            @click="onSearch"
            >搜索</a-button
          >
          <a-button>重置</a-button>
        </a-space>
        <a-divider></a-divider>
        <a-table
          :pagination="pagination"
          :dataSource="dataSource"
          :columns="columns"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'title'">
              <a-typography-link href="#">
                {{ record.title }}
              </a-typography-link>
            </template>
            <template v-else-if="column.key === 'status'">
              {{ record.status }}
            </template>
            <template v-else-if="column.key === 'tags'">
              <a-tag
                :bordered="false"
                color="purple"
                v-for="(tag, index) in record.tags"
                :key="index"
                >{{ tag }}</a-tag
              >
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const languageList = ref([
  {
    id: 1,
    label: "C++",
  },
  {
    id: 2,
    label: "Java",
  },
  {
    id: 3,
    label: "Python",
  },
]);
const statusList = ref([
  {
    id: 1,
    label: "正确",
  },
  {
    id: 2,
    label: "错误",
  },
  {
    id: 3,
    label: "编译错误",
  },
  {
    id: 4,
    label: "运行超时",
  },
  {
    id: 5,
    label: "运行内存超限",
  },
  {
    id: 6,
    label: "编译中",
  },
]);
const searchParams = reactive({
  id: "",
  userName: "",
  language: undefined,
  status: undefined,
});
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    id: "1",
    userName: "张三",
    signature: "我是网站老大",
    questionId: "2",
    status: "正确",
    memory: "1999KiB",
    runTime: "33 ms",
    language: "C++",
    codeSize: "775 bytes",
    createTime: "2021-01-01 00:00:00",
  },
  {
    id: "2",
    userName: "李四",
    signature: "我是网站老二",
    questionId: "3",
    status: "错误",
    memory: "1999KiB",
    runTime: "33 ms",
    language: "Java",
    codeSize: "775 bytes",
    createTime: "2021-01-01 00:00:00",
  },
]);
const columns = ref([
  {
    title: "记录编号",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 100,
    fixed: "left",
  },
  {
    title: "用户",
    dataIndex: "userName",
    key: "userName",
    align: "center",
  },
  {
    title: "个性签名",
    dataIndex: "signature",
    key: "signature",
    align: "center",
  },
  {
    title: "题目编号",
    dataIndex: "questionId",
    key: "questionId",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "内存",
    dataIndex: "memory",
    key: "memory",
    align: "center",
  },
  {
    title: "时间",
    dataIndex: "runTime",
    key: "runTime",
    align: "center",
  },
  {
    title: "语言",
    dataIndex: "language",
    key: "language",
    align: "center",
  },
  {
    title: "代码大小",
    dataIndex: "codeSize",
    key: "codeSize",
    align: "center",
  },
  {
    title: "提交时间",
    dataIndex: "createTime",
    key: "createTime",
    align: "center",
  },
]);
const onSearch = () => {
  console.log("submit");
};
</script>

<style lang="scss" scoped>
.statusPage {
  .col {
    background: white;
    padding: 0.9375rem;
    box-sizing: border-box;
    border-radius: 0.3125rem;
    .searchBtn {
      background: #a1c4fd;
    }
  }
}
</style>
