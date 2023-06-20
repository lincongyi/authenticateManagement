import{d as p}from"./zh-cn.9f6f2ce5.js";import{d as D}from"./date.e787784b.js";import{j as n,aB as A,a as u,d as i}from"./index.3cd777f3.js";import{D as d}from"./index.a2947c1a.js";import{D as e}from"./index.6130f97a.js";import{T as s}from"./index.2c816626.js";import"./EditOutlined.e396d4f1.js";import"./styleChecker.61bdd472.js";const{Title:F}=s,T=({open:m,setOpen:c,data:B})=>{const{basicInfo:l,abilityInfo:a,concurrency:o}=B,{sit:r,prod:t}=o,h=()=>{};return n(A,{title:"\u63D0\u4EA4\u5BA1\u6838",open:m,width:800,onOk:()=>h(),onCancel:()=>c(!1),children:[u(d,{}),n(i,{children:[u(F,{level:4,children:"\u57FA\u672C\u4FE1\u606F"}),n(e,{title:"\u63A5\u5165\u5E94\u7528\u4FE1\u606F",column:3,children:[u(e.Item,{label:"\u5E94\u7528\u540D\u79F0",children:l.appName||"-"}),u(e.Item,{label:"\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",children:l.systemtype||"-"}),u(e.Item,{label:"\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",children:l.systemlevel||"-"}),u(e.Item,{label:"\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",children:l.systemRange||"-"}),u(e.Item,{label:"\u4F7F\u7528\u573A\u666F\u63CF\u8FF0",children:l.description||"-"})]}),n(e,{title:"\u7533\u8BF7\u5355\u4F4D\u4FE1\u606F",column:3,children:[u(e.Item,{label:"\u7533\u8BF7\u5355\u4F4D",children:l.applyCompany||"-"}),u(e.Item,{label:"\u5355\u4F4D\u7ECF\u529E\u4EBA",children:l.applyCompanyHandleMan||"-"}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",children:l.applyCompanyHandleManPhone||"-"}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",children:l.applyCompanyHandleManEmail||"-"})]}),n(e,{title:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F",column:3,children:[u(e.Item,{label:"\u627F\u5EFA\u5355\u4F4D",children:l.undertakeCompany||"-"}),u(e.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",children:l.undertakeCompanyHandleMan||"-"}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",children:l.undertakeCompanyHandleManPhone||"-"}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",children:l.undertakeCompanyHandleManEmail||"-"})]})]}),u(d,{}),n(i,{children:[u(F,{level:4,children:"\u57FA\u7840\u80FD\u529B\u4FE1\u606F"}),n(e,{column:3,children:[u(e.Item,{label:"\u63A5\u5165\u57FA\u7840\u80FD\u529B",children:a.basepower||"-"}),u(e.Item,{label:"\u63A5\u5165\u8D26\u53F7\u7C7B\u578B",children:a.accountType||"-"}),u(e.Item,{label:"\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F",children:p(a.serviceVaildEnd).format(D)||"-"}),u(e.Item,{label:"\u8BA4\u8BC1\u7C7B\u578B",children:a.authType||"-"}),u(e.Item,{label:"\u8BA4\u8BC1\u6A21\u5F0F",children:a.authMode||"-"}),u(e.Item,{label:"\u63A5\u5165\u65B9\u5F0F",children:a.accessMode||"-"}),u(e.Item,{label:"\u5E94\u7528ID\uFF08Android\uFF09",children:a.androidAppId||"-"}),u(e.Item,{label:"Bundle ID\uFF08IOS\uFF09",children:a.bundleId||"-"}),u(e.Item,{label:"\u5C0F\u7A0B\u5E8Fappid",children:a.appId||"-"}),u(e.Item,{label:"\u63A8\u9001\u8BA4\u8BC1\u7ED3\u679C\u5730\u5740",children:a.authResultAddress||"-"})]})]}),u(d,{}),n(i,{children:[u(F,{level:4,children:"\u5E76\u53D1\u914D\u7F6E"}),n(e,{title:"\u6D4B\u8BD5\u73AF\u5883",column:3,children:[u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",children:r.sitperSec||"-"}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",children:r.sitlimitTime||"-"}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",children:r.sitperDay||"-"}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",children:r.sitperMonth||"-"}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",children:r.sitperAnnum||"-"}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",children:r.sittotal||"-"})]}),n(e,{title:"\u6B63\u5F0F\u73AF\u5883",column:3,children:[u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",children:t.prodperSec||"-"}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",children:t.prodlimitTime||"-"}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",children:t.prodperDay||"-"}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",children:t.prodperMonth||"-"}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",children:t.prodperAnnum||"-"}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",children:t.prodtotal||"-"})]})]}),u(d,{}),n(i,{children:[u(F,{level:4,children:"\u4E0A\u4F20\u7533\u8BF7\u8868"}),n(e,{column:3,children:[u(e.Item,{label:"\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",children:r.sitperSec||"-"}),u(e.Item,{label:"\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",children:r.sitperSec||"-"})]})]})]})};export{T as default};
//# sourceMappingURL=index.aaa3aa84.js.map
