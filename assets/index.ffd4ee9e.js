import{R as U,u as m,k as a,a as e,e as F,j as u,F as t,at as l,au as h,S as w,c as R,d as n,I as B,av as E,aj as b,aw as L}from"./index.a5d6ee18.js";import{f as j}from"./index.b6f5ff1b.js";import{D as O}from"./index.74b1bb9a.js";import{E as k}from"./ExclamationCircleOutlined.590e3986.js";import{R as r}from"./index.15b27e6b.js";import{U as q}from"./UploadOutlined.52005809.js";import{T as N}from"./index.c614d53f.js";import"./getDataOrAriaProps.fd89ab75.js";import"./index.d0c6bdb5.js";import"./EditOutlined.67041f27.js";import"./styleChecker.e822d741.js";const{TextArea:P}=B,{Text:s}=N,V=U.forwardRef(({params:f},g)=>{const{value:C}=f,{accessFormStore:A}=m(),o=A.current.state===2,[x,G]=a.exports.useState(!1),[c,H]=a.exports.useState([]),i=p=>{},y=u("div",{children:[x?e(L,{}):e(E,{}),e("div",{style:{marginTop:8},children:"Upload"})]}),[v,T]=a.exports.useState(1),D=p=>{T(p.target.value)},[d,W]=a.exports.useState(),{themeStore:I}=m(),S=I.antdThemeColor;return e(F,{children:u(t,{ref:g,name:"accountInfo",...j,initialValues:{},style:{display:C==="4"?"block":"none"},children:[e(O,{}),e(t.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u4ECB\u7ECD",name:"description",rules:[{required:!0}],children:o?"":e(P,{rows:4,placeholder:"\u8BF7\u7B80\u8981\u586B\u5199\u5E94\u7528\u4ECB\u7ECD",showCount:!0,maxLength:1e3})}),e(t.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u622A\u56FE",name:"picture",rules:[{required:!0}],children:o?"":e(l,{listType:"picture-card",fileList:c,beforeUpload:h,customRequest:i,children:c.length>=5?null:y})}),e(t.Item,{label:"\u6B63\u5F0F\u4E0A\u7EBF\u65B0\u95FB\u901A\u544A",children:o?"":u(F,{children:[u(w,{style:{color:S,marginTop:6},children:[e(k,{}),e("span",{children:"\u4E0B\u5217\u65B9\u5F0F\u4E09\u9009\u4E00\u5373\u53EF\uFF0C\u4E0D\u586B\u5199\u53EF\u80FD\u5F71\u54CD\u5BA1\u6279\u7ED3\u679C"})]}),e(t.Item,{name:"notice",noStyle:!0,children:e(r.Group,{onChange:D,value:v,style:{width:"100%",marginTop:20},children:u(R,{gutter:[0,20],children:[e(n,{span:24,children:u(r,{value:1,style:{width:"100%"},children:[e(s,{children:"\u65B9\u5F0F\u4E00\uFF1A\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"}),e(B,{placeholder:"\u8BF7\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"})]})}),e(n,{span:24,children:u(r,{value:2,children:[e(s,{children:"\u65B9\u5F0F\u4E8C\uFF1A\u4E0A\u4F20\u622A\u56FE"}),e(l,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:h,customRequest:i,children:d?e("img",{src:d,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):u("div",{children:[e(E,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})]})}),e(n,{span:24,children:u(r,{value:3,children:[e(s,{children:"\u65B9\u5F0F\u4E09\uFF1A\u4E0A\u4F20\u6587\u4EF6"}),e("br",{}),e(l,{maxCount:1,customRequest:i,children:e(b,{icon:e(q,{}),children:"Upload"})})]})})]})})})]})})]})})});V.displayName="AccountInfo";export{V as default};
//# sourceMappingURL=index.ffd4ee9e.js.map
