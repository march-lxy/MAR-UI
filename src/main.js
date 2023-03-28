import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import MARUI from "../packages/index.ts";
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';
import '../node_modules/mar-v3-ui/dist/style.css'

const app = createApp(App)
app.use(MARUI).use(router).mount("#app");
app.directive('highlight',(el) =>{
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
})
