import{o as r,c as a,k as n,q as i,s as l,A as s,e,a6 as t}from"../modules/vue-DN06qbNd.js";import{I as u}from"./default-BR0cC1Jy.js";import{ar as o}from"../index-6t4Lt8i3.js";import{p as c,u as d,f as m}from"./context-CbxShNi4.js";import"../modules/shiki-PlZ7Irjf.js";const p=e("h3",null,"Noisy student self-distillation",-1),f=e("p",null,[t("先在有标号的数据集"),e("em",null,"PDB"),t("里训练一个模型, 通过这个模型预测没有标号的数据形成一个大一些的数据集，然后选择置信度较高的数据，加上原来有标号的数据，训练新的模型")],-1),_=e("ul",null,[e("li",null,[t("Using an approach similar to "),e("em",null,"noisy student self-distillation"),t(".")]),e("li",null,[t("In this procedure, we use a trained network to predict the structure of around 350,000 diverse sequences from "),e("code",null,"Uniclust3036"),t(" and "),e("em",null,"make a new dataset"),t(" of predicted structures filtered to a high-confidence subset.")])],-1),y={__name:"19",setup(h){return c(o),d(),(k,x)=>(r(),a(u,i(l(s(m)(s(o),18))),{default:n(()=>[p,f,_]),_:1},16))}};export{y as default};