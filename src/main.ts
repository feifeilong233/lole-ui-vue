import { createApp, defineComponent, h, reactive, ref } from "vue"
// import App from "./App.vue";
import App from "./App"
import loleVue from '~/index'

const app = createApp(App)
app.use(loleVue)
app.mount("#app")
