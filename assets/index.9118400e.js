import{m as k,r as a,u as w,aE as L,a as o,d as g,j as s,aK as A,aG as _,I as M}from"./index.d120665a.js";import{g as T,d as H}from"./devDocument.dbeace6d.js";const $="_strong_sra3k_10",G="_name_sra3k_24",P="_content_sra3k_34",r={"result-amount":"_result-amount_sra3k_1",strong:$,"result-list":"_result-list_sra3k_14","result-item":"_result-item_sra3k_14",name:G,content:P,"doc-tabs":"_doc-tabs_sra3k_41"},{Search:R}=M,q=()=>{const[l,h]=k.useMessage(),y=t=>{if(!t)return l.warning("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57");D(t)},[i,E]=a.exports.useState(),[m,S]=a.exports.useState(),[u,D]=a.exports.useState(),[n,d]=a.exports.useState();a.exports.useEffect(()=>{(async()=>{const{data:t}=await T();if(!t)return;if(!t.length)return l.warning("\u5E94\u7528\u9700\u8981\u81F3\u5C11\u63A5\u5165\u4E00\u4E2A\u57FA\u7840\u80FD\u529B\u624D\u80FD\u67E5\u770B\u5F00\u53D1\u6587\u6863\u5185\u5BB9");E([{projectId:0,projectName:"\u5168\u90E8"},...t])})()},[]);const f=t=>{S(+t)};a.exports.useEffect(()=>{!u||(async()=>{const{data:t}=await H({projectId:m||void 0,searchStr:u});d(t?v(t):[])})()},[m,u]);const{themeStore:I}=w(),v=t=>{const e=I.antdThemeColor;if(!!t)return t.map(c=>{const{name:B,content:j,...C}=c,p=/<span style='color:blue'>/g,F=B.replace(p,`<span style="color:${e}; font-weight: bold">`),b=j.replace(p,`<span style="color:${e}; font-weight: bold">`);return{...C,name:F,content:b}})},N=L(),x=t=>{const{projectId:e,directoryId:c}=t;N(`../../devDocument?projectId=${e}&directoryId=${c}`)};return o(g,{children:[h,s(R,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57",size:"large",style:{marginBottom:20},onSearch:y,enterButton:!0,allowClear:!0}),i&&s(A,{tabBarGutter:0,className:r["doc-tabs"],onChange:f,items:i.map(t=>{var e;return{label:t.projectName,key:((e=t.projectId)==null?void 0:e.toString())||"0"}})}),n?o(g,{children:[o("div",{className:r["result-amount"],children:["\u641C\u7D22\u5230"," ",s("span",{className:r.strong,children:n&&n.length||0})," ","\u6761\u7ED3\u679C"]}),n.length?s("div",{className:r["result-list"],children:n.map((t,e)=>o("div",{className:r["result-item"],onClick:()=>x(t),children:[s("div",{className:r.name,dangerouslySetInnerHTML:{__html:t.name}}),s("div",{className:r.content,dangerouslySetInnerHTML:{__html:t.content}})]},e))}):s(_,{image:_.PRESENTED_IMAGE_SIMPLE})]}):s("div",{style:{margin:"20px 0"},children:"\u6682\u65E0\u6570\u636E"})]})};export{q as default};
