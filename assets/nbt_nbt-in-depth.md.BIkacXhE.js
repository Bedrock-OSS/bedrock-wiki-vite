import{_ as t,j as n,k as a,a5 as i}from"./chunks/framework.3Z9w-w8R.js";const p=JSON.parse('{"title":"About NBT (Named Binary Tag)","description":"NBT in depth.","frontmatter":{"title":"About NBT (Named Binary Tag)","category":"NBT in Depth","mentions":["ConsoleTerm","SmokeyStack","ThomasOrs","theaddonn","killcerr"],"tags":["expert"],"description":"NBT in depth."},"headers":[{"level":2,"title":"NBT Tags and Data Types","slug":"nbt-tags-and-data-types","link":"#nbt-tags-and-data-types","children":[]},{"level":2,"title":"How to read/write NBT tags","slug":"how-to-read-write-nbt-tags","link":"#how-to-read-write-nbt-tags","children":[{"level":3,"title":"Reading Types","slug":"reading-types","link":"#reading-types","children":[]},{"level":3,"title":"Reading Numbers","slug":"reading-numbers","link":"#reading-numbers","children":[]},{"level":3,"title":"Reading Strings","slug":"reading-strings","link":"#reading-strings","children":[]},{"level":3,"title":"Reading Lists","slug":"reading-lists","link":"#reading-lists","children":[]},{"level":3,"title":"Reading Compounds","slug":"reading-compounds","link":"#reading-compounds","children":[]}]},{"level":2,"title":"Minecraft Bedrock NBT files","slug":"minecraft-bedrock-nbt-files","link":"#minecraft-bedrock-nbt-files","children":[]},{"level":2,"title":"Writing NBT","slug":"writing-nbt","link":"#writing-nbt","children":[]},{"level":2,"title":"Bedrock NBT File header","slug":"bedrock-nbt-file-header","link":"#bedrock-nbt-file-header","children":[]},{"level":2,"title":"Little Endian","slug":"little-endian","link":"#little-endian","children":[]},{"level":2,"title":"Network Little Endian","slug":"network-little-endian","link":"#network-little-endian","children":[]}],"relativePath":"nbt/nbt-in-depth.md","filePath":"nbt/nbt-in-depth.md"}'),s={name:"nbt/nbt-in-depth.md"};function r(d,e,o,l,h,c){return a(),n("div",null,e[0]||(e[0]=[i(`<p>NBT (Named Binary Tag) is a name for data encoding format at the binary level, you certainly know format JSON which is based on the text level. Therefore, we will be able to use the JSON format for some examples, you may also notice that minecraft itself uses JSON to represent NBT in commands such as java commands or simplified bedrock commands( <code>/give</code>, <code>/replaceitem</code>). See <a href="/commands/nbt-commands">NBT Commands</a>.</p><p>In this article, we will show NBT in much more detail than you will ever expect. What you could see in the Commands section is far from actual NBTs, and we will show you how NBT works, how to read them, as well as how <code>Minecraft Bedrock Edition</code> itself uses them.</p><h2 id="nbt-tags-and-data-types" tabindex="-1">NBT Tags and Data Types <a class="header-anchor" href="#nbt-tags-and-data-types" aria-label="Permalink to &quot;NBT Tags and Data Types&quot;">​</a></h2><p>NBT, just like JSON, has given types and knows how to read them, for example JSON knows that a compound object starts with the symbol <code>{</code> and ends with <code>}</code>, it also knows that when it has to read a String, the String always starts with the symbol <code>&quot;</code> and ends with a <code>&quot;</code>, this means that we want to learn to read and understand NBT so you need to know when a composite object starts, and how to read individual types. Now let&#39;s look at the table of NBT tags for NBT types and how they are marked in NBT. As it was said, NBT works on a binary level, so you need to know that the smallest data type is a byte, which is 8 bits in size. And individual types can contain multiple bytes, but they can never be 1/2 byte extra or less, not possible! We also cannot say how the tags should be named, because everyone can call NBT tags differently, but they must always have the same binary base (<code>id</code>), id is represented by one byte.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Name</th><th style="text-align:right;">Binary ID</th><th style="text-align:center;">Binary Size</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Byte</td><td style="text-align:right;">0x01</td><td style="text-align:center;">1 byte (8-bits)</td><td style="text-align:left;">One byte integer</td></tr><tr><td style="text-align:center;">Int16 (short)</td><td style="text-align:right;">0x02</td><td style="text-align:center;">2 bytes (16-bits)</td><td style="text-align:left;">A two-byte integer</td></tr><tr><td style="text-align:center;">Int32 (integer)</td><td style="text-align:right;">0x03</td><td style="text-align:center;">4 bytes (32-bits)</td><td style="text-align:left;">A four-byte integer</td></tr><tr><td style="text-align:center;">Int64 (long)</td><td style="text-align:right;">0x04</td><td style="text-align:center;">8 bytes (64-bits)</td><td style="text-align:left;">An eight-byte integer</td></tr><tr><td style="text-align:center;">Float</td><td style="text-align:right;">0x05</td><td style="text-align:center;">4 bytes (32-bits)</td><td style="text-align:left;">A four-byte (single precision) floating point integer with regular decimal precision, after IEEE 754</td></tr><tr><td style="text-align:center;">Double</td><td style="text-align:right;">0x06</td><td style="text-align:center;">8 bytes (64-bits)</td><td style="text-align:left;">An eight-byte (double precision) floating point integer with higher decimal precision, after IEEE 754</td></tr><tr><td style="text-align:center;">String</td><td style="text-align:right;">0x08</td><td style="text-align:center;">Predefined</td><td style="text-align:left;">A String type that has a predefined size. Text uses UTF-8 encoding</td></tr><tr><td style="text-align:center;">List</td><td style="text-align:right;">0x09</td><td style="text-align:center;">Predefined</td><td style="text-align:left;">A List type with a predefined size and defining type for the elements in the List</td></tr><tr><td style="text-align:center;">Compound</td><td style="text-align:right;">0x0A (10)</td><td style="text-align:center;">Undefined</td><td style="text-align:left;">Type Compound, the Compound does not have a predefined size, so it is necessary to read the keys and values until we encounter the tag for ending the compound.</td></tr><tr><td style="text-align:center;">End of Compound</td><td style="text-align:right;">0x00</td><td style="text-align:center;">1 byte</td><td style="text-align:left;">This tag is not a type but only a tag and can only be used depending on the compound. It marks the end of a compound</td></tr><tr><td style="text-align:center;">Byte List</td><td style="text-align:right;">0x07</td><td style="text-align:center;">Predefined</td><td style="text-align:left;">List type of Byte and predefined size, not commonly used by Minecraft Bedrock Edition</td></tr><tr><td style="text-align:center;">Int List</td><td style="text-align:right;">0x0B (11)</td><td style="text-align:center;">Predefined</td><td style="text-align:left;">List type of Int and predefined size, not commonly used by Minecraft Bedrock Edition</td></tr><tr><td style="text-align:center;">Long List</td><td style="text-align:right;">0x0C (12)</td><td style="text-align:center;">Predefined</td><td style="text-align:left;">List type of Long and predefined size, not commonly used by Minecraft Bedrock Edition</td></tr></tbody></table><p>You may notice that there is no boolean value like in JSON and that means we will express true/false values as 1 and 0 using a Byte.</p><h2 id="how-to-read-write-nbt-tags" tabindex="-1">How to read/write NBT tags <a class="header-anchor" href="#how-to-read-write-nbt-tags" aria-label="Permalink to &quot;How to read/write NBT tags&quot;">​</a></h2><p>The same reading method applies to all numbers, read as many bytes as the number tag type is large, such as: Int16 (short) is 2 bytes in size, so I will read 2 bytes, but you need to know that Minecraft Bedrock uses the <a href="#little-endian">little-endian</a>, unlike Java, it uses big-endian. <a href="#little-endian">Little-endian</a> is a way to write or read bytes of numbers.</p><h3 id="reading-types" tabindex="-1">Reading Types <a class="header-anchor" href="#reading-types" aria-label="Permalink to &quot;Reading Types&quot;">​</a></h3><p>Type is always one byte in size, so we read the type and find out what to read next for the tag.</p><h3 id="reading-numbers" tabindex="-1">Reading Numbers <a class="header-anchor" href="#reading-numbers" aria-label="Permalink to &quot;Reading Numbers&quot;">​</a></h3><p>When reading a number, it is necessary to know what type of number we are reading, we can find out by reading the type <em>(<a href="#reading-types">Reading types</a>)</em>. Then, when we know what type of number we have to read, we read it, for example, if we know that we want type <code>3</code>, then we look in the table, and we know that type 3 is a number of 4-bytes size, so we read 4 bytes. All numbers <em><strong>Bedrock</strong></em> reads/writes with <a href="#little-endian">little-endian</a> method.</p><h3 id="reading-strings" tabindex="-1">Reading Strings <a class="header-anchor" href="#reading-strings" aria-label="Permalink to &quot;Reading Strings&quot;">​</a></h3><p>When reading a String, you need to know its length in bytes, this String length is always written with Int16 (short) <code>2 bytes</code> (<a href="#reading-numbers">how to read numbers</a>) before the String, i.e. first we read the number, then we read the number of bytes of the number we read before, after we know the bytes we can stuff them through UTF-8 encoding, and we get text from them.</p><h3 id="reading-lists" tabindex="-1">Reading Lists <a class="header-anchor" href="#reading-lists" aria-label="Permalink to &quot;Reading Lists&quot;">​</a></h3><p>When reading a List, we must first read the List (<a href="#reading-types">type</a>), whether this List contains numbers or other Lists or Strings, etc. So first we read the type of this List, then we read the <a href="#reading-numbers">number</a> of elements which is written as an Int32 (int) number, so we read 4 bytes, now we know the type of our elements and their count, so we read this type as many times as we know from the read number before. Reading the size of a List is different from reading the size of a String! Should read Int32 not an Int16! This solution does not apply to <code>Byte-List, Int-List, Long-List</code>!</p><h3 id="reading-compounds" tabindex="-1">Reading Compounds <a class="header-anchor" href="#reading-compounds" aria-label="Permalink to &quot;Reading Compounds&quot;">​</a></h3><p>Compound has all properties named, so when reading a property, it is always necessary to read its name as well. The procedure for reading Compound is rather simple. First, we read the type, the type can be anything, but if it is equal to an empty byte, then it is the end of the compound and then we jut stop reading, but if the type is not equal to the Compound Ending tag, then the significant type of the property that we will read. The read property is always followed by the name (key), which needs to be read as a <a href="#reading-strings">String</a>, and after the String is read, then we can read value.</p><h2 id="minecraft-bedrock-nbt-files" tabindex="-1">Minecraft Bedrock NBT files <a class="header-anchor" href="#minecraft-bedrock-nbt-files" aria-label="Permalink to &quot;Minecraft Bedrock NBT files&quot;">​</a></h2><p>When reading Minecraft NBT files, it is always important to be careful if there is no Bedrock Header at the beginning of the file, see <a href="#bedrock-nbt-file-header">Bedrock NBT Header</a>, but not all Bedrock NBT files contain this header, for example <code>.mcstructure</code> also does not contain a Bedrock NBT header, unlike <code>level.dat</code>. You also need to pay attention to the root element in the file, i.e. the List or compound, the root element also looks like a property, so you need to read the name of this root property, although Bedrock does not use these names, so these names are empty, but they are there. Here is how <code>.mcstructure</code> looks like where JSON represents NBT.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;structure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;structure_world_origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//..</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This example shows that it is also necessary to read the name of the basic element, although it is usually unused and empty.</p></div><h2 id="writing-nbt" tabindex="-1">Writing NBT <a class="header-anchor" href="#writing-nbt" aria-label="Permalink to &quot;Writing NBT&quot;">​</a></h2><p>There is no certain procedure for writing, because it is the same methods as when reading, but backwards. That&#39;s why we recommend first understanding NBT and learning to read it correctly, then it won&#39;t be difficult to write NBT.</p><h2 id="bedrock-nbt-file-header" tabindex="-1">Bedrock NBT File header <a class="header-anchor" href="#bedrock-nbt-file-header" aria-label="Permalink to &quot;Bedrock NBT File header&quot;">​</a></h2><p>The NBT bedrock Header is indicated by two 4-byte numbers, the first is always 8 (except in <code>level.dat</code>, where it indicates the storage version) and the second indicates the size of the nbt structure in bytes. E.g. - <code>08 00 00 00</code> - <code>bf 00 00 00</code> - &lt; always 8 &gt; &lt; always the size of the NBT structure - exclude headers 8 bytes&gt;</p><h2 id="little-endian" tabindex="-1">Little Endian <a class="header-anchor" href="#little-endian" aria-label="Permalink to &quot;Little Endian&quot;">​</a></h2><p>Little-Endian is the common method of writing numbers in bytes to streams or files. It&#39;s not a science, and it&#39;s easy to understand. So if Int16 <code>(short)</code> of value <code>0x5a72</code> then we convert it to bytes [<code>0x5a</code>, <code>0x72</code>] and then reverse their order that means [<code>0x72</code>, <code>0x5a</code>] and write d file: <code>72 5a</code>. It may seem illogical, but little-endian is almost always used when writing and reading from files. A single <code>byte</code> is the same in both methods because it is one byte in size. For example:</p><ul><li>Int64 (long) <code>0x11223344aabbccdd</code></li><li>Split to 8 bytes <code>0x11 0x22 0x33 0x44 0xAA 0xBB 0xCC 0xDD</code></li><li>Reverse <code>0xDD 0xCC 0xBB 0xAA 0x44 0x33 0x22 0x11</code></li><li>Write <code>dd cc bb aa 44 33 22 11</code></li><li>Done (when reading the number just goes backwards this example.)</li></ul><h2 id="network-little-endian" tabindex="-1">Network Little Endian <a class="header-anchor" href="#network-little-endian" aria-label="Permalink to &quot;Network Little Endian&quot;">​</a></h2><p>Network-Little-Endian is a bit more uncommon and only used in the Bedrock protocol to serialize NBTs. It uses Variable Length Integers (also called VarInts) instead of fixed size integers.</p><p>VarInt encodes integers in blocks of seven bits; the MSB is set for every byte but the last, in which it is cleared. Signed values are first converted to an unsigned representation using ZigZag encoding (also described on the page linked below), and then encoded as every other unsigned number. More information on VarInts is available at <a href="https://protobuf.dev/programming-guides/encoding/" target="_blank" rel="noreferrer">Google&#39;s proto buf documentation</a>.</p><p>All following data types in NBTs are represented by VarInts: <code>Int32</code> and <code>Int64</code>. (This excludes both <code>Byte</code> and <code>Int16</code>, as well as <code>Float</code> and <code>Double</code> which use the Little-Endian encoding, hence the name Network-Little-Endian).</p><p>Further changes:</p><ul><li>Strings are prefixed by an Int32 storing their length using VarInt encoding.</li><li>Lists are also prefixed by an Int32 storing their length using VarInt encoding.</li></ul>`,35)]))}const y=t(s,[["render",r]]);export{p as __pageData,y as default};
