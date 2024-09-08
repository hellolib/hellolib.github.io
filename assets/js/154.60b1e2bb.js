(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{474:function(s,e,_){"use strict";_.r(e);var v=_(3),r=Object(v.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("参考博客https://www.cnblogs.com/maple-shaw/articles/9333824.html")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("中间件是处理django的请求和响应的框架级别的钩子,本质是一个类")]),s._v("(直白一点中间件是帮助我们在视图函数执行之前和执行之后都可以做一些额外的操作)")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("由于其影响的是全局，所以需要谨慎使用，使用不当会影响性能。")])])]),s._v(" "),e("li",[e("p",[s._v("定义的中间件需要注册")])]),s._v(" "),e("li",[e("p",[s._v("django中请求响应流程")]),s._v(" "),e("p",[s._v("![1561798819879](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561798819879.png)")])])]),s._v(" "),e("h2",{attrs:{id:"_1-中间件定义的五个方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-中间件定义的五个方法"}},[s._v("#")]),s._v(" 1.中间件定义的五个方法:")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("process_request(self,request)")])]),s._v(" "),e("li",[e("strong",[s._v("process_response(self, request, response)")])]),s._v(" "),e("li",[e("strong",[s._v("process_view(self, request, view_func, view_args, view_kwargs)")])]),s._v(" "),e("li",[s._v("process_exception(self, request, exception)")]),s._v(" "),e("li",[s._v("process_template_response(self,request,response)")])]),s._v(" "),e("p",[s._v("------最好全记住!!!!!!!!!!!!")]),s._v(" "),e("h3",{attrs:{id:"_1-1-process-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-process-request"}},[s._v("#")]),s._v(" 1.1 process_request")]),s._v(" "),e("ul",[e("li",[s._v("process_request(self,request)")])]),s._v(" "),e("h4",{attrs:{id:"特征"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),e("p",[e("code",[s._v("在视图函数之前执行的中间件方法按照注册顺序执行,在视图函数之后执行的中间件方法按照注册顺序倒序执行")])]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("执行时间:")]),s._v("  在执行视图函数之前执行")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("参数:")]),s._v(" request")]),s._v(" "),e("ul",[e("li",[s._v("request和视图函数中的的request是一个对象")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("执行顺序:")])]),s._v(" "),e("ul",[e("li",[s._v("按照注册的顺序进行执行")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("返回值:")])]),s._v(" "),e("ul",[e("li",[s._v("返回值为none的时候,执行顺序正常")]),s._v(" "),e("li",[s._v("返回值如果是HttpResponse, 后面的中间件的process_request、视图函数都不执行，直接执行当前中间件中的process_response方法，再倒序执行之前的中间件中process_response方法。")])])])]),s._v(" "),e("h3",{attrs:{id:"_1-2-process-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-process-response"}},[s._v("#")]),s._v(" 1.2 process_response")]),s._v(" "),e("ul",[e("li",[s._v("process_response(self, request, response)")])]),s._v(" "),e("h4",{attrs:{id:"特征-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征-2"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),e("p",[e("code",[s._v("在视图函数之前执行的中间件方法按照注册顺序执行,在视图函数之后执行的中间件方法按照注册顺序倒序执行")])]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("执行时间:")]),s._v("  在执行视图函数之后执行")]),s._v(" "),e("li",[e("strong",[s._v("参数:")]),s._v(" request / response\n"),e("ul",[e("li",[s._v("request  和视图函数中的的request是一个对象")]),s._v(" "),e("li",[s._v("response   返回给浏览器响应对象(不一定是视图对象,peocess_request也会返回对象)")])])]),s._v(" "),e("li",[e("strong",[s._v("执行顺序:")]),s._v(" "),e("ul",[e("li",[s._v("按照注册的顺序,倒序执行")])])]),s._v(" "),e("li",[e("strong",[s._v("返回值:")]),s._v(" "),e("ul",[e("li",[s._v("​\tHttpResponse：必须返回response对象")])])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("process_request执行流程")]),s._v(" "),e("p",[s._v("![1561802908112](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561802908112.png)")])])]),s._v(" "),e("h3",{attrs:{id:"_1-3-process-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-process-view"}},[s._v("#")]),s._v(" 1.3 process_view")]),s._v(" "),e("ul",[e("li",[s._v("process_view(self, request, view_func, view_args, view_kwargs)")])]),s._v(" "),e("h4",{attrs:{id:"特征-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征-3"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),e("p",[e("code",[s._v("在视图函数之前执行的中间件方法按照注册顺序执行,在视图函数之后执行的中间件方法按照注册顺序倒序执行")])]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("执行时间:")]),s._v("  视图函数之前，process_request之后")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("参数:")]),s._v(" request")]),s._v(" "),e("ul",[e("li",[s._v("request 和视图函数中的的request是一个对象")]),s._v(" "),e("li",[s._v("view_func  视图函数")]),s._v(" "),e("li",[s._v("view_args   视图函数的位置参数")]),s._v(" "),e("li",[s._v("view_kwargs    视图函数的关键字参数")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("执行顺序:")])]),s._v(" "),e("ul",[e("li",[s._v("按照注册的顺序进行执行")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("返回值:")])]),s._v(" "),e("ul",[e("li",[s._v("返回值为none的时候, 执行顺序正常")]),s._v(" "),e("li",[s._v("返回值如果是HttpResponse,  后面的中间的process_view、视图函数都不执行，直接执行注册的最后一个中间件中的process_response方法，再倒叙执行之前的中间中process_response方法。")])])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("执行流程图")]),s._v(" "),e("p",[s._v("![1561802700654](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561802700654.png)")])])]),s._v(" "),e("h3",{attrs:{id:"_1-4process-exception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4process-exception"}},[s._v("#")]),s._v(" 1.4process_exception")]),s._v(" "),e("ul",[e("li",[s._v("process_exception(self, request, exception)")])]),s._v(" "),e("h4",{attrs:{id:"特征-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征-4"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),e("p",[e("code",[s._v("在视图函数之前执行的中间件方法按照注册顺序执行,在视图函数之后执行的中间件方法按照注册顺序倒序执行")])]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("执行时间(（触发条件）):")]),s._v("  视图函数之后,视图层面有错时才执行")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("参数:")]),s._v(" request/exception")]),s._v(" "),e("ul",[e("li",[s._v("request 和视图函数中的的request是一个对象")]),s._v(" "),e("li",[s._v("exception  视图中的错误对象")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("执行顺序:")])]),s._v(" "),e("ul",[e("li",[s._v("按照注册的顺序  倒叙执行")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("返回值:")])]),s._v(" "),e("ul",[e("li",[s._v("返回值为none的时候, 交给下一个中间件取处理异常，都没有处理交由django处理异常")]),s._v(" "),e("li",[s._v("返回值如果是HttpResponse,   后面的中间件的process_exception不执行，直接执行最后一个中间件中的process_response方法，倒叙执行之前的中间中process_response方法。")])])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("流程图")]),s._v(" "),e("p",[s._v("![1561801490783](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561801490783.png)")])])]),s._v(" "),e("h3",{attrs:{id:"_1-5process-template-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5process-template-response"}},[s._v("#")]),s._v(" 1.5process_template_response")]),s._v(" "),e("ul",[e("li",[s._v("process_template_response(self,request,response)")])]),s._v(" "),e("h4",{attrs:{id:"特征-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特征-5"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),e("p",[e("code",[s._v("在视图函数之前执行的中间件方法按照注册顺序执行,在视图函数之后执行的中间件方法按照注册顺序倒序执行")])]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("执行时间(（触发条件）):")]),s._v("  视图函数之后,视图返回的是一个templateResponse对象(跟render用法类似)")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("参数:")]),s._v(" ,request,response")]),s._v(" "),e("ul",[e("li",[s._v("request  和视图函数中的的request是一个对象")]),s._v(" "),e("li",[s._v("response   templateResponse对象")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("执行顺序:")])]),s._v(" "),e("ul",[e("li",[s._v("按照注册的顺序  倒叙执行")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("返回值:")])]),s._v(" "),e("ul",[e("li",[s._v("HttpResponse：必须返回response对象")])])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("流程图")]),s._v(" "),e("p",[s._v("![1561802461972](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561802461972.png)")])])]),s._v(" "),e("h2",{attrs:{id:"_2-完整的django请求的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-完整的django请求的生命周期"}},[s._v("#")]),s._v(" 2.完整的django请求的生命周期")]),s._v(" "),e("p",[s._v("![1561862049120](C:\\Users\\big cattle\\AppData\\Roaming\\Typora\\typora-user-images\\1561862049120.png)")]),s._v(" "),e("p",[s._v("django小结")]),s._v(" "),e("h3",{attrs:{id:"内容回顾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容回顾"}},[s._v("#")]),s._v(" 内容回顾")]),s._v(" "),e("p",[s._v("web框架    socket服务端")]),s._v(" "),e("h4",{attrs:{id:"http协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[s._v("#")]),s._v(" http协议")]),s._v(" "),e("p",[s._v("请求的格式")]),s._v(" "),e("p",[s._v("“请求方式 URL路径 协议版本HTTP/1.1\\r\\n")]),s._v(" "),e("p",[s._v("k1:v1\\r\\n")]),s._v(" "),e("p",[s._v("k1v2\\r\\n")]),s._v(" "),e("p",[s._v("\\r\\n")]),s._v(" "),e("p",[s._v("请求体（请求的数据）”")]),s._v(" "),e("p",[s._v("响应的格式")]),s._v(" "),e("p",[s._v("“HTTP/1.1 状态码 状态描述\\r\\n")]),s._v(" "),e("p",[s._v("k1:v1\\r\\n")]),s._v(" "),e("p",[s._v("k1v2\\r\\n")]),s._v(" "),e("p",[s._v("\\r\\n")]),s._v(" "),e("p",[s._v("响应体（HTML页面）”")]),s._v(" "),e("p",[s._v("头")]),s._v(" "),e("p",[s._v("contentType：  text/html    application/json")]),s._v(" "),e("p",[s._v("set-cookie   cookie")]),s._v(" "),e("p",[s._v("Location")]),s._v(" "),e("p",[s._v("MVC   MTV")]),s._v(" "),e("h4",{attrs:{id:"路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[s._v("#")]),s._v(" 路由")]),s._v(" "),e("p",[s._v("url  和 函数的对应关系")]),s._v(" "),e("p",[s._v("​\turl（正则表达式，视图，{} ，name）")]),s._v(" "),e("p",[s._v("分组和命名分组")]),s._v(" "),e("p",[s._v("路由分发  include")]),s._v(" "),e("p",[s._v("url的命名和反向解析")]),s._v(" "),e("p",[s._v("namespace")]),s._v(" "),e("p",[s._v("视图   CBV   FBV")]),s._v(" "),e("p",[s._v("request")]),s._v(" "),e("p",[s._v("response")]),s._v(" "),e("h3",{attrs:{id:"orm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orm"}},[s._v("#")]),s._v(" ORM")]),s._v(" "),e("h3",{attrs:{id:"模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[s._v("#")]),s._v(" 模板")]),s._v(" "),e("h3",{attrs:{id:"cookie-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session"}},[s._v("#")]),s._v(" cookie session")]),s._v(" "),e("h3",{attrs:{id:"ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[s._v("#")]),s._v(" ajax")]),s._v(" "),e("h3",{attrs:{id:"form"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[s._v("#")]),s._v(" form")]),s._v(" "),e("h3",{attrs:{id:"中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[s._v("#")]),s._v(" 中间件")])])}),[],!1,null,null,null);e.default=r.exports}}]);