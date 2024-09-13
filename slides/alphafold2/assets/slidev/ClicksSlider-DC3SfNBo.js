import{d as N,y as _,t as H,D as T,n as V,ac as z,o as f,b as v,i as p,e as c,x,l as F,A as P,F as M,g as q,ad as R,aa as K,ab as j,h as D,p as U,a as X}from"../modules/vue-DN06qbNd.js";import{C as $,q as G,r as J,_ as O}from"../index-6t4Lt8i3.js";import{n as Q}from"../modules/unplugin-icons-JDWWDBaO.js";const W=["innerHTML"],Y=["textContent"],Z=["textContent"],L="slidev-note-fade",h="slidev-note-click-mark",pe=N({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(m,{emit:u}){const t=m,k=u,d=_(()=>{var l;return t.clicksContext!=null&&((l=t.noteHtml)==null?void 0:l.includes("slidev-note-click-mark"))}),o=H(null);function C(){var A;if(!o.value||!d.value)return;const l=Array.from(o.value.querySelectorAll(`.${h}`)),a=+(((A=t.clicksContext)==null?void 0:A.current)??$),i=a<0||a>=$||!t.highlight,b=new Set;function s(e){!e||e===o.value||(b.add(e),e.parentElement&&s(e.parentElement))}const g=new Map;for(const e of l){const n=e.parentElement,r=Number(e.dataset.clicks);g.set(r,e),s(n),Array.from(n.childNodes).forEach(w=>{if(w.nodeType===3){const E=document.createElement("span");E.textContent=w.textContent,n.insertBefore(E,w),w.remove()}})}const I=Array.from(o.value.querySelectorAll("*"));let y=0;const S=new Map;for(const e of I)S.has(y)||S.set(y,[]),S.get(y).push(e),e.classList.contains(h)&&(y=Number(e.dataset.clicks)||y+1);for(const[e,n]of S)i?n.forEach(r=>r.classList.remove(L)):n.forEach(r=>r.classList.toggle(L,b.has(r)?!1:e!==a));for(const[e,n]of g)n.classList.remove(L),n.classList.toggle(`${h}-past`,i?!1:e<a),n.classList.toggle(`${h}-active`,i?!1:e===a),n.classList.toggle(`${h}-next`,i?!1:e===a+1),n.classList.toggle(`${h}-future`,i?!1:e>a+1),n.ondblclick=r=>{k("markerDblclick",r,e),!r.defaultPrevented&&(t.clicksContext.current=e,r.stopPropagation(),r.stopImmediatePropagation())},n.onclick=r=>{k("markerClick",r,e)},t.autoScroll&&e===a&&n.scrollIntoView({block:"center",behavior:"smooth"})}return T(()=>{var l;return[t.noteHtml,(l=t.clicksContext)==null?void 0:l.current,t.highlight]},()=>{V(()=>{C()})},{immediate:!0}),z(()=>{C()}),(l,a)=>l.noteHtml?(f(),v("div",{key:0,ref_key:"noteDisplay",ref:o,class:p(["prose overflow-auto outline-none slidev-note",[t.class,d.value?"slidev-note-with-clicks":""]]),innerHTML:l.noteHtml},null,10,W)):l.note?(f(),v("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",t.class])},[c("p",{textContent:x(l.note)},null,8,Y)],2)):(f(),v("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[c("p",{textContent:x(t.placeholder||"No notes.")},null,8,Z)],2))}}),B=m=>(U("data-v-aff0fee5"),m=m(),X(),m),ee=["title"],te={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},oe=B(()=>c("div",{"flex-auto":""},null,-1)),se={"text-primary":""},ne=B(()=>c("span",{op25:""},"/",-1)),le={op50:""},ae={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},re=["min","max"],ce=N({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(m){const u=m,t=_(()=>u.clicksContext.total),k=_(()=>G(0,u.clicksContext.clicksStart,t.value)),d=_(()=>t.value-k.value+1),o=_({get(){return u.clicksContext.current>t.value?-1:u.clicksContext.current},set(a){u.clicksContext.current=a}}),C=_(()=>J(k.value,t.value+1));function l(){u.readonly||(o.value<0||o.value>t.value)&&(o.value=0)}return(a,i)=>{const b=Q;return f(),v("div",{class:p(["flex gap-1 items-center select-none",d.value?"":"op50"]),title:`Clicks in this slide: ${d.value}`},[c("div",te,[F(b,{"text-sm":"",op50:""}),oe,o.value>=0&&o.value!==P($)&&a.active?(f(),v(M,{key:0},[c("span",se,x(o.value),1),ne],64)):q("v-if",!0),c("span",le,x(t.value),1)]),c("div",ae,[(f(!0),v(M,null,R(C.value,s=>(f(),v("div",{key:s,border:"y main","of-hidden":"",relative:"",class:p([s===0?"rounded-l border-l":"",s===t.value?"rounded-r border-r":""]),style:D({width:d.value>0?`${1/d.value*100}%`:"100%"})},[c("div",{absolute:"","inset-0":"",class:p(s<=o.value?"bg-primary op15":"")},null,2),c("div",{class:p([+s==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",s===0?"rounded-l":"",s===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},x(s),3)],6))),128)),K(c("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>o.value=s),class:p(["range",a.readonly?"pointer-events-none":""]),type:"range",min:k.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:D({"--thumb-width":`${1/(d.value+1)*100}%`}),onMousedown:l,onFocus:i[1]||(i[1]=s=>{var g;return(g=s.currentTarget)==null?void 0:g.blur()})},null,46,re),[[j,o.value]])])],10,ee)}}}),me=O(ce,[["__scopeId","data-v-aff0fee5"]]);export{me as C,pe as _};
