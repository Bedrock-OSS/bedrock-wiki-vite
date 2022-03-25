import{_ as p,c as o,a,w as t,e as n,r,o as l,d as e}from"./404.md.25b6a67d.js";var u="/assets/images/world-generation/generating-custom-ores/stone_ore.png",c="/assets/images/world-generation/generating-custom-ores/deepslate_ore.png";const x='{"title":"Generating Custom Ores","description":"","frontmatter":{"title":"Generating Custom Ores","category":"Tutorials","tags":["experimental"],"mention":["DerpMcaddon"]},"headers":[{"level":2,"title":"The Feature File","slug":"the-feature-file"},{"level":2,"title":"The Feature Rule","slug":"the-feature-rule"},{"level":2,"title":"Testing","slug":"testing"}],"relativePath":"world-generation/custom-ores.md"}',i={},k=n('<p><code>ore_feature</code>&#39;s are basic but important features! They can form clusters of blocks by replacing blocks where they are generated. This tutorial will show you how to make mineral ores that naturally generate.</p><p>The use of features and feature rules requires Creation of Custom Biomes to be enabled in your world settings. If your block doesn&#39;t generate, make sure it&#39;s enabled!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For this tutorial, I&#39;ll be using 2 custom blocks, Titanite Ore and Deepslate Titanite Ore. For how to make custom blocks, visit the <a href="/blocks/blocks-intro.html">Blocks Intro</a> page.</p></div><h2 id="the-feature-file" tabindex="-1">The Feature File <a class="header-anchor" href="#the-feature-file" aria-hidden="true">#</a></h2>',4),b=e("BP/features/titanite_ore_feature.json"),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.17.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:ore_feature&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:titanite_ore_feature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">// Placement attempts</span>
		<span class="token property">&quot;replace_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token comment">// Replace all stone variants (andesite, granite, and diorite) with titanite ore</span>
				<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:titanite_ore&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;may_replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:stone&quot;</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token comment">// Replace deepslate with deepslate titanite ore</span>
				<span class="token property">&quot;places_block&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:deepslate_titanite_ore&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;may_replace&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;minecraft:deepslate&quot;</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="the-feature-rule" tabindex="-1">The Feature Rule <a class="header-anchor" href="#the-feature-rule" aria-hidden="true">#</a></h2>`,2),q=e("BP/feature_rules/overworld_underground_titanite_ore_feature.json"),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:feature_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:overworld_underground_titanite_ore_feature&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;places_feature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:titanite_ore_feature&quot;</span> <span class="token comment">// Identifier from the feature file</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;placement_pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;underground_pass&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token comment">// Scatter the ore throughout the Overworld</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>
							<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overworld_generation&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;iterations&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// Placement attempts of the cluster, not the ore blocks</span>
			<span class="token property">&quot;coordinate_eval_order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zyx&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span><span class="token punctuation">,</span> <span class="token comment">// You can use &quot;triangle&quot; to make ores more common in the middle of the extent</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Minimum y level for the ore to generate</span>
					<span class="token number">62</span> <span class="token comment">// Maximum y level for the ore to generate</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;distribution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniform&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;extent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><p>You can look for the ore by exploring caves, but if your ores are rare, you can use commands instead to check if they&#39;re generating. Simply place this command into a repeating command block, then fly around:</p><ul><li><code>execute @a ~ ~ ~ fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air 0 replace wiki:titanite_ore</code></li></ul><p>Stone ores:</p><p><img src="`+u+'" alt=""></p><p>Deepslate ores:</p><p><img src="'+c+'" alt=""></p>',8);function _(g,h,f,y,v,T){const s=r("CodeHeader");return l(),o("div",null,[k,a(s,null,{default:t(()=>[b]),_:1}),m,a(s,null,{default:t(()=>[q]),_:1}),d])}var C=p(i,[["render",_]]);export{x as __pageData,C as default};
