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

// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Menubar', Menubar);
// eslint-disable-next-line vue/multi-word-component-names
app.component('ProgressSpinner', ProgressSpinner);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Chart', Chart);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Calendar', Calendar);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Checkbox', Checkbox);

app.mount('#app');