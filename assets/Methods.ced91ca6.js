import{r,b5 as a,m as k,a as s,F as p,j as e,L as I,b6 as N,I as Y,B as E,b7 as v,b8 as P,b9 as T,ba as H,bb as q,D as Z,bc as G,a7 as X,u as O,R as D,C as j,bd as W}from"./index.904a2463.js";import{r as V,a as $,b as ee}from"./myAccount.971e50fb.js";import{S as te}from"./index.d35f244b.js";const ue="_selected_1i79g_42",se="_active_1i79g_49",g={"steps-content":"_steps-content_1i79g_1","method-title":"_method-title_1i79g_5","method-list":"_method-list_1i79g_12","method-item":"_method-item_1i79g_17","method-name":"_method-name_1i79g_31",selected:ue,active:se},ne=""+new URL("accountSetting-method-01.3e422617.png",import.meta.url).href,ae=""+new URL("accountSetting-method-02.75fdabed.png",import.meta.url).href,oe=""+new URL("accountSetting-method-03.47780fdb.png",import.meta.url).href,ie="_steps_61nbw_1",ce={steps:ie},re="_tips_cgcej_1",Ae="_emphasize_cgcej_7",le="_title_cgcej_21",Ee="_subtitle_cgcej_27",C={tips:re,emphasize:Ae,"scan-content":"_scan-content_cgcej_11",title:le,subtitle:Ee,"scan-flow":"_scan-flow_cgcej_30","step-item":"_step-item_cgcej_34","step-icon":"_step-icon_cgcej_42","step-tips":"_step-tips_cgcej_45","scan-arrow":"_scan-arrow_cgcej_55"},Be=({type:t})=>{const u=r.exports.useContext(m),[o]=a.useForm(),B={required:"\u8BF7\u8F93\u5165${label}"},[F,i]=r.exports.useState(0),n=["adminPhone","adminEmail"],[d,A]=r.exports.useState(""),S=["\u83B7\u53D6\u9A8C\u8BC1\u7801","\u770B\u4E0D\u6E05\uFF1F\u6362\u4E00\u5F20"],[h,Q]=r.exports.useState(0),[b,_]=k.useMessage(),R=async()=>{const c=n[t],l=o.getFieldValue(c);if(!l)return A(""),Q(0),b.warning(`\u8BF7\u8F93\u5165${t?"\u90AE\u7BB1":"\u624B\u673A\u53F7"}`);if(!t&&!v.test(l))return A(""),Q(0),b.warning("\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4");if(t&&!P.test(l))return A(""),Q(0),b.warning("\u90AE\u7BB1\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4");const y=await T({key:l}),z=(window.URL||window.webkitURL).createObjectURL(y);A(z),Q(1)},[w,K]=r.exports.useState(),U=async c=>{const l=c[n[t]];await V({key:l,code:c.imgCaptcha}),await H({type:t,key:l,operation:"\u66F4\u65B0\u5355\u4F4D\u4FE1\u606F"}),K({type:t,key:l,imgCaptcha:c.imgCaptcha}),i(1)},M=c=>{console.log("Failed:",c)},x=c=>{u==null||u.onNext({...w,...c})},L=c=>{console.log("Failed:",c)};return s(p,{children:[_,F?s(p,{children:[s("p",{className:C.tips,children:["\u6211\u4EEC\u5DF2\u5C06\u9A8C\u8BC1\u7801\u53D1\u9001\u81F3\u60A8\u7684",t?"\u90AE\u7BB1":"\u624B\u673A",e("span",{className:C.emphasize,children:w.key}),"\uFF0C\u8BF7\u5C3D\u5FEB\u586B\u5199\u4E0B\u65B9\u8F93\u5165\u6846\u5185\u5B8C\u6210\u9A8C\u8BC1 \u627E\u56DE\u5BC6\u7801"]}),s(a,{name:"captcha",layout:"vertical",onFinish:x,onFinishFailed:L,validateMessages:B,autoComplete:"off",children:[e(a.Item,{label:`${t?"\u90AE\u7BB1":"\u77ED\u4FE1"}\u9A8C\u8BC1\u7801`,name:"captcha",rules:[{required:!0}],children:e(I,{placeholder:`${t?"\u90AE\u7BB1":"\u77ED\u4FE1"}\u9A8C\u8BC1\u7801`,showCount:!0,maxLength:6})}),e(a.Item,{children:s(N,{children:[e(E,{onClick:()=>u==null?void 0:u.onPrev(),children:"\u4E0A\u4E00\u6B65"}),e(E,{type:"primary",htmlType:"submit",children:"\u4E0B\u4E00\u6B65"})]})})]})]}):s(p,{children:[s("p",{className:C.tips,children:["\u60A8\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165",t?e("span",{className:C.emphasize,children:"\u7535\u5B50\u90AE\u7BB1"}):e("span",{className:C.emphasize,children:"\u624B\u673A\u53F7\u7801"}),"\u627E\u56DE\u5BC6\u7801"]}),s(a,{form:o,name:"imgCaptcha",layout:"vertical",onFinish:U,onFinishFailed:M,validateMessages:B,validateTrigger:["onBlur","onChange"],autoComplete:"off",children:[e(a.Item,{label:`\u9884\u7559${t?"\u90AE\u7BB1":"\u624B\u673A\u53F7"}`,name:n[t],rules:[{required:!0},{async validator(c,l){return!l||(t?P:v).test(l)?await Promise.resolve():await Promise.reject(new Error(`${t?"\u90AE\u7BB1":"\u624B\u673A\u53F7"}\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4`))},validateTrigger:"onBlur"}],children:e(I,{placeholder:`\u8BF7\u8F93\u5165\u9884\u7559${t?"\u90AE\u7BB1":"\u624B\u673A\u53F7"}`,maxLength:t?30:11,showCount:!0})}),e(a.Item,{label:"\u9A8C\u8BC1\u7801",required:!0,children:s(N,{children:[e(a.Item,{name:"imgCaptcha",rules:[{required:!0,message:`\u8BF7\u8F93\u5165${t?"\u90AE\u7BB1":"\u77ED\u4FE1"}\u9A8C\u8BC1\u7801`}],noStyle:!0,children:e(I,{showCount:!0,maxLength:4})}),!!h&&e(Y,{width:128,height:32,src:d,fallback:"data:image/png;base64,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"}),e(E,{type:"primary",onClick:R,children:S[h]})]})}),e(a.Item,{children:s(N,{children:[e(E,{onClick:()=>u==null?void 0:u.onPrev(),children:"\u4E0A\u4E00\u6B65"}),e(E,{type:"primary",htmlType:"submit",children:"\u4E0B\u4E00\u6B65"})]})})]})]})]})},de=""+new URL("accountSetting-scan-flow.bd37051a.png",import.meta.url).href,ge=()=>{const t=r.exports.useContext(m),u=async o=>{await $({certToken:o}),t==null||t.onNext()};return s(p,{children:[s("div",{className:C["scan-content"],children:[e("div",{className:`${C.title} font-primary-color`,children:"\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801"}),e(q,{callback:u,isLoop:!0}),e(Z,{dashed:!0}),e("img",{src:de})]}),e("div",{className:"tc",children:e(N,{children:e(E,{onClick:()=>t==null?void 0:t.onPrev(),children:"\u4E0A\u4E00\u6B65"})})})]})},he=()=>{const t=r.exports.useContext(m),{type:u}=t==null?void 0:t.resetParams;return e(p,{children:u!==2?e("div",{className:g["steps-content"],children:e(Be,{type:u})}):e(ge,{})})},J=()=>{const t=r.exports.useContext(m),u={required:"\u8BF7\u8F93\u5165${label}"},[o,B]=k.useMessage();return s(p,{children:[B,s(a,{name:"password",layout:"vertical",onFinish:async n=>{const{retMessage:d}=await ee({...t==null?void 0:t.resetParams,...n});o.success({content:d,duration:2,onClose(){t==null||t.onNext({...t==null?void 0:t.resetParams,...n})}})},onFinishFailed:n=>{console.log("Failed:",n)},validateMessages:u,autoComplete:"off",children:[e(a.Item,{label:"\u65B0\u5BC6\u7801",name:"password",rules:[{required:!0},{validator(n,d){return!d||G.test(d)?Promise.resolve():Promise.reject(new Error("\u5BC6\u7801\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4"))}}],extra:"\u5E73\u53F0\u767B\u5F55\u5BC6\u7801\uFF0C\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u6570\u5B57\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u5927\u5199\u5B57\u6BCD\u3001\u7279\u6B8A\u7B26\u53F7\u5176\u4E2D\u7684\u4E09\u79CD\u53CA\u4EE5\u4E0A\uFF0C\u81F3\u5C118\u4E2A\u5B57\u7B26",children:e(I.Password,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",maxLength:20,showCount:!0})}),e(a.Item,{label:"\u786E\u8BA4\u5BC6\u7801",name:"confirmPassword",rules:[{required:!0},({getFieldValue:n})=>({validator(d,A){return!A||n("password")===A?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\u8BF7\u91CD\u65B0\u786E\u8BA4"))}})],children:e(I.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",maxLength:20,showCount:!0})}),e(a.Item,{children:s(N,{children:[e(E,{onClick:()=>t==null?void 0:t.onPrev(),children:"\u4E0A\u4E00\u6B65"}),e(E,{type:"primary",htmlType:"submit",children:"\u4E0B\u4E00\u6B65"})]})})]})]})},pe=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),m=X.createContext(void 0),Ce=()=>{const[t,u]=r.exports.useState(0),[o,B]=r.exports.useState({type:0,key:void 0,imgCaptcha:void 0,captcha:void 0,password:void 0,confirmPassword:void 0,certToken:void 0}),F=h=>{h&&B({...o,...h}),u(t+1)},i=()=>{t&&u(t-1)},n=O(),A=[{title:"\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F",content:e(f,{})},{title:"\u8FDB\u5165\u8BA4\u8BC1",content:e(he,{})},{title:"\u8BBE\u7F6E\u65B0\u5BC6\u7801",content:e(J,{})},{title:"\u5B8C\u6210",content:e(W,{status:"success",title:"\u4FEE\u6539\u6210\u529F",extra:[e(E,{type:"primary",onClick:()=>n("/login"),children:"\u8FD4\u56DE"},"back")]})}],S=A.map((h,Q)=>({key:Q,title:h.title}));return e(m.Provider,{value:{onNext:F,onPrev:i,resetParams:o},children:e(D,{justify:"center",children:s(j,{span:20,children:[e(te,{current:t,items:S,className:ce.steps}),e(D,{justify:"center",children:e(j,{span:20,children:A[t].content})})]})})})},Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ce,settingContext:m},Symbol.toStringTag,{value:"Module"})),f=()=>{const t=r.exports.useContext(m),u=[{icon:ne,description:"\u4EBA\u8138\u8BC6\u522B",type:2},{icon:ae,description:"\u624B\u673A\u9A8C\u8BC1",type:0},{icon:oe,description:"\u90AE\u7BB1\u9A8C\u8BC1",type:1}],[o,B]=r.exports.useState(2),F=i=>B(i);return s("div",{className:g["steps-content"],children:[e("p",{className:`${g["method-title"]} font-primary-color`,children:"\u60A8\u53EF\u4EE5\u901A\u8FC7\u9009\u62E9\u4EE5\u4E0B\u4E09\u79CD\u8BA4\u8BC1\u65B9\u5F0F\u4E2D\u7684\u4E00\u79CD\uFF0C\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1"}),e("div",{className:g["method-list"],children:u.map(i=>s("div",{className:`${g["method-item"]} ${o===i.type&&g.active}`,onClick:()=>F(i.type),children:[e("i",{className:`${g.selected}`}),e("p",{className:`${g["method-name"]}`,children:i.description}),e("img",{src:i.icon})]},i.type))}),e("div",{className:"tc",children:e(E,{type:"primary",onClick:()=>t&&t.onNext({type:o}),children:"\u4E0B\u4E00\u6B65"})})]})},Ne=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));export{Ne as M,pe as P,Ie as i};
