import{_ as d,E as o,j as c,k as u,a5 as i,A as a,l,I as t,J as n}from"./chunks/framework.3Z9w-w8R.js";const h="/assets/images/commands/rearrange-positions/MPDVisualRep.gif",v=JSON.parse('{"title":"Multiplayer Position Rearrangement","description":"Randomly relocate all selected targets among each other, ensuring none remain in their original position.","frontmatter":{"title":"Multiplayer Position Rearrangement","category":"Useful Creations","mentions":["BedrockCommands","zheaEvyline","jeanmajid"],"tags":["function"],"description":"Randomly relocate all selected targets among each other, ensuring none remain in their original position."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Steps Involved in This Method","slug":"steps-involved-in-this-method","link":"#steps-involved-in-this-method","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]},{"level":2,"title":"Folder Structure","slug":"folder-structure","link":"#folder-structure","children":[]},{"level":2,"title":"Download Function Pack","slug":"download-function-pack","link":"#download-function-pack","children":[]}],"relativePath":"commands/rearrange-positions.md","filePath":"commands/rearrange-positions.md"}'),k={name:"commands/rearrange-positions.md"};function m(b,s,g,y,f,w){const e=o("CodeHeader"),r=o("FolderView"),p=o("Card");return u(),c("div",null,[s[7]||(s[7]=i('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced by the Bedrock Commands Community (BCC) Discord</a></p><p>Multiplayer Position Rearrangement function, or more accurately Multiplayer Position Derangement function, created by @ZheaEvyline, allows you to randomly relocate all selected targets among each other, ensuring no target remains in its original position.</p><p>A derangement is a permutation of &#39;N&#39; elements where no element appears in its original position.</p><p>For example, if Player1 was at <code>(0, 0, 1)</code>, Player2 at <code>(0, 0, 2)</code>, and Player3 at <code>(0, 0, 3)</code>, Player1 can only be relocated to <code>(0, 0, 2)</code>, or <code>(0, 0, 3)</code>. The same rule applies to all other players.</p><br><p><strong>Key Features of this Function Pack:</strong></p><ol><li>Guaranteed derangement in a single game-tick.</li><li>Minimal number of iterations (repetitions/loops).</li><li>Cross Dimensional Compatibility.</li></ol><p>This function pack is designed to support an unlimited number of targets. However, due to Bedrock limitations, it will halt once the <code>10,000</code> function execution limit is reached.</p><p>For instance, deranging the positions of 100 targets requires only 4-6 iterations, with 7 commands executed during initialization and 9 per iteration. This totals approximately 60 commands, significantly below the function limit.</p><br><p>The number of iterations increases proportionally with the number of elements.</p><p>For reference, here is the number of derangements possible for elements ranging from 1 to 10:</p><table tabindex="0"><thead><tr><th>Number of Elements (N)</th><th>Number of Derangements Possible (D(N))</th></tr></thead><tbody><tr><td>1</td><td>0</td></tr><tr><td>2</td><td>1</td></tr><tr><td>3</td><td>2</td></tr><tr><td>4</td><td>9</td></tr><tr><td>5</td><td>44</td></tr><tr><td>6</td><td>265</td></tr><tr><td>7</td><td>1,854</td></tr><tr><td>8</td><td>14,833</td></tr><tr><td>9</td><td>133,496</td></tr><tr><td>10</td><td>1,334,961</td></tr></tbody></table><p>The number of derangement possibilities increases rapidly as the number of elements grows.</p><h2 id="steps-involved-in-this-method" tabindex="-1">Steps Involved in This Method <a class="header-anchor" href="#steps-involved-in-this-method" aria-label="Permalink to &quot;Steps Involved in This Method&quot;">​</a></h2><ol><li>Relocate each target to the position of a random one (other than its original position).</li><li>If multiple targets are relocated to the same position, assign it to one of them and repeat the process for the remaining targets.</li><li>If final target is left with no available position except its original, relocate the target in it&#39;s current position to it&#39;s original position, assigning the now freed position to the final target.</li></ol><p><strong>Example Visualization:</strong></p><p><img src="'+h+'" alt="Position of Five Players Being Deranged"></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><p>An ID system is required to index the position of all targets from 1 to N, allowing us to track the original position of each target. We will run this file in the <code>tick.json</code> to automatically assign the IDs.</p>',21)),a(e,null,{default:t(()=>s[0]||(s[0]=[n("BP/functions/wiki/scoreboard/players/id.mcfunction")])),_:1}),s[8]||(s[8]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Register New Players to ID Objective</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add @a wiki:id 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Create New ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if entity @a[scores={wiki:id=0}] run scoreboard players add .Total wiki:id 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Assign the New ID</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation @r[scores={wiki:id=0}] wiki:id = .Total wiki:id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><br><p>This is the function you run (once) each time you need to derange the positions of all targets:</p><ul><li><code>/function wiki/derange_position/initiate</code></li></ul>`,4)),a(e,null,{default:t(()=>s[1]||(s[1]=[n("BP/functions/wiki/derange_position/initiate.mcfunction")])),_:1}),s[9]||(s[9]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Summon Position Marker</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute at @a run summon armor_stand &quot;wiki:position_marker&quot; ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Save Original Position to Ignore</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s run scoreboard players operation @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,r=0.01,c=1] wiki:id = @s wiki:id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Initiate Position Derangement Process for All Targets</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">function wiki/derange_position/process</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Run Process One Last Time if Final Player Has a Valid Position Available</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score .Players.NotAllocated wiki:count matches 1 unless score @a[tag=!wiki:pos.allocated,c=1] wiki:id = @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,c=1] wiki:id run function wiki/derange_position/process</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Resolve Collision if Final Player Has No Valid Position Available</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### relocate the allocated player to their colliding player&#39;s original position to free their position for the colliding player</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a[tag=!wiki:pos.allocated] at @s run tp @r[tag=wiki:pos.allocated,r=0.01] @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,c=1]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### remove colliding player&#39;s position marker and tag</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kill @e[type=armor_stand,name=&quot;wiki:position_marker&quot;]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag @a[tag=wiki:pos.allocated] remove wiki:pos.allocated</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>In case a single target is left with no available position except its original, the final 3 commands will resolve the collision. We call it a collision because when this occurs, the target will be at the allocated position of another target.</p><br><p>The actual randomized derangement process will be performed by this function below:</p>`,4)),a(e,null,{default:t(()=>s[2]||(s[2]=[n("BP/functions/wiki/derange_position/process.mcfunction")])),_:1}),s[10]||(s[10]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Move to a Different Position</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a[tag=!wiki:pos.allocated] at @s run function wiki/derange_position/teleport</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## If Returned to Original Position: Move Again</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a[tag=!wiki:pos.allocated] at @s if score @s wiki:id = @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,r=0.01,c=1] wiki:id run function wiki/derange_position/teleport</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add Tag to Ignore Players with a Position Allocated</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e[type=armor_stand,name=&quot;wiki:position_marker&quot;] at @s run tag @a[tag=!wiki:pos.allocated,r=0.01,c=1] add wiki:pos.allocated</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Remove Allocated Position Markers</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a[tag=wiki:pos.allocated] at @s run kill @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,r=0.01,c=1]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ENTITY COUNTER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Get Player Count of Players Without a Position Allocated</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players set .Players.NotAllocated wiki:count 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a[tag=!wiki:pos.allocated] run scoreboard players add .Players.NotAllocated wiki:count 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## If 2+ Players Are Not Allocated a Position: Loop Function</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score .Players.NotAllocated wiki:count matches 2.. run function wiki/derange_position/process</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><br><ul><li>❌️ <code>tp @s @r[type=armor_stand,name=&quot;wiki:position_marker&quot;,rm=0.01]</code></li></ul><p>Directly using this command to teleport to a new position only works within the current dimension. Therefore, instead of that, we use the following three-command function for cross-dimensional compatibility:</p>`,4)),a(e,null,{default:t(()=>s[3]||(s[3]=[n("BP/functions/wiki/derange_position/teleport.mcfunction")])),_:1}),s[11]||(s[11]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag @e[type=armor_stand,name=&quot;wiki:position_marker&quot;,r=0.01] add wiki:pos.ignored</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tp @s @r[type=armor_stand,name=&quot;wiki:position_marker&quot;,tag=!wiki:pos.ignored]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag @e remove wiki:pos.ignored</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><br><p>Now, for our functions to actually work, we will need to add the following objectives on our world:</p>`,3)),a(e,null,{default:t(()=>s[4]||(s[4]=[n("BP/functions/scoreboard/objectives/add_all.mcfunction")])),_:1}),s[12]||(s[12]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard objectives add wiki:wiki:id dummy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard objectives add wiki:wiki:count dummy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><p>If you wish to add the objectives automatically as soon as you load the world, you may create the function file below:</p>`,3)),a(e,null,{default:t(()=>s[5]||(s[5]=[n("BP/functions/event/worlds/on_initialise.mcfunction")])),_:1}),s[13]||(s[13]=i(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Initialisation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Add objective</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard objectives add wiki:world dummy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Register to objective</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add .Initialised wiki:world 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Commands to Execute</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score .Initialised wiki:world matches 0 run function wiki/scoreboard/objectives/add_all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark As Initialised</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players set .Initialised wiki:world 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-label="Permalink to &quot;Tick JSON&quot;">​</a></h2><p>Finally, create your <code>tick.json</code> file:</p>`,3)),a(e,null,{default:t(()=>s[6]||(s[6]=[n("BP/functions/tick.json")])),_:1}),s[14]||(s[14]=i(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;values&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;wiki/event/worlds/on_initialise&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;wiki/scoreboard/players/id&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2>`,2)),a(r,{paths:["BP","BP/functions","BP/manifest.json","BP/pack_icon.png","BP/functions/wiki","BP/functions/wiki/scoreboard","BP/functions/wiki/scoreboard/players","BP/functions/wiki/scoreboard/players/id.mcfunction","BP/functions/wiki/scoreboard/objectives","BP/functions/wiki/scoreboard/objectives/add_all.mcfunction","BP/functions/wiki/event","BP/functions/wiki/event/worlds","BP/functions/wiki/event/worlds/on_initialise.mcfunction","BP/functions/wiki/derange_position","BP/functions/wiki/derange_position/initiate.mcfunction","BP/functions/wiki/derange_position/process.mcfunction","BP/functions/wiki/derange_position/teleport.mcfunction","BP/functions/tick.json"]}),s[15]||(s[15]=l("h2",{id:"download-function-pack",tabindex:"-1"},[n("Download Function Pack "),l("a",{class:"header-anchor",href:"#download-function-pack","aria-label":'Permalink to "Download Function Pack"'},"​")],-1)),s[16]||(s[16]=l("p",null,[n("For convenience, you can download the "),l("code",null,".mcpack"),n(" for the Function Pack here:")],-1)),a(p,{image:"/assets/images/commands/BClogo.png",title:"Download",link:"https://github.com/BedrockCommands/developer-packs/releases/download/mpd/Multiplayer_Position_Derangement.FP.mcpack"}),s[17]||(s[17]=i('<p>Simply activate the pack on your world and run once (each time you need) the following command in multiplayer:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/function wiki/derange_position/initiate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2))])}const F=d(k,[["render",m]]);export{v as __pageData,F as default};
