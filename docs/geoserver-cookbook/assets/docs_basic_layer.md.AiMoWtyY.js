import{_ as a,o as e,c as l,R as i,ax as t,ay as r,az as o,aA as c,aB as s,aC as d,aD as n,aE as h,aF as _,aG as p,aH as u}from"./chunks/framework.gTuukKyl.js";const E=JSON.parse('{"title":"图层、图层组、图层预览","description":"","frontmatter":{},"headers":[],"relativePath":"docs/basic/layer.md","filePath":"docs/basic/layer.md"}'),b={name:"docs/basic/layer.md"},g=i('<h1 id="图层、图层组、图层预览" tabindex="-1">图层、图层组、图层预览 <a class="header-anchor" href="#图层、图层组、图层预览" aria-label="Permalink to &quot;图层、图层组、图层预览&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">概览</p><p>本节主要包括如下内容：</p><ol><li>图层管理；</li><li>图层组管理；</li><li>图层预览；</li></ol></div><h2 id="一、图层管理" tabindex="-1">一、图层管理 <a class="header-anchor" href="#一、图层管理" aria-label="Permalink to &quot;一、图层管理&quot;">​</a></h2><h3 id="_1-图层列表" tabindex="-1">1. 图层列表 <a class="header-anchor" href="#_1-图层列表" aria-label="Permalink to &quot;1. 图层列表&quot;">​</a></h3><p>点击左侧功能菜单<code>数据——&gt;图层</code>进入图层管理界面，如下图所示。界面中，展示了已经创建的图层的列表和图层的操作（添加和删除图层）。图层列表展示了类型、Title、图层名称、存储、启用和Native SRS等信息。</p><p><img src="'+t+'" alt="" data-fancybox="gallery"></p><ul><li><strong>类型</strong>：以图表的形式展示图层的数据类型，可能值有点、线、面、图层组、栅格；</li><li><strong>Title</strong>：图层的Title</li><li><strong>图层名称</strong>：图层的名称，在服务调用的时候需要传入</li><li><strong>存储</strong>：是通过那个数据存储创建的图层</li><li><strong>启用</strong>：是否启用；</li><li><strong>Native SRS</strong>：投影信息</li></ul><p><code>Title</code>、<code>图层名称</code>、<code>存储</code>都创建了超链接，点击<code>Title</code>、<code>图层名称</code>可进入图层编辑，点击<code>存储</code>可进入数据存储编辑界面。</p><h3 id="_2-添加-编辑图层" tabindex="-1">2. 添加/编辑图层 <a class="header-anchor" href="#_2-添加-编辑图层" aria-label="Permalink to &quot;2. 添加/编辑图层&quot;">​</a></h3><p>点击“添加新的资源”链接，转到新建图层页面。首先，选择数据存储，选择完数据存储会将数据存储中的图层列表展示出来，如下图所示。如已经发布的图层可以选择再次发布，如未发布，则选择发布。</p><p><img src="'+r+'" alt="" data-fancybox="gallery"></p><p>点击“发布”或“再次发布”链接，转到图层发布界面。如下图，在图层发布界面，有以下几个tab：</p><h4 id="_1-数据" tabindex="-1">1）数据 <a class="header-anchor" href="#_1-数据" aria-label="Permalink to &quot;1）数据&quot;">​</a></h4><p>主要配置图层名称、标题、数据投影、图层四至、图层属性等。如下图，在该tab页面，有一个&quot;发布&quot;的选项，通过该选项可以控制图层是否在图层预览界面可见。 <img src="'+o+'" alt="" data-fancybox="gallery"></p><h4 id="_2-发布" tabindex="-1">2）发布 <a class="header-anchor" href="#_2-发布" aria-label="Permalink to &quot;2）发布&quot;">​</a></h4><p>图层服务相关的配置，如WMS配置、WFS配置以及图层样式 <img src="'+c+'" alt="" data-fancybox="gallery"></p><h4 id="_3-维度" tabindex="-1">3）维度 <a class="header-anchor" href="#_3-维度" aria-label="Permalink to &quot;3）维度&quot;">​</a></h4><p>矢量数据可包含<code>时间</code>和<code>高度</code>两个维度，在需要用到时需要进行配置 <img src="'+s+'" alt="" data-fancybox="gallery"></p><h4 id="_4-tile-caching" tabindex="-1">4）Tile Caching <a class="header-anchor" href="#_4-tile-caching" aria-label="Permalink to &quot;4）Tile Caching&quot;">​</a></h4><p>切片相关的配置 <img src="'+d+'" alt="" data-fancybox="gallery"></p><h4 id="_5-security" tabindex="-1">5）Security <a class="header-anchor" href="#_5-security" aria-label="Permalink to &quot;5）Security&quot;">​</a></h4><p>安全相关的配置 <img src="'+n+'" alt="" data-fancybox="gallery"></p><h3 id="_3-删除图层" tabindex="-1">3. 删除图层 <a class="header-anchor" href="#_3-删除图层" aria-label="Permalink to &quot;3. 删除图层&quot;">​</a></h3><p>选中图层，点击“删除所选的资源”，弹出确认框，确认删除即可。</p><h2 id="二、图层组管理" tabindex="-1">二、图层组管理 <a class="header-anchor" href="#二、图层组管理" aria-label="Permalink to &quot;二、图层组管理&quot;">​</a></h2><p>图层组是将不同的图层或图层组组合称为一个图层组，用户可以通过图层组来统一管理图层或图层组。</p><h3 id="_1-图层组列表" tabindex="-1">1. 图层组列表 <a class="header-anchor" href="#_1-图层组列表" aria-label="Permalink to &quot;1. 图层组列表&quot;">​</a></h3><p>点击左侧功能菜单<code>数据——&gt;图层组</code>进入图层组管理界面，如下图所示。界面中，展示了已经创建的图层的列表和图层的操作（添加和删除图层组）。图层组列表展示了图层组名称、工作区、是否启用。</p><p><img src="'+h+'" alt="" data-fancybox="gallery"></p><h3 id="_2-添加-编辑图层组" tabindex="-1">2. 添加/编辑图层组 <a class="header-anchor" href="#_2-添加-编辑图层组" aria-label="Permalink to &quot;2. 添加/编辑图层组&quot;">​</a></h3><p>点击“添加新图层组”，转到新建图层组页面。如下图所示，在图层组发布界面，有以下几个tab：</p><h4 id="_1-数据-1" tabindex="-1">1）数据 <a class="header-anchor" href="#_1-数据-1" aria-label="Permalink to &quot;1）数据&quot;">​</a></h4><p>在该页面配置图层组的名称、标题、图层组四至、图层组图层（组）等。跟图层一样，可通过“发布”选项控制图层组在图层预览界面是否可见。 <img src="'+_+'" alt="" data-fancybox="gallery"></p><h4 id="_2-发布-1" tabindex="-1">2）发布 <a class="header-anchor" href="#_2-发布-1" aria-label="Permalink to &quot;2）发布&quot;">​</a></h4><p>图层组的发布配置比图层配置少一点，是图层服务相关的配置。</p><h4 id="_3-tile-caching、security" tabindex="-1">3）Tile Caching、Security <a class="header-anchor" href="#_3-tile-caching、security" aria-label="Permalink to &quot;3）Tile Caching、Security&quot;">​</a></h4><p>这两项配置跟图层的类似，这里不再赘述。</p><h3 id="_3-删除图层组" tabindex="-1">3. 删除图层组 <a class="header-anchor" href="#_3-删除图层组" aria-label="Permalink to &quot;3. 删除图层组&quot;">​</a></h3><p>选中图层组，点击“删除选定的图层组”，弹出确认框，确认删除即可。</p><h2 id="三、图层预览" tabindex="-1">三、图层预览 <a class="header-anchor" href="#三、图层预览" aria-label="Permalink to &quot;三、图层预览&quot;">​</a></h2><p>在图层或图层中选择“发布”的图层，在图层预览界面可以查看图层或图层组。</p><h3 id="_1-预览图层列表" tabindex="-1">1. 预览图层列表 <a class="header-anchor" href="#_1-预览图层列表" aria-label="Permalink to &quot;1. 预览图层列表&quot;">​</a></h3><p>点击左侧功能菜单<code>数据——&gt;图层预览</code>进入图层预览界面，如下图所示。在预览图层列表展示了类型、标题、常用格式和所有格式，其中常用格式提供最常用的图层预览方式，矢量的有OpenLayers、GML、KML，栅格和图层组有OpenLayers、KML两种方式。</p><p><img src="'+p+'" alt="" data-fancybox="gallery"></p><p>所有格式提供图层的所有可预览方式，包括</p><ul><li>WMS <ul><li>AtomPub</li><li>GIF</li><li>GeoRSS</li><li>GeoTiff</li><li>GeoTiff 8-bits</li><li>JPEG</li><li>JPEG-PNG</li><li>JPEG-PNG8</li><li>KML (compressed)</li><li>KML (network link)</li><li>KML (plain)</li><li>OpenLayers</li><li>OpenLayers 2</li><li>OpenLayers 3</li><li>PDF</li><li>PNG</li><li>PNG 8bit</li><li>SVG</li><li>Tiff</li><li>Tiff 8-bits</li><li>UTFGrid</li></ul></li><li>WFS <ul><li>CSV</li><li>GML2</li><li>GML3.1</li><li>GML3.2</li><li>GeoJSON</li><li>KML</li><li>Shapefile</li><li>text/csv</li></ul></li></ul><h3 id="_2-矢量数据预览" tabindex="-1">2. 矢量数据预览 <a class="header-anchor" href="#_2-矢量数据预览" aria-label="Permalink to &quot;2. 矢量数据预览&quot;">​</a></h3><p>点击常用格式“OpenLayers”链接，转到图层预览界面，如下图所示。</p><p><img src="'+u+'" alt="" data-fancybox="gallery"></p><p>点击左上角的“...”按钮，可看到当前预览图层的版本、是否切片、格式以及过滤条件。过滤条件可通过属性过滤，也可通过空间进行过滤。</p><ul><li><a href="https://blog.csdn.net/GISShiXiSheng/article/details/137194431?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">cql_filter介绍</a></li><li><a href="https://docs.geoserver.org/stable/en/user/tutorials/cql/cql_tutorial.html" target="_blank" rel="noreferrer">cql filter</a></li><li><a href="https://docs.geoserver.org/stable/en/user/filter/function_reference.html#filter-function-reference" target="_blank" rel="noreferrer">filter function</a></li></ul><h4 id="_1-简单的比较" tabindex="-1">1）简单的比较 <a class="header-anchor" href="#_1-简单的比较" aria-label="Permalink to &quot;1）简单的比较&quot;">​</a></h4><ul><li>比较运算符有<code>=, &lt;&gt;, &gt;, &gt;=, &lt;, &lt;=</code>，如<code>age = 20</code>或<code>age &gt; 18</code></li><li>过滤范围内的数据，如<code>age BETWEEN 10 AND 18</code></li><li>字符过滤，如 <code>name = &#39;lzugis&#39;</code>、<code>name in (&#39;lzugis&#39;, &#39;qgis&#39;)</code>、<code>name like &#39;%gis%&#39;</code></li><li>字段比较，如<code>MALE &gt; FEMALE</code></li><li>逻辑运算，如<code>UNEMPLOY / (EMPLOYED + UNEMPLOY) &gt; 0.07</code></li></ul><h4 id="_2-过滤函数" tabindex="-1">2）过滤函数 <a class="header-anchor" href="#_2-过滤函数" aria-label="Permalink to &quot;2）过滤函数&quot;">​</a></h4><ul><li>字符串函数，如<code>strToLowerCase(STATE_NAME) like &#39;%m%&#39;</code></li></ul><h4 id="_3-空间过滤" tabindex="-1">3）空间过滤 <a class="header-anchor" href="#_3-空间过滤" aria-label="Permalink to &quot;3）空间过滤&quot;">​</a></h4><ul><li>四至过滤，<code>BBOX(the_geom, -90, 40, -60, 45)</code></li><li>空间关系，常用的有<code>EQUALS(相等), DISJOINT(不相交), INTERSECTS(相交), TOUCHES(边界相交), CROSSES(交叉), WITHIN(在里面), CONTAINS(包含), OVERLAPS(相同类型的是否叠置), RELATE, DWITHIN, BEYOND</code>，如<code>DISJOINT(the_geom, POLYGON((-90 40, -90 45, -60 45, -60 40, -90 40)))</code></li></ul>',57),f=[g];function m(q,y,P,x,S,k){return e(),l("div",null,f)}const L=a(b,[["render",m]]);export{E as __pageData,L as default};
