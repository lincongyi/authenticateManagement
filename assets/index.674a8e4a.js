import{F as a,k as r,j as n,e as F,a as e,c as l,d as s,I as M,b as T,C,l as m,S as h,aj as o,aD as j,aG as R}from"./index.7cefd686.js";import"./zh-cn.244aca99.js";import W from"./CheckModal.ac25553b.js";import w from"./UpdateModal.bd1d91ce.js";import{T as U}from"./Table.c0d6602e.js";import{D as N}from"./index.84ef0d81.js";import{B as V}from"./index.8074c0f1.js";import{D as E}from"./index.cf5f66df.js";import{E as z}from"./ExclamationCircleOutlined.ba30067e.js";import"./LikeOutlined.ed067c59.js";import"./styleChecker.2a023e44.js";import"./css.d6e3059f.js";import"./useBreakpoint.dce05474.js";import"./extendsObject.f4f027fb.js";import"./index.724f0df3.js";import"./index.a86779f2.js";import"./index.2f25b247.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.f63aee74.js";const{RangePicker:G}=N,ie=()=>{const[i]=a.useForm(),k=[{value:0,label:"\u5176\u4ED6"},{value:1,label:"\u6CE8\u518C"},{value:2,label:"\u767B\u5F55"}],y=(u,t)=>i.setFieldValue("date",t),f=()=>{i.resetFields()},B=u=>{console.log("Success:",u)},x=u=>{console.log("Failed:",u)},[D,c]=r.exports.useState(!1),b=u=>{c(!0)},[I,d]=r.exports.useState(!1),g=u=>{d(!0)},A=u=>{j.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(z,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>R.success({content:"\u5220\u9664\u6210\u529F"})})},[p,v]=r.exports.useState({current:1,pageSize:10,total:31}),P=u=>{v({...p,...u})},O=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5E94\u7528\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5E94\u7528\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u5BF9\u5E94\u5E94\u7528\u95EE\u9898\u5206\u7C7B",dataIndex:"classification",key:"classification"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(u,t)=>u.helpCount-t.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(u,t)=>u.unhelpCount-t.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(u,t)=>u.sort-t.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date",sorter:(u,t)=>u.sort-t.sort},{title:"\u663E\u793A",dataIndex:"isDisplay",key:"isDisplay",render:u=>n(h,{children:[e(V,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>n(F,{children:[e(o,{type:"link",onClick:()=>b(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(o,{type:"link",onClick:()=>g(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(o,{type:"link",style:{color:"#ff7875"},onClick:()=>A(),children:"\u5220\u9664"})]})}],S=[{key:"1",number:"W00001",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u767B\u5F55",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u767B\u5F55",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",name:"\u5357\u6C99\u5206\u5C40APP",classification:"\u6CE8\u518C",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return n(F,{children:[e(l,{children:e(s,{span:24,children:n(a,{form:i,name:"search",initialValues:{classification:-1},onFinish:B,onFinishFailed:x,autoComplete:"off",children:[n(l,{gutter:20,children:[e(s,{span:6,children:e(a.Item,{label:"\u95EE\u9898",name:"issues",children:e(M,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(s,{span:6,children:e(a.Item,{label:"\u95EE\u9898\u5206\u7C7B",name:"classification",children:e(T,{placeholder:"\u8BF7\u9009\u62E9\u95EE\u9898\u5206\u7C7B",options:[{value:-1,label:"\u5168\u90E8"},...k]})})}),e(s,{span:12,children:e(a.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(C,{locale:m,children:e(G,{onChange:y})})})})]}),e(l,{children:e(s,{span:24,className:"tr",children:e(a.Item,{children:n(h,{children:[e(o,{onClick:f,children:"\u91CD\u7F6E"}),e(o,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})})]})})}),e(l,{children:e(s,{span:24,children:e(C,{locale:m,children:e(U,{className:"issue-table",columns:O,dataSource:S,pagination:p,onChange:P})})})}),e(W,{open:D,setOpen:c}),e(w,{open:I,setOpen:d})]})};export{ie as default};
//# sourceMappingURL=index.674a8e4a.js.map
