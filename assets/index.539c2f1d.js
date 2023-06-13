import{o as d,R as h,u as c,j as p,F as e,a as u,I as F,b as n,f as t}from"./index.a49703b8.js";import{f as C}from"./index.b6f5ff1b.js";import{D as o}from"./index.702cfafd.js";import{T as D}from"./index.eebbc702.js";import"./EditOutlined.71f319fe.js";import"./styleChecker.133adc76.js";const{Title:B}=D,{TextArea:A}=F,l=20,s=h.forwardRef(({params:m},E)=>{const{value:i}=m,{accessFormStore:r}=c(),a=r.current.state===2;return p(e,{ref:E,name:"basicInfo",...C,initialValues:{},style:{display:i==="0"?"block":"none"},children:[u(B,{level:5,children:"\u63A5\u5165\u5E94\u7528\u4FE1\u606F"}),u(o,{}),u(e.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",rules:[{required:!0}],children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",name:"systemtype",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B"}],children:a?"":u(n,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",fieldNames:t,options:r.getDictionaryItem("appType")})}),u(e.Item,{label:"\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",name:"systemlevel",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B"}],children:a?"":u(n,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",fieldNames:t,options:r.getDictionaryItem("systemlevel")})}),u(e.Item,{label:"\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",name:"systemRange",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4"}],children:a?"":u(n,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",fieldNames:t,options:r.getDictionaryItem("networkType")})}),u(e.Item,{label:"\u4F7F\u7528\u573A\u666F\u63CF\u8FF0",name:"description",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0"}],children:a?"":u(A,{rows:2,placeholder:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572850\u5B57\u5185",showCount:!0,maxLength:50})}),u(B,{level:5,children:"\u7533\u8BF7\u5355\u4F4D\u4FE1\u606F"}),u(o,{}),u(e.Item,{label:"\u7533\u8BF7\u5355\u4F4D",name:"applyCompany",rules:[{required:!0}],children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u5355\u4F4D",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u5355\u4F4D\u7ECF\u529E\u4EBA",name:"applyCompanyHandleMan",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u7ECF\u529E\u4EBA",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"applyCompanyHandleManPhone",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"applyCompanyHandleManEmail",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:l})}),u(B,{level:5,children:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F"}),u(o,{}),u(e.Item,{label:"\u627F\u5EFA\u5355\u4F4D",name:"undertakeCompany",rules:[{required:!0}],children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u627F\u5EFA\u5355\u4F4D",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",name:"undertakeCompanyHandleMan",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"undertakeCompanyHandleManPhone",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:l})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"undertakeCompanyHandleManEmail",children:a?"":u(F,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:l})})]})});s.displayName="BasicInfo";const w=d(s);export{w as default};
//# sourceMappingURL=index.539c2f1d.js.map
