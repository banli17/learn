(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{245:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return f});var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(n){var e=o.a.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},i=function(n){var e=c(n.components);return o.a.createElement(a.Provider,{value:e},n.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},l=function(n){var e=n.components,t=n.mdxType,r=n.originalType,a=n.parentName,i=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===e.indexOf(r)&&(t[r]=n[r]);return t}(n,["components","mdxType","originalType","parentName"]),p=c(e),l=t,f=p[a+"."+l]||p[l]||u[l]||r;return e?o.a.createElement(f,Object.assign({},i,{components:e})):o.a.createElement(f,i)};function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[p]="string"==typeof n?n:r,c[1]=i;for(var f=2;f<a;f++)c[f]=t[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},55:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return c}),t.d(e,"rightToc",function(){return i}),t.d(e,"default",function(){return l});t(0);var r=t(245);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={title:"mongodb"},i=[],p={rightToc:i},u="wrapper";function l(n){var e=n.components,t=a(n,["components"]);return Object(r.b)(u,o({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"brew install mongo"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://robomongo.org/"}),"https://robomongo.org/")," "),Object(r.b)("p",null,'查看端口号占用进程id\nmac lsof -i:30000\nwin netstat -anto | findstr "30000"'))}l.isMDXComponent=!0}}]);