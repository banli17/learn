(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return a}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return o});n(0);var l=n(293);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={title:"网络协议之 TCP、UDP",sidebar_label:"TCP、UDP"},c=[{value:"UDP",id:"udp",children:[]},{value:"TCP",id:"tcp",children:[]}],p={rightToc:c},u="wrapper";function o(e){var t=e.components,n=b(e,["components"]);return Object(l.b)(u,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"udp"},"UDP"),Object(l.b)("p",null,"UDP (User Datagram Protocol,用户数据报协议)协议是面向无连接的，也就是说不需要在发送正式数据前创建连接。所谓的建立连接，是为了在客户端和服务端维护连接，而建立一定的数据结构来维护双方交互的状态，用这样的数据结构来保证所谓的面向连接的特性。"),Object(l.b)("p",null,"UDP 的特点："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"面向无连接，相信网络是美好的。"),Object(l.b)("li",{parentName:"ul"},"监听端口后，谁都可以传给它，它也可以传给别人(支持一对多、多对多、多对一、一对一)。"),Object(l.b)("li",{parentName:"ul"},"没有拥塞控制，UDP 一直以恒速发送数据，即使丢包也不管。"),Object(l.b)("li",{parentName:"ul"},"UDP 对应用层报文直接打包，不进行拆分和拼接操作。发送时，应用层将数据传递给传输层的 UDP 协议，UDP 只增加一个 UDP 协议标识，就传给网络层。接收时，UDP 去除 IP 报文头，就直接传递给应用层。")),Object(l.b)("p",null,"UDP 不保证有序、完整，没有控制流量的算法，相比 TCP 更加轻便，高效。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"UDP 头部")),Object(l.b)("p",null,"UDP 头部只有8 个字节，包含了以下几个数据:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"两个十六位的端口号，分别为源端口（可选字段）和目标端口"),Object(l.b)("li",{parentName:"ul"},"UDP 长度 (16位)。"),Object(l.b)("li",{parentName:"ul"},"UDP 检验和 (16位) ，该字段用于发现头部信息和数据中的错误")),Object(l.b)("p",null,Object(l.b)("img",r({parentName:"p"},{src:"/img/fetch/udp.jpeg",alt:null}))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"UDP应用场景")),Object(l.b)("p",null,"三大应用场景："),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"需要资源少，在网络比较好的内网，或丢包不重要。"),Object(l.b)("li",{parentName:"ol"},"不需要一对一建立连接，而是可以广播的应用。如 DHCP、VXLAN。"),Object(l.b)("li",{parentName:"ol"},"需要处理速度快，延时低，可以容忍少数丢包，即使网络差，也不控制发送速度。")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"UDP实际应用场景")),Object(l.b)("p",null,"1、 网页或者 APP 的访问"),Object(l.b)("p",null,"原来访问网页和手机 APP 都是基于 HTTP 协议的。HTTP 协议是基于 TCP 的，建立连接都需要多次交 互，对于时延比较大的目前主流的移动互联网来讲，建立一次连接需要的时间会比较长，然而既然是移 动中，TCP 可能还会断了重连，也是很耗时的。而且目前的 HTTP 协议，往往采取多个数据通道共享一 个连接的情况，这样本来为了加快传输速度，但是 TCP 的严格顺序策略使得哪怕共享通道，前一个不 来，后一个和前一个即便没关系，也要等着，时延也会加大。"),Object(l.b)("p",null,"而QUIC(全称Quick UDP Internet Connections，快速 UDP 互联网连接)是 Google 提出的一种基 于 UDP 改进的通信协议，其目的是降低网络通信的延迟，提供更好的用户互动体验。"),Object(l.b)("p",null,"QUIC 在应用层上，会自己实现快速连接建立、减少重传时延，自适应拥塞控制。"),Object(l.b)("p",null,"2、流媒体的协议"),Object(l.b)("p",null,"直播协议大多使用 RTMP，它是基于 TCP 的。但是 TCP 会严格控制传输的正确性，它会保证上一个包收到了，下一个包才会确认。所以如果一个包没有收到，下一个包就算收到，在缓存里面，也需要等着。对直播来说，这显然不合适。直播，用户肯定关注的是最新的画面，而不是丢失的老旧画面，如果老是没来就等着，会卡着，新的画面也看不到，这会影响用户体验。(当然有的直播，用户希望能看到完整的视频)。"),Object(l.b)("p",null,"另外在网络不好时，TCP 会主动进行拥塞控制，降低发送速度，页面本来就卡，应该应用层马上重传，而不是主动让步。所以直播通常是使用 UDP 协议，然后在应用层控制包序，丢包是否重新发包，拥塞控制等。"),Object(l.b)("p",null,"3、实时游戏"),Object(l.b)("p",null,"实时游戏中，客户端和服务器需要建立长连接，保证实时传输数据。但是玩家很多，服务器却不多，由于维护 TCP 连接需要在内核维护一些数据结构，因而一台机器能够支撑的 TCP 连接数目。然后 UDP 由于是没有连接的，在异步 IO 机制引入之前，常常是应对海量客户端连接的策略。"),Object(l.b)("p",null,"另外还是 TCP 的强顺序问题，对战的游戏，对网络的要求很简单，玩家通过客户端发送给服务器鼠标和 键盘行走的位置，服务器会处理每个用户发送过来的所有场景，处理完再返回给客户端，客户端解析响 应，渲染最新的场景展示给玩家。"),Object(l.b)("p",null,"如果出现一个数据包丢失，所有事情都需要停下来等待这个数据包重发。客户端会出现等待接收数据， 然而玩家并不关心过期的数据，激战中卡 1 秒，等能动了都已经死了。"),Object(l.b)("p",null,"游戏对实时要求较为严格的情况下，采用自定义的可靠 UDP 协议，自定义重传策略，能够把丢包产生的 延迟降到最低，尽量减少网络问题对游戏性造成的影响。"),Object(l.b)("p",null,"4、物联网"),Object(l.b)("p",null,"一方面，物联网领域终端资源少，很可能只是个内存非常小的嵌入式系统，而维护 TCP 协议代价太大; 另一方面，物联网对实时性要求也很高，而 TCP 还是因为上面的那些原因导致时延大。Google 旗下的 Nest 建立 Thread Group，推出了物联网通信协议 Thread，就是基于 UDP 协议的。"),Object(l.b)("p",null,"5、移动通信领域"),Object(l.b)("p",null,"在 4G 网络里，移动流量上网的数据面对的协议 GTP-U 是基于 UDP 的。因为移动网络协议比较复杂， 而 GTP 协议本身就包含复杂的手机上线下线的通信协议。如果基于 TCP，TCP 的机制就显得非常多 余，这部分协议我会在后面的章节单独讲解。"),Object(l.b)("p",null,"UDP 虽然简单，但它有简单的用法。它可以用在环境简单、需要多播、应用层自己控制传输的地方。 例如 DHCP、VXLAN、QUIC 等。"),Object(l.b)("h2",{id:"tcp"},"TCP"),Object(l.b)("p",null,"TCP 的特点是："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"面向连接"),Object(l.b)("li",{parentName:"ul"},"每条TCP连接只能有两个断点EP，只能一对一通信"),Object(l.b)("li",{parentName:"ul"},"面向字节流，将报文拆成字节流"),Object(l.b)("li",{parentName:"ul"},"可靠传输，使用流量控制和拥塞控制"),Object(l.b)("li",{parentName:"ul"},"首部最小20字节，最大60字节")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"TCP 头部")))}o.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i});var l=n(0),r=n.n(l),b=r.a.createContext({}),a=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=function(e){var t=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===t.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),p=a(t),o=n,i=p[b+"."+o]||p[o]||u[o]||l;return t?r.a.createElement(i,Object.assign({},c,{components:t})):r.a.createElement(i,c)};function i(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,a=new Array(b);a[0]=o;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var i=2;i<b;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);