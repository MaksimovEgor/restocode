import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from './pages/Login/index.vue';
import Register from './pages/Register/index.vue';
import Application from './pages/Application/index.vue';
import { account } from './api/index';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const routes: RouteRecordRaw[] = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/app', component: Application, name: 'application' },
];
const router = createRouter({ history: createWebHashHistory(), routes });

const accountRoutes = ['login', 'register'];

router.beforeEach(async (to, from, next) => {
  const name = to.name as string;

  try {
    const session = await account.getSession('current');
    to.meta.session = session;

    if (accountRoutes.includes(name)) {
      return next({ name: 'application' });
    }
  } catch {
    if (!accountRoutes.includes(name)) {
      return next({ name: 'login' });
    }
  }

  next();
});

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(PrimeVue);
app.use(pinia);
app.component('Button', Button).component('Password', Password).component('InputText', InputText);
app.mount('#app');
