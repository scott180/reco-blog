(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{648:function(s,a,t){"use strict";t.r(a);var n=t(13),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("#打开定时任务\ncrontab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e\n\n#添加定时任务\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cut_nginx_logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n#"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":wq"')]),s._v("保存并退出\n\n#十分钟执行一次\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("timerSearch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("timerSearchDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n\n#查看定时任务"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("就会看到你添加的内容了\ncrontab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("说明：\n\n分钟   小时   日   月   星期   命令\n*        *      *    *     *       *\n\n第1列表示分钟1～59 每分钟用*或者 */1表示\n第2列表示小时1～23（0表示0点）\n第3列表示日期1～31\n第4列 表示月份1～12\n第5列标识号星期0～6（0表示星期天）\n第6列要运行的命令\n\nhttps://blog.csdn.net/sukangshen/article/details/78900147\nhttps://blog.csdn.net/fangyuying128825/article/details/71600969\nhttp://www.cnblogs.com/peida/archive/2013/01/08/2850483.html\n\n/etc/crontab\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用例"}},[s._v("#")]),s._v(" 用例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('功能：mysql 每天定时备份， 并删除7天以前的备份\n\n#!/bin/bash\ndocker_name = mysql57\ndata_dir="/path/to/save/data/"\ndocker exec-it ${docker_name} mysqldump -uroot -ppasswd --all-databases > "$data_dir/data_`date +%Y%m%d`.sql"\nif [ $? -ne 0 ];then\n    # 任务失败，发送邮件\n    echo -e "邮件正文" | mail -s \'标题\' 123456@gmail.com\n    exit -1\nfi\nfind $data_dir -mtime +7 -name \'data_[1-9].sql\' -exec rm -rf {} \\;\n\n\n参考：https://www.jianshu.com/p/be1e581acb8e\n\n\t\n0 2 * * * sh /absolute/path/to/mysql_dumps.sh > /absolute/path/to/mysql_dumps.log 2>&1\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("hr"),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("定时查询docker的mysql数据库并保存\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#file=/home/share/timerSearch/record.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#crontab -uroot -e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#*/1 * * * * /bin/bash /home/share/timerSearch/timerSearchDB.sh >> /home/share/timerSearch/record.txt 2>&1")]),s._v("\necho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"===============begin========================="')]),s._v(" \necho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"定时查询脚本启动了。。。"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d %H:%M:%S"')]),s._v(" \n\ndocker_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mobile_ucc_db_1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"use UPLUS;select id,loginName,name,password,idcard,field29 from T_USER where loginName='admin'\\G;\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker exec -it ${docker_name} mysql -uroot -pweb123 -e $sql  >> $file")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i mobile_db_1 mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pweb123 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"select now();use UCCPLUS;select id,loginName,name,password,idcard,field29 from T_USER where loginName='admin'\\G;\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("share")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("timerSearch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("recordDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n\necho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" \necho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[s._v("#")]),s._v(" 报错")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("报错 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bad interpreter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" No such file or directory   临时文件夹\n\t原因：这是不同系统编码格式引起的：在windows系统中编辑的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh文件可能有不可见字符，所以在Linux系统下执行会报以上异常信息。\n\t解决：\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）在windows下转换：\n\t利用一些编辑器如UltraEdit或EditPlus等工具先将脚本编码转换，再放到Linux中执行。转换方式如下（UltraEdit）：File"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Conversions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UNIX")]),s._v("即可。\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）在linux中编写改脚本。\n\n\t\n报错the input device is not a "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TTY")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("https")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csdn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u011328417"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("article"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("details"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77177904")]),s._v("\n\t去掉命令中去掉t 错误解决\n\n\t命令改为：docker exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i 。。。。。\n\n\t\n\t\n不执行sql原因可能是环境变量问题：\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、写成绝对路径\n\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、脚本添加环境变量\n\t#"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("profile\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bash_profile\n\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("https")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csdn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cy309173854"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("article"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("details"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53186516")]),s._v("\n\t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("M")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bad interpreter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("没有那个文件或目录解决\n因为操作系统是windows，我在windows下编辑的脚本，所以有可能有不可见字符。\n脚本文件是DOS格式的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 即每一行的行尾以\\n\\r来标识"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 其ASCII码分别是"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x0D")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x0A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nvim filename\n然后用命令\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("set ff"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" #可以看到dos或unix的字样"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 如果的确是dos格式的。\n \n然后用\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("set ff"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unix #把它强制为unix格式的"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 然后存盘退出。\n再次运行脚本。\n\t\nhttps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csdn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ywb201314"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("article"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("details"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51909976")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);