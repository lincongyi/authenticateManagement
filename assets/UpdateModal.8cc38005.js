import{F as n,k as C,j as a,aD as f,a as e,S as o,aj as l,c as D,d as b,I,aG as w}from"./index.d93c8983.js";import{s}from"./index.module.eeaf38e8.js";import{a as y,b as g,c as v}from"./issue-app-icon-03.6a3d2157.js";import{D as d}from"./index.7603ffd4.js";import{M as x}from"./MobileOutlined.f5d33abe.js";import{L as k,D as L}from"./LikeOutlined.5846a7aa.js";const{TextArea:F}=I,O=({open:p,setOpen:r})=>{const[i]=n.useForm(),m={required:"\u8BF7\u8F93\u5165${label}"},[c,E]=C.exports.useState([{name:"\u8BA4\u8BC1\u670D\u52A1\u7BA1\u7406\u5E73\u53F0",icon:y},{name:"\u5FAE\u8B66\u8BA4\u8BC1APP",icon:g},{name:"\u5FAE\u8B66\u8BA4\u8BC1\u5C0F\u7A0B\u5E8F",icon:v}]),h=()=>{console.log("onRelate")},A=u=>{console.log(u),E(c.filter(B=>u.name!==B.name))},t=()=>{i.resetFields(),r(!1)};return a(f,{title:"\u4FEE\u6539\u95EE\u7B54\u4FE1\u606F",open:p,width:640,onCancel:t,footer:[],children:[e(d,{}),a(n,{form:i,name:"update",labelCol:{span:4},wrapperCol:{span:20},validateMessages:m,onFinish:u=>{console.log("Success:",u),w.success({content:"\u65B0\u589E\u6210\u529F",duration:2,onClose:()=>r(!1)})},onFinishFailed:u=>{console.log("Failed:",u)},autoComplete:"off",children:[e(n.Item,{label:"\u95EE\u9898\u7F16\u53F7",name:"number",children:e("p",{children:"WTP23445"})}),e(n.Item,{label:"\u5E2E\u52A9\u95EE\u9898",name:"issue",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u5E2E\u52A9\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572830\u5B57\u5185",showCount:!0,maxLength:30})}),e(n.Item,{label:"\u56DE\u7B54",name:"answer",rules:[{required:!0}],children:e(F,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u56DE\u7B54\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u5728100\u5B57\u5185",showCount:!0,maxLength:100})}),e(n.Item,{label:"\u5DF2\u5173\u8054",name:"relevance",children:a(o,{direction:"vertical",style:{width:"100%"},children:[e(l,{type:"primary",icon:e(x,{}),onClick:h,children:"\u5BA2\u6237\u7AEF\u63A8\u8350"}),e("div",{className:s["client-app"],children:c.map(u=>a(o,{direction:"vertical",style:{textAlign:"center"},children:[a("div",{className:s["app-icon-item"],children:[e("i",{className:s.delete,onClick:()=>A(u),children:"X"}),e("img",{src:u.icon,className:s["app-icon"]})]}),e("p",{children:u.name})]},u.name))}),e("p",{className:s["client-tips"],children:"\u9009\u62E9\u53EF\u5C06\u95EE\u7B54\u4FE1\u606F\u63A8\u8350\u5230\u5BF9\u5E94APP/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7684\u5E2E\u52A9\u4E2D\u5FC3"})]})}),e(n.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e("p",{children:"2022-07-12 10:00:00"})}),e(n.Item,{name:"feedback",wrapperCol:{span:20,offset:4},children:a(o,{children:[e(l,{shape:"round",icon:e(k,{style:{color:"#0db97f"}}),children:"\u6709\u5E2E\u52A9\uFF082\uFF09"}),e(l,{shape:"round",icon:e(L,{style:{color:"#f34646"}}),children:"\u6CA1\u5E2E\u52A9\uFF083\uFF09"})]})}),e(d,{}),e(n.Item,{noStyle:!0,wrapperCol:{span:24},children:e(D,{children:e(b,{span:24,className:"tr",children:a(o,{children:[e(l,{onClick:t,children:"\u53D6\u6D88"}),",",e(l,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{O as default};
//# sourceMappingURL=UpdateModal.8cc38005.js.map
