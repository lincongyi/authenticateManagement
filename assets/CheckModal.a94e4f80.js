import{F as s,u as F,j as n,aB as f,a as e,I,S as B,ah as r,bF as D,aE as g}from"./index.8cd68e6f.js";import{D as y}from"./index.e4ae5641.js";const x=({open:c,setOpen:i,toResult:l})=>{const[o]=s.useForm(),u=()=>{o.resetFields(),i(!1)},{registerStore:m}=F();return n(f,{title:"\u67E5\u8BE2\u6CE8\u518C\u7533\u8BF7\u7ED3\u679C",open:c,width:640,onCancel:u,footer:[],children:[e(y,{}),n(s,{form:o,name:"check",labelCol:{span:4},wrapperCol:{span:20},colon:!1,onFinish:async t=>{const{data:a}=await D({userId:t.accountNumber,key:"ACCESS_REGISTER"});if(!a)return g.warning("\u5E76\u672A\u67E5\u8BE2\u5230\u8BE5\u7528\u6237\u7684\u6CE8\u518C\u7ED3\u679C");const{taskId:d}=a,{state:h,processInstanceId:p,starter:C,comment:E}=a.instanceInfo;m.setRegisterInfo({taskId:d,state:h,processInstanceId:p,starter:C,comment:E}),u(),l()},onFinishFailed:t=>{console.log(t)},autoComplete:"off",children:[e(s.Item,{name:"accountNumber",label:"\u8D26\u6237\u767B\u5F55\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u6237\u767B\u5F55\u540D"}],children:e(I,{showCount:!0,maxLength:20})}),e(s.Item,{wrapperCol:{span:20,offset:4},children:n(B,{children:[e(r,{onClick:u,children:"\u5173\u95ED"}),e(r,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})]})]})};export{x as default};
//# sourceMappingURL=CheckModal.a94e4f80.js.map
