import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// 1
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/xin-design',
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
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button.md' }
    ],

    sidebar: [
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
        text: 'Feedback 反馈组件',
        items: [{ text: 'Tooltip 文字提示', link: '/components/tooltip.md' }]
      },
      {
        text: 'Navigation 导航',
        items: [{ text: 'Dropdown 下拉菜单', link: '/components/dropdown.md' }]
      },
      {
        text: 'XinDesign设计与实现',
        items: [
          { text: '色彩系统', link: '/note/SystemColor.md' },
          { text: 'Button 按钮', link: '/note/Button.md' },
          { text: 'Collapse 折叠面板', link: '/note/Collapse.md' },
          { text: 'Icon 图标', link: '/note/Icon.md' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zxxj/xin-design' }]
  }
})
