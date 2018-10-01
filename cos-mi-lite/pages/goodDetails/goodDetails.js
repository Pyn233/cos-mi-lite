// pages/goodDetails/goodDetails.js

import allData from "../../utils/goodDetailsData";

Page({
   data: {
      goodData: [],
      Hei: "",
      cat_allGood_num: "",
      chooseService: ["小米自营", "小米发货与售后","7天无理由退后"],
      navbarHidden: false
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      const id = options.id;
      const goodData = allData.data.filter(item => {
         return item.id == id;
      });
      this.setData({
         goodData: goodData[0]
      });
   },
   chooseVersion: function(e){
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
         url: `selectGood/selectGood?id=${id}`,
      })
   },
   detailsActive: function(){
      this.setData({
         navbarHidden: false
      })
   },
   paramActive: function(){
      this.setData({
         navbarHidden: true
      })
   },
   toCart:function(){
     wx.switchTab({
        url: '../cart/cart',
     })
   },
   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {
      const num = wx.getStorageSync('cat_allGood_num');
      this.setData({
         cat_allGood_num: num
      })
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})