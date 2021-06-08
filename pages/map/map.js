// pages/map/map.js
// var latitude=44.2;
// var longitude=130.4;
      
Page({

// trySearch:function (latitude,longitude) {
//   wx.openLocation({
//     latitude: 34.2,
//     longitude: 120,
//   })
  
//},
  /**
   * 页面的初始数据
   */
  data: {

        polyline: [{
          points: [{//标点的经纬度
              longitude: 121.44577861,
              latitude: 37.48205260
            },{
              longitude:101,
              latitude:7
            }
          ],
          color: "#33c9FFDD",
          width: 7,
          // dottedLine: true
        }],
        markers: [{
          id:0,
          name:"hahaha",
          iconPath:"../../img/1.png",
          title:"this is title",
          longitude: 121.44577861,
          latitude: 37.48205260,
          width:50,
          height:50
            
        }]
        
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    // qqmapsdk=new QQMapWX({
    //   key:'TD6BZ-PEBCR-PZVWD-WUGZD-OIG42-L5F5U'
    // });
    // this.mapCtx=wx.createMapContext('tiangeMap' )

    let that = this
    wx.request({
      url : '',//todo here
      success:function(res){
        that.setData({
          points: res.data,
        })
        console.log(that.data)
      },
      fail:function(res){
        console.log('map get points error')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})