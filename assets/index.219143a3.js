import{j as t,d as B,r as o,m as D,aI as E,a as r,M as v,c as S,C as I,b4 as T,B as N}from"./index.43a2e21b.js";import{D as A}from"./index.81432aeb.js";import{C as w}from"./CheckCircleOutlined.164948cb.js";import{a as H,b as R}from"./ability.becc103e.js";import{R as q}from"./index.b0318238.js";import{T as M}from"./index.741fa87b.js";import"./index.db651842.js";import"./EditOutlined.020e8724.js";import"./styleChecker.94b62444.js";const $={"sub-title":"_sub-title_1258q_1"},O=({html:e})=>t(B,{children:e?t("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e}}):"\u6682\u65E0\u4ECB\u7ECD"}),j="_icon_1qmxf_9",P="_active_1qmxf_33",G="_tips_1qmxf_50",l={"app-box":"_app-box_1qmxf_1",icon:j,active:P,"is-accessed":"_is-accessed_1qmxf_46",tips:G},L=({open:e,setOpen:p,id:d,appList:a})=>{const[c,i]=o.exports.useState(),m=(s,n)=>{s.accessType||i(n)},[f,g]=D.useMessage(),h=E();return r(B,{children:[g,r(v,{title:"\u7533\u8BF7\u63A5\u5165",centered:!0,open:e,onOk:()=>{if(!a)return;if(!c)return f.warning("\u8BF7\u9009\u62E9\u63A5\u5165\u5E94\u7528");const{appId:s}=a[c];h(`/app/myApps/appInfo/access?appId=${s}&capabilityId=${d}`)},onCancel:()=>p(!1),width:640,children:[t(A,{}),t(S,{gutter:[20,20],children:a&&a.map((s,n)=>t(I,{span:8,onClick:()=>m(s,n),children:r("div",{className:`${l["app-box"]} ${s.accessType&&l["is-accessed"]} ${n===c&&l.active}`,children:[s.accessType?r("div",{className:l.tips,children:[t(w,{style:{marginRight:8}}),"\u5DF2\u63A5\u5165"]}):t("i",{className:l.icon}),s.appName]})},n))}),t(A,{})]})]})},{Title:V}=M,ee=()=>{const[e,p]=o.exports.useState(),[d,a]=o.exports.useState(),[c]=T(),i=Number(c.get("id"));o.exports.useEffect(()=>{if(!i)return C(-1);(async()=>{const{data:u}=await H({id:i});p(u),a(u==null?void 0:u.ableRemarkHtml)})()},[]);const m=[{label:"\u80FD\u529B\u4ECB\u7ECD",value:"1"},{label:"\u63A5\u53E3\u4ECB\u7ECD",value:"2"}],[f,g]=o.exports.useState("1"),h=({target:{value:u}})=>{g(u),a([e==null?void 0:e.ableRemarkHtml,e==null?void 0:e.apiRemarkHtml][+u-1])},[_,s]=o.exports.useState(!1),[n,y]=v.useModal(),C=E(),[F,b]=o.exports.useState(),k=async()=>{const u=c.get("id");if(!u)return!1;const{data:x}=await R({id:u});!x||!x.length?n.warning({title:"\u63D0\u793A",content:"\u6682\u65E0\u53EF\u63A5\u5165\u6B64\u57FA\u7840\u80FD\u529B\u7684\u5E94\u7528\uFF0C\u53BB\u3010\u6211\u7684\u5E94\u7528\u3011\u521B\u5EFA\u65B0\u5E94\u7528\u540E\u518D\u6DFB\u52A0\u6B64\u57FA\u7840\u80FD\u529B\u5427~",okText:"\u786E\u5B9A",onOk:()=>{C("/app/myApps")}}):(b(x),s(!0))};return r(B,{children:[y,t(V,{level:2,children:e==null?void 0:e.name}),r("div",{className:$["sub-title"],children:[t("p",{children:e==null?void 0:e.remark}),t(N,{type:"primary",onClick:k,children:"\u7533\u8BF7\u63A5\u5165"})]}),t(A,{}),t("div",{style:{marginBottom:40},children:t(q.Group,{options:m,onChange:h,value:f,optionType:"button",buttonStyle:"solid"})}),t(O,{html:d}),t(L,{open:_,setOpen:s,appList:F,id:i})]})};export{ee as default};
