import { App } from 'vue';
import { Tooltip, ToastService, WangsVue, Preset } from 'wangsvue';

import router from '@/router';

import '@/assets/css/main.css';

const registerComponents = (app: App): void => {
  app.use(WangsVue, {
    unstyled: true,
    pt: Preset,
  });

  app.use(router);
  app.use(ToastService);

  app.directive('Tooltip', Tooltip);
};

export default registerComponents;
