(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{479:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flask-sqlalchemy-使用教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flask-sqlalchemy-使用教程"}},[s._v("#")]),s._v(" Flask-SQLAlchemy 使用教程")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("首先要先安装一下Flask-SQLAlchemy这个模块")]),s._v(" "),t("p",[t("code",[s._v("pip install Flask-SQLAlchemy")])])]),s._v(" "),t("li",[t("p",[s._v("首先你要有一个干净的Flask项目")]),s._v(" "),t("ul",[t("li",[s._v("项目下载连接地址https://pan.baidu.com/s/1H26uMUI5gRm4yqkqyAWY1A")])])])]),s._v(" "),t("h2",{attrs:{id:"_1-加入flask-sqlalchemy第三方组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-加入flask-sqlalchemy第三方组件"}},[s._v("#")]),s._v(" 1.加入Flask-SQLAlchemy第三方组件")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入Flask-SQLAlchemy中的SQLAlchemy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_sqlalchemy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SQLAlchemy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实例化SQLAlchemy")]),s._v("\ndb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SQLAlchemy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PS : 实例化SQLAlchemy的代码必须要在引入蓝图之前")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" user\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化App配置 这个app配置就厉害了,专门针对 SQLAlchemy 进行配置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SQLALCHEMY_DATABASE_URI 配置 SQLAlchemy 的链接字符串儿")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLALCHEMY_DATABASE_URI"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql+pymysql://root:DragonFire@127.0.0.1:3306/dragon?charset=utf8"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SQLALCHEMY_POOL_SIZE 配置 SQLAlchemy 的连接池大小")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLALCHEMY_POOL_SIZE"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SQLALCHEMY_POOL_TIMEOUT 配置 SQLAlchemy 的连接超时时间")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLALCHEMY_POOL_TIMEOUT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLALCHEMY_TRACK_MODIFICATIONS"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化SQLAlchemy , 本质就是将以上的配置读取出来")]),s._v("\n    db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register_blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" app\n\nMyApp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("__init__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h2",{attrs:{id:"_2-建立models-py-orm模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立models-py-orm模型"}},[s._v("#")]),s._v(" 2.建立models.py ORM模型")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" MyApp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" db\n\nBase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这句话你是否还记的?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from sqlalchemy.ext.declarative import declarative_base")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Base = declarative_base()")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每一次我们在创建数据表的时候都要做这样一件事")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然而Flask-SQLAlchemy已经为我们把 Base 封装好了")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立User数据表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Users")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Base实际上就是 db.Model")]),s._v("\n    __tablename__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"users"')]),s._v("\n    __table_args__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"useexisting"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在SQLAlchemy 中我们是导入了Column和数据类型 Integer 在这里")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就和db.Model一样,已经封装好了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("primary_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" MyApp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" create_app\n    app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" create_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里你要回顾一下Flask应该上下文管理了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 离线脚本:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app_context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("drop_all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create_all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nMyApp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h2",{attrs:{id:"_3-登录视图函数的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-登录视图函数的应用"}},[s._v("#")]),s._v(" 3.登录视图函数的应用")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" render_template\n\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" MyApp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Users\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" MyApp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" db\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("methods"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("user_login")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还记不记得我们的")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from sqlalchemy.orm import sessionmaker")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Session = sessionmaker(engine)")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# db_sesson = Session()")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 现在不用了,因为 Flask-SQLAlchemy 也已经为我们做好会话打开的工作")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们在这里做个弊:")]),s._v("\n        db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后再查询,捏哈哈哈哈哈")]),s._v("\n        user_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" User"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" user_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"登录成功')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" render_template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nMyApp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);