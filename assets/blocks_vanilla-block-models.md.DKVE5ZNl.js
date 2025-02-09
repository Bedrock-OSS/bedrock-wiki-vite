import{_ as d,E as t,j as r,k as c,a7 as i,A as a,l,I as p,J as s}from"./chunks/framework.BAu7jxot.js";const _=JSON.parse('{"title":"Vanilla Block Models","description":"Block models that are built into the game for use with custom blocks.","frontmatter":{"title":"Vanilla Block Models","description":"Block models that are built into the game for use with custom blocks.","category":"Documentation","tags":["beginner"],"license":true,"mentions":["QuazChick"]},"headers":[{"level":2,"title":"Applying Vanilla Models","slug":"applying-vanilla-models","link":"#applying-vanilla-models","children":[]},{"level":2,"title":"List of Vanilla Models","slug":"list-of-vanilla-models","link":"#list-of-vanilla-models","children":[]}],"relativePath":"blocks/vanilla-block-models.md","filePath":"blocks/vanilla-block-models.md"}'),h={name:"blocks/vanilla-block-models.md"},u={tabindex:"0"};function m(k,e,b,g,f,v){const o=t("CodeHeader"),n=t("WikiImage");return c(),r("div",null,[e[6]||(e[6]=i('<p>Although custom blocks are unable to make use of vanilla <a href="/blocks/block-shapes.html">block shapes</a>, Mojang provides several <code>minecraft</code> namespaced models that replicate their look!</p><div class="danger custom-block"><p class="custom-block-title">HARDCODED</p><p>Currently, vanilla block models are not data-driven, so cannot be modified nor found as JSON files in the vanilla resource pack.</p><p>This also means that they are not compatible with the <code>bone_visibility</code> and <code>culling</code> parameters of the <a href="/blocks/block-components.html#geometry">geometry</a> component.</p></div><h2 id="applying-vanilla-models" tabindex="-1">Applying Vanilla Models <a class="header-anchor" href="#applying-vanilla-models" aria-label="Permalink to &quot;Applying Vanilla Models&quot;">​</a></h2><p>Vanilla block models are applied in the same way as <a href="/blocks/block-models.html">custom block models</a>, using the <a href="/blocks/block-components.html#geometry">geometry</a> component, with textures defined through <a href="/blocks/block-components.html#material-instances">material instances</a>:</p>',4)),a(o,null,{default:p(()=>e[0]||(e[0]=[s("minecraft:block > components")])),_:1}),e[7]||(e[7]=i(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:geometry.full_block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:material_instances&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;texture&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cobblestone&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="list-of-vanilla-models" tabindex="-1">List of Vanilla Models <a class="header-anchor" href="#list-of-vanilla-models" aria-label="Permalink to &quot;List of Vanilla Models&quot;">​</a></h2>`,2)),l("table",u,[e[5]||(e[5]=l("thead",null,[l("tr",null,[l("th",null,"Preview"),l("th",null,"Identifier"),l("th",null,"Additional Notes")])],-1)),l("tbody",null,[l("tr",null,[l("td",null,[a(n,{src:"/assets/images/blocks/vanilla-block-models/cross.png",alt:"",width:"100"})]),e[1]||(e[1]=l("td",null,[l("code",null,"minecraft:geometry.cross")],-1)),e[2]||(e[2]=l("td",null,[l("p",null,[s("When used on a block, "),l("code",null,"ambient_occlusion"),s(" and "),l("code",null,"face_dimming"),s(" should be set to "),l("code",null,"false"),s(" in any "),l("a",{href:"/blocks/block-components.html#material-instances"},"material instances"),s(".")]),l("p",null,[s("Before 1.21.70, this model should only be used with render methods that do not have backface culling ("),l("code",null,"alpha_test"),s(" and "),l("code",null,"double_sided"),s(") to avoid invisible faces.")]),l("p",null,[s("After 1.21.70, this model should only be used with render methods that have backface culling ("),l("code",null,"alpha_test_single_sided"),s(", "),l("code",null,"blend"),s(" and "),l("code",null,"opaque"),s(") to avoid texture flickering.")])],-1))]),l("tr",null,[l("td",null,[a(n,{src:"/assets/images/blocks/vanilla-block-models/full_block.png",alt:"",width:"100"})]),e[3]||(e[3]=l("td",null,[l("code",null,"minecraft:geometry.full_block")],-1)),e[4]||(e[4]=l("td",null,[s("When used for a block with the "),l("code",null,"opaque"),s(" render method, faces of adjacent blocks will cull against the block.")],-1))])])])])}const E=d(h,[["render",m]]);export{_ as __pageData,E as default};
