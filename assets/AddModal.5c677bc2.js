import{F as l,r as C,a as r,M as y,j as u,I as s,S as k,c as o,C as t,B as c,d as x,b as I}from"./index.f6c89b72.js";import{s as S}from"./index.module.60dd8280.js";import{C as i}from"./index.e8b5218d.js";import{D as m}from"./index.76975e45.js";import"./index.38e1a33b.js";import"./index.54c454a1.js";const v=i.Group,a=["\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F"],w=[a[1],a[2]],$=({open:B,setOpen:A})=>{const[n]=l.useForm(),D={labelCol:{span:6},wrapperCol:{span:18},validateMessages:{required:"\u8BF7\u8F93\u5165${label}"},autoComplete:"off"},d=()=>{n.resetFields(),A(!1)},[g,F]=C.exports.useState(!1),b=e=>{const{checked:E}=e.target,p=E?a:[];h(p),n.setFieldValue("apps",p),F(E)},[M,h]=C.exports.useState(w),f=e=>{h(e),F(e.length===a.length)};return r(y,{title:"\u65B0\u589E\u81EA\u52A8\u56DE\u590D\u5173\u952E\u5B57",open:B,width:640,forceRender:!0,onCancel:d,footer:[],children:[u(m,{}),r(l,{form:n,name:"add",...D,initialValues:{apps:[]},onFinish:e=>{console.log("Success:",e)},onFinishFailed:e=>{console.log("Failed:",e)},children:[u(l.Item,{label:"\u5173\u952E\u5B57/\u8BCD",name:"keyword",rules:[{required:!0}],children:u(s,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57/\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u5B57/\u8BCD\u8BF7\u7528\u201C\u3001\u201D\u9694\u5F00",maxLength:20})}),u(l.Item,{label:"\u662F\u5426\u751F\u6548",name:"isEffective",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548"}],children:u(k,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})}),u(l.Item,{label:"\u5BF9\u5E94\u7684\u95EE\u9898",children:r(o,{gutter:10,children:[u(t,{span:18,children:u(l.Item,{name:"issue",noStyle:!0,children:u(s,{placeholder:"\u53BB\u9009\u62E9\u95EE\u9898\u540E\u81EA\u52A8\u83B7\u53D6",readOnly:!0})})}),u(t,{span:6,className:"tr",children:u(c,{type:"primary",style:{width:"100%"},children:"\u53BB\u9009\u62E9"})})]})}),u(l.Item,{label:"\u5BF9\u5E94\u5E94\u7528\u56DE\u7B54",name:"answer",children:u(s.TextArea,{rows:4,placeholder:"\u81EA\u52A8\u83B7\u53D6\u9009\u4E2D\u95EE\u9898\u7684\u56DE\u7B54",readOnly:!0})}),u(l.Item,{label:"\u5173\u8054\u5E94\u7528\u540D\u79F0",children:r(x,{children:[u(i,{onChange:b,checked:g,style:{paddingTop:6},children:"\u5168\u9009"}),u("div",{className:`${S["checkbox-group"]} gray-bg`,children:u(l.Item,{name:"apps",noStyle:!0,children:u(v,{onChange:f,children:u(o,{gutter:[0,20],children:a.map(e=>u(t,{span:12,children:u(i,{value:e,children:e})},e))})})})})]})}),u(l.Item,{label:"\u6392\u5E8F",name:"order",rules:[{required:!0}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(s,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})}),u(m,{}),u(l.Item,{noStyle:!0,wrapperCol:{span:24},children:u(o,{children:u(t,{span:24,className:"tr",children:r(I,{children:[u(c,{onClick:d,children:"\u5173\u95ED"}),",",u(c,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{$ as default};