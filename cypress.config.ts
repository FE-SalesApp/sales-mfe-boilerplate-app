import coverage from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    CY_APP_SALES_ROLES_API: 'https://setting-role.dummy-api.com',
  },
  e2e: {
    baseUrl: 'http://localhost:9083',
    specPattern: 'cypress/e2e/**/*.cy.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      coverage(on, config);

      return config;
    },
  },
  component: {
    specPattern: 'src/**/*.cy.spec.ts',
    setupNodeEvents(on, config) {
      coverage(on, config);

      return config;
    },
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
