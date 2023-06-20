import{F as o,i as a,u as w,j as u,d as i,a as e,c as l,C as n,I as z,ah as s,S as C,at as q,B as L,aB as R,aE as G}from"./index.d57a3d71.js";import"./zh-cn.0963582e.js";import H from"./UploadModal.cc4d6ffb.js";import J from"./AddModal.91222725.js";import K from"./CheckModal.e84695e6.js";import Q from"./UpdateModal.970953c0.js";import V from"./SettingsModal.b1ad1034.js";import{r as X,a as Y}from"./date.8ee5b433.js";import{T as Z}from"./Table.7fc152fb.js";import{D as _}from"./index.a267a919.js";import{A as p}from"./index.106a05d6.js";import{B as $}from"./index.dc4e9da0.js";import{D as E}from"./index.838ae4ea.js";import{U as ee}from"./UploadOutlined.fc0b5392.js";import{E as te}from"./ExclamationCircleOutlined.cef0abc8.js";import"./index.module.eeaf38e8.js";import"./index.690ce449.js";import"./EditOutlined.d9f22aab.js";import"./styleChecker.0f11896d.js";import"./issue-app-icon-03.6a3d2157.js";import"./MobileOutlined.0ab23188.js";import"./LikeOutlined.cf9516ba.js";import"./index.7448ecc1.js";import"./index.32853a3c.js";import"./css.d6e3059f.js";import"./useBreakpoint.c68fce60.js";import"./extendsObject.edb1dd83.js";import"./index.716f2d51.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.a5fa61b3.js";const{RangePicker:ue}=_,Ue=()=>{const[k]=o.useForm(),y=t=>{console.log("Success:",t)},f=t=>{console.log("Failed:",t)},[x,d]=a.exports.useState(!1),B=()=>{d(!0)},{themeStore:g}=w(),O=g.antdThemeColor,[D,c]=a.exports.useState(!1),A=()=>{c(!0)},[b,m]=a.exports.useState(!1),M=t=>{m(!0)},[S,F]=a.exports.useState(!1),I=t=>{F(!0)},v=t=>{R.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(te,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{G.success({content:"\u5220\u9664\u6210\u529F"})}})},[T,U]=a.exports.useState(!1),[h,P]=a.exports.useState({current:1,pageSize:10,total:31}),N=t=>{P({...h,...t})},W=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u95EE\u9898\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5BF9\u5E94\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(L,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:u(p.Group,{children:[e(p,{shape:"square",size:"large",style:{backgroundColor:O},children:"app"}),e(p,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(t,r)=>t.helpCount-r.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(t,r)=>t.unhelpCount-r.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(t,r)=>t.sort-r.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u63A8\u8350",dataIndex:"isDisplay",key:"isDisplay",render:t=>u(C,{children:[e($,{color:t?"#52c41a":"#ff7875"}),t?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>u(i,{children:[e(s,{type:"link",onClick:()=>M(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(s,{type:"link",onClick:()=>I(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(s,{type:"link",style:{color:"#ff7875"},onClick:()=>v(),children:"\u5220\u9664"})]})}],j=[{key:"1",number:"W00001",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return u(i,{children:[e(l,{children:e(n,{span:24,children:u(o,{form:k,name:"search",onFinish:y,onFinishFailed:f,autoComplete:"off",children:[u(l,{gutter:20,children:[e(n,{span:6,children:e(o.Item,{label:"\u95EE\u9898",name:"issues",children:e(z,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(n,{span:12,children:e(o.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(ue,{presets:X,disabledDate:Y})})})]}),e(l,{children:e(n,{span:24,className:"tr",children:e(o.Item,{children:e(s,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})})})}),e(l,{children:e(n,{span:24,className:"tr",children:e(o.Item,{children:u(C,{children:[e(s,{icon:e(ee,{}),onClick:B,children:"\u6279\u91CF\u5BFC\u5165"}),e(s,{icon:e(q,{}),onClick:A,children:"\u65B0\u589E"})]})})})})]})})}),e(l,{children:e(n,{span:24,children:e(Z,{className:"issue-table",columns:W,dataSource:j,pagination:h,onChange:N})})}),e(H,{open:x,setOpen:d}),e(J,{open:D,setOpen:c}),e(K,{open:b,setOpen:m}),e(Q,{open:S,setOpen:F}),e(V,{open:T,setOpen:U})]})};export{Ue as default};
//# sourceMappingURL=index.c8ce2962.js.map
