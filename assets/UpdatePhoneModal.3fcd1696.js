import{F as a,a as e,aD as C,j as i,bq as g,I as A,bG as E,S as b,aj as l,aG as P}from"./index.a49703b8.js";import{d as f}from"./myAccount.b2121cf0.js";const j=({open:d,setOpen:c,companyInfo:r,callback:F})=>{const[t]=a.useForm(),h={required:"\u8BF7\u8F93\u5165${label}"},m={adminPhone:r.adminPhone},p=async u=>{const{captcha:n,adminPhone:o}=u;await f({phoneNum:o,captcha:n,dabbyUserId:r.userId}),F(o),s(),P.success({content:"\u6210\u529F\u4FEE\u6539\u624B\u673A\u53F7\uFF01"})},B=u=>{console.log("Failed:",u)},s=()=>{t.resetFields(),c(!1)};return e(C,{title:"\u4FEE\u6539\u7BA1\u7406\u5458\u624B\u673A\u53F7",open:d,footer:[],children:i(a,{form:t,name:"update",labelCol:{span:6},wrapperCol:{span:16},onFinish:p,onFinishFailed:B,validateMessages:h,validateTrigger:["onBlur","onChange"],initialValues:m,autoComplete:"off",children:[e(a.Item,{name:"adminPhone",label:"\u7BA1\u7406\u5458\u624B\u673A\u53F7",rules:[{required:!0},{validator(u,n){return!n||g.test(n)?Promise.resolve():Promise.reject(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))},validateTrigger:"onBlur"}],children:e(A,{maxLength:11})}),e(a.Item,{label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",name:"captcha",required:!0,children:e(E,{form:t,widthList:[180,130],callback:u=>t.setFieldValue("captcha",u),operation:"\u66F4\u65B0\u5355\u4F4D\u4FE1\u606F"})}),e(a.Item,{wrapperCol:{span:22},style:{textAlign:"right"},children:i(b,{children:[e(l,{onClick:s,children:"\u53D6\u6D88"}),e(l,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})};export{j as default};
//# sourceMappingURL=UpdatePhoneModal.3fcd1696.js.map
