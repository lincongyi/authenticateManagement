import{m as k,r as n,J as w,u as L,a as o,F as h,j as s,H as A,E as y,L as H}from"./index.e1f6c22a.js";import{g as M,d as T}from"./devDocument.e44b5dca.js";const $="_strong_sra3k_10",P="_name_sra3k_24",R="_content_sra3k_34",r={"result-amount":"_result-amount_sra3k_1",strong:$,"result-list":"_result-list_sra3k_14","result-item":"_result-item_sra3k_14",name:P,content:R,"doc-tabs":"_doc-tabs_sra3k_41"},{Search:G}=H,q=()=>{const[l,E]=k.useMessage(),S=t=>{if(!t)return l.warning("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57");I(t)},[i,D]=n.exports.useState(),[m,f]=n.exports.useState(),[u,I]=n.exports.useState(),[a,d]=n.exports.useState();n.exports.useEffect(()=>{(async()=>{const{data:t}=await M();if(!t)return;if(!t.length)return l.warning("\u5E94\u7528\u9700\u8981\u81F3\u5C11\u63A5\u5165\u4E00\u4E2A\u57FA\u7840\u80FD\u529B\u624D\u80FD\u67E5\u770B\u5F00\u53D1\u6587\u6863\u5185\u5BB9");D([{projectId:0,projectName:"\u5168\u90E8"},...t])})()},[]);const v=t=>{f(+t)};n.exports.useEffect(()=>{!u||(async()=>{const{data:t}=await T({projectId:m||void 0,searchStr:u});d(t?x(t):[])})()},[m,u]);const{themeStore:N}=w(),x=t=>{const e=N.antdThemeColor;if(!!t)return t.map(c=>{const{name:p,content:g,...j}=c,_=/<span style='color:blue'>/g,C=p&&p.replace(_,`<span style="color:${e}; font-weight: bold">`),b=g&&g.replace(_,`<span style="color:${e}; font-weight: bold">`);return{...j,name:C,content:b}})},B=L(),F=t=>{const{projectId:e,directoryId:c}=t;B(`../../devDocument?projectId=${e}&directoryId=${c}`)};return o(h,{children:[E,s(G,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57",size:"large",style:{marginBottom:20},onSearch:S,enterButton:!0,allowClear:!0}),i&&s(A,{tabBarGutter:0,className:r["doc-tabs"],onChange:v,items:i.map(t=>{var e;return{label:t.projectName,key:((e=t.projectId)==null?void 0:e.toString())||"0"}})}),a?o(h,{children:[o("div",{className:r["result-amount"],children:["\u641C\u7D22\u5230"," ",s("span",{className:r.strong,children:a&&a.length||0})," ","\u6761\u7ED3\u679C"]}),a.length?s("div",{className:r["result-list"],children:a.map((t,e)=>o("div",{className:r["result-item"],onClick:()=>F(t),children:[s("div",{className:r.name,dangerouslySetInnerHTML:{__html:t.name}}),s("div",{className:r.content,dangerouslySetInnerHTML:{__html:t.content}})]},e))}):s(y,{image:y.PRESENTED_IMAGE_SIMPLE})]}):s("div",{style:{margin:"20px 0"},children:"\u6682\u65E0\u6570\u636E"})]})};export{q as default};
