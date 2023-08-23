// pages/net/net.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    buttonEnable: true,
    resultContent:"",
    banner:{},
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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

  },
  /**
 * 请求测试
 */
  getRequest() {
    this.setData({
      isLoading:true,
      buttonEnable:false
    })
    console.log("getRequest")
    wx.request({
      url: "https://www.wanandroid.com/banner/json",
      method: "GET",
      success: (result) => {
        console.log("request success result", result)
        console.log("request success data", result.data.data)
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: 1000
        })
        this.setData({
          resultContent:result.errMsg,
          banner:result.data.data,
          isLoading:false,
          buttonEnable:true
        })
      },

      fail: ({ errMsg }) => {
        this.setData({
          resultContent:errMsg,
          banner:[],
          isLoading:false,
          buttonEnable:true
        })
        console.log("request fail", errMsg)
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: 1000
        })
      }
    })
  }
})
