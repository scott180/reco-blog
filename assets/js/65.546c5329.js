(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{620:function(s,a,t){"use strict";t.r(a);var r=t(13),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("一 、logbin日志 记录新增、更新、删除的sql "),t("a",{attrs:{href:"https://www.cnblogs.com/kerrycode/p/6610874.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考1"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/handle/p/9761702.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考2"),t("OutboundLink")],1)])]),s._v(" "),t("blockquote",[t("p",[s._v("二、general_log 记录增删改查所有日志 "),t("a",{attrs:{href:"http://www.zsythink.net/archives/1246",target:"_blank",rel:"noopener noreferrer"}},[s._v("general log"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"一-、logbin日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-、logbin日志"}},[s._v("#")]),s._v(" 一 、logbin日志")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("binary")]),s._v(" logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" binlog events "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql-bin.000090'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242985028")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("hr"),s._v(" "),t("ul",[t("li",[s._v("1、检查是否开启")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("检查是否开启\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%log_bin%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlog_bin 为 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 则已开启，为 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("off")]),s._v("则未开启。\n\n查询所有日志文件\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("binary")]),s._v(" logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n查询最近日志文件\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("br"),s._v(" "),t("ul",[t("li",[s._v("2、开启log-bin日志记录")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("找到my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnf 中 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  添加如下\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" # binlog 配置\nlog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\\\ProgramFiles\\\\mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("winx64\\\\logs\\\\mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\nexpire"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("days "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\nmax"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("binlog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 500M\nserver"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("br"),s._v(" "),t("ul",[t("li",[s._v("3、查询")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" BINLOG EVENTS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" row_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" binlog events "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql-bin.000001'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-----+----------------+-----------+-------------+---------------------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Log_name         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Pos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Event_type     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" End_log_pos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Info                                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-----+----------------+-----------+-------------+---------------------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Format_desc    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server ver: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Binlog ver: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Previous_gtids "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("154")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("154")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Anonymous_Gtid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("219")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@SESSION.GTID_NEXT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ANONYMOUS'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("219")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Query          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("292")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("292")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Table_map      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" table_id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("125")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ins_car_team"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-----+----------------+-----------+-------------+---------------------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitcode.net/xu180/imgs/-/raw/master/other/mysql-bin.png",alt:"m"}})]),s._v(" "),t("br"),s._v(" "),t("ul",[t("li",[s._v("4、导出文件")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysqlbinlog "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("表更新时间（mysql 5.7.2以下版本无效 ）\nselect TABLE_NAME,UPDATE_TIME from information_schema.TABLES where TABLE_SCHEMA='databaseTest' order by UPDATE_TIME desc limit 10;\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"二、general-log日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、general-log日志"}},[s._v("#")]),s._v(" 二、general_log日志")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("是否开启 general_log日志\nshow variables where variable_name like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%general_log%"')]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("variable_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log_output"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n开启\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global general_log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global log_output "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"table"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n查看sql\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from mysql.general_log where argument like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%select%'")]),s._v("   ORDER BY event_time DESC limit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n清除日志\nTRUNCATE table mysql.general_log\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitcode.net/xu180/imgs/-/raw/master/other/mysql.general_log.jpg",alt:"g"}})]),s._v(" "),t("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);