var app = getApp();

Page({
  data:{
    username:null
  },
  onLoad:function(options){
   
  },
  onReady:function(){
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  loginBtnClick:function (){

    // 用户名和密码验证的过程
    console.log("6666")
    console.log(this.data.username)
    app.loginData.userInfo = {username:this.data.username}
    wx.reLaunch({
      url: '../user/user',
    })
    // wx.redirectTo({url:"../user/user"})
  },
  nameInput: function (event) {
    this.setData({username:event.detail.value})
  }

})