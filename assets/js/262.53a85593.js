(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{580:function(t,r,e){"use strict";e.r(r);var o=e(3),v=Object(o.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"各种port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各种port"}},[t._v("#")]),t._v(" 各种Port")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/hellolib/pictures/main/Typora/pic-00-gitee/20220722205232.png",alt:"k8s各种port"}})]),t._v(" "),r("h3",{attrs:{id:"nodeport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodeport"}},[t._v("#")]),t._v(" NodePort")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("NodePort")]),t._v("是worker节点对外暴露的端口， 外部流量访问k8s集群中"),r("code",[t._v("service")]),t._v("入口，即"),r("code",[t._v("nodeIP:nodePort")]),t._v("是提供给外部流量访问k8s集群中service的入口")]),t._v(" "),r("li",[t._v("比如外部用户要访问k8s集群中的一个Web应用，那么我们可以配置对应"),r("code",[t._v("service")]),t._v("的"),r("code",[t._v("type=NodePort")]),t._v("，"),r("code",[t._v("nodePort=30001")]),t._v("。其他用户就可以通过浏览器"),r("code",[t._v("http://node:30001")]),t._v("访问到该web服务。而数据库等服务可能不需要被外界访问，只需被内部服务访问即可，那么我们就不必设置service的NodePort。")])]),t._v(" "),r("h3",{attrs:{id:"port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" Port")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("Port")]),t._v(" 是service 对集群内部暴露的端口，是k8s集群内部服务之间访问service的入口，即"),r("code",[t._v("clusterIP:port")]),t._v("是service暴露在clusterIP上的端口。")]),t._v(" "),r("li",[t._v("只有集群内部可以访问。")])]),t._v(" "),r("h3",{attrs:{id:"targetport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#targetport"}},[t._v("#")]),t._v(" TargetPort")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("targetPort")]),t._v("是pod上的端口，从port和nodePort上来的流量，经过kube-proxy流入到后端pod的targetPort上，最后进入容器。")])]),t._v(" "),r("h3",{attrs:{id:"containerport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#containerport"}},[t._v("#")]),t._v(" ContainerPort")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("containerPort")]),t._v("是pod内部"),r("strong",[t._v("容器")]),t._v("的端口，"),r("code",[t._v("targetPort")]),t._v("映射到"),r("code",[t._v("containerPort")]),t._v("。")])])])}),[],!1,null,null,null);r.default=v.exports}}]);