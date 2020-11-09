(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(s,t,a){s.exports=a.p+"assets/img/git-shell.96a05033.jpg"},362:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"git提交自动化脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git提交自动化脚本"}},[s._v("#")]),s._v(" git提交自动化脚本")]),s._v(" "),n("h2",{attrs:{id:"前提"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[s._v("#")]),s._v(" 前提")]),s._v(" "),n("p",[s._v("最近开发真是越来越懒了，git 提交每次 add -> commit ->push的都觉得挺烦的。尤其是经常在push之前还要执行pull。不得不说，这活真的是机械性的。那么机械性的工作就机械对待吧，怎么说程序员也不是机器啊，程序员别名IT开发者。")]),s._v(" "),n("p",[s._v("于是萌生了git 提交自动化的念头。其实原理也很简单，就是在终端（window是dos窗口）执行git命令嘛。无论是mac还是window，其实最终执行的都是shell命令。所以我们只需要在项目中添加一个shell脚本就行。")]),s._v(" "),n("p",[n("em",[n("strong",[s._v("deploy.sh")])]),s._v("（名字随便取，后缀一定要是.sh，sh是shell脚本的固定后缀）")]),s._v(" "),n("img",{attrs:{src:a(349),width:"100%"}}),s._v(" "),n("h2",{attrs:{id:"脚本开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本开发"}},[s._v("#")]),s._v(" 脚本开发")]),s._v(" "),n("p",[n("em",[n("strong",[s._v("deploy.sh")])]),s._v(" 内容其实也很简单，就是普通的git命令")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'代码更新'")]),s._v(",\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])])]),n("p",[s._v("脚本也有了，那么记下来就要在我们的项目中配置一个执行该脚本的命令。")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("这里要注意的是shell脚本要用 "),n("em",[n("strong",[s._v("bash")])]),s._v(" 来执行")])]),s._v(" "),n("p",[s._v("然后我们只需要在在控制台敲 "),n("em",[n("strong",[s._v("npm run deploy")])]),s._v(" 就会制动执行shell脚本中的git命令了，到这里基本功能就完成了；")]),s._v(" "),n("p",[s._v("但是，其实我们还可以加一点优化的，比如说在执行命令之前先检查一下git分支是否有需要提交的代码？如果不存在脚本执行终止，如果存在执行继续；")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印git status, 查看当前分支的状态")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抽取变动的文件名。并标注为新增或者删除和修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status --porcelain"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  判断是否有需要提交的内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分支clean,无需提交的代码'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n")])])]),n("p",[s._v("嗯，到这里基本上大功告成了，正规的操作肯定是没有问题的，脚本可以顺畅的执行。")]),s._v(" "),n("p",[s._v("但是大家注意没有，上面我们的commit信息是固定的，这对于代码版本维护肯定不友好的，那么该怎么办呢？如果每次都要去修改脚本其实也是很费劲的。")]),s._v(" "),n("p",[s._v("所以，我首先想到的就是在脚本执行时，提示数据commit信息，然后将输入的信息拼接到git commit -m 后面。这样就达到了动态commit信息的效果了。其实到这里就对普通的前端来说与要求有点高了。因为shell脚本的编写一般是前端触及不到的，就不做过多赘述了，直接贴代码了。")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义一个变量接收用户数据的文本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请填写commit信息:"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("IFS")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -r -s -n1 char\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果读入的字符为空，则退出 while 循环")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果输入的是退格或删除键，则移除一个字符")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\x08"}},[s._v("\\x08")]),s._v("'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\x7f"}},[s._v("\\x7f")]),s._v("'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${message"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("0"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("${"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("message}")]),s._v("-1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v("'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行commit提交")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v('"')]),s._v(" \n\n")])])]),n("p",[s._v("嗯，到这里貌似都大功告成了，看起来也挺完美的了。但是其实还没有，别忘了在git commit 之后我们还要执行git pull命令。如果拉取的代码跟本地分支的代码冲突了怎么办呢？")]),s._v(" "),n("p",[s._v("有冲突就解决冲突啊，是的。所以在pull之后就不能直接push了，因为即使你的文件冲突了push也是可以成功的。因为冲突只能手动去解决，所以在pull之后我们只能暂停push，给到用户一个观察的时间。并提示用户是否需要将代码合并到远程分支。用户确认后执行下一步操作。")]),s._v(" "),n("p",[s._v("直接上代码，看看shell是如何实现对话框的：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是否将代码push到远程分支? [Y/N] "')]),s._v(" input\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$input")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"即将push代码到远程分支...."')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"代码已推送至远程分支！"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"代码提交到暂存区"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"仅能输入[yY]或者[nN]"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])])]),n("p",[s._v("就是这么简单的，是不是很容易就学会了呢？")]),s._v(" "),n("p",[s._v("最后为大家附上完整源码：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抽取变动的文件名。并标注为新增或者删除和修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("branch")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f2"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"当前分支：'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$branch")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status --porcelain"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  判断是否有需要提交的内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分支clean,无需提交的代码'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始执行git add ..."')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请填写commit信息："')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("IFS")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -r -s -n1 char\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果读入的字符为空，则退出 while 循环")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果输入的是退格或删除键，则移除一个字符")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\x08"}},[s._v("\\x08")]),s._v("'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\x7f"}},[s._v("\\x7f")]),s._v("'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${message"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("0"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("${"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("message}")]),s._v("-1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v("'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$char")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v("; 更新文件："),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v('"')]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果当前分支没有什么可提交的，commit命令将执行失败")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -eq "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fail"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("isCommit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是否将代码push到远程分支? [Y/N] "')]),s._v(" input\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$input")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"即将push代码到远程分支...."')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"代码提交到暂存区"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"仅能输入[yY]或者[nN]"')]),s._v("\n        isCommit\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nisCommit\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("isBuild")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是否需要构建项目？[Y/N]"')]),s._v(" build\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$build")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:all\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"仅能输入[yY]或者[nN]"')]),s._v("\n            isBuild\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$branch")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"develop"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    isBuild\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);