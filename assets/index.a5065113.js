import{m as w,r,u as L,aI as A,a as o,d as g,j as s,aW as _,I as T}from"./index.318fb3af.js";import{g as j,d as M}from"./devDocument.eb9ce96a.js";import{T as H}from"./index.fb4ad15a.js";const $="_strong_sra3k_10",P="_name_sra3k_24",R="_content_sra3k_34",a={"result-amount":"_result-amount_sra3k_1",strong:$,"result-list":"_result-list_sra3k_14","result-item":"_result-item_sra3k_14",name:P,content:R,"doc-tabs":"_doc-tabs_sra3k_41"},{Search:G}=T,J=()=>{const[l,y]=w.useMessage(),h=t=>{if(!t)return l.warning("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57");f(t)},[i,E]=r.exports.useState(),[m,S]=r.exports.useState(),[u,f]=r.exports.useState(),[n,d]=r.exports.useState();r.exports.useEffect(()=>{(async()=>{const{data:t}=await j();if(!t)return;if(!t.length)return l.warning("\u5E94\u7528\u9700\u8981\u81F3\u5C11\u63A5\u5165\u4E00\u4E2A\u57FA\u7840\u80FD\u529B\u624D\u80FD\u67E5\u770B\u5F00\u53D1\u6587\u6863\u5185\u5BB9");E([{capabilityId:0,projectName:"\u5168\u90E8"},...t])})()},[]);const D=t=>{S(+t)};r.exports.useEffect(()=>{!u||(async()=>{const{data:t}=await M({capabilityId:m||void 0,searchStr:u});d(t?b(t):[])})()},[m,u]);const{themeStore:I}=L(),b=t=>{const e=I.antdThemeColor;if(!!t)return t.map(c=>{const{name:x,content:B,...C}=c,p=/<span style='color:blue'>/g,F=x.replace(p,`<span style="color:${e}; font-weight: bold">`),k=B.replace(p,`<span style="color:${e}; font-weight: bold">`);return{...C,name:F,content:k}})},v=A(),N=t=>{const{capabilityId:e,directoryId:c}=t;v(`../../devDocument?capabilityId=${e}&directoryId=${c}`)};return o(g,{children:[y,s(G,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57",size:"large",style:{marginBottom:20},onSearch:h,enterButton:!0,allowClear:!0}),i&&s(H,{tabBarGutter:0,className:a["doc-tabs"],onChange:D,items:i.map(t=>{var e;return{label:t.projectName,key:((e=t.capabilityId)==null?void 0:e.toString())||"0"}})}),n?o(g,{children:[o("div",{className:a["result-amount"],children:["\u641C\u7D22\u5230"," ",s("span",{className:a.strong,children:n&&n.length||0})," ","\u6761\u7ED3\u679C"]}),n.length?s("div",{className:a["result-list"],children:n.map((t,e)=>o("div",{className:a["result-item"],onClick:()=>N(t),children:[s("div",{className:a.name,dangerouslySetInnerHTML:{__html:t.name}}),s("div",{className:a.content,dangerouslySetInnerHTML:{__html:t.content}})]},e))}):s(_,{image:_.PRESENTED_IMAGE_SIMPLE})]}):s("div",{style:{margin:"20px 0"},children:"\u6682\u65E0\u6570\u636E"})]})};export{J as default};
