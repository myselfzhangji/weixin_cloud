// pages/photo/photo.js
/* 从我们的云数据库中获取信息，
 * 我们之前把信息存在了userInfo中
 * 照片存在了photos中
 */
const db = wx.cloud.database()
const photos = db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /* 生命周期函数--监听页面加载
   * 这里的参数options是如何传递的呢?
   * 我们在编译中定义了Photo Mode，然后里面的启动参数就是id
   */
  onLoad: function (options) {
    //console.log('123', options.id)
    photos.doc(options.id).get({
      success: res =>{
        console.log(res.data)
        this.setData({
          photo:res.data.image,
          id: options.id
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