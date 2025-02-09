import{_ as s}from"./chunks/content_log.yaaDNY1u.js";import{_ as r,E as l,j as d,k as c,a5 as u,A as n,l as t,I as i,J as o}from"./chunks/framework.3Z9w-w8R.js";const T=JSON.parse('{"title":"Troubleshooting","description":"A simple troubleshooting guide","frontmatter":{"title":"Troubleshooting","category":"Extra","description":"A simple troubleshooting guide","prefix":"c. ","nav_order":3,"tags":["help"],"mentions":["SirLich","Joelant05","destruc7ion","Dreamedc2015","MedicalJewel105","Luthorius","SmokeyStack"]},"headers":[{"level":2,"title":"Reload","slug":"reload","link":"#reload","children":[]},{"level":2,"title":"The Environment","slug":"the-environment","link":"#the-environment","children":[]},{"level":2,"title":"Content Log","slug":"content-log","link":"#content-log","children":[{"level":3,"title":"Content Log File","slug":"content-log-file","link":"#content-log-file","children":[]}]},{"level":2,"title":"Using Vanilla Resources","slug":"using-vanilla-resources","link":"#using-vanilla-resources","children":[]},{"level":2,"title":"JSON-Schemas","slug":"json-schemas","link":"#json-schemas","children":[]},{"level":2,"title":"Troubleshooting Your Add-On","slug":"troubleshooting-your-add-on","link":"#troubleshooting-your-add-on","children":[{"level":3,"title":"Entities","slug":"entities","link":"#entities","children":[]},{"level":3,"title":"Items","slug":"items","link":"#items","children":[]},{"level":3,"title":"Blocks","slug":"blocks","link":"#blocks","children":[]}]}],"relativePath":"guide/troubleshooting.md","filePath":"guide/troubleshooting.md"}'),h={name:"guide/troubleshooting.md"};function g(m,e,p,b,f,k){const a=l("Button");return c(),d("div",null,[e[3]||(e[3]=u('<p>Creating Add-Ons for Bedrock Minecraft is a relatively straightforward process <em>once you get the hang of it</em>. The first time is usually a frustrating, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.</p><p>Please read the whole page, before jumping into troubleshooting tips for a specific domain.</p><h2 id="reload" tabindex="-1">Reload <a class="header-anchor" href="#reload" aria-label="Permalink to &quot;Reload&quot;">​</a></h2><p>First, you should always reload Minecraft. That means fully closing the game and then reopening it. This can catch many errors, especially those related to assets that are accessed via a filepath, such as textures or loot tables.</p><h2 id="the-environment" tabindex="-1">The Environment <a class="header-anchor" href="#the-environment" aria-label="Permalink to &quot;The Environment&quot;">​</a></h2><p>The best way to prevent nasty bugs is by working in the right environment. You should review the <a href="/guide/software-preparation">software preparation document</a> for editor recommendations. The most important part is getting a JSON-linter, (<a href="https://jsonlint.com/" target="_blank" rel="noreferrer">or using an online json-linter</a>), and storing your packs in <code>development_behavior_packs</code> and <code>development_resource_packs</code>.</p><p>If you have your add-ons in the normal folders, you can run into &quot;pack caching&quot; issues, where you edit the files in one location, but the game is still using the old files.</p><h2 id="content-log" tabindex="-1">Content Log <a class="header-anchor" href="#content-log" aria-label="Permalink to &quot;Content Log&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Use the Content Log!</p><p>Content log is the best tool you have for debugging your add-ons. Please don&#39;t skip this step!</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Errors are not cleared between runs, so the errors you see in the content log may be <em>old</em> errors from prior runs.</p></div><p>The &#39;Content Log&#39; is a list of issues found in your pack. Minecraft will generate this list every time your load your world. It can catch issues such as: - Wrong texture path - Wrong spelled component - Incorrect json structure</p><p>Content log can be turned on in in <code>Settings &gt; Creator</code>. The content log will show in-game on load up, and if more errors occur during gameplay.</p><p><img src="'+s+'" alt=""></p><h3 id="content-log-file" tabindex="-1">Content Log File <a class="header-anchor" href="#content-log-file" aria-label="Permalink to &quot;Content Log File&quot;">​</a></h3><p>The content log is saved in <code>.txt</code> format inside your files:</p><ul><li><em>Windows</em>: <code>C:\\Users\\USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\logs</code></li><li><em>Android:</em> <code>/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs</code></li></ul><h2 id="using-vanilla-resources" tabindex="-1">Using Vanilla Resources <a class="header-anchor" href="#using-vanilla-resources" aria-label="Permalink to &quot;Using Vanilla Resources&quot;">​</a></h2><p>You should download the vanilla resource and behavior pack. You can find the vanilla resource and behavior pack <a href="https://www.minecraft.net/en-us/addons/" target="_blank" rel="noreferrer">here</a>. You can compare against the vanilla files if you have any issues!</p><h2 id="json-schemas" tabindex="-1">JSON-Schemas <a class="header-anchor" href="#json-schemas" aria-label="Permalink to &quot;JSON-Schemas&quot;">​</a></h2><p>JSON-Schemas are a valuable tool for file validation. You can learn more about JSON-Schemas <a href="/meta/using-schemas">here</a>.</p><h2 id="troubleshooting-your-add-on" tabindex="-1">Troubleshooting Your Add-On <a class="header-anchor" href="#troubleshooting-your-add-on" aria-label="Permalink to &quot;Troubleshooting Your Add-On&quot;">​</a></h2><h3 id="entities" tabindex="-1">Entities <a class="header-anchor" href="#entities" aria-label="Permalink to &quot;Entities&quot;">​</a></h3>',22)),n(a,{link:"/entities/troubleshooting-entities"},{default:i(()=>e[0]||(e[0]=[o("Troubleshoot your entities.")])),_:1}),e[4]||(e[4]=t("h3",{id:"items",tabindex:"-1"},[o("Items "),t("a",{class:"header-anchor",href:"#items","aria-label":'Permalink to "Items"'},"​")],-1)),n(a,{link:"/items/troubleshooting-items"},{default:i(()=>e[1]||(e[1]=[o("Troubleshoot your items.")])),_:1}),e[5]||(e[5]=t("h3",{id:"blocks",tabindex:"-1"},[o("Blocks "),t("a",{class:"header-anchor",href:"#blocks","aria-label":'Permalink to "Blocks"'},"​")],-1)),n(a,{link:"/blocks/troubleshooting-blocks"},{default:i(()=>e[2]||(e[2]=[o("Troubleshoot your blocks.")])),_:1})])}const _=r(h,[["render",g]]);export{T as __pageData,_ as default};
