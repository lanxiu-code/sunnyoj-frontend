<template>
  <div class="homePage">
    <a-row justify="center">
      <a-col :md="9">
        <OJNoticeCard :IconFont="IconFont" />
        <OJRecentContestCard :IconFont="IconFont" />
      </a-col>
      <a-col :md="5">
        <OJRecentUpdateCard :IconFont="IconFont" />
        <OJFindCard :IconFont="IconFont" />
        <OJFriendshipLinkCard :IconFont="IconFont" />
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import OJNoticeCard from "../components/OJNoticeCard.vue";
import OJFriendshipLinkCard from "../components/OJFriendshipLinkCard.vue";
import OJRecentContestCard from "../components/OJRecentContestCard.vue";
import OJRecentUpdateCard from "../components/OJRecentUpdateCard.vue";
import OJFindCard from "../components/OJFindCard.vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { ICONFONT_URL } from "../constants/common";
const IconFont = createFromIconfontCN({
  scriptUrl: ICONFONT_URL,
});
</script>

<style lang="scss" scoped>
// @import url("@/assets/style/card.scss");
.homePage {
}
</style>
