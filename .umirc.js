
// ref: https://umijs.org/config/

const path = require('path');


export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'yixuan-umi',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],'umi-plugin-gh-pages',
  ],
  base: '/umi-course/',
  publicPath: '/umi-course/',
  // "proxy": {
  //   "/api": {                                       //---step1 设置了需要代理的请求头，比如这里定义了 /api ，当你访问如 /api/abc 这样子的请求，就会触发代理
  //     "target": "https://pvp.qq.com/web201605/js/", //---step2 设置代理的目标，即真实的服务器地址
  //     "changeOrigin": true,                         //---step3 设置是否跨域请求资源
  //     "pathRewrite": { "^/api" : "" }               //---step4 表示是否重写请求地址，比如这里的配置，就是把 /api 替换成空字符
  //   }
  // }
  alias: {
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
  },
}
