import{_ as e,E as l,j as o,k as p,l as n,A as i,a5 as r,J as s,I as d}from"./chunks/framework.3Z9w-w8R.js";const _=JSON.parse('{"title":"Block Sounds","description":"Learn how to modify the sounds that blocks play after actions such as placement.","frontmatter":{"title":"Block Sounds","description":"Learn how to modify the sounds that blocks play after actions such as placement.","category":"Documentation","mentions":["MedicalJewel105","TheItsNameless","QuazChick"]},"headers":[{"level":2,"title":"Applying Sounds","slug":"applying-sounds","link":"#applying-sounds","children":[]},{"level":2,"title":"Adding Custom Sounds","slug":"adding-custom-sounds","link":"#adding-custom-sounds","children":[]},{"level":2,"title":"List of Vanilla Sounds","slug":"list-of-vanilla-sounds","link":"#list-of-vanilla-sounds","children":[]}],"relativePath":"blocks/block-sounds.md","filePath":"blocks/block-sounds.md"}'),h={name:"blocks/block-sounds.md"};function u(k,t,c,b,g,E){const a=l("CodeHeader");return p(),o("div",null,[t[3]||(t[3]=n("h2",{id:"applying-sounds",tabindex:"-1"},[s("Applying Sounds "),n("a",{class:"header-anchor",href:"#applying-sounds","aria-label":'Permalink to "Applying Sounds"'},"​")],-1)),t[4]||(t[4]=n("p",null,[s("This "),n("code",null,"sounds"),s(" parameter in "),n("code",null,"RP/blocks.json"),s(" is used to determine general block sounds, such as the mining sound, step on sound, breaking sound, and placement sound.")],-1)),t[5]||(t[5]=n("p",null,"You can apply a set of sounds to your block using this parameter:",-1)),i(a,null,{default:d(()=>t[0]||(t[0]=[s("RP/blocks.json")])),_:1}),t[6]||(t[6]=r(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.21.40&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;wiki:custom_log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wood&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Define sound here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="adding-custom-sounds" tabindex="-1">Adding Custom Sounds <a class="header-anchor" href="#adding-custom-sounds" aria-label="Permalink to &quot;Adding Custom Sounds&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">UNSUPPORTED EVENTS</p><p>Only the <code>break</code>, <code>hit</code> and <code>place</code> block sound events can be modified by custom block sound definitions.</p><p>Defining sounds for other events, such as <code>step</code>, will have no effect.</p></div>`,3)),i(a,null,{default:d(()=>t[1]||(t[1]=[s("RP/sounds.json")])),_:1}),t[7]||(t[7]=r(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;block_sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;wiki:custom_wood&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;events&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;break&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;random.levelup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;hit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;random.pop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;place&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;random.pop&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1)),i(a,null,{default:d(()=>t[2]||(t[2]=[s("RP/blocks.json")])),_:1}),t[8]||(t[8]=r(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.21.40&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;wiki:custom_log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wiki:custom_wood&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="list-of-vanilla-sounds" tabindex="-1">List of Vanilla Sounds <a class="header-anchor" href="#list-of-vanilla-sounds" aria-label="Permalink to &quot;List of Vanilla Sounds&quot;">​</a></h2><p>The following are valid values for the sound property:</p><table tabindex="0"><thead><tr><th><em>Last updated for 1.21.50</em></th></tr></thead><tbody><tr><td>amethyst_block</td></tr><tr><td>amethyst_cluster</td></tr><tr><td>ancient_debris</td></tr><tr><td>anvil</td></tr><tr><td>azalea</td></tr><tr><td>azalea_leaves</td></tr><tr><td>bamboo</td></tr><tr><td>bamboo_sapling</td></tr><tr><td>bamboo_wood</td></tr><tr><td>bamboo_wood_hanging_sign</td></tr><tr><td>basalt</td></tr><tr><td>big_dripleaf</td></tr><tr><td>bone_block</td></tr><tr><td>calcite</td></tr><tr><td>candle</td></tr><tr><td>cave_vines</td></tr><tr><td>chain</td></tr><tr><td>cherry_leaves</td></tr><tr><td>cherry_wood</td></tr><tr><td>cherry_wood_hanging_sign</td></tr><tr><td>chiseled_bookshelf</td></tr><tr><td>cloth</td></tr><tr><td>comparator</td></tr><tr><td>copper</td></tr><tr><td>copper_bulb</td></tr><tr><td>copper_grate</td></tr><tr><td>coral</td></tr><tr><td>creaking_heart</td></tr><tr><td>decorated_pot</td></tr><tr><td>deepslate</td></tr><tr><td>deepslate_bricks</td></tr><tr><td>dirt_with_roots</td></tr><tr><td>dripstone_block</td></tr><tr><td>eyeblossom</td></tr><tr><td>frog_spawn</td></tr><tr><td>froglight</td></tr><tr><td>fungus</td></tr><tr><td>glass</td></tr><tr><td>glow_lichen</td></tr><tr><td>grass</td></tr><tr><td>gravel</td></tr><tr><td>hanging_roots</td></tr><tr><td>hanging_sign</td></tr><tr><td>heavy_core</td></tr><tr><td>honey_block</td></tr><tr><td>itemframe</td></tr><tr><td>ladder</td></tr><tr><td>lantern</td></tr><tr><td>large_amethyst_bud</td></tr><tr><td>lever</td></tr><tr><td>lodestone</td></tr><tr><td>mangrove_roots</td></tr><tr><td>medium_amethyst_bud</td></tr><tr><td>metal</td></tr><tr><td>mob_spawner</td></tr><tr><td>moss_block</td></tr><tr><td>moss_carpet</td></tr><tr><td>mud</td></tr><tr><td>mud_bricks</td></tr><tr><td>muddy_mangrove_roots</td></tr><tr><td>nether_brick</td></tr><tr><td>nether_gold_ore</td></tr><tr><td>nether_sprouts</td></tr><tr><td>nether_wart</td></tr><tr><td>nether_wood</td></tr><tr><td>nether_wood_hanging_sign</td></tr><tr><td>netherite</td></tr><tr><td>netherrack</td></tr><tr><td>nylium</td></tr><tr><td>packed_mud</td></tr><tr><td>pale_hanging_moss</td></tr><tr><td>pink_petals</td></tr><tr><td>pointed_dripstone</td></tr><tr><td>polished_tuff</td></tr><tr><td>powder_snow</td></tr><tr><td>resin</td></tr><tr><td>resin_brick</td></tr><tr><td>roots</td></tr><tr><td>sand</td></tr><tr><td>scaffolding</td></tr><tr><td>sculk</td></tr><tr><td>sculk_catalyst</td></tr><tr><td>sculk_sensor</td></tr><tr><td>sculk_shrieker</td></tr><tr><td>sculk_vein</td></tr><tr><td>shroomlight</td></tr><tr><td>slime</td></tr><tr><td>small_amethyst_bud</td></tr><tr><td>snow</td></tr><tr><td>soul_sand</td></tr><tr><td>soul_soil</td></tr><tr><td>sponge</td></tr><tr><td>spore_blossom</td></tr><tr><td>stem</td></tr><tr><td>stone</td></tr><tr><td>suspicious_gravel</td></tr><tr><td>suspicious_sand</td></tr><tr><td>sweet_berry_bush</td></tr><tr><td>trial_spawner</td></tr><tr><td>tuff</td></tr><tr><td>tuff_bricks</td></tr><tr><td>turtle_egg</td></tr><tr><td>vault</td></tr><tr><td>vines</td></tr><tr><td>web</td></tr><tr><td>wet_sponge</td></tr><tr><td>wood</td></tr></tbody></table>`,4))])}const y=e(h,[["render",u]]);export{_ as __pageData,y as default};
