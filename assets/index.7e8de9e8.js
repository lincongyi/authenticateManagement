import{F as n,k as a,u as V,j as o,e as i,a as e,c as l,d as s,I as H,C as E,l as k,aj as r,S as y,av as J,G as K,aD as Q,aG as X}from"./index.a5d6ee18.js";import"./zh-cn.a16fcad4.js";import Y from"./UploadModal.73d19076.js";import Z from"./AddModal.41f2dd88.js";import _ from"./CheckModal.08744559.js";import $ from"./UpdateModal.950b6b99.js";import ee from"./SettingsModal.3e9950f0.js";import{r as te,a as ue}from"./date.346e870f.js";import{T as ae}from"./Table.bea67527.js";import{D as oe}from"./index.9b756f83.js";import{A as p}from"./index.98450367.js";import{B as ne}from"./index.bb29fe72.js";import{D as f}from"./index.74b1bb9a.js";import{U as se}from"./UploadOutlined.52005809.js";import{E as re}from"./ExclamationCircleOutlined.590e3986.js";import"./index.module.eeaf38e8.js";import"./index.c614d53f.js";import"./EditOutlined.67041f27.js";import"./styleChecker.e822d741.js";import"./issue-app-icon-03.6a3d2157.js";import"./MobileOutlined.bf265fb0.js";import"./LikeOutlined.7d858030.js";import"./index.9b5d57d8.js";import"./index.d0c6bdb5.js";import"./css.d6e3059f.js";import"./useBreakpoint.6305e74f.js";import"./extendsObject.b4655f06.js";import"./index.15b27e6b.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.df76a541.js";const{RangePicker:le}=oe,we=()=>{const[d]=n.useForm(),[g,x]=a.exports.useState([]),D=(t,u)=>{x(u)},O=t=>{t||d.setFieldValue("dateRange",g)},B=t=>{console.log("Success:",t)},A=t=>{console.log("Failed:",t)},[S,c]=a.exports.useState(!1),b=()=>{c(!0)},{themeStore:M}=V(),I=M.antdThemeColor,[v,m]=a.exports.useState(!1),T=()=>{m(!0)},[U,F]=a.exports.useState(!1),P=t=>{F(!0)},[R,h]=a.exports.useState(!1),j=t=>{h(!0)},N=t=>{Q.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(re,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{X.success({content:"\u5220\u9664\u6210\u529F"})}})},[W,w]=a.exports.useState(!1),[C,z]=a.exports.useState({current:1,pageSize:10,total:31}),G=t=>{z({...C,...t})},q=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u95EE\u9898\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5BF9\u5E94\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(K,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:o(p.Group,{children:[e(p,{shape:"square",size:"large",style:{backgroundColor:I},children:"app"}),e(p,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(t,u)=>t.helpCount-u.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(t,u)=>t.unhelpCount-u.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(t,u)=>t.sort-u.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u63A8\u8350",dataIndex:"isDisplay",key:"isDisplay",render:t=>o(y,{children:[e(ne,{color:t?"#52c41a":"#ff7875"}),t?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>o(i,{children:[e(r,{type:"link",onClick:()=>P(),children:"\u8BE6\u60C5"}),e(f,{type:"vertical"}),e(r,{type:"link",onClick:()=>j(),children:"\u4FEE\u6539"}),e(f,{type:"vertical"}),e(r,{type:"link",style:{color:"#ff7875"},onClick:()=>N(),children:"\u5220\u9664"})]})}],L=[{key:"1",number:"W00001",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return o(i,{children:[e(l,{children:e(s,{span:24,children:o(n,{form:d,name:"search",onFinish:B,onFinishFailed:A,autoComplete:"off",children:[o(l,{gutter:20,children:[e(s,{span:6,children:e(n.Item,{label:"\u95EE\u9898",name:"issues",children:e(H,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:12,children:e(n.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(E,{locale:k,children:e(le,{presets:te,disabledDate:ue,onChange:D,onOpenChange:O})})})})]}),e(l,{children:e(s,{span:24,className:"tr",children:e(n.Item,{children:e(r,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})})})}),e(l,{children:e(s,{span:24,className:"tr",children:e(n.Item,{children:o(y,{children:[e(r,{icon:e(se,{}),onClick:b,children:"\u6279\u91CF\u5BFC\u5165"}),e(r,{icon:e(J,{}),onClick:T,children:"\u65B0\u589E"})]})})})})]})})}),e(l,{children:e(s,{span:24,children:e(E,{locale:k,children:e(ae,{className:"issue-table",columns:q,dataSource:L,pagination:C,onChange:G})})})}),e(Y,{open:S,setOpen:c}),e(Z,{open:v,setOpen:m}),e(_,{open:U,setOpen:F}),e($,{open:R,setOpen:h}),e(ee,{open:W,setOpen:w})]})};export{we as default};
//# sourceMappingURL=index.7e8de9e8.js.map