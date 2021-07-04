<template>
  <div class="docker">
    <div
      :class="['docker__item', index === activeIndex ? 'docker__item--active' : '']"
      v-for="(tag, index) in tags"
      :key="index"
      @click="changeTag(index)"
    >
      <div class="iconfont docker__item__font" v-html="tag.icon"></div>
      <div class="docker__item__desc">{{ tag.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface tag {
  icon: string | undefined;
  label: string | undefined;
}
export default defineComponent({
  name: "Docker",
  setup() {
    let state = reactive({
      activeIndex: 0,
    });
    const changeTag = (index: number): void => {
      state.activeIndex = index;
    };
    const { activeIndex } = toRefs(state);
    const tags: tag[] = [
      { icon: "&#xe89c;", label: "首页" },
      { icon: "&#xe6fc;", label: "购物车" },
      { icon: "&#xe643;", label: "订单" },
      { icon: "&#xe601;", label: "我的" },
    ];
    return {
      tags,
      activeIndex,
      changeTag,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.docker {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  padding: 0.06rem 0.18rem;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  border-top: 0.01rem solid @content-color-light-white;
  &__item {
    flex: 1;
    &__font {
      font-size: 0.2rem;
      color: @content-color-dark;
      line-height: 0.2rem;
    }
    &__desc {
      font-size: 0.2rem;
      line-height: 0.2rem;
      transform: scale(0.5);
      transform-origin: top center;
      color: @content-color-dark;
      margin-top: 0.03rem;
    }
  }
  &__item--active {
    .docker__item__font,
    .docker__item__desc {
      color: @content-color-blue;
    }
  }
}
</style>
