import{F as a,k as C,j as n,aD as f,a as e,S as l,aj as o,c as D,d as w,I as g,aG as v}from"./index.d93c8983.js";import{s}from"./index.module.eeaf38e8.js";import{a as y,b as I,c as b}from"./issue-app-icon-03.6a3d2157.js";import{D as d}from"./index.7603ffd4.js";import{M as x}from"./MobileOutlined.f5d33abe.js";const{TextArea:F}=g,R=({open:p,setOpen:i})=>{const[r]=a.useForm(),m={required:"\u8BF7\u8F93\u5165${label}"},[c,E]=C.exports.useState([{name:"\u8BA4\u8BC1\u670D\u52A1\u7BA1\u7406\u5E73\u53F0",icon:y},{name:"\u5FAE\u8B66\u8BA4\u8BC1APP",icon:I},{name:"\u5FAE\u8B66\u8BA4\u8BC1\u5C0F\u7A0B\u5E8F",icon:b}]),A=()=>{console.log("onRelate")},B=u=>{console.log(u),E(c.filter(h=>u.name!==h.name))},t=()=>{r.resetFields(),i(!1)};return n(f,{title:"\u65B0\u589E\u95EE\u7B54\u4FE1\u606F",open:p,width:640,onCancel:t,footer:[],children:[e(d,{}),n(a,{form:r,name:"add",labelCol:{span:4},wrapperCol:{span:20},validateMessages:m,onFinish:u=>{console.log("Success:",u),v.success({content:"\u65B0\u589E\u6210\u529F",onClose:()=>i(!1)})},onFinishFailed:u=>{console.log("Failed:",u)},autoComplete:"off",children:[e(a.Item,{label:"\u5E2E\u52A9\u95EE\u9898",name:"issue",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u5E2E\u52A9\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572830\u5B57\u5185",showCount:!0,maxLength:30})}),e(a.Item,{label:"\u56DE\u7B54",name:"answer",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u56DE\u7B54\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u5728100\u5B57\u5185",showCount:!0,maxLength:100})}),e(a.Item,{label:"\u5173\u8054\u5BA2\u6237\u7AEF",name:"relevance",children:n(l,{direction:"vertical",style:{width:"100%"},children:[e(o,{type:"primary",icon:e(x,{}),onClick:A,children:"\u5BA2\u6237\u7AEF\u63A8\u8350"}),e("div",{className:s["client-app"],children:c.map(u=>n(l,{direction:"vertical",style:{textAlign:"center"},children:[n("div",{className:s["app-icon-item"],children:[e("i",{className:s.delete,onClick:()=>B(u),children:"X"}),e("img",{src:u.icon,className:s["app-icon"]})]}),e("p",{children:u.name})]},u.name))}),e("p",{className:s["client-tips"],children:"\u9009\u62E9\u53EF\u5C06\u95EE\u7B54\u4FE1\u606F\u63A8\u8350\u5230\u5BF9\u5E94APP/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7684\u5E2E\u52A9\u4E2D\u5FC3"})]})}),e(d,{}),e(a.Item,{noStyle:!0,wrapperCol:{span:24},children:e(D,{children:e(w,{span:24,className:"tr",children:n(l,{children:[e(o,{onClick:t,children:"\u53D6\u6D88"}),",",e(o,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{R as default};
//# sourceMappingURL=AddModal.687743a2.js.map
