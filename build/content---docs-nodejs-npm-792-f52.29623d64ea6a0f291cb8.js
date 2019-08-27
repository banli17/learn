(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{283:function(e,n,t){"use strict";t.d(n,"a",function(){return b}),t.d(n,"b",function(){return o});var a=t(0),l=t.n(a),p=l.a.createContext({}),c=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},b=function(e){var n=c(e.components);return l.a.createElement(p.Provider,{value:n},e.children)};var r="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=function(e){var n=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),r=c(n),m=t,o=r[p+"."+m]||r[m]||i[m]||a;return n?l.a.createElement(o,Object.assign({},b,{components:n})):l.a.createElement(o,b)};function o(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,c=new Array(p);c[0]=m;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b[r]="string"==typeof e?e:a,c[1]=b;for(var o=2;o<p;o++)c[o]=t[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return b}),t.d(n,"default",function(){return m});t(0);var a=t(283);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c={title:"npm 详解",sidebar_label:"npm 详解"},b=[{value:"npm 模块安装机制",id:"npm-模块安装机制",children:[]},{value:"npm 实现原理",id:"npm-实现原理",children:[]},{value:"npm 使用",id:"npm-使用",children:[{value:"源管理",id:"源管理",children:[]},{value:"如何找包",id:"如何找包",children:[]},{value:"安装npm",id:"安装npm",children:[]},{value:"使用npm安装包",id:"使用npm安装包",children:[]},{value:"package.json",id:"packagejson",children:[]},{value:"升级本地包",id:"升级本地包",children:[]},{value:"卸载本地包",id:"卸载本地包",children:[]},{value:"在全局安装、卸载和升级",id:"在全局安装、卸载和升级",children:[]},{value:"自己发布和升级包",id:"自己发布和升级包",children:[]},{value:"版本号",id:"版本号",children:[]},{value:"使用局部包",id:"使用局部包",children:[]},{value:"使用Dist-tags(分发标签)标记包",id:"使用dist-tags分发标签标记包",children:[]},{value:"使用双因素身份验证",id:"使用双因素身份验证",children:[]},{value:"使用安全令牌",id:"使用安全令牌",children:[]},{value:"用CLI更改配置文件设置",id:"用cli更改配置文件设置",children:[]},{value:"package和module的区别",id:"package和module的区别",children:[]}]},{value:"私有包",id:"私有包",children:[]},{value:"npm-link",id:"npm-link",children:[]},{value:"学习资料",id:"学习资料",children:[{value:"创建 package.json",id:"创建-packagejson",children:[]}]},{value:"运行多个 npm script",id:"运行多个-npm-script",children:[]},{value:"添加参数和注释",id:"添加参数和注释",children:[]},{value:"npm script运行时日志输出",id:"npm-script运行时日志输出",children:[]},{value:"npm script 钩子",id:"npm-script-钩子",children:[]},{value:"变量",id:"变量",children:[]},{value:"命令自动补全",id:"命令自动补全",children:[]},{value:"跨平台兼容",id:"跨平台兼容",children:[]},{value:"拆分 script 到单独文件",id:"拆分-script-到单独文件",children:[]}],r={rightToc:b},i="wrapper";function m(e){var n=e.components,t=p(e,["components"]);return Object(a.b)(i,l({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"npm-模块安装机制"},"npm 模块安装机制"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"时，会执行如下步骤："),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"查看 node_modules 目录下是否有指定模块，如果存在，则不再重新安装。"),Object(a.b)("li",{parentName:"ol"},"如果不存在，npm 向 registry 查询模块压缩包网址，下载压缩包，放到用户主目录的",Object(a.b)("inlineCode",{parentName:"li"},".npm"),"目录，解压压缩包到当前项目的",Object(a.b)("inlineCode",{parentName:"li"},"node_modules"),"目录。")),Object(a.b)("p",null,"具体看下面实现原理"),Object(a.b)("h2",{id:"npm-实现原理"},"npm 实现原理"),Object(a.b)("p",null,"输入",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"回车后，会经历下面几个阶段。"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"执行工程自身 preinstall 钩子。"),Object(a.b)("li",{parentName:"ol"},"确定首层依赖模块，也就是 dependencies 和 devDependencies 中的模块。"),Object(a.b)("li",{parentName:"ol"},"递归获取模块，分为下面几步",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"获取模块信息。下载模块前，要确定版本。package.json 里的是",Object(a.b)("inlineCode",{parentName:"li"},"semantic version"),"(semver, 语义化版本)，不准确。此时要看 package-lock.json 的模块信息，有则直接用。没有则从仓库获取，比如 ^1.1.0，npm 就去仓库获取",Object(a.b)("inlineCode",{parentName:"li"},"1.x.x"),"的最新版本。"),Object(a.b)("li",{parentName:"ol"},"获取模块实体。上一步会拿到模块的压缩包地址(resolved字段)，npm 会用此地址检测本地缓存(linux 是",Object(a.b)("inlineCode",{parentName:"li"},"~/.npm"),"目录)，缓存中有则直接用，没有则从仓库下载。"),Object(a.b)("li",{parentName:"ol"},"查找该模块依赖，如果有依赖，则回到第1步。没有则停止。"))),Object(a.b)("li",{parentName:"ol"},"模块扁平化(dedupe)，即将遍历到的模块放到根节点下面，也就是 node_modules 下，如果有重复模块，则丢弃。这里重复模块是指：模块名相同且 semver 兼容，每个 semver 都对应一段版本允许范围，如果两个模块的版本允许范围存在交集，则可以得到一个兼容版本。如果没有交集，则保存在各自模块的依赖树中，即放到各自模块中。"),Object(a.b)("li",{parentName:"ol"},"安装模块。会更新",Object(a.b)("inlineCode",{parentName:"li"},"node_modules"),"，并执行生命周期函数，preinstall，install，postinstall。"),Object(a.b)("li",{parentName:"ol"},"执行工程自身的生命周期。如果 npm 定义了钩子，将会被执行，按照 install、postinstall、prepublish、prepare 的顺序。")),Object(a.b)("p",null,"最后会生成和更新版本描述文件，npm install 过程完成。"),Object(a.b)("h2",{id:"npm-使用"},"npm 使用"),Object(a.b)("h3",{id:"源管理"},"源管理"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"nrm 源管理"),Object(a.b)("li",{parentName:"ul"},"npm "),Object(a.b)("li",{parentName:"ul"},"nvm ")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm"),"是一个包管理平台。平台上有很多包可以供我们直接使用，这样会省很多时间。"),Object(a.b)("p",null,"npm install --no-package-lock"),Object(a.b)("h3",{id:"如何找包"},"如何找包"),Object(a.b)("p",null,"到",Object(a.b)("a",l({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm官网"),"搜索自己想要的包，有时有很多类似的包，不知道该使用哪个，这个时候可以通过包的描述字段来选择："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Optimal  最佳"),Object(a.b)("li",{parentName:"ul"},"Popularity"),Object(a.b)("li",{parentName:"ul"},"Quality"),Object(a.b)("li",{parentName:"ul"},"Maintenance  维护")),Object(a.b)("p",null,"现在我们需要使用jquery，所以直接在搜索栏搜索jquery即可。"),Object(a.b)("h3",{id:"安装npm"},"安装npm"),Object(a.b)("p",null,"安装node时会自带安装npm，所以只需要先安装node即可，安装完node之后，可以通过",Object(a.b)("inlineCode",{parentName:"p"},"npm -v"),"看是npm是否安装成功。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm login\nnpm whoami  // 测试是否登录成功\n")),Object(a.b)("p",null,"如果想体验下一代版本的npm，可以在安装时加上@next标志。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install npm@next -g\n")),Object(a.b)("h3",{id:"使用npm安装包"},"使用npm安装包"),Object(a.b)("p",null,"包的安装方式有2种，本地安装和全局安装。如果你需要require使用这个包，则安装在本地(npm install默认安装在本地)；如果需要命令行使用，则安装在全局。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install <package_name>\n\nnpm install <package_name> --force\n")),Object(a.b)("p",null,"执行上面的命令时，npm会查找目录的package.json文件的依赖字段，如果没有这个包，则会安装最新版本。如果有这个包，则取决于其版本规则。"),Object(a.b)("p",null,"另外，",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"首先会检查",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"里是否有指定模块。如果有，则不再安装，即使有新版本；如果希望强制安装，需要使用",Object(a.b)("inlineCode",{parentName:"p"},"-f"),"或",Object(a.b)("inlineCode",{parentName:"p"},"--force"),"。"),Object(a.b)("h3",{id:"packagejson"},"package.json"),Object(a.b)("p",null,"管理包最好使用package.json文件。它包含项目依赖的包列表，还可以让其他开发者使用。"),Object(a.b)("p",null,"它必须包含的字段："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"name：全小写，一个单词不能有空格，允许破折号和下划线"),Object(a.b)("li",{parentName:"ul"},"version: x.x.x格式，遵循版本规则")),Object(a.b)("p",null,"执行",Object(a.b)("inlineCode",{parentName:"p"},"npm init"),"命令，会按照问答方式自定义创建package.json文件。还可以加参数--yes或-y，创建默认配置的package.json。"),Object(a.b)("p",null,"一些字段："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"description"),Object(a.b)("li",{parentName:"ul"},"main: 忽略默认是index.js"),Object(a.b)("li",{parentName:"ul"},"scripts："),Object(a.b)("li",{parentName:"ul"},"keywords：如果没有设置，会根据README.md或README的第一行代替，用于被别人搜索到这个包。"),Object(a.b)("li",{parentName:"ul"},"author"),Object(a.b)("li",{parentName:"ul"},"license: ISC"),Object(a.b)("li",{parentName:"ul"},"bugs"),Object(a.b)("li",{parentName:"ul"},"homepage")),Object(a.b)("p",null,"可以配置这个字段的默认值，通过下面的方式："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'npm set init.author.email "wombat@npmjs.com"\nnpm set init.author.name "ag_dubs"\nnpm set init.license "MIT"\n')),Object(a.b)("p",null,"可以自定义npm init时的问题。通过在home目录",Object(a.b)("inlineCode",{parentName:"p"},"~"),"创建",Object(a.b)("inlineCode",{parentName:"p"},".npm-init.js"),"文件。例如："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"module.exports = {\n  customField: 'Custom Field',\n  otherCustomField: 'This field is really cool'\n}\n")),Object(a.b)("p",null,"上面会在npm init时生成一份包含上面字段的package.json文件。还可以通过prompt创建："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'module.exports = prompt("what\'s your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");\n')),Object(a.b)("p",null,"关于依赖有2种类型：dependencies(生产依赖)和devDependencies(开发依赖)。 对应的安装方式是："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm install <package_name> --save  // 默认，会安装在 dependencies里\nnpm install <package_name> --save-dev  // 安装在devDependencies\n")),Object(a.b)("p",null,"如果同时",Object(a.b)("inlineCode",{parentName:"p"},"--save"),"和",Object(a.b)("inlineCode",{parentName:"p"},"--save-dev"),"装了一个库，则这个库会放在devDependencies里。"),Object(a.b)("h3",{id:"升级本地包"},"升级本地包"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm update\nnpm update <package_name>\nnpm outdated\n")),Object(a.b)("h3",{id:"卸载本地包"},"卸载本地包"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm uninstall <package>\n")),Object(a.b)("p",null,"通过加 ",Object(a.b)("inlineCode",{parentName:"p"},"--save")," 和 ",Object(a.b)("inlineCode",{parentName:"p"},"--save-dev")," 用来移除对应的依赖。但是不加参数的话，会查找devDependencies和dependencies里的库，找到就删除了。"),Object(a.b)("h3",{id:"在全局安装、卸载和升级"},"在全局安装、卸载和升级"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install -g <package>\nnpm uninstall -g <package>\n\nnpm update -g <package>\nnpm update -g  // 升级全局的全部的包\nnpm outdated -g --depth=0 // 看全局的包哪些可以升级\n")),Object(a.b)("h3",{id:"自己发布和升级包"},"自己发布和升级包"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"首先创建包：执行",Object(a.b)("inlineCode",{parentName:"li"},"npm init"),"创建",Object(a.b)("inlineCode",{parentName:"li"},"package.json"),"。在main入口文件，默认index.js文件中导出模块。"),Object(a.b)("li",{parentName:"ul"},"登录账号，如果没有账号需要新建，使用",Object(a.b)("inlineCode",{parentName:"li"},"npm adduser"),"，然后使用",Object(a.b)("inlineCode",{parentName:"li"},"npm login"),"登录。可以使用",Object(a.b)("inlineCode",{parentName:"li"},"npm whoami"),"查看是否登录成功。"),Object(a.b)("li",{parentName:"ul"},"给自己的包名取一个独一无二的名字，否则在上传时会提示包名重复。"),Object(a.b)("li",{parentName:"ul"},"写README.md文档。"),Object(a.b)("li",{parentName:"ul"},"使用",Object(a.b)("inlineCode",{parentName:"li"},"npm publish"),"发布到npm官网上。发布成功后，在官网可以通过包名搜索到该包，或者打开",Object(a.b)("inlineCode",{parentName:"li"},"https://npmjs.com/package/<package>"),"查看。"),Object(a.b)("li",{parentName:"ul"},"使用",Object(a.b)("inlineCode",{parentName:"li"},"npm version <update_type>"),"可以修改package.json文件的version版本号字段。<update_type>是发布版本类型，值是patch, minorx或 major中的一个。"),Object(a.b)("li",{parentName:"ul"},"更新完版本号后，使用",Object(a.b)("inlineCode",{parentName:"li"},"npm publish"),"发布即可。"),Object(a.b)("li",{parentName:"ul"},"readme需要在更新的包发布后再更新，使用",Object(a.b)("inlineCode",{parentName:"li"},"npm version patch"),"和",Object(a.b)("inlineCode",{parentName:"li"},"npm publish"),"命令。")),Object(a.b)("p",null,"如果遇到下面的问题："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm ERR! no_perms Private mode enable, only admin can publish this module:\n")),Object(a.b)("p",null,"这里注意的是因为国内网络问题，许多小伙伴把npm的镜像代理到淘宝或者别的地方了，这里要设置回原来的镜像。"),Object(a.b)("h3",{id:"版本号"},"版本号"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"第一个版本，使用1.0.0"),Object(a.b)("li",{parentName:"ul"},"如果有bug或很小的改动，发布patch版本,增加第三位，即1.0.1"),Object(a.b)("li",{parentName:"ul"},"如果有新增功能，但是不影响现有功能，发布minor版本，增加第二位，即1.1.0"),Object(a.b)("li",{parentName:"ul"},"如果完全修改了，影响了前面已有的功能，发布major版本，增加第一位，即2.0.0")),Object(a.b)("p",null,"可以使用",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"控制安装包时版本的更新。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Patch包: 1.0 or 1.0.x or ~1.0.4"),Object(a.b)("li",{parentName:"ul"},"Minor包: 1 or 1.x or ^1.0.4"),Object(a.b)("li",{parentName:"ul"},"Major包: * or x")),Object(a.b)("h3",{id:"使用局部包"},"使用局部包"),Object(a.b)("p",null,"局部包名字的格式是",Object(a.b)("inlineCode",{parentName:"p"},"@scope/project-name"),"，每个npm用户都有自己的作用域`@username/project-name。"),Object(a.b)("p",null,"创建局部包，package.json的name为 ",Object(a.b)("inlineCode",{parentName:"p"},"@username/project-name"),"。或者",Object(a.b)("inlineCode",{parentName:"p"},"npm init --scope=username"),"。"),Object(a.b)("p",null,"如果总是使用这个作用域，可以修改.npmrc文件。通过:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm config set scope username\n")),Object(a.b)("h3",{id:"使用dist-tags分发标签标记包"},"使用Dist-tags(分发标签)标记包"),Object(a.b)("p",null,"标签是为了补充说明版本号(比如，v0.1)。使用它们来组织和标记不同的软件包。"),Object(a.b)("p",null,"为包的特定版本添加标签"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm dist-tag add <pkg>@<version> [<tag>]\n")),Object(a.b)("p",null,"使用标签发布"),Object(a.b)("p",null,"默认",Object(a.b)("inlineCode",{parentName:"p"},"npm publish"),"会发布最新的包。如果使用了 --tag 标志，则可以指定发布该标签的包。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm publish --tag beta\n")),Object(a.b)("p",null,"使用标签安装包"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install somepkg@beta\n")),Object(a.b)("p",null,"注意：标签和版本共享相同的名称空间，为了避免产生冲突，最好不要使用数字或字母v开头的标签。"),Object(a.b)("h3",{id:"使用双因素身份验证"},"使用双因素身份验证"),Object(a.b)("p",null,"直接在npm网站上设置双身份验证的方法：",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/using-two-factor-authentication"}),"点击查看")),Object(a.b)("p",null,"双重身份验证可以通过以下两种方法确认身份，防止未经授权访问您的账户："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"你知道的东西(比如用户名和密码)"),Object(a.b)("li",{parentName:"ul"},"你有的东西(比如手机或平板)")),Object(a.b)("p",null,"比如第一次登陆银行系统，它会往手机发一个密码，这证明手机在你旁边。之后，每当银行检测到异常(如在不同地方，不同笔记本登陆)，都会发送一条临时短信进行验证登陆。"),Object(a.b)("p",null,"生成OTP"),Object(a.b)("p",null,"要npm开启2FA，需要一个生成一次性密码(OTP)的应用程序，比如",Object(a.b)("a",l({parentName:"p"},{href:"https://authy.com/download/"}),"Authy"),"或",Object(a.b)("a",l({parentName:"p"},{href:"https://support.google.com/accounts/answer/1066447"}),"Google Authenticator"),"。"),Object(a.b)("p",null,"认证级别"),Object(a.b)("p",null,"有两个级别的身份验证，auth-only 和 auth-and-writes(默认)。"),Object(a.b)("p",null,"如果在 auth-only 模式下启用 2FA，则 npm 会在下面操作时需要OTP。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"登录"),Object(a.b)("li",{parentName:"ul"},"删除2FA")),Object(a.b)("p",null,"如果在默认的 auth-and-writes 模式下启用2FA，则 npm 会在下面操作时需要OTP。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"登录"),Object(a.b)("li",{parentName:"ul"},"改变个人资料"),Object(a.b)("li",{parentName:"ul"},"创建或撤销令牌"),Object(a.b)("li",{parentName:"ul"},"发布包"),Object(a.b)("li",{parentName:"ul"},"改变访问"),Object(a.b)("li",{parentName:"ul"},"更改密码"),Object(a.b)("li",{parentName:"ul"},"对包进行敏感更改"),Object(a.b)("li",{parentName:"ul"},"删除2FA")),Object(a.b)("p",null,"将 OTP 添加到命令中"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm owner add <user> --otp=123456\n")),Object(a.b)("p",null,"启用2FA"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm profile enable-2fa\nnpm profile enable-2fa auth-and-writes\nnpm profile enable-2fa auth-only\n")),Object(a.b)("p",null,"接下来会显示一个二维码..."),Object(a.b)("p",null,"检测双重认真是否被设置："),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"npm profile get\n")),Object(a.b)("h3",{id:"使用安全令牌"},"使用安全令牌"),Object(a.b)("p",null,"安全令牌会对账户进行身份验证，并授权发布和访问模块的权利。"),Object(a.b)("h3",{id:"用cli更改配置文件设置"},"用CLI更改配置文件设置"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"# 查看配置文件值，键值对\nnpm profile get\n\n# prop通过上面的命令查看\nnpm profile set <prop> <value>\n")),Object(a.b)("h3",{id:"package和module的区别"},"package和module的区别"),Object(a.b)("p",null,"简单来说 package 可以是包含 package.json 的文件夹，也可以是一个版本地址(如git某个版本的地址)。所以有时一些开源库的 package.json 里依赖包直接是个git地址。"),Object(a.b)("p",null,"module 是 node.js 可以用的模块。它是一个js文件，且必须有 index.js 或 package.json 定义的 main 文件。"),Object(a.b)("p",null,"package.json 定义了一个包，node_modules 是 node 查找模块的地方。比如一个js文件，没有package.json，那它可以require()引入。它是个模块。有个文件包没有index.js或main字段，那它不是模块。"),Object(a.b)("p",null,"npm mongoose -v"),Object(a.b)("h2",{id:"私有包"},"私有包"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"# 配置全局\nnpm config set scope <your_scope>\n\n# 初始化\nnpm init --scope=<your_scope>\n\n# 安装\nnpm install @scope/project-name\nvar project = require('@scope/project-name')\n\n# 对包进行管理\nnpm access restricted <package_name>\n\n## 发布\nnpm publish --access=public\n")),Object(a.b)("p",null,"这样，在包前面就会有 @scope 标志。如果以私人用户注册，范围就是用户名。"),Object(a.b)("h2",{id:"npm-link"},"npm-link"),Object(a.b)("p",null,"在包里",Object(a.b)("inlineCode",{parentName:"p"},"npm link"),"是将包链接到全局",Object(a.b)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/<package>"),"，全局配置可以通过",Object(a.b)("inlineCode",{parentName:"p"},"npm config ls"),"查看。这样相当于是在全局安装了一个包。所以在其它项目里可以通过",Object(a.b)("inlineCode",{parentName:"p"},"npm link package_name"),"命令在项目",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"目录下创建一个包链接。"),Object(a.b)("h2",{id:"学习资料"},"学习资料"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://www.npmjs.com.cn/all/"}),"npm官方文档")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html"}),"npm scripts 使用指南")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"http://javascript.ruanyifeng.com/nodejs/npm.html"}),"npm模块管理器")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2016/01/npm-install.html"}),"npm 模块安装机制简介")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html"}),"npm scripts 使用指南")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"https://www.cnblogs.com/PeunZhang/p/5553574.html"}),"【原】npm 常用命令详解")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"http://geek.csdn.net/news/detail/197339"}),"一文看懂npm、yarn、pnpm之间的区别"))),Object(a.b)("h3",{id:"创建-packagejson"},"创建 package.json"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm init"),"命令可以快速创建 ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," 文件，执行该命令会问几个基本问题，如包名称、版本号、作者信息、入口文件、仓库地址、许可协议等，多数问题已经提供了默认值。"),Object(a.b)("p",null,"npm init 的默认设置"),Object(a.b)("p",null,"npm start、 npm test 是npm 内置的命令，但是需要在 scripts 字段中声明。"),Object(a.b)("p",null,"npm run 是 npm run-script 命令的缩写，当运行 npm run xxx 时。步骤如下："),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"从",Object(a.b)("inlineCode",{parentName:"li"},"package.json"),"中读取",Object(a.b)("inlineCode",{parentName:"li"},"scripts"),"对象里面的全部配置。"),Object(a.b)("li",{parentName:"ol"},"以",Object(a.b)("inlineCode",{parentName:"li"},"npm run"),"的最后一个参数作为key，在scripts对象中获取对应的值作为要执行的命令。如果没有找到就报错。"),Object(a.b)("li",{parentName:"ol"},"在系统默认的 shell 中执行上述命令，通常是 bash。")),Object(a.b)("p",null,"运行",Object(a.b)("inlineCode",{parentName:"p"},"npm run"),"可以列出所有的命令。"),Object(a.b)("p",null,"npm 运行脚本时，会把",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"加到环境变量 $PATH 前面，所以任何可执行文件的 npm 依赖都可以在 npm script 中直接调用。这个 .bin 是干什么的？"),Object(a.b)("p",null,"npm run eslint 配置 eslint"),Object(a.b)("h2",{id:"运行多个-npm-script"},"运行多个 npm script"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"串行  && ，一个失败，后面终止")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"并行  &"),Object(a.b)("p",{parentName:"li"},"npm-run-all"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"eslint"),Object(a.b)("li",{parentName:"ul"},"stylelint"),Object(a.b)("li",{parentName:"ul"},"jsonlint"),Object(a.b)("li",{parentName:"ul"},"markdownlint-cli")),Object(a.b)("p",null,"单元测试"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"mocha"),Object(a.b)("li",{parentName:"ul"},"chai  + sinon")),Object(a.b)("p",null,"& wait: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"等待"),Object(a.b)("li",{parentName:"ul"},"如果我们在任何子命令中启动了长时间运行的进程，比如启用了 mocha 的 --watch 配置，可以使用 ctrl + c 来结束进程，如果没加的话，你就没办法直接结束启动到后台的进程。")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"// 串行\nnpm-run-all lint:js lint:css lint:json lint:markdown mocha\nnpm-run-all lint:*  mocha\n\n// 并行，内部已经加了 & wait\nnpm-run-all --parallel lint:* mocha\n")),Object(a.b)("p",null,Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/mysticatea/npm-run-all/blob/HEAD/docs/npm-run-all.md"}),"https://github.com/mysticatea/npm-run-all/blob/HEAD/docs/npm-run-all.md")),Object(a.b)("h2",{id:"添加参数和注释"},"添加参数和注释"),Object(a.b)("p",null,"参数中间要用 -- 分隔"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'"lint:js": "eslint *.js",\n"lint:js:fix": "npm run lint:js -- --fix",\n')),Object(a.b)("p",null,"注释"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'"test": "# 运行所有代码检查和单元测试 \\n    npm-run-all --parallel lint:* mocha"\n')),Object(a.b)("p",null,"多余的空格是为了控制缩进，为了npm run 更美观"),Object(a.b)("h2",{id:"npm-script运行时日志输出"},"npm script运行时日志输出"),Object(a.b)("p",null,"某些情况下需要静默，某些情况下需要调试。"),Object(a.b)("p",null,"日志级别控制参数："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"默认日志输出级别"),Object(a.b)("li",{parentName:"ul"},"显示尽可能少的有用信息 ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel silent")," 或",Object(a.b)("inlineCode",{parentName:"li"},"--silent")," 或 ",Object(a.b)("inlineCode",{parentName:"li"},"-s")),Object(a.b)("li",{parentName:"ul"},"尽可能多的运行时状态 ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel verbose"),"，或者 ",Object(a.b)("inlineCode",{parentName:"li"},"--verbose"),"，或",Object(a.b)("inlineCode",{parentName:"li"},"-d"))),Object(a.b)("h2",{id:"npm-script-钩子"},"npm script 钩子"),Object(a.b)("p",null,"比如 npm run test， 会执行 ",Object(a.b)("inlineCode",{parentName:"p"},"pre"),"，",Object(a.b)("inlineCode",{parentName:"p"},"test"),"，",Object(a.b)("inlineCode",{parentName:"p"},"post")," 命令"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm run pretest\nnpm run test\nnpm run posttest\n")),Object(a.b)("p",null,"测试覆盖率"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"覆盖率收集工具 ",Object(a.b)("inlineCode",{parentName:"li"},"nyc"),"，是覆盖率收集工具 istanbul 的命令行版本，istanbul 支持生成各种格式的覆盖率报告，我已经使用多年；"),Object(a.b)("li",{parentName:"ul"},"打开 html 文件的工具 ",Object(a.b)("inlineCode",{parentName:"li"},"opn-cli"),"，是能够打开任意程序的工具 opn 的命令行版本。")),Object(a.b)("p",null,"precover，收集覆盖率之前把之前的覆盖率报告目录清理掉；\ncover，直接调用 nyc，让其生成 html 格式的覆盖率报告；\npostcover，清理掉临时文件，并且在浏览器中预览覆盖率报告；"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'diff --git a/package.json b/package.json\nindex 8f67810..d297f2e 100644\n--- a/package.json\n+++ b/package.json\n@@ -4,13 +4,17 @@\n   scripts: {\n+    "precover": "rm -rf coverage",\n+    "cover": "nyc --reporter=html npm test",\n+    "postcover": "rm -rf .nyc_output && opn coverage/index.html"\n   },\n@@ -22,7 +26,15 @@\n   "devDependencies": {\n     "npm-run-all": "^4.1.2",\n+    "nyc": "^11.3.0",\n+    "opn-cli": "^3.1.0",\n     "stylelint": "^8.2.0",\n     "stylelint-config-standard": "^17.0.0"\n+  },\n+  "nyc": {\n+    "exclude": [\n+      "**/*.spec.js",\n+      ".*.js"\n+    ]\n   }\n }\n')),Object(a.b)("h2",{id:"变量"},"变量"),Object(a.b)("p",null,"使用预定义变量 npm run env"),Object(a.b)("p",null,"部分排序后的预定义环境变量  npm run env | grep npm_package | sort"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'npm_package_author_name=banli17\nnpm_package_description=\nnpm_package_devDependencies_eslint=^6.0.1\nnpm_package_devDependencies_eslint_plugin_vue=^5.2.3\nnpm_package_license=ISC\nnpm_package_main=index.js\nnpm_package_name=npm-test\nnpm_package_scripts_env=env\nnpm_package_scripts_eslint=eslint *.js\nnpm_package_scripts_test=echo "Error: no test specified" && exit 1\nnpm_package_version=1.0.0\n')),Object(a.b)("p",null,"测试覆盖率归档是比较常见的需求，因为它方便我们追踪覆盖率的变化趋势，最彻底的做法是归档到 CI 系统里面，对于简单项目，则可以直接归档到文件系统中，即把收集到的覆盖率报告按版本号去存放。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'diff --git a/package.json b/package.json\nindex d297f2e..d86f65c 100644\n--- a/package.json\n+++ b/package.json\n@@ -12,9 +12,10 @@\n   "scripts": {\n-    "precover": "rm -rf coverage",\n     "cover": "nyc --reporter=html npm test",\n-    "postcover": "rm -rf .nyc_output && opn coverage/index.html"\n+    "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",\n+    "cover:archive": "mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version",\n+    "postcover": "npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"\n   },\n')),Object(a.b)("p",null,"使用自定义变量"),Object(a.b)("p",null,"为把测试覆盖率报告分享给其他同事浏览，我们就不能使用 opn-cli 打开文件了，需要启动简单的 http 服务，把网址发给别人浏览，比如我们约定网址 ",Object(a.b)("a",l({parentName:"p"},{href:"http://IP:3000%EF%BC%8C%E8%BF%99%E9%87%8C%E7%9A%84"}),"http://IP:3000，这里的")," IP 需要替换成自己的实际 IP。"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"npm i http-server -D \n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'diff --git a/package.json b/package.json\nindex d86f65c..abc9d01 100644\n--- a/package.json\n+++ b/package.json\n@@ -3,6 +3,9 @@\n   "version": "0.1.0",\n+  "config": {\n+    "port": 3000\n+  },\n   "scripts": {\n@@ -15,7 +18,9 @@\n     "cover": "nyc --reporter=html npm test",\n-    "postcover": "npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"\n+    "cover:serve": "http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n+    "cover:open": "opn http://localhost:$npm_package_config_port",\n+    "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"\n   },\n@@ -23,6 +28,7 @@\n   "devDependencies": {\n     "chai": "^4.1.2",\n+    "http-server": "^0.10.0",\n     "mocha": "^4.0.1",\n')),Object(a.b)("h2",{id:"命令自动补全"},"命令自动补全"),Object(a.b)("p",null,"npm run | less 列出命令  按 / 搜索"),Object(a.b)("p",null,"npm 自身自动完成工具  completion"),Object(a.b)("p",null,"bash"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'// 1. \nnpm completion >> ~/.npm-completion.bash\n\n// 2\necho "[ -f ~/.npm-completion.bash ] && source ~/.npm-completion.bash;" >> ~/.bashrc\n\n// 3\nsource ~/.bashrc\n')),Object(a.b)("p",null,"zsh 可以用zsh-better-npm-completion\n",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/lukechilds/zsh-better-npm-completion"}),"https://github.com/lukechilds/zsh-better-npm-completion")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"在 npm install 时自动根据历史安装过的包给出补全建议"),Object(a.b)("li",{parentName:"ol"},"在 npm uninstall 时候根据 package.json 里面的声明给出补全建议"),Object(a.b)("li",{parentName:"ol"},"在 npm run 时补全建议中列出命令细节")),Object(a.b)("p",null,"如果你要使用 zsh-better-npm-completion 插件，需要把 .bashrc、.zshrc 文件里面 npm completion 部分的配置删掉，避免冲突。"),Object(a.b)("h2",{id:"跨平台兼容"},"跨平台兼容"),Object(a.b)("p",null,"如"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),'"bash-script": "echo Hello $npm_package_name",\n"win-script": "echo Hello %npm_package_name%"\n')),Object(a.b)("p",null,"npm script 中涉及到的文件系统操作包括文件和目录的创建、删除、移动、复制等操作，而社区为这些基本操作也提供了跨平台兼容的包，列举如下："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rimraf 或 del-cli，用来删除文件和目录，实现类似于 rm -rf 的功能；"),Object(a.b)("li",{parentName:"ul"},"cpr，用于拷贝、复制文件和目录，实现类似于 cp -r 的功能；"),Object(a.b)("li",{parentName:"ul"},"make-dir-cli，用于创建目录，实现类似于 mkdir -p 的功能；")),Object(a.b)("p",null,"npm i rimraf cpr make-dir-cli -D"),Object(a.b)("p",null,"设置环境变量"),Object(a.b)("p",null,"cross-env ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.npmjs.com/package/cross-env"}),"https://www.npmjs.com/package/cross-env")),Object(a.b)("h2",{id:"拆分-script-到单独文件"},"拆分 script 到单独文件"))}m.isMDXComponent=!0}}]);