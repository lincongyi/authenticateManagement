import{F as e,k as m,j as a,aD as y,a as u,I as n,b as k,c,d as t,aj as o,e as I,S as x}from"./index.01807550.js";import{s as S}from"./index.module.60dd8280.js";import{C as i}from"./index.1e1d1840.js";import{D as B}from"./index.86e86b0d.js";import"./index.abc95a40.js";const w=i.Group,r=["\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","\u9655\u897F\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F"],v=[r[1],r[2]],R=({open:C,setOpen:A})=>{const[s]=e.useForm(),D={required:"\u8BF7\u8F93\u5165${label}"},F=()=>{s.resetFields(),A(!1)},[b,d]=m.exports.useState(!1),g=l=>{const{checked:E}=l.target,p=E?r:[];h(p),s.setFieldValue("apps",p),d(E)},[L,h]=m.exports.useState(v),f=l=>{h(l),d(l.length===r.length)};return a(y,{title:"\u4FEE\u6539\u81EA\u52A8\u56DE\u590D\u5173\u952E\u5B57",open:C,width:640,forceRender:!0,onCancel:F,footer:[],children:[u(B,{}),a(e,{name:"update",form:s,labelCol:{span:6},wrapperCol:{span:18},initialValues:{apps:[]},validateMessages:D,onFinish:l=>{console.log("Success:",l)},onFinishFailed:l=>{console.log("Failed:",l)},autoComplete:"off",children:[u(e.Item,{label:"\u5173\u952E\u5B57\u7F16\u53F7",name:"number",children:u("p",{children:"G12321"})}),u(e.Item,{label:"\u5173\u952E\u5B57/\u8BCD",name:"keyword",rules:[{required:!0}],children:u(n,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57/\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u5B57/\u8BCD\u8BF7\u7528\u201C\u3001\u201D\u9694\u5F00",maxLength:20})}),u(e.Item,{label:"\u662F\u5426\u751F\u6548",name:"isEffective",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u751F\u6548"}],children:u(k,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})}),u(e.Item,{label:"\u5BF9\u5E94\u7684\u95EE\u9898",children:a(c,{gutter:10,children:[u(t,{span:18,children:u(e.Item,{name:"issue",noStyle:!0,children:u(n,{placeholder:"\u53BB\u9009\u62E9\u95EE\u9898\u540E\u81EA\u52A8\u83B7\u53D6",readOnly:!0})})}),u(t,{span:6,className:"tr",children:u(o,{type:"primary",style:{width:"100%"},children:"\u53BB\u9009\u62E9"})})]})}),u(e.Item,{label:"\u5BF9\u5E94\u5E94\u7528\u56DE\u7B54",name:"answer",children:u(n.TextArea,{rows:4,placeholder:"\u81EA\u52A8\u83B7\u53D6\u9009\u4E2D\u95EE\u9898\u7684\u56DE\u7B54",readOnly:!0})}),u(e.Item,{label:"\u5173\u8054\u5E94\u7528\u540D\u79F0",children:a(I,{children:[u(i,{onChange:g,checked:b,style:{paddingTop:6},children:"\u5168\u9009"}),u("div",{className:`${S["checkbox-group"]} gray-bg`,children:u(e.Item,{name:"apps",noStyle:!0,children:u(w,{onChange:f,children:u(c,{gutter:[0,20],children:r.map(l=>u(t,{span:12,children:u(i,{value:l,children:l})},l))})})})})]})}),u(e.Item,{label:"\u6392\u5E8F",name:"order",rules:[{required:!0}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(n,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})}),u(e.Item,{label:"\u521B\u5EFA\u65E5\u671F",name:"date",children:u("p",{children:"2022-07-12 10:00:00"})}),u(B,{}),u(e.Item,{noStyle:!0,wrapperCol:{span:24},children:u(c,{children:u(t,{span:24,className:"tr",children:a(x,{children:[u(o,{onClick:F,children:"\u5173\u95ED"}),",",u(o,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{R as default};
//# sourceMappingURL=UpdateModal.5ec3f80a.js.map
