(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{360:function(t,_,e){"use strict";e.r(_);var v=e(3),r=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"一-提高cpu利用率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-提高cpu利用率"}},[t._v("#")]),t._v(" 一. 提高cpu利用率")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220617171511.png",alt:"image-20220617171511527"}})]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("最早的并发能力：多进程并发")]),t._v("，当一个进程阻塞的时候，切换到另外等待执行的进程，这样就能尽量把CPU利用起来，CPU就不浪费了。")])]),t._v(" "),_("li",[_("p",[t._v("多进程、多线程已经提高了系统的并发能力，但是在当今互联网高并发场景下，为每个任务都创建一个线程是不现实的，因为会消耗大量的内存(进程虚拟内存会占用4GB[32位操作系统], 而线程也要大约4MB)。")])]),t._v(" "),_("li",[_("p",[t._v("大量的进程/线程出现了新的问题")]),t._v(" "),_("ul",[_("li",[t._v("高内存占用")]),t._v(" "),_("li",[t._v("调度的高消耗CPU")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-协程-和-m-n模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-协程-和-m-n模型"}},[t._v("#")]),t._v(" 1. 协程 和 m:n模型")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("大量的进程/线程出现了新的问题")]),t._v(" "),_("ul",[_("li",[t._v("高内存占用")]),t._v(" "),_("li",[t._v("调度的高消耗CPU")])])]),t._v(" "),_("li",[_("p",[t._v("其实一个线程分为“内核态“线程和”用户态“线程。")]),t._v(" "),_("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/459db145d4e702994548a1757238946f_1248x1064.png",alt:"img"}})]),t._v(" "),_("li",[_("p",[_("strong",[t._v("m:n 线程模型")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("M个用户态线程倚在N个核心线程身上， N个核心线程可能阻塞。每个核心态线程对应一个或多个用户态线程，至少包含一个调度线程。")])]),t._v(" "),_("li",[_("p",[t._v("M，一般只受资源或系统值限制。而对于N，一般受CPU数限制，如果核心线程阻塞")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220617171520.png",alt:"image-20220617171520833"}})])])])]),t._v(" "),_("li",[_("p",[t._v("协程跟线程是有区别的，线程由CPU调度是抢占式的，"),_("strong",[t._v("协程由用户态调度是协作式的")]),t._v("，一个协程让出CPU后，才执行下一个协程。")])])]),t._v(" "),_("h2",{attrs:{id:"二-goroutine调度器的gmp模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-goroutine调度器的gmp模型"}},[t._v("#")]),t._v(" 二. Goroutine调度器的GMP模型")]),t._v(" "),_("h3",{attrs:{id:"_1-goroutine特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-goroutine特点"}},[t._v("#")]),t._v(" 1. Goroutine特点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("OS线程（操作系统线程）一般都有固定的栈内存（通常为2MB）,一个"),_("code",[t._v("goroutine")]),t._v("的栈在其生命周期开始时只有很小的栈（典型情况下2KB），"),_("code",[t._v("goroutine")]),t._v("的栈不是固定的，他可以按需增大和缩小，"),_("code",[t._v("goroutine")]),t._v("的栈大小限制可以达到1GB，虽然极少会用到这么大。所以在Go语言中一次创建十万左右的"),_("code",[t._v("goroutine")]),t._v("也是可以的。")])]),t._v(" "),_("li",[_("p",[t._v("Goroutine特点：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("占用内存更小（几kb）")])]),t._v(" "),_("li",[_("p",[t._v("调度更灵活(runtime调度)")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Go调度本质是把大量的goroutine分配到少量线程上去执行，并利用多核并行，实现更强大的并发。")])])])]),t._v(" "),_("h3",{attrs:{id:"_2-gpm模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-gpm模型"}},[t._v("#")]),t._v(" 2. GPM模型")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("G")]),t._v(":  goroutine 协程")]),t._v(" "),_("p",[_("strong",[t._v("P")]),t._v(":  process 处理器")]),t._v(" "),_("p",[_("strong",[t._v("M")]),t._v(": 内核线程thread")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("在Go中，"),_("strong",[t._v("线程是运行goroutine的实体，调度器的功能是把可运行的goroutine分配到工作线程上")]),t._v("。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("全局队列")]),t._v("（Global Queue）：存放等待运行的G。")]),t._v(" "),_("li",[_("strong",[t._v("P的本地队列")]),t._v("：同全局队列类似，存放的也是等待运行的G，存的数量有限，不超过256个。新建G'时，G'优先加入到P的本地队列，如果队列满了，则会把本地队列中一半的G移动到全局队列。")]),t._v(" "),_("li",[_("strong",[t._v("P列表")]),t._v("：所有的P都在程序启动时创建，并保存在数组中，最多有"),_("code",[t._v("GOMAXPROCS")]),t._v("(可配置)个。")]),t._v(" "),_("li",[_("strong",[t._v("M")]),t._v("：线程想运行任务就得获取P，从P的本地队列获取G，P队列为空时，M也会尝试从全局队列"),_("strong",[t._v("拿")]),t._v("一批G放到P的本地队列，或从其他P的本地队列"),_("strong",[t._v("偷")]),t._v("一半放到自己P的本地队列。M运行G，G执行之后，M会从P获取下一个G，不断重复下去。")])]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/ebfe3e28315f12a08fbb4ffaee32e046_1024x768.png",alt:"img"}})]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Goroutine调度器和OS调度器是通过M结合起来的，每个M都代表了1个内核线程，OS调度器负责把内核线程分配到CPU的核上执行")]),t._v("。")])])]),t._v(" "),_("h4",{attrs:{id:"_2-1-p-和-m-的个数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-p-和-m-的个数"}},[t._v("#")]),t._v(" 2.1 P 和 M 的个数")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("P的数量")]),t._v(" "),_("ul",[_("li",[t._v("由启动时环境变量"),_("code",[t._v("$GOMAXPROCS")]),t._v("或者是由"),_("code",[t._v("runtime")]),t._v("的方法"),_("code",[t._v("GOMAXPROCS()")]),t._v("决定。这意味着在程序执行的任意时刻都只有"),_("code",[t._v("$GOMAXPROCS")]),t._v("个goroutine在同时运行。")])])]),t._v(" "),_("li",[_("p",[t._v("M的数量:")]),t._v(" "),_("ul",[_("li",[t._v("go语言本身的限制：go程序启动时，会设置M的最大数量，"),_("strong",[t._v("默认10000")]),t._v(".但是内核很难支持这么多的线程数，所以这个限制可以忽略。")]),t._v(" "),_("li",[t._v("runtime/debug中的SetMaxThreads函数，设置M的最大数量")]),t._v(" "),_("li",[t._v("一个M阻塞了，会创建新的M。")])])]),t._v(" "),_("li",[_("p",[t._v("M与P的数量没有绝对关系，一个M阻塞，P就会去创建或者切换另一个M，所以，即使P的默认数量是1，也有可能会创建很多个M出来。")])])]),t._v(" "),_("h4",{attrs:{id:"_2-2-p-和-m-何时会被创建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-p-和-m-何时会被创建"}},[t._v("#")]),t._v(" 2.2 P 和 M 何时会被创建?")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("P何时创建：在确定了P的最大数量n后，运行时系统会根据这个数量创建n个P。")])]),t._v(" "),_("li",[_("p",[t._v("M何时创建：没有足够的M来关联P并运行其中的可运行的G。比如所有的M此时都阻塞住了，而P中还有很多就绪任务，就会去寻找空闲的M，而没有空闲的，就会去创建新的M。")])])]),t._v(" "),_("h3",{attrs:{id:"_3-goroutine调度器的设计策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-goroutine调度器的设计策略"}},[t._v("#")]),t._v(" 3. Goroutine调度器的设计策略")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("复用线程")]),t._v("：避免频繁的创建、销毁线程，而是对线程的复用.")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("work stealing")]),t._v(" 机制:  当本线程无可运行的G时，尝试从其他线程绑定的P偷取G，而不是销毁线程。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("hand off")]),t._v(" 机制: 当本线程因为G进行系统调用阻塞时，线程释放绑定的P，把P转移给其他空闲的线程执行。")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("利用并行")]),t._v("："),_("code",[t._v("GOMAXPROCS")]),t._v("设置P的数量，最多有"),_("code",[t._v("GOMAXPROCS")]),t._v("个线程分布在多个CPU上同时运行。"),_("code",[t._v("GOMAXPROCS")]),t._v("也限制了并发的程度，比如"),_("code",[t._v("GOMAXPROCS = 核数/2")]),t._v("，则最多利用了一半的CPU核进行并行。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("抢占")]),t._v("：在coroutine中要等待一个协程主动让出CPU才执行下一个协程，在Go中，一个goroutine最多占用CPU "),_("strong",[t._v("10ms")]),t._v("，防止其他goroutine被饿死，这就是goroutine不同于coroutine的一个地方。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("全局G队列")]),t._v("：在新的调度器中依然有全局G队列，但功能已经被弱化了，当M执行work stealing从其他P偷不到G时，它可以从全局G队列获取G")])])]),t._v(" "),_("h3",{attrs:{id:"_4-go-func-调度流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-go-func-调度流程"}},[t._v("#")]),t._v(" 4. Go func() 调度流程")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220617171530.png",alt:"image-20220617171530579"}})]),t._v(" "),_("p",[t._v("从上图我们可以分析出几个结论：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("我们通过 go func()来创建一个goroutine；")])]),t._v(" "),_("li",[_("p",[t._v("有两个存储G的队列，一个是局部调度器P的本地队列、一个是全局G队列。新创建的G会先保存在P的本地队列中，如果P的本地队列已经满了就会保存在全局的队列中；")])]),t._v(" "),_("li",[_("p",[t._v("G只能运行在M中，一个M必须持有一个P，M与P是1：1的关系。M会从P的本地队列弹出一个可执行状态的G来执行，如果P的本地队列为空，就会想其他的MP组合偷取一个可执行的G来执行；")])]),t._v(" "),_("li",[_("p",[t._v("一个M调度G执行的过程是一个循环机制；")])]),t._v(" "),_("li",[_("p",[t._v("当M执行某一个G时候如果发生了syscall或则其余阻塞操作，M会阻塞，如果当前有一些G在执行，runtime会把这个线程M从P中摘除(detach)，然后再创建一个新的操作系统的线程(如果有空闲的线程可用就复用空闲线程)来服务于这个P；")])]),t._v(" "),_("li",[_("p",[t._v("当M系统调用结束时候，这个G会尝试获取一个空闲的P执行，并放入到这个P的本地队列。如果获取不到P，那么这个线程M变成休眠状态， 加入到空闲线程中，然后这个G会被放入全局队列中。")])])]),t._v(" "),_("h3",{attrs:{id:"_5-调度器的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-调度器的生命周期"}},[t._v("#")]),t._v(" 5. 调度器的生命周期")]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/b31027eeb493fa86654b41d46f34a98b_439x872.png",alt:"img"}}),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("M0")])]),t._v(" "),_("p",[_("code",[t._v("M0")]),t._v("是启动程序后的编号为0的主线程，这个M对应的实例会在全局变量runtime.m0中，不需要在heap上分配，M0负责执行初始化操作和启动第一个G， 在之后M0就和其他的M一样了。")]),t._v(" "),_("p",[_("strong",[t._v("G0")])]),t._v(" "),_("p",[_("code",[t._v("G0")]),t._v("是每次启动一个M都会第一个创建的gourtine，G0仅用于负责调度的G，G0不指向任何可执行的函数, 每个M都会有一个自己的G0。在调度或系统调用时会使用G0的栈空间, 全局变量的G0是M0的G0。")])]),t._v(" "),_("div",{staticClass:"language-go line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-go"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br")])]),_("ul",[_("li",[t._v("针对上面的代码对调度器里面的结构做一个分析。也会经历如上图所示的过程：")])]),t._v(" "),_("ol",[_("li",[t._v("runtime创建最初的线程m0和goroutine g0，并把2者关联。")]),t._v(" "),_("li",[t._v("调度器初始化：初始化m0、栈、垃圾回收，以及创建和初始化由GOMAXPROCS个P构成的P列表。")]),t._v(" "),_("li",[t._v("示例代码中的main函数是"),_("code",[t._v("main.main")]),t._v("，"),_("code",[t._v("runtime")]),t._v("中也有1个main函数——"),_("code",[t._v("runtime.main")]),t._v("，代码经过编译后，"),_("code",[t._v("runtime.main")]),t._v("会调用"),_("code",[t._v("main.main")]),t._v("，程序启动时会为"),_("code",[t._v("runtime.main")]),t._v("创建goroutine，称它为main goroutine吧，然后把main goroutine加入到P的本地队列。")]),t._v(" "),_("li",[t._v("启动m0，m0已经绑定了P，会从P的本地队列获取G，获取到main goroutine。")]),t._v(" "),_("li",[t._v("G拥有栈，M根据G中的栈信息和调度信息设置运行环境")]),t._v(" "),_("li",[t._v("M运行G")]),t._v(" "),_("li",[t._v("G退出，再次回到M获取可运行的G，这样重复下去，直到"),_("code",[t._v("main.main")]),t._v("退出，"),_("code",[t._v("runtime.main")]),t._v("执行Defer和Panic处理，或调用"),_("code",[t._v("runtime.exit")]),t._v("退出程序。")])]),t._v(" "),_("ul",[_("li",[t._v("调度器的生命周期几乎占满了一个Go程序的一生，"),_("code",[t._v("runtime.main")]),t._v("的goroutine执行之前都是为调度器做准备工作，"),_("code",[t._v("runtime.main")]),t._v("的goroutine运行，才是调度器的真正开始，直到"),_("code",[t._v("runtime.main")]),t._v("结束而结束。")])]),t._v(" "),_("h3",{attrs:{id:"_6-goroutine-调度切换条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-goroutine-调度切换条件"}},[t._v("#")]),t._v(" 6. goroutine 调度切换条件")]),t._v(" "),_("ol",[_("li",[t._v("runtime.Sched() 主动让出cpu")]),t._v(" "),_("li",[t._v("channel 读写阻塞")]),t._v(" "),_("li",[t._v("遇到互斥锁")]),t._v(" "),_("li",[t._v("网络IO")]),t._v(" "),_("li",[t._v("阻塞的系统调用")])]),t._v(" "),_("h3",{attrs:{id:"_7-抢占式调度器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-抢占式调度器"}},[t._v("#")]),t._v(" 7. 抢占式调度器")]),t._v(" "),_("blockquote",[_("p",[t._v("doc: "),_("a",{attrs:{href:"https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-goroutine/#%E6%8A%A2%E5%8D%A0%E5%BC%8F%E8%B0%83%E5%BA%A6%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("抢占式调度器"),_("OutboundLink")],1)])]),t._v(" "),_("ul",[_("li",[t._v("对 Go 语言并发模型的修改提升了调度器的性能，但是 1.1 版本中的调度器仍然不支持抢占式调度，程序只能依靠 Goroutine 主动让出 CPU 资源才能触发调度。Go 语言的调度器在 1.2 版本4中引入基于协作的抢占式调度解决下面的问题5：\n"),_("ul",[_("li",[t._v("某些 Goroutine 可以长时间占用线程，造成其它 Goroutine 的饥饿；")]),t._v(" "),_("li",[t._v("垃圾回收需要暂停整个程序（Stop-the-world，STW），最长可能需要几分钟的时间6，导致整个程序无法工作；")])])]),t._v(" "),_("li",[t._v("1.2 版本的抢占式调度虽然能够缓解这个问题，但是它实现的抢占式调度是基于协作的，在之后很长的一段时间里 Go 语言的调度器都有一些无法被抢占的边缘情况，例如：for 循环或者垃圾回收长时间占用线程，这些问题中的一部分直到 1.14 才被基于信号的抢占式调度解决。")])]),t._v(" "),_("h4",{attrs:{id:"_7-1-基于协作的抢占式调度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-基于协作的抢占式调度"}},[t._v("#")]),t._v(" 7.1  基于协作的抢占式调度")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("编译器会在调用函数前插入 "),_("a",{attrs:{href:"https://draveness.me/golang/tree/runtime.morestack",target:"_blank",rel:"noopener noreferrer"}},[_("code",[t._v("runtime.morestack")]),_("OutboundLink")],1),t._v("；")]),t._v(" "),_("ol",[_("li",[t._v("Go 语言运行时会在垃圾回收暂停程序、系统监控发现 Goroutine 运行超过 10ms 时发出抢占请求 "),_("code",[t._v("StackPreempt")]),t._v("；")])])]),t._v(" "),_("li",[_("p",[t._v("当发生函数调用时，可能会执行编译器插入的 "),_("a",{attrs:{href:"https://draveness.me/golang/tree/runtime.morestack",target:"_blank",rel:"noopener noreferrer"}},[_("code",[t._v("runtime.morestack")]),_("OutboundLink")],1),t._v("，它调用的 "),_("a",{attrs:{href:"https://draveness.me/golang/tree/runtime.newstack",target:"_blank",rel:"noopener noreferrer"}},[_("code",[t._v("runtime.newstack")]),_("OutboundLink")],1),t._v(" 会检查 Goroutine 的 "),_("code",[t._v("stackguard0")]),t._v(" 字段是否为 "),_("code",[t._v("StackPreempt")]),t._v("；")])]),t._v(" "),_("li",[_("p",[t._v("如果 "),_("code",[t._v("stackguard0")]),t._v(" 是 "),_("code",[t._v("StackPreempt")]),t._v("，就会触发抢占让出当前线程；")])])]),t._v(" "),_("blockquote",[_("p",[t._v("因为这里的抢占是通过编译器插入函数实现的，还是需要函数调用作为入口才能触发抢占，所以这是一种"),_("strong",[t._v("协作式的抢占式调度")]),t._v("。")])]),t._v(" "),_("h4",{attrs:{id:"_7-2-基于信号的抢占式调度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-基于信号的抢占式调度"}},[t._v("#")]),t._v(" 7.2 基于信号的抢占式调度")]),t._v(" "),_("ol",[_("li",[t._v("程序启动时，在"),_("code",[t._v("runtime.sighandler")]),t._v(" 中注册 "),_("code",[t._v("_SIGURG")]),t._v(" 信号的处理函数 "),_("code",[t._v("runtime.doSigPreempt")]),t._v(";")]),t._v(" "),_("li",[t._v("此时有一个 M1 通过 signalM 函数向 M2 发送中断信号 "),_("code",[t._v("_SIGURG")]),t._v("；")]),t._v(" "),_("li",[t._v("M2 收到信号，操作系统中断其执行代码，并切换到信号处理函数"),_("code",[t._v("runtime.doSigPreempt")]),t._v("；")]),t._v(" "),_("li",[t._v("M2 调用 "),_("code",[t._v("runtime.asyncPreempt")]),t._v(" 修改执行的上下文，重新进入调度循环进而调度其他 G；")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220627205100.png",alt:"image-20220627205100909"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);