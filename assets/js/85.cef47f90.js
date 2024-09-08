(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{406:function(t,a,e){"use strict";e.r(a);var s=e(3),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("map并发不安全")])]),t._v(" "),a("h2",{attrs:{id:"map数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map数据结构"}},[t._v("#")]),t._v(" map数据结构")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("map使用哈希表作为底层实现，一个哈希表里可以有多个哈希表节点，也即bucket，而每个bucket就保存了map中的一个或一组键值对。")])])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("bucket")]),t._v("很多时候被翻译为桶，所谓的"),a("code",[t._v("哈希桶")]),t._v("实际上就是bucket。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("runtime/map.go:hmap")])]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" hmap "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前保存的元素个数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    B         "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    buckets    unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pointer "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bucket数组指针，数组的大小为2^B")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614191718964.png",alt:"image-20220614191718964"}})])]),t._v(" "),a("li",[a("p",[a("code",[t._v("hmap.B=2")]),t._v("， 而hmap.buckets长度是2^B为4. 元素经过哈希运算后会落到某个bucket中进行存储。")])])]),t._v(" "),a("h2",{attrs:{id:"bucket-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bucket-数据结构"}},[t._v("#")]),t._v(" bucket 数据结构")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("bucket")]),t._v("很多时候被翻译为桶，所谓的"),a("code",[t._v("哈希桶")]),t._v("实际上就是bucket。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("runtime/map.go:bmap")])])]),t._v(" "),a("li",[a("p",[t._v("每个bucket可以存储8个键值对。")])]),t._v(" "),a("li",[a("p",[t._v("tophash是个长度为8的数组，哈希值相同的键（准确的说是哈希值低位相同的键）存入当前bucket时会将哈希值的高位存储在该数组中，以方便后续匹配。")])]),t._v(" "),a("li",[a("p",[t._v("data区存放的是key-value数据，存放顺序是key/key/key/…value/value/value，如此存放是为了节省字节对齐带来的空间浪费。")])]),t._v(" "),a("li",[a("p",[t._v("overflow 指针指向的是下一个bucket，据此将所有冲突的键连接起来。")])]),t._v(" "),a("li",[a("p",[t._v("注意：上述中data和overflow并不是在结构体中显示定义的，而是直接通过指针运算进行访问")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614192356305.png",alt:"image-20220614192356305"}})])])]),t._v(" "),a("h2",{attrs:{id:"hash-冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-冲突"}},[t._v("#")]),t._v(" hash 冲突")]),t._v(" "),a("ul",[a("li",[t._v("**Hash叫做”*"),a("em",[t._v("散列表*")]),t._v("“，就是把**任意长度**的输入，通过散列算法，变成*"),a("em",[t._v("固定长度*"),a("em",[t._v("输出，该输出结果是散列值。")])])]),t._v(" "),a("li",[t._v("根据key（键）即经过一个函数f(key)得到的结果的作为地址去存放当前的key value键值对(这个是hashmap的存值方式)，但是却发现算出来的地址上已经被占用了。这就是hash冲突。")])]),t._v(" "),a("h3",{attrs:{id:"_1-hash冲突解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hash冲突解决办法"}},[t._v("#")]),t._v(" 1. hash冲突解决办法")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("再散列法 (开放定址法)")]),t._v(" "),a("ul",[a("li",[t._v("该方法也叫做再散列法，其基本原理是：当关键字key的哈希地址p=H（key）出现冲突时，以p为基础，产生另一个哈希地址p1，如果p1仍然冲突，再以p为基础，产生另一个哈希地址p2，…，直到找出一个不冲突的哈希地址pi 。")])])]),t._v(" "),a("li",[a("strong",[t._v("再hash法")]),t._v(" "),a("ul",[a("li",[t._v("这种方法就是同时构造多个不同的哈希函数： Hi=RH1（key）  i=1，2，…，k。当哈希地址Hi=RH1（key）发生冲突时，再计算Hi=RH2（key）……，直到冲突不再产生。这种方法不易产生聚集，但增加了计算时间。")])])]),t._v(" "),a("li",[a("strong",[t._v("链地址法")]),t._v(" "),a("ul",[a("li",[t._v("将所有哈希地址为i的元素构成一个称为同义词链的单链表，并将单链表的头指针存在哈希表的第i个单元中，因而查找、插入和删除主要在同义词链中进行。链地址法适用于经常进行插入和删除的情况。")])])]),t._v(" "),a("li",[a("strong",[t._v("建立公共溢出区")]),t._v(" "),a("ul",[a("li",[t._v("将哈希表分为基本表和溢出表两部分，凡是和基本表发生冲突的元素，一律填入溢出表。")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-go-map解决hash冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-go-map解决hash冲突"}},[t._v("#")]),t._v(" 2. go map解决hash冲突")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Go使用链地址法来解决键冲突")])]),t._v(" "),a("li",[a("p",[t._v("由于每个bucket可以存放8个键值对，所以同一个bucket存放超过8个键值对时就会再创建一个键值对，用类似链表的方式将bucket连接起来。")])]),t._v(" "),a("li",[a("p",[t._v("bucket数据结构指示下一个bucket的指针称为overflow bucket，意为当前bucket盛不下而溢出的部分。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614193203538.png",alt:"image-20220614193203538"}})])])]),t._v(" "),a("h2",{attrs:{id:"hash表负载因子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash表负载因子"}},[t._v("#")]),t._v(" hash表负载因子")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("负载因子用于衡量一个哈希表冲突情况，公式为：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("负载因子 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 键数量"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bucket数量\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("例如，对于一个bucket数量为4，包含4个键值对的哈希表来说，这个哈希表的负载因子为1.")])]),t._v(" "),a("li",[a("p",[t._v("哈希表需要将负载因子控制在合适的大小，超过其阀值需要进行rehash，也即键值对重新组织：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("哈希因子过小，说明空间利用率低")])]),t._v(" "),a("li",[a("p",[t._v("哈希因子过大，说明冲突严重，存取效率低")])])])]),t._v(" "),a("li",[a("p",[t._v("每个哈希表的实现对负载因子容忍程度不同，比如Redis实现中负载因子大于1时就会触发rehash，"),a("strong",[t._v("而Go则在在负载因子达到6.5时才会触发rehash")]),t._v("，因为Redis的每个bucket只能存1个键值对，而Go的bucket可能存8个键值对，所以Go可以容忍更高的负载因子。")])])]),t._v(" "),a("h2",{attrs:{id:"渐进式扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐进式扩容"}},[t._v("#")]),t._v(" 渐进式扩容")]),t._v(" "),a("blockquote",[a("p",[t._v("扩容的前提条件:")]),t._v(" "),a("ol",[a("li",[t._v("负载因子 > 6.5时，也即平均每个bucket存储的键值对达到6.5个。")]),t._v(" "),a("li",[t._v("overflow数量 > 2^15时，也即overflow数量超过32768时。")])])]),t._v(" "),a("h3",{attrs:{id:"_1-增量扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-增量扩容"}},[t._v("#")]),t._v(" 1. 增量扩容")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当有两个或以上数量的键被哈希到了同一个bucket时，我们称这些键发生了冲突。Go使用链地址法来解决键冲突。")])]),t._v(" "),a("li",[a("p",[t._v("由于每个bucket可以存放8个键值对，所以同一个bucket存放超过8个键值对时就会再创建一个键值对，用类似链表的方式将bucket连接起来。")])]),t._v(" "),a("li",[a("p",[t._v("一个bucket满载的map(为了描述方便，图中bucket省略了value区域):")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614201458131.png",alt:"image-20220614201458131"}})])]),t._v(" "),a("li",[a("p",[t._v("当前map存储了7个键值对，只有1个bucket。此地负载因子为7。再次插入数据时将会触发扩容操作，扩容之后再将新插入键写入新的bucket。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614201547055.png",alt:"image-20220614201547055"}})])]),t._v(" "),a("li",[a("p",[t._v("hmap数据结构中oldbuckets成员指身原bucket，而buckets指向了新申请的bucket。新的键值对被插入新的bucket中。\n后续对map的访问操作会触发迁移，将oldbuckets中的键值对逐步的搬迁过来。当oldbuckets中的键值对全部搬迁完毕后，删除oldbuckets。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-等量扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-等量扩容"}},[t._v("#")]),t._v(" 2. 等量扩容")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所谓等量扩容，实际上并不是扩大容量，buckets数量不变，重新做一遍类似增量扩容的搬迁动作，把松散的键值对重新排列一次，以使bucket的使用率更高，进而保证更快的存取。")])]),t._v(" "),a("li",[a("p",[t._v("在极端场景下，比如不断地增删，而键值对正好集中在一小部分的bucket，这样会造成overflow的bucket数量增多，但负载因子又不高，从而无法执行增量搬迁的情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20220614201819738.png",alt:"image-20220614201819738"}})])]),t._v(" "),a("li",[a("p",[t._v("overflow的bucket中大部分是空的，访问效率会很差。此时进行一次等量扩容，即buckets数量不变，经过重新组织后overflow的bucket数量会减少，即节省了空间又会提高访问效率。")])])]),t._v(" "),a("h2",{attrs:{id:"map-查找过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-查找过程"}},[t._v("#")]),t._v(" map 查找过程")]),t._v(" "),a("ol",[a("li",[t._v("根据key值算出哈希值")]),t._v(" "),a("li",[t._v("取哈希值低位与hmap.B取模确定bucket位置")]),t._v(" "),a("li",[t._v("取哈希值高位在tophash数组中查询")]),t._v(" "),a("li",[t._v("如果tophash[i]中存储值也哈希值相等，则去找到该bucket中的key值进行比较")]),t._v(" "),a("li",[t._v("当前bucket没有找到，则继续从下个overflow的bucket中查找。")]),t._v(" "),a("li",[t._v("如果当前处于搬迁过程，则优先从oldbuckets查找")]),t._v(" "),a("li",[t._v("如果查找不到，也不会返回空值，而是返回相应类型的0值。")])]),t._v(" "),a("h2",{attrs:{id:"map-插入过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-插入过程"}},[t._v("#")]),t._v(" map 插入过程")]),t._v(" "),a("ol",[a("li",[t._v("根据key值算出哈希值")]),t._v(" "),a("li",[t._v("取哈希值低位与hmap.B取模确定bucket位置")]),t._v(" "),a("li",[t._v("查找该key是否已经存在，如果存在则直接更新值")]),t._v(" "),a("li",[t._v("如果没找到将key，将key插入")])]),t._v(" "),a("h2",{attrs:{id:"map-删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-删除"}},[t._v("#")]),t._v(" map 删除")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在 Golang 中的 map 结构，在删除键值对的时候，并不会真正的删除，而是标记。那么随着键值对越来越多，会不会造成大量内存浪费？首先答案是会的，很有可能导致 OOM，而且针对这个还有一个讨论：github.com/golang/go/issues/20135。大致的意思就是在很大的 map 中，delete 操作没有真正释放内存而可能导致内存 OOM。")])]),t._v(" "),a("li",[a("p",[t._v("解决办法: 重建map,将map置为nil")])]),t._v(" "),a("li",[a("p",[t._v("原因:  和mysql 的标记删除类似，防止后续会有相同的 key 插入，省去了扩缩容的操作。但是这个对有些场景是不妥的，如果开发者在未来时间内都不会再插入相同的 key ，很可能会导致 OOM。")])])]),t._v(" "),a("h2",{attrs:{id:"map并发安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map并发安全"}},[t._v("#")]),t._v(" map并发安全")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("map是并发不安全的.")])]),t._v(" "),a("li",[a("p",[t._v("map 在扩缩容时，需要进行数据迁移，迁移的过程并没有采用锁机制防止并发操作，而是会对某个标识位标记为 1，表示此时正在迁移数据。如果有其他 goroutine 对 map 也进行写操作，当它检测到标识位为 1 时，将会直接 panic。")])])]),t._v(" "),a("h2",{attrs:{id:"map-的-key-必须可比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-的-key-必须可比较"}},[t._v("#")]),t._v(" map 的 key 必须可比较")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("map的key必须可比较")])]),t._v(" "),a("li",[a("p",[t._v("map 的 key、value 是存在 buckets 数组里的，每个 bucket 又可以容纳 8 个 key 和 8 个 value。当要插入一个新的 key - value 时，会对 key 进行 hash 运算得到一个 hash 值，然后根据 hash 值 的低几位(取几位取决于桶的数量，比如一开始桶的数量是 5，则取低 5 位)来决定命中哪个 bucket。")])]),t._v(" "),a("li",[a("p",[t._v("在命中某个 bucket 后，又会根据 hash 值的高 8 位来决定是 8 个 key 里的哪个位置。如果不巧，发生了 hash 冲突，即该位置上已经有"),a("strong",[t._v("其他 key")]),t._v(" 存在了，则会去其他空位置寻找插入。如果全都满了，则使用 overflow 指针指向一个新的 bucket，重复刚刚的寻找步骤。")])]),t._v(" "),a("li",[a("p",[t._v("从上面的流程可以看出，在判断 hash 冲突，即该位置是否已有"),a("strong",[t._v("其他 key")]),t._v(" 时，肯定是要进行比较的，所以 key 必须得是可比较类型的。像 slice、map、function 就不能作为 key。")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);