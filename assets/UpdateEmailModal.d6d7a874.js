import{u as h}from"./myAccount.d903694d.js";import{F as u,a as e,aD as C,j as n,I as A,bF as g,S as b,aj as o,aG as f,bs as I}from"./index.d93c8983.js";const x=({open:c,setOpen:d,companyInfo:l,callback:m})=>{const[t]=u.useForm(),F={required:"\u8BF7\u8F93\u5165${label}"},p={adminEmail:l.adminEmail},B=async a=>{const{captcha:r,adminEmail:i}=a;await h({email:i,captcha:r,dabbyUserId:l.userId}),m(i),s(),f.success({content:"\u6210\u529F\u4FEE\u6539\u90AE\u7BB1\uFF01"})},E=a=>{console.log("Failed:",a)},s=()=>{t.resetFields(),d(!1)};return e(C,{title:"\u4FEE\u6539\u7BA1\u7406\u5458\u90AE\u7BB1",open:c,footer:[],children:n(u,{form:t,name:"update",labelCol:{span:6},wrapperCol:{span:16},onFinish:B,onFinishFailed:E,validateMessages:F,validateTrigger:["onBlur","onChange"],initialValues:p,autoComplete:"off",children:[e(u.Item,{label:"\u7BA1\u7406\u5458\u90AE\u7BB1",name:"adminEmail",rules:[{required:!0},{validator(a,r){return!r||I.test(r)?Promise.resolve():Promise.reject(new Error("\u90AE\u7BB1\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:e(A,{maxLength:30})}),e(u.Item,{label:"\u90AE\u7BB1\u9A8C\u8BC1\u7801",name:"captcha",required:!0,children:e(g,{form:t,widthList:[180,130],callback:a=>t.setFieldValue("captcha",a),operation:"\u66F4\u65B0\u5355\u4F4D\u4FE1\u606F"})}),e(u.Item,{wrapperCol:{span:22},style:{textAlign:"right"},children:n(b,{children:[e(o,{onClick:s,children:"\u53D6\u6D88"}),e(o,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})};export{x as default};
//# sourceMappingURL=UpdateEmailModal.d6d7a874.js.map
