(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{456:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"内容回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容回顾"}},[s._v("#")]),s._v(" 内容回顾")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("操作系统")]),s._v(" "),t("p",[t("code",[s._v("操作系统负责调度进程,控制执行顺序,执行时间.负责资源分配")])]),s._v(" "),t("ul",[t("li",[s._v("多道操作系统")]),s._v(" "),t("li",[s._v("分时操作系统")]),s._v(" "),t("li",[s._v("实时操作系统")])])]),s._v(" "),t("li",[t("p",[s._v("进程")]),s._v(" "),t("ul",[t("li",[s._v("运行的程序就是一个进程")]),s._v(" "),t("li",[s._v("进程的调度\n"),t("ul",[t("li",[s._v("由操作系统完成进程调度")])])]),s._v(" "),t("li",[s._v("进程的三种状态(图)\n"),t("ul",[t("li",[s._v("就绪,阻塞,运行")])])])])]),s._v(" "),t("li",[t("p",[s._v("同步&异步")]),s._v(" "),t("ul",[t("li",[s._v("同步:(洗剪吹)调用一个方法要等待这个方法结束")]),s._v(" "),t("li",[s._v("异步:(理发玩手机)调用一个方法,不用等待这个方法结束,互不干扰")])])]),s._v(" "),t("li",[t("p",[s._v("阻塞非阻塞")]),s._v(" "),t("ul",[t("li",[s._v("阻塞:cpu不工作")]),s._v(" "),t("li",[s._v("非阻塞:cpu工作")])])]),s._v(" "),t("li",[t("p",[s._v("并发&并行")]),s._v(" "),t("ul",[t("li",[s._v("并发:多个程序轮流使用一个cpu,轮流执行")]),s._v(" "),t("li",[s._v("并行:多个程序,一个程序在一个cpu上运行,多个程序同时进行.")])])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#小明自己觉得自己是"main",别人觉得他是小明!')]),s._v("\n__name__"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行文件就是__name__所在的文件")]),s._v("\n__name__"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__文件名__'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行的文件时是导入的模块")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_1-认识线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-认识线程"}},[s._v("#")]),s._v(" 1. 认识线程")]),s._v(" "),t("ul",[t("li",[s._v("进程是计算机中最小的资源分配单位,主要功能对数据进行隔离")]),s._v(" "),t("li",[s._v("创建进程和销毁进程,进程之间切换时间开销很大")])]),s._v(" "),t("p",[t("strong",[s._v("线程")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("线程是进程的一部分")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("所有进程至少有一个线程")]),s._v(",线程进行执行代码,不存储代码,进程是计算机中最小的资源分配单位,主要功能对数据进行隔离")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("进程")]),s._v("是计算机中"),t("strong",[s._v("最小的资源分配")]),s._v("单位,"),t("strong",[s._v("线程")]),s._v("是计算机中"),t("strong",[s._v("能被cpu调度的最小")]),s._v("单位. * * *")])]),s._v(" "),t("li",[t("p",[s._v("线程的创建也需要一些开销.")]),s._v(" "),t("ul",[t("li",[s._v("线程的创建/销毁/切换时间开销都远远小于进程")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-进程"}},[s._v("#")]),s._v(" 2.进程")]),s._v(" "),t("h3",{attrs:{id:"_2-1-multiprocessing模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-multiprocessing模块"}},[s._v("#")]),s._v(" 2.1  multiprocessing模块")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("multiple 多元的   processing 进程")])]),s._v(" "),t("li",[t("p",[s._v("os.getpid() 查看程序pid")])]),s._v(" "),t("li",[t("p",[s._v("主进程--\x3e子进程")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("pycharm进程里的程序都是charm的子进程")])]),s._v(" "),t("li",[t("p",[s._v("主进程负责回收子进程的资源,如果子进程执行结束,父进程未回收资源,则该子进程变成僵尸进程")])]),s._v(" "),t("li",[t("p",[s._v("主进程和子进程之间数据隔离")])]),s._v(" "),t("li",[t("p",[s._v("主进程的结束逻辑:")]),s._v(" "),t("ol",[t("li",[s._v("主机进程开启")]),s._v(" "),t("li",[s._v("所有子进程结束")]),s._v(" "),t("li",[s._v("给子进程回收资源")]),s._v(" "),t("li",[s._v("主进程结束")])])]),s._v(" "),t("li",[t("p",[s._v("进程进程之间联系是基于文件的")])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#子进程开启方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" multiprocessing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Process\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'start'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getpid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'end'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getpid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main:'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getpid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-2-join方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-join方法"}},[s._v("#")]),s._v(" 2.2 join方法")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("阻塞,直到子进程结束就结束")])]),s._v(" "),t("li",[t("p",[s._v("同步阻塞,直到对应的子进程结束之后结束阻塞")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" multiprocessing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Process\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send_mile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发送完毕'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    lis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("send_mile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        lis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" lis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'start异步'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);