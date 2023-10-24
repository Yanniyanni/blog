(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{443:function(t,s,a){"use strict";a.r(s);var n=a(48),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http-1-x缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x缺点"}},[t._v("#")]),t._v(" HTTP/1.x缺点")]),t._v(" "),a("p",[t._v("HTTP/1.x 报文有一些性能上的缺点：")]),t._v(" "),a("ul",[a("li",[t._v("Header 不像 body，它不会被压缩。")]),t._v(" "),a("li",[t._v("两个报文之间的 header 通常非常相似，但它们仍然在连接中重复传输。")]),t._v(" "),a("li",[t._v("无法复用。当在同一个服务器打开几个连接时：TCP 热连接比冷连接更加有效。")])]),t._v(" "),a("h2",{attrs:{id:"http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),a("p",[t._v("为了解决 HTTP/1.x 报文的缺点，HTTP/2 引入了一个额外的步骤：\n"),a("strong",[t._v("它将 HTTP/1.x 消息分成帧并嵌入到流 (stream) 中。数据帧和报头帧分离，这将允许报头压缩。将多个流组合，这是一个被称为 多路复用 (multiplexing) 的过程，它允许更有效的底层 TCP 连接。")])]),t._v(" "),a("blockquote",[a("p",[t._v("HTTP/2是二进制协议而不是文本协议。")])]),t._v(" "),a("a",{attrs:{"data-fancybox":"",href:t.$withBase("/internet-http2.png")}},[a("img",{attrs:{src:t.$withBase("/internet-http2.png")}})]),t._v(" "),a("h2",{attrs:{id:"http-2优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2优点"}},[t._v("#")]),t._v(" HTTP/2优点：")]),t._v(" "),a("blockquote",[a("p",[t._v("一个字，就是快！")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("多路复用")]),t._v("：多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。也就是说一个TCP连接可以一次发送和接受多个请求。")]),t._v(" "),a("li",[a("strong",[t._v("二进制分帧")]),t._v("：多加了一个步骤，专门将消息分成了更小的二进制编码的帧。减少了传输量。")]),t._v(" "),a("li",[a("strong",[t._v("首部压缩")]),t._v("：新的压缩算法，减小首部大小，提升发送效率。")]),t._v(" "),a("li",[a("strong",[t._v("服务推送")]),t._v("：客户端请求一个资源，服务端把客户端可能需要请求的其他资源一起主动发给它，减少了交互次数。另外服务端还能缓存这样的资源，提升效率。")])]),t._v(" "),a("blockquote",[a("p",[t._v("服务端推送指把客户端所需要的css/js/img资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤（从缓存中取）。")])]),t._v(" "),a("h2",{attrs:{id:"升级到http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级到http-2"}},[t._v("#")]),t._v(" 升级到HTTP/2")]),t._v(" "),a("p",[t._v("从 HTTP/1.x 升级到 HTTP/2 不需要开发人员做修改。只要浏览器和服务器都具备条件时，打开 HTTP/2 即可使用。")]),t._v(" "),a("h3",{attrs:{id:"升级必备条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级必备条件"}},[t._v("#")]),t._v(" 升级必备条件：")]),t._v(" "),a("ul",[a("li",[t._v("openssl 1.0.2+")]),t._v(" "),a("li",[t._v("升级HTTPS")]),t._v(" "),a("li",[t._v("Nginx 1.9.5+ 且 支持")])]),t._v(" "),a("h3",{attrs:{id:"nginx启动http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx启动http-2"}},[t._v("#")]),t._v(" Nginx启动HTTP/2")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改成 http2 即可")]),t._v("\n  server_name   luolei.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SSL配置")]),t._v("\n  ssl                   on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ssl_certificate       /etc/nginx/conf.d/certificate.crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ssl_certificate_key   /etc/nginx/conf.d/certificate.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("升级后在浏览器上就可以看到协议变成了HTTP/2（下图为chrome 浏览器）")]),t._v(" "),a("a",{attrs:{"data-fancybox":"",href:t.$withBase("/internet-http2-update.png")}},[a("img",{attrs:{src:t.$withBase("/internet-http2-update.png")}})])])}),[],!1,null,null,null);s.default=e.exports}}]);