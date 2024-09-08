(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{432:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-while循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-while循环"}},[s._v("#")]),s._v(" 1.while循环")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("while循环基本结构;")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" 条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   \n    结果\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果条件为真，那么循环则执行")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果条件为假，那么循环不执行")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("debug模式显示每一步运行结果;")])]),s._v(" "),t("li",[t("p",[s._v("经典代码格式错误与优化:")])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("错误示范"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\ncount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#count += 1 缩进一次仍在while的循环内")]),s._v("\n\n正确案例"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\ncount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        \n优化案例"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\ncount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("关键字")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("break       **              #终止")]),s._v("当前**循环;")]),s._v(" "),t("li",[s._v("**continue **(继续)    #如果碰到continue,则退出当前循环,立即回到while条件位置.")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("s",[t("em",[s._v("while else   #while条件不再满足时执行else.")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-字符串格式化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串格式化"}},[s._v("#")]),s._v(" 2.字符串格式化")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("\\n换行符")])]),s._v(" "),t("li",[t("p",[s._v("基本格式")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入姓名:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nage "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入年龄:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\njob "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入工作:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhobby "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入爱好:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmsg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n---------- info of bigox ----------\nName\t:%s\nAge\t\t:%s\nJob\t\t:%s\nHobby\t:%s\n------------- end -------------'''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("小钻风"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("girl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("li",[t("ul",[t("li",[s._v("%s\t表示字符串;")]),s._v(" "),t("li",[s._v("%d        表示数字;")]),s._v(" "),t("li",[s._v("%%        字符串格式化时表示百分数.")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-运算符-特殊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-运算符-特殊"}},[s._v("#")]),s._v(" 3.运算符(特殊)")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("算数运算")]),s._v(" "),t("ul",[t("li",[s._v("%取余")]),s._v(" "),t("li",[s._v("**幂")]),s._v(" "),t("li",[s._v("//整除")])])]),s._v(" "),t("li",[t("p",[s._v("比较运算")]),s._v(" "),t("ul",[t("li",[s._v("==比较对象是否相等")]),s._v(" "),t("li",[s._v("!=不等于")])])]),s._v(" "),t("li",[t("p",[s._v("赋值运算")]),s._v(" "),t("ul",[t("li",[s._v("+=  加法赋值: c+=a  <==>   c =c+a")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("逻辑运算")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("bool类型数字0和空字符串''是False,其余是True.")])])]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v('and  "与"')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("v  = 1 and 9   =====>  v = 9   #如果第一个值转换为布尔值时如果为True,则v=第二个值;\nv1 = 0 and 1   =====>  v = 0   #如果第一个值转换为布尔值时如果为False,则v=第一个值;\nv1 = 0 and ''  =====>  v = 0   #如果有多个and,从左到右进行判断.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v('or  "或"')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("v  = 1 or 9   =====>  v = 1    #如果第一个值转换为布尔值时如果为True,则v=第一个值;\nv1 = 0 or 1   =====>  v = 1    #如果第一个值转换为布尔值时如果为False,则v=第二个值;\nv1 = 0 or ''  =====>  v = ''   #如果有多个or,从左到右进行判断.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v('not   "非"')])])])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("在没有()的情况下,not优先级大于and,and优先级大于or,即 () >not >and > or.同一优先级从左往右计算.")])])])])]),s._v(" "),t("h2",{attrs:{id:"_4-编码补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-编码补充"}},[s._v("#")]),s._v(" 4.编码补充")]),s._v(" "),t("ol",[t("li",[s._v("unicode 分为 ecs2 (2字节) 和 ecs4 (4字节).")]),s._v(" "),t("li",[s._v("gbk / gb2312  国标码扩展.两个字节表示中文.")]),s._v(" "),t("li",[s._v("utf-8 3个字节表示中文.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);