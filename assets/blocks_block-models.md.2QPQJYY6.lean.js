import{_ as d,E as t,j as c,k,a7 as o,A as a,l as e,J as i,I as l}from"./chunks/framework.BAu7jxot.js";const u="/assets/images/blocks/block-models/new_project.png",g="/assets/images/blocks/block-models/project_settings.png",m="/assets/images/blocks/block-models/root_bone.png",b="/assets/images/blocks/block-models/select_edit_material_instances.png",E="/assets/images/blocks/block-models/edit_material_instances.png",x=JSON.parse(`{"title":"Creating Block Models","description":"Learn how to set up a custom model for your block.","frontmatter":{"title":"Creating Block Models","description":"Learn how to set up a custom model for your block.","category":"Tutorials","tags":["beginner","easy"],"license":true,"mentions":["QuazChick","SmokeyStack"]},"headers":[{"level":2,"title":"Model Setup","slug":"model-setup","link":"#model-setup","children":[]},{"level":2,"title":"Adding Cubes","slug":"adding-cubes","link":"#adding-cubes","children":[]},{"level":2,"title":"Removing Faces","slug":"removing-faces","link":"#removing-faces","children":[]},{"level":2,"title":"Previewing Textures","slug":"previewing-textures","link":"#previewing-textures","children":[]},{"level":2,"title":"Rearranging UVs","slug":"rearranging-uvs","link":"#rearranging-uvs","children":[]},{"level":2,"title":"Changing Material Instances","slug":"changing-material-instances","link":"#changing-material-instances","children":[]},{"level":2,"title":"Applying Geometry & Textures","slug":"applying-geometry-textures","link":"#applying-geometry-textures","children":[]},{"level":2,"title":"What's Next?","slug":"what-s-next","link":"#what-s-next","children":[]}],"relativePath":"blocks/block-models.md","filePath":"blocks/block-models.md"}`),y={name:"blocks/block-models.md"};function f(_,s,C,F,q,w){const n=t("WikiImage"),p=t("CodeHeader"),r=t("Card"),h=t("CardGrid");return k(),c("div",null,[s[6]||(s[6]=o("",14)),a(n,{src:"/assets/images/blocks/block-models/new_cube.png",alt:"",width:"600",class:"my-4"}),s[7]||(s[7]=e("p",null,'Cubes can be moved, resized and rotated from the top toolbar. Below are the two cubes my "paper_bag" model will use.',-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_cubes.png",alt:"",width:"300"}),s[8]||(s[8]=e("h2",{id:"removing-faces",tabindex:"-1"},[i("Removing Faces "),e("a",{class:"header-anchor",href:"#removing-faces","aria-label":'Permalink to "Removing Faces"'},"​")],-1)),s[9]||(s[9]=e("p",null,"Some of the faces of our cubes might not need to be visible. In my example, the top face of the paper_bag should be removed so that you can see inside.",-1)),s[10]||(s[10]=e("p",null,"To remove a face, click on it in the preview and remove its UV.",-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_top_removed.png",alt:"",width:"600"}),s[11]||(s[11]=e("p",null,"Additionally, only the north and south faces of the handle should be visible. You can select multiple faces by holding Ctrl while clicking on the face names in the UV panel.",-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_handle_faces_removed.png",alt:"",width:"600"}),s[12]||(s[12]=e("h2",{id:"previewing-textures",tabindex:"-1"},[i("Previewing Textures "),e("a",{class:"header-anchor",href:"#previewing-textures","aria-label":'Permalink to "Previewing Textures"'},"​")],-1)),s[13]||(s[13]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[i("Textures can be created in Blockbench by clicking "),e("code",null,"Create Texture"),i(" and selecting "),e("code",null,"Blank"),i(".")])],-1)),s[14]||(s[14]=e("p",null,'The "paper_bag" model has multiple pre-made textures, listed below:',-1)),e("ul",null,[e("li",null,[s[0]||(s[0]=e("p",null,[e("code",null,"textures/blocks/paper_bag.png")],-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"",width:"128"})]),e("li",null,[s[1]||(s[1]=e("p",null,[e("code",null,"textures/blocks/paper_bag_bottom_fold.png")],-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_bottom_fold.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"",width:"128"})]),e("li",null,[s[2]||(s[2]=e("p",null,[e("code",null,"textures/blocks/paper_bag_side_gusset.png")],-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_side_gusset.png",style:{"background-color":"rgb(0,0,0,0.15)"},pixelated:"",width:"128"})])]),s[15]||(s[15]=e("p",null,"These can be imported into Blockbench and then dragged onto each appropriate block face, although they likely won't look quite right...",-1)),a(n,{src:"/assets/images/blocks/block-models/preview_textures_applied.png",alt:"",width:"300"}),s[16]||(s[16]=e("h2",{id:"rearranging-uvs",tabindex:"-1"},[i("Rearranging UVs "),e("a",{class:"header-anchor",href:"#rearranging-uvs","aria-label":'Permalink to "Rearranging UVs"'},"​")],-1)),s[17]||(s[17]=e("p",null,"To get textures into the right positions, you may need to reposition/resize your faces' UV mapping. This can be done by selecting the affected face and using the UV panel.",-1)),a(n,{src:"/assets/images/blocks/block-models/paper_bag_handle_uv.png",alt:"",width:"300"}),a(n,{src:"/assets/images/blocks/block-models/paper_bag_final.png",alt:"",width:"300"}),s[18]||(s[18]=o("",10)),a(p,null,{default:l(()=>s[3]||(s[3]=[i("BP/blocks/paper_bag.json")])),_:1}),s[19]||(s[19]=o("",2)),a(h,null,{default:l(()=>[a(r,{title:"Create Culling Rules",link:"/blocks/block-culling",image:"/assets/images/homepage/crafting_table_0.png"},{default:l(()=>s[4]||(s[4]=[e("p",null,"Creating culling rules for your model can aid performance by telling the game to unrender hidden parts of your model.",-1)])),_:1}),a(r,{title:"Conditional Bones",link:"/blocks/block-components#bone-visibility",image:"/assets/images/homepage/scripting.png"},{default:l(()=>s[5]||(s[5]=[e("p",null,[i('Use the "bone_visibility" parameter of the '),e("a",{href:"/blocks/block-components.html#geometry"},"geometry"),i(" component to render different model bones based on your block's current permutation.")],-1)])),_:1})]),_:1})])}const B=d(y,[["render",f]]);export{x as __pageData,B as default};
