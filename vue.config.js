module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': ['./src/theme']
      }
    }
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: false,
      theme: false
    }
  },

  devServer: {
    proxy: {
      "/api": {
        target: "https://vr.congrongtech.cn/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "https://vr.congrongtech.cn/"
        }
      }
    }
  },

  publicPath: '/subscribe/'
};
