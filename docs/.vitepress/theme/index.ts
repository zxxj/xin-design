import DefaultTheme from 'vitepress/theme'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import '../../../src/styles/index.css'
import './custom.css'
// svg的核心库
import { library } from '@fortawesome/fontawesome-svg-core'

// 引入所有的图标
import { fas } from '@fortawesome/free-solid-svg-icons'

// 添加到svg库中
library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app }) {
    app.component('demo-preview', ElementPlusContainer)
  }
}
