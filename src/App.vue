<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$toast({
      text: '这是一个toast',
      ownStyle: { 'border-radius': '6px' },
      autoClose: true,
      timeout: 3500
    })
      .show()
      .then(() => {
        console.log('弹窗关闭');
      });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
