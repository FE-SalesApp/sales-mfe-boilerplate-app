/**
 * This entry file is for vite running projet as standalone for development and cypress testing purpose
 */

import { createApp } from 'vue';
import { registerComponents } from '@/utils';
import 'tsv2-library/dist/style.css';

import App from './App.vue';

const app = createApp(App);
registerComponents(app);

app.mount('#app');
