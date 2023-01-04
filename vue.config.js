const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/d/'
  : '/'
})
