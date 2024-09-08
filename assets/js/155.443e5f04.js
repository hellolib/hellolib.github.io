(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{477:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"django-的身份认证系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-的身份认证系统"}},[s._v("#")]),s._v(" Django 的身份认证系统")]),s._v(" "),a("p",[s._v("auth模块是Django提供的标准权限管理系统,可以提供用户身份认证, 用户组和权限管理。")]),s._v(" "),a("p",[s._v("auth可以和admin模块配合使用， 快速建立网站的管理系统。")]),s._v(" "),a("p",[s._v("在INSTALLED_APPS中添加'django.contrib.auth'使用该APP, auth模块默认启用.")]),s._v(" "),a("h2",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[s._v("#")]),s._v(" User")]),s._v(" "),a("p",[s._v("User是auth模块中维护用户信息的关系模式(继承了models.Model), 数据库中该表被命名为auth_user.")]),s._v(" "),a("p",[s._v("User表的SQL描述:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auth_user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" AUTOINCREMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_login"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_superuser"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("254")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_staff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_active"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date_joined"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("auth模块提供了很多API管理用户信息, 在必要的时候我们可以导入User表进行操作, 比如其它表需要与User建立关联时.")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" User\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-新建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建用户"}},[s._v("#")]),s._v(" 1.新建用户")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("建立user对象")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要调用save()方法新用户才会写入数据库")]),s._v(" "),a("p",[s._v("auth模块不存储用户密码明文而是存储一个Hash值, 比如迭代使用Md5算法.")]),s._v(" "),a("h3",{attrs:{id:"_2-认证用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-认证用户"}},[s._v("#")]),s._v(" 2.认证用户")]),s._v(" "),a("p",[s._v("先导入函数")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" authenticate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用关键字参数传递账户和凭据:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" authenticate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("认证用户的密码是否有效, 若有效则返回代表该用户的user对象, 若无效则返回None.")]),s._v(" "),a("p",[s._v("该方法不检查"),a("code",[s._v("is_active")]),s._v("标志位.")]),s._v(" "),a("h3",{attrs:{id:"_3-修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改密码"}},[s._v("#")]),s._v(" 3.修改密码")]),s._v(" "),a("p",[s._v("修改密码是User的实例方法, 该方法不验证用户身份:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通常该方法需要和authenticate配合使用:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("authenticate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("old_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new_password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_4-登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-登录"}},[s._v("#")]),s._v(" 4.登录")]),s._v(" "),a("p",[s._v("检验是否登录")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("is_login "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_authenticated\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("首先import:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" login\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("login向session中添加SESSION_KEY, 便于对用户进行跟踪:")]),s._v(" "),a("p",[s._v("'login(request, user)'")]),s._v(" "),a("p",[s._v("login不进行认证,也不检查is_active标志位, 一般和authenticate配合使用:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" authenticate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("auth/__init__.py")]),s._v("中可以看到login的源代码.")]),s._v(" "),a("h3",{attrs:{id:"_5-退出登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-退出登录"}},[s._v("#")]),s._v(" 5.退出登录")]),s._v(" "),a("p",[s._v("logout会移除request中的user信息, 并刷新session:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logout\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("logout_view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    logout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_6-只允许登录的用户访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-只允许登录的用户访问"}},[s._v("#")]),s._v(" 6.只允许登录的用户访问")]),s._v(" "),a("p",[s._v("@login_required修饰器修饰的view函数会先通过session key检查是否登录, 已登录用户可以正常的执行操作, 未登录用户将被重定向到"),a("code",[s._v("login_url")]),s._v("指定的位置.")]),s._v(" "),a("p",[s._v("若未指定login_url参数, 则重定向到"),a("code",[s._v("settings.LOGIN_URL")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decorators "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" login_required\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@login_required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("login_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/accounts/login/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("my_view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[s._v("#")]),s._v(" Group")]),s._v(" "),a("p",[a("code",[s._v("django.contrib.auth.models.Group")]),s._v("定义了用户组的模型， 每个用户组拥有id和name两个字段， 该模型在数据库被映射为"),a("code",[s._v("auth_group")]),s._v("数据表。")]),s._v(" "),a("p",[s._v("User对象中有一个名为"),a("code",[s._v("groups")]),s._v("的多对多字段， 多对多关系由"),a("code",[s._v("auth_user_groups")]),s._v("数据表维护。Group对象可以通过"),a("code",[s._v("user_set")]),s._v("反向查询用户组中的用户。")]),s._v(" "),a("p",[s._v("我们可以通过创建删除Group对象来添加或删除用户组。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add")]),s._v("\ngroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("group_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# del")]),s._v("\ngroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("我们可以通过标准的多对多字段操作管理用户与用户组的关系:")]),s._v(" "),a("ul",[a("li",[s._v("用户加入用户组"),a("code",[s._v("user.groups.add(group)")]),s._v("或"),a("code",[s._v("group.user_set.add(user)")])]),s._v(" "),a("li",[s._v("用户退出用户组"),a("code",[s._v("user.groups.remove(group)")]),s._v("或"),a("code",[s._v("group.user_set.remove(user)")])]),s._v(" "),a("li",[s._v("用户退出所有用户组"),a("code",[s._v("user.groups.clear()")])]),s._v(" "),a("li",[s._v("用户组中所有用户退出组"),a("code",[s._v("group.user_set.clear()")])])]),s._v(" "),a("h2",{attrs:{id:"permission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permission"}},[s._v("#")]),s._v(" Permission")]),s._v(" "),a("p",[s._v("Django的auth系统提供了模型级的权限控制， 即可以检查用户是否对某个数据表拥有增(add), 改(change), 删(delete)权限。")]),s._v(" "),a("p",[s._v("auth系统无法提供对象级的权限控制， 即检查用户是否对数据表中某条记录拥有增改删的权限。如果需要对象级权限控制可以使用"),a("code",[s._v("django-guardian")]),s._v(".")]),s._v(" "),a("p",[s._v("假设在博客系统中有一张article数据表管理博文， auth可以检查某个用户是否拥有对所有博文的管理权限， 但无法检查用户对某一篇博文是否拥有管理权限。")]),s._v(" "),a("h3",{attrs:{id:"_1-检查用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查用户权限"}},[s._v("#")]),s._v(" 1.检查用户权限")]),s._v(" "),a("p",[a("code",[s._v("user.has_perm")]),s._v("方法用于检查用户是否拥有操作某个模型的权限:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.has_perm('blog.add_article')\nuser.has_perm('blog.change_article')\nuser.has_perm('blog.delete_article')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上述语句检查用户是否拥有blog这个app中article模型的添加权限， 若拥有权限则返回True。")]),s._v(" "),a("p",[a("code",[s._v("has_perm")]),s._v("仅是进行权限检查, 即是用户没有权限它也不会阻止程序员执行相关操作。")]),s._v(" "),a("p",[a("code",[s._v("permission_required")]),s._v("修饰器可以代替"),a("code",[s._v("has_perm")]),s._v("并在用户没有相应权限时重定向到登录页或者抛出异常。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# permission_required(perm[, login_url=None, raise_exception=False])\n\n@permission_required('blog.add_article')\ndef post_article(request):\n\tpass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("每个模型默认拥有增(add), 改(change), 删(delete)权限。在"),a("code",[s._v("django.contrib.auth.models.Permission")]),s._v("模型中保存了项目中所有权限。")]),s._v(" "),a("p",[s._v("该模型在数据库中被保存为"),a("code",[s._v("auth_permission")]),s._v("数据表。每条权限拥有id ,name , content_type_id, codename四个字段。")]),s._v(" "),a("h3",{attrs:{id:"_2-管理用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-管理用户权限"}},[s._v("#")]),s._v(" 2.管理用户权限")]),s._v(" "),a("p",[s._v("User和Permission通过多对多字段"),a("code",[s._v("user.user_permissions")]),s._v("关联，在数据库中由"),a("code",[s._v("auth_user_user_permissions")]),s._v("数据表维护。")]),s._v(" "),a("ul",[a("li",[s._v("添加权限: "),a("code",[s._v("user.user_permissions.add(permission)")])]),s._v(" "),a("li",[s._v("删除权限: "),a("code",[s._v("user.user_permissions.delete(permission)")])]),s._v(" "),a("li",[s._v("清空权限: "),a("code",[s._v("user.user_permissions.clear()")])])]),s._v(" "),a("p",[s._v("用户拥有他所在用户组的权限， 使用用户组管理权限是一个更方便的方法。Group中包含多对多字段"),a("code",[s._v("permissions")]),s._v("， 在数据库中由"),a("code",[s._v("auth_group_permissions")]),s._v("数据表维护。")]),s._v(" "),a("ul",[a("li",[s._v("添加权限: "),a("code",[s._v("group.permissions.add(permission)")])]),s._v(" "),a("li",[s._v("删除权限: "),a("code",[s._v("group.permissions.delete(permission)")])]),s._v(" "),a("li",[s._v("清空权限: "),a("code",[s._v("group.permissions.clear()")])])]),s._v(" "),a("h3",{attrs:{id:"_3-自定义权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义权限"}},[s._v("#")]),s._v(" 3.自定义权限")]),s._v(" "),a("p",[s._v("在定义Model时可以使用Meta自定义权限:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('class Discussion(models.Model):\n  ...\n  class Meta:\n      permissions = (\n          ("create_discussion", "Can create a discussion"),\n          ("reply_discussion", "Can reply discussion"),\n      )\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("判断用户是否拥有自定义权限:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.has_perm('blog.create_discussion')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);