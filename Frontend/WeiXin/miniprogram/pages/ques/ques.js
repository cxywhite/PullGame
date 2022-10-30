// pages/ques/ques.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no:0,
    que:'',
    score:0
  },
   answer:function(e){
  console.log(e.currentTarget.dataset.ansvalue);
  var that = this;
  if(parseInt(e.currentTarget.dataset.ansvalue)==this.data.que[this.data.no].answer){
    wx.showToast({
      title: "成功", // 提示的内容
      icon: "success", // 图标，默认success
      duration: 3000, // 提示的延迟时间，默认1500
      mask: false, // 是否显示透明蒙层，防止触摸穿透
      success: function () {
          console.log("接口调用成功的回调函数");
      },
      fail: function () {
          console.log("接口调用失败的回调函数");
      },
      complete: function () {
          console.log("接口调用结束的回调函数（调用成功、失败都会执行）");
      }
  })
  this.setData({
    score:that.data.score+1
  })
  }else{wx.showToast({
    title: "回答错误", // 提示的内容
    icon: "none", // 图标，默认success
    image: "", // 自定义图标的本地路径，image 的优先级高于 icon
    duration: 3000, // 提示的延迟时间，默认1500
    mask: false, // 是否显示透明蒙层，防止触摸穿透
    success: function () {
        console.log("接口调用成功的回调函数");
    },
    fail: function () {
        console.log("接口调用失败的回调函数");
    },
    complete: function () {
        console.log("接口调用结束的回调函数（调用成功、失败都会执行）");
    }
})

  }
  console.log(this.data.no);
  console.log(this.data.que.length);
  if(this.data.no+1<this.data.que.length){
    this.setData({
       no:that.data.no+1
    })
    console.log(this.data.no);
  }
  else{
    console.log(this.data.no);
    wx.navigateTo({
      url: '../over/over?score='+this.data.score+'&leng='+this.data.que.length,
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
var que;
var that=this;
wx.request({
  url: 'http://localhost:8080/question',
  method:'GET',
  data:{},
  success:function(res){
    console.log("返回："+JSON.stringify(res.data));
    que=res.data;
    that.setData({
      que:que
    })
  }
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})