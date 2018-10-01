// pages/goodDetails/selectGood/selectGood.js
import allData from "../../../utils/goodDetailsData";

Page({

   /**
    * 页面的初始数据
    */
   data: {
      goodData: [],
      vIndex: "",
      cIndex: "",
      imgSrc: "",
      memory: "",
      color: "",
      price: "",
      priceOld: "",
      selectNum: "1",
      sAble: true,
      aAble: false,
      soHave: false,
      stHave: false
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      const id = options.id;
      const goodData = allData.data.filter(item => {
         return item.id == id;
      });
      wx.setStorageSync("name", goodData[0].name);
      wx.setStorageSync("colorList", goodData[0].versionData.colorImg);
      this.setData({
         goodData: goodData[0],
         imgSrc: goodData[0].defaultData.img,
         memory: goodData[0].defaultData.memory,
         color: goodData[0].defaultData.color,
         price: goodData[0].defaultData.price[0],
         priceOld: goodData[0].defaultData.price[1],
         vIndex: goodData[0].defaultData.vIndex,
         cIndex: goodData[0].defaultData.cIndex
      });
   },
   chooseV: function(e) {
      const vIndex = e.currentTarget.dataset.index;
      const memory = e.currentTarget.dataset.memory.split(" ")[0];
      const price = e.currentTarget.dataset.price[0];
      const priceOld = e.currentTarget.dataset.price[1];
      this.setData({
         vIndex: vIndex,
         memory: memory,
         price: price,
         priceOld: priceOld
      })
      wx.setStorageSync('memory', this.data.memory);
      wx.setStorageSync('price', this.data.price);
   },
   chooseC: function(e) {
      const cIndex = e.currentTarget.dataset.index;
      const color = e.currentTarget.dataset.color;
      const imgSrc = e.currentTarget.dataset.src;
      this.setData({
         imgSrc: imgSrc,
         cIndex: cIndex,
         color: color,
      })
      wx.setStorageSync('color', this.data.color);
      wx.setStorageSync('imgSrc', this.data.imgSrc);
      wx.setStorageSync('cIndex', this.data.cIndex);
   },
   sNum: function() {
      let selectNum = this.data.selectNum;
      selectNum--;
      if (selectNum < 2) {
         this.setData({
            sAble: true,
            selectNum: 1
         });
         wx.setStorageSync('selectNum', this.data.selectNum);
         return;
      }
      this.setData({
         aAble: false,
         sAble: false,
         selectNum: selectNum
      });
      wx.setStorageSync('selectNum', this.data.selectNum);
   },
   aNum: function() {
      let selectNum = this.data.selectNum;
      selectNum++;
      if (selectNum > 9) {
         this.setData({
            aAble: true,
            selectNum: 10
         });
         wx.setStorageSync('selectNum', this.data.selectNum);
         return;
      }
      this.setData({
         sAble: false,
         aAble: false,
         selectNum: selectNum
      });
      wx.setStorageSync('selectNum', this.data.selectNum);
   },
   sOne: function() {
      let soHave = this.data.soHave;
      if (!soHave) {
         this.setData({
            stHave: soHave,
         })
      };
      this.setData({
         soHave: !soHave,
      })
   },
   sTwo: function() {
      let stHave = this.data.stHave;
      if (!stHave) {
         this.setData({
            soHave: stHave,
         })
      };
      this.setData({
         stHave: !stHave,
      })
   },
   toAddCart: function() {
      const goodData = this.data.goodData;
      const pre_item = wx.getStorageSync('cart_data');
      const temp = {
         'name': wx.getStorageSync('name'),
         "colorList": wx.getStorageSync("colorList"),
         'cIndex': wx.getStorageSync('cIndex') ,
         'memory': wx.getStorageSync('memory') || goodData.defaultData.memory.split(" ")[0],
         'price': wx.getStorageSync('price') || goodData.defaultData.price[0],
         'color': wx.getStorageSync('color') || goodData.defaultData.color,
         'imgSrc': wx.getStorageSync('imgSrc') || goodData.defaultData.img,
         'selectNum': wx.getStorageSync('selectNum'),
         'selectedOne': true
      }
      wx.setStorageSync('cart_data', [temp, ...pre_item]);
      //计算购物车商品总数量
      let cart_data = wx.getStorageSync('cart_data');
      const selectNum = cart_data.map(item => {
         return item.selectNum;
      })
      let cat_allGood_num = 0;
      for (let i = 0, len = selectNum.length; i < len; i++) {
         cat_allGood_num += selectNum[i];
      }
      wx.setStorageSync('cat_allGood_num', cat_allGood_num);
      wx.navigateBack({
         url: "../goodDetalis"
      });
      setTimeout(()=>{
         wx.showToast({
         title: '已加入购物车',
         icon: 'success',
         duration: 2000
      });
      },500)
   },
   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {
      //初始化选择数量
      wx.setStorageSync('selectNum',1);
      wx.setStorageSync('cIndex', this.data.cIndex);
   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {
      wx.removeStorageSync('memory');
      wx.removeStorageSync('price');
      wx.removeStorageSync('color');
      wx.removeStorageSync('imgSrc');
      wx.removeStorageSync('cIndex');
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