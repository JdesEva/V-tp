// 去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  // 基本路径(开发路径和打包路径)
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: process.env.outputDir,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: undefined,
  // use the full build with in-browser compiler?
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {}, //  将接收ChainableConfig由webpack-chain提供支持的实例的函数。
  configureWebpack: config => { // 配置去console和Gzip压缩
    let plugins = [
      new UglifyJsPlugin({ // 删除生产环境的console.log
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new CompressionWebpackPlugin({ // 开启gzip
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
  // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {

      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    name: 'V-try'
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5200,
    https: false,
    hotOnly: true,
    before: app => {},
    proxy: { // 设置代理
      '/api': {
        target: 'http://localhost',
        ws: true, //
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 本身的接口地址没有 '/api' 这种通用前缀，所以要去掉
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {

  }
}
