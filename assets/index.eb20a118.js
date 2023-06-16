import{o as z,i as c,u as G,aH as H,F as r,aG as K,j as s,d as u,c as m,a as e,C as i,I as O,b as S,f as J,S as Q,ah as l}from"./index.73fee95b.js";import{d as h}from"./zh-cn.1b70905f.js";import{r as k,a as U,d as F}from"./date.92259085.js";import{d as W,e as X}from"./myApp.c5074629.js";import Y from"./index.6894f39a.js";import{T as Z}from"./Table.4d869474.js";import{D as ee}from"./index.fdf21990.js";import{T as te}from"./index.64800b11.js";import{D as g}from"./index.824c8d72.js";import{T as ie}from"./index.9c758450.js";import"./mock.a6ccb35d.js";import"./index.50f67139.js";import"./getDataOrAriaProps.fd89ab75.js";import"./index.87761515.js";import"./styleChecker.7ea20233.js";import"./css.d6e3059f.js";import"./useBreakpoint.25d76929.js";import"./extendsObject.8aefe001.js";import"./index.30dda027.js";import"./SwapRightOutlined.2ec43a5a.js";import"./EditOutlined.6c75fff4.js";const ae="_tag_mq23f_1",ne="_icon01_mq23f_13",se="_icon02_mq23f_16",oe="_icon03_mq23f_19",ce="_count_mq23f_22",o={tag:ae,icon01:ne,icon02:se,icon03:oe,count:ce},{RangePicker:A}=ee,re=()=>{const[n,C]=c.exports.useState();c.exports.useEffect(()=>{(async()=>{const{data:t}=await W();C(t)})()},[]);const{accessFormStore:a}=G();c.exports.useEffect(()=>{a.dictionary||(async()=>{const{data:t}=await H({showType:"appAccess"});a.setDictionary(t)})()},[]);const[N,_]=c.exports.useState();c.exports.useEffect(()=>{(async()=>{const{data:t}=await X();_(t.list)})()},[]);const[f]=r.useForm(),b=()=>{f.resetFields()},T=t=>{console.log("Success:",t);const{expiredRange:d,dateRange:p}=t;if(d||p){const y={};d&&(y.expiredRange=[h(d[0]).format(F),h(d[1]).format(F)]),p&&(y.dateRange=[h(p[0]).format(F),h(p[1]).format(F)]),console.log(y)}},R=t=>{console.log("Failed:",t)},D=K(),w=({id:t})=>{a.current={id:t,state:2},D("./accessForm")},$=({id:t})=>{D(`./authenticationData?id=${t}`)},q=t=>{console.log(t)},[B,j]=c.exports.useState(),[x,E]=c.exports.useState(!0),P=({id:t})=>{j(t),E(!0)},L=t=>{console.log(t)},[I,M]=c.exports.useState({current:1,pageSize:10,total:31}),V=t=>{M({...I,...t})},v=[{title:"\u5E94\u7528\u540D\u79F0",dataIndex:"appName",ellipsis:!0},{title:"\u63A5\u5165\u57FA\u7840\u80FD\u529B",ellipsis:!0,render:t=>e(u,{children:a.dictionary?a.getDictionaryItem("accessSkill")[t.appAbility].dictName:"-"})},{title:"clientId",dataIndex:"clientId",ellipsis:!0},{title:"\u6709\u6548\u65F6\u95F4",dataIndex:"expiredTime",ellipsis:!0},{title:"\u72B6\u6001",ellipsis:!0,render:t=>e(u,{children:a.dictionary&&e(te,{color:["success","warning","error"][t==null?void 0:t.state]||"default",children:a.dictionary?a.getDictionaryItem("appState")[t.state].dictName:"-"})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"addTime",ellipsis:!0},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>s(u,{children:[e(l,{type:"link",onClick:()=>w(t),children:"\u67E5\u770B"}),e(g,{type:"vertical",style:{margin:0}}),e(l,{type:"link",onClick:()=>$(t),children:"\u8BA4\u8BC1\u6570\u636E"}),e(g,{type:"vertical",style:{margin:0}}),e(l,{type:"link",onClick:()=>q(t),children:t.appEnv?"\u7533\u8BF7\u53C2\u6570\u66F4\u6539":"\u7533\u8BF7\u6B63\u5F0F\u8D26\u53F7"}),e(g,{type:"vertical",style:{margin:0}}),[1,2].includes(t.state)&&s(u,{children:[e(l,{type:"link",onClick:()=>P(t),children:"\u7533\u8BF7\u5EF6\u671F"}),e(g,{type:"vertical",style:{margin:0}})]}),e(l,{type:"link",onClick:()=>L(t),children:e(ie.Text,{type:"danger",children:"\u6CE8\u9500"})})]})}];return s(u,{children:[s(m,{gutter:20,style:{marginBottom:20},children:[e(i,{span:8,children:s("div",{className:`${o.tag} ${o.icon01}`,children:["\u6211\u7684\u5E94\u7528\u6570",e("span",{className:o.count,children:n==null?void 0:n.total})]})}),e(i,{span:8,children:s("div",{className:`${o.tag} ${o.icon02}`,children:["\u6B63\u5F0F\u5E94\u7528",e("span",{className:o.count,children:n==null?void 0:n.prod})]})}),e(i,{span:8,children:s("div",{className:`${o.tag} ${o.icon03}`,children:["\u6D4B\u8BD5\u5E94\u7528",e("span",{className:o.count,children:n==null?void 0:n.sit})]})})]}),e(m,{children:e(i,{span:24,children:e(r,{form:f,name:"search",onFinish:T,onFinishFailed:R,autoComplete:"off",children:s(m,{gutter:20,children:[e(i,{span:6,children:e(r.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",children:e(O,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",maxLength:10})})}),e(i,{span:6,children:e(r.Item,{label:"\u57FA\u7840\u80FD\u529B",name:"appAbility",children:e(S,{placeholder:"\u8BF7\u9009\u62E9\u57FA\u7840\u80FD\u529B",fieldNames:J,options:a.getDictionaryItem("accessSkill")})})}),e(i,{span:6,children:e(r.Item,{label:"\u72B6\u6001",name:"state",children:e(S,{placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",fieldNames:{label:"dictName",value:"dictValue"},options:a.getDictionaryItem("appState")})})}),e(i,{span:12,children:e(r.Item,{label:"\u6709\u6548\u671F\uFF1A",name:"expiredRange",children:e(A,{presets:k})})}),e(i,{span:12,children:e(r.Item,{label:"\u521B\u5EFA\u65F6\u95F4\uFF1A",name:"dateRange",children:e(A,{presets:k,disabledDate:U})})}),e(i,{span:24,className:"tr",children:e(r.Item,{children:s(Q,{children:[e(l,{onClick:b,children:"\u91CD\u7F6E"}),e(l,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})]})})})}),e(m,{children:e(i,{span:24,children:e(Z,{rowKey:"id",columns:v,dataSource:N,pagination:I,onChange:V})})}),x&&B&&e(Y,{open:x,setOpen:E,instanceId:B})]})},be=z(re);export{be as default};
//# sourceMappingURL=index.eb20a118.js.map
