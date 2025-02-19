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
      <template v-if="column.key === 'status'">
        <a-tag :bordered="false" :color="tagColors[record.status]">{{
          statusType[record.status]
        }}</a-tag>
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
    <UserEdit :data="currentRow" />
  </a-modal>
  <!-- 新增弹窗 -->
  <a-modal
    :width="600"
    v-model:open="visibleAdd"
    title="添加公告"
    @ok="onOk(true)"
  >
    <UserAdd :data="currentRow" />
  </a-modal>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import UserEdit from "./UserEdit.vue";
import UserAdd from "./UserAdd.vue";
const visibleEdit = ref(false);
const visibleAdd = ref(false);
const currentRow = reactive({
  userName: "",
  userPassword: "",
  school: "",
  emial: "",
});

const statusType: any = {
  1: "正常",
  2: "禁用",
};
const tagColors: any = {
  1: "success",
  2: "error",
};
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10,
});
const dataSource = ref<any[]>([
  {
    id: 1,
    userName: "管理员",
    userAccount: "admin",
    status: 1,
    userEmail: "admin@example.com",
    userRole: "管理员",
    updateTime: "2023-07-01 12:00:00",
    createTime: "2023-07-01 12:00:00",
  },
  {
    id: 2,
    userName: "张三",
    userAccount: "zhangsan",
    status: 2,
    userRole: "管理员",
    updateTime: "2023-07-01 12:00:00",
    createTime: "2023-07-01 12:00:00",
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
    title: "昵称",
    dataIndex: "userName",
    key: "userName",
    align: "center",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
    key: "userAccount",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "角色",
    dataIndex: "userRole",
    key: "userRole",
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
    userName: "",
    userPassword: "",
    school: "",
    emial: "",
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
.userList {
}
</style>
