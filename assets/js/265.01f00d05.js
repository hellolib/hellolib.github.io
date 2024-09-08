(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{585:function(t,r,s){"use strict";s.r(r);var a=s(3),o=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"go-kit简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-kit简介"}},[t._v("#")]),t._v(" go-kit简介")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("go-kit 本身不是一个框架，而是一套微服务工具集，是框架的底层，可以用go-kit 做适应自己平台的框架。它的设计目标是帮助开发者构建健壮、可维护、可测试的分布式系统。go-kit 的核心理念是通过可组合的组件来实现微服务的功能，这些组件包括服务发现、负载均衡、请求追踪、日志记录、监控等等。go-kit还提供了一种基于中间件的设计模式，使开发人员能够构建可插拔的组件，从而更容易地构建和维护可扩展的分布式应用程序。")])]),t._v(" "),r("li",[r("p",[t._v("go-kit 的设计目标是简单、灵活、可扩展。它提供了一些基本的组件，如服务端点（endpoint）、传输层（transport）、服务发现、负载均衡等，这些组件可以通过接口进行组合，并且可以根据实际需求进行扩展和定制。")])]),t._v(" "),r("li",[r("p",[t._v("go-kit采用了微服务架构的理念，将应用程序分解为一组小型服务，每个服务都具有单独的职责。每个服务都是独立的，可以独立部署、升级和扩展。通过这种方式，go-kit可以帮助开发人员更容易地构建可扩展的应用程序。")])]),t._v(" "),r("li",[r("p",[t._v("github仓库：https://github.com/go-kit/kit")])]),t._v(" "),r("li",[r("p",[t._v("官网店址：https://gokit.io/")])])]),t._v(" "),r("h2",{attrs:{id:"go-kit架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-kit架构设计"}},[t._v("#")]),t._v(" go-kit架构设计")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("由于其灵活的设计， 通过使用 go-kit，开发者可以快速地构建出符合分布式系统要求的微服务应用，同时也能够方便地对已有的应用进行升级和维护。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20230222173216.png",alt:"gokit onion"}})])]),t._v(" "),r("li",[r("p",[t._v("go-kit 采用三层架构方式，自上而下分别为：Transport、Endpoint、Service。")]),t._v(" "),r("blockquote",[r("p",[t._v("日后开发应严格遵守此规范")])]),t._v(" "),r("ol",[r("li",[r("code",[t._v("Transport")]),t._v("层主要负责与传输协议HTTP，GRPC，THRIFT等相关的逻辑；")]),t._v(" "),r("li",[r("code",[t._v("Endpoint")]),t._v("层主要负责request／response格式的转换，以及公用拦截器相关的逻辑；Endpoint 是 go-kit 中最重要的组件之一，它用于封装服务操作的输入和输出。通过 Endpoint，开发者可以将一个服务拆分成多个小的可复用的操作，这些操作可以独立地进行测试、扩展和部署。")]),t._v(" "),r("li",[r("code",[t._v("Service")]),t._v("层则专注于业务逻辑，就是我们的业务类、接口等相关信息存放。Service 是业务逻辑的实现，它是 Endpoint 的实现者。Service 负责处理具体的业务逻辑，通过 Endpoint 将其暴露出去供其他服务进行调用。")])]),t._v(" "),r("div",{staticClass:"language-go line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-go"}},[r("code",[t._v("                "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    Request "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Transport "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Endpoint "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Service\n                "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    Response "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 求从 Transport 组件进入，然后被传递到 Endpoint 组件。Endpoint 组件封装了服务操作的输入和输出，通过调用 Service 组件来处理具体的业务逻辑，并将结果返回给 Endpoint 组件。最后，Endpoint 组件将结果返回给 Transport 组件，由 Transport 组件发送回客户端。")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])])]),t._v(" "),r("li",[r("p",[t._v("这种架构设计的好处是，Transport 组件和 Service 组件可以独立地开发和部署，而 Endpoint 组件则充当了它们之间的桥梁，负责将请求和响应进行转换和协调。同时，Endpoint 组件的封装性使得它可以在不同的 Transport 组件之间进行转换，从而使得服务的调用方更加灵活。")])])]),t._v(" "),r("h2",{attrs:{id:"go-kit构建微服务步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-kit构建微服务步骤"}},[t._v("#")]),t._v(" go-kit构建微服务步骤")]),t._v(" "),r("ol",[r("li",[t._v("定义业务逻辑和数据模型：定义服务接口和数据模型，包括请求和响应数据结构。")]),t._v(" "),r("li",[t._v("实现服务：根据定义的接口和数据模型实现服务，包括服务接口和业务逻辑实现。")]),t._v(" "),r("li",[t._v("创建 endpoint：创建 endpoint 对象，将业务逻辑封装成 endpoint。")]),t._v(" "),r("li",[t._v("创建 transport：创建 transport 对象，处理网络传输，包括编码、解码和传输数据。")]),t._v(" "),r("li",[t._v("创建服务实例：创建服务实例，将 endpoint 和 transport 组装起来，创建服务实例。")]),t._v(" "),r("li",[t._v("创建中间件：创建中间件对象，实现一些通用的逻辑，例如认证、授权、限流、熔断、追踪、日志等。")]),t._v(" "),r("li",[t._v("组装中间件和服务实例：将中间件对象和服务实例组装起来，形成一个完整的服务实例。")])]),t._v(" "),r("h2",{attrs:{id:"go-kit和go-micro的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-kit和go-micro的区别"}},[t._v("#")]),t._v(" go-kit和go-micro的区别")]),t._v(" "),r("ol",[r("li",[t._v("设计思想不同：go-kit 的设计思想主要是基于 Go 语言的原生语言和库，它的组件和工具更加灵活和可扩展；而 go-micro 的设计思想主要是基于插件式架构。")]),t._v(" "),r("li",[t._v("组件数量不同：go-kit 的组件数量相对较少，主要包括 Endpoint、Transport、Service、Middleware、Circuit Breaker、Service Discovery 和 Load Balancer 等；而 go-micro 的组件数量较多，主要包括服务注册中心、负载均衡、消息队列、反向代理、数据存储、服务监控等。")]),t._v(" "),r("li",[t._v("接入方式不同：go-kit 的接入方式主要是手工编写代码，开发者需要手动实现 Endpoint、Transport、Service 等组件；而 go-micro 的接入方式主要是使用插件，开发者只需要选择需要的插件即可完成微服务的开发和部署。")]),t._v(" "),r("li",[t._v("性能表现不同：由于 go-kit 的设计思想更加注重灵活性和可扩展性，因此它在性能方面可能会更好；而 go-micro 的设计思想更加注重易用性和部署性，因此它在开发效率方面可能会更好。")])])])}),[],!1,null,null,null);r.default=o.exports}}]);