import{j as t,F as v,r as o,m as k,u as E,a as r,M as _,D as F,R as S,C as T,b as I,B as N,T as R}from"./index.9074d6bf.js";import{C as w}from"./CheckCircleOutlined.d4efb68c.js";import{g as H,a as $}from"./ability.605d4753.js";import{R as q}from"./index.a2b66ec3.js";const M={"sub-title":"_sub-title_1258q_1"},O=({html:e})=>t(v,{children:e?t("div",{className:"markdown-body font-primary-color",dangerouslySetInnerHTML:{__html:e}}):"\u6682\u65E0\u4ECB\u7ECD"}),j="_icon_1qmxf_9",P="_active_1qmxf_33",G="_tips_1qmxf_50",l={"app-box":"_app-box_1qmxf_1",icon:j,active:P,"is-accessed":"_is-accessed_1qmxf_46",tips:G},L=({open:e,setOpen:p,id:d,appList:n})=>{const[c,i]=o.exports.useState(),m=(s,a)=>{s.accessType||i(a)},[f,g]=k.useMessage(),B=E();return r(v,{children:[g,r(_,{title:"\u7533\u8BF7\u63A5\u5165",centered:!0,open:e,onOk:()=>{if(!n)return;if(c===void 0)return f.warning("\u8BF7\u9009\u62E9\u63A5\u5165\u5E94\u7528");const{appId:s,appEnv:a}=n[c];B(`/app/myApps/appInfo?appId=${s}&capabilityId=${d}&env=${a}`)},onCancel:()=>p(!1),width:640,children:[t(F,{}),t(S,{gutter:[20,20],children:n&&n.map((s,a)=>t(T,{span:8,onClick:()=>m(s,a),children:r("div",{className:`${l["app-box"]} ${s.accessType&&l["is-accessed"]} ${a===c&&l.active}`,children:[s.accessType?r("div",{className:l.tips,children:[t(w,{style:{marginRight:8}}),"\u5DF2\u63A5\u5165"]}):t("i",{className:l.icon}),s.appName,"\uFF08",s.appEnv==="prod"?"\u6B63\u5F0F":"\u6D4B\u8BD5","\uFF09"]})},a))}),t(F,{})]})]})},{Title:V}=R,U=()=>{const[e,p]=o.exports.useState(),[d,n]=o.exports.useState(),[c]=I(),i=Number(c.get("id"));o.exports.useEffect(()=>{if(!i)return A(-1);(async()=>{const{data:u}=await H({id:i});p(u),n(u==null?void 0:u.ableRemarkHtml)})()},[]);const m=[{label:"\u80FD\u529B\u4ECB\u7ECD",value:"1"},{label:"\u63A5\u53E3\u4ECB\u7ECD",value:"2"}],[f,g]=o.exports.useState("1"),B=({target:{value:u}})=>{g(u),n([e==null?void 0:e.ableRemarkHtml,e==null?void 0:e.apiRemarkHtml][+u-1])},[x,s]=o.exports.useState(!1),[a,C]=_.useModal(),A=E(),[y,D]=o.exports.useState(),b=async()=>{const u=c.get("id");if(!u)return!1;const{data:h}=await $({id:u});!h||!h.length?a.warning({title:"\u63D0\u793A",content:"\u6682\u65E0\u53EF\u63A5\u5165\u6B64\u57FA\u7840\u80FD\u529B\u7684\u5E94\u7528\uFF0C\u53BB\u3010\u6211\u7684\u5E94\u7528\u3011\u521B\u5EFA\u65B0\u5E94\u7528\u540E\u518D\u6DFB\u52A0\u6B64\u57FA\u7840\u80FD\u529B\u5427~",okText:"\u786E\u5B9A",onOk:()=>{A("/app/myApps")}}):(D(h),s(!0))};return r(v,{children:[C,t(V,{level:2,children:e==null?void 0:e.name}),r("div",{className:M["sub-title"],children:[t("p",{children:e==null?void 0:e.remark}),t(N,{type:"primary",onClick:b,children:"\u7533\u8BF7\u63A5\u5165"})]}),t(F,{}),t("div",{style:{marginBottom:40},children:t(q.Group,{options:m,onChange:B,value:f,optionType:"button",buttonStyle:"solid"})}),t(O,{html:d}),t(L,{open:x,setOpen:s,appList:y,id:i})]})};export{U as default};
