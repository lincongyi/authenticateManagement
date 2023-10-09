import{r,j as e,A as U,o as W,c0 as X,F as i,aI as Y,a as p,d as m,c as y,C as n,I as Z,S as E,f as b,b as ee,B as g}from"./index.0174d8c9.js";import{D as te,d as _}from"./zh-cn.298c932b.js";import{r as ae,a as ne,d as w}from"./date.e484b8f8.js";import{g as ce}from"./ability.2c1e7e4d.js";import{o as se,p as ie}from"./myApp.f648cf9d.js";import oe from"./EnableModal.1acd7268.js";import{T as re}from"./Table.5c102345.js";import{T as le}from"./index.2429d514.js";import"./index.30202540.js";import"./styleChecker.ea087557.js";import"./addEventListener.8c1daf63.js";import"./useBreakpoint.a52e56c0.js";import"./Pagination.82ab5c4a.js";import"./index.e5d4df1e.js";import"./index.b0497e77.js";import"./index.f09d50d3.js";import"./index.1a61e6c9.js";import"./index.7ed1c79b.js";var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"appstore-add",theme:"outlined"};const pe=ue;var de=function(A,l){return e(U,{...A,ref:l,icon:pe})};const me=r.exports.forwardRef(de),he="_tag_qn393_1",ge="_last_qn393_21",Fe="_icon01_qn393_24",fe="_icon02_qn393_27",ye="_icon03_qn393_30",Ee="_count_qn393_33",o={tag:he,last:ge,icon01:Fe,icon02:fe,icon03:ye,count:Ee},{RangePicker:Ae}=te,Ie=()=>{const[c,A]=r.exports.useState();r.exports.useEffect(()=>{(async()=>{const{data:t}=await se();A(t)})()},[]);const{dictionaryStore:l,getDictionaryItemName:I}=X(),[h,T]=r.exports.useState();r.exports.useEffect(()=>{(async()=>{const{data:t}=await ce();if(!t)return;const s=t.map((a,u)=>({label:a.baseInfo.name,value:a.id}));T(s)})()},[]);const[V,$]=r.exports.useState(),k=t=>{const s=[];for(let a=0;a<t.length;a++){const u={...t[a]},d={...t[a+1]};u.appId===d.appId?(s.push({...u,rowSpan:2},{...d,rowSpan:0}),++a):s.push({...u,rowSpan:1})}return s},v=async()=>{const{dateRange:t,...s}=f.getFieldsValue(),a={...s};t&&(a.startTime=_(t[0]).format(w),a.endTime=_(t[1]).format(w));const{data:u}=await ie({...a,...F});if(!u)return;const{list:d,pageNum:B,pageSize:K,total:J}=u,Q=k(d);$(Q),S({pageNum:B,pageSize:K,total:J})},[F,S]=r.exports.useState({pageNum:1,pageSize:10,total:0}),z=t=>{const s=t.current||1;S({...F,pageNum:s})};r.exports.useEffect(()=>{v()},[F.pageNum]);const[f]=i.useForm(),H=()=>{f.resetFields()},N=async t=>{v()},q=t=>{console.log("Failed:",t)},x=Y(),O=()=>{x("./appForm")},R=t=>{x(`./appInfo?appId=${t}`)},[j,D]=r.exports.useState(!1),[C,L]=r.exports.useState(),P=t=>{L(t),D(!0)},M=t=>t?t.split(",").map(u=>{const d=h==null?void 0:h.find(B=>B.value===+u);return(d==null?void 0:d.label)||""}).join(","):"-",G=[{title:"\u5E94\u7528\u540D\u79F0",dataIndex:"appName",ellipsis:!0,onCell:t=>({rowSpan:t.rowSpan})},{title:"\u63A5\u5165\u73AF\u5883",render:t=>p(m,{children:[I("appEnv",t.appEnv),"\u73AF\u5883"]})},{title:"\u5E94\u7528\u7C7B\u578B",render:t=>e(m,{children:I("appType",t.appType)})},{title:"\u5DF2\u63A5\u5165\u57FA\u7840\u80FD\u529B",ellipsis:!0,render:t=>e(m,{children:M(t.accessCapability)})},{title:"clientId",dataIndex:"clientId",ellipsis:!0},{title:"\u72B6\u6001",ellipsis:!0,render:t=>e(m,{children:l.dictionary&&e(le,{color:["success","warning","default","error"][t==null?void 0:t.state]||"success",children:e(m,{children:I("appState",t.state)||"\u6B63\u5E38"})})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",ellipsis:!0},{title:"\u64CD\u4F5C",key:"action",width:250,onCell:t=>({rowSpan:t.rowSpan}),render:t=>p(m,{children:[e(g,{type:"link",onClick:()=>R(t.appId),children:"\u67E5\u770B\u8BE6\u60C5"}),e(g,{type:"link",onClick:()=>P(t),children:`\u7533\u8BF7${t.state===3?"\u542F\u7528":"\u505C\u7528"}`})]})}];return p(m,{children:[p(y,{gutter:20,style:{marginBottom:20},children:[e(n,{span:8,children:p("div",{className:`${o.tag} ${o.icon01}`,children:[e("span",{className:`${o.count} font-primary-color`,children:c==null?void 0:c.total}),e("span",{className:"font-secondary-color",children:"\u6211\u7684\u5E94\u7528\u6570"})]})}),e(n,{span:8,children:p("div",{className:`${o.tag} ${o.icon02}`,children:[e("span",{className:`${o.count} font-primary-color`,children:c==null?void 0:c.prod}),e("span",{className:"font-secondary-color",children:"\u6B63\u5F0F\u5E94\u7528"})]})}),e(n,{span:8,children:p("div",{className:`${o.tag} ${o.icon03} ${o.last}`,children:[e("span",{className:`${o.count} font-primary-color`,children:c==null?void 0:c.sit}),e("span",{className:"font-secondary-color",children:"\u6D4B\u8BD5\u5E94\u7528"})]})})]}),e(y,{children:e(n,{span:24,children:e(i,{form:f,name:"search",onFinish:N,onFinishFailed:q,autoComplete:"off",initialValues:{appEnv:null,capabilityId:null,appType:null,state:null},children:p(y,{gutter:20,children:[e(n,{span:6,children:e(i.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",children:e(Z,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",maxLength:10})})}),e(n,{span:6,children:l.dictionary&&e(i.Item,{label:"\u63A5\u5165\u73AF\u5883",name:"appEnv",children:e(E,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u73AF\u5883",fieldNames:b,options:[{dictName:"\u5168\u90E8",dictValue:null},...l.getDictionaryItem("appEnv")]})})}),e(n,{span:6,children:h&&e(i.Item,{label:"\u57FA\u7840\u80FD\u529B",name:"capabilityId",children:e(E,{placeholder:"\u8BF7\u9009\u62E9\u57FA\u7840\u80FD\u529B",options:[{label:"\u5168\u90E8",value:null},...h]})})}),e(n,{span:6,children:l.dictionary&&e(i.Item,{label:"\u5E94\u7528\u7C7B\u578B",name:"appType",children:e(E,{placeholder:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B",fieldNames:b,options:[{dictName:"\u5168\u90E8",dictValue:null},...l.getDictionaryItem("appType")]})})}),e(n,{span:6,children:l.dictionary&&e(i.Item,{label:"\u72B6\u6001",name:"state",children:e(E,{placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",fieldNames:b,options:[{dictName:"\u5168\u90E8",dictValue:null},...l.getDictionaryItem("appState")]})})}),e(n,{span:6,children:e(i.Item,{label:"\u521B\u5EFA\u65F6\u95F4\uFF1A",name:"dateRange",children:e(Ae,{presets:ae,disabledDate:ne})})}),e(n,{span:12,className:"tr",children:e(i.Item,{children:p(ee,{children:[e(g,{onClick:H,children:"\u91CD\u7F6E"}),e(g,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})}),e(n,{span:24,className:"tr",children:e(i.Item,{children:e(g,{type:"primary",icon:e(me,{}),onClick:O,children:"\u521B\u5EFA\u5355\u4F4D\u5E94\u7528"})})})]})})})}),e(y,{children:e(n,{span:24,children:e(re,{rowKey:"clientId",columns:G,dataSource:V,pagination:F,onChange:z})})}),C&&e(oe,{open:j,setOpen:D,item:C,callback:()=>N(f.getFieldsValue())})]})},Re=W(Ie);export{Re as default};
