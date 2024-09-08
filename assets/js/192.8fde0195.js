(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{513:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务"}},[s._v("#")]),s._v(" 1. 事务")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("redis可以把一组操作包装在一个事务块中，让这些语句的执行具有原子性")]),s._v(" "),a("ul",[a("li",[s._v("multi：开启事务")]),s._v(" "),a("li",[s._v("exec：执行事务")]),s._v(" "),a("li",[s._v("discard：取消事务")]),s._v(" "),a("li",[s._v("watch：监视")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Redis中的事务原理：就是以multi为起点，在提交之前，先把所有的语句都放在一个队列中，直到exec才做事务的提交")])])]),s._v(" "),a("li",[a("p",[s._v("示例")]),s._v(" "),a("div",{staticClass:"language-redis line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("set user?account 1000\nget user?account\nset user:101:account 10\nget user:101:account\n\nmulti\ndecrby user?account 500   // 转出500\nincrby user:101:account 500  //转入500\nexec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("Redis中，单条命令是原子性执行的，但事务不保证原子性，且没有回滚。事务中任意命令执行失败，其余的命令仍会被执行。")]),s._v(" "),a("p",[s._v("其中，Redis事务分为三个阶段")]),s._v(" "),a("ul",[a("li",[s._v("开始事务")]),s._v(" "),a("li",[s._v("命令入队")]),s._v(" "),a("li",[s._v("执行事务")])])])]),s._v(" "),a("h3",{attrs:{id:"a-正常执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-正常执行"}},[s._v("#")]),s._v(" a. 正常执行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616112854.png",alt:"image-20220616112854323"}})]),s._v(" "),a("h3",{attrs:{id:"b-放弃事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-放弃事务"}},[s._v("#")]),s._v(" b. 放弃事务")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616112805.png",alt:"image-20200529212259619"}})]),s._v(" "),a("h3",{attrs:{id:"c-事务执行出错-命令错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-事务执行出错-命令错误"}},[s._v("#")]),s._v(" c. 事务执行出错 - 命令错误")]),s._v(" "),a("p",[s._v("若在事务队列中存在命令性错误（类似于java编译性错误），则执行EXEC命令时，所有命令都不会执行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616144133.png",alt:"image-20220616144133889"}})]),s._v(" "),a("h3",{attrs:{id:"d-事务执行出错-抛异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-事务执行出错-抛异常"}},[s._v("#")]),s._v(" d. 事务执行出错 - 抛异常")]),s._v(" "),a("p",[s._v("若在事务队列中存在语法性错误（类似于java的1/0的运行时异常），则执行EXEC命令时，其他正确命令会被执行，错误命令抛出异常")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220616144139.png",alt:"image-20220616144139189"}})]),s._v(" "),a("h2",{attrs:{id:"_2-发布与订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布与订阅"}},[s._v("#")]),s._v(" 2. 发布与订阅")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("redis提供了一个订阅和发布消息的功能，在这个功能中，redis扮演了一个消息路由服务的功能")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("strong",[s._v("subscribe [channel…]")]),s._v(" 进行订阅监听，可同时监听多个频道")]),s._v(" "),a("li",[s._v("使用"),a("strong",[s._v("publish [channel] [message]")]),s._v(" 发送消息到指定的频道")]),s._v(" "),a("li",[s._v("使用**unsubscribe [channel…]**取消监听，可同时取消多个频道")])])]),s._v(" "),a("li",[a("p",[s._v("redis的订阅/发布性能非常高，可以达到15000/秒次；非常适合用于完成实时消息通知、消息队列等场景；")])]),s._v(" "),a("li",[a("h4",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("模拟场景：给id为91的贴点赞，模拟朋友圈")])]),s._v(" "),a("div",{staticClass:"language-re line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//设计消息中心\nset post:91:good:message 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设定消息订阅（监听模式）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('127.0.0.1:6379> subscribe post:91:good:massage\nReading messages... (press Ctrl-C to quit)\n1) "subscribe"\n2) "post:91:good:massage"\n3) (integer) 1\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/image-20210513103903196.png",alt:"image-20210513103903196"}})])]),s._v(" "),a("li",[a("p",[s._v("发布消息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1:6379> publish post:91:good:massage good\n(integer) 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("监听窗口收到消息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('127.0.0.1:6379> subscribe post:91:good:massage\nReading messages... (press Ctrl-C to quit)\n1) "subscribe"\n2) "post:91:good:massage"\n3) (integer) 1\n1) "message"\n2) "post:91:good:massage"\n3) "good"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"_3-持久化存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-持久化存储"}},[s._v("#")]),s._v(" 3. 持久化存储")]),s._v(" "),a("ul",[a("li",[s._v("Redis是一种内存型数据库，一旦服务器进程退出，数据库的数据就会丢失，为了解决这个问题，Redis提供了两种持久化的方案，将内存中的数据保存到磁盘中，避免数据的丢失。")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-rdb-持久化-快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-rdb-持久化-快照"}},[s._v("#")]),s._v(" 3.1 RDB 持久化 - 快照")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("redis")]),s._v("提供了"),a("code",[s._v("RDB持久化")]),s._v("的功能，这个功能可以将"),a("code",[s._v("redis")]),s._v("在内存中的的状态保存到硬盘中，它可以"),a("strong",[s._v("手动执行。")])])]),s._v(" "),a("li",[a("p",[s._v("也可以再"),a("code",[s._v("redis.conf")]),s._v("中配置，"),a("strong",[s._v("定期执行")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("RDB持久化产生的RDB文件是一个"),a("strong",[s._v("经过压缩")]),s._v("的"),a("strong",[s._v("二进制文件")]),s._v("，这个文件被保存在硬盘中，redis可以通过这个文件还原数据库当时的状态。")])]),s._v(" "),a("li",[a("p",[s._v("实战")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("触发机制,")]),s._v(" "),a("ul",[a("li",[s._v("手动执行save命令")]),s._v(" "),a("li",[s._v("或者配置触发条件  save  200   10   #在200秒中内,超过10个修改类的操作")])])]),s._v(" "),a("li",[a("p",[s._v("建立redis配置文件,开启rdb功能")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置文件  s21_rdb.conf 内容如下 ,有关rdb的配置参数是 \tdbfilename  dbmp.rdb  ,一个是 save 900 1   ")]),s._v("\n\ndaemonize yes\nport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nlogfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义持久化文件存储位置")]),s._v("\ndbfilename  s21redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rdb持久化文件")]),s._v("\nbind  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("   \t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis绑定地址")]),s._v("\nrequirepass redhat          \t\t  \nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                  \t\t  \nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("                  \t \t\nsave  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("               \t\t \n\nsave  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在20秒内,超过2个修改类的操作")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])])])]),s._v(" "),a("h3",{attrs:{id:"_3-2-aof-机制-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-aof-机制-日志"}},[s._v("#")]),s._v(" 3.2 AOF 机制 - 日志")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("第二个机制 aof机制 ,将你的修改类的操作命令,追加到日志文件中")])]),s._v(" "),a("li",[a("p",[s._v("AOF 文件中的命令全部以redis协议的格式保存，新命令追加到文件末尾。")])]),s._v(" "),a("li",[a("p",[s._v("优缺点")]),s._v(" "),a("ul",[a("li",[s._v("优点：最大程序保证数据不丢")]),s._v(" "),a("li",[s._v("缺点：日志记录非常大")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("client   写入数据  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server   同步命令   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  AOF文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置参数")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("appendonly yes\nappendfsync  always    总是修改类的操作\n             everysec   每秒做一次持久化\n             no     依赖于系统自带的缓存大小机制\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("p",[s._v("1.准备aof配置文件 redis.conf")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("daemonize yes\nport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nlogfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\ndbfilename  dbmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb\nrequirepass redhat\nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\nappendonly yes\nappendfsync everysec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("2.启动redis服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-server /etc/redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.检查redis数据目录/data/6379/是否产生了aof文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@web02 6379]# ls\nappendonly.aof  dbmp.rdb  redis.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4.登录redis-cli，写入数据，实时检查aof文件信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@web02 6379]# tail -f appendonly.aof\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5.设置新key，检查aof信息，然后关闭redis，检查数据是否持久化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-cli -a redhat shutdown\n\nredis-server /etc/redis.conf\n\nredis-cli -a redhat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-小结"}},[s._v("#")]),s._v(" 3.3 小结")]),s._v(" "),a("ul",[a("li",[s._v("redis 持久化方式有哪些？有什么区别？\n"),a("ul",[a("li",[s._v("rdb：基于快照的持久化，速度更快，一般用作备份，主从复制也是依赖于rdb持久化功能")]),s._v(" "),a("li",[s._v("aof：以追加的方式记录redis操作日志的文件。可以最大程度的保证redis数据安全，类似于mysql的binlog")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-主从复制"}},[s._v("#")]),s._v(" 4. 主从复制")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("主从复制(Redis2.0就有的功能,主要实现读写分离的):")])]),s._v(" "),a("li",[a("p",[s._v("特点：")]),s._v(" "),a("ol",[a("li",[s._v("master可以拥有多个slave")]),s._v(" "),a("li",[s._v("slave也可以成为其他slave的master（选举机制）")]),s._v(" "),a("li",[s._v("主从复制是异步的过程，不会产生master和slave的阻塞（这点很优秀）")]),s._v(" "),a("li",[s._v("在redis中，要实现主从配置非常简单，只需要修改slave的配置，不需要修改master的配置")])])]),s._v(" "),a("li",[a("p",[s._v("主从复制过程：")]),s._v(" "),a("ol",[a("li",[s._v("slave与master建立连接,发送sync同步命令")]),s._v(" "),a("li",[s._v("Master会开启一个后台进程,将数据库快照保存到文件中.同时master主进程会执行新的写命令并缓存")]),s._v(" "),a("li",[s._v("后台完成保存后,就将文件发给slave")]),s._v(" "),a("li",[s._v("Slave将文件保存到硬盘上")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);