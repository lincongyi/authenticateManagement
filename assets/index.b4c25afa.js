import{r,m,aI as g,a as s,d as p,j as e,c as h,C as _}from"./index.318fb3af.js";import{g as f}from"./ability.30b74ab8.js";import{C}from"./index.ded6b4a6.js";import"./index.fb4ad15a.js";const F="_container_3tm3g_1",v="_title_3tm3g_7",a={container:F,title:v,"card-content":"_card-content_3tm3g_18","card-name":"_card-name_3tm3g_23"},x=()=>{const[n,i]=r.exports.useState(),[c,o]=m.useMessage();r.exports.useEffect(()=>{(async()=>{const{data:t}=await f();if(!!t){if(!t.length)return c.warning("\u6682\u65E0\u53EF\u63A5\u5165\u7684\u57FA\u7840\u80FD\u529B");i(t)}})()},[]);const u=g(),l=t=>{u(`./introduction?id=${t}`)};return s(p,{children:[o,s("div",{className:a.container,children:[e("div",{className:a.title,children:"\u8BF7\u9009\u62E9\u4EE5\u4E0B\u57FA\u7840\u80FD\u529B\u8FDB\u884C\u67E5\u770B\u548C\u7533\u8BF7"}),e(h,{gutter:20,children:n&&n.map((t,d)=>e(_,{span:8,children:e(C,{style:{marginBottom:20},hoverable:!0,onClick:()=>l(t.id),children:s("div",{className:a["card-content"],children:[e("img",{width:80,height:80,style:{borderRadius:10},src:t.baseInfo.iconPath}),e("p",{className:a["card-name"],children:t.baseInfo.name})]})})},d))})]})]})};export{x as default};