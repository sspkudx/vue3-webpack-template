import { createApp } from 'vue';
import { installPlugins } from '@/plugins';
import App from './App.vue';
import '@/assets/_global-conf.scss';

/** @description main function to handle app */
const main = () => {
    const vueApp = createApp(App);
    // mount app
    return installPlugins(vueApp).mount('#app');
};

// run the main function
main();
