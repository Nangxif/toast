<template>
  <div id="app">
    <button type="button" class="btn" @click="toast1">
      3500ms自动关闭toast
    </button>
    <h5 class="title">相应代码</h5>
    <pre class="preview">
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
    </pre>
    <button type="button" class="btn" @click="toast2">
      3500ms自动关闭有动画toast
    </button>
    <pre class="preview">
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
    </pre>
    <button type="button" class="btn" @click="toast3">手动关闭toast</button>
    <pre class="preview">
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
    </pre>
    <button type="button" class="btn" @click="toast4">
      模拟点击下载二维码
    </button>
    <pre class="preview">
  const toast_4 = this.$toast({
    text: '二维码生成中……',
    ownStyle: {
      'border-radius': '6px'
    },
    autoClose: false
  });
  toast_4.show();
  setTimeout(() => {
    toast_4.remove();
  }, 2000);
    </pre>
    <button type="button" class="btn" @click="toast5">
      长文字
    </button>
    <pre class="preview">
  this.$toast({
    text: '这里的文字太长了，导致换行显示',
    ownStyle: { 'border-radius': '6px' },
    autoClose: true,
    timeout: 3500,
    transition: true
  }).show();
    </pre>
    <button type="button" class="btn" @click="toast6">
      自定义有样式的弹窗
    </button>
    <pre class="preview">
  this.$toast({
    text: '',
    ownStyle: {
      width: '100vw',
      height: '100%',
      'max-width': '100vw',
      'background-color': 'rgba(0,0,0,0.5)',
      'background-image': `url('${require('./assets/logo.png')}')`,
      'background-repeat': 'no-repeat',
      'background-size': '60% auto',
      'background-position': '50% 40%'
    },
    autoClose: true,
    timeout: 3500,
    transition: true
  }).show();
    </pre>
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
    },
    toast4() {
      const toast_4 = this.$toast({
        text: '二维码生成中……',
        ownStyle: {
          'border-radius': '6px'
        },
        autoClose: false
      });
      toast_4.show();
      setTimeout(() => {
        toast_4.remove();
      }, 2000);
    },
    toast5() {
      this.$toast({
        text: '这里的文字太长了，导致换行显示',
        ownStyle: { 'border-radius': '6px' },
        autoClose: true,
        timeout: 3500,
        transition: true
      }).show();
    },
    toast6() {
      this.$toast({
        text: '',
        ownStyle: {
          width: '100vw',
          height: '100%',
          'max-width': '100vw',
          'background-color': 'rgba(0,0,0,0.5)',
          'background-image': `url('${require('./assets/logo.png')}')`,
          'background-repeat': 'no-repeat',
          'background-size': '60% auto',
          'background-position': '50% 40%'
        },
        autoClose: true,
        timeout: 3500,
        transition: true
      }).show();
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
  .title {
    margin: 5px;
  }
  .preview {
    box-sizing: border-box;
    padding: 5px;
    margin: 5px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 16px;
    font-family: Consolas, 'Courier New', monospace;
    background-color: #011627;
    color: #9cdcfe;
  }
  .btn {
    display: block;
    border: none;
    padding: 5px 10px;
    margin: 5px;
  }
}
</style>
