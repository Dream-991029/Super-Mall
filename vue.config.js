module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue默认给我们已经配置好了src目录别名为@
        // 'src': '@',
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common'
      }
    }
  }
}
