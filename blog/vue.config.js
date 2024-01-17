const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dummy.restapiexample.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
