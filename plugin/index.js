import Vue from 'vue';
import toast from './toast.vue';
function create(component) {
  return props => {
    const vm = new Vue({
      render(h) {
        return h(component, { props });
      }
    }).$mount();
    const child = vm.$children[0];

    // 隐藏
    let autoClose = props.autoClose !== undefined ? props.autoClose : true;
    let timeout = props.timeout !== undefined ? props.timeout : 1500;
    child.remove = function() {
      return new Promise((resolve, reject) => {
        if (autoClose) {
          let toastTime = setTimeout(() => {
            try {
              document.body.removeChild(vm.$el);
              vm.$destroy();
              resolve();
            } catch (e) {
              reject(e);
            } finally {
              clearTimeout(toastTime);
            }
          }, 300);
        } else {
          try {
            document.body.removeChild(vm.$el);
            vm.$destroy();
            resolve();
          } catch (e) {
            reject(e);
          }
        }
      });
    };
    // 显示
    child.show = function() {
      document.body.appendChild(vm.$el);
      // console.log(document.body.contains(vm.$el));
      if (autoClose) {
        return new Promise(resolve => {
          const showTime = setTimeout(() => {
            child.isShow = false;
            clearTimeout(showTime);
            resolve(this.remove());
          }, timeout);
        });
      } else {
        return Promise.resolve();
      }
    };

    return child;
  };
}

export default {
  install() {
    Object.defineProperty(Vue.prototype, '$toast', {
      get() {
        return create(toast);
      }
    });
  }
};
