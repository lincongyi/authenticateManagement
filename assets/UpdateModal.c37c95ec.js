import{F as e,r as m,a as r,M as y,j as u,I as t,S as k,c as o,C as n,B as c,d as I,b as x}from"./index.318fb3af.js";import{s as S}from"./index.module.60dd8280.js";import{C as i}from"./index.9790f2d6.js";import{D as B}from"./index.36930650.js";import"./index.38f80f86.js";import"./index.ab92e038.js";const v=i.Group,a=["\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F"],w=[a[1],a[2]],$=({open:C,setOpen:A})=>{const[s]=e.useForm(),D={labelCol:{span:6},wrapperCol:{span:18},validateMessages:{required:"\u8BF7\u8F93\u5165${label}"},autoComplete:"off"},d=()=>{s.resetFields(),A(!1)},[g,F]=m.exports.useState(!1),b=l=>{const{checked:E}=l.target,p=E?a:[];h(p),s.setFieldValue("apps",p),F(E)},[M,h]=m.exports.useState(w),f=l=>{h(l),F(l.length===a.length)};return r(y,{title:"\u4FEE\u6539\u81EA\u52A8\u56DE\u590D\u5173\u952E\u5B57",open:C,width:640,forceRender:!0,onCancel:d,footer:[],children:[u(B,{}),r(e,{form:s,name:"update",...D,initialValues:{apps:[]},onFinish:l=>{console.log("Success:",l)},onFinishFailed:l=>{console.log("Failed:",l)},children:[u(e.Item,{label:"\u5173\u952E\u5B57\u7F16\u53F7",name:"number",children:u("p",{children:"G12321"})}),u(e.Item,{label:"\u5173\u952E\u5B57/\u8BCD",name:"keyword",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57/\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u5B57/\u8BCD\u8BF7\u7528\u201C\u3001\u201D\u9694\u5F00",maxLength:20})}),u(e.Item,{label:"\u662F\u5426\u751F\u6548",name:"isEffective",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548"}],children:u(k,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})}),u(e.Item,{label:"\u5BF9\u5E94\u7684\u95EE\u9898",children:r(o,{gutter:10,children:[u(n,{span:18,children:u(e.Item,{name:"issue",noStyle:!0,children:u(t,{placeholder:"\u53BB\u9009\u62E9\u95EE\u9898\u540E\u81EA\u52A8\u83B7\u53D6",readOnly:!0})})}),u(n,{span:6,className:"tr",children:u(c,{type:"primary",style:{width:"100%"},children:"\u53BB\u9009\u62E9"})})]})}),u(e.Item,{label:"\u5BF9\u5E94\u5E94\u7528\u56DE\u7B54",name:"answer",children:u(t.TextArea,{rows:4,placeholder:"\u81EA\u52A8\u83B7\u53D6\u9009\u4E2D\u95EE\u9898\u7684\u56DE\u7B54",readOnly:!0})}),u(e.Item,{label:"\u5173\u8054\u5E94\u7528\u540D\u79F0",children:r(I,{children:[u(i,{onChange:b,checked:g,style:{paddingTop:6},children:"\u5168\u9009"}),u("div",{className:`${S["checkbox-group"]} gray-bg`,children:u(e.Item,{name:"apps",noStyle:!0,children:u(v,{onChange:f,children:u(o,{gutter:[0,20],children:a.map(l=>u(n,{span:12,children:u(i,{value:l,children:l})},l))})})})})]})}),u(e.Item,{label:"\u6392\u5E8F",name:"order",rules:[{required:!0}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})}),u(e.Item,{label:"\u521B\u5EFA\u65E5\u671F",name:"date",children:u("p",{children:"2022-07-12 10:00:00"})}),u(B,{}),u(e.Item,{noStyle:!0,wrapperCol:{span:24},children:u(o,{children:u(n,{span:24,className:"tr",children:r(x,{children:[u(c,{onClick:d,children:"\u5173\u95ED"}),",",u(c,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{$ as default};
