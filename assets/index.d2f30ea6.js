import{F as n,r as o,u as q,m as L,a,d as i,j as e,c as r,C as s,I as R,B as l,b as C,e as G,bf as H,b0 as J,D as E,M as K}from"./index.45aa084d.js";import Q from"./UploadModal.fda0087d.js";import V from"./AddModal.f9a1a9a4.js";import X from"./CheckModal.701c6964.js";import Y from"./UpdateModal.3d528e30.js";import Z from"./SettingsModal.058fe6b7.js";import{r as _,a as $}from"./date.3d5e4dfb.js";import{T as ee}from"./Table.1e14a308.js";import{D as te}from"./zh-cn.94cb3a49.js";import{A as p}from"./index.4e4c749e.js";import{U as ue}from"./UploadOutlined.b2470d17.js";import{E as ae}from"./ExclamationCircleOutlined.4bccbd29.js";import"./index.module.eeaf38e8.js";import"./issue-app-icon-03.6a3d2157.js";import"./MobileOutlined.3baed162.js";import"./LikeOutlined.8af24fe5.js";import"./index.7f735727.js";import"./index.4644115d.js";import"./index.f2cc69b9.js";import"./useBreakpoint.7c45c88c.js";import"./Pagination.57b51ba2.js";import"./index.75f11704.js";import"./index.d25dfef7.js";const{RangePicker:ne}=te,Me=()=>{const[k]=n.useForm(),y=t=>{console.log("Success:",t)},f=t=>{console.log("Failed:",t)},[g,d]=o.exports.useState(!1),x=()=>{d(!0)},{themeStore:B}=q(),O=B.antdThemeColor,[b,c]=o.exports.useState(!1),A=()=>{c(!0)},[D,F]=o.exports.useState(!1),M=t=>{F(!0)},[I,m]=o.exports.useState(!1),S=t=>{m(!0)},[v,T]=L.useMessage(),U=t=>{K.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(ae,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{v.success({content:"\u5220\u9664\u6210\u529F"})}})},[N,P]=o.exports.useState(!1),[h,W]=o.exports.useState({pageNum:1,pageSize:10,total:31}),j=t=>{const u=t.current||1;W({...h,pageNum:u})},w=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u95EE\u9898\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5BF9\u5E94\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(H,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:a(p.Group,{children:[e(p,{shape:"square",size:"large",style:{backgroundColor:O},children:"app"}),e(p,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(t,u)=>t.helpCount-u.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(t,u)=>t.unhelpCount-u.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(t,u)=>t.sort-u.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u63A8\u8350",dataIndex:"isDisplay",key:"isDisplay",render:t=>a(C,{children:[e(J,{color:t?"#52c41a":"#ff7875"}),t?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>a(i,{children:[e(l,{type:"link",onClick:()=>M(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(l,{type:"link",onClick:()=>S(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(l,{type:"link",style:{color:"#ff7875"},onClick:()=>U(),children:"\u5220\u9664"})]})}],z=[{key:"1",number:"W00001",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return a(i,{children:[T,e(r,{children:e(s,{span:24,children:a(n,{form:k,name:"search",onFinish:y,onFinishFailed:f,autoComplete:"off",children:[a(r,{gutter:20,children:[e(s,{span:6,children:e(n.Item,{label:"\u95EE\u9898",name:"issues",children:e(R,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:12,children:e(n.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(ne,{presets:_,disabledDate:$})})})]}),e(r,{children:e(s,{span:24,className:"tr",children:e(n.Item,{children:e(l,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})})})}),e(r,{children:e(s,{span:24,className:"tr",children:e(n.Item,{children:a(C,{children:[e(l,{icon:e(ue,{}),onClick:x,children:"\u6279\u91CF\u5BFC\u5165"}),e(l,{icon:e(G,{}),onClick:A,children:"\u65B0\u589E"})]})})})})]})})}),e(r,{children:e(s,{span:24,children:e(ee,{className:"issue-table",columns:w,dataSource:z,pagination:h,onChange:j})})}),e(Q,{open:g,setOpen:d}),e(V,{open:b,setOpen:c}),e(X,{open:D,setOpen:F}),e(Y,{open:I,setOpen:m}),e(Z,{open:N,setOpen:P})]})};export{Me as default};
