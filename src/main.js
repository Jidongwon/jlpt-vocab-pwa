import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import './styles/mobile.css';

createApp(App).use(router).mount('#app');
