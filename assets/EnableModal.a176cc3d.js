import{m as C,n as B}from"./myApp.1a97cac9.js";import{F as a,m as g,a as t,d as A,M as f,j as u,c as y,C as D,b,B as r,I as w}from"./index.c08dcc58.js";import{A as E}from"./index.cebb7f43.js";const{TextArea:I}=w,q=({open:i,setOpen:p,item:n,callback:F})=>{const e=n.state===3,c=`${e?"\u542F\u7528":"\u505C\u7528"}\u7533\u8BF7\u901A\u8FC7\u540E\uFF0C\u5C06\u540C\u65F6${e?"\u542F\u7528":"\u505C\u7528"}\u6B64\u5E94\u7528\u6D4B\u8BD5\u3001\u6B63\u5F0F\u73AF\u5883\u7684\u5E94\u7528\u8D26\u53F7\u3001\u53CA\u5DF2\u63A5\u5165\u80FD\u529B\u670D\u52A1\uFF01`,[l]=a.useForm(),d={labelCol:{span:4},wrapperCol:{span:20},validateMessages:{required:"\u8BF7\u8F93\u5165${label}"},autoComplete:"off"},o=()=>{l.resetFields(),p(!1)},[m,h]=g.useMessage();return t(A,{children:[h,t(f,{title:`\u7533\u8BF7${e?"\u542F\u7528":"\u505C\u7528"}`,centered:!0,open:i,width:640,onCancel:o,footer:[],children:[u(E,{message:c,type:"warning",style:{marginBottom:20}}),t(a,{form:l,name:"enable",...d,onFinish:async({describe:s})=>{e?await C({appId:n.appId,describe:s}):await B({appId:n.appId,describe:s}),m.success({content:`\u5DF2\u6210\u529F${e?"\u542F\u7528":"\u505C\u7528"}`}),F(),o()},onFinishFailed:s=>{console.log("Failed:",s)},children:[u(a.Item,{label:`${e?"\u542F\u7528":"\u505C\u7528"}\u539F\u56E0`,name:"describe",rules:[{required:!0}],children:u(I,{showCount:!0,maxLength:50,style:{height:120,resize:"none"},placeholder:`\u8BF7\u8F93\u5165${e?"\u542F\u7528":"\u505C\u7528"}\u539F\u56E0`})}),u(a.Item,{noStyle:!0,wrapperCol:{span:24},children:u(y,{children:u(D,{span:24,className:"tr",children:t(b,{children:[u(r,{onClick:o,children:"\u53D6\u6D88"}),u(r,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})})})]})]})]})};export{q as default};
