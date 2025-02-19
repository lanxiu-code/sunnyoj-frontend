<template>
  <a-row style="margin-bottom: 10px">
    <a-space>
      <a-button type="primary" @click="visibleAdd = true">新增</a-button>
    </a-space>
  </a-row>
  <a-table :pagination="pagination" :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-space>
          <a-button @click="openEditDialog(record)" type="primary" size="small"
            >编辑</a-button
          >
          <a-popconfirm title="确定删除吗？" @confirm="onDelConfirm">
            <a-button type="primary" danger size="small">删除</a-button>
          </a-popconfirm>
        </a-space>
      </template>
    </template>
  </a-table>
  <!-- 编辑弹窗 -->
  <a-modal
    :width="600"
    v-model:open="visibleEdit"
    title="编辑公告"
    @cancel="resetData"
    @ok="onOk(false)"
  >
    <NoticeEdit :data="currentRow" />
  </a-modal>
  <!-- 新增弹窗 -->
  <a-modal
    :width="600"
    v-model:open="visibleAdd"
    title="添加公告"
    @ok="onOk(true)"
  >
    <NoticeAdd :data="currentRow" />
  </a-modal>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import NoticeEdit from "./NoticeEdit.vue";
import NoticeAdd from "./NoticeAdd.vue";
const visibleEdit = ref(false);
const visibleAdd = ref(false);
const currentRow = reactive({});
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref([
  {
    id: "1",
    title: "信息学奥赛一本通题单",
    content: "这里是公告内容",
    status: "可用",
    createByName: "张三",
    updateTime: "2020-1-1 20:00",
    createTime: "2020-1-1 20:00",
  },
  {
    id: "2",
    title: "对于部分违规用户的处理",
    status: "不可用",
    content: "这里是公告内容",
    createByName: "李四",
    updateTime: "2020-1-1 20:00",
    createTime: "2020-1-1 20:00",
  },
]);
const columns = ref([
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 100,
    fixed: "left",
  },
  {
    title: "公告标题",
    dataIndex: "title",
    key: "title",
    align: "center",
  },

  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "创建人",
    dataIndex: "createByName",
    key: "createByName",
    align: "center",
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
    key: "updateTime",
    align: "center",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center",
    width: 150,
    fixed: "right",
  },
]);
const resetData = () => {
  Object.assign(currentRow, {
    id: "",
    title: "",
    content: "",
    status: "",
    createByName: "",
    updateTime: "",
    createTime: "",
  });
};
const onOk = (flag: boolean) => {
  resetData();
  if (!flag) {
    visibleEdit.value = false;
  } else {
    visibleAdd.value = false;
  }
};
const onDelConfirm = () => {
  console.log("onDelConfirm");
};
const openEditDialog = (row: any) => {
  Object.assign(currentRow, row);
  visibleEdit.value = true;
};
</script>
<style lang="scss" scoped>
.noticeList {
}
</style>
