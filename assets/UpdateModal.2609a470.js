import{F as e,j as a,aB as E,a as u,I as o,b as i,c as m,C,S as h,ah as t,aE as p}from"./index.803c0bcf.js";import{D as F}from"./index.a753fa5a.js";const I=({open:c,setOpen:s})=>{const[r]=e.useForm(),d={required:"\u8BF7\u8F93\u5165${label}"},B=[{value:1,label:"\u4E00\u7EA7\u5206\u7C7B"},{value:2,label:"\u4E8C\u7EA7\u5206\u7C7B"},{value:3,label:"\u4E09\u7EA7\u5206\u7C7B"}],n=()=>{r.resetFields(),s(!1)};return a(E,{title:"\u4FEE\u6539\u5206\u7C7B",open:c,width:640,onCancel:n,footer:[],children:[u(F,{}),a(e,{form:r,name:"update",labelCol:{span:4},wrapperCol:{span:20},validateMessages:d,initialValues:{name:"\u5206\u7C7B1\u5206\u7C7B1\u5206\u7C7B1",level:3,order:1,isDisplay:0},onFinish:l=>{console.log("Success:",l),p.success({content:"\u65B0\u589E\u6210\u529F",onClose:()=>s(!1)})},onFinishFailed:l=>{console.log("Failed:",l)},autoComplete:"off",children:[u(e.Item,{label:"\u5206\u7C7B\u7F16\u53F7",children:u("p",{children:"FL2344"})}),u(e.Item,{label:"\u5206\u7C7B\u540D\u79F0",name:"name",rules:[{required:!0}],children:u(o,{placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0",maxLength:10})}),u(e.Item,{label:"\u5206\u7C7B\u7EA7\u522B",name:"level",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B\u7EA7\u522B"}],children:u(i,{placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B\u7EA7\u522B",options:B})}),u(e.Item,{label:"\u6392\u5E8F",name:"order",rules:[{required:!0}],extra:"\u4ECE1-N\u8FDB\u884C\u6392\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5927\u663E\u793A\u8D8A\u540E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u540C\u6837\u7684\u6570\u503C\uFF0C\u5219\u6309\u6700\u65B0\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F",children:u(o,{placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",maxLength:3})}),u(e.Item,{label:"\u663E\u793A",name:"isDisplay",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A"}],children:u(i,{placeholder:"\u8BF7\u9009\u62E9\u662F\u5426\u663E\u793A",options:[{value:0,label:"\u5426"},{value:1,label:"\u662F"}]})}),u(e.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:u("p",{children:"2022-11-22 10:00:00"})}),u(F,{}),u(e.Item,{noStyle:!0,wrapperCol:{span:24},children:u(m,{children:u(C,{span:24,className:"tr",children:a(h,{children:[u(t,{onClick:n,children:"\u53D6\u6D88"}),",",u(t,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})};export{I as default};
//# sourceMappingURL=UpdateModal.2609a470.js.map
