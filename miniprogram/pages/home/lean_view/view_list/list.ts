// pages/home/lean_view/view_list/list.ts
const defaultList=["河南","河北","河流","河南","河北","河流","河南","河北","河流"]
Page({
  /**
   * 页面的初始数据
   */
  data: {
      dataList:{},
      loading:false,
      loaded:false
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

var a:boolean[]=[false,true]

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
    console.log("下拉动作2....");
     //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading(); 
    setTimeout(() => {
      console.log("获取数据成功");
      //隐藏loading提示框
      //wx.hideLoading();
      //隐藏导航栏加载动画
      wx.hideNavigationBarLoading();
      //停止下拉
      wx.stopPullDownRefresh();
      this.setData({
        dataList:defaultList
      })
    }, 500);
    //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
    // wx.showLoading({
    //   title: '刷新中...',
    // })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("上拉触底事件....");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})