import DefaultTheme from 'vitepress/theme'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import '../../../src/styles/index.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app }) {
    app.component('demo-preview', ElementPlusContainer)
  }
}
