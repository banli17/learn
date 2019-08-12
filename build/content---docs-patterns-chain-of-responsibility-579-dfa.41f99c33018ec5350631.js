(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{245:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s});var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(n){var e=a.a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},i=function(n){var e=c(n.components);return a.a.createElement(o.Provider,{value:e},n.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},u=function(n){var e=n.components,t=n.mdxType,r=n.originalType,o=n.parentName,i=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===e.indexOf(r)&&(t[r]=n[r]);return t}(n,["components","mdxType","originalType","parentName"]),p=c(e),u=t,s=p[o+"."+u]||p[u]||l[u]||r;return e?a.a.createElement(s,Object.assign({},i,{components:e})):a.a.createElement(s,i)};function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[p]="string"==typeof n?n:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return c}),t.d(e,"rightToc",function(){return i}),t.d(e,"default",function(){return u});t(0);var r=t(245);function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c={title:"javascript 职责链模式",sidebar_label:"职责链模式"},i=[],p={rightToc:i},l="wrapper";function u(n){var e=n.components,t=o(n,["components"]);return Object(r.b)(l,a({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"在职责链模式(chain-of-responsibility)里，有很多函数节点组成了一条链，数据传递给第一个函数处理，如果失败则抛给第二个函数，直到某个函数节点成功处理该数据为止。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"function processType(type){\n    if(type == 1){\n        //...大量代码\n        return \n    }\n    if(type == 2){\n        //...大量代码\n        return \n    }\n    if(type == 3){\n        //...大量代码\n        return \n    }\n    // 兜底\n}\n")),Object(r.b)("p",null,"上面这段代码会造成函数太长难以维护，当然其中的大量代码可以使用一些函数抽取出来，但是当需要新增了",Object(r.b)("inlineCode",{parentName:"p"},"type == 4"),"，就需要去修改 processType 函数，违反了开闭原则。"),Object(r.b)("p",null,"职责链模式就可以来优化这段代码。我们可以在",Object(r.b)("inlineCode",{parentName:"p"},"type==1"),"处理完成后，再对",Object(r.b)("inlineCode",{parentName:"p"},"type==2"),"处理，再对",Object(r.b)("inlineCode",{parentName:"p"},"type==3"),"处理。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"class Action {\n    constructor(name) {\n        this.name = name\n        this.nextAction = null\n    }\n\n    setNextAction(action) {\n        this.nextAction = action\n    }\n\n    handle() {\n        console.log(`${this.name}审批`)\n        if(this.nextAction != null){\n            this.nextAction.handle()\n        }\n    }\n}\nlet a = new Action('组长')\nlet b = new Action('总监')\nlet c = new Action('老总')\na.setNextAction(b)\nb.setNextAction(c)\na.handle()\n")))}u.isMDXComponent=!0}}]);