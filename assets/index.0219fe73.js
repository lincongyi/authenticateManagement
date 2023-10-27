import{F as a,r as n,u as q,m as L,a as o,d as i,j as e,c as l,C as s,I as R,B as r,b as C,e as G,aw as H,bh as J,M as K}from"./index.da6df52f.js";import Q from"./UploadModal.39436be1.js";import V from"./AddModal.91788848.js";import X from"./CheckModal.8b975b8c.js";import Y from"./UpdateModal.e9145110.js";import Z from"./SettingsModal.6156b944.js";import{r as _,a as $}from"./date.de12fa86.js";import{T as ee}from"./Table.0f250c54.js";import{D as te}from"./zh-cn.28cf50cb.js";import{A as p}from"./index.70f6d79b.js";import{D as E}from"./index.5b6863d3.js";import{U as ue}from"./UploadOutlined.7163aa69.js";import{E as oe}from"./ExclamationCircleOutlined.2795b3f1.js";import"./index.module.eeaf38e8.js";import"./index.80b03ff6.js";import"./EditOutlined.656bce74.js";import"./styleChecker.a749ab9f.js";import"./issue-app-icon-03.6a3d2157.js";import"./MobileOutlined.f4fab825.js";import"./LikeOutlined.6d20cdf0.js";import"./index.b49e554d.js";import"./index.2f1f65ab.js";import"./index.cfa22aab.js";import"./addEventListener.86688d62.js";import"./useBreakpoint.af3dba42.js";import"./Pagination.6eff48af.js";import"./index.73b9363b.js";import"./index.e61d77eb.js";const{RangePicker:ae}=te,Ue=()=>{const[k]=a.useForm(),y=t=>{console.log("Success:",t)},f=t=>{console.log("Failed:",t)},[g,d]=n.exports.useState(!1),x=()=>{d(!0)},{themeStore:B}=q(),O=B.antdThemeColor,[A,c]=n.exports.useState(!1),D=()=>{c(!0)},[b,m]=n.exports.useState(!1),M=t=>{m(!0)},[I,F]=n.exports.useState(!1),S=t=>{F(!0)},[v,T]=L.useMessage(),U=t=>{K.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(oe,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{v.success({content:"\u5220\u9664\u6210\u529F"})}})},[N,P]=n.exports.useState(!1),[h,w]=n.exports.useState({pageNum:1,pageSize:10,total:31}),W=t=>{const u=t.current||1;w({...h,pageNum:u})},j=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u95EE\u9898\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5BF9\u5E94\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(H,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:o(p.Group,{children:[e(p,{shape:"square",size:"large",style:{backgroundColor:O},children:"app"}),e(p,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(t,u)=>t.helpCount-u.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(t,u)=>t.unhelpCount-u.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(t,u)=>t.sort-u.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u63A8\u8350",dataIndex:"isDisplay",key:"isDisplay",render:t=>o(C,{children:[e(J,{color:t?"#52c41a":"#ff7875"}),t?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>o(i,{children:[e(r,{type:"link",onClick:()=>M(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(r,{type:"link",onClick:()=>S(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(r,{type:"link",style:{color:"#ff7875"},onClick:()=>U(),children:"\u5220\u9664"})]})}],z=[{key:"1",number:"W00001",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return o(i,{children:[T,e(l,{children:e(s,{span:24,children:o(a,{form:k,name:"search",onFinish:y,onFinishFailed:f,autoComplete:"off",children:[o(l,{gutter:20,children:[e(s,{span:6,children:e(a.Item,{label:"\u95EE\u9898",name:"issues",children:e(R,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:12,children:e(a.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(ae,{presets:_,disabledDate:$})})})]}),e(l,{children:e(s,{span:24,className:"tr",children:e(a.Item,{children:e(r,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})})})}),e(l,{children:e(s,{span:24,className:"tr",children:e(a.Item,{children:o(C,{children:[e(r,{icon:e(ue,{}),onClick:x,children:"\u6279\u91CF\u5BFC\u5165"}),e(r,{icon:e(G,{}),onClick:D,children:"\u65B0\u589E"})]})})})})]})})}),e(l,{children:e(s,{span:24,children:e(ee,{className:"issue-table",columns:j,dataSource:z,pagination:h,onChange:W})})}),e(Q,{open:g,setOpen:d}),e(V,{open:A,setOpen:c}),e(X,{open:b,setOpen:m}),e(Y,{open:I,setOpen:F}),e(Z,{open:N,setOpen:P})]})};export{Ue as default};
