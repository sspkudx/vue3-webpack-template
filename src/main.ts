import { createApp } from 'vue';
import { installPlugins } from '@/plugins';
import App from './App.vue';
import '@/assets/_global-vars.scss';

// mount app
installPlugins(createApp(App)).mount('#app');
