import { createApp }  from 'vue'
import { createPinia } from 'pinia'
import App    from './App.vue'
import { router } from './app/router'
import './styles/base.css'
import './styles/highlight.css'
/* highlight.js dark theme — overridden by our highlight.css */
import 'highlight.js/styles/github-dark.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
