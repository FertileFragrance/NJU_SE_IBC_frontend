//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World,niha',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserProfile')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


})