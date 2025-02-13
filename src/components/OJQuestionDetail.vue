<template>
  <div>
    <MdViewer :modelValue="props.question.description" />
    <div v-for="(item, index) in props.question.example" :key="index">
      <a-typography-text strong>{{ `示例${index + 1}:` }}</a-typography-text>
      <ul>
        <li>
          <a-typography-text strong>输入：</a-typography-text>{{ item.input }}
        </li>
        <li>
          <a-typography-text strong>输出：</a-typography-text>{{ item.output }}
        </li>
      </ul>
    </div>
    <a-typography-text strong>提示：</a-typography-text>
    <ul>
      <li v-for="(item, index) in props.question.tips" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import MdViewer from "@/components/MdViewer.vue";
interface Props {
  question: object;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
