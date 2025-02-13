<template>
  <div class="problems">
    <a-row class="top" justify="space-between">
      <a-col :md="7">
        <a-typography-title :level="3">{{
          `${question.id}.${question.title}`
        }}</a-typography-title>
        <a-space>
          <span class="text">出题人：{{ question.createBy.userName }}</span>
          <a-tag :bordered="false" color="volcano">{{
            question.difficulty
          }}</a-tag>
          <a-tag
            :bordered="false"
            color="orange"
            v-for="(tag, index) in question.tags"
            :key="index"
            >{{ tag }}</a-tag
          >
        </a-space>
      </a-col>
      <a-col :span="4">
        <a-space>
          <a-statistic
            title="通过次数"
            :value="question.resolveNum"
            style="margin-right: 50px"
          />
          <a-statistic title="提交次数" :value="question.submitNum" />
        </a-space>
      </a-col>
    </a-row>
    <a-flex gap="small" class="content">
      <a-card class="card extra">
        <a-tabs v-model:activeKey="currentQuestionTabKey">
          <a-tab-pane :key="questionTabKeys[0]" tab="题目详情">
            <OJQuestionDetail :question="question" />
          </a-tab-pane>
          <a-tab-pane :key="questionTabKeys[1]" tab="提交记录"></a-tab-pane>
          <a-tab-pane :key="questionTabKeys[2]" tab="讨论"></a-tab-pane>
        </a-tabs>
      </a-card>
      <a-card class="card" style="width: 50%">
        <CodeEditor
          :handleChange="handleChange"
          :value="answer"
          :style="{ height: showControl ? '60vh' : '70vh' }"
        />
        <div v-show="showControl">
          <!-- <a-divider></a-divider> -->
          <a-tabs v-model:activeKey="currentResultTabKey">
            <a-tab-pane
              :key="resultTabKeys[0]"
              tab="测试用例"
              style="height: 100px; overflow: auto"
            >
            </a-tab-pane>
            <a-tab-pane :key="resultTabKeys[1]" tab="执行结果">
              <a-typography-text style="font-size: 20px" content="测试结果:" />
              <div v-show="!answerType">
                <a-space>
                  <a-typography-text
                    style="font-size: 18px; color: #25b425"
                    content="通过"
                  />
                  <a-typography-text
                    style="font-size: 14px; color: rgb(140 144 151)"
                    content="执行用时：1ms"
                  />
                </a-space>
              </div>
              <div v-show="answerType">
                <a-card class="errorCard">
                  <a-typography-text
                    style="font-size: 14px; color: red"
                    content="编译错误，Line 5: error: missing return statement"
                  />
                </a-card>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-card>
    </a-flex>
    <a-row class="bottom" justify="space-between">
      <a-col :md="5">
        <a-space>
          <a-button> 题目列表 </a-button>
          <a-button> 上一题 </a-button>
          <a-button> 下一题 </a-button>
        </a-space>
      </a-col>
      <a-col :md="5">
        <a-space>
          <a-button @click="showControl = !showControl"> 控制台 </a-button>
          <a-button class="runBtn" :icon="runBtn"> 运行 </a-button>
          <a-button class="submitBtn" :icon="submitBtn"> 提交 </a-button>
        </a-space>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, h, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { ICONFONT_URL } from "../../constants/common.ts";
//@ts-ignore
import CodeEditor from "@/components/CodeEditor.vue";
//@ts-ignore
import OJQuestionDetail from "@/components/OJQuestionDetail.vue";
const answerType = ref(true);
const questionTabKeys = ["questionDetail", "submitRecord", "discuss"];
const resultTabKeys = ["testCase", "result"];

const IconFont = createFromIconfontCN({
  scriptUrl: ICONFONT_URL,
});
const showControl = ref(false);
const currentQuestionTabKey = ref(questionTabKeys[0]);
const currentResultTabKey = ref(resultTabKeys[0]);

const answer = ref("");
const question = reactive({
  id: 91,
  title: "解码方法",
  description:
    "给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于<b> x </b>的节点都出现在 大于或等于 x 的节点之前。你应当 保留 两个分区中每个节点的初始相对位置",
  tags: ["数组", "递归"],
  difficulty: "中等",
  resolveNum: 12222,
  submitNum: 12222,
  createBy: {
    userName: "admin",
  },
  example: [
    {
      input: "[1,4,3,2,5,2] 3",
      output: "[1,2,2,4,3,5]",
    },
    {
      input: "[2,1] 5",
      output: "[1,2]",
    },
  ],
  code: `class Solution {
    public ListNode partition(ListNode head, int x) {
       ListNode small = new ListNode(0);
    }
  }`,
  tips: [
    "链表中节点的数目在范围 [0, 200] 内",
    "-100 <= Node.val <= 100",
    "1 <= x <= 100",
  ],
});
const runBtn = h(IconFont, {
  style: {
    fontSize: "1rem",
  },
  type: "icon-caozuo-yunhang",
});
const submitBtn = h(IconFont, {
  style: {
    fontSize: "1rem",
  },
  type: "icon-tijiao",
});
const route = useRoute();
const handleChange = (val: string) => {
  answer.value = val;
};
onMounted(() => {
  console.log(route.params);
});
</script>

<style lang="scss" scoped>
@import url("@/assets/style/markdownCard.scss");
.problems {
  height: 100vh;
  padding: 0.3125rem;
  box-sizing: border-box;
  background: #e5e5e5;
  .top {
    background: white;
    padding: 0.9375rem;
    box-sizing: border-box;
    margin-bottom: 5px;
    .text {
      color: #524b4b;
    }
  }
  .content {
    height: 83vh;
    .extra {
      overflow: auto;
      width: 50%;
      line-height: 30px;
    }
    .errorCard {
      background: rgba(255, 0, 0, 0.1);
    }
  }
  .bottom {
    margin-top: 5px;
    height: 70px;
    background: white;
    padding: 0.9375rem;
    box-sizing: border-box;
    .runBtn {
      border: none;
      background: #e5e5e5;
    }
    .submitBtn {
      border: none;
      background: #e5e5e5;
      color: #18b318;
    }
  }
}
</style>
