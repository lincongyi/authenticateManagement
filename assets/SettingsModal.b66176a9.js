import{F as l,i as F,j as s,aB as I,a as u,d as g,c as d,C as o,R as N,b as L,I as q,S as w,ah as f}from"./index.ab090dd5.js";import{s as t}from"./index.module.eeaf38e8.js";import{C as h}from"./index.3be988a6.js";import{D as A}from"./index.02e7b155.js";import"./index.ebd19bda.js";const R=h.Group,n=["\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F"],D=[n[1],n[2]],z=({open:b,setOpen:k})=>{const[r]=l.useForm(),[c,C]=F.exports.useState(D),[v,E]=F.exports.useState(!1),x=e=>{const{checked:i}=e.target,a=i?n:[];C(a),r.setFieldValue("relavance",a),E(i)},y=e=>{C(e),E(e.length===n.length)};F.exports.useEffect(()=>{const e=Array(c.length).fill({classification:"",order:""});r.setFieldValue("apps",e)},[c]);const S=[{value:0,label:"\u5176\u4ED6"},{value:1,label:"\u6CE8\u518C"},{value:2,label:"\u767B\u5F55"}],p=()=>{r.resetFields(),k(!1)};return s(I,{title:"\u8BF7\u8BBE\u7F6E\u663E\u793A\u89C4\u5219",open:b,width:640,forceRender:!0,onCancel:p,footer:[],children:[u(A,{}),s(l,{form:r,name:"settings",labelCol:{span:6},wrapperCol:{span:18},initialValues:{relavance:D},onFinish:e=>{console.log("Success:",e)},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[u(l.Item,{label:"\u5173\u8054\u81F3\u5E94\u7528\u540D\u79F0",required:!0,labelCol:{span:24},children:s(g,{children:[u(h,{onChange:x,checked:v,children:"\u5168\u9009"}),u("div",{className:`${t["checkbox-group"]} gray-bg`,children:u(l.Item,{name:"relavance",rules:[{required:!0,message:"\u81F3\u5C11\u9700\u8981\u9009\u62E9\u4E00\u9879\u5173\u8054\u5E94\u7528"}],children:u(R,{onChange:y,children:u(d,{gutter:[0,20],children:n.map(e=>u(o,{span:12,children:u(h,{value:e,children:e})},e))})})})})]})}),!!c.length&&u("div",{className:`${t["setting-rule"]} gray-bg`,children:u("div",{className:t["setting-item"],children:u(l.List,{name:"apps",children:e=>u(g,{children:e.map(({key:i,name:a,...m},B)=>s(N.Fragment,{children:[s("div",{className:`${t.title} font-primary-color`,children:[B+1,".\u5DF2\u9009\u4E2D\uFF1A",c[B]]}),s(d,{className:t["selected-item"],children:[u(o,{span:24,children:u(l.Item,{label:"\u5BF9\u5E94\u5E94\u7528\u95EE\u9898\u5206\u7C7B",name:[a,"classification"],...m,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E94\u7528\u95EE\u9898\u5206\u7C7B"}],children:u(L,{options:S})})}),u(o,{span:24,children:u(l.Item,{label:"\u6392\u5E8F",name:[a,"order"],...m,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6392\u5E8F"}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(q,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})})})]})]},i))})})})}),u(A,{}),u(l.Item,{noStyle:!0,wrapperCol:{span:24},children:u(d,{children:u(o,{span:24,className:"tr",children:s(w,{children:[u(f,{onClick:p,children:"\u53D6\u6D88"}),",",u(f,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{z as default};
//# sourceMappingURL=SettingsModal.b66176a9.js.map