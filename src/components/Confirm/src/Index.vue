<template>
  <div class="model-container" ref="modal">
    <div class="confirm">
      <div class="confirm__header">{{ title }}</div>
      <div class="confirm__content" v-html="content"></div>
      <div class="confirm__footer">
        <button class="confirm__footer__btn default" @click.prevent.stop="handleCancel">{{ cancelText }}</button>
        <button class="confirm__footer__btn primary" @click.prevent.stop="handleOk">{{ okText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

const propType = {
  title: {
    type: String as PropType<string>,
    default: "",
  },
  ok: {
    type: Function as PropType<() => void>,
  },
  content: {
    type: String as PropType<string>,
    default: "",
  },
  cancel: {
    type: Function as PropType<() => void>,
  },
  okText: {
    type: String as PropType<string>,
    default: "确定",
  },
  cancelText: {
    type: String as PropType<string>,
    default: "取消",
  },
};

export default defineComponent({
  props: propType,
  setup(props) {
    const modal = ref(null);
    const removeModal = () => {
      modal.value && document.body.removeChild((modal.value as any).parentNode);
    };
    const handleOk = () => {
      removeModal();
      props.ok && props.ok();
    };
    const handleCancel = () => {
      removeModal();
      props.cancel && props.cancel();
    };

    return {
      modal,
      handleOk,
      handleCancel,
    };
  },
});
</script>

<style lang="less" scoped>
.model-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.16rem;
}
.confirm {
  background-color: #fff;
  border-radius: 0.04rem;
  padding: 0.24rem 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 999999999;
  &__header {
    font-size: 0.18rem;
    color: #333;
    margin-bottom: 0.08rem;
  }
  &__content {
    font-size: 0.14rem;
    color: #666;
    margin-bottom: 0.24rem;
  }
  &__footer {
    &__btn {
      border-radius: 0.16rem;
      padding: 0.06rem 0.12rem;
      &.default {
        border: 0.01rem solid #4fb0f9;
        color: #4fb0f9;
        margin-right: 0.24rem;
        background-color: #fff;
      }
      &.primary {
        border: 0.01rem solid #4fb0f9;
        background-color: #4fb0f9;
        color: #fff;
      }
    }
  }
}
</style>
