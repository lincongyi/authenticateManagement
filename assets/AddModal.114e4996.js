import{F as a,r as g,m as D,a as s,d as v,M as w,j as e,D as d,b as l,B as o,c as b,C as x,I as y}from"./index.c52fca20.js";import{s as n}from"./index.module.eeaf38e8.js";import{a as I,b as M,c as N}from"./issue-app-icon-03.6a3d2157.js";import{M as P}from"./MobileOutlined.4bbc9b06.js";const{TextArea:F}=y,H=({open:p,setOpen:r})=>{const[c]=a.useForm(),m={labelCol:{span:4},wrapperCol:{span:20},validateMessages:{required:"\u8BF7\u8F93\u5165${label}"},autoComplete:"off"},[i,E]=g.exports.useState([{name:"\u8BA4\u8BC1\u670D\u52A1\u7BA1\u7406\u5E73\u53F0",icon:I},{name:"\u5FAE\u8B66\u8BA4\u8BC1APP",icon:M},{name:"\u5FAE\u8B66\u8BA4\u8BC1\u5C0F\u7A0B\u5E8F",icon:N}]),A=()=>{console.log("onRelate")},B=u=>{console.log(u),E(i.filter(f=>u.name!==f.name))},t=()=>{c.resetFields(),r(!1)},[h,C]=D.useMessage();return s(v,{children:[C,s(w,{title:"\u65B0\u589E\u95EE\u7B54\u4FE1\u606F",open:p,width:640,onCancel:t,footer:[],children:[e(d,{}),s(a,{form:c,name:"add",...m,onFinish:u=>{console.log("Success:",u),h.success({content:"\u65B0\u589E\u6210\u529F",onClose:()=>r(!1)})},onFinishFailed:u=>{console.log("Failed:",u)},children:[e(a.Item,{label:"\u5E2E\u52A9\u95EE\u9898",name:"issue",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u5E2E\u52A9\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572830\u5B57\u5185",showCount:!0,maxLength:30})}),e(a.Item,{label:"\u56DE\u7B54",name:"answer",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u56DE\u7B54\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u5728100\u5B57\u5185",showCount:!0,maxLength:100})}),e(a.Item,{label:"\u5173\u8054\u5BA2\u6237\u7AEF",name:"relevance",children:s(l,{direction:"vertical",style:{width:"100%"},children:[e(o,{type:"primary",icon:e(P,{}),onClick:A,children:"\u5BA2\u6237\u7AEF\u63A8\u8350"}),e("div",{className:n["client-app"],children:i.map(u=>s(l,{direction:"vertical",style:{textAlign:"center"},children:[s("div",{className:n["app-icon-item"],children:[e("i",{className:n.delete,onClick:()=>B(u),children:"X"}),e("img",{src:u.icon,className:n["app-icon"]})]}),e("p",{children:u.name})]},u.name))}),e("p",{className:n["client-tips"],children:"\u9009\u62E9\u53EF\u5C06\u95EE\u7B54\u4FE1\u606F\u63A8\u8350\u5230\u5BF9\u5E94APP/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7684\u5E2E\u52A9\u4E2D\u5FC3"})]})}),e(d,{}),e(a.Item,{noStyle:!0,wrapperCol:{span:24},children:e(b,{children:e(x,{span:24,className:"tr",children:s(l,{children:[e(o,{onClick:t,children:"\u53D6\u6D88"}),",",e(o,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})]})};export{H as default};
