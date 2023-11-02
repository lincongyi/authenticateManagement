import{F as a,r,m as O,a as n,d as C,j as e,c as o,C as s,I as M,S as T,b as m,B as l,b0 as N,D as h,M as R}from"./index.c52fca20.js";import{D as W}from"./zh-cn.a53d2a2c.js";import j from"./CheckModal.a9d8056f.js";import w from"./UpdateModal.f1a5ad5b.js";import{T as U}from"./Table.1bb7f34d.js";import{E as z}from"./ExclamationCircleOutlined.23dcfc45.js";import"./LikeOutlined.c9fef548.js";import"./useBreakpoint.00aa8cd3.js";import"./Pagination.fdfbd77b.js";import"./index.0809a7e8.js";import"./index.b6117a9a.js";import"./index.4d51213d.js";import"./index.287424bd.js";import"./index.e16ae36e.js";const{RangePicker:H}=W,te=()=>{const[c]=a.useForm(),E=[{value:0,label:"\u5176\u4ED6"},{value:1,label:"\u6CE8\u518C"},{value:2,label:"\u767B\u5F55"}],k=()=>{F({...i,pageNum:1,pageSize:10}),c.resetFields()},y=u=>{console.log("Success:",u)},f=u=>{console.log("Failed:",u)},[x,d]=r.exports.useState(!1),B=u=>{d(!0)},[b,p]=r.exports.useState(!1),g=u=>{p(!0)},[D,I]=O.useMessage(),A=u=>{R.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(z,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>D.success({content:"\u5220\u9664\u6210\u529F"})})},[i,F]=r.exports.useState({pageNum:1,pageSize:10,total:31}),v=u=>{const t=u.current||1;F({...i,pageNum:t})},P=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5E94\u7528\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5E94\u7528\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u5BF9\u5E94\u5E94\u7528\u95EE\u9898\u5206\u7C7B",dataIndex:"classification",key:"classification"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(u,t)=>u.helpCount-t.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(u,t)=>u.unhelpCount-t.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(u,t)=>u.sort-t.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date",sorter:(u,t)=>u.sort-t.sort},{title:"\u663E\u793A",dataIndex:"isDisplay",key:"isDisplay",render:u=>n(m,{children:[e(N,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>n(C,{children:[e(l,{type:"link",onClick:()=>B(),children:"\u8BE6\u60C5"}),e(h,{type:"vertical"}),e(l,{type:"link",onClick:()=>g(),children:"\u4FEE\u6539"}),e(h,{type:"vertical"}),e(l,{type:"link",style:{color:"#ff7875"},onClick:()=>A(),children:"\u5220\u9664"})]})}],S=[{key:"1",number:"W00001",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u767B\u5F55",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u767B\u5F55",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return n(C,{children:[I,e(o,{children:e(s,{span:24,children:n(a,{form:c,name:"search",initialValues:{classification:-1},onFinish:y,onFinishFailed:f,autoComplete:"off",children:[n(o,{gutter:20,children:[e(s,{span:6,children:e(a.Item,{label:"\u95EE\u9898",name:"issues",children:e(M,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:6,children:e(a.Item,{label:"\u95EE\u9898\u5206\u7C7B",name:"classification",children:e(T,{placeholder:"\u8BF7\u9009\u62E9\u95EE\u9898\u5206\u7C7B",options:[{value:-1,label:"\u5168\u90E8"},...E]})})}),e(s,{span:12,children:e(a.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(H,{})})})]}),e(o,{children:e(s,{span:24,className:"tr",children:e(a.Item,{children:n(m,{children:[e(l,{onClick:k,children:"\u91CD\u7F6E"}),e(l,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})})]})})}),e(o,{children:e(s,{span:24,children:e(U,{className:"issue-table",columns:P,dataSource:S,pagination:i,onChange:v})})}),e(j,{open:x,setOpen:d}),e(w,{open:b,setOpen:p})]})};export{te as default};
