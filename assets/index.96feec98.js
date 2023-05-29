import{o as Q,k as i,u as U,aJ as W,F as r,aI as X,j as o,e as u,c as p,a as e,d as n,I as Y,b as D,f as Z,C as E,l as B,S as ee,aj as l}from"./index.01807550.js";import"./zh-cn.3484fb3c.js";import{r as C,a as te}from"./date.55626342.js";import{d as ne,e as ae}from"./myApp.a5472ee2.js";import ie from"./index.4bbcc753.js";import{T as se}from"./Table.b7904f80.js";import{D as oe}from"./index.6ba57937.js";import{T as ce}from"./index.d10226f3.js";import{D as m}from"./index.86e86b0d.js";import{T as re}from"./index.c0f99e33.js";import"./mock.06b0b411.js";import"./index.9710805a.js";import"./getDataOrAriaProps.fd89ab75.js";import"./index.abc95a40.js";import"./styleChecker.8b7f6cc9.js";import"./css.d6e3059f.js";import"./useBreakpoint.669942f0.js";import"./extendsObject.63ea3b39.js";import"./index.1e1d1840.js";import"./SwapRightOutlined.1bff3a49.js";import"./EditOutlined.1a1ecb3b.js";const le="_tag_mq23f_1",ue="_icon01_mq23f_13",de="_icon02_mq23f_16",pe="_icon03_mq23f_19",me="_count_mq23f_22",c={tag:le,icon01:ue,icon02:de,icon03:pe,count:me},{RangePicker:I}=oe,he=()=>{const[s,S]=i.exports.useState();i.exports.useEffect(()=>{(async()=>{const{data:t}=await ne();S(t)})()},[]);const{accessFormStore:a}=U();i.exports.useEffect(()=>{a.dictionary||(async()=>{const{data:t}=await W({showType:"appAccess"});a.setDictionary(t)})()},[]);const[k,A]=i.exports.useState();i.exports.useEffect(()=>{(async()=>{const{data:t}=await ae();A(t.list)})()},[]);const[d]=r.useForm(),[N,_]=i.exports.useState([]),b=(t,h)=>{_(h)},R=t=>{t||d.setFieldValue("expiredRange",N)},[T,w]=i.exports.useState([]),$=(t,h)=>{w(h)},q=t=>{t||d.setFieldValue("dateRange",T)},P=()=>{d.resetFields()},j=t=>{console.log("Success:",t)},O=t=>{console.log("Failed:",t)},g=X(),V=({id:t})=>{a.current={id:t,state:2},g("./accessForm")},v=({id:t})=>{g(`./authenticationData?id=${t}`)},L=t=>{console.log(t)},[F,M]=i.exports.useState(),[y,f]=i.exports.useState(!0),z=({id:t})=>{M(t),f(!0)},J=t=>{console.log(t)},[x,K]=i.exports.useState({current:1,pageSize:10,total:31}),G=t=>{K({...x,...t})},H=[{title:"\u5E94\u7528\u540D\u79F0",dataIndex:"appName",ellipsis:!0},{title:"\u63A5\u5165\u57FA\u7840\u80FD\u529B",ellipsis:!0,render:t=>e(u,{children:a.dictionary?a.getDictionaryItem("accessSkill")[t.appAbility].dictName:"-"})},{title:"clientId",dataIndex:"clientId",ellipsis:!0},{title:"\u6709\u6548\u65F6\u95F4",dataIndex:"expiredTime",ellipsis:!0},{title:"\u72B6\u6001",ellipsis:!0,render:t=>e(u,{children:a.dictionary&&e(ce,{color:["success","warning","error"][t==null?void 0:t.state]||"default",children:a.dictionary?a.getDictionaryItem("appState")[t.state].dictName:"-"})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"addTime",ellipsis:!0},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>o(u,{children:[e(l,{type:"link",onClick:()=>V(t),children:"\u67E5\u770B"}),e(m,{type:"vertical",style:{margin:0}}),e(l,{type:"link",onClick:()=>v(t),children:"\u8BA4\u8BC1\u6570\u636E"}),e(m,{type:"vertical",style:{margin:0}}),e(l,{type:"link",onClick:()=>L(t),children:t.appEnv?"\u7533\u8BF7\u53C2\u6570\u66F4\u6539":"\u7533\u8BF7\u6B63\u5F0F\u8D26\u53F7"}),e(m,{type:"vertical",style:{margin:0}}),[1,2].includes(t.state)&&o(u,{children:[e(l,{type:"link",onClick:()=>z(t),children:"\u7533\u8BF7\u5EF6\u671F"}),e(m,{type:"vertical",style:{margin:0}})]}),e(l,{type:"link",onClick:()=>J(t),children:e(re.Text,{type:"danger",children:"\u6CE8\u9500"})})]})}];return o(u,{children:[o(p,{gutter:20,style:{marginBottom:20},children:[e(n,{span:8,children:o("div",{className:`${c.tag} ${c.icon01}`,children:["\u6211\u7684\u5E94\u7528\u6570",e("span",{className:c.count,children:s==null?void 0:s.total})]})}),e(n,{span:8,children:o("div",{className:`${c.tag} ${c.icon02}`,children:["\u6B63\u5F0F\u5E94\u7528",e("span",{className:c.count,children:s==null?void 0:s.prod})]})}),e(n,{span:8,children:o("div",{className:`${c.tag} ${c.icon03}`,children:["\u6D4B\u8BD5\u5E94\u7528",e("span",{className:c.count,children:s==null?void 0:s.sit})]})})]}),e(p,{children:e(n,{span:24,children:e(r,{form:d,name:"search",onFinish:j,onFinishFailed:O,autoComplete:"off",children:o(p,{gutter:20,children:[e(n,{span:6,children:e(r.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",children:e(Y,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",maxLength:10})})}),e(n,{span:6,children:e(r.Item,{label:"\u57FA\u7840\u80FD\u529B",name:"appAbility",children:e(D,{placeholder:"\u8BF7\u9009\u62E9\u57FA\u7840\u80FD\u529B",fieldNames:Z,options:a.getDictionaryItem("accessSkill")})})}),e(n,{span:6,children:e(r.Item,{label:"\u72B6\u6001",name:"state",children:e(D,{placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",fieldNames:{label:"dictName",value:"dictValue"},options:a.getDictionaryItem("appState")})})}),e(n,{span:12,children:e(r.Item,{label:"\u6709\u6548\u671F\uFF1A",name:"expiredRange",children:e(E,{locale:B,children:e(I,{presets:C,onChange:b,onOpenChange:R})})})}),e(n,{span:12,children:e(r.Item,{label:"\u521B\u5EFA\u65F6\u95F4\uFF1A",name:"dateRange",children:e(E,{locale:B,children:e(I,{presets:C,disabledDate:te,onChange:$,onOpenChange:q})})})}),e(n,{span:24,className:"tr",children:e(r.Item,{children:o(ee,{children:[e(l,{onClick:P,children:"\u91CD\u7F6E"}),e(l,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})]})})})}),e(p,{children:e(n,{span:24,children:e(se,{rowKey:"id",columns:H,dataSource:k,pagination:x,onChange:G})})}),y&&F&&e(ie,{open:y,setOpen:f,instanceId:F})]})},Pe=Q(he);export{Pe as default};
//# sourceMappingURL=index.96feec98.js.map
