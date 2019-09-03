(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{293:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u});var l=t(0),r=t.n(l),a=r.a.createContext({}),p=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=p(e.components);return r.a.createElement(a.Provider,{value:n},e.children)};var b="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},o=function(e){var n=e.components,t=e.mdxType,l=e.originalType,a=e.parentName,c=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===n.indexOf(l)&&(t[l]=e[l]);return t}(e,["components","mdxType","originalType","parentName"]),b=p(n),o=t,u=b[a+"."+o]||b[o]||i[o]||l;return n?r.a.createElement(u,Object.assign({},c,{components:n})):r.a.createElement(u,c)};function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=o;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[b]="string"==typeof e?e:l,p[1]=c;for(var u=2;u<a;u++)p[u]=t[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return p}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return o});t(0);var l=t(293);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p={title:"使用Kindle Ear推送RSS到Kindle设备",date:new Date("2017-03-06T21:35:02.000Z"),tags:null},c=[{value:"安装步骤",id:"安装步骤",children:[]},{value:"使用方法",id:"使用方法",children:[]},{value:"验证是否成功",id:"验证是否成功",children:[]},{value:"RSS大全",id:"rss大全",children:[]},{value:"参考资料",id:"参考资料",children:[]}],b={rightToc:c},i="wrapper";function o(e){var n=e.components,t=a(e,["components"]);return Object(l.b)(i,r({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"安装步骤"},"安装步骤"),Object(l.b)("p",null,"1、确保可以正常访问 google 服务。"),Object(l.b)("p",null,"2、打开",Object(l.b)("a",r({parentName:"p"},{href:"https://console.cloud.google.com/appengine"}),"APP引擎中心"),"，创建一个 APP 引擎 (如果之前没有创建过 Project，需要创建一个项目)。"),Object(l.b)("p",null,"3、APP 引擎选 Python，然后地区选择亚洲，点击 Next 开始创建。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/1.png",alt:null}))),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/2.png",alt:null}))),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/3.png",alt:null}))),Object(l.b)("p",null,"4、创建完成，点击继续，点击激活控制台 shell，如果弹出教程，","[退出教程]"," 即可。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/4.png",alt:null}))),Object(l.b)("p",null,"激活远端 shell 后，拷贝下面命令粘贴到 Google 云端 shell，回车执行。"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-bash"}),"rm -f uploader.sh* && \\\nwget https://raw.githubusercontent.com/kindlefere/KindleEar-Uploader/master/uploader.sh && \\\nchmod +x uploader.sh && \\\n./uploader.sh\n")),Object(l.b)("p",null,"5、按照脚本的提示，输入 Gmail 地址和 APP 引擎的 APPID。回车，等待执行完成。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/5.png",alt:null}))),Object(l.b)("p",null,"6、已经成功了。如果需要重新安装代码或更新代码，可以输入下面命令："),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{className:"language-bash"}),"./uploader.sh\n")),Object(l.b)("p",null,"*提示：KindleEar github 地址：",Object(l.b)("a",r({parentName:"p"},{href:"https://github.com/kindlefere/KindleEar-Uploader"}),"https://github.com/kindlefere/KindleEar-Uploader")),Object(l.b)("h2",{id:"使用方法"},"使用方法"),Object(l.b)("p",null,"1、刷新",Object(l.b)("a",r({parentName:"p"},{href:"https://console.cloud.google.com/appengine"}),"APP引擎中心"),"页面。点击下面的链接，即可访问。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/6.png",alt:null}))),Object(l.b)("p",null,"2、账号密码默认都是 admin。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/7.png",alt:null}))),Object(l.b)("p",null,"3、登录后，点击 ","[我的订阅]"," 进行设置，如果出现 ","[internal server error]","，是因为系统没有完全部署完成，稍等五分钟左右就可以正常使用。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/8.png",alt:null}))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"注意：推送之前，要确保下面操作已经完成。")),Object(l.b)("p",null,"1.设置 Gmail 邮箱到 Kindle 信任邮箱中，在",Object(l.b)("a",r({parentName:"p"},{href:"https://www.amazon.cn/mn/dcw/myx.html/ref=kinw_myk_redirect#/home/content/booksAll/dateDsc/"}),"我的亚马逊")," 中【管理我的内容和设备】--【设置】在 【已认可的发件人电子邮箱列表】中添加。"),Object(l.b)("p",null,"2.打开 ",Object(l.b)("a",r({parentName:"p"},{href:"https://console.cloud.google.com/appengine"}),"APP 引擎中心")," ，添加 【已获授权的发件人】。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/9.png",alt:null}))),Object(l.b)("p",null,"设置投递选项，注意修改后需要选择 ","[保存设置]","。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/10.png",alt:null}))),Object(l.b)("p",null,"【投递日志】用来查看投递的状态，由于 RSS 内容抓取需要一定的时间，所以日志可能会有延迟。"),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"./kindle-rss/11.png",alt:null}))),Object(l.b)("p",null,"【账户管理】可以当前账户密码，也可以添加新成员，这样你就可以把系统分享给你的好朋友是用了，相互之间互不影响。"),Object(l.b)("p",null,"【高级设置】大家可以根据需要自行研究，比如批量导入订阅源，保存内容到Pocket Instapaper。"),Object(l.b)("h2",{id:"验证是否成功"},"验证是否成功"),Object(l.b)("p",null,"手动推送漫画，看看亚马逊网站上是否有发送记录。"),Object(l.b)("h2",{id:"rss大全"},"RSS大全"),Object(l.b)("pre",null,Object(l.b)("code",r({parentName:"pre"},{}),"优设 http://www.uisdc.com/feed\n政见 http://cnpolitics.org/feed/\n阮一峰的网络日志 http://feeds.feedburner.com/ruanyifeng\n知乎每日精选 https://www.zhihu.com/rss\n前端之巅 http://feedmaker.kindle4rss.com/feeds/frontshow.weixin.xml\n")),Object(l.b)("h2",{id:"参考资料"},"参考资料"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",r({parentName:"li"},{href:"https://github.com/cdhigh/KindleEar"}),"Kindle Ear")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",r({parentName:"li"},{href:"https://sspai.com/post/40509"}),"使用 Kindle Ear 推送 RSS 到 Kindle 设备")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",r({parentName:"li"},{href:"https://bookfere.com/post/19.html"}),"KindleEar 搭建教程：推送 RSS 订阅到 Kindle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",r({parentName:"li"},{href:"http://reabble.com/help"}),"readable rss"))))}o.isMDXComponent=!0}}]);