import{b6 as s,J as B,m as D,a as u,F as I,M as y,j as e,D as b,L as w,aK as S,B as r,cl as k}from"./index.adc364ef.js";const j=({open:c,setOpen:i,toResult:l})=>{const[a]=s.useForm(),m={labelCol:{span:4},wrapperCol:{span:20},autoComplete:"off"},n=()=>{a.resetFields(),i(!1)},{registerStore:d}=B(),[h,p]=D.useMessage();return u(I,{children:[p,u(y,{title:"\u67E5\u8BE2\u6CE8\u518C\u7533\u8BF7\u7ED3\u679C",open:c,width:640,onCancel:n,footer:[],children:[e(b,{}),u(s,{form:a,name:"check",...m,colon:!1,onFinish:async t=>{const{data:o}=await k({userId:t.accountNumber,key:"ACCESS_REGISTER"});if(!o)return h.warning("\u5E76\u672A\u67E5\u8BE2\u5230\u8BE5\u7528\u6237\u7684\u6CE8\u518C\u7ED3\u679C");const{taskId:C}=o,{state:F,processInstanceId:E,starter:f,comment:g}=o.instanceInfo;d.setRegisterInfo({taskId:C,state:F,processInstanceId:E,starter:f,comment:g}),n(),l()},onFinishFailed:t=>{console.log(t)},children:[e(s.Item,{name:"accountNumber",label:"\u8D26\u6237\u767B\u5F55\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u6237\u767B\u5F55\u540D"}],children:e(w,{showCount:!0,maxLength:20})}),e(s.Item,{wrapperCol:{span:20,offset:4},children:u(S,{children:[e(r,{onClick:n,children:"\u5173\u95ED"}),e(r,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})]})]})]})};export{j as default};
