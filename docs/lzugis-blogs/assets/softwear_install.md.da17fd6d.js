import{P as d}from"./chunks/PagePreview.aeb55ba4.js";import{o as a,c as r,e as s,a as i,b as e,d as o}from"./app.cb5ee193.js";import"./chunks/PagePreview.vue_vue_type_style_index_0_scoped_4d8e7fef_lang.4ed993c7.js";const t=i('<h1 id="相关软件安装" tabindex="-1">相关软件安装 <a class="header-anchor" href="#相关软件安装" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>本节讲述相关软件的安装，主要包括：</p><ul><li>geoserver</li><li>qgis</li><li>postgis</li></ul><p><strong>注意</strong>：教程中的操作环境为<code>windows</code>，其他操作系统的操作可百度自行搜索。</p></div><h2 id="_1-geoserver安装" tabindex="-1">1.Geoserver安装 <a class="header-anchor" href="#_1-geoserver安装" aria-hidden="true">#</a></h2><h3 id="_1-1-下载" tabindex="-1">1.1 下载 <a class="header-anchor" href="#_1-1-下载" aria-hidden="true">#</a></h3><p>在浏览器中输入<code>https://geoserver.org/download/</code>就可以看到<code>Geoserver</code>的最新版本，点击页面将跳转到稳定版本下载页面。</p>',5),c=i('<p>如上，我们可以看到下载页面分为如下几个区域：</p><ul><li>Packages：为安装包，包括<code>可运行二进制文件（bin.zip）</code>、<code>windows安装程序</code>、<code>war包</code>、<code>data目录</code>；</li><li>Documentation：为文档部分，包括<code>操作手册</code>和<code>API文档</code>。</li><li>Source Code：源代码部分，包括代码包和github地址；</li><li>Extensions：扩展部分，包括数据扩展、服务扩展、样式扩展等，其中矢量切片扩展<code>Vector Tiles</code>在后面的课程中会用到，可以先下载安装好。</li></ul><p>在本教程中，我们下载格式为<code>*.exe</code>的windows安装程序。</p><h3 id="_1-2-安装" tabindex="-1">1.2 安装 <a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a></h3><blockquote><p>一般来说，我们更推荐<code>*.war</code>的方式启动geoserver，它可以兼容更多地操作系统。</p></blockquote><p>下载完成后，双击执行<code>*.exe</code>安装程序即可。在安装的过程中注意设置下启动端口(默认为8086)和<code>data_dir</code>，其他的操作按照操作指引逐步安装即可。</p><p><strong>注意</strong>： windows中安装完geoserver后，会添加两个全局的环境变量：</p><ul><li><code>GEOSERVER_HOME</code>: geoserver安装目录；</li><li><code>GEOSERVER_DATA_DIR</code>: geoserver数据目录，默认为<code>GEOSERVER_HOME/data/</code>，可在安装的过程中指定；</li></ul><h3 id="_1-3-启动" tabindex="-1">1.3 启动 <a class="header-anchor" href="#_1-3-启动" aria-hidden="true">#</a></h3><p>按下<code>win</code>键，输入<code>geoserver</code>，点击<code>Start GeoServer</code>快捷方式即可启动。启动成功后，在浏览器中输入地址<code>http://localhost:8086</code>访问即可。</p><h2 id="_2-qgis安装" tabindex="-1">2.qgis安装 <a class="header-anchor" href="#_2-qgis安装" aria-hidden="true">#</a></h2><h3 id="_2-1-下载" tabindex="-1">2.1 下载 <a class="header-anchor" href="#_2-1-下载" aria-hidden="true">#</a></h3><p>在浏览器中输入地址<code>https://www.qgis.org/en/site</code>访问官方网站，点击按钮<code>Download Now</code>进入下载页面。</p>',13),l=i('<p>图上所示，系统会根据使用的操作系统推荐合适的安装包，点击绿色的大按钮，下载qgis。</p><h3 id="_2-2-安装" tabindex="-1">2.2 安装 <a class="header-anchor" href="#_2-2-安装" aria-hidden="true">#</a></h3><p>Qgis的安装不论在<code>windows</code>、<code>mac</code>、<code>ubuntu</code>等操作系统中都相对比较简单，其他的<code>linux</code>的操作系统也不是很复杂，大家可上网搜索完成。</p><p>在windows中的安装，根据安装提示操作完成即可。</p><h3 id="_2-3-启动" tabindex="-1">2.3 启动 <a class="header-anchor" href="#_2-3-启动" aria-hidden="true">#</a></h3><p>按下<code>win</code>键，输入<code>qgis</code>，点击<code>QGIS3</code>快捷方式即可启动。</p><h2 id="_3-postgis安装" tabindex="-1">3.postgis安装 <a class="header-anchor" href="#_3-postgis安装" aria-hidden="true">#</a></h2><h3 id="_3-1-下载" tabindex="-1">3.1 下载 <a class="header-anchor" href="#_3-1-下载" aria-hidden="true">#</a></h3><blockquote><p><code>postgis</code>的安装分为<code>postgres</code>和<code>postgis</code>的安装两个部分。</p></blockquote><h4 id="_1-postgres下载" tabindex="-1">1）postgres下载 <a class="header-anchor" href="#_1-postgres下载" aria-hidden="true">#</a></h4><p>在浏览器中输入地址<code>https://www.postgresql.org</code>访问官方网站，点击按钮顶部<code>Download</code>菜单进入<a href="https://www.postgresql.org/download/" target="_blank" rel="noreferrer">下载页面</a>。 如页面所示，<code>postgres</code>提供了<code>windows</code>、<code>macOS</code>等多操作系统的安装包，可根据用到的操作系统按需下载，本文下载的是<code>windows</code>版本。</p><h4 id="_2-postgis下载" tabindex="-1">2）postgis下载 <a class="header-anchor" href="#_2-postgis下载" aria-hidden="true">#</a></h4><p>在浏览器中输入地址<code>https://postgis.net</code>访问官方网站，点击按钮顶部<code>Download</code>菜单进入下载页面。</p>',13),n=e("p",null,[o("如上所示，提供了多种平台的安装方式，文中因为"),e("code",null,"Windows"),o("操作系统，所以点击"),e("code",null,"Windows Downloads"),o("链接进入页面。")],-1),_=e("p",null,[o("点击"),e("code",null,"OSGeo downloads"),o("链接进入下载页面，如下所示，选择对应的版本。")],-1),h=i('<h3 id="_3-2-安装" tabindex="-1">3.2 安装 <a class="header-anchor" href="#_3-2-安装" aria-hidden="true">#</a></h3><h4 id="_1-postgres" tabindex="-1">1）postgres <a class="header-anchor" href="#_1-postgres" aria-hidden="true">#</a></h4><p>postgres，在linux中的安装比较复杂一点，可自行百度查找教程。在windows的安装比较简单，按照操作提示逐步操作。在操作的过程中，需设置：</p><ul><li>端口：默认为<code>5432</code>，可根据需求修改；</li><li>管理员密码：用户名一般为<code>postgres</code>，并为其设置密码，在后面的<code>postgis</code>安装中会使用到。</li></ul><h4 id="_2-postgis" tabindex="-1">2）postgis <a class="header-anchor" href="#_2-postgis" aria-hidden="true">#</a></h4><p>postgis的安装安装在如下界面出现的时候注意勾选上，其他的操作按照指引逐步操作完成即可。 <img src="https://img-blog.csdnimg.cn/20200702135642525.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xZMTIwMUE=,size_16,color_FFFFFF,t_70#pic_center" alt="postgis空间扩展" data-fancybox="gallery"></p><h3 id="_3-3-启动" tabindex="-1">3.3 启动 <a class="header-anchor" href="#_3-3-启动" aria-hidden="true">#</a></h3><p>postgres在安装的过程中，会自动安装一个客户端链接工具<code>pgAdmin</code>, 按下<code>win</code>键，输入<code>qgis</code>，点击<code>pgAdmin 4</code>快捷方式即可启动。</p><p><img src="https://img-blog.csdnimg.cn/20200702144017693.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xZMTIwMUE=,size_16,color_FFFFFF,t_70#pic_center" alt="pgAdmin打开界面" data-fancybox="gallery"></p>',9),x=JSON.parse('{"title":"相关软件安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.Geoserver安装","slug":"_1-geoserver安装","link":"#_1-geoserver安装","children":[{"level":3,"title":"1.1 下载","slug":"_1-1-下载","link":"#_1-1-下载","children":[]},{"level":3,"title":"1.2 安装","slug":"_1-2-安装","link":"#_1-2-安装","children":[]},{"level":3,"title":"1.3 启动","slug":"_1-3-启动","link":"#_1-3-启动","children":[]}]},{"level":2,"title":"2.qgis安装","slug":"_2-qgis安装","link":"#_2-qgis安装","children":[{"level":3,"title":"2.1 下载","slug":"_2-1-下载","link":"#_2-1-下载","children":[]},{"level":3,"title":"2.2 安装","slug":"_2-2-安装","link":"#_2-2-安装","children":[]},{"level":3,"title":"2.3 启动","slug":"_2-3-启动","link":"#_2-3-启动","children":[]}]},{"level":2,"title":"3.postgis安装","slug":"_3-postgis安装","link":"#_3-postgis安装","children":[{"level":3,"title":"3.1 下载","slug":"_3-1-下载","link":"#_3-1-下载","children":[]},{"level":3,"title":"3.2 安装","slug":"_3-2-安装","link":"#_3-2-安装","children":[]},{"level":3,"title":"3.3 启动","slug":"_3-3-启动","link":"#_3-3-启动","children":[]}]}],"relativePath":"softwear/install.md"}'),p={name:"softwear/install.md"},f=Object.assign(p,{setup(g){return(u,w)=>(a(),r("div",null,[t,s(d,{url:"https://geoserver.org/release/stable/"},null,8,["url"]),c,s(d,{url:"https://www.qgis.org/en/site/forusers/download.html"},null,8,["url"]),l,s(d,{url:"https://postgis.net/install/"},null,8,["url"]),n,_,s(d,{url:"https://download.osgeo.org/postgis/windows/"},null,8,["url"]),h]))}});export{x as __pageData,f as default};
