import{F as e,j as l,aD as p,a as u,b as i,I as c,S as n,aj as F,c as m,d as C}from"./index.ce7f2286.js";import{D as o}from"./index.9544c00f.js";import{L as A,D as b}from"./LikeOutlined.856fcf34.js";const{TextArea:t}=c,g=({open:E,setOpen:d})=>{const[r]=e.useForm(),h={required:"\u8BF7\u8F93\u5165${label}"},B=[{value:0,label:"\u5176\u4ED6"},{value:1,label:"\u6CE8\u518C"},{value:2,label:"\u767B\u5F55"}],s=()=>{r.resetFields(),d(!1)};return l(p,{title:"\u4FEE\u6539\u95EE\u9898\u8BE6\u60C5",open:E,width:640,onCancel:s,footer:[],children:[u(o,{}),l(e,{form:r,name:"update",labelCol:{span:6},wrapperCol:{span:18},initialValues:{classification:1,order:2,isDisplay:1,issue:"\u5982\u4F55\u767B\u5F55\uFF1F",answer:"\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F\u5982\u4F55\u767B\u5F55\uFF1F"},validateMessages:h,onFinish:a=>{console.log("Success:",a)},onFinishFailed:a=>{console.log("Failed:",a)},autoComplete:"off",children:[u(e.Item,{label:"\u5E94\u7528\u540D\u79F0",children:u("p",{children:"\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"})}),u(e.Item,{label:"clientID",children:u("p",{children:"SDSD231244"})}),u(e.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:u("p",{children:"2022-07-12 10:00:00"})}),u(e.Item,{label:"\u5BF9\u5E94\u5E94\u7528\u95EE\u9898\u5206\u7C7B",name:"classification",required:!0,children:u(i,{placeholder:"\u8BF7\u9009\u62E9\u95EE\u9898\u5206\u7C7B",options:B})}),u(e.Item,{label:"\u6392\u5E8F",name:"order",rules:[{required:!0}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(c,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})}),u(e.Item,{label:"\u663E\u793A",name:"isDisplay",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A"}],children:u(i,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})}),u(e.Item,{label:"\u5E2E\u52A9\u95EE\u9898",name:"issue",rules:[{required:!0}],children:u(t,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u5E2E\u52A9\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572830\u5B57\u5185",showCount:!0,maxLength:30})}),u(e.Item,{label:"\u56DE\u7B54",name:"answer",rules:[{required:!0}],children:u(t,{rows:4,placeholder:"\u8BF7\u8F93\u5165\u56DE\u7B54\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u5728100\u5B57\u5185",showCount:!0,maxLength:100})}),u(e.Item,{name:"feedback",wrapperCol:{span:18,offset:6},children:l(n,{children:[u(F,{shape:"round",icon:u(A,{style:{color:"#0db97f"}}),children:"\u6709\u5E2E\u52A9\uFF082\uFF09"}),u(F,{shape:"round",icon:u(b,{style:{color:"#f34646"}}),children:"\u6CA1\u5E2E\u52A9\uFF083\uFF09"})]})}),u(o,{}),u(e.Item,{noStyle:!0,wrapperCol:{span:24},children:u(m,{children:u(C,{span:24,className:"tr",children:l(n,{children:[u(F,{onClick:s,children:"\u5173\u95ED"}),",",u(F,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{g as default};
//# sourceMappingURL=UpdateModal.bc29d878.js.map
