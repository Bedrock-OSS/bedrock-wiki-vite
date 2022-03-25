import{_ as r,c,a as s,w as o,e as t,b as p,d as a,r as l,o as i}from"./404.md.25b6a67d.js";var u="/assets/images/guide/custom_blocks_inventory.png",k="/assets/images/guide/custom_blocks_done.mp4";const S='{"title":"Intro to Blocks","description":"","frontmatter":{"title":"Intro to Blocks","category":"General","tags":["guide"]},"headers":[{"level":2,"title":"Block Behavior File","slug":"block-behavior-file"},{"level":2,"title":"Block Resource File","slug":"block-resource-file"},{"level":3,"title":"Block terrain texture definition","slug":"block-terrain-texture-definition"},{"level":3,"title":"Block flipbook texture definition","slug":"block-flipbook-texture-definition"},{"level":2,"title":"Setting block names","slug":"setting-block-names"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"}],"relativePath":"blocks/blocks-intro.md"}',b={},d=t('<p>Minecraft Bedrock allows us to add custom blocks into our world with various vanilla-like properties. In latest versions, custom blocks can have multiple stages (like plants), directional facing, and other features. This tutorial will cover how to create some simple blocks for the stable version of Minecraft Bedrock.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Blocks on the stable version of Minecraft (1.10 format version) are missing many new features, available in experimental (1.16 format version). You can learn more about experimental blocks <a href="/blocks/blocks-16.html">here</a>.</p></div><h2 id="block-behavior-file" tabindex="-1">Block Behavior File <a class="header-anchor" href="#block-behavior-file" aria-hidden="true">#</a></h2><p>Block behaviors are structured similarly to entities: they contain a description and a list of components that defines the block&#39;s behavior.</p>',4),m=a("BP/blocks/blockname.json"),h=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:blocky&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;register_to_creative_menu&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:loot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loot_tables/blocks/blocky.json&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:destroy_time&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:explosion_resistance&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:friction&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:flammable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;flame_odds&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token property">&quot;burn_odds&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:map_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:block_light_absorption&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;minecraft:block_light_emission&quot;</span><span class="token operator">:</span> <span class="token number">0.25</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li><code>&quot;identifier&quot;</code> under <code>&quot;description&quot;</code> is already familiar to us.</li><li><code>&quot;components&quot;</code><ul><li><code>&quot;minecraft:loot&quot;</code> defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables <a href="/loot/loot-tables.html">here</a>.</li><li><code>&quot;minecraft:destroy_time&quot;</code> defines how long the player will need to mine the block until it breaks. Currently, it isn&#39;t possible to set different destroy times for different tools.</li><li><code>&quot;minecraft:explosion_resistance&quot;</code> defines the chance for an explosion to break the block. Higher the value, lower the chance.</li><li><code>&quot;minecraft:friction&quot;</code> defines how much friction the block has. For example, soulsand has a low value for friction, so it slows the players. Ice has a higher friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is <code>0.6</code>.</li><li><code>&quot;minecraft:flammable&quot;</code><ul><li><code>&quot;flame_odds&quot;</code> defines how likely the block is to catch fire.</li><li><code>&quot;burn_odds&quot;</code> defines how likely the block is to be destroyed by fire.</li></ul></li><li><code>&quot;minecraft:map_color&quot;</code> is the hex color code that will be displayed on a Minecraft map to symbolize this block. <code>#FFFFFF</code> means white. You can get hex codes for other colors <a href="https://www.google.com/search?q=hex+color+picker&amp;rlz=1C1CHBF_enDE886DE886&amp;oq=hex+color+picker&amp;aqs=chrome..69i57j0l7.2293j0j8&amp;sourceid=chrome&amp;ie=UTF-8" target="_blank" rel="noopener noreferrer">here</a>.</li><li><code>&quot;minecraft:block_light_emission&quot;</code> defines the light level the block will output. Light level is out of 15, so to get a light level of 9, insert <code>0.6</code> as the value.</li></ul></li></ul><p>Let&#39;s create some more blocks in <code>BP/blocks</code>. I created these four block for the tutorial:</p><ul><li>Filename: <code>blocky.json</code>; Identifier: <code>wiki:blocky</code>;</li><li>Filename: <code>sapp_log.json</code>; Identifier: <code>wiki:sapp_log</code>;</li><li>Filename: <code>compass_block.json</code>; Identifier: <code>wiki:compass_block</code>;</li><li>Filename: <code>flashing.json</code>; Identifier: <code>wiki:flashing</code>; You can play around with changing the component values for each of these. Now let&#39;s move over to the resource definition.</li></ul><h2 id="block-resource-file" tabindex="-1">Block Resource File <a class="header-anchor" href="#block-resource-file" aria-hidden="true">#</a></h2><p>The resource definition for blocks differs from entities/items because all the definitions appear in a single file. The only two things we can define for blocks are its sound and its textures.</p>`,6),q=a("RP/blocks.json"),_=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;wiki:blocky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blocky&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stone&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;wiki:sapp_log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;up&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sapp_log_top&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;down&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sapp_log_top&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;side&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sapp_log_side&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wood&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;wiki:compass_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;up&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_up&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;down&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_down&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;north&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_north&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;south&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_south&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;west&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_west&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;east&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compass_block_east&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wool&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;wiki:flashing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flashing&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;glass&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>As you can see, every block&#39;s identifier is applied with textures and step sounds. When we define the textures, we use their shortnames which we will define in <code>terrain_texture.json</code> later on. There are 3 ways we can define the texture of a block:</p><ul><li><code>&quot;wiki:blocky&quot;</code> &amp; <code>&quot;wiki:flashing&quot;</code> have the same texture on each side of the block. We will be animating the texture for <code>&quot;wiki:flashing&quot;</code> later on.</li><li><code>&quot;wiki:sapp_log&quot;</code> has 3 different textures; the top of the block, the bottom of the block &amp; the remaining sides of the block.</li><li><code>&quot;wiki:compass_block&quot;</code> has a different texture for each side of the block.</li></ul><p>When we define the sounds, we use their shortnames. For a list of vanilla sound shortnames, you can look <a href="/documentation/sound-definitions.html">here</a>. If you want to learn about making your own custom sounds, you can look <a href="/concepts/sounds.html">here</a>.</p><h3 id="block-terrain-texture-definition" tabindex="-1">Block terrain texture definition <a class="header-anchor" href="#block-terrain-texture-definition" aria-hidden="true">#</a></h3><p>These &quot;gorgeous&quot; textures are the ones I&#39;m going to use for my example blocks. The first three are located in the <code>RP/textures/blocks/</code> folder and, the last 6 are located in the <code>RP/textures/blocks/compass_block</code> subfolder - they show North, South, etc.</p><p><em>Left to right: <code>blocky.png</code>, <code>sapp_log_side.png</code>, <code>side_block_top.png</code>, <code>sb_up.png</code>, <code>sb_down.png</code>, <code>sb_north.png</code>, <code>sb_south.png</code>, <code>sb_west.png</code>, <code>sb_east.png</code></em></p>`,7),f=p("p",null,[a("All textures need to define a "),p("strong",null,"shortname"),a(" and we'll do it the same way as we defined item texture shortnames in "),p("code",null,"RP/textures/item_texture.json"),a(", but this time in "),p("code",null,"RP/textures/terrain_texture.json")],-1),g=a("RP/textures/terrain_texture.json"),y=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.terrain&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
	<span class="token property">&quot;num_mip_levels&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;blocky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/blocky&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sapp_log_top&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapp_log_top&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sapp_log_side&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/sapp_log_side&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_north&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_north&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_east&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_east&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_west&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_west&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_south&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_south&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_up&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_up&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compass_block_down&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/compass_block/sb_down&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>The only difference from <code>item_textures.json</code> is that &quot;<code>atlas.items</code>&quot; is now changed to &quot;<code>atlas.terrain</code>&quot;.</p><p><code>&quot;padding&quot;</code> and <code>&quot;num_mip_leavels&quot;</code> mean the quality of how the texture is displayed, especially noticeable on higher resolution textures. The performance will be better if it&#39;s lower, but the textures will appear glitchy from further distances.</p><p>Next, all our texture shortnames have been defined. These shortnames were already used in <code>RP/blocks.json</code>, as you might remember. If you load the game now, you&#39;ll be able to see the 3 new custom blocks you just added, with all the texture functionality.</p><p><img src="`+u+'" alt=""></p><p>But, we still have to define the <code>wiki:flashing</code> texture(third from the left), which is currently undefined. That&#39;s why it appears as a dirt block with &quot;update&quot; written on it.</p><h3 id="block-flipbook-texture-definition" tabindex="-1">Block flipbook texture definition <a class="header-anchor" href="#block-flipbook-texture-definition" aria-hidden="true">#</a></h3><p>As you might have already guessed, flipbook texture shortnames are defined in a different place than <code>RP/textures/terrain_texture.json</code>. Let&#39;s create another file <code>RP/textures/flipbook_textures.json</code>.</p>',8),w=a("RP/textures/flipbook_textures.json"),x=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;flipbook_texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/flashing_flipbook&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;atlas_tile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flashing&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ticks_per_frame&quot;</span><span class="token operator">:</span> <span class="token number">13</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>&quot;flipbook_texture&quot;</code> is the path to your texture file, which is named <code>&quot;flashing_flipbook&quot;</code> in this scenario.</li><li><code>&quot;atlas_tile&quot;</code> is the shortname definition. As you know, we already applied <code>&quot;flashing&quot;</code> texture shortname to the <code>wiki:flashing</code> block in <code>RP/blocks.json</code>.</li><li><code>&quot;ticks_per_frame&quot;</code> defines how quickly the different textures will fade into the block, in other words, the speed of the animation.</li></ul><p>A <strong>flipbook texture</strong> file is created like this:</p><ul><li>The image width is 16;</li><li>Image height is <code>16*3</code>, as we have three different block textures/<strong>frames</strong> to fade. If you wanted a flipbook with 12 different textures, the height would be <code>16*12</code>. <strong>Done!</strong> All of our blocks work perfectly.</li></ul><video width="320" height="240" controls><source src="`+k+`" type="video/mp4"></video><h2 id="setting-block-names" tabindex="-1">Setting block names <a class="header-anchor" href="#setting-block-names" aria-hidden="true">#</a></h2><p>And, finally, let&#39;s define our block&#39;s names in <code>/RP/texts/en_US.lang</code> as we did with items, somewhat like this:</p><div class="language-"><pre><code>tile.wiki:blocky.name=Blocky Block
tile.wiki:sapp_log.name=Sapphire Wood
tile.wiki:compass_block.name=A compass in block-form
tile.wiki:flashing.name=Block of Flashing Matter
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>You can learn more about .lang <a href="/concepts/text-and-translations.html">here</a></p><hr><h2 id="what-you-have-learned" tabindex="-1">What you have learned <a class="header-anchor" href="#what-you-have-learned" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned:</p><ul><li>What custom block behavior components there are</li><li>How to create a custom block with simple textures</li><li>How to create a custom block with side and face-relying textures</li><li>How to create a custom block with flipbook textures</li></ul></div>`,12);function v(T,I,B,j,F,P){const e=l("CodeHeader"),n=l("WikiImage");return i(),c("div",null,[d,s(e,null,{default:o(()=>[m]),_:1}),h,s(e,null,{default:o(()=>[q]),_:1}),_,s(n,{src:"/assets/images/guide/tut_blocky_texture.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_log_side_texture.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_log_top_texture.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_up.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_down.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_north.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_south.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_west.png",pixelated:""}),s(n,{src:"/assets/images/guide/tut_sb_east.png",pixelated:""}),f,s(e,null,{default:o(()=>[g]),_:1}),y,s(e,null,{default:o(()=>[w]),_:1}),x])}var R=r(b,[["render",v]]);export{S as __pageData,R as default};
