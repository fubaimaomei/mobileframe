# mobileframe
基于vue全家桶搭建的移动端框架,本地使用vue-cli3.x,vue ui管理项目配置依赖等。

### 支持:
- px换算rem
- vant组件库
- cube UI组件库

### usage:

`git clone https://github.com/fubaimaomei/mobileframe.git`

### declare:

- `page` css类 管理页面滚动区域，同级节点可作为页面固定定位元素，使用 `absolute` 解决 `fixed` 抖动问题
- `spinner` 组件作为路由加载提示，具体可以查看 `components/Spinner.vue`
- `page` 目录下的组件为路由级组件
- `components` 目录下的组件为页面公共组件
- `utils.js` 基于`loadsh`提供一些简单的数据格式化函数 
- `rem rootUtil`  为 37.5,这是为了适配 vant 组件让它正常显示，因此，**你在度量设计稿的尺寸时需要 / 2 来编写元素尺寸**
