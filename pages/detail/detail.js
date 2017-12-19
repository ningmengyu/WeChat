// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail:"",
     id:"",
     src:"",
     text:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    console.log(that);
    wx.request({
      url: 'http://127.0.0.1/data/baozi.json',
      header: {
        "Content-Type": "application/json"
      },
      success:function(res){
       that.setData({
       detail :res.data[options.id - 1].article,
       src: res.data[options.id - 1].src,
       text: res.data[options.id - 1].text,
       })
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