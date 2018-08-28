module.exports = {
  css: {
    modules: false,
    sourceMap: false,
    loaderOptions: {}
  },
  productionSourceMap: false,
  transpileDependencies: [],
  configureWebpack: {},
  devServer: {
    host: 'localhost',
    port: 2019,
    hot: true,
    hotOnly: false,
    open: true,
    https: false,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
