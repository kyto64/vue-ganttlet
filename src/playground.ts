import { createApp } from "vue"
import Playground from "./GanttPlayground.vue"
import ganttlet from "./vue-ganttlet.js"

createApp(Playground).use(ganttlet).mount("#app")
