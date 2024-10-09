const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    devServer: {
      port: 8080,
    },
    externals: [
      'vue',
      'single-spa',
      'single-spa-vue',
      'wangsvue',
      'vue-router',
      'axios',
    ],
  },
});
