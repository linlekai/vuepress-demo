# vuepress-demo

开箱即用的vuepress
用于创建文档,支持展示vue组件和代码

```bash
vuepress-demo
├─README.md
├─package.json
├─yarn.lock
├─docs
|  ├─README.md
|  ├─document
|  |    └README.md
|  ├─components
|  |     ├─README.md
|  |     ├─sidebar.js
|  |     ├─pages  组件文档
|  |     |   ├─Button.md 
|  |     |   └Slider.md
|  ├─.vuepress
|  |     ├─clientAppEnhance.js  库导入
|  |     ├─config.js  全局配置
|  |     ├─public  静态文件
|  |     ├─config
|  |     |   ├─navbar.js
|  |     |   └sidebar.js
|  |     ├─components  存放vue组件
|  |     |     ├─Button.vue
|  |     |     └slider.vue
```

###运行
<code>npm run docs:dev</code>

清除缓存并运行
<code>npm run docs:dev-cc</code>


###打包
<code>npm run docs:build</code>

