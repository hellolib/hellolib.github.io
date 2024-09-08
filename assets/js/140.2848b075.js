(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{461:function(e,l,t){"use strict";t.r(l);var n=t(3),o=Object(n.a)({},(function(){var e=this,l=e._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"django-models-之字段详解"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#django-models-之字段详解"}},[e._v("#")]),e._v(" Django models 之字段详解")]),e._v(" "),l("ul",[l("li",[e._v("参考https://www.cnblogs.com/geogre123/p/10621364.html")])]),e._v(" "),l("h2",{attrs:{id:"django-models-的字段类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#django-models-的字段类型"}},[e._v("#")]),e._v(" Django models 的字段类型")]),e._v(" "),l("p",[e._v("1、"),l("strong",[e._v("models.AutoField")]),e._v("   ---自增列 = int(11)    如果没有的话，默认会生成一个名称为 id 的列，如果要显示的自定义一个自增列，必须将给列设置为主键 primary_key=True。\n2、"),l("strong",[e._v("models.CharField")]),e._v("   ---字符串字段  单行输入，用于较短的字符串，如要保存大量文本, 使用 TextField。必须 max_length 参数，django会根据这个参数在数据库层和校验层限制该字段所允许的最大字符数。")]),e._v(" "),l("p",[e._v("3、"),l("strong",[e._v("models.BooleanField")]),e._v("   ---布尔类型=tinyint(1)   不能为空，Blank=True")]),e._v(" "),l("p",[e._v("4、"),l("strong",[e._v("models.ComaSeparatedIntegerField")]),e._v("   ---用逗号分割的数字=varchar   继承CharField，所以必须 max_lenght 参数，")]),e._v(" "),l("p",[e._v("5、"),l("strong",[e._v("models.DateField")]),e._v("   ---日期类型 date   对于参数，auto_now = True 则每次更新都会更新这个时间；auto_now_add 则只是第一次创建添加，之后的更新不再改变。\n6、"),l("strong",[e._v("models.DateTimeField")]),e._v("   ---日期类型 datetime   同DateField的参数\n7、"),l("strong",[e._v("models.Decimal")]),e._v("   ---十进制小数类型 = decimal   必须指定整数位max_digits和小数位decimal_places\n8、"),l("strong",[e._v("models.EmailField")]),e._v("   ---字符串类型（正则表达式邮箱） =varchar   对字符串进行正则表达式   一个带有检查 Email 合法性的 CharField，不接受 maxlength 参数。\n9、"),l("strong",[e._v("models.FloatField")]),e._v("   ---浮点类型 = double   浮点型字段。 必须提供两个 参数， 参数描述：")]),e._v(" "),l("p",[l("strong",[e._v("max_digits")]),e._v("：总位数(不包括小数点和符号）")]),e._v(" "),l("p",[l("strong",[e._v("decimal_places")]),e._v("：小数位数。如：要保存最大值为 999 (小数点后保存2位)，你要这样定义字段：models.FloatField(…，max_digits=5， decimal_places=2)，要保存最大值一百万(小数点后保存10位)的话，你要这样定义：models.FloatField(…，max_digits=19， decimal_places=10)")]),e._v(" "),l("p",[e._v("10、"),l("strong",[e._v("models.IntegerField")]),e._v("   ---整形   用于保存一个整数\n11、"),l("strong",[e._v("models.BigIntegerField")]),e._v("   ---长整形\n　　integer_field_ranges = {\n　　　　'SmallIntegerField': (-32768, 32767),\n　　　　'IntegerField': (-2147483648, 2147483647),\n　　　　'BigIntegerField': (-9223372036854775808, 9223372036854775807),\n　　　　'PositiveSmallIntegerField': (0, 32767),\n　　　　'PositiveIntegerField': (0, 2147483647),\n　　}\n12、"),l("strong",[e._v("models.IPAddressField")]),e._v("   ---字符串类型（ip4正则表达式）   一个字符串形式的 IP 地址， (如 “202.1241.30″)。\n13、"),l("strong",[e._v("models.GenericIPAddressField")]),e._v("   ---字符串类型（ip4和ip6是可选的）   参数protocol可以是：both、ipv4、ipv6   验证时，会根据设置报错\n14、models.NullBooleanField   ---允许为空的布尔类型   类似 BooleanField， 不过允许 NULL 作为其中一个选项。 推荐使用这个字段而不要用 BooleanField 加 null=True 选项。 admin 用一个选择框 　　　　"),l("select",[e._v(" (三个可选择的值： “Unknown”， “Yes” 和 “No” ) 来表示这种字段数据。\n15、models.PositiveIntegerField   ---正Integer   类似 IntegerField， 但取值范围为非负整数（这个字段应该是允许0值的…可以理解为无符号整数）\n16、"),l("strong",[e._v("models.PositiveSmallIntegerField")]),e._v("   ---正smallInteger  正小整型字段，类似 PositiveIntegerField， 取值范围较小(数据库相关)SlugField“Slug” 是一个报纸术语。 slug 是某个东西的小小标记(短签)， 只包　　含字母，数字，下划线和连字符。它们通常用于URLs。 若你使用 Django 开发版本，你可以指定 maxlength。 若 maxlength 未指定， Django 会使用默认长度： 50，它接受一个额外的参数：")])]),e._v(" "),l("p",[e._v("prepopulate_from: 来源于slug的自动预置列表")]),e._v(" "),l("p",[e._v("17、"),l("strong",[e._v("models.SlugField")]),e._v("   ---减号、下划线、字母、数字   它们通常用于URLs。\n18、"),l("strong",[e._v("models.SmallIntegerField")]),e._v("   ---数字   数据库中的字段有：tinyint、smallint、int、bigint.   类似 IntegerField， 不过只允许某个取值范围内的整数。(依赖数据库)\n19、"),l("strong",[e._v("models.TextField")]),e._v("   ---字符串=longtext ，一个容量很大的文本字段， admin 管理界面用 "),l("textarea")])])}),[],!1,null,null,null);l.default=o.exports}}]);