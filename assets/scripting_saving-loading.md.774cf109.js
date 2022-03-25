import{_ as e,c as t,o as a,e as i}from"./404.md.25b6a67d.js";const g='{"title":"Saving and Loading Data","description":"","frontmatter":{"title":"Saving and Loading Data","category":"Legacy Scripting","tags":["intermediate","recipe"]},"headers":[{"level":2,"title":"Saving","slug":"saving"},{"level":2,"title":"Loading","slug":"loading"},{"level":2,"title":"Boilerplate Code","slug":"boilerplate-code"}],"relativePath":"scripting/saving-loading.md"}',r={},o=i('<p>Saving and loading data in Bedrock is tricky because scripts cannot access the local file system directly.</p><p>Nonetheless, we can save data by <a href="https://www.youtube.com/watch?v=tjragqkAlMc" target="_blank" rel="noopener noreferrer">tagging</a> a <a href="/entities/dummy-entities.html">dummy entity</a>.</p><p>Read about the <code>executeCommand</code> and the <code>broadcastEvent</code> functions <a href="https://bedrock.dev/docs/stable/Scripting" target="_blank" rel="noopener noreferrer">here</a>.</p><p>Be sure to take note of how to create a custom event.</p><p>We will use <code>executeCommand</code> to create and modify tags - note that this function can only be called in a server script.</p><p>For saving tags, you can either use one tag, a JSON string for all your data, or multiple tags and remember what the order of them means. I go with a single JSON string, so I don&#39;t remember anything as the keys will tell me what the values are for.</p><p>If your data is meant to be displayed to the user, make sure they&#39;ve entered the world first! For example, you could have a listener for <code>&quot;minecraft:client_entered_world&quot;</code></p><p>In Bedrock, we can create or listen to events, but we don&#39;t send events directly to a specific consumer.<br> Just remember to have the listener and broadcast events set up everywhere they need to be. For example, if I want data loaded for the client to handle, I&#39;d do: client -&gt; server -&gt; client</p><p>The client broadcasts an event the server listens for</p><p>AND</p><p>The server broadcasts an event the client listens for, so it can reply</p><h2 id="saving" tabindex="-1">Saving <a class="header-anchor" href="#saving" aria-hidden="true">#</a></h2><ol><li>Add the dummy JSON files from the <a href="/entities/dummy-entities.html">dummy entity tutorial</a> to your behavior and resource packs</li><li>Add a save function to your server script, calling <code>executeCommand</code>. This function will check if the dummy entity is created. If not, it will create it and save to it.</li><li>Add a listener to your server&#39;s initialize function, which will listen to a save event broadcast by your client script. Call your save code here</li><li>broadcast an event in your client to let the server know when we want to save data</li></ol><h2 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h2><ol><li>Add a listener to your server script&#39;s call to initialize. This listener will be for a load request from the client and broadcast the saved data after reading it</li><li>In your client script, you will want to broadcast a load event to let the server know saved data is needed.</li><li>In your client script, add a listener to receive the saved data the server read</li></ol><h2 id="boilerplate-code" tabindex="-1">Boilerplate Code <a class="header-anchor" href="#boilerplate-code" aria-hidden="true">#</a></h2><p>Example code coming soon...</p>',17),n=[o];function s(l,d,c,h,p,u){return a(),t("div",null,n)}var m=e(r,[["render",s]]);export{g as __pageData,m as default};
