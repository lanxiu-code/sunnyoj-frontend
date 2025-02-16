<template>
  <a-card :bordered="false" :class="{ card: props.card }">
    <MdPreview
      :modelValue="props.modelValue"
      :previewTheme="props.previewTheme"
    />
  </a-card>
</template>

<script setup lang="ts">
import { config, MdPreview, XSSPlugin } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import { onMounted, withDefaults } from "vue";
/**
 * 定义组件属性类型
 */
interface Props {
  modelValue: string;
  previewTheme?: string;
  card?: boolean;
  handleChange?: (v: string) => void;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => "",
  previewTheme: () => "cyanosis",
  card: () => false,
  handleChange: (v: string) => {
    console.log(v);
  },
});
onMounted(async () => {
  config({
    markdownItPlugins(plugins) {
      return [
        ...plugins,
        {
          type: "xss",
          plugin: XSSPlugin,
          options: {},
        },
      ];
    },
  });
});
</script>

<style lang="scss" scoped>
.card {
  -webkit-box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
  -moz-box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
  box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
}
</style>
