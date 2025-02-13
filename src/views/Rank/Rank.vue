<template>
  <div class="rankPage">
    <a-row justify="center">
      <a-col :lg="16" :md="12" class="col">
        <a-row justify="end">
          <a-col :sm="6">
            <a-input-search
              v-model:value="searchParams.userName"
              placeholder="搜索用户"
              enter-button="搜索"
              @search="onSearch"
            />
          </a-col>
        </a-row>

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
  userName: "",
});
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    rank: "1",
    userName: "张三",
    signature: "xxxxx",
    resolveNum: 30,
    submitNum: 40,
    ratio: "99%",
  },
  {
    rank: "2",
    userName: "李四",
    signature: "hello world",
    resolveNum: 30,
    submitNum: 40,
    ratio: "99%",
  },
]);
const columns = ref([
  {
    title: "名次",
    dataIndex: "rank",
    key: "rank",
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
    title: "比率",
    dataIndex: "ratio",
    key: "ratio",
    align: "center",
    width: 100,
    fixed: "right",
  },
]);
const onSearch = () => {
  console.log("submit");
};
</script>

<style lang="scss" scoped>
.rankPage {
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
