import{F as t,i as o,j as n,d as h,a as e,c as s,C as a,I as S,b as M,S as i,ah as l,at as T,a$ as j,aB as w,aE as N}from"./index.9e9e2773.js";import"./zh-cn.8e1ea1a7.js";import R from"./AddModal.bcc6b0c1.js";import U from"./CheckModal.f3e9d0ee.js";import z from"./UpdateModal.963c9d9a.js";import{T as L}from"./Table.1f1a1854.js";import{D as V}from"./index.b292dfd5.js";import{D as F}from"./index.3e7617f1.js";import{E as $}from"./ExclamationCircleOutlined.77f05be8.js";import"./styleChecker.4d441e10.js";import"./css.d6e3059f.js";import"./useBreakpoint.21648553.js";import"./extendsObject.0dd479a6.js";import"./index.52cedf01.js";import"./index.aa14af2d.js";import"./index.e5bc35fe.js";import"./getDataOrAriaProps.fd89ab75.js";import"./SwapRightOutlined.ad1167af.js";const{RangePicker:q}=V,re=()=>{const[c]=t.useForm(),E=()=>{c.resetFields()},k=u=>{console.log("Success:",u)},y=u=>{console.log("Failed:",u)},[B,d]=o.exports.useState(!1),f=()=>{d(!0)},[A,p]=o.exports.useState(!1),D=u=>{p(!0)},[x,m]=o.exports.useState(!1),b=u=>{m(!0)},v=u=>{w.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e($,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>N.success({content:"\u5220\u9664\u6210\u529F"})})},[C,I]=o.exports.useState({current:1,pageSize:10,total:31}),g=u=>{I({...C,...u})},O=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u5206\u7C7B\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(u,r)=>u.sort-r.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date",sorter:(u,r)=>u.sort-r.sort},{title:"\u663E\u793A",dataIndex:"isDisplay",key:"isDisplay",render:u=>n(i,{children:[e(j,{color:u?"#52c41a":"#ff7875"}),u?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:u=>n(h,{children:[e(l,{type:"link",onClick:()=>D(),children:"\u8BE6\u60C5"}),e(F,{type:"vertical"}),e(l,{type:"link",onClick:()=>b(),children:"\u4FEE\u6539"}),e(F,{type:"vertical"}),e(l,{type:"link",style:{color:"#ff7875"},onClick:()=>v(),children:"\u5220\u9664"})]})}],P=[{key:"1",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:1,date:"2023-01-01",isDisplay:1},{key:"2",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:2,date:"2023-01-01",isDisplay:0},{key:"3",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:3,date:"2023-01-01",isDisplay:0},{key:"4",name:"\u6CE8\u518C",number:"\u5357\u6C99\u5206\u5C40APP",level:"\u4E00\u7EA7\u5206\u7C7B",sort:4,date:"2023-01-01",isDisplay:1}];return n(h,{children:[e(s,{children:e(a,{span:24,children:n(t,{form:c,name:"search",initialValues:{isDisplay:-1},onFinish:k,onFinishFailed:y,autoComplete:"off",children:[n(s,{gutter:20,children:[e(a,{span:6,children:e(t.Item,{label:"\u5206\u7C7B\u540D\u79F0",name:"issues",children:e(S,{placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0",allowClear:!0,maxLength:30})})}),e(a,{span:6,children:e(t.Item,{label:"\u663E\u793A",name:"isDisplay",children:e(M,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:-1,label:"\u5168\u90E8"},{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})})}),e(a,{span:12,children:e(t.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(q,{})})})]}),e(s,{children:e(a,{span:24,className:"tr",children:e(t.Item,{children:n(i,{children:[e(l,{onClick:E,children:"\u91CD\u7F6E"}),e(l,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})]})})})}),e(s,{children:e(a,{span:24,className:"tr",children:e(t.Item,{children:e(i,{children:e(l,{icon:e(T,{}),onClick:f,children:"\u65B0\u589E"})})})})})]})})}),e(s,{children:e(a,{span:24,children:e(L,{className:"issue-table",columns:O,dataSource:P,pagination:C,onChange:g})})}),e(R,{open:B,setOpen:d}),e(U,{open:A,setOpen:p}),e(z,{open:x,setOpen:m})]})};export{re as default};
//# sourceMappingURL=index.6f30ffc0.js.map
