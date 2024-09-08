(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{460:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-django的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-django的命令"}},[s._v("#")]),s._v(" 1.django的命令")]),s._v(" "),t("p",[t("strong",[s._v("下载安装")])]),s._v(" "),t("ul",[t("li",[s._v("pip install django==1.11.21 -i 源")])]),s._v(" "),t("p",[t("strong",[s._v("创建项目")])]),s._v(" "),t("ul",[t("li",[s._v("django-admin startproject 项目名称")])]),s._v(" "),t("p",[t("strong",[s._v("启动")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("cd 项目的根目录下  manage.py")])]),s._v(" "),t("li",[t("p",[s._v("python manage.py runserver   #  127.0.0.1:8000")])]),s._v(" "),t("li",[t("p",[s._v("python manage.py runserver 80   #  127.0.0.1:80")])]),s._v(" "),t("li",[t("p",[s._v("python manage.py runserver 0.0.0.0:80   #  0.0.0.0:80")])])]),s._v(" "),t("p",[t("strong",[s._v("创建APP")])]),s._v(" "),t("ul",[t("li",[s._v("python manag.py  startapp app名称")])]),s._v(" "),t("p",[t("strong",[s._v("数据库迁移的命令")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("python manage.py makemigrations   # 记录models.py的变更记录")])]),s._v(" "),t("li",[t("p",[s._v("python manage.py migrate   # 迁移  将变更记录同步到数据库中")])])]),s._v(" "),t("h3",{attrs:{id:"_2-django的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-django的配置"}},[s._v("#")]),s._v(" 2.django的配置")]),s._v(" "),t("p",[t("strong",[s._v("静态文件")])]),s._v(" "),t("p",[s._v("STATIC_URL = '/static/'")]),s._v(" "),t("p",[s._v("STATICFILES_DIRS=[")]),s._v(" "),t("p",[s._v("​\tos.path.join(BASE_DIR,‘static’)，")]),s._v(" "),t("p",[s._v("​\tos.path.join(BASE_DIR,‘static1’)，")]),s._v(" "),t("p",[s._v("]")]),s._v(" "),t("p",[t("strong",[s._v("数据库  DATABASES")])]),s._v(" "),t("p",[s._v("ENGINE  引擎")]),s._v(" "),t("p",[s._v("NAME     数据库的名称")]),s._v(" "),t("p",[s._v("HOST   IP    '127.0.0.1'")]),s._v(" "),t("p",[s._v("PORT   端口号   3306")]),s._v(" "),t("p",[s._v("USER  用户名")]),s._v(" "),t("p",[s._v("PASSWORD 密码")]),s._v(" "),t("p",[t("strong",[s._v("app注册")])]),s._v(" "),t("p",[s._v("INSTALLED_APPS")]),s._v(" "),t("p",[s._v("'app01'")]),s._v(" "),t("p",[s._v("'app01.apps.App01Config'")]),s._v(" "),t("p",[t("strong",[s._v("中间件")])]),s._v(" "),t("p",[s._v("注释  'django.middleware.csrf.CsrfViewMiddleware'    可以提交POST请求")]),s._v(" "),t("p",[t("strong",[s._v("TEMPLATES")])]),s._v(" "),t("p",[s._v("'DIRS': [os.path.join(BASE_DIR, 'templates')]")]),s._v(" "),t("h3",{attrs:{id:"_3-django使用mysql数据库的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-django使用mysql数据库的流程"}},[s._v("#")]),s._v(" 3.django使用MySQL数据库的流程")]),s._v(" "),t("p",[t("strong",[s._v("1.创建一个MySQL数据库；")])]),s._v(" "),t("p",[t("strong",[s._v("2.在settings中配置数据库；")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("DATABASES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.mysql'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'day53'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("3.让django使用pymysql连接MySQL数据库")])]),s._v(" "),t("p",[s._v("在与settings同级目录下的init 中写：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymysql\npymysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install_as_MySQLdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("4.创建表  在app下的models.py中写类（继承models.Model）")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# app名称_user")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单表创建字段")]),s._v("\n    data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置时间")]),s._v("\n    pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AutoField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("primary_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动生成序号")]),s._v("\n    username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# username varchar(32) 设置普通的字段")]),s._v("\n    password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# password varchar(32)")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一对多创建字段")]),s._v("\n    pub"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Foreignkey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要关联的表名'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("on_delete"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CASCASDE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置外键 on_delete级联删除on_delete  在django 2.0 版本之后是必填的参数    1.11  之前的可以不填 ")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#多对多创建字段")]),s._v("\n    books"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ManyToManyField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要关联的表'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#多表关联,会自动生成第三张表,然后根据另外两张表的表明生成'表名_id'字段")]),s._v("\n    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("5.执行数据库迁移的命令")])]),s._v(" "),t("p",[s._v("python manage.py makemigrations   # 记录models.py的变更记录")]),s._v(" "),t("p",[s._v("python manage.py migrate   # 迁移  将变更记录同步到数据库中")]),s._v(" "),t("h3",{attrs:{id:"_4-get和post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-get和post"}},[s._v("#")]),s._v(" 4.get和post")]),s._v(" "),t("p",[t("strong",[s._v("get  获取到一个资源")])]),s._v(" "),t("p",[s._v("发get的途径：")]),s._v(" "),t("p",[t("strong",[s._v("1.在浏览器的地址栏种输入URL，回车")])]),s._v(" "),t("p",[t("strong",[s._v("2.a标签")])]),s._v(" "),t("p",[t("strong",[s._v("3.form表单   不指定 method    method=‘get’")])]),s._v(" "),t("p",[s._v("传递参数     url路径?id=1&name=alex")]),s._v(" "),t("ul",[t("li",[s._v("django种获取url上的参数    request.GET   {'id':1,'name':'alex'}\n"),t("ul",[t("li",[s._v("request.GET.get(key)     request.GET[key] 单选获取,返回字符串")]),s._v(" "),t("li",[s._v("request.GET.getlist(key)    多选框获取列表")]),s._v(" "),t("li",[s._v("F=request.FILES.get('f')  根据文件名获取上传文件对象\n"),t("ul",[t("li",[s._v("F.chunks() 获取文件")])])])])])]),s._v(" "),t("p",[t("strong",[s._v("post   提交数据.")])]),s._v(" "),t("p",[t("strong",[s._v("form表单   method=‘post’")])]),s._v(" "),t("p",[t("strong",[s._v("参数不暴露在URL    在请求体中")])]),s._v(" "),t("p",[t("strong",[s._v("django中获取post的数据  request.POST")])]),s._v(" "),t("h3",{attrs:{id:"_5-orm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-orm"}},[s._v("#")]),s._v(" 5.ORM")]),s._v(" "),t("p",[t("strong",[s._v("对应关系")])]),s._v(" "),t("p",[s._v("类     —— 》    数据表")]),s._v(" "),t("p",[s._v("对象   ——》  数据行（记录）")]),s._v(" "),t("p",[s._v("属性  ——》   字段")]),s._v(" "),t("p",[s._v("from app01 import models")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#orm创建数据库表格")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一对多")]),s._v("\nmofels"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Foreignkey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要关联的表名'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("on_delete"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 设置外键\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n- on_delete 的参数\n  - 默认是models.CASCASDE 级联删除\n  - models.SET()  / models.SET_DEFAULT  / models.SET_NULL\n- on_delete  在django2.0 版本之后是必填的参数    1.11  之前的\t可以不填 \n'''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#多对多")]),s._v("\nmodels"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ManyToManyField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要关联的表'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 多表关联"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("会自动生成第三张表"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("然后根据另外两张表的表明生成"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'表名_id'")]),s._v("字段\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[s._v("datafield\n"),t("ul",[t("li",[s._v("在数据库中创建一个时间对象")])])])]),s._v(" "),t("p",[t("strong",[s._v("查：")])]),s._v(" "),t("p",[s._v("models.Publisher.objects.all()   ——》  查询所有的数据    queryset  对象列表")]),s._v(" "),t("p",[s._v("models.Publisher.objects.get(name='xxxx')     ——》 对象      获取不到或者获取到多个就报错")]),s._v(" "),t("p",[s._v("models.Publisher.objects.filter(name='xxxx')   ——》 获取满足条件的所有的对象   queryset  对象列表")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一对多查询")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("all_books "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" all_books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ——> 所关联的出版社对象")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查id 多一次查询")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接在book表中查出的ID")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("多对多查询")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" author "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" all_authors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# author.books是关系管理对象")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取所有book相关的对象,返回的是一个对象列表")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])]),s._v(" "),t("p",[t("strong",[s._v("增：")])]),s._v(" "),t("p",[s._v("models.Publisher.objects.create(name='xxx')   ——》  新插入数据库的对象")]),s._v(" "),t("p",[s._v("obj = models.Publisher(name='xxx')  ——》 存在在内存中的对象")]),s._v(" "),t("p",[s._v("obj.save()      ——》   提交到数据库中  新增")]),s._v(" "),t("p",[t("strong",[s._v("删：")])]),s._v(" "),t("p",[s._v("obj = models.Publisher.objects.get(pk=1)")]),s._v(" "),t("p",[s._v("obj.delete()    #单个对象删除")]),s._v(" "),t("p",[s._v("obj_list = models.Publisher.objects.filter(pk=1)")]),s._v(" "),t("p",[s._v("obj_list.delete()    #多个对象批量删除")]),s._v(" "),t("p",[t("strong",[s._v("改：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("obj = models.Publisher.objects.get(pk=1)")])]),s._v(" "),t("li",[t("p",[s._v("obj.name  = 'new name'      ——》 在内存中修改对象的属性")])]),s._v(" "),t("li",[t("p",[s._v("obj.save()      ——》   提交数据   保存到数据库中")])]),s._v(" "),t("li",[t("p",[s._v("author_obj.books.set(books)  # 多对多关系时,每次直接重新设置")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);