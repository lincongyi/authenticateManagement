import{F as t,u as N,k as o,j as a,e as i,a as e,c as l,d as n,I as R,b as W,C as m,l as C,S as E,aj as s,av as z,G,aD as U,aG as q}from"./index.db61cdac.js";import"./zh-cn.bfc8a1e2.js";import L from"./AddModal.f1126134.js";import V from"./UpdateModal.a9e0b63f.js";import{T as H}from"./Table.c9a0ee5b.js";import{D as J}from"./index.9c78e1c3.js";import{A as c}from"./index.d0885d05.js";import{B as K}from"./index.2279af1c.js";import{D as h}from"./index.e1a77acb.js";import{E as Q}from"./ExclamationCircleOutlined.75cf8177.js";import"./index.module.60dd8280.js";import"./index.2dab8cd2.js";import"./index.848799b2.js";import"./styleChecker.d7a4097f.js";import"./css.d6e3059f.js";import"./useBreakpoint.7d196e4d.js";import"./extendsObject.8959a7f7.js";import"./index.dd2cd4a6.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.aa6b129a.js";const{RangePicker:X}=J,Ee=()=>{const[r]=t.useForm(),f=(u,j)=>r.setFieldValue("date",j),k=()=>{r.resetFields()},y=u=>{console.log("Success:",u)},B=u=>{console.log("Failed:",u)},{themeStore:b}=N(),v=b.antdThemeColor,[g,d]=o.exports.useState(!1),x=()=>{d(!0)},[,A]=o.exports.useState(!1),I=u=>{A(!0)},[D,p]=o.exports.useState(!1),S=u=>{p(!0)},O=u=>{U.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(Q,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>q.success({content:"\u5220\u9664\u6210\u529F"})})},[F,w]=o.exports.useState({current:1,pageSize:10,total:31}),M=u=>{w({...F,...u})},T=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5173\u952E\u5B57\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5173\u952E\u5B57",dataIndex:"keyword",key:"keyword"},{title:"\u5BF9\u5E94\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5173\u8054\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(G,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:a(c.Group,{children:[e(c,{shape:"square",size:"large",style:{backgroundColor:v},children:"app"}),e(c,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u751F\u6548",dataIndex:"isEffective",key:"isEffective",render:u=>a(E,{children:[e(K,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>a(i,{children:[e(s,{type:"link",onClick:()=>I(),children:"\u8BE6\u60C5"}),e(h,{type:"vertical"}),e(s,{type:"link",onClick:()=>S(),children:"\u4FEE\u6539"}),e(h,{type:"vertical"}),e(s,{type:"link",style:{color:"#ff7875"},onClick:()=>O(),children:"\u5220\u9664"})]})}],P=[{key:"1",number:"W00001",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0},{key:"2",number:"W00002",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"3",number:"W00003",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"4",number:"W00004",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0}];return a(i,{children:[e(l,{children:e(n,{span:24,children:a(t,{form:r,name:"search",initialValues:{isEffective:-1},onFinish:y,onFinishFailed:B,autoComplete:"off",children:[a(l,{gutter:20,children:[e(n,{span:6,children:e(t.Item,{label:"\u95EE\u9898",name:"issues",children:e(R,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(n,{span:6,children:e(t.Item,{label:"\u751F\u6548",name:"isEffective",children:e(W,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548",options:[{value:-1,label:"\u5168\u90E8"},{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})})}),e(n,{span:12,children:e(t.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(m,{locale:C,children:e(X,{onChange:f})})})})]}),e(l,{children:e(n,{span:24,className:"tr",children:e(t.Item,{children:a(E,{children:[e(s,{onClick:k,children:"\u91CD\u7F6E"}),e(s,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})}),e(l,{children:e(n,{span:24,className:"tr",children:e(t.Item,{children:e(s,{icon:e(z,{}),onClick:x,children:"\u65B0\u589E"})})})})]})})}),e(l,{children:e(n,{span:24,children:e(m,{locale:C,children:e(H,{className:"issue-table",columns:T,dataSource:P,pagination:F,onChange:M})})})}),e(L,{open:g,setOpen:d}),e(V,{open:D,setOpen:p})]})};export{Ee as default};
//# sourceMappingURL=index.7993ab19.js.map
