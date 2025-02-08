<template>
  <div class="contestPage">
    <a-row justify="center">
      <a-col :md="12" class="col">
        <a-space justify="space-between">
          <a-input
            placeholder="比赛编号"
            v-model:value="searchParams.id"
            style="width: 11.25rem"
          />
          <a-input
            placeholder="比赛标题"
            v-model:value="searchParams.title"
            style="width: 11.25rem"
          />
          <a-button type="primary" html-type="submit" class="searchBtn"
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
const searchParams = reactive({
  title: "",
  id: "",
});
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    id: "1",
    title: "【入门】A+B Problem",
    time: "剩余 19天 18 小时 00 分 55 秒",
    type: "公开",
    createByName: "张三",
  },
  {
    id: "1",
    title: "【入门】A+B Problem",
    time: "已结束2025-01-29 00:00:00",
    type: "私有",
    createByName: "张三",
  },
]);
const columns = ref([
  {
    title: "比赛编号",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 100,
    fixed: "left",
  },
  {
    title: "比赛标题",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    align: "center",
  },
  {
    title: "创建人",
    dataIndex: "createByName",
    key: "createByName",
    align: "center",
  },
]);
const onFinish = () => {
  console.log("submit");
};
</script>

<style lang="scss" scoped>
.contestPage {
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
