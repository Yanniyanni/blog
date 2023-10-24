(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{570:function(t,s,a){"use strict";a.r(s);var n=a(48),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("JavaScript有一个基于事件循环的并发模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。这个模型与其它语言中的模型截然不同，比如 C 和 Java。")]),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),a("h3",{attrs:{id:"进程与线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[t._v("#")]),t._v(" 进程与线程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进程（progress）：进程是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元。")])]),t._v(" "),a("li",[a("p",[t._v("线程（thread）：是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。")])])]),t._v(" "),a("p",[t._v("更多专业名词介绍请看："),a("RouterLink",{attrs:{to:"/frontend/terminology.html"}},[t._v("《专业名词》")])],1),t._v(" "),a("h3",{attrs:{id:"javascript是单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript是单线程"}},[t._v("#")]),t._v(" javascript是单线程")]),t._v(" "),a("p",[t._v("JavaScript 引擎是单线程，也就是说每次只能执行一项任务，其他任务都得按照顺序排队等待被执行，只有当前的任务执行完成之后才会往下执行下一个任务。")]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？")])]),t._v(" "),a("p",[t._v("为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。")]),t._v(" "),a("h3",{attrs:{id:"内核-浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核-浏览器内核"}},[t._v("#")]),t._v(" 内核(浏览器内核)")]),t._v(" "),a("p",[t._v("浏览器是多进程的，每个进程有多个线程在工作。")]),t._v(" "),a("p",[t._v("浏览器内核主要包括三个部分：")]),t._v(" "),a("ul",[a("li",[t._v("排版渲染引擎")]),t._v(" "),a("li",[t._v("JS 引擎：解析 Javascript 语言")]),t._v(" "),a("li",[t._v("其他")])]),t._v(" "),a("p",[t._v("我们常说的"),a("code",[t._v("v8引擎")]),t._v("就是 chrome浏览器的 JavaScript引擎。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/articles/frontend/2019-12-12-intro-browser.html"}},[t._v("《五大主流浏览器及四大内核》")])],1),t._v(" "),a("h3",{attrs:{id:"js引擎-js-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js引擎-js-engine"}},[t._v("#")]),t._v(" js引擎(JS Engine)")]),t._v(" "),a("p",[t._v("JavaScript 引擎并不是独立运行的，它"),a("strong",[t._v("运行在宿主环境中")]),t._v("，对多数开发者来说通常就是Web 浏览器。经过最近几年的发展，JavaScript 已经超出了浏览器的范围，进入了其他环境，比如通过像 Node.js 这样的工具进入服务器领域、智能设备、机器人等各种各样的设备中。")]),t._v(" "),a("p",[t._v("所有宿主环境都有一个共同“点”（thread，也指线程），即它们都提供了一种机制来处理程序中多个块的执行，且执行每块时调用 JavaScript 引擎，这种机制被称为"),a("RouterLink",{attrs:{to:"/articles/frontend/2020-07-31-intro-eventloop.html#事件循环"}},[t._v("事件循环（eventLoop）")]),t._v("。")],1),t._v(" "),a("ul",[a("li",[t._v("js引擎只有一个线程，它维护一个消息队列，当前函数栈执行完成之后就去不断地取消息队列中的消息（回调），取到了就执行")]),t._v(" "),a("li",[t._v("js引擎只负责取消息，不负责生产消息。")])]),t._v(" "),a("h3",{attrs:{id:"js运行时-js-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js运行时-js-runtime"}},[t._v("#")]),t._v(" js运行时(JS Runtime)")]),t._v(" "),a("p",[t._v("在 JSAPI 中，"),a("strong",[t._v("JS Runtime 代表 JavaScript 引擎实例的顶级对象")]),t._v("。一个程序通常只有一个JSRuntime，即使它有很多线程。")]),t._v(" "),a("p",[t._v("所有 JavaScript 代码和大多数 JSAPI 调用都运行在 JSContext 中。"),a("strong",[t._v("JS Context 是 JS Runtime 的子级")]),t._v("，是一个可以运行脚本的上下文环境。它包含全局对象、执行堆栈、异常处理、错误报告和某些语言选项是基于Per-的JSContext。创建上下文后，可以将上下文多次用于不同的脚本或JSAPI查询。例如，浏览器可能会为每个HTML页面创建一个单独的上下文。页面中的每个脚本都可以使用相同的上下文。")]),t._v(" "),a("blockquote",[a("p",[t._v("例如，JS 可以调用浏览器提供的 API，如 window 对象，DOM 相关 API 等。这些 API 并不是由V8引擎提供的，是存在与浏览器当中的。同样，在Node.js中，可以把Node的各种库提供的API称为RunTime。所以可以这么理解，Chrome和Node.js都采用相同的V8引擎，但拥有不同的运行环境(RunTime Environments)")])]),t._v(" "),a("ul",[a("li",[t._v("JSRuntime 负责给 js 引擎线程发送消息。")])]),t._v(" "),a("p",[t._v("比如浏览器DOM事件发送一条鼠标点击的消息(浏览器子线程和js引擎线程的IPC通信)，那么js引擎在执行完函数栈之后就会取到这条鼠标点击信息，执行消息（即回调）；")]),t._v(" "),a("p",[t._v("比如node运行时读取文件，执行系统调用，完成后发送读取文件完成的消息，之后的过程同上。js运行时只负责生产消息，不负责取消息.")]),t._v(" "),a("h3",{attrs:{id:"阻塞与非阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻塞与非阻塞"}},[t._v("#")]),t._v(" 阻塞与非阻塞")]),t._v(" "),a("ul",[a("li",[t._v("阻塞调用是指调用结果返回之前，当前线程会被挂起")]),t._v(" "),a("li",[t._v("非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程")])]),t._v(" "),a("p",[t._v("一般来说非阻塞性的任务采取同步的方式，直接在主线程的执行栈完成。阻塞性的任务都会采用异步来执行。")]),t._v(" "),a("p",[a("strong",[t._v("区别")])]),t._v(" "),a("ul",[a("li",[t._v("阻塞和非阻塞强调的是程序在等待调用结果（消息，返回值）时的状态")]),t._v(" "),a("li",[t._v("同步和异步强调的是消息通信机制 (synchronous communication/ asynchronous communication)")])]),t._v(" "),a("h2",{attrs:{id:"运行时概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时概念"}},[t._v("#")]),t._v(" 运行时概念")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",href:"https://media.prod.mdn.mozit.cloud/attachments/2020/02/23/17124/7cbd04169bbb5be13ede088ff0833882/The_Javascript_Runtime_Environment_Example.svg"}},[a("img",{attrs:{src:"https://media.prod.mdn.mozit.cloud/attachments/2020/02/23/17124/7cbd04169bbb5be13ede088ff0833882/The_Javascript_Runtime_Environment_Example.svg",alt:"运行时概念"}})])]),t._v(" "),a("ul",[a("li",[t._v("堆：一块"),a("strong",[t._v("存储对象")]),t._v("的内存区域（基础数据类型存在栈中）")]),t._v(" "),a("li",[t._v("栈：遵从 "),a("strong",[t._v("后进先出（LIFO）")]),t._v(" 原则的有序集合（函数调用时形成了栈）")]),t._v(" "),a("li",[t._v("队列：遵循 "),a("strong",[t._v("先进先出（FIFO）")]),t._v(" 原则的一组有序的项（队列是在运行时才会创建的）")])]),t._v(" "),a("h3",{attrs:{id:"栈-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[t._v("#")]),t._v(" 栈(Stack)")]),t._v(" "),a("p",[t._v("函数调用形成了一个由若干帧组成的栈。")]),t._v(" "),a("p",[t._v("JavaScript中函数的执行过程，其实就是一个入栈出栈的过程。当脚本要调用一个函数时，JS解析器把该函数推入栈中（push）并执行当函数运行结束后，JS解析器将它从堆栈中推出（pop）。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 42")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("当调用 bar 时，第一个包含了 bar 的参数和局部变量。 当 bar 调用 foo 时，第二个帧被创建并被压入栈中，放在第一个帧之上，帧中包含 foo 的参数和局部变量。当 foo 执行完毕然后返回时，第二个帧就被弹出栈（剩下 bar 函数的调用帧 ）。当 bar 也执行完毕然后返回时，第一个帧也被弹出，栈就被清空了。")]),t._v(" "),a("h3",{attrs:{id:"堆-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[t._v("#")]),t._v(" 堆(Heap)")]),t._v(" "),a("p",[t._v("对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。")]),t._v(" "),a("p",[t._v("堆的存储方式：无序的键值对。堆的存取方式跟顺序没有关系，不局限出入口。")]),t._v(" "),a("h3",{attrs:{id:"队列-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列-queue"}},[t._v("#")]),t._v(" 队列(Queue)")]),t._v(" "),a("blockquote",[a("p",[t._v("不同的叫法：消息队列 = 任务队列 = 回调队列")])]),t._v(" "),a("p",[a("strong",[t._v("JavaScript 运行时包含了一个待处理消息的消息队列")]),t._v("。每一个消息都关联着一个用以处理这个消息的回调函数。")]),t._v(" "),a("p",[t._v("在事件循环期间的某个时刻，运行时会从最先进入队列的消息开始处理队列中的消息。被处理完的消息会被移出队列，并作为输入参数来调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。")]),t._v(" "),a("p",[t._v("函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）")]),t._v(" "),a("h3",{attrs:{id:"同步与异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步与异步"}},[t._v("#")]),t._v(" 同步与异步")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步(Synchronous)：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务")])]),t._v(" "),a("li",[a("p",[t._v('异步(Asynchronous)：不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。')])])]),t._v(" "),a("p",[a("strong",[t._v("js 常见的异步任务:")])]),t._v(" "),a("ul",[a("li",[t._v("Ajax 回调")]),t._v(" "),a("li",[t._v("Dom事件操作")]),t._v(" "),a("li",[t._v("setTimeOut")]),t._v(" "),a("li",[t._v("promise的then方法")]),t._v(" "),a("li",[t._v("Node读取文件")])]),t._v(" "),a("h2",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("blockquote",[a("p",[t._v("不同叫法：事件循环机制 = 事件轮询机制 = event loop")])]),t._v(" "),a("p",[t._v("Event Loop 是 javascript 运行的核心。了解它能帮助你写出更优质的代码，也避免写出有隐藏bug的代码。")]),t._v(" "),a("p",[t._v("一旦有事件需要运行，事件循环就会运行，直到队列清空。事件循环的每一轮称为一个"),a("strong",[t._v("tick")]),t._v("。用户交互、IO 和定时器会向事件队列中加入事件。")]),t._v(" "),a("p",[t._v("事件循环机制在浏览器和node下的标准不一样，下面一一讲解。")]),t._v(" "),a("h3",{attrs:{id:"浏览器的eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的eventloop"}},[t._v("#")]),t._v(" 浏览器的EventLoop")]),t._v(" "),a("p",[t._v("浏览器的 EventLoop 是基于"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("Html5标准"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("事件循环模型图：")]),t._v(" "),a("a",{attrs:{"data-fancybox":"",href:t.$withBase("/articals/2020-07-31-intro-eventloop-01.png")}},[a("img",{attrs:{src:t.$withBase("/articals/2020-07-31-intro-eventloop-01.png")}})]),t._v(" "),a("p",[t._v("在浏览器的事件循环中，"),a("strong",[t._v("异步队列的任务又分为两种：宏任务和微任务")]),t._v("。宏任务队列可以有多个，微任务队列只有一个。")]),t._v(" "),a("p",[a("strong",[t._v("宏任务(macro-task)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("浏览器")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Node")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("同步代码")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可看做整块script代码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UI rendering")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("I/O")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("setTimeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("setInterval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("requestAnimationFrame")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("setImmediate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[a("strong",[t._v("微任务(micro-task)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("浏览器")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Node")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("process.nextTick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Promise 后的then语句")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MutationObserver")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("html5新特性，注意兼容性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("queueMicrotask")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("html5新特性，注意兼容性")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("宏任务和微任务一般可以做以上区分，但不同的环境可能会有表现差异。")])]),t._v(" "),a("p",[a("strong",[t._v("同步与异步、宏任务与微任务是两个不同维度的描述，它们不是互斥的。")])]),t._v(" "),a("h4",{attrs:{id:"执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[t._v("#")]),t._v(" 执行顺序")]),t._v(" "),a("p",[t._v("先同步再异步，在此基础上先宏任务再微任务。以此类推，不断循环。")]),t._v(" "),a("ul",[a("li",[t._v("从上往下，同步直接执行，异步分发 MacroTask 或者 microtask")]),t._v(" "),a("li",[t._v("碰到 MacroTask 直接执行，并且把回调函数放入 MacroTask 执行队列中（下次事件循环执行）；碰到 microtask 直接执行。把回调函数放入 microtask 执行队列中（本次事件循环执行）")]),t._v(" "),a("li",[t._v("当同步任务执行完毕后，去执行微任务 microtask。（microtask队列清空）")]),t._v(" "),a("li",[t._v("由此进入下一轮事件循环：执行宏任务 MacroTask （setTimeout，setInterval，callback）")])]),t._v(" "),a("p",[t._v("举个例子:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步宏任务 start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步宏任务 promise'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步微任务then'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步宏任务'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queueMicrotask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步微任务 - 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步宏任务 promise'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步微任务then'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queueMicrotask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步微任务 - 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'同步宏任务 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("p",[t._v("输出结果：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步宏任务 start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步宏任务 promise")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步宏任务 end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步微任务 - 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步微任务then")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步微任务 - 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步宏任务 promise")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步宏任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步微任务then")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("更多代码示例请看："),a("RouterLink",{attrs:{to:"/articles/frontend/2020-08-04-intro-eventloop-demo.html"}},[t._v("《浏览器事件循环机制(EventLoop)代码示例》")])],1),t._v(" "),a("h3",{attrs:{id:"node的eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node的eventloop"}},[t._v("#")]),t._v(" Node的Eventloop")]),t._v(" "),a("p",[t._v("事件循环是 Node.js 处理非阻塞 I/O 操作的机制。Node的事件循环基于 "),a("a",{attrs:{href:"http://libuv.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("libuv"),a("OutboundLink")],1),t._v("(跨平台异步IO库)。")]),t._v(" "),a("p",[t._v("Node 的 event loop 分为6个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("定时器：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。")]),t._v(" "),a("li",[t._v("待定回调：执行延迟到下一个循环迭代的 I/O 回调。")]),t._v(" "),a("li",[t._v("idle, prepare：仅系统内部使用。")]),t._v(" "),a("li",[t._v("轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。")]),t._v(" "),a("li",[t._v("检测：setImmediate() 回调函数在这里执行。")]),t._v(" "),a("li",[t._v("关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。")])]),t._v(" "),a("p",[t._v("待更新...")]),t._v(" "),a("p",[t._v("参考文章：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("并发模型与事件循环"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 事件循环"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Living Standard - Event loops"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/itgezhu/p/13259966.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇搞定（Js异步、事件循环与消息队列、微任务与宏任务）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);