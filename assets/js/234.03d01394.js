(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{555:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[t._v("定期发送HTTP/2.0 pings帧来检测 connection 是否存活，如果断开则进行重新连接。")]),t._v(" "),s("li",[t._v("keepalive ping是一种通过transport发送HTTP2 ping来检查通道当前是否工作的方法。它是周期性发送的，如果在某个超时周期内该ping没有得到对等方的确认，则传输断开连接。")]),t._v(" "),s("li",[t._v("与健康检查区别在于keepalive是检查connection, 而健康检查是检查服务是否可用。")]),t._v(" "),s("li",[t._v("gRPC 的 Keepalive 机制用于检测和维护客户端与服务器之间的长连接状态。客户端和服务器可以相互发送心跳包，以确保连接处于活跃状态。如果在一定时间内没有收到心跳包，则会认为连接已经断开，会将连接关闭并触发重连机制。")])]),t._v(" "),s("h2",{attrs:{id:"官方实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方实现"}},[t._v("#")]),t._v(" 官方实现")]),t._v(" "),s("blockquote",[s("p",[t._v("https://pkg.go.dev/google.golang.org/grpc/keepalive")])]),t._v(" "),s("ul",[s("li",[t._v("包名: google.golang.org/grpc/keepalive")])]),t._v(" "),s("h2",{attrs:{id:"grpc-keepalive-与-http-keepalive-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-keepalive-与-http-keepalive-区别"}},[t._v("#")]),t._v(" grpc keepalive 与 http keepalive 区别")]),t._v(" "),s("ul",[s("li",[t._v("gRPC 的 Keepalive 和 HTTP 1.1 的 Keepalive 是不同的机制，虽然它们都用于保持长连接并避免频繁建立连接的开销。下面是它们的一些主要区别：\n"),s("ol",[s("li",[t._v("机制类型 gRPC 的 Keepalive 是一种自定义的机制，用于维护客户端和服务器之间的长连接状态。HTTP 1.1 的 Keepalive 是一种标准的机制，用于避免在客户端和服务器之间频繁建立连接。")]),t._v(" "),s("li",[t._v("实现方式 gRPC 的 Keepalive 机制是基于 TCP 协议的心跳包实现的，可以在长时间的空闲期间发送心跳包来保持连接状态。HTTP 1.1 的 Keepalive 机制则是在 HTTP 协议层面上实现的，通过在 HTTP 报文头中添加 "),s("code",[t._v("Connection: Keep-Alive")]),t._v(" 标识来告知服务器保持连接。")]),t._v(" "),s("li",[t._v("适用范围 gRPC 的 Keepalive 机制适用于基于 gRPC 协议的应用程序，主要用于保持客户端和服务器之间的长连接状态。HTTP 1.1 的 Keepalive 机制适用于基于 HTTP 1.1 协议的应用程序，主要用于优化 HTTP 请求的性能。 综上所述，gRPC 的 Keepalive 和 HTTP 1.1 的 Keepalive 机制虽然都用于保持长连接并避免频繁建立连接的开销，但它们是不同的机制，适用于不同的应用场景和协议。")])])])]),t._v(" "),s("h2",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("server.go")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kaep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keepalive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnforcementPolicy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMinTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If a client pings more than once every 5 seconds, terminate the connection")]),t._v("\n\tPermitWithoutStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow pings even when there are no active streams")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kasp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keepalive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServerParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxConnectionIdle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If a client is idle for 15 seconds, send a GOAWAY")]),t._v("\n\tMaxConnectionAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If any connection is alive for more than 30 seconds, send a GOAWAY")]),t._v("\n\tMaxConnectionAgeGrace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow 5 seconds for pending RPCs to complete before forcibly closing connections")]),t._v("\n\tTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ping the client if it is idle for 5 seconds to ensure the connection is still active")]),t._v("\n\tTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait 1 second for the ping ack before assuming the connection is dead")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeepaliveEnforcementPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kaep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeepaliveParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kasp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("client.go")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kaep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keepalive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnforcementPolicy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMinTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If a client pings more than once every 5 seconds, terminate the connection")]),t._v("\n\tPermitWithoutStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow pings even when there are no active streams")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kasp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keepalive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServerParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxConnectionIdle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If a client is idle for 15 seconds, send a GOAWAY")]),t._v("\n\tMaxConnectionAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If any connection is alive for more than 30 seconds, send a GOAWAY")]),t._v("\n\tMaxConnectionAgeGrace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow 5 seconds for pending RPCs to complete before forcibly closing connections")]),t._v("\n\tTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ping the client if it is idle for 5 seconds to ensure the connection is still active")]),t._v("\n\tTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait 1 second for the ping ack before assuming the connection is dead")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeepaliveEnforcementPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kaep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KeepaliveParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kasp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);