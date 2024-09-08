import { App } from 'vue';
import { Tooltip, TSToastService, LibConfig, TSi18n } from 'tsv2-library';

import router from '@/router';
import Presets from 'tsv2-library/src/presets';

import '@/assets/css/main.css';

const registerComponents = (app: App): void => {
  app.use(LibConfig, {
    unstyled: true,
    pt: Presets,
  });

  app.use(router);
  app.use(TSi18n);
  app.use(TSToastService);

  app.directive('Tooltip', Tooltip);
};

export default registerComponents;
