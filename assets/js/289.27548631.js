(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{609:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一致性哈希的原理和实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一致性哈希的原理和实现"}},[t._v("#")]),t._v(" 一致性哈希的原理和实现")]),t._v(" "),s("h2",{attrs:{id:"_1-为什么需要一致性哈希"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么需要一致性哈希"}},[t._v("#")]),t._v(" 1. 为什么需要一致性哈希")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Hash，一般翻译做散列，或音译为哈希，是把任意长度的输入（又叫做预映射pre-image）通过散列算法变换成固定长度的输出，该输出就是散列值。这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出，所以不可能从散列值来确定唯一的输入值。简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。")])]),t._v(" "),s("li",[s("p",[t._v("在分布式缓存服务中，经常需要对服务进行节点添加和删除操作，我们希望的是节点添加和删除操作尽量减少数据-节点之间的映射关系更新。")])]),t._v(" "),s("li",[s("p",[t._v("假如我们使用的是哈希取模( hash(key)%nodes ) 算法作为路由策略:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616151112.png",alt:"image-20220616151112471"}})])]),t._v(" "),s("li",[s("p",[t._v("哈希取模的缺点在于如果有节点的删除和添加操作，对 hash(key)%nodes 结果影响范围太大了，造成大量的请求无法命中从而导致缓存数据被重新加载。")])]),t._v(" "),s("li",[s("p",[t._v("基于上面的缺点提出了一种新的算法：一致性哈希。一致性哈希可以实现节点删除和添加只会影响一小部分数据的映射关系，由于这个特性哈希算法也常常用于各种均衡器中实现系统流量的平滑迁移。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-一致性哈希工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-一致性哈希工作原理"}},[t._v("#")]),t._v(" 2. 一致性哈希工作原理")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/640-20211208155106202",alt:"图片"}}),t._v(" "),s("blockquote",[s("p",[t._v("首先对节点进行哈希计算，哈希值通常在 2^32-1 范围内。然后将 2^32-1 这个区间首尾连接抽象成一个环并将节点的哈希值映射到环上，当我们要查询 key 的目标节点时，同样的我们对 key 进行哈希计算，然后顺时针查找到的第一个节点就是目标节点。")])]),t._v(" "),s("ul",[s("li",[t._v("根据原理我们分析一下节点添加和删除对数据范围的影响。")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("节点添加")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616151128.png",alt:"image-20220616151128784"}}),t._v(" "),s("p",[s("strong",[t._v("只会影响新增节点与前一个节点（新增节点逆时针查找的第一个节点）之间的数据。")])])]),t._v(" "),s("li",[s("p",[t._v("节点删除")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/640-20211208155133796",alt:"图片"}}),t._v(" "),s("p",[s("strong",[t._v("只会影响删除节点与前一个节点（删除节点逆时针查找的第一个节点）之间的数据。")])])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("这样就完了吗？还没有，试想一下假如环上的节点数量非常少，那么非常有可能造成数据分布不平衡，本质上是环上的区间分布粒度太粗。")])]),t._v(" "),s("li",[s("p",[t._v("怎么解决呢？不是粒度太粗吗？那就加入更多的节点，这就引出了一致性哈希的虚拟节点概念，虚拟节点的作用在于让环上的节点区间分布粒度变细。")])]),t._v(" "),s("li",[s("p",[t._v("一个真实节点对应多个虚拟节点，将虚拟节点的哈希值映射到环上，查询 key 的目标节点我们先查询虚拟节点再找到真实节点即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616151447.png",alt:"image-20220616102928968"}})])])]),t._v(" "),s("h2",{attrs:{id:"_3-代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现"}},[t._v("#")]),t._v(" 3. 代码实现")]),t._v(" "),s("p",[t._v("基于上面的一致性哈希原理，我们可以提炼出一致性哈希的核心功能：")]),t._v(" "),s("ol",[s("li",[t._v("添加节点")]),t._v(" "),s("li",[t._v("删除节点")]),t._v(" "),s("li",[t._v("查询节点")])]),t._v(" "),s("p",[t._v("我们来定义一下接口：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ConsistentHash interface {\n    Add(node Node)\n    Get(key Node) Node\n    Remove(node Node)\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("现实中不同的节点服务能力因硬件差异可能各不相同，于是我们希望在添加节点时可以指定权重。反应到一致性哈希当中所谓的权重意思就是我们希望 key 的目标节点命中概率比例，一个真实节点的虚拟节点数量多则意味着被命中概率高。")]),t._v(" "),s("p",[t._v("在接口定义中我们可以增加两个方法：支持指定虚拟节点数量添加节点，支持按权重添加。本质上最终都会反应到虚拟节点的数量不同导致概率分布差异。")]),t._v(" "),s("p",[t._v("指定权重时：实际虚拟节点数量 = 配置的虚拟节点 * weight/100")]),t._v(" "),s("div",{staticClass:"language-GO line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("ConsistentHash "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWithReplicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replicas "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWithWeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" weight "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Node\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("接下来考虑几个工程实现的问题：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("虚拟节点如何存储？")]),t._v(" "),s("p",[t._v("很简单，用列表（切片）存储即可。")])]),t._v(" "),s("li",[s("p",[t._v("虚拟节点 - 真实节点关系存储")]),t._v(" "),s("p",[t._v("map 即可。")])]),t._v(" "),s("li",[s("p",[t._v("顺时针查询第一个虚拟节点如何实现")]),t._v(" "),s("p",[t._v("让虚拟节点列表保持有序，二分查找第一个比 hash(key) 大的 index，list[index] 即可。")])]),t._v(" "),s("li",[s("p",[t._v("虚拟节点哈希时会有很小的概率出现冲突，如何处理呢？")]),t._v(" "),s("p",[t._v("冲突时意味着这一个虚拟节点会对应多个真实节点，map 中 value 存储真实节点数组，查询 key 的目标节点时对 nodes 取模。")])]),t._v(" "),s("li",[s("p",[t._v("如何生成虚拟节点")]),t._v(" "),s("p",[t._v("基于虚拟节点数量配置 replicas，循环 replicas 次依次追加 i 字节 进行哈希计算。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);