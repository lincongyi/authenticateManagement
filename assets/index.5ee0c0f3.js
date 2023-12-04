import{aV as P,r as i,b as T,b6 as r,m as q,u as L,M as j,a as c,F as k,j as u,aK as M,B as h,D as m,L as t,aY as d,b$ as B,b7 as D,b8 as C,T as N}from"./index.adc364ef.js";import{d as S}from"./myAccount.08927521.js";import{g as V,u as _,a as $}from"./myApp.1769575d.js";import{u as H}from"./index.6c7b9695.js";import{A as G}from"./index.56ba8c22.js";const{Title:p}=N,{TextArea:K}=t,O={required:"\u8BF7\u8F93\u5165${label}"},Y={labelCol:{span:4},wrapperCol:{span:12},validateMessages:O,autoComplete:"off"},o=30,z=()=>{const{dictionaryStore:F}=H(),[n,A]=i.exports.useState();i.exports.useEffect(()=>{(async()=>{const{data:e}=await S();if(!e)return;A(e);const a={contractor:e.adminName,contractorPhone:e.adminPhone,contractorEmail:e.adminEmail};l.setFieldsValue({...l.getFieldsValue(),...a})})()},[]);const[g]=T(),[l]=r.useForm(),s=g.get("clientId");i.exports.useEffect(()=>{!s||(async()=>{const{data:e}=await V({id:s});!e||l.setFieldsValue(e)})()},[]);const[f,I]=q.useMessage(),y=async e=>{s?await _({clientId:s,...e,companyId:n.companyId}):await $({...e,companyId:n.companyId}),f.success({content:`${s?"\u7F16\u8F91":"\u6DFB\u52A0"}\u6210\u529F`,duration:2,onClose(){E(-1)}})},b=e=>{console.log("Failed:",e)},E=L(),[v,w]=j.useModal(),x=()=>{v.confirm({title:"\u63D0\u793A",content:"\u8FD4\u56DE\u5C06\u6E05\u7A7A\u6240\u6709\u5F55\u5165\u7684\u4FE1\u606F",okText:"\u786E\u5B9A",onOk:()=>{E(-1)}})};return c(k,{children:[w,I,c(r,{form:l,name:"appForm",...Y,onFinish:y,onFinishFailed:b,validateTrigger:["onBlur"],autoComplete:"off",children:[u(r.Item,{wrapperCol:{span:24},className:"tr",children:u(G,{offsetTop:140,children:c(M,{children:[u(h,{onClick:x,children:"\u8FD4\u56DE"}),u(h,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})}),u(p,{level:5,children:"\u5E94\u7528\u57FA\u672C\u4FE1\u606F"}),u(m,{}),u(r.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",showCount:!0,maxLength:o})}),u(r.Item,{label:"\u5E94\u7528\u7C7B\u578B",name:"appType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B"}],children:u(d,{placeholder:"\u8BF7\u9009\u62E9\u5E94\u7528\u7C7B\u578B",fieldNames:B,options:F.getDictionaryItem("appType")})}),u(r.Item,{label:"\u6240\u5C5E\u7EA7\u522B",name:"sysLevel",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7EA7\u522B"}],children:u(d,{placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7EA7\u522B",fieldNames:B,options:F.getDictionaryItem("systemlevel")})}),u(r.Item,{label:"\u6240\u5C5E\u7F51\u57DF",name:"sysInternet",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7F51\u57DF"}],children:u(d,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",fieldNames:B,options:F.getDictionaryItem("networkType")})}),u(r.Item,{label:"\u5E94\u7528\u63CF\u8FF0",name:"remark",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0"}],children:u(K,{rows:2,placeholder:"\u8BF7\u7B80\u8981\u63CF\u8FF0\u5E94\u7528\u80FD\u529B",showCount:!0,maxLength:50})}),u(p,{level:5,children:"\u5E94\u7528\u5355\u4F4D\u4FE1\u606F"}),u(m,{}),u(r.Item,{label:"\u5355\u4F4D\u540D\u79F0",required:!0,children:n==null?void 0:n.companyName}),u(r.Item,{label:"\u7BA1\u7406\u5458\u59D3\u540D",name:"contractor",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u59D3\u540D",showCount:!0,maxLength:o})}),u(r.Item,{label:"\u8054\u7CFB\u7535\u8BDD",name:"contractorPhone",rules:[{required:!0},{validator(e,a){return D.test(a)?Promise.resolve():Promise.reject(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:11})}),u(r.Item,{label:"\u8054\u7CFB\u90AE\u7BB1",name:"contractorEmail",rules:[{required:!0},{validator(e,a){return C.test(a)?Promise.resolve():Promise.reject(new Error("\u90AE\u7BB1\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:o})}),u(p,{level:5,children:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F"}),u(m,{}),u(r.Item,{label:"\u627F\u5EFA\u5355\u4F4D",name:"undertakeCompany",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u627F\u5EFA\u5355\u4F4D",showCount:!0,maxLength:o})}),u(r.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",name:"projectManager",rules:[{required:!0}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA",showCount:!0,maxLength:o})}),u(r.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"managerPhone",rules:[{required:!0},{validator(e,a){return D.test(a)?Promise.resolve():Promise.reject(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:11})}),u(r.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"managerEmail",rules:[{required:!0},{validator(e,a){return C.test(a)?Promise.resolve():Promise.reject(new Error("\u90AE\u7BB1\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:u(t,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:o})})]})]})},X=P(z);export{X as default,Y as formProps};
