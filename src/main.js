import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import ProgressSpinner from 'primevue/progressspinner';

import '@/scss/main';

const app = createApp(App);
app.use(store).use(router).use(PrimeVue);

// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Menubar', Menubar);
// eslint-disable-next-line vue/multi-word-component-names
app.component('ProgressSpinner', ProgressSpinner);

app.mount('#app');