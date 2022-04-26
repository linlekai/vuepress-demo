const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const { path} = require('@vuepress/utils')


module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/md.png',
      navbar,
      sidebar,
      sidebarDepth: 2, // 侧边栏显示2级
    },
    plugins: [
        [
          '@vuepress/plugin-register-components',
          {
            componentsDir: path.resolve(__dirname, './components')
          }
        ],
        [
            'vuepress-plugin-demo-block-vue3',
            {
              componentsDir: path.resolve(__dirname, './components')
            }
        ]
      ]
}