const proxy = require('http-proxy-middleware');

/**
 * 用法见 http-proxy-middleware文档：
 * 来源：[https://github.com/chimurai/http-proxy-middleware]
 * 因为新版create-react-app不能再package.json中使用对象方式进行复杂的代理参数， 
 * 故只能在src/setupProxy进行复杂配置
 * 来源见：[https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually]
 * 
 * 打包时该文件不会生效
 */
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://192.168.0.120:3001/', // 此处写上开发环境代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};
