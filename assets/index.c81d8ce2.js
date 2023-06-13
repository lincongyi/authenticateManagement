import{R as A,k as t,u as C,j as a,e as E,a as u,F as e,I as F}from"./index.a49703b8.js";import{f as o}from"./index.b6f5ff1b.js";import{A as h}from"./index.5fded359.js";import{D as n}from"./index.702cfafd.js";import{T as x}from"./index.eebbc702.js";import"./getDataOrAriaProps.fd89ab75.js";import"./EditOutlined.71f319fe.js";import"./styleChecker.133adc76.js";const{Title:s}=x,y=A.forwardRef(({params:D},d)=>{const i=t.exports.useRef(null),B=t.exports.useRef(null);t.exports.useImperativeHandle(d,()=>({sitRef:i,prodRef:B}));const{value:l}=D,{accessFormStore:p}=C(),r=p.current.state===2,c={sitperSec:"50",sitlimitTime:"1",sitperDay:"100000",sitperMonth:"0",sitperAnnum:"0",sittotal:"0"},m={prodperSec:"50",prodlimitTime:"1",prodperDay:"100000",prodperMonth:"0",prodperAnnum:"0",prodtotal:"0"};return a(E,{children:[u(h,{message:"\u8BF7\u6839\u636E\u9700\u8981\u5408\u7406\u8C03\u6574\uFF0C\u52FF\u4E00\u5473\u8FFD\u6C42\u6700\u9AD8\u503C\u9020\u6210\u8D44\u6E90\u5197\u4F59",type:"warning",showIcon:!0,style:{marginBottom:20,display:l==="2"?"flex":"none"}}),a(e,{ref:i,name:"concurrencySit",...o,initialValues:c,style:{display:l==="2"?"block":"none"},children:[u(s,{level:5,children:"\u6D4B\u8BD5\u73AF\u5883"}),u(n,{}),u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",name:"sitperSec",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F41-100\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u79D2\u5E76\u53D1\u9650\u5236"})}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",name:"sitlimitTime",extra:"(\u8BA1\u7B97\u5468\u671F\u5FC5\u987B>1\uFF0C\u5EFA\u8BAE\u5468\u671F=1\uFF0C\u5355\u4F4D\uFF1A\u79D2)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8BA1\u7B97\u5468\u671F"})}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",name:"sitperDay",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F410W-100W\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u65E5\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",name:"sitperMonth",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u6708\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",name:"sitperAnnum",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u5E74\u9650\u989D"})}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",name:"sittotal",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D"})})]}),a(e,{ref:B,name:"concurrencyProduction",...o,initialValues:m,style:{display:l==="2"?"block":"none"},children:[u(s,{level:5,children:"\u6B63\u5F0F\u73AF\u5883"}),u(n,{}),u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",name:"prodperSec",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F41-100\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u79D2\u5E76\u53D1\u9650\u5236"})}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",name:"prodlimitTime",extra:"(\u8BA1\u7B97\u5468\u671F\u5FC5\u987B>1\uFF0C\u5EFA\u8BAE\u5468\u671F=1\uFF0C\u5355\u4F4D\uFF1A\u79D2)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8BA1\u7B97\u5468\u671F"})}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",name:"prodperDay",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F410W-100W\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u65E5\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",name:"prodperMonth",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u6708\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",name:"prodperAnnum",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u5E74\u9650\u989D"})}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",name:"prodtotal",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D"})})]})]})});y.displayName="Concurrency";export{y as default};
//# sourceMappingURL=index.c81d8ce2.js.map
