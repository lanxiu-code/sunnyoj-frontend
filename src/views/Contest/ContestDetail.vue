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
      <a-col :sm="24" :lg="18">
        <a-card class="card" :bordered="false">
          <a-tabs v-model:activeKey="currentTabKey">
            <a-tab-pane key="1" tab="题目列表">
              <ContestQuestionList />
            </a-tab-pane>
            <a-tab-pane key="2" tab="排行榜">
              <ContestRankList />
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
      <!-- <a-col :sm="24" :md="18" :lg="5">
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
      </a-col> -->
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContestQuestionList from "./ContestQuestionList.vue";
import ContestRankList from "./ContestRankList.vue";
const currentTabKey = ref("1");
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
