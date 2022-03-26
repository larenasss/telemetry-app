import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import ProgressSpinner from 'primevue/progressspinner';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Chart from 'primevue/chart';

import '@/scss/main';

const app = createApp(App);
app.use(store).use(router).use(PrimeVue);

const conmonentsPrime = {
  Button,
  Menubar,
  ProgressSpinner,
  Calendar,
  Checkbox,
  Chart
};

Object.entries(conmonentsPrime).forEach(([key, value]) => {
  app.component(key, value);
});

app.mount('#app');