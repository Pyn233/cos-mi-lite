// pages/cart/modifyCart/modifyCart.js
Page({

   data: {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      index: 0,
      name:"",
      memory:"",
      colorList:"",
      cIndex:"",
      price:"",
      cartindex:"",
      cart_data:[]
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      const cartindex = options.cartindex;
      const cart_data = wx.getStorageSync('cart_data');
      const item = cart_data[cartindex];
      this.setData({
         index: item.selectNum - 1,
         name: item.name,
         memory: item.memory,
         colorList: item.colorList,
         cIndex: item.cIndex,
         price: item.price,
         cartindex,
         cart_data
      })
   },
   bindDetail: function(e) {
      const cIndex = e.currentTarget.dataset.index;
      let cart_data = this.data.cart_data;
      const cartindex = this.data.cartindex;
      const colorList = this.data.colorList;
      let index=this.data.index;
      cart_data[cartindex].cIndex = cIndex;
      cart_data[cartindex].color = colorList[cIndex].choose;
      cart_data[cartindex].imgSrc = colorList[cIndex].src;
      index=0;
      cart_data[cartindex].selectNum = 1;
      this.setData({
         cIndex,
         cart_data,
         index
      })    
   },
   bindPickerChange: function(e) {
      let cart_data = this.data.cart_data;
      const cartindex = this.data.cartindex;
      const array = this.data.array;
      const index = e.detail.value;
      cart_data[cartindex].selectNum = array[index];
      this.setData({
         index,
         cart_data
      })
   },
   btnT: function() {
      let cart_data = this.data.cart_data;
      wx.setStorageSync('cart_data', cart_data);
      wx.navigateBack({
         delta: 1
      });
      wx.showToast({
         title: '加载中',
         icon: 'loading',
         duration: 500
      });
   },
   btnD: function() {
      const cartindex = this.data.cartindex;
      let cart_data = this.data.cart_data;
      wx.showModal({
         // title: '弹窗标题',
         content: '您确定要删除商品吗？',
         confirmText: "确认",
         cancelText: "取消",
         success: function (res) {
            if (res.confirm) {
               cart_data.splice(cartindex, 1);
               wx.setStorageSync('cart_data', cart_data);
               wx.navigateBack({
                  delta: 1
               });
               wx.showToast({
                  title: '加载中',
                  icon: 'loading',
                  duration: 500
               });
            } 
         }
      });
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