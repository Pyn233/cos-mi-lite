// pages/cart/cart.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      cart_have: [],
      allSelected: false,
      totalPrice: "0",
      cat_selectDood_num: "0",
      toPay: false
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function() {
     
   },
   toLndex: function() {
      wx.switchTab({
         url: '../index/index',
      })
   },
   toChooseOne: function(e) {
      let cart_have = this.data.cart_have;
      const index = e.currentTarget.dataset.index;
      const selectedOne = cart_have[index].selectedOne;
      cart_have[index].selectedOne = !selectedOne;
      this.setData({
         cart_have: cart_have,
      });
      this.getTotalPrice();
      this.selectedStatus();
      wx.setStorageSync('cart_data', cart_have);
   },
   toAllchoose: function() {
      let allSelected = this.data.allSelected;
      let cart_have = this.data.cart_have;
      let toPay = this.data.toPay;
      allSelected = !allSelected;
      //保持 结算与全选 相同
      toPay = allSelected; 
      for (let i = 0; i < cart_have.length; i++) {
         cart_have[i].selectedOne = allSelected
      };
      this.setData({
         cart_have: cart_have,
         allSelected: allSelected,
         toPay
      })
      this.getTotalPrice();
      wx.setStorageSync('cart_data', cart_have);
   },
   getTotalPrice: function() {
      let cart_have = this.data.cart_have;
      let totalPrice=0;
      let cat_selectDood_num=0;
      for (let i = 0; i < cart_have.length;i++){
         if (cart_have[i].selectedOne){
            totalPrice += parseInt(cart_have[i].selectNum) * parseInt(cart_have[i].price);
            cat_selectDood_num += parseInt(cart_have[i].selectNum)
         }
      }
      this.setData({
         totalPrice: totalPrice,
         cat_selectDood_num
      });
   },
   selectedStatus: function(){
      let cart_have = this.data.cart_have;
      let allSelected = this.data.allSelected;
      let toPay = this.data.toPay;
      //计算全选
      const symbol = cart_have.some(item => {
         return item.selectedOne === false;
      });
      if (symbol) {
         allSelected = false;
      } else {
         allSelected = true;
      }
      //结算 只要有一个都亮
      const symbolT = cart_have.some(item => {
         return item.selectedOne === true;
      });
      if (symbolT) {
         toPay = true;
      } else {
         toPay = false;
      }
      this.setData({
         allSelected: allSelected,
         toPay
      });
   },
   modifyC: function(e){
      const cartindex = e.currentTarget.dataset.cartindex;
      console.log(cartindex);
      wx.navigateTo({
         url: `./modifyCart/modifyCart?cartindex=${cartindex}`,
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
      const cart_data = wx.getStorageSync('cart_data');
      let cart_have = this.data.cart_have;
      cart_have = cart_data;
      this.setData({
         cart_have: cart_have,
      });
      this.getTotalPrice();
      this.selectedStatus();
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