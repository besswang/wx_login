
var app = getApp();
Page({
  data:{
    username:null
  },
  onLoad:function(options){
    if(app.loginData.userInfo){
      this.setData({username:app.loginData.userInfo.username})
    }else {
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})