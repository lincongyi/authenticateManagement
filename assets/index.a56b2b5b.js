import{o as x,bH as w,r as o,aL as q,F as e,m as T,aE as v,M as L,a as F,d as k,j as u,b as M,B as E,D as i,I as t,S as c,f as m,T as N}from"./index.c08dcc58.js";import{b as S}from"./myAccount.db07ce26.js";import{g as P,u as j,a as H}from"./myApp.1a97cac9.js";import{A as $}from"./index.4d4b4563.js";const{Title:d}=N,{TextArea:G}=t,O={required:"\u8BF7\u8F93\u5165${label}"},V={labelCol:{span:4},wrapperCol:{span:12},validateMessages:O,autoComplete:"off"},l=30,z=()=>{const{dictionaryStore:n}=w(),[a,h]=o.exports.useState();o.exports.useEffect(()=>{(async()=>{const{data:r}=await S();h(r)})()},[]);const[D]=q(),[p]=e.useForm(),s=D.get("clientId");o.exports.useEffect(()=>{!s||(async()=>{const{data:r}=await P({id:s});!r||p.setFieldsValue(r)})()},[]);const[C,A]=T.useMessage(),g=async r=>{s?await j({clientId:s,...r,companyId:a.companyId}):await H({...r,companyId:a.companyId}),C.success({content:`${s?"\u7F16\u8F91":"\u6DFB\u52A0"}\u6210\u529F`,duration:2,onClose(){B(-1)}})},I=r=>{console.log("Failed:",r)},B=v(),[b,f]=L.useModal(),y=()=>{b.confirm({title:"\u63D0\u793A",content:"\u8FD4\u56DE\u5C06\u6E05\u7A7A\u6240\u6709\u5F55\u5165\u7684\u4FE1\u606F",okText:"\u786E\u5B9A",onOk:()=>{B(-1)}})};return F(k,{children:[f,A,F(e,{form:p,name:"appForm",...V,onFinish:g,onFinishFailed:I,children:[u(e.Item,{wrapperCol:{span:24},className:"tr",children:u($,{offsetTop:140,children:F(M,{children:[u(E,{onClick:y,children:"\u8FD4\u56DE"}),u(E,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})}),u(d,{level:5,children:"\u5E94\u7528\u57FA\u672C\u4FE1\u606F"}),u(i,{}),u(e.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u5E94\u7528\u7C7B\u578B",name:"appType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B"}],children:u(c,{placeholder:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B",fieldNames:m,options:n.getDictionaryItem("appType")})}),u(e.Item,{label:"\u6240\u5C5E\u7EA7\u522B",name:"sysLevel",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7EA7\u522B"}],children:u(c,{placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7EA7\u522B",fieldNames:m,options:n.getDictionaryItem("systemlevel")})}),u(e.Item,{label:"\u6240\u5C5E\u7F51\u57DF",name:"sysInternet",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7F51\u57DF"}],children:u(c,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",fieldNames:m,options:n.getDictionaryItem("networkType")})}),u(e.Item,{label:"\u5E94\u7528\u63CF\u8FF0",name:"remark",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0"}],children:u(G,{rows:2,placeholder:"\u8BF7\u7B80\u8981\u63CF\u8FF0\u5E94\u7528\u80FD\u529B",showCount:!0,maxLength:50})}),u(d,{level:5,children:"\u5E94\u7528\u5355\u4F4D\u4FE1\u606F"}),u(i,{}),u(e.Item,{label:"\u5355\u4F4D\u540D\u79F0",rules:[{required:!0}],children:a==null?void 0:a.companyName}),u(e.Item,{label:"\u7BA1\u7406\u5458\u59D3\u540D",rules:[{required:!0}],children:a==null?void 0:a.adminName}),u(e.Item,{label:"\u8054\u7CFB\u7535\u8BDD",rules:[{required:!0}],children:a==null?void 0:a.adminPhone}),u(e.Item,{label:"\u8054\u7CFB\u90AE\u7BB1",rules:[{required:!0}],children:a==null?void 0:a.adminEmail}),u(d,{level:5,children:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F"}),u(i,{}),u(e.Item,{label:"\u627F\u5EFA\u5355\u4F4D",name:"undertakeCompany",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u627F\u5EFA\u5355\u4F4D",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",name:"projectManager",children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"managerPhone",children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:11})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"managerEmail",children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:l})})]})]})},U=x(z);export{U as default,V as formProps};