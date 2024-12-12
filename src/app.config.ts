export default defineAppConfig({
  pages: [
    //配置路由
    'pages/index/index',
    'pages/user/index',
    'pages/result/index',
    'pages/doQuestion/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBIT性格测试',
    navigationBarTextStyle: 'black'
  }
})
