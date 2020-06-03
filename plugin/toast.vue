<template>
  <div class="toast">
    <transition name="toast" v-if="transition">
      <div class="toast_box" :style="ownStyle" v-if="isShow">{{ text }}</div>
    </transition>
    <div class="toast_box" :style="ownStyle" v-else>{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      isShow: false
    };
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    ownStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    transition: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.isShow = true;
  }
};
</script>
<style lang="scss" scoped>
@function vw($x, $designWidth: 750) {
  @return $x / $designWidth * 100 + vw;
}
.toast {
  margin: auto;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: vw(30);
  z-index: 1000;
  pointer-events: none;
  .toast_box {
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
}
.toast-enter,
.toast-leave-to {
  opacity: 0;
}
.toast-enter-to {
  opacity: 1;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease-out;
}
</style>
