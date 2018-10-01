// pages/search/search.js
import dataList from "../../../utils/goods_list.js";

Page({
  data: {
     goods_list: [],
     search_list: [],
     result_hidden: true,
     result_list_hidden: true,
     tages_hidden: false,
     inputVal: ""
  },
   getList(attr) {
      return dataList.section.filter(item => {
         return item.name.toString().toLowerCase().indexOf(attr) > -1;
      });
   },
   inputTyping: function (e) {
      wx.setStorageSync('keywords', e.detail.value);
      let search_list = this.getList(e.detail.value);
      if (e.detail.value == "") {
         search_list = [];
         this.data.result_hidden = true;
         this.data.tages_hidden = false;
      } else {
         this.data.result_hidden = false;
         this.data.tages_hidden = true;
      }
      this.setData({
         search_list,
         result_hidden: this.data.result_hidden,
         result_list_hidden: true,
         tages_hidden: this.data.tages_hidden,
         inputVal: e.detail.value
      });
   },
   clearInput: function () {
      this.setData({
         tages_hidden: false,
         result_list_hidden: true,
         inputVal: ""
      });
   },
   toSearch: function () {
      const keywords = wx.getStorageSync('keywords');
      wx.showLoading({
         title: '请稍等',
      });
      setTimeout(() => {
         this.setData({
            goods_list: this.getList(keywords),
            result_hidden: true,
            result_list_hidden: false,
         });
         wx.hideLoading();
      }, 500);
   },
   showItemDetail: function(e){
      const name = e.currentTarget.dataset.name.toLowerCase(); 
      wx.setStorageSync('keywords', name);
      wx.showLoading({
         title: '请稍等',
      })
      setTimeout(() => {
         wx.hideLoading()
         this.setData({
            goods_list: this.getList(name),
            result_hidden: true,
            result_list_hidden: false,
            inputVal: name
         });
      }, 500)
   },
   showDetail: function(){

   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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