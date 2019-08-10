// pages/user/user.js
/* 从我们的云数据库中获取信息，
 * 我们之前把信息存在了userInfo中
 * 照片存在了photos中
 */
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
    })
    console.log('edf',options)
    userInfo.where({
      _openid: options.id
    }).get().then(res => {

      photos.where({
        _openid: options.id
      }).get().then(res2 => {
        console.log('edf', res2)
        this.setData({
          userInfo: res.data[0],
          photos:res2.data
        }, res => {
          wx.hideLoading()
        })
      })

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