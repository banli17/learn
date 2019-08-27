(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return b}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return o});n(0);var l=n(283);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={title:"设计模式简介",sidebar_label:"简介"},c=[{value:"面向对象和UML类图",id:"面向对象和uml类图",children:[{value:"面向对象的意义",id:"面向对象的意义",children:[]},{value:"UML类图",id:"uml类图",children:[]}]},{value:"设计原则与编程技巧",id:"设计原则与编程技巧",children:[{value:"什么是设计",id:"什么是设计",children:[]},{value:"SOLID五大设计原则",id:"solid五大设计原则",children:[]},{value:"第二题",id:"第二题",children:[]}]}],i={rightToc:c},p="wrapper";function o(e){var t=e.components,n=r(e,["components"]);return Object(l.b)(p,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"设计模式是一套让代码可重用，可读，可靠的经验总结。它可以分为三类："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"创建型模式：对象实例化的模式，创建型模式用于解耦对象的实例化过程。"),Object(l.b)("li",{parentName:"ul"},"结构型模式：把类或对象结合在一起形成一个更大的结构。"),Object(l.b)("li",{parentName:"ul"},"行为型模式：类和对象如何交互，及划分责任和算法。")),Object(l.b)("h2",{id:"面向对象和uml类图"},"面向对象和UML类图"),Object(l.b)("h3",{id:"面向对象的意义"},"面向对象的意义"),Object(l.b)("p",null,"面向对象的本质实际是对数据进行结构化，即归类，这是为了更加方便的管理代码。对于计算机来说，结构化的才是最简单的。"),Object(l.b)("p",null,"面向对象的三要素: 继承、封装、多态"),Object(l.b)("p",null,"继承"),Object(l.b)("p",null,"js 里通过 extends 来继承类。"),Object(l.b)("pre",null,Object(l.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"class Person{\n    constructor(name){\n        this.name = name\n    }\n}\n\nclass Student extends Person{\n    constructor(name, classroom){\n        super(name)\n        this.classroom = classroom \n    }\n    study(){\n        //...\n    }\n}\n")),Object(l.b)("p",null,"封装"),Object(l.b)("p",null,"面向对象语言中的封装是通过下面三个关键词来限定属性、方法的访问权限。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"public"),": 公开的，父类、子类、实例都可以访问。"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"protected"),": 保护的，父类、子类可以访问。"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"private"),": 私有的，只有当前类可以访问。")),Object(l.b)("p",null,"在 js 中没有这种语法，可以使用 typescript 来规范。"),Object(l.b)("p",null,"多态"),Object(l.b)("p",null,"多态是子类可以重写父类的方法，或者同名方法可以根据参数个数或类型的不同表示不同功能。"),Object(l.b)("h3",{id:"uml类图"},"UML类图"),Object(l.b)("p",null,"UML类图用来描述类和类之间的关系。"),Object(l.b)("p",null,"每个类有类名，属性和方法。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"public"),"使用 + 号"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"protected"),"使用 # 号"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"private"),"使用 - 号")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"关系")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"泛化：表示继承，使用空心箭头。"),Object(l.b)("li",{parentName:"ul"},"关联：表示引用，使用实心箭头")),Object(l.b)("p",null,Object(l.b)("img",a({parentName:"p"},{src:"./oop/a.png",alt:null}))),Object(l.b)("p",null,"上面的这张图表示 A,B 类继承自 Person类，Person中引用了 House类。"),Object(l.b)("h2",{id:"设计原则与编程技巧"},"设计原则与编程技巧"),Object(l.b)("h3",{id:"什么是设计"},"什么是设计"),Object(l.b)("p",null,"unix/linux设计哲学一书的总结："),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"小即是美。"),Object(l.b)("li",{parentName:"ol"},"让每个程序只做好一件事。"),Object(l.b)("li",{parentName:"ol"},"快速建立原型，给用户用，使用过程中根据反馈和自己的规划继续完成。"),Object(l.b)("li",{parentName:"ol"},"舍弃高效率而取可移植性，可移植性>高效率，因为计算机配置是不断升高的。"),Object(l.b)("li",{parentName:"ol"},"采用纯文本来存储数据，即可读性，让适合人阅读，不要用二进制之类。"),Object(l.b)("li",{parentName:"ol"},"充分利用软件的杠杆效应(软件复用)。"),Object(l.b)("li",{parentName:"ol"},"使用 shell 脚本来提高杠杆效应和可移植性。"),Object(l.b)("li",{parentName:"ol"},"避免强制性的用户界面。"),Object(l.b)("li",{parentName:"ol"},"让每个程序都称为过滤器。")),Object(l.b)("p",null,"小准则："),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"允许用户定制环境。"),Object(l.b)("li",{parentName:"ol"},"尽量使操作系统内核小而轻量化。"),Object(l.b)("li",{parentName:"ol"},"使用小写字母并尽量简短。"),Object(l.b)("li",{parentName:"ol"},"沉默是金。"),Object(l.b)("li",{parentName:"ol"},"各部分之和大于整体。"),Object(l.b)("li",{parentName:"ol"},"寻求 90% 的解决方案。不要什么都做到完美，因为会耗费很大精力。")),Object(l.b)("h3",{id:"solid五大设计原则"},"SOLID五大设计原则"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"S: 单一职责原则：一个程序只做好一件事，如果功能复杂就拆分开"),Object(l.b)("li",{parentName:"ul"},"O: 开放封闭原则：对扩展开放，对修改封闭。增加需求时，扩展新代码，而非修改已有代码。"),Object(l.b)("li",{parentName:"ul"},"L: 李氏置换原则：子类能覆盖父类，父类能出现的地方子类就能出现，js使用较少（继承使用较少）。"),Object(l.b)("li",{parentName:"ul"},"I: 接口独立原则：保持接口的单一独立，避免出现胖接口。js没有接口，使用较少。"),Object(l.b)("li",{parentName:"ul"},"D: 依赖倒置原则：面向接口编程，依赖于抽象而不依赖于具体，使用方只关注接口而不关注具体类的实现。js中使用较少(没有接口&弱类型)。")),Object(l.b)("h3",{id:"第二题"},"第二题"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"某停车场，分3层，每层100车位 "),Object(l.b)("li",{parentName:"ol"},"每个车位能监控到车辆的驶入和离开"),Object(l.b)("li",{parentName:"ol"},"车辆进入前，显示每层的空余车位数量"),Object(l.b)("li",{parentName:"ol"},"车辆进入时，摄像头可识别车辆号和时间"),Object(l.b)("li",{parentName:"ol"},"车辆出来时，出口显示器显示车牌号和停车时长")))}o.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var l=n(0),a=n.n(l),r=a.a.createContext({}),b=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=b(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=function(e){var t=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===t.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),i=b(t),o=n,u=i[r+"."+o]||i[o]||p[o]||l;return t?a.a.createElement(u,Object.assign({},c,{components:t})):a.a.createElement(u,c)};function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=o;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:l,b[1]=c;for(var u=2;u<r;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);