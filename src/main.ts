import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

// svg的核心库
import { library } from '@fortawesome/fontawesome-svg-core'

// 引入所需要的图标
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// 引入fortawesome提供的支持展示Icon的组件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 添加到svg库中
library.add(faUserSecret)

const app = createApp(App)

// 将fortawesome提供的组件注册为全局组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
