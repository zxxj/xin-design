import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Xin Design',
  // description: '',
  vite: {
    plugins: [vueJsx()]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Baisc 基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button.md' },
          { text: 'Icon 图标', link: '/components/icon.md' }
        ]
      },
      {
        text: 'Data 数据展示',
        items: [{ text: 'Collapse 折叠面板', link: '/components/collapse.md' }]
      },
      {
        text: 'XinDesign设计与实现',
        items: [
          { text: '色彩系统', link: '/note/SystemColor.md' },
          { text: 'Button 按钮', link: '/note/Button.md' },
          { text: 'Collapse 折叠面板', link: '/note/Collapse.md' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
