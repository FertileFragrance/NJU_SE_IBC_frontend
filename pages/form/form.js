Page({
 data:{
    array: ['广州', '深圳', '佛山', '珠海','其他'],
    
    index: 0,
    score:0,
    items: [
      { name: 'ss', value: '百度搜索' },
      { name: 'py', value: '朋友介绍', checked: 'true' },
      { name: 'gz', value: '公众号推送' },
     
    ]
 },
 showtap(){
   wx.showToast({
     title: '提交成功',
     icon: 'success',
     duration: 2000
   })

 },
 bindPickerChange:function(e){
   this.setData({ index: e.detail.value});
 },
 bindSliderChange: function (e) {
  
   this.setData({ score: e.detail.value });
 },
 formSubmit:function(e){
   var formdata = e.detail.value
   formdata.index=this.data.index
   formdata.score = this.data.score
   console.log('发送事件，携带数据为：', formdata)
 }
})