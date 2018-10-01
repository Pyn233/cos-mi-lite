 // pages/index/index.js

Page({
  data: {
     banners:[
        { imgurl: "../../images/banner1.jpg", idnum: "lb1"},
        { imgurl: "../../images/banner2.jpg", idnum: "lb2"},
        { imgurl: "../../images/banner3.jpg", idnum: "lb3"},
        { imgurl: "../../images/banner4.jpg", idnum: "lb4"}
     ],
     navdata:[
        { url:'../../images/phone.png',word: '手机'},
        { url: '../../images/tv.png', word: '电视'},
        { url: '../../images/pc.png', word: '电脑'},
        { url: '../../images/intelligent.png', word: '智能'},
        { url: '../../images/news.png', word: '新品' }
     ],
     goods_list_data:[
        { 
           id:"1",
           url:"//i8.mifile.cn/v1/a1/c78bedc1-462e-b537-7c12-ee81f42b6e80!720x440.webp",
           section:[
              {
                 id:"11",
                 url: "//i8.mifile.cn/v1/a1/a14a8cc3-3f47-3224-d221-8ff8485d624d!360x360.webp",
                 name: "小米8 SE",
                 brief: "三星 AMOLED 全面屏 小屏旗舰",
                 price: "1699元起",
                 oldPrice: "1799元起",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl:"//i8.mifile.cn/v1/a1/b6b8ed80-841b-32c6-f6a8-58f89d0d1605.webp?w=180&h=48"
              },
              {
                 id: "12",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3ba9490bd6d7dec5d29e45435692b4fe.jpg?thumb=1&w=360&h=360",
                 name: "红米Note 5",
                 brief: "红米国民品质，拍照专家",
                 price: "999元起",
                 oldPrice: "1099元",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl: "//i8.mifile.cn/v1/a1/8e7dc797-6746-7467-d87b-932f7be41425.webp?w=180&h=48"
              },
              {
                 id: "13",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8461f6647dcbae7617b7783bd85396d.jpg?thumb=1&w=360&h=360",
                 name: "红米6 Pro ",
                 brief: "高颜值大电量 红米旗舰",
                 price: "949元起",
                 oldPrice: "999元",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl: "//i8.mifile.cn/v1/a1/ac9d1f9b-8615-09e0-4303-d2b43e971d03.webp?w=180&h=48"
              },
              {
                 id: "14",
                 url: "//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70!360x360.webp",
                 name: "小米Max 2",
                 brief: "6.44\"大屏，5300mAh大电量",
                 price: "1199元",
                 oldPrice: "1399元",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl: "//i8.mifile.cn/v1/a1/b5c39dca-4ea6-90fd-ed3b-c807409c050b.webp?w=180&h=48"
              },
              {
                 id: "15",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg?thumb=1&w=360&h=360",
                 name: "黑鲨游戏手机 液冷更快",
                 brief: "液冷散热，独立图像处理芯片",
                 price: "2899元起",
                 oldPrice: "2999元",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl: "//i8.mifile.cn/v1/a1/c9d1a2a8-624c-df83-9ee1-239bbe02e580.webp?w=180&h=48"
              },
              {
                 id: "16",
                 url: "//i8.mifile.cn/v1/a1/e7853ea5-1260-6cb2-91ed-2c539a87db0a!360x360.webp",
                 name: "红米5 Plus",
                 brief: "全面屏，4000mAh大电量",
                 price: "999元起",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: true,
                 discountUrl: "//i8.mifile.cn/v1/a1/8e7dc797-6746-7467-d87b-932f7be41425.webp?w=180&h=48"
              }
            ]
        },
        {
           id: "2",
           url: "//i8.mifile.cn/v1/a1/9a65af0d-4be6-c045-f0ea-4827d1c7cd93!720x440.webp",
           section: [
              {
                 id: "21",
                 url: "//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x360.webp",
                 name: "小米电视4A 32英寸",
                 brief: "64位处理器，高清智能电视",
                 price: "899元",
                 oldPrice: "999元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "22",
                 url: "//i8.mifile.cn/v1/a1/6017d231-019c-a76d-e54a-0bb6948bfd0d!360x360.webp",
                 name: "43\"电视4A 青春版",
                 brief: "全高清屏，人工智能语音",
                 price: "1399元",
                 oldPrice: "1699元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "23",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5014d1a59bf76ae55d79fe930c8de7f4.jpg?thumb=1&w=360&h=360",
                 name: "小米电视4A 50英寸",
                 brief: "4K HDR，人工智能语音系统",
                 price: "1899元",
                 oldPrice: "2199元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "24",
                 url: "//i8.mifile.cn/v1/a1/05651ed0-22d2-de3b-4e79-4a39a079136e!360x360.webp",
                 name: "小米电视4X 55英寸",
                 brief: "4K HDR，人工智能语音",
                 price: "2299元",
                 oldPrice: "2799元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              }
           ]
        },
        {
           id: "3",
           url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/63eb07d1efab6e3dbc51af274aca59f2.jpg?thumb=1&w=720&h=440",
           section: [
              {
                 id: "31",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a6c559209103e17ef6acaf583929a28.jpg?thumb=1&w=360&h=360",
                 name: "小米电视4A 43英寸",
                 brief: "全高清 HDR，64位处理器",
                 price: "1399元",
                 oldPrice: "1799元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "32",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/701dcdba4e85d5e1023bbb635eb8b9c4.jpg?thumb=1&w=360&h=360",
                 name: "小米电视4A 40英寸",
                 brief: "FHD全高清屏，四核处理器",
                 price: "1299元",
                 oldPrice: "1599元",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "33",
                 url: "//i8.mifile.cn/v1/a1/0518c80c-a1a5-af45-0898-a4e07b3d5a9f!360x360.webp",
                 name: "小米AI音箱",
                 brief: "听音乐、语音遥控家电的人工智能音箱",
                 price: "299元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "34",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ffe8610a808d8254fb5d37b141d0bf5f.jpg?thumb=1&w=360&h=360",
                 name: "小米路由器4",
                 brief: "双频双核 更快更稳定",
                 price: "199元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "35",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b38a95198475d2c8be1e11cab147fc22.jpg?thumb=1&w=360&h=360",
                 name: "米家电动剃须刀",
                 brief: "剃得干净，剃得快",
                 price: "199元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "36",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8bb9149f581b54ef7d9121217f56717.jpg?thumb=1&w=360&h=360",
                 name: "小米VR一体机 ",
                 brief: "超乎寻常的虚拟体验",
                 price: "1499元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              }  
           ]
        },
        {
           id: "4",
           url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9923b4d7a35e5ce691ace43c88f07a4.jpg?thumb=1&w=720&h=440",
           section: [
              {
                 id: "41",
                 url: "//i8.mifile.cn/v1/a1/84afcca8-cafd-bef6-c93b-724bd05528d3!360x360.webp",
                 name: "米兔积木 动力机械",
                 brief: "搭建想象的翅膀",
                 price: "69元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "42",
                 url: "//i8.mifile.cn/v1/a1/887ab2bb-abea-99b9-423c-d42a1bd37b50!360x360.webp",
                 name: "小米运动蓝牙耳机青春版",
                 brief: "音随你动",
                 price: "99元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "43",
                 url: "//i8.mifile.cn/v1/a1/0fd67d28-c7a3-921e-328f-ca8ead68a26b!360x360.webp",
                 name: "柴犬米兔",
                 brief: "忠实守护你的每时每刻",
                 price: "49元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "44",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ef098f1a6876f2ea75611ad97527c89d.jpg?thumb=1&w=360&h=360",
                 name: "小米游戏键盘",
                 brief: "104 键 RGB 幻彩背光",
                 price: "229元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "45",
                 url: "//i8.mifile.cn/v1/a1/d60cc88b-b88f-752c-0e01-59738fd51dc7!360x360.webp",
                 name: "华来小方智能摄像机 1S",
                 brief: "1080P清晰画质，安全看家",
                 price: "99元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "46",
                 url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/088877469096556392d903f6cc3f3ca5.jpg?thumb=1&w=360&h=360",
                 name: "小米米家智能摄像机",
                 brief: "智能侦测 安全守护",
                 price: "129元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              }
           ]
        },
        {
           id: "5",
           url: "//i8.mifile.cn/v1/a1/79522738-bd19-d4cc-ebfc-ff73fac87172!720x280.webp",
           section: [
              {
                 id: "51",
                 url: "//i8.mifile.cn/v1/a1/5f78e5ba-cd16-0c67-3784-c64651596f94!360x360.webp",
                 name: "米家扫地机器人",
                 brief: "智商高，扫得干净扫得快",
                 price: "1699元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "52",
                 url: "//i8.mifile.cn/v1/a1/71160d24-f582-9174-923c-3eac73ad6fd7!360x360.webp",
                 name: "小米净水器（厨下式）",
                 brief: "400加仑大流量，隐藏安装",
                 price: "1999元",
                 oldPrice: "",
                 is_new: false,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "53",
                 url: "//i8.mifile.cn/v1/a1/360d4fc7-9424-b65d-3fb7-097748f5dff8!360x360.webp",
                 name: "米兔儿童电话手表3 ｜ 4G版",
                 brief: "带你探索植物园的智能电话手表",
                 price: "599元",
                 oldPrice: "",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              },
              {
                 id: "54",
                 url: "//i8.mifile.cn/v1/a1/d13a97db-6382-e102-c13a-adfea93d167f!360x360.webp",
                 name: "米连卡随身路由器套装",
                 brief: "随时随地 无线上网",
                 price: "599",
                 oldPrice: "948",
                 is_new: true,
                 hasDiscount: false,
                 discountUrl: ""
              }
           ]
        }

     ],
     Hei: "", //这是swiper要动态设置的高度属性
     isTap: false
  },
   imageLoad: function (e) {
      var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
      var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
      var imgw = e.detail.width;
      var swiperH = winWid * imgh / imgw + "px";　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
      this.setData({
         Hei: swiperH,       //设置高度
      })
   },
   toSearch: function () {
      this.setData({
         isTap: true
      });
      wx.navigateTo({
         url:"./search/search"
      })
   },
   toDetails: function(e){
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
         url: `../goodDetails/goodDetails?id=${id}`
      })
   },
   onShow(e) {
      this.setData({
         isTap: false
      });
   }
})