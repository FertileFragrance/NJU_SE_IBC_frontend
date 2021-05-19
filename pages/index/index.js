//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcome to here!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    bindViewTap: function() {
    wx.navigateTo({
      url: 'pages/list/list'
    })
  },


})
