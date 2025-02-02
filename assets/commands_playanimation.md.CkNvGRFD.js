import{_ as t,e as o,t as n,f as a,Q as i,E as s,d as l,D as r}from"./chunks/framework.CuLWBCQE.js";const W=JSON.parse(`{"title":"Playanimation","description":"Understanding the playanimation command.","frontmatter":{"title":"Playanimation","category":"Commands","mentions":["Pipi_Spamton","zheaEvyline"],"description":"Understanding the playanimation command."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Animation Controller","slug":"animation-controller","link":"#animation-controller","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":3,"title":"Storage and Removal","slug":"storage-and-removal","link":"#storage-and-removal","children":[]}]},{"level":2,"title":"Stacking Animations","slug":"stacking-animations","link":"#stacking-animations","children":[{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]},{"level":3,"title":"Removing Stacked Animations","slug":"removing-stacked-animations","link":"#removing-stacked-animations","children":[]},{"level":3,"title":"Potential Issues","slug":"potential-issues","link":"#potential-issues","children":[]},{"level":3,"title":"Bad Usage Examples","slug":"bad-usage-examples","link":"#bad-usage-examples","children":[]}]},{"level":2,"title":"Custom Animations","slug":"custom-animations","link":"#custom-animations","children":[{"level":3,"title":"Example: Editing the Parrot's Animation","slug":"example-editing-the-parrot-s-animation","link":"#example-editing-the-parrot-s-animation","children":[]},{"level":3,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]},{"level":3,"title":"Checking Vanilla Animations","slug":"checking-vanilla-animations","link":"#checking-vanilla-animations","children":[]},{"level":3,"title":"Molang Basics","slug":"molang-basics","link":"#molang-basics","children":[]}]},{"level":2,"title":"List of Useful Playanimation Commands","slug":"list-of-useful-playanimation-commands","link":"#list-of-useful-playanimation-commands","children":[{"level":3,"title":"Body Animations","slug":"body-animations","link":"#body-animations","children":[]},{"level":3,"title":"Root Animations","slug":"root-animations","link":"#root-animations","children":[]},{"level":3,"title":"Head Animations","slug":"head-animations","link":"#head-animations","children":[]}]}],"relativePath":"commands/playanimation.md","filePath":"commands/playanimation.md"}`),d={name:"commands/playanimation.md"},p=i('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/xFZH6QJfSB" target="_blank" rel="noreferrer">Sourced by the Japanese Commands Community Discord</a></p><p>In Bedrock, the <code>/playanimation</code> command allows entities to play animations. You can stack multiple animations or even customize them.</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h2><p><code>/playanimation &lt;entity: target&gt; &lt;animation: string&gt; [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]</code></p><p><strong>Definitions:</strong></p><p><code>&lt;&gt;</code> Angle brackets mean the variable is required.<br><code>[]</code> Square brackets mean the variable is optional.</p><ul><li><code>&lt;entity: target&gt;</code> Specifies the entity that will play the animation.</li><li><code>&lt;animation: string&gt;</code> Specifies the animation to be played.</li><li><code>[next_state: string]</code> Specifies which animation to transition to when the current animation&#39;s end conditions are met.</li><li><code>[blend_out_time: float]</code> Sets the time for transitioning between animations.</li><li><code>[stop_expression: string]</code> Defines the end condition. This must be written in Molang.</li><li><code>[controller: string]</code> Accesses and defines the animation controller.</li></ul><p><strong>Example:</strong></p>',9),c=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.riding.legs none 0 &quot;query.is_moving&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command plays the <code>animation.player.riding.legs</code> animation (which represents a player&#39;s leg movement while sitting) for all players. When <code>query.is_moving</code> (indicating movement) becomes true, it transitions to the animation <code>none</code> in 0 seconds.</p><p>Since the animation <code>none</code> does not exist, the entity returns to an idle state, effectively canceling the animation.</p><p>If the animation belongs to the entity itself, the <code>animation.entity.</code> part can be omitted.<br> For example, to play <code>animation.player.attack.positions</code> for a player, you can simply enter <code>attack.positions</code> instead of <code>animation.player.attack.positions</code>.</p><h2 id="animation-controller" tabindex="-1">Animation Controller <a class="header-anchor" href="#animation-controller" aria-label="Permalink to &quot;Animation Controller&quot;">​</a></h2><p>An animation controller determines which animations play under specific conditions.<br> If an existing animation controller is accessed, it will be overwritten.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3>',7),h=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @e[type=allay] animation.player.attack.positions none &quot;1&quot; controller.animation.allay.dancing</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Executing this command on an Allay prevents it from dancing when music plays.<br> This happens because the original animation controller, which made it dance when music played, is replaced with a new controller that does nothing.<br> (Any animation could be used here, but <code>attack.positions</code> was chosen since it has no effect.)</p><p>If a non-existent animation controller is specified, it will be registered as a new one:</p>',3),m=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.ender_dragon.neck_head_movement animation.piglin.celebrate_hunt_special 0 &quot;v.head_position_y=0;v.head_rotation_y=q.life_time*1000;return !q.is_sneaking;&quot; wiki:head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),u=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.piglin.celebrate_hunt_special animation.ender_dragon.neck_head_movement 0 &quot;v.head_position_y=0;v.head_rotation_y=q.target_y_rotation;return q.is_sneaking;&quot; wiki:head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>These commands register a new animation controller that:</p><ul><li>Rotates the player&#39;s head when sneaking.</li><li>Plays a dancing animation when not sneaking.</li></ul><div class="info custom-block"><p class="custom-block-title">NOTE:</p><p>If executed repeatedly, the animation may flicker due to a mismatch in animation transition timing (a 1-frame delay is needed).</p></div><p>The left-side animation transitions to the right-side animation when conditions are met. This can be extended with more transitions. However, transitions only apply within the same animation controller.</p><p>For example, if the above commands are active and another animation controller (<code>wiki:head.2</code>, etc.) plays <code>animation.piglin.celebrate_hunt_special</code>, it won’t affect transitions to <code>animation.ender_dragon.neck_head_movement</code>.</p><h3 id="storage-and-removal" tabindex="-1">Storage and Removal <a class="header-anchor" href="#storage-and-removal" aria-label="Permalink to &quot;Storage and Removal&quot;">​</a></h3><ul><li>Animation controllers are stored on the client-side entity.</li><li>They <strong>cannot</strong> be removed using commands.</li><li>Custom animation controllers reset when leaving the world or sending the affected entity far away.</li></ul><h2 id="stacking-animations" tabindex="-1">Stacking Animations <a class="header-anchor" href="#stacking-animations" aria-label="Permalink to &quot;Stacking Animations&quot;">​</a></h2><p>Each animation controller can play only one animation at a time. By using multiple animation controllers, you can play multiple animations simultaneously.</p><h3 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h3>',11),g=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.riding.legs none 0 &quot;0&quot; wiki:rideleg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command overlays the <strong>riding legs</strong> animation with the <strong>pigling dance</strong> animation:</p>',2),_=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.piglin.celebrate_hunt_special none 0 &quot;0&quot; wiki:dance</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Here, <code>wiki:rideleg</code> and <code>wiki:dance</code> are used as controller names, but any name like <code>&quot;a&quot;</code> or <code>&quot;b&quot;</code> is also valid. However, you <strong>cannot</strong> use the same name for multiple controllers (e.g., both as <code>&quot;a&quot;</code>).</p><h3 id="removing-stacked-animations" tabindex="-1">Removing Stacked Animations <a class="header-anchor" href="#removing-stacked-animations" aria-label="Permalink to &quot;Removing Stacked Animations&quot;">​</a></h3><p>To remove the above animations, you must <strong>overwrite</strong> the animation controller states:</p>',4),k=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.attack.positions none 0 &quot;1&quot; wiki:rideleg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),b=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.attack.positions none 0 &quot;1&quot; wiki:dance</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>The <strong><code>animation.player.attack.positions</code></strong> animation (which does nothing) is played.</li><li>The condition <code>1</code> (true) forces a transition to <code>none</code>.</li><li>Since <code>none</code> does not exist, the animation is canceled.</li></ol><p><strong>Why Not Directly Use <code>none</code> as the Animation?</strong></p><ul><li>You can <strong>transition</strong> to <code>none</code>, but you <strong>cannot</strong> directly set <code>none</code> as the animation.</li><li>The animation name must be valid; otherwise, the command might not work properly.</li></ul><h3 id="potential-issues" tabindex="-1">Potential Issues <a class="header-anchor" href="#potential-issues" aria-label="Permalink to &quot;Potential Issues&quot;">​</a></h3><ul><li>This method <strong>adds</strong> a rule that transitions <code>attack.positions</code> to <code>none</code>.</li><li>If any other animation already transitions to <code>attack.positions</code>, <strong>unexpected behavior</strong> may occur.</li></ul><h3 id="bad-usage-examples" tabindex="-1">Bad Usage Examples <a class="header-anchor" href="#bad-usage-examples" aria-label="Permalink to &quot;Bad Usage Examples&quot;">​</a></h3>',7),y=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.ender_dragon.neck_head_movement attack.positions 0 &quot;v.head_position_y=0;v.head_rotation_y=q.life_time*1000;return !q.is_sneaking;&quot; wiki:head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),v=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a attack.positions animation.ender_dragon.neck_head_movement 0 &quot;v.head_position_y=0;v.head_rotation_y=q.target_y_rotation;return q.is_sneaking;&quot; wiki:head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This makes the head rotate <strong>only while sneaking</strong>. However, if you then execute:</p>',2),E=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">playanimation @e[tag=main] attack.positions none 0 &quot;1&quot; wiki:head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>When you stop sneaking, the animation transitions to <code>attack.positions</code>.</li><li>Since <code>attack.positions</code> is now playing, it transitions to <code>none</code>.</li><li><code>attack.positions</code> is no longer active, so sneaking <strong>no longer triggers</strong> <code>animation.ender_dragon.neck_head_movement</code>.</li></ul><p><strong>Fixing This Issue:</strong></p><p>Instead of transitioning to <code>attack.positions</code>, transition to a <strong>different</strong> animation that does nothing.</p><h2 id="custom-animations" tabindex="-1">Custom Animations <a class="header-anchor" href="#custom-animations" aria-label="Permalink to &quot;Custom Animations&quot;">​</a></h2><ul><li>You can customize animations by modifying their <strong>variables</strong>.</li><li>Some animations have elements like <strong>angles and positions</strong> controlled by <code>variable</code>.</li><li>Minecraft uses its own scripting language, <strong>Molang</strong>, to define <strong>stop conditions</strong>—but you can also use Molang to <strong>change <code>variable</code> values</strong> dynamically.</li></ul><h3 id="example-editing-the-parrot-s-animation" tabindex="-1">Example: Editing the Parrot&#39;s Animation <a class="header-anchor" href="#example-editing-the-parrot-s-animation" aria-label="Permalink to &quot;Example: Editing the Parrot&#39;s Animation&quot;">​</a></h3><p>This is part of the <code>animation.parrot.moving</code> JSON file:</p>',8),C=i(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;animation.parrot.moving&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;loop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;bones&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;position&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;variable.wing_flap * 0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;tail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;rotation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;60.0 + math.cos(query.anim_time * 38.17) * 17.0 - this&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;wing0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;rotation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-5.0 - variable.wing_flap * 57.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;wing1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;rotation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5.0 + variable.wing_flap * 57.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li><strong>Bones</strong>: <code>&quot;body&quot;</code>, <code>&quot;tail&quot;</code>, <code>&quot;wing0&quot;</code>, and <code>&quot;wing1&quot;</code> are different body parts.</li><li>The <code>body</code> has a <code>y</code>-position controlled by <strong><code>variable.wing_flap</code></strong>.</li></ul><p>Now, let&#39;s <strong>modify the parrot&#39;s body position</strong> using this command:</p>`,3),T=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.parrot.moving none 0 &quot;variable.wing_flap=10;&quot; wiki:body.ypos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This moves the parrot’s <strong>body upwards</strong>.</p><ul><li>Setting <code>wing_flap=30</code> moves it even <strong>higher</strong>.</li><li>Setting <code>wing_flap=-10</code> moves it <strong>downwards</strong>.</li></ul><p><strong>Shortened Syntax:</strong></p><p>You can <strong>shorten <code>variable</code> to <code>v</code></strong>:</p>',5),f=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.parrot.moving none 0 &quot;v.wing_flap=10;&quot; wiki:body_ypos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>variable.wing_flap</code> <strong>and</strong> <code>v.wing_flap</code> <strong>are the same</strong>.</p><h3 id="limitations" tabindex="-1">Limitations <a class="header-anchor" href="#limitations" aria-label="Permalink to &quot;Limitations&quot;">​</a></h3>',3),q=a("li",null,[a("p",null,[a("strong",null,[s("Only animations with "),a("code",null,"variable"),s(" can be customized.")])]),a("ul",null,[a("li",null,[s("If an animation "),a("strong",null,"doesn’t"),s(" use "),a("code",null,"variable"),s(", you "),a("strong",null,"can’t modify"),s(" it.")])])],-1),x=a("p",null,[a("strong",null,"Default entity variables reset on each execution.")],-1),F=a("ul",null,[a("li",null,"If you loop the command:")],-1),w=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.attack.rotations none 0 &quot;v.attack_body_rot_y=90;&quot; wiki:body.yrot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>Flickering occurs</strong> because <code>v.attack_body_rot_y</code> <strong>resets each frame</strong> before being reassigned.</li></ul>',2),A=i('<p><strong>Fixing Flickering:</strong></p><ul><li><strong>Use a delay</strong> between commands.</li><li><strong>Trigger it once</strong> using tags or conditions.</li></ul><h3 id="checking-vanilla-animations" tabindex="-1">Checking Vanilla Animations <a class="header-anchor" href="#checking-vanilla-animations" aria-label="Permalink to &quot;Checking Vanilla Animations&quot;">​</a></h3><p>You can view <strong>Vanilla Minecraft animation</strong> files here:<br><a href="https://github.com/Mojang/bedrock-samples/tree/v1.21.0.3/resource_pack/animations" target="_blank" rel="noreferrer">Bedrock Samples - Animation Files</a></p><h3 id="molang-basics" tabindex="-1">Molang Basics <a class="header-anchor" href="#molang-basics" aria-label="Permalink to &quot;Molang Basics&quot;">​</a></h3><p>Molang is Minecraft&#39;s scripting language used to control animations, conditions, and expressions.</p><ul><li><code>variable</code> can be shortened to <strong><code>v</code></strong></li><li><code>query</code> can be shortened to <strong><code>q</code></strong></li></ul><p><strong>Reference for Molang:</strong></p><p>For a detailed guide, visit: <a href="https://bedrock.dev/docs/stable/Molang" target="_blank" rel="noreferrer">Bedrock.dev - Molang Documentation</a></p><h2 id="list-of-useful-playanimation-commands" tabindex="-1">List of Useful Playanimation Commands <a class="header-anchor" href="#list-of-useful-playanimation-commands" aria-label="Permalink to &quot;List of Useful Playanimation Commands&quot;">​</a></h2><ul><li>These commands can be applied to players and most other entities.</li><li>All variables are initialized as zero in the examples but can be adjusted as needed.</li><li>Some commands use multiple variables. You can add or remove variables based on your requirements.</li><li>Controller names (e.g., <code>wiki:body_yrot</code>) enable stacking animations without overwriting previous ones. <ul><li>You are free to change the namespace (<code>wiki</code>) or the controller names to your liking.</li></ul></li></ul><h3 id="body-animations" tabindex="-1">Body Animations <a class="header-anchor" href="#body-animations" aria-label="Permalink to &quot;Body Animations&quot;">​</a></h3>',12),S=a("p",null,"Rotate the body of the entity along the Y-axis (excluding limbs and head):",-1),P=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.player.attack.rotations none 0 &quot;v.attack_body_rot_y=0;&quot; wiki:body_yrot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),B=a("p",null,"Rotate the body of the entity along the Z-axis (excluding limbs and head):",-1),I=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.wolf.shaking none 0 &quot;v.body_rot_z=0;&quot; wiki:body_zrot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),V=a("h3",{id:"root-animations",tabindex:"-1"},[s("Root Animations "),a("a",{class:"header-anchor",href:"#root-animations","aria-label":'Permalink to "Root Animations"'},"​")],-1),R=a("p",null,"Rotate the entire entity along the X-axis and Z-axis:",-1),N=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.ender_dragon.setup none 0 &quot;v.clamped_pitch=0;v.clamped_roll=0;&quot; wiki:root_xrot_yrot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>clamped_pitch</code> — rotate the entire entity along the X-axis.</li><li><code>clamped_roll</code> — rotate the entire entity along the Z-axis.</li></ul>',2),D=a("p",null,"Offset the entire entity's position along the X, Y, and Z axes:",-1),z=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.minecart.move none 0 &quot;v.rail_offset.x=0;v.rail_offset.y=0;v.rail_offset.z=0;&quot; wiki:root_pos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>rail_offset.x</code> — offset the entire entity along the X-axis.</li><li><code>rail_offset.y</code> — offset the entire entity along the Y-axis.</li><li><code>rail_offset.z</code> — offset the entire entity along the Z-axis.</li></ul>',2),M=a("h3",{id:"head-animations",tabindex:"-1"},[s("Head Animations "),a("a",{class:"header-anchor",href:"#head-animations","aria-label":'Permalink to "Head Animations"'},"​")],-1),Y=a("p",null,"Offset or rotate the entity's head:",-1),H=i('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/playanimation @a animation.ender_dragon.neck_head_movement none 0 &quot;v.head_position_x=0;v.head_position_y=0;v.head_position_z=0;v.head_rotation_x=0;v.head_rotation_y=0;v.head_rotation_z=0;&quot; wiki:head_pos_rot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>head_position_x</code> — offset the entity&#39;s head along the X-axis.</li><li><code>head_position_y</code> — offset the entity&#39;s head along the Y-axis.</li><li><code>head_position_z</code> — offset the entity&#39;s head along the Z-axis.</li><li><code>head_rotation_x</code> — rotate the entity&#39;s head along the X-axis.</li><li><code>head_rotation_y</code> — rotate the entity&#39;s head along the Y-axis.</li><li><code>head_rotation_z</code> — rotate the entity&#39;s head along the Z-axis.</li></ul>',2);function U(Z,L,O,X,j,J){const e=r("CodeHeader");return l(),o("div",null,[p,n(e),c,n(e),h,n(e),m,n(e),u,n(e),g,n(e),_,n(e),k,n(e),b,n(e),y,n(e),v,n(e),E,n(e),C,n(e),T,n(e),f,a("ol",null,[q,a("li",null,[x,F,n(e),w])]),A,a("ol",null,[a("li",null,[S,n(e),P]),a("li",null,[B,n(e),I])]),V,a("ol",null,[a("li",null,[R,n(e),N]),a("li",null,[D,n(e),z])]),M,a("ol",null,[a("li",null,[Y,n(e),H])])])}const Q=t(d,[["render",U]]);export{W as __pageData,Q as default};
