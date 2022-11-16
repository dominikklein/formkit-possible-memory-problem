import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import { createRouter, createWebHistory } from 'vue-router';
import {
  plugin as formKitPlugin,
  defaultConfig as formKitDefaultConfig,
} from '@formkit/vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(formKitPlugin, formKitDefaultConfig);

app.use(router);

app.mount('#app');
