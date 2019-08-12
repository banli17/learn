(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{245:function(e,n,t){"use strict";t.d(n,"a",function(){return b}),t.d(n,"b",function(){return i});var l=t(0),c=t.n(l),a=c.a.createContext({}),r=function(e){var n=c.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},b=function(e){var n=r(e.components);return c.a.createElement(a.Provider,{value:n},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},u=function(e){var n=e.components,t=e.mdxType,l=e.originalType,a=e.parentName,b=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===n.indexOf(l)&&(t[l]=e[l]);return t}(e,["components","mdxType","originalType","parentName"]),s=r(n),u=t,i=s[a+"."+u]||s[u]||p[u]||l;return n?c.a.createElement(i,Object.assign({},b,{components:n})):c.a.createElement(i,b)};function i(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=u;var b={};for(var p in n)hasOwnProperty.call(n,p)&&(b[p]=n[p]);b.originalType=e,b[s]="string"==typeof e?e:l,r[1]=b;for(var i=2;i<a;i++)r[i]=t[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return r}),t.d(n,"rightToc",function(){return b}),t.d(n,"default",function(){return u});t(0);var l=t(245);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,l,c=function(e,n){if(null==e)return{};var t,l,c={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var r={title:"mysql学习(1): 基本概念",date:new Date("2018-12-11T09:01:24.000Z"),tags:null,toc:!0},b=[{value:"什么是数据库",id:"什么是数据库",children:[]},{value:"登陆",id:"登陆",children:[]},{value:"数据库相关操作",id:"数据库相关操作",children:[]},{value:"数据表相关操作",id:"数据表相关操作",children:[]},{value:"php连接mysql的三种方式",id:"php连接mysql的三种方式",children:[]},{value:"MySQL方式",id:"mysql方式",children:[{value:"MySQL连接数据库",id:"mysql连接数据库",children:[]},{value:"MySQLi面向过程操作数据库",id:"mysqli面向过程操作数据库",children:[]}]},{value:"tags:",id:"tags",children:[]},{value:"like",id:"like",children:[]},{value:"连接",id:"连接",children:[]},{value:"设计",id:"设计",children:[]},{value:"node",id:"node",children:[]},{value:"一条SQL查询语句是如何执行的",id:"一条sql查询语句是如何执行的",children:[]},{value:"node连接mysql",id:"node连接mysql",children:[]}],s={rightToc:b},p="wrapper";function u(e){var n=e.components,t=a(e,["components"]);return Object(l.b)(p,c({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"什么是数据库"},"什么是数据库"),Object(l.b)("p",null,"数据库Database，是按照数据结构，来组织管理存储数据的仓库。"),Object(l.b)("p",null,"常见数据库:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Oracle"),Object(l.b)("li",{parentName:"ul"},"DB2"),Object(l.b)("li",{parentName:"ul"},"SQL Server"),Object(l.b)("li",{parentName:"ul"},"Postage SQL"),Object(l.b)("li",{parentName:"ul"},"MySQL")),Object(l.b)("h2",{id:"登陆"},"登陆"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"// 登陆\nmysql -uroot -p\nmysql -uroot -proot\nmysql -hlocalhost -uroot -p -P3306   // 带端口地址\nmysql -uroot -p -D db_name   // 登陆同时打开数据库\n\n// mac mamp\n/Applications/MAMP/Library/bin/mysql -u root -p\n\n// 退出\nexit\nquit\nctrl+c\n\\q\n\nmysql -V\n\nselect version();\nselect user();\nselect database();\n// ;  \\g 是命令的结束符\n")),Object(l.b)("h2",{id:"数据库相关操作"},"数据库相关操作"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"// 创建数据库\nCREATE DATABASE|SCHEMA test1;\nCREATE DATABASE|SCHEMA test1 IF NOT EXISTS test1;  // 如果不存在则创建\nCREATE DATABASE|SCHEMA test1 DEFAULT CHARACTER SET [=] charset; // 同时指定编码\n\n// 查看全部数据库\nSHOW DATABASES|SCHEMAS;\n\n// 查看上一步操作产生的警告信息\nSHOW WARNINGS;\n\n// 查看指定数据库的详细信息\nSHOW CREATE DATABASE db_name;\n\n// 修改指定数据库编码方式\nALTER DATABASE db_name DEFAULT CHARACTER SET 'UTF8';  \n\n// 打开指定数据库\nUSE db_name;\n\n// 查看当前打开的数据库\nSELECT DATABASE()|SCHEMA();\n\n// 删除数据库\nDROP DATABASE test3;\nDROP DATABASE IF EXISTS test3;\n")),Object(l.b)("h2",{id:"数据表相关操作"},"数据表相关操作"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"是数据库的最重要组成部分，数据是保存在数据表中。"),Object(l.b)("li",{parentName:"ul"},"数据表由行和列来组成。"),Object(l.b)("li",{parentName:"ul"},"每个数据表的列至少有一列，行可以大于等于零行。"),Object(l.b)("li",{parentName:"ul"},"表名要求唯一，不要包含特殊字符，最好含义明确。")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"CREATE TABLE [IF NOT EXITS] tbl_name(\n    字段名称 字段类型 [完整性约束条件],\n    字段名称 字段类型 [完整性约束条件],\n)ENGINE=存储引擎 CHARSET=编码; \n")),Object(l.b)("p",null,"MySQL中的数据类型："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"数值型：整数型、浮点数、定点数\n",Object(l.b)("img",c({parentName:"li"},{src:"./imgs/mysql_int.png",alt:null})),Object(l.b)("img",c({parentName:"li"},{src:"./imgs/mysql_float.png",alt:null}))),Object(l.b)("li",{parentName:"ul"},"字符串类型\n",Object(l.b)("img",c({parentName:"li"},{src:"./imgs/mysql_string.png",alt:null}))),Object(l.b)("li",{parentName:"ul"},"日期(可以用整型保存时间戳来代替)\n",Object(l.b)("img",c({parentName:"li"},{src:"./imgs/mysql_date.png",alt:null})))),Object(l.b)("h2",{id:"php连接mysql的三种方式"},"php连接mysql的三种方式"),Object(l.b)("p",null,"php操作Mysql的三种方式。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MySQL: 非永久连接，性能比较低，php5.5以后废弃。"),Object(l.b)("li",{parentName:"ul"},"MySQLi: 永久连接，减轻服务器压力，只支持MySQL。坏处是浪费内存。"),Object(l.b)("li",{parentName:"ul"},"PDO: 能实现MySQLi的常用功能，支持大部分数据库。")),Object(l.b)("p",null,"通过php扩展查看函数 phpinfo() 查看是否支持这几种方式，搜索mysqli/pdo等。"),Object(l.b)("p",null,"如果不支持，可以打开php.ini开启，去掉前面的分号。"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"// 打开php mysql扩展，前面是分号则是注释。\nextension=php_mysql.dll;\n\n// 搜索mysqli\nextension=php_mysqli.dll;\n\n// pdo\nextension=php_pdo_mysqli.dll;\n")),Object(l.b)("p",null,"然后重启服务。"),Object(l.b)("h2",{id:"mysql方式"},"MySQL方式"),Object(l.b)("h3",{id:"mysql连接数据库"},"MySQL连接数据库"),Object(l.b)("p",null,"php5.5已经废弃了。"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"// 1.连接数据库 mysql -uroot -p123456;\nmysql_connect($server, $username, $password)\n\n// 2.选择数据库 use db \nmysql_select_db($db_name)\n\n// 3.设置字符集 set names utf8;\nmysql_set_charset($charset)\n\n// 4.执行SQL语句\nmysql_query($query) INSERT/UPDATE/DELETE成功返回TRUE，出错返回FALSE\n\n// 命令行\nselect * from 'user'\n")),Object(l.b)("p",null,"下面是详细代码："),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"// 1.连接数据库，如果正确，会返回一个资源\n$link = mysql_connect('localhost', 'root', '') or die(\"数据库连接失败！\");\n\n// 2.选择数据库，系统默认有个test数据库\nmysql_select_db('test'); \n\n// 3.设置字符集\nmysql_set_charset('utf8');\n\n// 关闭连接\nmysql_close($link);\n\n// SQL\n// 插入数据\n$result = mysql_query('INSERT INTO users VALUES(NULL,'李四','20)');\n// 修改数据\n$result = mysql_query('UPDATE users SET money=25 where name='李四';\n// 删除单条数据\n$result = mysql_query('DELETE FROM users where name='李四';\n// 新建表 create table test(\n//       id int,NOT NULL AUTO_INCREMENT, \n                PRIMARY KEY(personID) ,\n//       name varchar(200)\n//       )\n// show databases \n// show tables\n// 删除表\n$result = mysql_query('DROP TABLE test');\n")),Object(l.b)("p",null,"如果不是致命报错，可以在函数前面加@忽略掉。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"查询")),Object(l.b)("p",null,"查询成功后会返回一个资源句柄，传递给",Object(l.b)("inlineCode",{parentName:"p"},"mysql_fetch_array($result)"),"和其它函数来处理结果表，取出返回的数据。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mysql_fetch_array($result)"),"每次只能取出一条数据。第二个参数控制返回的是索引还是关联数组。 可以是常量",Object(l.b)("inlineCode",{parentName:"li"},"MYSQL_ASSOC"),"、",Object(l.b)("inlineCode",{parentName:"li"},"MYSQL_ROW"),"、",Object(l.b)("inlineCode",{parentName:"li"},"MYSQL_BOTH"),"中的一个。"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mysql_fetch_row($result)"),"返回索引数组。"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mysql_fetch_ASSOC($result)"),"返回关联数组。")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"while ($line = mysql_fetch_array($result)){\n    $data[] = $line;\n}\nvar_dump($data);\n")),Object(l.b)("h3",{id:"mysqli面向过程操作数据库"},"MySQLi面向过程操作数据库"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"语法")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"// 1. 连接\n$connect = mysqli_connect('host', 'username', 'password', 'database');\n\n// 2.执行SQL\n$result = mysqli_query($connect, $sql);\n\n// 3. 获取结果集\nmysqli_fetch_all($result);\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"例子")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"header('content-type:text/html;charset=utf8');\n$conn = mysqli_connect('localhost', 'root', '', 'test');\nmysqli_query($conn, 'set names utf8');\n$sql = 'SELECT * FROM user';\n$result = mysqli_query($conn, $sql);\n$data = mysql_fetch_all($result, MYSQL_ASSOC);\nmysqli_close($conn);\n")),Object(l.b)("p",null,"数据库能做什么\n存储大量数据方便检索和访问\n保持数据信息的一致，完整\n共享和安全\n通过组合分析，产生新的有用信息"),Object(l.b)("p",null,"数据库（DB)\n数据库就是数据的仓库，可以存放结构化数据"),Object(l.b)("p",null,"数据库管理系统（DBMS）\n是一种软件，提供操作数据库的环境，可以对数据库进行操纵。"),Object(l.b)("p",null,"SQL\n结构化查询语句，用来和数据库交流"),Object(l.b)("p",null,"SQL规范：\n1. 不区分大小写，建议关键字大写，表名和列表小写\n2. 命令用分号结尾\n3. 命令可以缩进和换行，一种类型的关键字放在一行\n4. 可以写单行或多行注释，#和--是单行注释，/***/多行注释"),Object(l.b)("p",null,"数据表\n表是列的集合"),Object(l.b)("p",null,"MYSQL"),Object(l.b)("p",null,"MAMP"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"sudo ln -s /Applications/MAMP/Library/bin/mysql /usr/local/bin/mysql\n")),Object(l.b)("hr",null),Object(l.b)("p",null,'title: "mysql学习(2): 基本操作"\ndate: 2019-04-13 15:20:32'),Object(l.b)("h2",{id:"tags"},"tags:"),Object(l.b)("p",null,"win\nmysql\nxampp\nnavicat Premium ：连接本地/服务器mysql"),Object(l.b)("p",null,"mysql/my.ini"),Object(l.b)("p",null,"类型\n数值"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"整数\n小数"),Object(l.b)("li",{parentName:"ul"},"浮点型 float Double"),Object(l.b)("li",{parentName:"ul"},"定点 decimal")),Object(l.b)("p",null,"非空约束\n默认值\nINSERT INTO ",Object(l.b)("inlineCode",{parentName:"p"},"<table_name>"),"(keys) VALUES(values)"),Object(l.b)("p",null,"主键约束"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"主键一个就行了"),Object(l.b)("li",{parentName:"ul"},"主键是用来两个表间建立连接的，最好不更新")),Object(l.b)("p",null,"DDL 数据定义语言 data define language，主要用于定义和改变表的结构"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-ddl"}),"CREATE TABLE `student` // 如果是关键字需要加反引号 如 `TABLE`\n(\n    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(50),\n    age int(11),\n    city VARCHAR(50)\n);\n\n-- 增加一列\nALTER TABLE student ADD COLUMN idcard VARCHAR(20) NULL AFTER age;\n-- 修改一列\nALTER TABLE student MODIFY COLUMN idcard VARCHAR(30);\n-- 删除一列\nALTER TABLE student DROP COLUMN idcard;\n\n-- 增加主键约束\nALTER TABLE student ADD PRIMARY KEY(id);\n-- 增加唯一索引\nALTER TABLE student ADD UNIQUE INDEX uq_idcard(idcard);\n-- 增加默认值\nALTER TABLE student MODIFY COLUMN city VARCHAR(50) DEFAULT 'beijing';\n-- 增加外键约束，表score里fk_student_id添加 student 的 id\nALTER TABLE score ADD CONSTRAINT fk_student_id FOREIGN KEY(student_id) REFERENCES student(id);\n-- 删除外键约束\nALTER TABLE score ADD FOREIGN KEY fk_student_id;\n")),Object(l.b)("p",null,"MODIFY 和 CHANGE(可以改列的名字)"),Object(l.b)("p",null,"DML 数据库操作语言 data manipulation language\nSELECT UPDATE INSERT DELETE"),Object(l.b)("p",null,"ID在分布式有问题，UUID"),Object(l.b)("p",null,"DCL datacontrol  用来设置和更改数据库用户和角色权限的语句，包括grant，revoke等"),Object(l.b)("p",null,"SQL "),Object(l.b)("p",null,"运算符号 +-*/%\n逻辑运算 AND OR NOT\n",Object(l.b)("inlineCode",{parentName:"p"},"比较 = > <  ( <>或!=不等于 )   >= <= ")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"INSERT INTO student(name,age,idcard,city) VALUES('zs',12,'321321','beijing')\n")),Object(l.b)("p",null," 注意\n1. 每次插入一行数据，不能只插入一部分数据"),Object(l.b)("p",null," 更新，一定要加where条件"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"UPDATE student SET name='lisi'\nUPDATE student SET name='lisi',age=2 WHERE id=2 OR city IS NULL;\n")),Object(l.b)("p",null,"删除"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"DELETE FROM student\nDELETE FROM student WHERE id=2\n")),Object(l.b)("p",null,"截断表"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"-- 数据全部清空，表的结构不动，重新开始编号\n-- 不会写入日志，数据不能恢复，尽量不要使用\nTRUNCATE table <table_name>\n")),Object(l.b)("p",null,"查询"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT <col_name> as(可加可不加) <alias_name>\nFROM  <table_name>\nWHERE city='beijing' \nORDER BY id <ASC|DESC>\n")),Object(l.b)("p",null,"分页 limit offset, limit"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM student\nLIMIT 2, 2\n")),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"相同记录出现一次\nSELECT DISTINCT ..\n")),Object(l.b)("p",null,"'2'+'1' -> 3\n'xx' + '2' + 'ff' -> 2\nCONCAT('a', '2', 'b') -> a2b"),Object(l.b)("p",null,"函数\nLENGTH('hello')\nCONCAT_WS('z','#','s','@') -> #sz@"),Object(l.b)("p",null,"UPPER('S') -> 大写\nLOWER('s')"),Object(l.b)("p",null,"SUBSTR('hello' FROM 2 FOR 3 )  -> ell  索引从1开始"),Object(l.b)("p",null,"首字母大写\nSELECT name, CONCAT(UPPER(SUBSTR(name,1,1)), LOWER(SUBSTR(name, 2))) FROM student;"),Object(l.b)("p",null,"TRIM(' h ')\nLTRIM()\nRTRIM()"),Object(l.b)("p",null,"TRIM('@' FROM '@ii@') -> ii"),Object(l.b)("p",null,"补齐多少位\n0088\n10000\nLPAD('88', 4, '0') 补成4位，左边补0\nRPAD"),Object(l.b)("p",null,"替换字符串\nREPLACE('@ii@', '@', '')\n格式化\nFORMAT(10000,2) -> 100,00\nFORMAT(888.4567,3) -> 888.457"),Object(l.b)("p",null,"取多少位\nLEFT('hello', 1) -> h\nRIGHT()"),Object(l.b)("p",null,"数学函数\nCEIL(10.11) -> 11\nFLOOR(10.11) -> 10\nMOD(10, 3) -> 1  取模\nROUND(10.4) -> 10 四舍五入\nTRUNCATE(10.99, 1) -> 10.9"),Object(l.b)("p",null,"日期函数\nNOW() 日期 + 时间\nCURDATE()  日期\nCURTIME()  时间\nDATE_ADD(NOW, INTERVAL 1 DAY); 加一天\nDATE_ADD(NOW, INTERVAL 1 MONTH); 加一天\nDATE_DIFF('2018-01-09', NOW()) 差多少天\nYEAR(NOW())\nMONTH(NOW())\nDAY()\nHOUR()\nMINUTE()\nSECOND()"),Object(l.b)("p",null,"字符串转日期\nSTR_TO_DATE('2018-09-09','%Y%m-%d')\nFORMAT(NOW(), '$Y年%m月%d日')"),Object(l.b)("p",null,"CONNECTION_ID() 取连接id\nDATABASE()\nVERSION()\nUSER() 登陆用户\nMD5()"),Object(l.b)("p",null,"SELECT * FROM mysql.user\nPASSWORD('xx') 修改当前密码为xx"),Object(l.b)("p",null,"IF(1>2, 'A', 'B')  -> B"),Object(l.b)("p",null,"SELECT grade,\nCASE\nWHEN grade >=60 THEN '及格'\nWHEN \"A\" THEN '不及格'\nELSE '未知'\nEND\nFROM score;"),Object(l.b)("p",null,"update student set email = UPPER(email)"),Object(l.b)("p",null,"多列排序\n查询未知\nINSTR(str,substr)\nposition\nlocate"),Object(l.b)("p",null,"convert('1', signed) 将字符串转数字,用于比较"),Object(l.b)("p",null,"将level 1-1   按照- 前面数升序，后面降序\nselect * from student\norder by substr(level,1, 1) asc, xx . desc"),Object(l.b)("p",null,"可以自定义函数"),Object(l.b)("p",null,"create function znow() returns varchar(50)\nreturn date_format(now(), '%Y年%m月%d日 %h:%i:%s');"),Object(l.b)("p",null,"create function zadd(num1 int, num2 int) returns int\nreturn num1 + num2;"),Object(l.b)("p",null,"create table stu2(id int primary key auto_increment, name varchar(50))\nselect * from stu2;"),Object(l.b)("p",null,"-- 声明一个函数，传入一个名称，函数里把这个名字插入到stu2表中，然后返回id\ncreate function addUser(name varchar(50)) returns int\nbegin\ninsert into stu2(name) values(name);\nreturn last_insert_id();\nend"),Object(l.b)("h2",{id:"like"},"like"),Object(l.b)("p",null,"select * from stu2 where name like '%2%'",Object(l.b)("br",{parentName:"p"}),"\n","%表示任意长度字符\n_ 表示任意一个字符"),Object(l.b)("p",null,"查询某一列在指定规范内的记录，包括两个边界。\nselect ",Object(l.b)("em",{parentName:"p"}," from score where grade between 60 and 100;\nselect ")," from score where grade>=60 and grade<=100;"),Object(l.b)("p",null,"查询某一列的值在内容列表\nselect ",Object(l.b)("em",{parentName:"p"}," from student where city in ('北京' , '上海')\nselect ")," from student where city = '北京'  or city = '上海')"),Object(l.b)("p",null,"is null\nis not null"),Object(l.b)("p",null,"聚合函数"),Object(l.b)("p",null,"-- 计算id=1的学生的总分\nselect sum(grade) from score where student_id = 1;"),Object(l.b)("p",null,"select max(grade) from score where student_id = 1;\nselect min(grade) from score where student_id = 1;\nselect avg(grade) from score where student_id = 1;"),Object(l.b)("p",null,"select count(grade) from score where student_id = 1;"),Object(l.b)("p",null,"分组: select只能跟分组的列和列的聚合函数\nSELECT student_id, SUM(grade) FROM score\nGROUP BY student_id   -- 可以多个字段分组\nHAVING SUM(grade) > 550;   "),Object(l.b)("p",null,"WHERE 用来过了分组前的记录\nHAVING 用来过滤分组后的记录\ncount 统计不为NULL的条数，如果要NULL的，可以写个常量 count('xx')"),Object(l.b)("p",null,"子查询\nSELECT * from student where age > (select avg(age) from student)"),Object(l.b)("p",null,"ANY SOME ALL"),Object(l.b)("p",null,"-- 查询同学年龄大于 陕西省所有同学的年龄"),Object(l.b)("p",null,"select ",Object(l.b)("em",{parentName:"p"}," from student where age > all (select age from student where province = '陕西省')\nselect ")," from student where age > any (select age from student where province = '陕西省')\nselect * from student where age > some (select age from student where province = '陕西省')"),Object(l.b)("p",null,"IN | NOT IN\n-- 查询一下有考试成绩的学生信息\nselect * from student where id not in (select student_id from score)"),Object(l.b)("p",null,"-- EXIST  NOT EXIST\nselect * from student where exist (select student_id from score where score.student_id = student.id)"),Object(l.b)("h2",{id:"连接"},"连接"),Object(l.b)("p",null,"连接条件\nON WHERE"),Object(l.b)("p",null,"内连接  是两个表交叉相乘\nselect ",Object(l.b)("em",{parentName:"p"}," from score inner join student;\nselect ")," from score,student;"),Object(l.b)("p",null,"select * from score inner join student on score.student_id = student.id;"),Object(l.b)("p",null,"left join\nright join"),Object(l.b)("p",null,"full join (mysql没有)"),Object(l.b)("p",null,"自连接：自己连接自己\n菜单里显示父级名称\nselect c1.id, c1.name, c2.name '父类'\nfrom category c1\ninner join category c2\nON c1.parent_id = c2.id;"),Object(l.b)("p",null,"select c1.id, c1.name, IF(c2.name!='',c2.name, '顶级分类') '父类'\nfrom category c1\nleft join category c2\nON c1.parent_id = c2.id;"),Object(l.b)("p",null,"mysql sql 关系型\nmongo  nosql 非关系\nredis key-value"),Object(l.b)("p",null,"删除重复数据\n查询重复数据的id\nselect c1.id from category c1\nwhere c1.name in\n(select name from category c2 group by name having count(1)> 1)\nand c1.id not in\n(select MIN(c3.id) from category c2 group by name having count(1)> 1)"),Object(l.b)("p",null,"多表联合更新\nUPDATE student INNER JOIN province on student.province = province.name\nSET student.province = province.id"),Object(l.b)("h2",{id:"设计"},"设计"),Object(l.b)("p",null,"良好的：\n1. 节省数据存储空间\n2. 保证数据完整性\n3. 方便数据库系统开发"),Object(l.b)("p",null,"糟糕\n1. 数据冗余，浪费空间\n2. 内存空间浪费\n3. 数据更新插入异常"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"需求分析阶段"),Object(l.b)("li",{parentName:"ul"},"概要设计阶段：E-R模型图"),Object(l.b)("li",{parentName:"ul"},"详细设计阶段：三大范式"),Object(l.b)("li",{parentName:"ul"},"代码编写"),Object(l.b)("li",{parentName:"ul"},"软件测试"),Object(l.b)("li",{parentName:"ul"},"安装部署")),Object(l.b)("p",null,"搜集信息\n标示实体"),Object(l.b)("p",null,"数据库ER图"),Object(l.b)("p",null,"RBAC\n基于角色的权限访问控制(Role-based access control)"),Object(l.b)("p",null,"关联表"),Object(l.b)("p",null,"事务\n转账问题，一个加一个减\n事务是一个完整的操作"),Object(l.b)("p",null,"创建start transaction或begin   ... END\n提交commit\n回滚撤销rollback"),Object(l.b)("p",null,"BEGIN;\nUPDATE xxx;\nCOMMIT;  // 其它命令行查询才生效，否则只是缓存"),Object(l.b)("p",null,"默认每条sql是一个事务\n默认是自动提交的，可以通过set autocommit 0|1 关闭和开启"),Object(l.b)("h2",{id:"node"},"node"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"npm i mysql \n")),Object(l.b)("p",null,"默认是连 取  销毁\n连接池: 直接取就行"),Object(l.b)("p",null,"密码 process.evn.PASSWORD 一般放环境变量中"),Object(l.b)("h2",{id:"一条sql查询语句是如何执行的"},"一条SQL查询语句是如何执行的"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"mysql 组成?\nMySQL模块组成：")),Object(l.b)("p",null,Object(l.b)("img",c({parentName:"p"},{src:"./mysql/1.png",alt:null}))),Object(l.b)("p",null,"Server层包括：连接器、查询缓存(8.0移除了)、分析器、优化器、执行器，内置函数，存储过程，触发器，视图等。\n存储引擎负责数据的存储和提取。架构模式是插件式，支持InnoDB、MyISAM、Memory等存储引擎，5.5.5后默认式InnoDB。如create table时。不同引擎存取方式不同，功能也不同。"),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"连接器")),Object(l.b)("p",null,"用户客户端和服务端的连接，TCP后验证账户密码，密码不对则报错，通过则到权限表查你的权限。所以连接后，管理员修改了权限，你还是能之前的权限，除非重新连接。"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{}),"mysql -h localhost -u root -p\nmysql -h$ip -P$port -u$user -p\nmysql -hlocalhost -uroot -p\nmysql -h127.0.0.1 -uroot -p\n")),Object(l.b)("p",null,"连接后，如果没有后续动作，连接处于空闲，可以在show processlist;看到Sleep。\n客户端太长时间不动，则连接器断开它，wait_timeout控制，默认8h"),Object(l.b)("h2",{id:"node连接mysql"},"node连接mysql"),Object(l.b)("p",null,"node连接mysql使用的是npm包",Object(l.b)("inlineCode",{parentName:"p"},"mysql"),"。"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-bash"}),"npm i mysql\n")),Object(l.b)("p",null,"然后通过下面配置："),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"const mysql = require('mysql')\nconst con = mysql.createConnection({\n    host: 'localhost',\n    port: '3306',\n    // 如果是安装的mysql 需要配置socketPath: '/var/run/mysqld/mysqld.sock',\n    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',  // MAMP\n    user: 'root',\n    password: '',\n    database: 'myblog'\n})\ncon.connect(function (err) {\n    if(err){\n        console.log(err)\n        return \n    }\n    console.log('数据库连接成功')\n})\n")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://dev.mysql.com/doc/refman/5.7/en/"}),"https://dev.mysql.com/doc/refman/5.7/en/")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://blog.sessionstack.com/@zlatkov"}),"https://blog.sessionstack.com/@zlatkov")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e"}),"https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e"),"\n",Object(l.b)("a",c({parentName:"p"},{href:"https://medium.com/reloading/javascript-start-up-performance-69200f43b201"}),"https://medium.com/reloading/javascript-start-up-performance-69200f43b201")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://mathiasbynens.be/notes/javascript-unicode"}),"https://mathiasbynens.be/notes/javascript-unicode")),Object(l.b)("p",null,Object(l.b)("a",c({parentName:"p"},{href:"https://mgechev.github.io/javascript-algorithms/index.html"}),"https://mgechev.github.io/javascript-algorithms/index.html"),"\n",Object(l.b)("a",c({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/why-performance-matters/"}),"https://developers.google.com/web/fundamentals/performance/why-performance-matters/"),"\n",Object(l.b)("a",c({parentName:"p"},{href:"https://wpostats.com/"}),"https://wpostats.com/")))}u.isMDXComponent=!0}}]);