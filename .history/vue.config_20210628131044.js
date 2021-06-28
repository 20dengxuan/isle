module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.isle.org.cn/',
        changeOrigin: true,
      },
      '/web': {
        target: 'https://m.isle.org.cn/',
        changeOrigin: true,
      },
      // linkedin 授权API地址
      '/linkedin': {
        target: 'https://api.linkedin.com',
        pathRewrite: { '^/linkedin': '/v2' },
      },
    },
  },
};
