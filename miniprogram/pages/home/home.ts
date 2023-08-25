// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   * 跳转视图
   */
  goView() {
    wx.navigateTo({
      url: '/pages/home/lean_view/view_layout/layout'
    })
  },
  /**
   * 跳转轮播图
   */
  goBanner() {
    wx.navigateTo({
      url: '/pages/home/lean_view/view_banner/banner'
    })
  },
  /**
   * 跳转列表
   */
  goList() {
    wx.navigateTo({
      url: '/pages/home/lean_view/view_list/list'
    })
  },
  /**
   * 跳转控件
   */
  goWidget() {
    wx.navigateTo({
      url: '/pages/home/lean_view/view_widget/widget'
    })
  },
  /**
   * 弹窗
   */
  showDialog() {
    wx.showModal({
      title: '提示', content: '确定要取消订单吗?', success(res) {
        if (res.confirm) {
          wx.showToast({ title: '成功', duration: 2000, icon: 'success' })
        } else if (res.cancel) {
          wx.showToast({ title: '取消', duration: 2000, icon: "error" })
        }
      }
    })
  },
  /**
   * 跳转视频
   */
  goVideo(){
    wx.navigateTo({
      url: '/pages/home/lean_view/view_video/video'
    })
  },
  /**
   * 跳转直播
   */
  goLive(){
    wx.navigateTo({
      url: '/pages/home/lean_view/view_live/live'
    })
  }
})