// pages/category/category.js

import categoryList from '../../utils/categoryList.js';

Page({
   data: { 
      curNav: 'A',
      categoryList: categoryList
   },
   onReady: function () { // 生命周期函数--监听页面初次渲染完成 
      var that = this; 
      wx.getSystemInfo({
         success: function (res) {
            that.setData({
               winHeight: res.windowHeight,
            })
         }
      })
   }, 
   switchRightTab: function (e) {
      var id = e.target.id;
      this.setData({ 
         scrollTopId: id, 
         curNav: id
      })
   }
})