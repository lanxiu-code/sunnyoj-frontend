<template>
  <div class="questionBankPage">
    <a-row justify="center">
      <a-col :lg="16" :md="12" class="col">
        <a-space justify="space-between">
          <a-select
            ref="select"
            v-model:value="searchParams.difficulty"
            placeholder="选择难度"
          >
            <a-select-option
              v-for="item in difficultyType"
              :key="item.id"
              :value="item.id"
              >{{ item.type }}</a-select-option
            >
          </a-select>
          <a-select
            ref="select"
            v-model:value="searchParams.status"
            placeholder="选择状态"
          >
            <a-select-option
              v-for="item in statusType"
              :key="item.id"
              :value="item.id"
              >{{ item.type }}</a-select-option
            >
          </a-select>
          <a-input-group compact>
            <a-select v-model:value="searchParams.type" placeholder="搜索类型">
              <a-select-option
                v-for="item in searchType"
                :key="item.id"
                :value="item.id"
                >{{ item.type }}</a-select-option
              >
            </a-select>
            <a-input
              v-model:value="searchParams.title"
              style="width: 11.25rem"
            />
          </a-input-group>
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
              <a-typography-link
                @click="jump(`/problems/${record.questionId}`)"
              >
                {{ record.title }}
              </a-typography-link>
            </template>
            <template v-else-if="column.key === 'status'">
              <CheckCircleTwoTone
                v-show="record.status === 1"
                style="font-size: 1.25rem"
                two-tone-color="#52c41a"
              />
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
import { CheckCircleTwoTone } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const searchType = ref([
  {
    id: 1,
    type: "题目编号",
  },
  {
    id: 2,
    type: "题目标题",
  },
]);
const difficultyType = ref([
  {
    id: 1,
    type: "简单",
  },
  {
    id: 2,
    type: "中等",
  },
  {
    id: 3,
    type: "困难",
  },
]);
const statusType = ref([
  {
    id: 1,
    type: "已解决",
  },
  {
    id: 2,
    type: "未解决",
  },
]);
const searchParams = reactive({
  title: "",
  questionId: "",
  difficulty: undefined,
  status: undefined,
  type: undefined,
});
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    questionId: "1",
    title: "【入门】A+B Problem",
    resolveNum: 32,
    submitNum: 100,
    passRate: "99.9%",
    tags: ["数组", "回溯", "位运算"],
    status: 1,
  },
  {
    questionId: "2",
    title: "【入门】A+B Problem",
    resolveNum: 32,
    submitNum: 100,
    passRate: "90.9%",
    tags: ["数组", "回溯", "位运算", "递归"],
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
    title: "标签",
    dataIndex: "tags",
    key: "tags",
    align: "center",
  },
  {
    title: "解决",
    dataIndex: "resolveNum",
    key: "resolveNum",
    align: "center",
  },
  {
    title: "提交",
    dataIndex: "submitNum",
    key: "submitNum",
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
]);
const onSearch = () => {
  console.log("submit");
};
const jump = (url: string) => {
  router.push(url);
};
</script>

<style lang="scss" scoped>
.questionBankPage {
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
