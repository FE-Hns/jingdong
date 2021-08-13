<template>
  <div class="docker">
    <div
      :class="['docker__item', index === activeIndex ? 'docker__item--active' : '']"
      v-for="(tag, index) in tags"
      :key="index"
      @click="changeTag(tag, index)"
    >
      <div class="iconfont docker__item__font" v-html="tag.icon"></div>
      <div class="docker__item__desc">{{ tag.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
interface Tag {
  icon: string | undefined;
  label: string | undefined;
  name: string | undefined;
}
export default defineComponent({
  name: "Docker",
  setup() {
    const router = useRouter();
    const store = useStore();
    const activeIndex = computed(() => {
      return store.state.activeIndex;
    });
    const changeTag = (tag: Tag, index: number): void => {
      store.commit("setActiveIndex", index);
      router.push({
        name: tag.name,
      });
    };
    const tags: Tag[] = [
      { icon: "&#xe89c;", label: "首页", name: "Home" },
      { icon: "&#xe6fc;", label: "购物车", name: "Cart" },
      { icon: "&#xe643;", label: "订单", name: "Order" },
      { icon: "&#xe601;", label: "我的", name: "User" },
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
  background-color: #fff;
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
