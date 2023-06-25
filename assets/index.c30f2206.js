import{F as t,u as M,i as o,j as a,d as r,a as e,c as l,C as s,I as T,b as P,S as m,ah as n,at as N,B as R,a$ as W,aB as j,aE as z}from"./index.9e9e2773.js";import"./zh-cn.8e1ea1a7.js";import U from"./AddModal.6bcd9c12.js";import q from"./UpdateModal.d8e2d96d.js";import{T as L}from"./Table.1f1a1854.js";import{D as G}from"./index.b292dfd5.js";import{A as i}from"./index.4e95132f.js";import{D as E}from"./index.3e7617f1.js";import{E as V}from"./ExclamationCircleOutlined.77f05be8.js";import"./index.module.60dd8280.js";import"./index.52cedf01.js";import"./index.aa14af2d.js";import"./styleChecker.4d441e10.js";import"./css.d6e3059f.js";import"./useBreakpoint.21648553.js";import"./extendsObject.0dd479a6.js";import"./index.e5bc35fe.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.ad1167af.js";const{RangePicker:$}=G,de=()=>{const[c]=t.useForm(),C=()=>{c.resetFields()},h=u=>{console.log("Success:",u)},k=u=>{console.log("Failed:",u)},{themeStore:f}=M(),y=f.antdThemeColor,[B,d]=o.exports.useState(!1),b=()=>{d(!0)},[,v]=o.exports.useState(!1),x=u=>{v(!0)},[g,p]=o.exports.useState(!1),A=u=>{p(!0)},I=u=>{j.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(V,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>z.success({content:"\u5220\u9664\u6210\u529F"})})},[F,D]=o.exports.useState({current:1,pageSize:10,total:31}),S=u=>{D({...F,...u})},O=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5173\u952E\u5B57\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5173\u952E\u5B57",dataIndex:"keyword",key:"keyword"},{title:"\u5BF9\u5E94\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5173\u8054\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(R,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(r,{children:a(i.Group,{children:[e(i,{shape:"square",size:"large",style:{backgroundColor:y},children:"app"}),e(i,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u751F\u6548",dataIndex:"isEffective",key:"isEffective",render:u=>a(m,{children:[e(W,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>a(r,{children:[e(n,{type:"link",onClick:()=>x(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(n,{type:"link",onClick:()=>A(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(n,{type:"link",style:{color:"#ff7875"},onClick:()=>I(),children:"\u5220\u9664"})]})}],w=[{key:"1",number:"W00001",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0},{key:"2",number:"W00002",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"3",number:"W00003",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"4",number:"W00004",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0}];return a(r,{children:[e(l,{children:e(s,{span:24,children:a(t,{form:c,name:"search",initialValues:{isEffective:-1},onFinish:h,onFinishFailed:k,autoComplete:"off",children:[a(l,{gutter:20,children:[e(s,{span:6,children:e(t.Item,{label:"\u95EE\u9898",name:"issues",children:e(T,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:6,children:e(t.Item,{label:"\u751F\u6548",name:"isEffective",children:e(P,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548",options:[{value:-1,label:"\u5168\u90E8"},{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})})}),e(s,{span:12,children:e(t.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e($,{})})})]}),e(l,{children:e(s,{span:24,className:"tr",children:e(t.Item,{children:a(m,{children:[e(n,{onClick:C,children:"\u91CD\u7F6E"}),e(n,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})}),e(l,{children:e(s,{span:24,className:"tr",children:e(t.Item,{children:e(n,{icon:e(N,{}),onClick:b,children:"\u65B0\u589E"})})})})]})})}),e(l,{children:e(s,{span:24,children:e(L,{className:"issue-table",columns:O,dataSource:w,pagination:F,onChange:S})})}),e(U,{open:B,setOpen:d}),e(q,{open:g,setOpen:p})]})};export{de as default};
//# sourceMappingURL=index.c30f2206.js.map
