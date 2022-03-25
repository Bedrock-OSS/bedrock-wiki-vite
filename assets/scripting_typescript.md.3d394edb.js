import{_ as a,c as r,o as n,e as t,b as e}from"./404.md.25b6a67d.js";var i="/assets/images/scripting/typescript/project-create.gif";const v='{"title":"TypeScript","description":"","frontmatter":{"title":"TypeScript","category":"Legacy Scripting"},"headers":[{"level":2,"title":"How it Works","slug":"how-it-works"},{"level":2,"title":"Prerequisites","slug":"prerequisites"},{"level":2,"title":"TypeScript-Supported Libraries","slug":"typescript-supported-libraries"},{"level":2,"title":"Setup Guide","slug":"setup-guide"},{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Project Structure","slug":"project-structure"},{"level":3,"title":"Commands","slug":"commands"}],"relativePath":"scripting/typescript.md"}',s={},o=t(`<p><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.</p><p>Typescript is very beneficial to use when developing scripts for Minecraft addons. There exist libraries to aid in the development of Minecraft addons to provide intellisense and type-safety for broadcasting and listening to events.</p><h2 id="how-it-works" tabindex="-1">How it Works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><p>TypeScript is a language which requires compilation into JavaScript. Minecraft has no idea what to do with a <code>.ts</code> file. Therefore some tooling needs to be set up in order to utilize TypeScript to build addons.</p><p>First, the TypeScript files need to be compiled into JavaScript, which is all accomplished by utilizing the <a href="https://www.npmjs.com/package/typescript" target="_blank" rel="noopener noreferrer">TypeScript Compiler</a>. Then the files can be utilized by Minecraft&#39;s scripting system.</p><p>Since there is already a build step, we might as well incorporate some other systems to allow for file separation and code sharing between the <code>client</code> and <code>server</code>. Minecraft&#39;s scripting system will only act on the <code>server.js</code> and <code>client.js</code> scripts within their respective folders utilizing what is assumed to be, Mojang&#39;s own JavaScript interpreter. Therefore, any logic split across multiple files must be merged into a single large file. This is where tooling such as <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a> and <a href="https://browserify.org/" target="_blank" rel="noopener noreferrer">browserify</a> come in handy.</p><p>You do not need to know how to utilize these tools since there are already <a href="#typescript-supported-libraries">libraries</a> that utilize them for you without any effort on your behalf. It is just important to understand the tooling making these sorts of libraries possible.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ol><li><a href="/scripting/scripting-intro.html">Beginners Guide Prerequisites</a></li><li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a> is required for installing tooling and compiling TypeScript into JavaScript.</li><li>Knowledge of TypeScript and read through the <a href="/scripting/scripting-intro.html">Beginners Guide</a></li></ol><h2 id="typescript-supported-libraries" tabindex="-1">TypeScript-Supported Libraries <a class="header-anchor" href="#typescript-supported-libraries" aria-hidden="true">#</a></h2><table><thead><tr><th>Author</th><th>Package</th></tr></thead><tbody><tr><td><a href="https://github.com/minecraft-addon-tools" target="_blank" rel="noopener noreferrer">minecraft-addon-tools</a></td><td><a href="https://github.com/minecraft-addon-tools/minecraft-addon-toolchain" target="_blank" rel="noopener noreferrer">minecraft-addon-toolchain</a></td></tr><tr><td><a href="https://github.com/karikera" target="_blank" rel="noopener noreferrer">karikera</a></td><td><a href="https://github.com/karikera/mcaddon-start" target="_blank" rel="noopener noreferrer">minecraft-addon</a></td></tr></tbody></table><h2 id="setup-guide" tabindex="-1">Setup Guide <a class="header-anchor" href="#setup-guide" aria-hidden="true">#</a></h2><p>This guide is for setting up and using the <a href="https://github.com/minecraft-addon-tools/minecraft-addon-toolchain" target="_blank" rel="noopener noreferrer">minecraft-addon-toolchain</a> as it currently provides the most tooling with the easiest setup.</p><h3 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h3><p>Open a terminal (Command Prompt for Windows) and navigate to where the project should be located. It can be anywhere. For Windows 10 you can also <code>Shift + RClick</code> in file explorer and select <code>Open in PowerShell</code>.</p><p>Next we need to install the template generator for creating the addon. To do this, enter the following commands.</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -g yeoman
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -g generator-minecraft-addon
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you receive an error such as <code>command npm not found</code>, ensure you have Node.js installed and added to the PATH.</p></div><p>Now the project can be initialized. The next step is to generate the project with all the information you define.</p><div class="language-bash line-numbers-mode"><pre><code>yo minecraft-addon
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><img src="`+i+'" alt=""></p><p>Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can <code>cd</code> into your project directory and run <code>code .</code> to open your project.</p><h3 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-hidden="true">#</a></h3>',24),l=e("div",{markdown:"0",class:"folder-structure"},[e("ul",null,[e("li",null,[e("span",{class:"folder"},"node_modules")]),e("li",null,[e("span",{class:"folder"},"packs"),e("ul",null,[e("li",null,[e("span",{class:"folder"},[e("a",{href:"/schemas/behavior-folder",target:"__blank"},"behaviors")]),e("ul",null,[e("li",null,[e("span",{class:"file"},"manifest.json")]),e("li",null,[e("span",{class:"image"},"pack_icon.png")]),e("li",null,[e("span",{class:"folder"},"scripts"),e("ul",null,[e("li",null,[e("span",{class:"folder"},"client"),e("ul",null,[e("li",null,[e("span",{class:"file"},"client.ts")])])]),e("li",null,[e("span",{class:"folder"},"server"),e("ul",null,[e("li",null,[e("span",{class:"file"},"server.ts")])])])])])])]),e("li",null,[e("span",{class:"folder"},[e("a",{href:"/schemas/resource-folder",target:"__blank"},"resources")]),e("ul",null,[e("li",null,[e("span",{class:"file"},"manifest.json")]),e("li",null,[e("span",{class:"image"},"pack_icon.png")])])])])]),e("li",null,[e("span",{class:"file"},"gulpfile.js")]),e("li",null,[e("span",{class:"file"},"package-lock.json")]),e("li",null,[e("span",{class:"file"},"package.json")]),e("li",null,[e("span",{class:"file"},"tsconfig.json")])])],-1),c=t(`<p>Unless you know what you are doing, the only part of the project to be concerned with is everything within the <code>packs</code> folder. That is where all the development should take place.</p><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><p>The following commands are most utilized when developing a project using <code>minecraft-addon-toolchain</code>.</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> run installaddon
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>installaddon</code> will, as it says, install the addon into the <code>development</code> resource/behaviors folders. The pack can then be utilized like any other addon.</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> run <span class="token function">watch</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>watch</code> will watch for any changes you make within the <code>packs</code> directory and automatically reinstall the addon.</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> run packageaddon
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>packageaddon</code> will build, package, and zip the addon in a connivent manner. By default, outputs to <code>out/packaged</code> directory.</p>`,9),d=[o,l,c];function p(h,u,g,f,m,b){return n(),r("div",null,d)}var w=a(s,[["render",p]]);export{v as __pageData,w as default};
