import{_ as a,c as o,a as t,w as i,e as n,r as s,o as r,d as c}from"./404.md.25b6a67d.js";const y='{"title":"Addons Explained","description":"","frontmatter":{"title":"Addons Explained","category":"Guide","nav_order":2,"prefix":"2. "},"headers":[{"level":2,"title":"What are addons?","slug":"what-are-addons"},{"level":2,"title":"Behavior Pack Vs. Resource Pack","slug":"behavior-pack-vs-resource-pack"},{"level":3,"title":"Resource Pack","slug":"resource-pack"},{"level":3,"title":"Behavior Pack","slug":"behavior-pack"},{"level":3,"title":"Communication between packs","slug":"communication-between-packs"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"},{"level":2,"title":"What to do now?","slug":"what-to-do-now"}],"relativePath":"guide/addons.md"}',d={},l=n('<h2 id="what-are-addons" tabindex="-1">What are addons? <a class="header-anchor" href="#what-are-addons" aria-hidden="true">#</a></h2><p>Addons allow us to modify the contents of our Minecraft Experience by <em>modifying</em> or <em>removing</em> existing content and <em>adding</em> our own. Addons are very powerful and allow us to create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!</p><p>Addons are primarily written in <a href="./understanding-json.html">json</a>, which is a structured data-format. An addon is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.</p><h2 id="behavior-pack-vs-resource-pack" tabindex="-1">Behavior Pack Vs. Resource Pack <a class="header-anchor" href="#behavior-pack-vs-resource-pack" aria-hidden="true">#</a></h2><p>Addons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an <em>addon</em>.</p><h3 id="resource-pack" tabindex="-1">Resource Pack <a class="header-anchor" href="#resource-pack" aria-hidden="true">#</a></h3><p>The Resource Pack, also known as the <em>client</em>, or RP, is responsible for the <em>visuals</em> and <em>sounds</em> in your addon. This includes things like:</p><ul><li>Textures</li><li>Sounds</li><li>Geometry</li><li>Animations</li><li>Particles</li></ul><h3 id="behavior-pack" tabindex="-1">Behavior Pack <a class="header-anchor" href="#behavior-pack" aria-hidden="true">#</a></h3><p>The Behavior Pack, also known as the <em>server</em>, or BP, is responsible for the <em>logic</em> of your addon. This can include things like:</p><ul><li>How your entity acts</li><li>Crafting recipes</li><li>Loot tables</li><li>Custom functions</li></ul><h3 id="communication-between-packs" tabindex="-1">Communication between packs <a class="header-anchor" href="#communication-between-packs" aria-hidden="true">#</a></h3><p>In most cases, you will have both a RP and a BP together. These packs can communicate with each other, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:</p><ul><li>An RP entity definition, which describes how your entity will <em>look</em></li><li>A BP entity definition, which describes how your entity will <em>act</em></li></ul><h2 id="what-you-have-learned" tabindex="-1">What you have learned <a class="header-anchor" href="#what-you-have-learned" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned:</p><ul><li>Addons modify Minecraft content or add their own</li><li>Addons are written in json</li><li>An addon is split into the <strong>Resource Pack</strong> and the <strong>Behavior Pack</strong>: - Resource Packs contain Textures, Sounds, ... and control how the game looks - Behavior Packs contain entity-files, crafting recipes, ... and control the logic of your game</li></ul></div><h2 id="what-to-do-now" tabindex="-1">What to do now? <a class="header-anchor" href="#what-to-do-now" aria-hidden="true">#</a></h2>',17),h=c("Check out software and preparation page!");function u(m,p,k,w,f,v){const e=s("BButton");return r(),o("div",null,[l,t(e,{link:"/guide/software-preparation.html",color:"blue"},{default:i(()=>[h]),_:1})])}var b=a(d,[["render",u]]);export{y as __pageData,b as default};
