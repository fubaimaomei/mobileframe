import base64InOut from "./base64InOut";
import axios from "axios";

// 字符串扩展
if (typeof String.prototype.getSuffix != "function") {
  String.prototype.getSuffix = function() {
    if (this !== undefined) {
      return this.substring(
        this.lastIndexOf(".") + 1,
        this.length
      ).toLowerCase();
    }
    return "";
  };
}

// 动态加载脚本
function includeFile(file, onload) {
  if (file.getSuffix() == "js") {
    var js = document.createElement("script");
    js.src = file;
    js.type = "text/javascript";
    if (onload) {
      js.onload = onload;
    }
    document.body.appendChild(js);
  } else if (file.getSuffix() == "css") {
    var css = document.createElement("link");
    css.href = file;
    css.rel = "stylesheet";
    if (onload) {
      css.onload = onload;
    }
    document.body.appendChild(css);
  }
}

// 微信登录
function LandEvent(callback) {
  var ua = navigator.userAgent.toLowerCase();
  var isWeixin = ua.indexOf("micromessenger") != -1;
  if (window.__wxjs_is_wkwebview) {
    // ios WKWebview 内核
  }
  if (isWeixin) {
    var link = window.location.href;
    var URLTOBASE64 = new base64InOut();
    var base64 = URLTOBASE64.base64Encodes(link);
    var search = encodeURIComponent(
      "https://vr.congrongtech.cn/shop/auth/authLogin.jhtml?redirectUrl=" +
        base64
    );
    window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2c9f1e9e3cd5cfe4&redirect_uri=" +
      search +
      "&response_type=code&scope=snsapi_userinfo&state=3d6be0a4035d839573b04816624a415e#wechat_redirect";
  } else {
    if (!window.RSAKey) {
      includeFile("https://cdn.congrongtech.cn/resources/shop/js/rsa.js");
      includeFile("https://cdn.congrongtech.cn/resources/shop/js/jsbn.js");
      includeFile("https://cdn.congrongtech.cn/resources/shop/js/prng4.js");
      includeFile("https://cdn.congrongtech.cn/resources/shop/js/rng.js");
      includeFile("https://cdn.congrongtech.cn/resources/shop/js/base64.js");
    }
  }

  if (callback) {
    callback();
  }
}

function formatDate(time) {
  const d = new Date(time);
  return `${d.getFullYear()}年${("0" + (d.getMonth() + 1)).slice(-2)}月${(
    "0" + d.getDate()
  ).slice(-2)}日${("0" + d.getHours()).slice(-2)}时${(
    "0" + d.getMinutes()
  ).slice(-2)}分`;
}

function getCookie(name) {
  if (name != null) {
    var value = new RegExp(
      "(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)"
    ).exec(document.cookie);
    return value ? decodeURIComponent(value[1]) : null;
  }
}

// const wx = require('weixin-js-sdk'); // 微信 sdk
// // 微信分享
// function share(store) {
//     var localURL = location.href.split('#')[0];
//     axios.get(
//         "https://vr.congrongtech.cn/common/jssdk.jhtml", {
//             params: {
//                 url: localURL
//             }
//         }
//     ).then(res => {
//         store.dispatch("set_home_data_async", { id: 5 }).then(() => {
//             if (res.data) {
//                 wx.config({
//                     debug: false,
//                     appId: res.data.appId,
//                     timestamp: res.data.timestamp,
//                     nonceStr: res.data.nonceStr,
//                     signature: res.data.signature,
//                     jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
//                 });

//                 wx.ready(function() {
//                     const title = store.state.home_data.data.title; //名称
//                     const description = store.state.home_data.data.description ? store.state.home_data.data.description : state.home_data.data.title; //描述
//                     const imgs = store.state.home_data.data.imgPath.split(","); //图片
//                     let imgUrl = imgs[0];
//                     const id = store.state.home_data.data.id;
//                     if (imgs && ((imgs[0].indexOf("https://") != -1) || (imgs[0].indexOf("http") != -1))) {
//                         imgUrl = imgs[0];
//                     } else {
//                         imgUrl = "https://cdn.congrongtech.cn" + imgs[0];
//                     }

//                     // 分享给 qq
//                     wx.onMenuShareQQ({
//                         title: title, //名称
//                         desc: description, //描述
//                         link: window.location.href,
//                         imgUrl: imgUrl, //放全景图片路径
//                         success: function(res) {}
//                     });
//                     // 分享给朋友
//                     wx.onMenuShareAppMessage({
//                         title: title, //名称
//                         desc: description, //描述
//                         link: window.location.href,
//                         imgUrl: imgUrl, //放全景图片路径
//                         success: function(res) {}
//                     });
//                     // 分享到朋友圈
//                     wx.onMenuShareTimeline({
//                         title: title, //名称
//                         desc: description, //描述
//                         link: window.location.href,
//                         imgUrl: imgUrl, //放全景图片路径
//                         success: function(res) {}
//                     });
//                 });
//             }
//         })

//     }).catch(err => console.log)
// }

export default {
  includeFile,
  LandEvent,
  formatDate,
  getCookie
  // share
};
