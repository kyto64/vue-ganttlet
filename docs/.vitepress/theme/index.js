import DefaultTheme from 'vitepress/theme'
import './custom.css'
import {ganttlet} from "../../../src/vue-ganttlet"

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.use(ganttlet)

    }
}