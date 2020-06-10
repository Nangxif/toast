# toast

### 版本说明

- 0.1.2    支持多行文字
- 0.1.4    弹窗出现期间无法进行其他操作

### 使用方式

```javascript
//安装
npm i @nangxif/toast
yarn add @nangxif/toast

//引入
import toast from '@nangxif/toast';
Vue.use(toast);

//使用
//创建toast
const toast = this.$toast({
	text: '这是一个toast',
	ownStyle: { 'border-radius': '6px' },
	autoClose: true,
	timeout: 3500,
	transition: true
})

//显示
toast.show().then(()=>{
	//todo
})
//若autoClose为false，则需要手动隐藏
toast.remove().then(()=>{
	//todo
})

```

### 参数说明

| 参数       | 含义                                                   | 默认值 |
| ---------- | ------------------------------------------------------ | ------ |
| text       | toast显示的内容                                        | ''     |
| ownStyle   | toast的样式对象                                        | {}     |
| autoClose  | 是否自动关闭                                           | true   |
| timeout    | 延时多长时间关闭，若autoClose为false则此项无效，单位ms | 1500   |
| transition | 是否有过渡动画                                         | false  |

### demo

https://nangxif.github.io/toast/dist/index.html

### 官网

https://nangxif.github.io/toast/