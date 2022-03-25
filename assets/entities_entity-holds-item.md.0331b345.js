import{_ as o,c as p,a as n,w as s,e as t,r as l,o as i,d as e}from"./404.md.25b6a67d.js";var r="/assets/images/tutorials/entity-holds-item/blockbench.png",c="/assets/images/tutorials/entity-holds-item/finished_result.png";const I='{"title":"Entity Holds Item","description":"","frontmatter":{"title":"Entity Holds Item","category":"Tutorials","tags":["intermediate"],"mention":["pieterdefour"]},"headers":[{"level":2,"title":"Model","slug":"model"},{"level":2,"title":"Behavior Pack-side","slug":"behavior-pack-side"},{"level":2,"title":"Loot Table","slug":"loot-table"}],"relativePath":"entities/entity-holds-item.md"}',u={},d=t('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial assumes you have a basic understanding of entities, loot tables, and Blockbench.</p></div><p>In this tutorial, you will learn to have an entity spawn with an item in its hand. I&#39;ll be using a custom <code>mandalorian_armorer</code> entity and a custom <code>hammer</code> item for the examples.</p><h2 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-hidden="true">#</a></h2><p>First of all, you&#39;ll need to have a model in Blockbench that has a map called <code>rightArm</code>. Within this map, there needs to be a submap called &#39;rightItem&#39;. Now set the position of the pivot point of this submap, so it sits in the place you want the entity to hold the item at.</p><p><img src="'+r+'" alt=""></p><h2 id="behavior-pack-side" tabindex="-1">Behavior Pack-side <a class="header-anchor" href="#behavior-pack-side" aria-hidden="true">#</a></h2><p>Now you&#39;ll need to add a <code>minecraft:equipment</code> component in the component list for your entity and add a loot table with the desired item.</p><p>In our example it will look like this:</p>',8),m=e("BP/entity/mandolorian.json#components"),h=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:equipment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loot_tables/entities/gear/mandolorian.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="loot-table" tabindex="-1">Loot Table <a class="header-anchor" href="#loot-table" aria-hidden="true">#</a></h2><p>Finally, add the loot table for your entity. It needs to be in <code>loot_tables/entities/&lt;your_loot_table_name&gt;.json</code> in the behavior pack. In our case, it&#39;s called <code>mandolorian.json</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This isn&#39;t the same loot table as what it drops on death. So make sure it has a different name.</p></div><p>To have the entity always spawn with the same item, add the following loot table:</p>`,5),b=e("BP/loot_tables/entities/gear/mandolorian.json"),_=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;pools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;rolls&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dd:hammer&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>If everything went well, you&#39;d have something looking like this:</p><p><img src="`+c+'" alt=""></p>',3);function k(y,v,g,f,T,q){const a=l("CodeHeader");return i(),p("div",null,[d,n(a,null,{default:s(()=>[m]),_:1}),h,n(a,null,{default:s(()=>[b]),_:1}),_])}var P=o(u,[["render",k]]);export{I as __pageData,P as default};
