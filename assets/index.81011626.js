import{F as t,r as o,m as T,a as n,d as h,j as e,c as l,C as a,I as N,S as j,b as i,B as s,e as w,bh as R,M as U}from"./index.43a2e21b.js";import{D as z}from"./zh-cn.83efb2a6.js";import H from"./AddModal.cf0b44f5.js";import L from"./CheckModal.f29efd2f.js";import V from"./UpdateModal.c31d56fe.js";import{T as q}from"./Table.dacc897d.js";import{D as F}from"./index.81432aeb.js";import{E as G}from"./ExclamationCircleOutlined.554cace2.js";import"./styleChecker.94b62444.js";import"./addEventListener.8486c4e0.js";import"./useBreakpoint.b2ddf4f3.js";import"./Pagination.8beeeb23.js";import"./index.95b6c99d.js";import"./index.db651842.js";import"./index.57166d9e.js";import"./index.b0318238.js";import"./index.b521ac0f.js";const{RangePicker:J}=z,ie=()=>{const[c]=t.useForm(),E=()=>{c.resetFields()},k=u=>{console.log("Success:",u)},y=u=>{console.log("Failed:",u)},[B,d]=o.exports.useState(!1),f=()=>{d(!0)},[A,p]=o.exports.useState(!1),D=u=>{p(!0)},[x,m]=o.exports.useState(!1),b=u=>{m(!0)},[g,v]=T.useMessage(),I=u=>{U.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(G,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>g.success({content:"\u5220\u9664\u6210\u529F"})})},[C,O]=o.exports.useState({pageNum:1,pageSize:10,total:31}),M=u=>{O({...C,...u})},P=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5206\u7C7B\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(u,r)=>u.sort-r.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date",sorter:(u,r)=>u.sort-r.sort},{title:"\u663E\u793A",dataIndex:"isDisplay",key:"isDisplay",render:u=>n(i,{children:[e(R,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>n(h,{children:[e(s,{type:"link",onClick:()=>D(),children:"\u8BE6\u60C5"}),e(F,{type:"vertical"}),e(s,{type:"link",onClick:()=>b(),children:"\u4FEE\u6539"}),e(F,{type:"vertical"}),e(s,{type:"link",style:{color:"#ff7875"},onClick:()=>I(),children:"\u5220\u9664"})]})}],S=[{key:"1",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:1,date:"2023-01-01",isDisplay:1},{key:"2",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:2,date:"2023-01-01",isDisplay:0},{key:"3",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:3,date:"2023-01-01",isDisplay:0},{key:"4",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:4,date:"2023-01-01",isDisplay:1}];return n(h,{children:[v,e(l,{children:e(a,{span:24,children:n(t,{form:c,name:"search",initialValues:{isDisplay:-1},onFinish:k,onFinishFailed:y,autoComplete:"off",children:[n(l,{gutter:20,children:[e(a,{span:6,children:e(t.Item,{label:"\u5206\u7C7B\u540D\u79F0",name:"issues",children:e(N,{placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0",allowClear:!0,maxLength:30})})}),e(a,{span:6,children:e(t.Item,{label:"\u663E\u793A",name:"isDisplay",children:e(j,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:-1,label:"\u5168\u90E8"},{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})})}),e(a,{span:12,children:e(t.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(J,{})})})]}),e(l,{children:e(a,{span:24,className:"tr",children:e(t.Item,{children:n(i,{children:[e(s,{onClick:E,children:"\u91CD\u7F6E"}),e(s,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})}),e(l,{children:e(a,{span:24,className:"tr",children:e(t.Item,{children:e(i,{children:e(s,{icon:e(w,{}),onClick:f,children:"\u65B0\u589E"})})})})})]})})}),e(l,{children:e(a,{span:24,children:e(q,{className:"issue-table",columns:P,dataSource:S,pagination:C,onChange:M})})}),e(H,{open:B,setOpen:d}),e(L,{open:A,setOpen:p}),e(V,{open:x,setOpen:m})]})};export{ie as default};
