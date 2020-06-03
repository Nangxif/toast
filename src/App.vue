<template>
  <div id="app">
    <button type="button" class="btn" @click="toast1">
      3500ms自动关闭toast
    </button>
    <button type="button" class="btn" @click="toast2">
      3500ms自动关闭有动画toast
    </button>
    <button type="button" class="btn" @click="toast3">手动关闭toast</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toast1() {
      this.$toast({
        text: '3500ms自动关闭toast',
        ownStyle: { 'border-radius': '6px' },
        autoClose: true,
        timeout: 3500
      })
        .show()
        .then(() => {
          alert('3500ms自动关闭toast已关闭');
        });
    },
    toast2() {
      this.$toast({
        text: '3500ms自动关闭有动画toast',
        ownStyle: { 'border-radius': '6px' },
        autoClose: true,
        timeout: 3500,
        transition: true
      })
        .show()
        .then(() => {
          alert('3500ms自动关闭有动画toast已关闭');
        });
    },
    toast3() {
      const toast_3 = this.$toast({
        text: '手动点击屏幕关闭toast',
        ownStyle: { 'border-radius': '6px' },
        autoClose: false
      });
      toast_3.show().then(() => {
        setTimeout(() => {
          document.body.addEventListener(
            'click',
            () => {
              toast_3.remove().then(() => {
                console.log('手动点击屏幕关闭toast已关闭');
              });
            },
            false
          );
        }, 0);
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
  .btn {
    display: block;
    border: none;
    padding: 5px 10px;
    margin: 5px;
  }
}
</style>
