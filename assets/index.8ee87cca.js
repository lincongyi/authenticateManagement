import{j as t,d as x,r as o,m as b,aE as _,a as r,M as v,D as h,c as S,C as T,aL as N,B as w,T as H}from"./index.c52fca20.js";import{C as I}from"./CheckCircleOutlined.da0e6509.js";import{a as R,b as q}from"./ability.563f5721.js";import{R as M}from"./index.287424bd.js";import"./index.b6117a9a.js";const O={"sub-title":"_sub-title_1258q_1"},$=({html:e})=>t(x,{children:e?t("div",{className:"markdown-body font-primary-color",dangerouslySetInnerHTML:{__html:e}}):"\u6682\u65E0\u4ECB\u7ECD"}),j="_icon_1qmxf_9",L="_active_1qmxf_33",P="_tips_1qmxf_50",l={"app-box":"_app-box_1qmxf_1",icon:j,active:L,"is-accessed":"_is-accessed_1qmxf_46",tips:P},G=({open:e,setOpen:p,id:A,appList:a})=>{const[c,i]=o.exports.useState(),d=(s,n)=>{s.accessType||i(n)},[m,f]=b.useMessage(),B=_();return r(x,{children:[f,r(v,{title:"\u7533\u8BF7\u63A5\u5165",centered:!0,open:e,onOk:()=>{if(!a)return;if(c===void 0)return m.warning("\u8BF7\u9009\u62E9\u63A5\u5165\u5E94\u7528");const{appId:s}=a[c];B(`/app/myApps/appInfo?appId=${s}`)},onCancel:()=>p(!1),width:640,children:[t(h,{}),t(S,{gutter:[20,20],children:a&&a.map((s,n)=>t(T,{span:8,onClick:()=>d(s,n),children:r("div",{className:`${l["app-box"]} ${s.accessType&&l["is-accessed"]} ${n===c&&l.active}`,children:[s.accessType?r("div",{className:l.tips,children:[t(I,{style:{marginRight:8}}),"\u5DF2\u63A5\u5165"]}):t("i",{className:l.icon}),s.appName,"\uFF08",s.appEnv==="prod"?"\u6B63\u5F0F":"\u6D4B\u8BD5","\uFF09"]})},n))}),t(h,{})]})]})},{Title:V}=H,W=()=>{const[e,p]=o.exports.useState(),[A,a]=o.exports.useState(),[c]=N(),i=Number(c.get("id"));o.exports.useEffect(()=>{if(!i)return F(-1);(async()=>{const{data:u}=await R({id:i});p(u),a(u==null?void 0:u.ableRemarkHtml)})()},[]);const d=[{label:"\u80FD\u529B\u4ECB\u7ECD",value:"1"},{label:"\u63A5\u53E3\u4ECB\u7ECD",value:"2"}],[m,f]=o.exports.useState("1"),B=({target:{value:u}})=>{f(u),a([e==null?void 0:e.ableRemarkHtml,e==null?void 0:e.apiRemarkHtml][+u-1])},[E,s]=o.exports.useState(!1),[n,C]=v.useModal(),F=_(),[y,D]=o.exports.useState(),k=async()=>{const u=c.get("id");if(!u)return!1;const{data:g}=await q({id:u});!g||!g.length?n.warning({title:"\u63D0\u793A",content:"\u6682\u65E0\u53EF\u63A5\u5165\u6B64\u57FA\u7840\u80FD\u529B\u7684\u5E94\u7528\uFF0C\u53BB\u3010\u6211\u7684\u5E94\u7528\u3011\u521B\u5EFA\u65B0\u5E94\u7528\u540E\u518D\u6DFB\u52A0\u6B64\u57FA\u7840\u80FD\u529B\u5427~",okText:"\u786E\u5B9A",onOk:()=>{F("/app/myApps")}}):(D(g),s(!0))};return r(x,{children:[C,t(V,{level:2,children:e==null?void 0:e.name}),r("div",{className:O["sub-title"],children:[t("p",{children:e==null?void 0:e.remark}),t(w,{type:"primary",onClick:k,children:"\u7533\u8BF7\u63A5\u5165"})]}),t(h,{}),t("div",{style:{marginBottom:40},children:t(M.Group,{options:d,onChange:B,value:m,optionType:"button",buttonStyle:"solid"})}),t($,{html:A}),t(G,{open:E,setOpen:s,appList:y,id:i})]})};export{W as default};
