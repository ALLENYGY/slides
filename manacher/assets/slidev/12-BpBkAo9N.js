import{o as t,c as e,k as m,q as r,s as c,A as l,e as s,a6 as a}from"../modules/vue-BFIo-QU7.js";import{I as p}from"./default-BaoO3QWZ.js";import{ak as n}from"../index-CGKd4rHN.js";import{p as i,u as o,f as h}from"./context-BGX8wYJc.js";import"../modules/shiki-Bi32zl8E.js";const u=s("h4",null,"回文半径和实际回文串长度的对应关系",-1),g=s("p",null,[a("当前字符最长回文串的实际长度 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mo",null,"="),s("mi",null,"p"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"len = p[i] - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1),d=s("ul",null,[s("li",null,[a("每个子字符串扩展后的长度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2 * len + 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("li",null,[a("每个子回文字符串扩展后的回文半径为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"="),s("mi",null,"p"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"len + 1 = p[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])])]),s("li",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Algorithm/STRING/Manacher-4.png",alt:"回文半径和实际回文串长度的对应关系"})])],-1),v={__name:"12",setup(y){return i(n),o(),(x,w)=>(t(),e(p,r(c(l(h)(l(n),11))),{default:m(()=>[u,g,d]),_:1},16))}};export{v as default};