import{_ as a,o as s,c as l,O as o}from"./chunks/framework.ec4390fa.js";const e="/lzugis-blogs/img/frame/ol-core.png",n="/lzugis-blogs/img/frame/ol-source.png",p="/lzugis-blogs/img/frame/ol-layer.png",t="/lzugis-blogs/img/frame/ol-controls.png",r="/lzugis-blogs/img/frame/ol-interaction.png",c="/lzugis-blogs/img/frame/ol-proj.png",i="/lzugis-blogs/img/frame/ol-projection.png",f=JSON.parse('{"title":"openlayers","description":"","frontmatter":{},"headers":[],"relativePath":"frame/openlayers.md","filePath":"frame/openlayers.md"}'),y={name:"frame/openlayers.md"},D=o(`<h1 id="openlayers" tabindex="-1">openlayers <a class="header-anchor" href="#openlayers" aria-label="Permalink to &quot;openlayers&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>OpenLayers是一个开源（2-clause BSD）的JavaScript类库，可以用来制作客户端交互式地图并且支持绝大多数的浏览器中</p></div><ul><li><a href="https://openlayers.org/" target="_blank" rel="noreferrer">官网</a></li><li><a href="https://openlayers.org/en/v4.6.5/doc/" target="_blank" rel="noreferrer">v4.6.5</a></li><li><a href="https://github.com/openlayers/openlayers" target="_blank" rel="noreferrer">GitHub</a></li></ul><h2 id="_1-特性" tabindex="-1">1. 特性 <a class="header-anchor" href="#_1-特性" aria-label="Permalink to &quot;1. 特性&quot;">​</a></h2><h3 id="_1-1-支持瓦片图层" tabindex="-1">1.1 支持瓦片图层 <a class="header-anchor" href="#_1-1-支持瓦片图层" aria-label="Permalink to &quot;1.1 支持瓦片图层&quot;">​</a></h3><p>OpenLayers支持从OSM、Bing、MapBox、Stamen和其他任何你能找到的XYZ瓦片资源中提取地图瓦片并在前端展示。同时也支持OGC的WMTS规范的瓦片服务以及ArcGIS规范的瓦片服务。</p><h3 id="_1-2-支持矢量切片" tabindex="-1">1.2 支持矢量切片 <a class="header-anchor" href="#_1-2-支持矢量切片" aria-label="Permalink to &quot;1.2 支持矢量切片&quot;">​</a></h3><p>OpenLayers也支持矢量切片的访问和展示，包括MapBox矢量切片中的pbf格式，或者GeoJSON格式和TopoJSON格式的矢量切片。</p><h3 id="_1-3-支持矢量图层" tabindex="-1">1.3 支持矢量图层 <a class="header-anchor" href="#_1-3-支持矢量图层" aria-label="Permalink to &quot;1.3 支持矢量图层&quot;">​</a></h3><p>能够渲染GeoJSON、TopoJSON、KML、GML和其他格式的矢量数据，上面说的矢量切片形式的数据也可以被认为是在矢量图层中渲染。</p><h3 id="_1-4-支持ogc规范" tabindex="-1">1.4 支持OGC规范 <a class="header-anchor" href="#_1-4-支持ogc规范" aria-label="Permalink to &quot;1.4 支持OGC规范&quot;">​</a></h3><p>OpenLayers支持OGC制定的WMS、WFS等GIS网络服务规范。</p><h3 id="_1-5-运用前沿技术" tabindex="-1">1.5 运用前沿技术 <a class="header-anchor" href="#_1-5-运用前沿技术" aria-label="Permalink to &quot;1.5 运用前沿技术&quot;">​</a></h3><p>利用Canvas 2D、WebGL以及HTML5中其他最新的技术来构建功能。同时支持在移动设备上运行。</p><h3 id="_1-6-易于定制和扩展" tabindex="-1">1.6 易于定制和扩展 <a class="header-anchor" href="#_1-6-易于定制和扩展" aria-label="Permalink to &quot;1.6 易于定制和扩展&quot;">​</a></h3><p>可以直接调整CSS来为地图控件设计样式。而且可以对接到不同层级的API进行功能扩展，或者使用第三方库来定制和扩展。</p><h3 id="_1-7-面向对象的思想" tabindex="-1">1.7 面向对象的思想 <a class="header-anchor" href="#_1-7-面向对象的思想" aria-label="Permalink to &quot;1.7 面向对象的思想&quot;">​</a></h3><p>最新版本的OpenLayers采用纯面向对象的ECMA Script 6进行开发，可以说，在OpenLayers中万物皆对象。</p><h3 id="_1-8-优秀的交互体验" tabindex="-1">1.8 优秀的交互体验 <a class="header-anchor" href="#_1-8-优秀的交互体验" aria-label="Permalink to &quot;1.8 优秀的交互体验&quot;">​</a></h3><p>OpenLayers实现了类似于Ajax的无刷新功能，可以结合很多优秀的JavaScript功能插件，带给用户更多丰富的交互体验。</p><h2 id="_2-引用" tabindex="-1">2. 引用 <a class="header-anchor" href="#_2-引用" aria-label="Permalink to &quot;2. 引用&quot;">​</a></h2><p>Openlayers的引用方式有两种，一种是通过script和link标签，引入其需要的文件。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://openlayers.org/en/v4.6.5/css/ol.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://openlayers.org/en/v4.6.5/build/ol.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>另外一种方式是通过npm的方式引入。这是在使用框架时最常用的引用方法，如Vue/React等，在框架中也可以使用第一种方式引入，但更推荐使用这种方法。这种方法引用是从npm仓库中引入框架包，在vue或React框架中，更方面我们进行一些包的管理。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ol</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span></code></pre></div><p>先通过上述命令安装依赖，再引入：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/ol.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Map </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/Map</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> View </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ol/View</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_3-核心类" tabindex="-1">3. 核心类 <a class="header-anchor" href="#_3-核心类" aria-label="Permalink to &quot;3. 核心类&quot;">​</a></h2><p>Openlayers中有很多核心的类，我们结合官方文档和GitHub上的源码，对Openlayers中类之间的关系、和类的继承做了一个概要说明，如下图所示。其中： <img src="`+e+'" alt="" data-fancybox="gallery"></p><h3 id="_3-1-map" tabindex="-1">3.1 Map <a class="header-anchor" href="#_3-1-map" aria-label="Permalink to &quot;3.1 Map&quot;">​</a></h3><p>Map (ol/Map)是Openlayers中最主要的核心组件，它渲染在一个目标(target)容器中（例如页面中的一个div），所有的地图属性都可以在定义的时候初始化，同时也提供了setter方法让我们修改map的属性，例如通过setTarget()可以改变地图的装载容器。</p><h3 id="_3-2-view" tabindex="-1">3.2 View <a class="header-anchor" href="#_3-2-view" aria-label="Permalink to &quot;3.2 View&quot;">​</a></h3><p>View(ol/View)是Openlayers中非常重要的一个概念，其控制了地图视觉相关的参数，如地图中心、初始化级别、缩放级别等。同时，view还定义了地图的投影，决定了地图中心点的坐标、单位以及地图渲染的分辨率等参数，默认是EPSG:3857。</p><h3 id="_3-3-source" tabindex="-1">3.3 Source <a class="header-anchor" href="#_3-3-source" aria-label="Permalink to &quot;3.3 Source&quot;">​</a></h3><p>Source即数据源，Openlayers中支持多种免费或商业的地图切片服务，如OSM、天地图等，也支持OGC服务，如WMS、WMTS等，也可选择矢量格式数据如GeoJSON、KML格式等。 <img src="'+n+'" alt="" data-fancybox="gallery"></p><h3 id="_3-4-layer" tabindex="-1">3.4 Layer <a class="header-anchor" href="#_3-4-layer" aria-label="Permalink to &quot;3.4 Layer&quot;">​</a></h3><p>数据源最终都会以图层的方式呈现出来，一个数据源可以被多次使用，并以不同的样式展示。但是，这些图层所使用的数据源都为同一个。Openlayers中图层及各图层类之间、图层和数据源之间的关系如下图所示。 <img src="'+p+'" alt="" data-fancybox="gallery"></p><h3 id="_3-5-controls" tabindex="-1">3.5 Controls <a class="header-anchor" href="#_3-5-controls" aria-label="Permalink to &quot;3.5 Controls&quot;">​</a></h3><p>是地图控件相关，其需要一个容器来呈现跟地图相关的状态或者交互相关的操作。 <img src="'+t+'" alt="" data-fancybox="gallery"></p><h3 id="_3-6-interaction" tabindex="-1">3.6 Interaction <a class="header-anchor" href="#_3-6-interaction" aria-label="Permalink to &quot;3.6 Interaction&quot;">​</a></h3><p>地图交互相关，如双击放大地图、鼠标滚轮缩放地图等，是地图默认的交互，同时也提供一些矢量操作相关的交互，如绘制、选择等。Openlayers中的交互分为两种：默认交互和矢量交互。交互的种类如下图所示，其中后面打“√”的是默认交互。 <img src="'+r+'" alt="" data-fancybox="gallery"></p><h3 id="_3-7-overlay" tabindex="-1">3.7 Overlay <a class="header-anchor" href="#_3-7-overlay" aria-label="Permalink to &quot;3.7 Overlay&quot;">​</a></h3><p>Overlay是一个覆盖在地图上一个浮动的div，其位置跟地图是相对的，会随着地图的拖动而变化其位置。</p><h3 id="_3-8-style" tabindex="-1">3.8 Style <a class="header-anchor" href="#_3-8-style" aria-label="Permalink to &quot;3.8 Style&quot;">​</a></h3><p>Style用来设置矢量要素图层的渲染样式，其中：</p><ul><li><code>image</code>为点样式，一般为一个图标或带颜色的填充图形；</li><li><code>stroke</code>为边框样式，线的样式、多边形的边框样式等通过它来设置；</li><li><code>fill</code>为填充样式，多边形的填充样式通过它来设置；</li><li><code>text</code>为文本标注样式。</li></ul><h3 id="_3-9-projection" tabindex="-1">3.9 Projection <a class="header-anchor" href="#_3-9-projection" aria-label="Permalink to &quot;3.9 Projection&quot;">​</a></h3><h4 id="_3-9-1-proj方法" tabindex="-1">3.9.1 proj方法 <a class="header-anchor" href="#_3-9-1-proj方法" aria-label="Permalink to &quot;3.9.1 proj方法&quot;">​</a></h4><p>Openlayers中proj提供了坐标定义或坐标转化等方法: <img src="'+c+'" alt="" data-fancybox="gallery"></p><h4 id="_3-9-2-ol-proj-projection" tabindex="-1">3.9.2 ol.proj.Projection <a class="header-anchor" href="#_3-9-2-ol-proj-projection" aria-label="Permalink to &quot;3.9.2 ol.proj.Projection&quot;">​</a></h4><p>定义投影，其配置参数与说明如下表。 <img src="'+i+`" alt="" data-fancybox="gallery"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> projection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> ol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Projection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 定义平面坐标系</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xkcd-image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">units</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pixels</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> extent</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">proj4</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defs</span><span style="color:#A6ACCD;">( </span><span style="color:#676E95;font-style:italic;">// 通过proj4定义code为3395的坐标系</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EPSG:3395</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,52),h=[D];function F(d,u,C,m,_,b){return s(),l("div",null,h)}const A=a(y,[["render",F]]);export{f as __pageData,A as default};
