import{j as a,F as t,a as e,I as n,S as d,aj as i,aG as c,bq as C}from"./index.01807550.js";import{a as m}from"./myAccount.68194081.js";const f=({onNext:B,onPrev:l,resetParams:o})=>a(t,{name:"password",layout:"vertical",onFinish:async u=>{const{type:s,...r}=o,{retMessage:F}=await m({...r,...u});c.success({content:F,duration:2,onClose(){B({...o,...u})}})},onFinishFailed:u=>{console.log("resetParams",o),console.log("Failed:",u)},validateMessages:{required:"\u8BF7\u8F93\u5165${label}"},autoComplete:"off",children:[e(t.Item,{label:"\u65B0\u5BC6\u7801",name:"password",rules:[{required:!0},{validator(u,s){return!s||C.test(s)?Promise.resolve():Promise.reject(new Error("\u5BC6\u7801\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))}}],extra:"\u5E73\u53F0\u767B\u5F55\u5BC6\u7801\uFF0C\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u6570\u5B57\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u5927\u5199\u5B57\u6BCD\u3001\u7279\u6B8A\u7B26\u53F7\u5176\u4E2D\u7684\u4E09\u79CD\u53CA\u4EE5\u4E0A\uFF0C\u81F3\u5C118\u4E2A\u5B57\u7B26",children:e(n.Password,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",maxLength:20,showCount:!0})}),e(t.Item,{label:"\u786E\u8BA4\u5BC6\u7801",name:"confirmPassword",rules:[{required:!0},({getFieldValue:u})=>({validator(s,r){return!r||u("password")===r?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\u8BF7\u91CD\u65B0\u786E\u8BA4"))}})],children:e(n.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",maxLength:20,showCount:!0})}),e(t.Item,{children:a(d,{children:[e(i,{onClick:()=>l(),children:"\u4E0A\u4E00\u6B65"}),e(i,{type:"primary",htmlType:"submit",children:"\u4E0B\u4E00\u6B65"})]})})]});export{f as default};
//# sourceMappingURL=Password.96a90ecc.js.map