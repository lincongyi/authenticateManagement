import{R as U,u as m,i as r,a as e,d as F,j as u,F as t,ar as l,as as h,S as R,c as b,C as n,I as B,at as E,ah as w,au as L}from"./index.9e9e2773.js";import{f as O}from"./index.b6f5ff1b.js";import{D as j}from"./index.3e7617f1.js";import{E as q}from"./ExclamationCircleOutlined.77f05be8.js";import{R as a}from"./index.e5bc35fe.js";import{U as N}from"./UploadOutlined.797954d2.js";import{T as P}from"./index.cbfc48d0.js";import"./getDataOrAriaProps.fd89ab75.js";import"./index.aa14af2d.js";import"./EditOutlined.d9fccc53.js";import"./styleChecker.4d441e10.js";const{TextArea:V}=B,{Text:s}=P,k=U.forwardRef(({params:f},g)=>{const{value:C}=f,{accessFormStore:A}=m(),o=A.current.state===2,[x,G]=r.exports.useState(!1),[c,H]=r.exports.useState([]),i=p=>{},y=u("div",{children:[x?e(L,{}):e(E,{}),e("div",{style:{marginTop:8},children:"Upload"})]}),[v,T]=r.exports.useState(1),D=p=>{T(p.target.value)},[d,W]=r.exports.useState(),{themeStore:I}=m(),S=I.antdThemeColor;return e(F,{children:u(t,{ref:g,name:"accountInfo",...O,initialValues:{},style:{display:C==="4"?"block":"none"},children:[e(j,{}),e(t.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u4ECB\u7ECD",name:"description",rules:[{required:!0}],children:o?"":e(V,{rows:4,placeholder:"\u8BF7\u7B80\u8981\u586B\u5199\u5E94\u7528\u4ECB\u7ECD",showCount:!0,maxLength:1e3})}),e(t.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u622A\u56FE",name:"picture",rules:[{required:!0}],children:o?"":e(l,{listType:"picture-card",fileList:c,beforeUpload:h,customRequest:i,children:c.length>=5?null:y})}),e(t.Item,{label:"\u6B63\u5F0F\u4E0A\u7EBF\u65B0\u95FB\u901A\u544A",children:o?"":u(F,{children:[u(R,{style:{color:S,marginTop:6},children:[e(q,{}),e("span",{children:"\u4E0B\u5217\u65B9\u5F0F\u4E09\u9009\u4E00\u5373\u53EF\uFF0C\u4E0D\u586B\u5199\u53EF\u80FD\u5F71\u54CD\u5BA1\u6279\u7ED3\u679C"})]}),e(t.Item,{name:"notice",noStyle:!0,children:e(a.Group,{onChange:D,value:v,style:{width:"100%",marginTop:20},children:u(b,{gutter:[0,20],children:[e(n,{span:24,children:u(a,{value:1,style:{width:"100%"},children:[e(s,{children:"\u65B9\u5F0F\u4E00\uFF1A\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"}),e(B,{placeholder:"\u8BF7\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"})]})}),e(n,{span:24,children:u(a,{value:2,children:[e(s,{children:"\u65B9\u5F0F\u4E8C\uFF1A\u4E0A\u4F20\u622A\u56FE"}),e(l,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:h,customRequest:i,children:d?e("img",{src:d,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):u("div",{children:[e(E,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})]})}),e(n,{span:24,children:u(a,{value:3,children:[e(s,{children:"\u65B9\u5F0F\u4E09\uFF1A\u4E0A\u4F20\u6587\u4EF6"}),e("br",{}),e(l,{maxCount:1,customRequest:i,children:e(w,{icon:e(N,{}),children:"Upload"})})]})})]})})})]})})]})})});k.displayName="AccountInfo";export{k as default};
//# sourceMappingURL=index.fd1d4de6.js.map
