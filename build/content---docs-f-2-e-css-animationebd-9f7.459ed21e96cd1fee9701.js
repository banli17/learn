(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{181:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return l}),t.d(e,"rightToc",function(){return b}),t.d(e,"default",function(){return u});t(0);var a=t(301);function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l={title:"css 动画",sidebar_label:"css 动画"},b=[{value:"animation",id:"animation",children:[]},{value:"transition",id:"transition",children:[]},{value:"贝塞尔曲线",id:"贝塞尔曲线",children:[{value:"原理",id:"原理",children:[]},{value:"应用:抛物线运动的小球",id:"应用抛物线运动的小球",children:[]}]},{value:"参考资料",id:"参考资料",children:[]}],o={rightToc:b},c="wrapper";function u(n){var e=n.components,t=r(n,["components"]);return Object(a.b)(c,i({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"animation"},"animation"),Object(a.b)("p",null,"animation 由 6 部分组成："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-name"),": 动画的名称，这是一个带 keyframes 类型的值，keyframes 用于定义动画帧。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-duration"),": 动画的时长"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-timing-function"),": 动画的时间曲线"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-delay"),": 动画开始前的延迟"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-iteration-count"),": 动画的播放次数"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"animation-direction"),": 动画的方向")),Object(a.b)("h2",{id:"transition"},"transition"),Object(a.b)("p",null,"transition 由 4 部分组成："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transition-property"),": 过渡属性"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transition-duration"),": 过渡时长"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transition-timing-function"),": 过渡的时间曲线"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transition-delay"),": 延迟")),Object(a.b)("h2",{id:"贝塞尔曲线"},"贝塞尔曲线"),Object(a.b)("h3",{id:"原理"},"原理"),Object(a.b)("p",null,"贝塞尔曲线是一种插值曲线，它描述两个点之间形成连续曲线形状的规则，最初被 1962 年就职于雷诺的法国工程师皮埃尔·贝塞尔用来设计车型。来看看二阶贝塞尔曲线是怎么画出来的。"),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"/img/css/animation/1.jpg",alt:null}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"在平面上有 3 个点 A、B、C，依次用线连起来。"),Object(a.b)("li",{parentName:"ol"},"在 AB 和 BC 上找出点 D 和 E，使得 AD/AB = BE/BC。"),Object(a.b)("li",{parentName:"ol"},"在连线 DE，上找到点 F，使得 DF/DE = AD/AB = BE/BC。"),Object(a.b)("li",{parentName:"ol"},"把 D 点慢慢从 A 点移动到 B 点，找到所有的 F 点，连接起来。会得到一条光滑的曲线，这就是贝塞尔曲线。")),Object(a.b)("p",null,"下面来看看二阶贝塞尔曲线(1 个控制点)的动态图。"),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"/img/css/animation/2.png",alt:null}))),Object(a.b)("p",null,"一阶的贝塞尔曲线就是一条直线(0 个控制点)。"),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"/img/css/animation/4.webp",alt:null}))),Object(a.b)("p",null,"CSS 的动画使用的是三阶贝塞尔曲线(2 个控制点)："),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"/img/css/animation/3.png",alt:null}))),Object(a.b)("p",null,"贝塞尔曲线的特点是："),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"非常平滑。所以非常适合动画。"),Object(a.b)("li",{parentName:"ol"},"只要改变中间的离散点，曲线就会随着改变。")),Object(a.b)("p",null,"三阶贝塞尔曲线公式："),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"/img/css/animation/5.png",alt:null}))),Object(a.b)("p",null,"要注意，里面的 t 并不是时间，而是点移动时比例的变化。实际上，贝塞尔曲线的一个点 (x, y) 里的 x 轴才是时间。"),Object(a.b)("p",null,"所以，如果直接使用贝塞尔曲线公式，是没法根据时间计算数值的，所以浏览器中一般采用了数值算法，如下。"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"function generate(p1x, p1y, p2x, p2y) {\n    const ZERO_LIMIT = 1e-6;\n    // Calculate the polynomial coefficients,\n    // implicit first and last control points are (0,0) and (1,1).\n    const ax = 3 * p1x - 3 * p2x + 1;\n    const bx = 3 * p2x - 6 * p1x;\n    const cx = 3 * p1x;\n\n    const ay = 3 * p1y - 3 * p2y + 1;\n    const by = 3 * p2y - 6 * p1y;\n    const cy = 3 * p1y;\n\n    function sampleCurveDerivativeX(t) {\n        // `ax t^3 + bx t^2 + cx t' expanded using Horner 's rule.\n        return (3 * ax * t + 2 * bx) * t + cx;\n    }\n\n    function sampleCurveX(t) {\n        return ((ax * t + bx) * t + cx ) * t;\n    }\n\n    function sampleCurveY(t) {\n        return ((ay * t + by) * t + cy ) * t;\n    }\n\n    // Given an x value, find a parametric value it came from.\n    function solveCurveX(x) {\n        var t2 = x;\n        var derivative;\n        var x2;\n\n        // https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation\n        // First try a few iterations of Newton's method -- normally very fast.\n        // http://en.wikipedia.org/wiki/Newton's_method\n        for (let i = 0; i < 8; i++) {\n            // f(t)-x=0\n            x2 = sampleCurveX(t2) - x;\n            if (Math.abs(x2) < ZERO_LIMIT) {\n                return t2;\n            }\n            derivative = sampleCurveDerivativeX(t2);\n            // == 0, failure\n            /* istanbul ignore if */\n            if (Math.abs(derivative) < ZERO_LIMIT) {\n                break;\n            }\n            t2 -= x2 / derivative;\n        }\n\n        // Fall back to the bisection method for reliability.\n        // bisection\n        // http://en.wikipedia.org/wiki/Bisection_method\n        var t1 = 1;\n        /* istanbul ignore next */\n        var t0 = 0;\n\n        /* istanbul ignore next */\n        t2 = x;\n        /* istanbul ignore next */\n        while (t1 > t0) {\n            x2 = sampleCurveX(t2) - x;\n            if (Math.abs(x2) < ZERO_LIMIT) {\n                return t2;\n            }\n            if (x2 > 0) {\n                t1 = t2;\n            } else {\n                t0 = t2;\n            }\n            t2 = (t1 + t0) / 2;\n        }\n\n        // Failure\n        return t2;\n    }\n\n    function solve(x) {\n        return sampleCurveY(solveCurveX(x));\n    }\n\n    return solve;\n}\n")),Object(a.b)("p",null,"上面代码完全看不懂，但是它可以实现和 CSS 一样的动画。"),Object(a.b)("h3",{id:"应用抛物线运动的小球"},"应用:抛物线运动的小球"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width">\n    <title>Simulation</title>\n    <style>\n        .ball {\n            width: 10px;\n            height: 10px;\n            background-color: black;\n            border-radius: 5px;\n            position: absolute;\n            left: 0;\n            top: 0;\n            transform: translateY(180px);\n        }\n    </style>\n</head>\n\n<body>\n    <label> 运动时间：<input value="3.6" type="number" id="t" />s</label><br />\n    <label> 初速度：<input value="-21" type="number" id="vy" /> px/s</label><br />\n    <label> 水平速度：<input value="21" type="number" id="vx" /> px/s</label><br />\n    <label> 重力：<input value="10" type="number" id="g" /> px/s²</label><br />\n    <button onclick="createBall()"> 来一个球 </button>\n    <script>\n        // v 是速度、g 是重力、t 是总时间，返回值是\n        function generateCubicBezier(v, g, t) {\n            var a = v / g;\n            var b = t + v / g;\n\n            return [\n                [(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)],\n                [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]\n            ];\n        }\n\n        function createBall() {\n            var ball = document.createElement("div");\n            var t = Number(document.getElementById("t").value);\n            var vx = Number(document.getElementById("vx").value);\n            var vy = Number(document.getElementById("vy").value);\n            var g = Number(document.getElementById("g").value);\n            ball.className = "ball";\n            document.body.appendChild(ball)\n            ball.style.transition = `left linear ${t}s, top cubic-bezier(${generateCubicBezier(vy, g, t)}) ${t}s`;\n            setTimeout(function () {\n                ball.style.left = `${vx * t}px`;\n                ball.style.top = `${vy * t + 0.5 * g * t * t}px`;\n            }, 10);\n            setTimeout(function () {\n                document.body.removeChild(ball);\n            }, t * 1000);\n        }\n    <\/script>\n</body>\n\n</html>\n')),Object(a.b)("h2",{id:"参考资料"},"参考资料"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.jianshu.com/p/0c9b4b681724"}),"必须要理解掌握的贝塞尔曲线")),Object(a.b)("li",{parentName:"ul"},"重学前端")))}u.isMDXComponent=!0},301:function(n,e,t){"use strict";t.d(e,"a",function(){return b}),t.d(e,"b",function(){return p});var a=t(0),i=t.n(a),r=i.a.createContext({}),l=function(n){var e=i.a.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},b=function(n){var e=l(n.components);return i.a.createElement(r.Provider,{value:e},n.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},u=function(n){var e=n.components,t=n.mdxType,a=n.originalType,r=n.parentName,b=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&-1===e.indexOf(a)&&(t[a]=n[a]);return t}(n,["components","mdxType","originalType","parentName"]),o=l(e),u=t,p=o[r+"."+u]||o[u]||c[u]||a;return e?i.a.createElement(p,Object.assign({},b,{components:e})):i.a.createElement(p,b)};function p(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=u;var b={};for(var c in e)hasOwnProperty.call(e,c)&&(b[c]=e[c]);b.originalType=n,b[o]="string"==typeof n?n:a,l[1]=b;for(var p=2;p<r;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);