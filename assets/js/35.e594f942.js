(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{356:function(n,s,t){"use strict";t.r(s);var a=t(3),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"_1-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[n._v("#")]),n._v(" 1. 前言")]),n._v(" "),s("ul",[s("li",[n._v("channel是Golang在语言层面提供的goroutine间的通信方式，比Unix管道更易用也更轻便。channel主要用于进程内各goroutine间通信，如果需要跨进程通信，建议使用分布式系统的方法来解决。")]),n._v(" "),s("li",[n._v("channel存在"),s("code",[n._v("3种状态")]),n._v("：\n"),s("ol",[s("li",[s("strong",[n._v("nil，未初始化的状态，只进行了声明，或者手动赋值为"),s("code",[n._v("nil")])])]),n._v(" "),s("li",[s("strong",[n._v("active，正常的channel，可读或者可写")])]),n._v(" "),s("li",[s("strong",[n._v("closed，已关闭，千万不要误认为关闭channel后，channel的值是nil")])])])])]),n._v(" "),s("h2",{attrs:{id:"_2-chan数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-chan数据结构"}},[n._v("#")]),n._v(" 2. chan数据结构")]),n._v(" "),s("p",[s("code",[n._v("src/runtime/chan.go:hchan")]),n._v("定义了channel的数据结构：")]),n._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("type")]),n._v(" hchan "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("struct")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    qcount   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint")]),n._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 当前队列中剩余元素个数")]),n._v("\n    dataqsiz "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint")]),n._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 环形队列长度，即可以存放的元素个数")]),n._v("\n    buf      unsafe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Pointer "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 环形队列指针")]),n._v("\n    elemsize "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint16")]),n._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 每个元素的大小")]),n._v("\n    closed   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint32")]),n._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 标识关闭状态")]),n._v("\n    elemtype "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v("_type         "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 元素类型")]),n._v("\n    sendx    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint")]),n._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 队列下标，指示元素写入时存放到队列中的位置")]),n._v("\n    recvx    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("uint")]),n._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 队列下标，指示元素从队列的该位置读出")]),n._v("\n    recvq    waitq          "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 等待读消息的goroutine队列")]),n._v("\n    sendq    waitq          "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 等待写消息的goroutine队列")]),n._v("\n    lock mutex              "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// 互斥锁，chan不允许并发读写")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("blockquote",[s("p",[n._v("从数据结构可以看出channel由队列、类型信息、goroutine等待队列组成，下面分别说明其原理。")])]),n._v(" "),s("p",[n._v("​")]),n._v(" "),s("h3",{attrs:{id:"_2-1-环形队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-环形队列"}},[n._v("#")]),n._v(" 2.1 环形队列")]),n._v(" "),s("p",[n._v("chan内部实现了一个环形队列作为其缓冲区，队列的长度是创建chan时指定的。")]),n._v(" "),s("p",[n._v("下图展示了一个可缓存6个元素的channel示意图：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/m_f48c37e012c38de53aeb532c993b6d2d_r.png",alt:"null"}})]),n._v(" "),s("ul",[s("li",[n._v("dataqsiz指示了队列长度为6，即可缓存6个元素；")]),n._v(" "),s("li",[n._v("buf指向队列的内存，队列中还剩余两个元素；")]),n._v(" "),s("li",[n._v("qcount表示队列中还有两个元素；")]),n._v(" "),s("li",[n._v("sendx指示后续写入的数据存储的位置，取值[0, 6)；")]),n._v(" "),s("li",[n._v("recvx指示从该位置读取数据, 取值[0, 6)；")])]),n._v(" "),s("h3",{attrs:{id:"_2-2-等待队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-等待队列"}},[n._v("#")]),n._v(" 2.2 等待队列")]),n._v(" "),s("p",[s("strong",[n._v("从channel读数据，如果channel缓冲区为空或者没有缓冲区，当前goroutine会被阻塞。")]),n._v(" "),s("strong",[n._v("向channel写数据，如果channel缓冲区已满或者没有缓冲区，当前goroutine会被阻塞。")])]),n._v(" "),s("p",[n._v("被阻塞的goroutine将会挂在channel的等待队列中：")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("因读阻塞的goroutine会被向channel写入数据的goroutine唤醒；")])]),n._v(" "),s("li",[s("strong",[n._v("因写阻塞的goroutine会被从channel读数据的goroutine唤醒；")])])]),n._v(" "),s("p",[n._v("下图展示了一个没有缓冲区的channel，有几个goroutine阻塞等待读数据：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/m_f48c37e012c38de53aeb532c993b6d2d_r.png",alt:"null"}})]),n._v(" "),s("p",[n._v("注意，一般情况下recvq和sendq至少有一个为空。只有一个例外，那就是同一个goroutine使用select语句向channel一边写数据，一边读数据。")]),n._v(" "),s("h3",{attrs:{id:"_2-3-类型信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-类型信息"}},[n._v("#")]),n._v(" 2.3 类型信息")]),n._v(" "),s("p",[n._v("一个channel只能传递一种类型的值，类型信息存储在hchan数据结构中。")]),n._v(" "),s("ul",[s("li",[n._v("elemtype代表类型，用于数据传递过程中的赋值；")]),n._v(" "),s("li",[n._v("elemsize代表类型大小，用于在buf中定位元素位置。")])]),n._v(" "),s("h3",{attrs:{id:"_2-4-锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-锁"}},[n._v("#")]),n._v(" 2.4 锁")]),n._v(" "),s("p",[s("strong",[n._v("一个channel同时仅允许被一个goroutine读写。")])]),n._v(" "),s("h2",{attrs:{id:"_3-channel读写和关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-channel读写和关闭"}},[n._v("#")]),n._v(" 3. channel读写和关闭")]),n._v(" "),s("ol",[s("li",[s("strong",[n._v("关闭值为nil的channel")]),n._v("   panic")]),n._v(" "),s("li",[s("strong",[n._v("关闭已经被关闭的channel")]),n._v("  panic")]),n._v(" "),s("li",[s("strong",[n._v("向已经关闭的 channel写数据")]),n._v("  panic")]),n._v(" "),s("li",[n._v("读已经关闭的channel ,如果channel有值则读出,如果没有读出的数据是 channel中可插入类型的零值,第二个返回值一直为false.")]),n._v(" "),s("li",[n._v("如果使用select case 去hold一个已经关闭的channel, 永远都会取到一个channel中可插入类型的零值.")]),n._v(" "),s("li",[n._v("for range 如果channel有值则读出, 如果每有值读取已关闭channel 会结束遍历")])]),n._v(" "),s("h2",{attrs:{id:"_4-select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-select"}},[n._v("#")]),n._v(" 4. select")]),n._v(" "),s("p",[n._v("使用select可以监控多channel，比如监控多个channel，当其中某一个channel有数据时，就从其读出数据。")]),n._v(" "),s("p",[n._v("一个简单的示例程序如下：")]),n._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("package")]),n._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"fmt"')]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"time"')]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("func")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("addNumberToChan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("chanName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("chan")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        chanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<-")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("func")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" chan1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("chan")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" chan2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("chan")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("go")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("addNumberToChan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("chan1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("go")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("addNumberToChan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("chan2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("case")]),n._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<-")]),n._v(" chan1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Get element from chan1: %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("case")]),n._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<-")]),n._v(" chan2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Get element from chan2: %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"No element in chan1 and chan2.\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n            time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("*")]),n._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br")])]),s("p",[n._v("程序中创建两个channel： chan1和chan2。函数addNumberToChan()函数会向两个channel中周期性写入数据。通过select可以监控两个channel，任意一个可读时就从其中读出数据。")]),n._v(" "),s("p",[s("strong",[n._v("如果使用select case 去hold一个已经关闭的channel, 永远都会取到一个channel中可插入类型的零值.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);