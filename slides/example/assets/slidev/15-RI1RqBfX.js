const __vite__fileDeps=["assets/slidev/CodeRunner-Dv4ElC4O.js","assets/modules/unplugin-icons-BnCH8ItJ.js","assets/modules/vue-nCsmiZeU.js","assets/monaco/bundled-types-D5NoDRcq.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-Dq3oRKbE.css","assets/slidev/context-DoY2EGAA.js","assets/index-C7GYBrvO.js","assets/modules/shiki-3gNTLD-0.js","assets/modules/shiki-BPvBenZD.css","assets/index-DLBtUStX.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CfD3VfYn.js","assets/CodeRunner-YBfxSSx9.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as y,o as F}from"../monaco/bundled-types-D5NoDRcq.js";import{d as Q,t as d,y as V,aG as U,ac as Z,n as _,o as C,b as J,e as r,h as q,c as R,H as g,g as X,az as ee,k as te,l as k,m as L,q as oe,s as ne,a6 as m}from"../modules/vue-nCsmiZeU.js";import{l as N}from"../lz-string-7V7f_eN4.js";import{a as ae,a0 as S,ah as x}from"../index-C7GYBrvO.js";import{u as I,p as ie,f as re}from"./context-DoY2EGAA.js";import{I as se}from"./default-gSu7moy7.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-3gNTLD-0.js";const le={class:"relative slidev-monaco-container"},de=Q({__name:"Monaco",props:{codeLz:{default:""},diffLz:{},lang:{default:"typescript"},readonly:{type:Boolean,default:!1},lineNumbers:{default:"off"},height:{default:"initial"},editorOptions:{},ata:{type:Boolean,default:!0},runnable:{type:Boolean,default:!1},writable:{},autorun:{type:[Boolean,String],default:!0},showOutputAt:{type:[null,Boolean,String,Number,Array]},outputHeight:{},highlightOutput:{type:Boolean,default:!0},runnerOptions:{}},setup(b){const e=b,M=ee(()=>y(()=>import("./CodeRunner-Dv4ElC4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(l=>l.default)),i=d(N.decompressFromBase64(e.codeLz).trimEnd()),w=e.diffLz&&d(N.decompressFromBase64(e.diffLz).trimEnd()),P=V(()=>e.writable&&!e.readonly&&!1),f={ts:"typescript",js:"javascript"}[e.lang]??e.lang,z={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[e.lang]??e.lang,W=d(),h=d(),v=d(0),s=d(),K=V(()=>e.height==="auto"?`${v.value}px`:e.height==="initial"?`${s.value}px`:e.height),B=d(),{$page:j,$renderContext:T}=I(),{currentSlideNo:Y}=ae(),G=U(()=>Math.abs(j.value-Y.value)<=1&&B.value,l=>{["slide","presenter"].includes(T.value)?l():setTimeout(l,5e3)});return Z(async()=>{const{default:l}=await y(async()=>{const{default:t}=await import("../monaco/bundled-types-D5NoDRcq.js").then(a=>a.x);return{default:t}},__vite__mapDeps([3,2,4,5])),{ata:u,monaco:o,editorOptions:H}=await l(),c=o.editor.createModel(i.value,f,o.Uri.parse(`file:///${S()}.${z}`));c.onDidChangeContent(()=>i.value=c.getValue());const E={automaticLayout:!0,readOnly:e.readonly,lineNumbers:e.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,...H,...e.editorOptions};let n;if(w){const t=o.editor.createModel(w.value,f,o.Uri.parse(`file:///${S()}.${z}`));t.onDidChangeContent(()=>i.value=c.getValue());const a=o.editor.createDiffEditor(h.value,{renderOverviewRuler:!1,...E});a.setModel({original:c,modified:t});const p=a.getOriginalEditor(),A=a.getModifiedEditor(),O=()=>{const D=Math.max(p.getContentHeight(),A.getContentHeight())+4;s.value??(s.value=D),v.value=D,_(()=>a.layout())};p.onDidContentSizeChange(O),A.onDidContentSizeChange(O),n=A}else{const t=o.editor.create(h.value,{model:c,lineDecorationsWidth:0,...E});t.onDidContentSizeChange(a=>{const p=a.contentHeight+4;s.value??(s.value=p),v.value=p,_(()=>n.layout())}),n=t}B.value=()=>{G(),y(()=>import("../monaco/bundled-types-D5NoDRcq.js").then(t=>t.y),__vite__mapDeps([3,2,4,5])),e.ata&&(u(n.getValue()),n.onDidChangeModelContent(F(1e3,()=>{u(n.getValue())})))};const $=n.layoutContentWidget.bind(n);n.layoutContentWidget=t=>{$(t),t.getId()==="editor.contrib.resizableContentHoverWidget"&&(t._resizableNode.domNode.style.transform=t._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},n.addAction({id:"slidev-save",label:"Save",keybindings:[o.KeyMod.CtrlCmd|o.KeyCode.KeyS],run:()=>{P.value,console.warn("[Slidev] this monaco editor is not writable, save action is ignored.")}}),_(()=>o.editor.remeasureFonts())}),(l,u)=>(C(),J("div",le,[r("div",{ref_key:"outer",ref:W,class:"relative slidev-monaco-container-inner",style:q({height:K.value})},[r("div",{ref_key:"container",ref:h,class:"absolute inset-0.5"},null,512)],4),e.runnable?(C(),R(g(M),{key:0,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=o=>i.value=o),lang:g(f),autorun:e.autorun,"show-output-at":e.showOutputAt,height:e.outputHeight,"highlight-output":e.highlightOutput,"runner-options":e.runnerOptions},null,8,["modelValue","lang","autorun","show-output-at","height","highlight-output","runner-options"])):X("v-if",!0)]))}}),ue=r("h1",null,"Monaco Editor",-1),ce=r("p",null,"Slidev provides built-in Monaco Editor support.",-1),pe=r("p",null,[m("Add "),r("code",null,"{monaco}"),m(" to the code block to turn it into an editor:")],-1),ge=r("p",null,[m("Use "),r("code",null,"{monaco-run}"),m(" to create an editor that can execute the code directly in the slide:")],-1),we={__name:"15",setup(b){return ie(x),I(),(e,M)=>{const i=de;return C(),R(se,oe(ne(g(re)(g(x),14))),{default:te(()=>[ue,ce,pe,k(i,L({"code-lz":"JYWwDg9gTgLgBAbzlApgMzgXzmqERwDkAbgK4qEBQoksicK4MAngIJRQCGzWOeBhAHQB6FAA8YKKADtOAGyqUAxhGkBneJw5wAvMnQAKRmBbsuzAwEYADAEpblIA",lang:"ts"},{}),null,16),ge,k(i,L({runnable:"","code-lz":"JYWwDg9gTgLgBAbzgNwKZQM7AgOzgXzgDMoIQ4ByZAV1QoChRJZE5VwYBPAQSigENOAGjgZBACVQAbKRALFS5CgDoA9KgAeMdDn5SG9MZ0kyIACgCU9AMa4MEKamWyA5mYAGNVHAAkCNJjYOPjuVrY49o7OEG7sYFy8ApwAPDjUIABG6AB8ZgCMAAwWylCoACbU1qhmRMAZcAC82XAA2srttRkincr8MGYAtHkWAIRwANTEdb39AwBMowC6Ii15InmLFlZAA",lang:"ts"},{}),null,16)]),_:1},16)}}};export{we as default};
