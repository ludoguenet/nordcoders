import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

const app = createApp(App);

app.use(router);
app.use(VueHighlightJS);

app.mount('#app');
