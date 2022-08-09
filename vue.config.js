const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
   plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['javascript', 'css', 'html', 'typescript', 'json']
      })
    ]
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // 新增一个 ~ 指向 packages 目录, 方便示例代码中使用
    config.resolve.alias
      .set('~', path.resolve('packages'))
  }
}
