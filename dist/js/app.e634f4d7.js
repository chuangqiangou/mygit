(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({about:"about",category:"category"}[t]||t)+"."+{about:"20f92a30",category:"e51f329e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,category:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",category:"category"}[t]||t)+"."+{about:"5257e6d6",category:"709ddc26"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1116:function(t,e,n){},"1c60":function(t,e){!function(t,e){function n(){var n=i.getBoundingClientRect().width;e=e||540,n>e&&(n=e);var r=100*n/t;c.innerHTML="html{font-size:"+r+"px;}"}var r,a=document,o=window,i=a.documentElement,c=document.createElement("style");if(i.firstElementChild)i.firstElementChild.appendChild(c);else{var u=a.createElement("div");u.appendChild(c),a.write(u.innerHTML),u=null}n(),o.addEventListener("resize",(function(){clearTimeout(r),r=setTimeout(n,300)}),!1),o.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(r),r=setTimeout(n,300))}),!1),"complete"===a.readyState?a.body.style.fontSize="16px":a.addEventListener("DOMContentLoaded",(function(t){a.body.style.fontSize="16px"}),!1)}(720,750)},3194:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"slideInRight animated","leave-active-class":"slideOutRight animated"}},[n("router-view",{staticClass:"page"})],1),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),n("router-link",{attrs:{to:"/cat"}},[t._v("分类")]),n("router-link",{attrs:{to:"/zh"}},[t._v("十")]),n("router-link",{attrs:{to:"/cart"}},[t._v("购物车")]),n("router-link",{attrs:{to:"/user"}},[t._v("我的")])],1)],1)},o=[],i={created:function(){console.log(this.$router)}},c=i,u=(n("034f"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("van-tabs",{staticClass:"htabs",attrs:{animated:"","title-active-color":"#f30"},on:{change:t.changeHd},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(t){return n("van-tab",{key:t.page_id,attrs:{title:t.name}},[n("Page",{attrs:{item:t}})],1)})),1)],1)},f=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("a",{staticClass:"logo",attrs:{href:""}},[r("img",{attrs:{src:n("cf05"),height:"18",alt:""}})]),r("input",{attrs:{type:"text"}}),r("div",{staticClass:"btn"},[r("img",{attrs:{src:n("c121"),height:"22",alt:""}})])])}],h={},g=h,_=(n("8baf"),Object(u["a"])(g,m,v,!1,null,null,null)),b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.sections,(function(e,r){return n("div",{key:r},["gallery"==e.view_type?n("div",[n("van-swipe",t._l(e.body.items,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{style:{width:t.w/100+"rem",height:t.h/100+"rem"},attrs:{src:t.img_url}})])})),1)],1):t._e(),"cells_auto_fill"==e.view_type?n("div",{style:{position:"relative",width:e.body.w/100+"rem",height:e.body.h/100+"rem"}},t._l(e.body.items,(function(t,e){return n("div",{key:e,style:{position:"absolute",width:t.w/100+"rem",height:t.h/100+"rem",left:t.x?t.x/100+"rem":0,top:t.y?t.y/100+"rem":0}},[n("img",{attrs:{src:t.img_url,width:"100%",alt:""}})])})),0):t._e(),"divider_line"==e.view_type?n("div",{style:{height:e.body.line_height/100+"rem","background-color":e.body.line_color}}):t._e(),"list_three_type4"==e.view_type?n("div",{staticClass:"row",staticStyle:{padding:"0.20rem"}},t._l(e.body.items,(function(e,r){return n("div",{key:r,staticClass:"col",style:{"margin-left":1==r?".2rem":0,"margin-right":1==r?".2rem":0}},[n("img",{attrs:{src:e.img_url,width:"100%",alt:""}}),n("h5",[t._v(t._s(e.product_name))]),n("p",[t._v(t._s(e.product_brief))]),n("p",[t._v(t._s(e.product_price))])])})),0):t._e(),"list_two_type13"==e.view_type?n("div",{staticClass:"row",staticStyle:{padding:"0.20rem"}},t._l(e.body.items,(function(r,a){return n("div",{key:a,staticClass:"col tac",style:{"margin-left":1==a?".2rem":0}},[n("img",{attrs:{src:r.img_url,width:"100%",alt:""}}),n("h5",[t._v(t._s(r.product_name))]),n("p",[t._v(t._s(r.product_brief))]),n("p",[t._v(t._s(r.product_price))]),n("van-button",{attrs:{color:e.body.btn_color,size:"small",text:r.btn_txt?r.btn_txt:"立即购买"}})],1)})),0):t._e()])})),0)},w=[],k=(n("99af"),{props:["item"],data:function(){return{sections:[]}},created:function(){this.getSections()},methods:{getSections:function(){var t=this;this.$http.get("/mi/page.php?page_id=".concat(this.item.page_id,"&\n            page_type=").concat(this.item.page_type)).then((function(e){t.sections=e.data.data.data.sections,console.log(t.sections)})).catch((function(t){}))}}}),x=k,$=(n("f321"),Object(u["a"])(x,y,w,!1,null,null,null)),C=$.exports,E={name:"Home",data:function(){return{active:0,tabs:[]}},created:function(){this.getPage()},methods:{changeHd:function(){var t=document.querySelector(".htabs .van-tabs__content");t.scrollTop=0},getPage:function(){var t=this;this.$http.get("http://www.520mg.com/mi/page.php").then((function(e){console.log(e.data),t.tabs=e.data.data.tabs}))}},components:{Header:b,Page:C}},O=E,S=Object(u["a"])(O,p,f,!1,null,null,null),j=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ucard"},[n("div",{staticClass:"pic"},[n("van-icon",{attrs:{name:"contact",size:"0.3rem"}})],1),n("div",{staticClass:"umsg"},[t.uname?n("p",[t._v("欢迎回来 "+t._s(t.uname)+" | "),n("span",{staticStyle:{color:"rgb(139, 109, 109)"},on:{click:t.logOut}},[t._v("注销")])]):n("p",[t._v("游客请 | "),n("span",{on:{click:function(e){return t.$router.push("/login?redirect=/user")}}},[t._v("登录")]),t._v(" | "),n("span",{on:{click:function(e){return t.$router.push("/logat?redirect=/user")}}},[t._v("注册")])])])])])},P=[];n("ac1f"),n("1276");function L(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",a=t+"="+escape(e)+";";if(n){var o=new Date;o.setDate(o.getDate()+n),a+="expires="+o+";"}a+="path="+r+";",document.cookie=a,console.log(a)}function A(t){for(var e=document.cookie,n=e.split("; "),r=0;r<n.length;r++){var a=n[r].split("=");if(a[0]==t)return unescape(a[1])}}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new Date;n.setTime(0),document.cookie=t+"=;expires="+n+";path="+e}var q={getCookie:A,setCookie:L,delCookie:H},z={data:function(){return{uname:""}},created:function(){this.uname=q.getCookie("uname")},methods:{logOut:function(){var t=this;this.$http({method:"POST",url:"http://www.520mg.com/member/index_login.php",data:"dopost=exit",configs:{withCredentials:!0}}).then((function(e){1==e.data.status?(q.delCookie("uname"),t.uname="",t.$toast.success("注销成功")):t.$toast.fail("注销成功")}))}}},M=z,D=(n("e8c3"),Object(u["a"])(M,T,P,!1,null,null,null)),N=D.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("产品")]),n("h2",[t._v("产品参数:"+t._s(t.$route.params.id))]),t.$route.query.from?n("h2",[t._v("查询参数:"+t._s(t.$route.query.from))]):t._e(),n("h3",[t._v("path:"+t._s(t.$route.path))]),n("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),n("button",{on:{click:function(e){return t.$router.back()}}},[t._v("返回back")]),n("br"),n("button",{on:{click:function(e){return t.$router.go(1)}}},[t._v("前进")]),n("button",{on:{click:function(e){return t.$router.forward()}}},[t._v("前进forard")]),t._v(" "),n("br"),n("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("首页")]),n("button",{on:{click:function(e){return t.$router.replace("/")}}},[t._v("首页replace(不留当前页面历史记录)")]),n("router-link",{attrs:{to:{name:"Home"}}},[t._v("切换到首页按路由的名称")]),t._v(" "),n("br"),n("router-link",{attrs:{to:{name:"Produce",params:{id:"mumu"}}}},[t._v("切换到produce")]),n("br"),n("router-link",{attrs:{to:{path:"/produce/xyz?from=中国"}}},[t._v("切换到produce-path")])],1)},B=[],U={},I=Object(u["a"])(U,R,B,!1,null,null,null),J=I.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("404")]),n("p",[t._v("糟糕，页面被外星人劫走了")]),n("button",{on:{click:function(e){return t.$router.replace("/")}}},[t._v("首页")])])},K=[],Z={},G=Object(u["a"])(Z,F,K,!1,null,null,null),Q=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("van-cell-group",{staticStyle:{"margin-top":"15px"}},[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),n("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.upwd,callback:function(e){t.upwd=e},expression:"upwd"}})],1),n("div",{staticStyle:{margin:"15px"}},[n("van-button",{attrs:{color:"#f30",block:"",round:""},on:{click:t.login}},[t._v("登录")])],1)],1)},W=[],X=(n("5319"),{data:function(){return{uname:"",upwd:""}},methods:{login:function(){var t=this;this.$http({method:"POST",url:"http://www.520mg.com/member/index_login.php",data:"fmdo=login&dopost=login&userid=".concat(this.uname,"&pwd=").concat(this.upwd),configs:{withCredentials:!0}}).then((function(e){if(console.log(e.data),1==e.data.status){t.$notify({type:"success",message:e.data.msg}),q.setCookie("uname",t.uname);var n=t.$route.query.redirect;console.log("redirect",n),n?t.$router.replace(n):t.$router.replace("/user")}else t.$notify({type:"danger",message:e.data.msg})}))}}}),Y=X,tt=(n("d6db"),Object(u["a"])(Y,V,W,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("购物车")])])}],at={beforeRouteLeave:function(t,e,n){flag?n():n(!1)}},ot=at,it=Object(u["a"])(ot,nt,rt,!1,null,null,null),ct=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 中间 ")])},st=[],lt={},dt=Object(u["a"])(lt,ut,st,!1,null,null,null),pt=dt.exports,ft=n("5885");r["a"].use(d["a"]);var mt=[{path:"/",name:"Home",component:j,alias:["/home","/main"]},{path:"/produce/:id",name:"Produce",component:J},{path:"/user",name:"User",component:N},{path:"/cart",name:"Cart",component:ct,meta:{requireAuth:!0}},{path:"/set",redirect:"/user"},{path:"/login",name:"Login",component:et},{path:"/zh",name:"Zh",component:pt},{path:"/logat",name:"logat",component:ft["default"]},{path:"/cat",name:"Category",component:function(){return n.e("category").then(n.bind(null,"4886"))},meta:{requireAuth:!0}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",name:"NoMatch",component:Q}],vt=new d["a"]({routes:mt});vt.beforeEach((function(t,e,n){t.meta.requireAuth?q.getCookie("uname")?n():n("/user?redirect="+t.path):n()}));var ht=vt,gt=n("2f62");r["a"].use(gt["a"]);var _t=new gt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),bt=(n("1c60"),n("d16e"),n("77af")),yt=(n("62a0"),n("1b36")),wt=n("82ae"),kt=n.n(wt);r["a"].use(bt["a"]),r["a"].use(yt["a"]),kt.a.defaults.baseURL="http://520mg.com",kt.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r["a"].prototype.$http=kt.a,r["a"].config.productionTip=!1,new r["a"]({router:ht,store:_t,render:function(t){return t(l)}}).$mount("#app")},5885:function(t,e,n){"use strict";var r=n("dd22"),a=n("cb8d"),o=(n("d4a1"),n("2877")),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},6860:function(t,e,n){},"7be2":function(t,e,n){},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var r=n("6860"),a=n.n(r);a.a},c121:function(t,e,n){t.exports=n.p+"img/user.23496a01.png"},cb8d:function(t,e,n){"use strict";var r=n("efda"),a=n.n(r);e["default"]=a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d16e:function(t,e,n){},d4a1:function(t,e,n){"use strict";var r=n("1116"),a=n.n(r);a.a},d6db:function(t,e,n){"use strict";var r=n("e67a"),a=n.n(r);a.a},dd22:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"注册","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("van-cell-group",{staticStyle:{"margin-top":"15px"}},[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.upwd,callback:function(e){t.upwd=e},expression:"upwd"}}),n("van-field",{attrs:{type:"password",placeholder:"请确认密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),n("div",{staticStyle:{margin:"15px"}},[n("van-button",{attrs:{color:"#f30",block:"",round:""},on:{click:t.login}},[t._v("注册")])],1)],1)},a=[]},e67a:function(t,e,n){},e8c3:function(t,e,n){"use strict";var r=n("7be2"),a=n.n(r);a.a},efda:function(t,e){},f321:function(t,e,n){"use strict";var r=n("3194"),a=n.n(r);a.a}});
//# sourceMappingURL=app.e634f4d7.js.map