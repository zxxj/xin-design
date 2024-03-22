import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

// svg的核心库
import { library } from '@fortawesome/fontawesome-svg-core'

// 引入所有的图标
import { fas } from '@fortawesome/free-solid-svg-icons'

// 添加到svg库中
library.add(fas)

const app = createApp(App)

app.mount('#app')
