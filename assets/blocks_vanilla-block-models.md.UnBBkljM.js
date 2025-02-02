import{_ as o,e as d,t as s,C as c,f as l,Q as t,E as e,D as n,d as r}from"./chunks/framework.CuLWBCQE.js";const w=JSON.parse('{"title":"Vanilla Block Models","description":"Block models that are built into the game for use with custom blocks.","frontmatter":{"title":"Vanilla Block Models","description":"Block models that are built into the game for use with custom blocks.","category":"Documentation","tags":["beginner"],"mentions":["QuazChick"]},"headers":[{"level":2,"title":"Applying Vanilla Models","slug":"applying-vanilla-models","link":"#applying-vanilla-models","children":[]},{"level":2,"title":"List of Vanilla Models","slug":"list-of-vanilla-models","link":"#list-of-vanilla-models","children":[]}],"relativePath":"blocks/vanilla-block-models.md","filePath":"blocks/vanilla-block-models.md"}'),h={name:"blocks/vanilla-block-models.md"},p=t('<p>Although custom blocks are unable to make use of vanilla <a href="/blocks/block-shapes.html">block shapes</a>, Mojang provides several <code>minecraft</code> namespaced models that replicate their look!</p><p><strong>Note:</strong> Currently, these vanilla models are not data-driven, so cannot be modified nor found as JSON files in the vanilla resource pack.</p><h2 id="applying-vanilla-models" tabindex="-1">Applying Vanilla Models <a class="header-anchor" href="#applying-vanilla-models" aria-label="Permalink to &quot;Applying Vanilla Models&quot;">​</a></h2><p>Vanilla block models are applied in the same way as custom block models, using the <a href="/blocks/block-components.html#geometry">geometry</a> component, with textures defined through <a href="/blocks/block-components.html#material-instances">material instances</a>:</p>',4),u=t(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:geometry.full_block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:material_instances&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;texture&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cobblestone&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="list-of-vanilla-models" tabindex="-1">List of Vanilla Models <a class="header-anchor" href="#list-of-vanilla-models" aria-label="Permalink to &quot;List of Vanilla Models&quot;">​</a></h2>`,2),k={tabindex:"0"},m=l("thead",null,[l("tr",null,[l("th",null,"Preview"),l("th",null,"Identifier"),l("th",null,"Additional Notes")])],-1),b=l("td",null,[l("code",null,"minecraft:geometry.cross")],-1),_=l("td",null,[l("p",null,[e("Before 1.21.70, this model should only be used with render methods that do not have backface culling ("),l("code",null,"alpha_test"),e(" and "),l("code",null,"double_sided"),e(") to avoid invisible faces.")]),l("p",null,[e("After 1.21.70, this model should only be used with render methods that have backface culling ("),l("code",null,"alpha_test_single_sided"),e(", "),l("code",null,"blend"),e(" and "),l("code",null,"opaque"),e(") to avoid texture flickering.")])],-1),g=l("td",null,[l("code",null,"minecraft:geometry.full_block")],-1),f=l("td",null,[e("When used for a block with the "),l("code",null,"opaque"),e(" render method, faces of adjacent blocks will cull against the block.")],-1);function v(E,y,C,q,V,F){const i=n("CodeHeader"),a=n("WikiImage");return r(),d("div",null,[p,s(i,null,{default:c(()=>[e("minecraft:block > components")]),_:1}),u,l("table",k,[m,l("tbody",null,[l("tr",null,[l("td",null,[s(a,{src:"/assets/images/blocks/vanilla-block-models/cross.png",alt:"",width:"100"})]),b,_]),l("tr",null,[l("td",null,[s(a,{src:"/assets/images/blocks/vanilla-block-models/full_block.png",alt:"",width:"100"})]),g,f])])])])}const T=o(h,[["render",v]]);export{w as __pageData,T as default};
