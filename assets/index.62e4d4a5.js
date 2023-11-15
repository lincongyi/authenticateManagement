import{F as t,u as N,r as o,m as P,a,d as r,j as e,c as l,C as s,I as R,S as W,b as m,B as n,e as j,aw as z,b9 as U,M as q}from"./index.8fb74e68.js";import{D as L}from"./zh-cn.21cecca6.js";import G from"./AddModal.eedf538d.js";import H from"./UpdateModal.407223af.js";import{T as V}from"./Table.4bd714b3.js";import{A as i}from"./index.a5093dff.js";import{D as E}from"./index.865e0806.js";import{E as J}from"./ExclamationCircleOutlined.2fa10260.js";import"./index.module.60dd8280.js";import"./index.afd2eec3.js";import"./index.c65d2c3d.js";import"./index.b3c18c15.js";import"./styleChecker.e824fab1.js";import"./addEventListener.027c67a0.js";import"./useBreakpoint.902a4884.js";import"./Pagination.9e4fe21e.js";import"./index.2e6f1476.js";import"./index.0041396f.js";const{RangePicker:K}=L,pe=()=>{const[c]=t.useForm(),C=()=>{c.resetFields()},h=u=>{console.log("Success:",u)},k=u=>{console.log("Failed:",u)},{themeStore:f}=N(),y=f.antdThemeColor,[B,d]=o.exports.useState(!1),b=()=>{d(!0)},[,g]=o.exports.useState(!1),x=u=>{g(!0)},[v,p]=o.exports.useState(!1),A=u=>{p(!0)},[I,D]=P.useMessage(),S=u=>{q.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(J,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>I.success({content:"\u5220\u9664\u6210\u529F"})})},[F,w]=o.exports.useState({pageNum:1,pageSize:10,total:31}),M=u=>{w({...F,...u})},O=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5173\u952E\u5B57\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5173\u952E\u5B57",dataIndex:"keyword",key:"keyword"},{title:"\u5BF9\u5E94\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5173\u8054\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(z,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(r,{children:a(i.Group,{children:[e(i,{shape:"square",size:"large",style:{backgroundColor:y},children:"app"}),e(i,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u751F\u6548",dataIndex:"isEffective",key:"isEffective",render:u=>a(m,{children:[e(U,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>a(r,{children:[e(n,{type:"link",onClick:()=>x(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(n,{type:"link",onClick:()=>A(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(n,{type:"link",style:{color:"#ff7875"},onClick:()=>S(),children:"\u5220\u9664"})]})}],T=[{key:"1",number:"W00001",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0},{key:"2",number:"W00002",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"3",number:"W00003",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:1},{key:"4",number:"W00004",keyword:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",date:"2023-01-01",isEffective:0}];return a(r,{children:[D,e(l,{children:e(s,{span:24,children:a(t,{form:c,name:"search",initialValues:{isEffective:-1},onFinish:h,onFinishFailed:k,autoComplete:"off",children:[a(l,{gutter:20,children:[e(s,{span:6,children:e(t.Item,{label:"\u95EE\u9898",name:"issues",children:e(R,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:6,children:e(t.Item,{label:"\u751F\u6548",name:"isEffective",children:e(W,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548",options:[{value:-1,label:"\u5168\u90E8"},{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})})}),e(s,{span:12,children:e(t.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(K,{})})})]}),e(l,{children:e(s,{span:24,className:"tr",children:e(t.Item,{children:a(m,{children:[e(n,{onClick:C,children:"\u91CD\u7F6E"}),e(n,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})}),e(l,{children:e(s,{span:24,className:"tr",children:e(t.Item,{children:e(n,{icon:e(j,{}),onClick:b,children:"\u65B0\u589E"})})})})]})})}),e(l,{children:e(s,{span:24,children:e(V,{className:"issue-table",columns:O,dataSource:T,pagination:F,onChange:M})})}),e(G,{open:B,setOpen:d}),e(H,{open:v,setOpen:p})]})};export{pe as default};