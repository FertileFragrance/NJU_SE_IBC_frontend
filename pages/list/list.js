
//获取应用实例
const app = getApp()
Page({
  data: {
    newsList: []
  },

  onLoad: function(options){
    let that = this
    wx.request({
      url : 'http://127.0.0.1:5000/getAllNews',
      success:function(res){
        that.setData({
          newsList: res.data.res,
        })
        console.log(that.data)
      },
      fail:function(res){
        console.log('news load error')
      }
    })
  }
})
