import{_ as i,o as a,c as s,R as l,ak as e,al as t,am as n,an as o,ao as p,ap as r,aq as h,ar as d,as as c,at as k,au as g,av as u,aw as m}from"./chunks/framework.gTuukKyl.js";const I=JSON.parse('{"title":"工作区与数据存储","description":"","frontmatter":{},"headers":[],"relativePath":"docs/basic/data.md","filePath":"docs/basic/data.md"}'),E={name:"docs/basic/data.md"},y=l('<h1 id="工作区与数据存储" tabindex="-1">工作区与数据存储 <a class="header-anchor" href="#工作区与数据存储" aria-label="Permalink to &quot;工作区与数据存储&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">概览</p><p>数据与图层管理主要包括如下内容：</p><ol><li>工作区管理；</li><li>数据存储管理；</li></ol></div><h2 id="一、之间的关系" tabindex="-1">一、之间的关系 <a class="header-anchor" href="#一、之间的关系" aria-label="Permalink to &quot;一、之间的关系&quot;">​</a></h2><p>工作区、数据源、图层、图层组以及样式之间的关系如下图所示，可得知：</p><ul><li><p>工作区用于组织、管理和发布地图数据和地图服务。通过合理地使用工作区，可以更好地管理不同类型的地图数据和业务逻辑，提高地图服务的可用性和可维护性。</p></li><li><p>数据源是地图数据在地理信息系统中的来源，可以是文件、数据库、网络等。数据源可以包含多个图层，每个图层可以代表一个地理要素或空间数据集。<strong>数据源必须属于某个工作区</strong>。</p></li><li><p>图层是将<strong>数据源</strong>发布成地图服务，因此<strong>图层也必须属于某个工作区</strong>。</p></li><li><p>图层组是将多个图层或图层组组合在一起，形成一个逻辑上的图层。由于图层或图层组属于不同的工作区，所以图层组可不属于工作区。</p></li><li><p>样式是图层的样式定义，用于控制图层的显示效果，如颜色、透明度、线型、填充样式等，同一个样式可以被不同的图层引用，所以样式也可不属于工作区。</p></li></ul><p><img src="'+e+'" alt="" data-fancybox="gallery"></p><h2 id="二、登录后界面" tabindex="-1">二、登录后界面 <a class="header-anchor" href="#二、登录后界面" aria-label="Permalink to &quot;二、登录后界面&quot;">​</a></h2><p>数据与图层的管理需要登录后菜单才可见。成功登录后的界面如下图所示：</p><ul><li>左侧为功能菜单区域</li><li>中间为主操作区域</li><li>右侧在欢迎页展示了Geoserver支持的服务能力。</li></ul><p><img src="'+t+'" alt="" data-fancybox="gallery"></p><h2 id="三、工作区管理" tabindex="-1">三、工作区管理 <a class="header-anchor" href="#三、工作区管理" aria-label="Permalink to &quot;三、工作区管理&quot;">​</a></h2><h3 id="_1-工作区列表" tabindex="-1">1. 工作区列表 <a class="header-anchor" href="#_1-工作区列表" aria-label="Permalink to &quot;1. 工作区列表&quot;">​</a></h3><p>点击左侧功能菜单<code>数据——&gt;工作区</code>进入工作区管理界面，如下图所示。界面中，展示了已经创建的工作区的列表和工作的操作（添加和删除工作区）。工作区列表展示了工作区名称、是否默认、是否隔离三列信息。</p><p><img src="'+n+'" alt="" data-fancybox="gallery"></p><h3 id="_2-创建工作区" tabindex="-1">2. 创建工作区 <a class="header-anchor" href="#_2-创建工作区" aria-label="Permalink to &quot;2. 创建工作区&quot;">​</a></h3><p>点击<code>添加新的工作区</code>链接，切换到创建工作区界面，如下图所示。工作区的属性包括：</p><ul><li><strong>名称</strong>：工作区的名称，必填项。</li><li><strong>命名空间URI</strong>：命名空间URI与这个工作区关联；</li><li><strong>是否默认</strong>：是否将这个工作区设置为默认工作区，默认工作区只能有一个。</li><li><strong>是否隔离</strong>：是否将这个工作区设置为隔离工作区，隔离工作区不能被其他工作区访问。</li></ul><h3 id="_3-编辑工作区" tabindex="-1">3. 编辑工作区 <a class="header-anchor" href="#_3-编辑工作区" aria-label="Permalink to &quot;3. 编辑工作区&quot;">​</a></h3><p>点击<code>工作区名称列</code>链接，切换到编辑工作区界面，如下图所示。跟创建工作区有区别的是在编辑界面多了“是否启用”和“服务”两个选项。</p><ul><li><strong>是否启用</strong>：是否启用这个工作区，默认启用。</li><li><strong>服务</strong>：这个工作区可发布的地图类型，如不选则表示所有，如选择部分，则表示只生效选中的类型。</li></ul><p><img src="'+o+'" alt="" data-fancybox="gallery"></p><h3 id="_4-删除工作区" tabindex="-1">4. 删除工作区 <a class="header-anchor" href="#_4-删除工作区" aria-label="Permalink to &quot;4. 删除工作区&quot;">​</a></h3><p>在工作区列表中选中工作区，点击<code>删除选定的工作区</code>链接，弹出确认框，确认删除即可。</p><h2 id="四、数据存储管理" tabindex="-1">四、数据存储管理 <a class="header-anchor" href="#四、数据存储管理" aria-label="Permalink to &quot;四、数据存储管理&quot;">​</a></h2><h3 id="_1-数据存储列表" tabindex="-1">1. 数据存储列表 <a class="header-anchor" href="#_1-数据存储列表" aria-label="Permalink to &quot;1. 数据存储列表&quot;">​</a></h3><p>点击左侧功能菜单<code>数据——&gt;数据存储</code>进入“数据存储”管理界面，如下图所示。界面中，展示了已经添加的数据存储的列表和工作的操作（添加和删除数据存储）。“数据存储”列表展示了数据类型、工作区、名称、类型、是否启用几列信息。数据类型和类型的区别是，数据类型是指数据是栅格数据还是矢量数据，类型是指数据存储的类型，如文件、数据库等。</p><p><img src="'+p+'" alt="" data-fancybox="gallery"></p><h3 id="_2-添加-编辑数据数据存储" tabindex="-1">2. 添加/编辑数据数据存储 <a class="header-anchor" href="#_2-添加-编辑数据数据存储" aria-label="Permalink to &quot;2. 添加/编辑数据数据存储&quot;">​</a></h3><p>数据存储和编辑的界面是一样的。点击<code>添加新的数据存储</code>链接，切换到添加数据存储界面，如下图所示。在该界面中可以看到Geoserver支持的数据类型有哪些，在界面中列出的数据类型列表中，有些是默认支持的，如<code> Directory of spatial files (shapefiles)</code>、<code> GeoTIFF</code>，有些是扩展支持的，如<code>GeoPackage</code>、<code>MogonDB</code>。如下是对这些数据类型的说明：</p><ul><li>矢量数据源 <ul><li><p><strong>Directory of spatial files (shapefiles)</strong>: 将含shp文件的文件夹作为数据源</p></li><li><p><strong>GeoPackage</strong>: 将Geopackage文件作为数据源</p></li><li><p><strong>PostGIS</strong>: 将PG数据库作为数据源</p></li><li><p><strong>PostGIS(JNDI)</strong>: 将PG数据库(JNDI)作为数据源，JDNI数据源连接池会保持多个数据库连接，当GeoServer需要访问数据库的数据时，直接从连接池获取空闲数据库连接，访问完毕，则会把数据库连接放回至连接池供下次使用。与直接使用JDBC去访问数据库相比，会节省大量的时间和资源，这对于GeoServer性能会有很好的提升</p></li><li><p><strong>Properties</strong>: 直接使用Properties文件作为数据源</p></li><li><p><strong>Shapefile</strong>: 将shp文件作为数据源</p></li><li><p><strong>Web Feature Server (NG)</strong>: 将WFS服务作为数据源</p></li></ul></li><li>栅格数据源 <ul><li><p><strong>ArcGrid</strong>: 将ARCGRID作为数据源</p></li><li><p><strong>GeoPackage (mosaic)</strong>: 将Geopackage文件作为数据源</p></li><li><p><strong>GeoTIFF</strong>: 将GeoTIFF文件作为数据源</p></li><li><p><strong>ImageMosaic</strong>: 将一个目录下包含多个tif文件的文件夹作为数据源，当作为镶嵌栅格数据源时，会根据该目录下所有tif文件生成一个索引shp文件，在调用时拼接成一个图像。</p></li><li><p><strong>WorldImage</strong>: 将WorldImage作为数据源</p></li></ul></li><li>其他数据源 <ul><li><strong>WMS</strong>: 代理WMS服务</li><li><strong>WMTS</strong>: 代理WMTS服务</li></ul></li></ul><p><img src="'+r+'" alt="" data-fancybox="gallery"></p><p>新建完数据存储后，会自动跳转到新建图层页面，图层的新建可参考后面的章节。下面对各种数据存储的添加分别做以说明。</p><h4 id="_1-directory-of-spatial-files-shapefiles" tabindex="-1">1）Directory of spatial files (shapefiles) <a class="header-anchor" href="#_1-directory-of-spatial-files-shapefiles" aria-label="Permalink to &quot;1）Directory of spatial files (shapefiles)&quot;">​</a></h4><p>通过shp文件目录创建数据存储的配置项如下图所示，包括：</p><ul><li>基本信息 <ul><li>工作区</li><li>数据源名称</li><li>说明</li><li>是否启用</li></ul></li><li>连接参数 <ul><li>shp的文件目录，为<code>file://${目录路径}</code>，目录路径可为相对路径，也可为绝对路径</li><li>dbf文件的字符集，因为大多是shp文件是Arcmap生成的，稍低版本的Arcmap的dbf字符集为<code>GBK</code>，因此在使用的时候需要针对数据的字符集进行设置</li><li>如果缺少空间索引或者空间索引过时，重新建立空间索引</li><li>是否使用内存映射的缓冲区，内存映射的缓冲区可以提高读取效率，但会占用更多的内存，如果内存不足，可以考虑关闭该选项</li><li>是否开启高速缓存和重用内存映射</li><li>是否跳过可选的shp扩展</li></ul></li></ul><p><img src="'+h+'" alt="" data-fancybox="gallery"></p><h4 id="_2-shapefile" tabindex="-1">2）Shapefile <a class="header-anchor" href="#_2-shapefile" aria-label="Permalink to &quot;2）Shapefile&quot;">​</a></h4><p>通过shp文件创建数据存储的配置项如下图所示，包括：</p><ul><li>存储库的基本信息 <ul><li>工作区</li><li>数据源名称</li><li>说明</li><li>是否启用</li></ul></li><li>连接参数 <ul><li>shp文件的位置，为<code>file://${文件路径}.shp</code>，文件路径可为相对路径，也可为绝对路径</li><li>dbf文件的字符集，因为大多是shp文件是Arcmap生成的，稍低版本的Arcmap的dbf字符集为<code>GBK</code>，因此在使用的时候需要针对数据的字符集进行设置</li><li>如果缺少空间索引或者空间索引过时，重新建立空间索引</li><li>是否使用内存映射的缓冲区，内存映射的缓冲区可以提高读取效率，但会占用更多的内存，如果内存不足，可以考虑关闭该选项</li><li>是否开启高速缓存和重用内存映射</li></ul></li></ul><p><img src="'+d+'" alt="" data-fancybox="gallery"></p><h4 id="_3-postgis" tabindex="-1">3）PostGIS <a class="header-anchor" href="#_3-postgis" aria-label="Permalink to &quot;3）PostGIS&quot;">​</a></h4><p>通过PostGIS数据库创建数据存储的配置项如下图所示，包括：</p><ul><li>存储库的基本信息 <ul><li>工作区</li><li>数据源名称</li><li>说明</li><li>是否启用</li></ul></li><li>连接参数，如下为常用的参数及说明 <ul><li>host</li><li>port，默认为5432</li><li>database</li><li>user</li><li>password</li><li>scheme，模式，一般为public</li><li>max connections，默认为10</li><li>min connections，默认为1</li><li>Connection timeout，默认为20</li></ul></li></ul><p><img src="'+c+`" alt="" data-fancybox="gallery"></p><h4 id="_4-postgis-jndi" tabindex="-1">4) PostGIS(JNDI) <a class="header-anchor" href="#_4-postgis-jndi" aria-label="Permalink to &quot;4) PostGIS(JNDI)&quot;">​</a></h4><p>使用PostGIS(JNDI)作为数据源，需要先将PostgreSQL驱动程序jar包放到Tomcat的lib目录下面，再编写JDNI资源配置内容，编辑Tomcat的conf目录下context.xml文件，在Context元素下添加一个Resource元素，具体内容如下：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Resource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jndi/sampledb&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    auth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Container&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javax.sql.DataSource&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    driverClassName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;org.postgresql.Driver&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jdbc:postgresql://localhost:5432/lzugis&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postgres&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxActive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initialSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    minIdle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxIdle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    timeBetweenEvictionRunsMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;30000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    minEvictableIdleTimeMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;60000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    testWhileIdle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    validationQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SELECT version();&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;600000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rollbackOnReturn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>在Geoserver中添加PostGIS(JNDI)数据存储的配置项如下图所示，配置项说明如下：</p><ul><li>存储库的基本信息 <ul><li>工作区</li><li>数据源名称</li><li>说明</li><li>是否启用</li></ul></li><li>连接参数，如下为常用的参数及说明 <ul><li>dbtype，默认为postgis</li><li>jndiReferenceName，这里填入<code>java:comp/env/XXX</code>，<code>XXX</code>是上面编辑context.xml文件，为Resource元素设置的name属性，在上面的例子中即<code>jndi/sampledb</code>。</li><li>scheme，模式，一般为public</li></ul></li></ul><p><img src="`+k+`" alt="" data-fancybox="gallery"></p><h4 id="_5-properties" tabindex="-1">5) Properties <a class="header-anchor" href="#_5-properties" aria-label="Permalink to &quot;5) Properties&quot;">​</a></h4><p><code>properties文件</code>是一个后缀为<code>properties</code>的文件，其内容格式示例如下，空间字段的定义是<code>{字段名}:Geometry:srid={投影}</code>，值为<code>wkt</code>。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>_=id:Integer,name:String,country:String,geom:Geometry:srid=4326</span></span>
<span class="line"><span>places.1=1|Rome|Italy|POINT(12.492 41.890)</span></span>
<span class="line"><span>places.2=2|Grand Canyon|Usa|POINT(-112.122 36.055)</span></span></code></pre></div><p>从<code>properties文件</code>创建数据存储的界面如下，配置参数除了存储库的基本信息之外，连接参数为文件的目录。</p><p><img src="`+g+'" alt="" data-fancybox="gallery"></p><h4 id="_6-tiff" tabindex="-1">6) Tiff <a class="header-anchor" href="#_6-tiff" aria-label="Permalink to &quot;6) Tiff&quot;">​</a></h4><p>从<code>tif文件</code>创建数据存储的界面如下，配置参数除了存储库的基本信息之外，连接参数为文件的路径。</p><p><img src="'+u+'" alt="" data-fancybox="gallery"></p><h4 id="_7-imagemosaic" tabindex="-1">7) ImageMosaic <a class="header-anchor" href="#_7-imagemosaic" aria-label="Permalink to &quot;7) ImageMosaic&quot;">​</a></h4><p>创建<code>ImageMosaic</code>数据存储的界面如下，配置参数除了存储库的基本信息之外，连接参数为文件夹的路径，创建完数据存储后会自动创建一个shp文件，当有新的tif文件添加到文件夹时，会自动更新shp文件。</p><p><img src="'+m+'" alt="" data-fancybox="gallery"></p><h3 id="_3-删除数据数据存储" tabindex="-1">3. 删除数据数据存储 <a class="header-anchor" href="#_3-删除数据数据存储" aria-label="Permalink to &quot;3. 删除数据数据存储&quot;">​</a></h3><p>在“数据存储”列表中选中“数据存储”，点击<code>删除选定的数据存储</code>链接，弹出确认框，确认删除即可。</p>',63),F=[y];function f(_,b,q,x,C,P){return a(),s("div",null,F)}const G=i(E,[["render",f]]);export{I as __pageData,G as default};
