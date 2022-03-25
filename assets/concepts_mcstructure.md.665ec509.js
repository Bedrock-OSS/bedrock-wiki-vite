import{_ as e,c as t,o,e as i}from"./404.md.25b6a67d.js";const m='{"title":".mcstructure","description":"","frontmatter":{"title":".mcstructure"},"headers":[{"level":3,"title":"Saving and Loading","slug":"saving-and-loading"},{"level":3,"title":"File Format","slug":"file-format"},{"level":3,"title":"What Happens If...","slug":"what-happens-if"},{"level":2,"title":"NBT Editors","slug":"nbt-editors"}],"relativePath":"concepts/mcstructure.md"}',r={},s=i(`<h3 id="saving-and-loading" tabindex="-1">Saving and Loading <a class="header-anchor" href="#saving-and-loading" aria-hidden="true">#</a></h3><p>The <strong>Export</strong> button creates <code>.mcstructure</code> files in a structure block. The files must be placed in a behavior pack to load them in-game with a load structure block. The path determines the structure identifier, which is typed into the structure block to load the structure.</p><p><strong>Examples:</strong><br><code>BP/structures/house.mcstructure</code> \u2192 <code>mystructure:house</code><br><code>BP/structures/dungeon/entrance.mcstructure</code> \u2192 <code>dungeon:entrance</code><br><code>BP/structures/stuff/towers/diamond.mcstructure</code> \u2192 <code>stuff:towers/diamond</code></p><p>The first subfolder defines the namespace, and subsequent folders define the path, ending with the structure file&#39;s name.</p><p>Note that any files directly in the <code>structures</code> folder are given the <code>mystructure</code> namespace. If a structure exists in the <code>structures</code> folder and shares a name with a structure in an explicit <code>mystructure</code> folder, the game produces the following content log warning:</p><div class="language-"><pre><code>[structure][warning]-There was a conflict loading a structure in the default namespace. A structure with the name &lt;name&gt; was found both in the root directory and the mystructure directory.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>In this case, the file in the <code>mystructure</code> folder is the one that &quot;wins,&quot; resulting in the file directly in the <code>structures</code> folder being ignored.</p><h3 id="file-format" tabindex="-1">File Format <a class="header-anchor" href="#file-format" aria-hidden="true">#</a></h3><p><code>mcstructure</code> files are uncompressed <a href="https://wiki.vg/NBT#Specification" target="_blank" rel="noopener noreferrer">NBT files</a>. Like all Bedrock Edition NBT files, they are stored in little-endian format. The tag structure is as follows:</p><blockquote><p><img src="https://i.imgur.com/aOoHjFc.png" alt=""> <code>format_version</code>: Currently always set to <code>1</code>.<br><img src="https://i.imgur.com/quP0K47.png" alt=""> <code>size</code>: List of three integers describing the size of the structure&#39;s bounds.</p><blockquote><p><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Size of the structure in the X direction.<br><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Size of the structure in the Y direction.<br><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Size of the structure in the Z direction.</p></blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>structure</code>: Actual data compound.</p><blockquote><p><img src="https://i.imgur.com/quP0K47.png" alt=""> <code>block_indices</code>: List containing two sublists, one for each layer. These contain the blocks in the structure. Each block is stored as an integer index into the palette (see below). Proceeds in ZYX order from the lowest corner to the highest one. For example, if the structure size is <code>[2,3,4]</code>, then the 24 (product of the dimensions) values in each layer list represent the blocks located at <code>[(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,2,0), (0,2,1), (0,2,2), (0,2,3), (1,0,0), (1,0,1), (1,0,2), (1,0,3), (1,1,0), (1,1,1), (1,1,2), (1,1,3), (1,2,0), (1,2,1), (1,2,2), (1,2,3)]</code> relative to the origin. Index values equal to <code>-1</code> indicate no block, causing any existing block to remain upon loading. This occurs when structure voids are saved, and is the case for most blocks in the second layer. Both layers share the same palette.</p><blockquote><p><img src="https://i.imgur.com/quP0K47.png" alt=""> of <img src="https://i.imgur.com/aOoHjFc.png" alt=""> Indices for blocks in the primary layer.<br><img src="https://i.imgur.com/quP0K47.png" alt=""> of <img src="https://i.imgur.com/aOoHjFc.png" alt=""> Indices for blocks in the secondary layer. This layer is usually empty, except for water when the block here is waterlogged.</p></blockquote><p><img src="https://i.imgur.com/quP0K47.png" alt=""> of <img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>entities</code>: List of entities as NBT, stored exactly the same as entities in the world file itself. Tags like <code>Pos</code> and <code>UniqueID</code> are saved, but replaced upon loading.</p><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>palette</code>: Contains multiple named palettes, presumably to support multiple variants of the same structure. However, currently, only <code>default</code> is saved and loaded.</p><blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> A single palette (currently only named <code>default</code>).</p><blockquote><p><img src="https://i.imgur.com/quP0K47.png" alt=""> <code>block_palette</code>: List of block states. This list contains the ordered entries that the block indices are referring to.</p><blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> A single block state.</p><blockquote><p><img src="https://i.imgur.com/D75Q22x.png" alt=""> <code>name</code>: The block&#39;s identifier, such as <code>minecraft:planks</code>.<br><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>states</code>: The block&#39;s states as keys and values. Examples: <code>wood_type:&quot;acacia&quot;</code>, <code>bite_counter:3</code>, <code>open_bit:1b</code>. The values are the appropriate NBT type for the state: strings for enum values, integers for scalar numbers, and bytes for boolean values.<br><img src="https://i.imgur.com/aOoHjFc.png" alt=""> <code>version</code>: Compatibility versioning number for this block (currently <code>17825806</code> as of writing, in 1.16).</p></blockquote></blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>block_position_data</code>: Contains additional data for individual blocks in the structure. Each key is an integer index into the flattened list of blocks inside of <code>block_indices</code>. Layer is unspecified as it is irrelevant.</p><blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>&lt;index&gt;</code>: A single piece of additional block data, applied to the block at its index position.</p><blockquote><p><img src="https://i.imgur.com/GXsHWoh.png" alt=""> <code>block_entity_data</code>: Block entity data as NBT, stored the same as block entities in the world file itself. Position tags are saved, but replaced upon loading. No other objects seem to exist adjacent to this one at this time.</p></blockquote></blockquote></blockquote></blockquote></blockquote><p><img src="https://i.imgur.com/quP0K47.png" alt=""> <code>structure_world_origin</code>: List of three integers describing where in the world the structure was initially saved. Equal to the position of the saving structure block, plus its offset settings. This is used to determine where entities should be placed when loading. An entity&#39;s new absolute position is equal to its old position, minus these values, plus the origin of the structure&#39;s loading position.</p><blockquote><p><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Structure origin X position.<br><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Structure origin Y position.<br><img src="https://i.imgur.com/aOoHjFc.png" alt=""> Structure origin Z position.</p></blockquote></blockquote><h3 id="what-happens-if" tabindex="-1">What Happens If... <a class="header-anchor" href="#what-happens-if" aria-hidden="true">#</a></h3><p>Results from testing to see what happens when modified structure files are loaded:</p><ul><li>If the dimensions in <code>size</code> exceed the vanilla save the limit of <code>64*256*64</code>, the structure can still be loaded just as expected.</li><li>If the values in the block layer lists are not int tags, all values are treated as <code>0</code>.</li><li>If a value in the block layer list is equal to or larger than the palette size or less than <code>-1</code>, an air block is placed.</li><li>If the <code>default</code> palette is not present, loading the structure results in no blocks being placed.</li><li>If any of the tags that have constant names are unspecified or are the wrong tag type, the structure fails to load with the following content log error:</li></ul><div class="language-"><pre><code>[Structure][error]-Loading structure &#39;&lt;identifier&gt;\` from behavior pack: &#39;&lt;path&gt;&#39; | &quot;&lt;tag&gt;&quot; field, a required field, is missing from the structure.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>If <code>block_indices</code> does not contain exactly two values, the structure fails to load with the following content log error:</li></ul><div class="language-"><pre><code>[Structure][error]-Loading structure &#39;&lt;identifier&gt;\` from behavior pack: &#39;&lt;path&gt;&#39; | The &quot;block_indices&quot; field should be an array with 2 arrays and instead we have &lt;count&gt; arrays.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>If the values inside of <code>block_indices</code> do not list tags, the structure fails to load with the following content log error:</li></ul><div class="language-"><pre><code>[Structure][error]-Loading structure &#39;&lt;identifier&gt;\` from behavior pack: &#39;&lt;path&gt;&#39; | The &quot;block_indices&quot; field&#39;s first array is either missing or not a list.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>If the length of the two lists in <code>block_indices</code> are not equal, the structure fails to load with the following content log error:</li></ul><div class="language-"><pre><code>[Structure][error]-Loading structure &#39;&lt;identifier&gt;\` from behavior pack: &#39;&lt;path&gt;&#39; | The &quot;block_indices&quot; field&#39;s arrays need to both be the same size.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>If the length of the two lists in <code>block_indices</code> does not equal the product of the structure&#39;s dimensions, the structure fails to load with the following content log error:</li></ul><div class="language-"><pre><code>[Structure][error]-Loading structure &#39;&lt;identifier&gt;\` from behavior pack: &#39;&lt;path&gt;&#39; | The &quot;block_indices&quot; field should have as many elements as defined by the &quot;size&quot; field.
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="nbt-editors" tabindex="-1">NBT Editors <a class="header-anchor" href="#nbt-editors" aria-hidden="true">#</a></h2><p>You can find download links for some NBT editors <a href="/meta/useful-links.html">here</a></p><hr><p><a href="https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205" target="_blank" rel="noopener noreferrer">Original Credit</a></p>`,26),a=[s];function c(n,l,d,u,h,p){return o(),t("div",null,a)}var f=e(r,[["render",c]]);export{m as __pageData,f as default};
