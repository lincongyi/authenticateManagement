import{r as d,j as u,A as wu,R as M,u as y,a as A,F as e,I as a,S as G,f as K,o as Cu,b as lu,c as W,C as V,d as h,P as Su,Q as Tu,m as Du,U as N,B as Y,i as cu,e as du,L as Qu,M as Vu}from"./index.43a2e21b.js";import{D as Mu,d as Au,S as ku}from"./zh-cn.83efb2a6.js";import{D as C}from"./index.81432aeb.js";import{T as x}from"./index.741fa87b.js";import{C as X}from"./index.95b6c99d.js";import{A as Lu}from"./index.0faa798f.js";import{U as uu}from"./UploadOutlined.e67b9cc6.js";import{E as qu}from"./ExclamationCircleOutlined.554cace2.js";import{R as U}from"./index.b0318238.js";import{d as gu}from"./date.08f7193a.js";import{D as l}from"./index.3593b597.js";import{A as Pu}from"./index.4cc0dd5d.js";import"./EditOutlined.020e8724.js";import"./styleChecker.94b62444.js";import"./index.db651842.js";import"./index.57166d9e.js";var Uu={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};const Gu=Uu;var Ku=function(B,p){return u(wu,{...B,ref:p,icon:Gu})};const Bu=d.exports.forwardRef(Ku),Nu="_header_1ilm8_1",Yu={header:Nu},zu={required:"\u8BF7\u8F93\u5165${label}"},k={labelCol:{span:4},wrapperCol:{span:12},validateMessages:zu,autoComplete:"off"},{Title:j}=x,{TextArea:Ou}=a,D=20,bu=M.forwardRef(({params:o},B)=>{const{value:p}=o,{accessFormStore:n}=y(),t=n.current.state===2;return A(e,{ref:B,name:"basicInfo",...k,initialValues:{},style:{display:p==="0"?"block":"none"},children:[u(j,{level:5,children:"\u63A5\u5165\u5E94\u7528\u4FE1\u606F"}),u(C,{}),u(e.Item,{label:"\u5E94\u7528\u540D\u79F0",name:"appName",rules:[{required:!0}],children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",name:"systemtype",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B"}],children:t?"":u(G,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",fieldNames:K,options:n.getDictionaryItem("appType")})}),u(e.Item,{label:"\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",name:"systemlevel",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B"}],children:t?"":u(G,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",fieldNames:K,options:n.getDictionaryItem("systemlevel")})}),u(e.Item,{label:"\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",name:"systemRange",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4"}],children:t?"":u(G,{placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",fieldNames:K,options:n.getDictionaryItem("networkType")})}),u(e.Item,{label:"\u4F7F\u7528\u573A\u666F\u63CF\u8FF0",name:"description",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0"}],children:t?"":u(Ou,{rows:2,placeholder:"\u8BF7\u8F93\u5165\u4F7F\u7528\u573A\u666F\u63CF\u8FF0\uFF0C\u5EFA\u8BAE\u6587\u5B57\u63A7\u5236\u572850\u5B57\u5185",showCount:!0,maxLength:50})}),u(j,{level:5,children:"\u7533\u8BF7\u5355\u4F4D\u4FE1\u606F"}),u(C,{}),u(e.Item,{label:"\u7533\u8BF7\u5355\u4F4D",name:"applyCompany",rules:[{required:!0}],children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u5355\u4F4D",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u5355\u4F4D\u7ECF\u529E\u4EBA",name:"applyCompanyHandleMan",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u7ECF\u529E\u4EBA",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"applyCompanyHandleManPhone",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"applyCompanyHandleManEmail",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:D})}),u(j,{level:5,children:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F"}),u(C,{}),u(e.Item,{label:"\u627F\u5EFA\u5355\u4F4D",name:"undertakeCompany",rules:[{required:!0}],children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u627F\u5EFA\u5355\u4F4D",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",name:"undertakeCompanyHandleMan",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u8D1F\u8D23\u4EBA",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",name:"undertakeCompanyHandleManPhone",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",showCount:!0,maxLength:D})}),u(e.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",name:"undertakeCompanyHandleManEmail",children:t?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",showCount:!0,maxLength:D})})]})});bu.displayName="BasicInfo";const Wu=Cu(bu),Xu="_flex_1jgif_1",eu={flex:Xu,"order-number":"_order-number_1jgif_6"},Hu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAD0UlEQVRIDZVV32scVRT+7u7s7jRJuyVpsSYbqzSbTQQ1phVLLcQfYEUhRmipD/6gL0r6pCII/QPyIPqooiCBiigUVKqIL2KkWKw2TSK1adKGJiZZTdp0TbLZ3dmdnfG7N9nt3MksxAN37r3nfuc7c849c0bAIx9fdCNL4+lBuOh1BaaEix8QdQdPvZiY9MCqy4Ev59pRFCeIfYbYfRA429TZfOL1A6JUAYnKQs4Dn831uy4+9OoA4RB0Jhwy337npaY5efb+F/Otlo33iD0KuCEvXgicPPVy4qOKzqgs1CxEB2ilixui5rjtFp4b+Dx9MuQIUbCdD4hr0HEbO8nhEd2BwyBrCQndsnu6XOu8hl4Lrwamqg4TLcf/kZDrupFSqfSWZVlfp+6JHZHGPV07cOyJRiR2RzWu3sONeJ7DKy3EHH28EY89sF2pOxKxI5KrWCy+KbkNkr/LxRvytC62niH5TCa2qTH9t4Xvf83g32yZ53z9jSTGG8J49uBO3He3qYgXM+uFU2eKFBUpcvaRu1XewSsK4XkMja7gykwehx/cjlSribYWExcn1jwIYF+ziXv3xDDxVx7n/lhFxYEGIrdBT3rMRMg3XcuX8dXPt9U6Zzk+O+DS5Bqu8iXkmRkViBgCJVuvQHI36VW0QfNCD/O/K4qxqRzOX14FrE38ShEOA08/EkdXsh430gWcGbq9CRhYE0MjK7i1YqO7vR79fXehnWnyi0xbf98eHOhoQGbVxoXxrB+i9oERzN8s4tPvFhWxdGIVN6eoZDuYXbQwci2nUhXITmWgg2TCxI76MMau5zA5Wwi0nVkoYmZhCQbT9DBTJKOY/mdzLgMddCXrVInKKrpwJYvfGX7ZF4T84GR6Dt7fgPptYVVNQQ4C7+Cbcxn8OLzMPgY82R1Xd+EPQ6buqf1xsLnhp5FlfPtLxg9R+8AIZLnJNx+eyFY/Nr/15RvrJSpT6C9PL1ZzEI3oAdnsbOOs9SDJs/7/pBO/xHwcGmPn3ihikY1e4Lfcwl7adu6NaUjBplTmF1d1lM07mEpbmLtZwvwtGytrdxq0vHwpoyzNisRZbS27DMim19Yc5YVXqXg//FnRwSgdPFQx8M8LGRu/jecwMXunBOXFplpjeLSzDrt3alnWzOlgTLDjHaKDs7JvaKe+zTK76fV0UTXTtpao+k58EG1L8iWOXpVwkpu2bR8iYj/X3XLwMMl5SxdCLKHuNc6X5CDPsGEY57ku1CSgQROdvuo4zms0kD0+SK6S5JNIJHKa81IQYEs6prGHdzXIP9UMx7RcS91WjP8DYzWVbeIiHDkAAAAASUVORK5CYII=",Z=X.Group,_=20,Ju=[[{label:"SDK\u8BA4\u8BC1",value:1},{label:"\u51FA\u5165\u5883SDK\u8BA4\u8BC1",value:2},{label:"SDK\u626B\u7801\u8BA4\u8BC1",value:3}],[{label:"API\u8BA4\u8BC1",value:4},{label:"\u51FA\u5165\u5883API\u8BA4\u8BC1",value:5}],[{label:"\u516C\u4F17\u53F7\u8DF3\u8F6C\u8BA4\u8BC1",value:6},{label:"\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C\u8BA4\u8BC1",value:7},{label:"APP\u8BA4\u8BC1\u4EFB\u52A1/\u8DF3\u8F6C\u8BA4\u8BC1",value:8},{label:"\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C\u8BA4\u8BC1",value:9}],[{label:"\u626B\u7801\u8BA4\u8BC1",value:10},{label:"\u4E2A\u4EBA\u4E8C\u7EF4\u7801",value:11},{label:"\u73B0\u573A\u4E2A\u4EBA\u4E8C\u7EF4\u7801",value:12},{label:"\u83B7\u53D6\u4E2A\u4EBA\u4E8C\u7EF4\u7801\u4FE1\u606F",value:13},{label:"\u9762\u5BF9\u9762\u8BA4\u8BC1",value:14},{label:"1\uFF1AN\u4EBA\u8138\u6BD4\u5BF9\u8BA4\u8BC1",value:15}]],ju=o=>o&&o<=Au().endOf("day"),Zu=A("div",{className:eu.flex,children:[u("img",{src:Hu,style:{marginRight:8}}),"\u5982\u4F55\u9009\u62E9\u63A5\u5165\u65B9\u5F0F\uFF1F"]}),_u=[{description:"\u63A5\u5165APP\u5883\u5185\u8EAB\u4EFD\u8BA4\u8BC1",strong:"SDK\u8BA4\u8BC1"},{description:"\u63A5\u5165APP\u51FA\u5165\u5883\u8EAB\u4EFD\u8BA4\u8BC1",strong:"\u51FA\u5165\u5883SDK\u8BA4\u8BC1"},{description:"\u63A5\u5165APP\u8FDB\u884C\u626B\u7801\u6838\u9A8C\u8EAB\u4EFD",strong:"SDK\u626B\u7801\u8BA4\u8BC1"},{description:"\u751F\u6210\u4E2A\u4EBA\u8EAB\u4EFD\u8BA4\u8BC1\u4E8C\u7EF4\u7801",strong:"\u626B\u7801\u8BA4\u8BC1"},{description:"\u63A5\u5165\u516C\u4F17\u53F7",strong:"\u516C\u4F17\u53F7\u8DF3\u8F6C\u8BA4\u8BC1"},{description:"\u63A5\u5165\u5C0F\u7A0B\u5E8F",strong:"\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C\u8BA4\u8BC1"}],$u=u(lu,{direction:"vertical",children:_u.map((o,B)=>A("p",{className:eu.flex,children:[u("span",{className:eu["order-number"],children:B+1}),"\u5E94\u7528\u573A\u666F\u4E3A",o.description,"\uFF0C\u5219\u9009\u62E9",A(x.Text,{strong:!0,className:"primary-color",children:["\u3010",o.strong,"\u3011"]})]},B))}),Iu=M.forwardRef(({params:o},B)=>{var i,s;const{themeStore:p}=y(),n=p.antdThemeColor,{value:t}=o,{accessFormStore:m}=y(),r=m.current.state===2;return A(e,{ref:B,name:"abilityInfo",...k,initialValues:{},style:{display:t==="1"?"block":"none"},children:[u(e.Item,{label:"\u63A5\u5165\u57FA\u7840\u80FD\u529B",name:"basepower",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u57FA\u7840\u80FD\u529B"}],children:r?"":u(G,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u57FA\u7840\u80FD\u529B",fieldNames:K,options:m.getDictionaryItem("accessSkill")})}),u(e.Item,{label:"\u63A5\u5165\u8D26\u53F7\u7C7B\u578B",name:"accountType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u8D26\u53F7\u7C7B\u578B"}],children:r?"":u(G,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u8D26\u53F7\u7C7B\u578B",fieldNames:K,options:m.getDictionaryItem("accountType")})}),u(e.Item,{label:"\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F",name:"serviceVaildEnd",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F"}],children:r?"":u(Mu,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F",disabledDate:ju,style:{width:"100%"}})}),u(e.Item,{label:"\u8BA4\u8BC1\u7C7B\u578B",name:"authType",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BA4\u8BC1\u7C7B\u578B"}],children:r?"":u(Z,{children:u(W,{gutter:[20,20],children:m.dictionary&&((i=m.getDictionaryItem("authType"))==null?void 0:i.map(F=>u(V,{span:6,children:u(X,{value:F.dictValue,children:F.dictName})},F.dictValue)))})})}),u(e.Item,{label:"\u8BA4\u8BC1\u6A21\u5F0F",name:"authMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BA4\u8BC1\u6A21\u5F0F"}],children:r?"":u(Z,{style:{display:"block"},children:u(W,{gutter:[20,20],children:m.dictionary&&((s=m.getDictionaryItem("authMode"))==null?void 0:s.map(F=>u(V,{span:6,children:u(X,{value:F.dictValue,children:F.dictName})},F.dictValue)))})})}),u(e.Item,{label:A(h,{children:[u(Su,{placement:"bottomLeft",content:$u,title:Zu,children:u(Tu,{style:{color:n,marginRight:4,cursor:"pointer"}})}),"\u63A5\u5165\u65B9\u5F0F"]}),name:"accessMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u63A5\u5165\u65B9\u5F0F"}],children:r?"":u(Z,{style:{display:"block"},children:Ju.map((F,g)=>u(W,{gutter:[20,20],style:{marginBottom:20},children:F.map((R,v)=>u(V,{span:6,children:u(X,{value:R.value,children:R.label})},v))},g))})}),u(e.Item,{label:"\u5E94\u7528ID\uFF08Android\uFF09",name:"androidAppId",children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528ID",showCount:!0,maxLength:_})}),u(e.Item,{label:"Bundle ID\uFF08IOS\uFF09",name:"bundleId",children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165Bundle ID",showCount:!0,maxLength:_})}),u(e.Item,{label:"\u5C0F\u7A0B\u5E8Fappid",name:"appId",children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8Fappid",showCount:!0,maxLength:_})}),u(e.Item,{label:"\u63A8\u9001\u8BA4\u8BC1\u7ED3\u679C\u5730\u5740",name:"authResultAddress",children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u63A8\u9001\u8BA4\u8BC1\u7ED3\u679C\u5730\u5740",showCount:!0,maxLength:50})})]})});Iu.displayName="AbilityInfo";const ue=Cu(Iu),{Title:mu}=x,fu=M.forwardRef(({params:o},B)=>{const p=d.exports.useRef(null),n=d.exports.useRef(null);d.exports.useImperativeHandle(B,()=>({sitRef:p,prodRef:n}));const{value:t}=o,{accessFormStore:m}=y(),r=m.current.state===2,i={sitperSec:"50",sitlimitTime:"1",sitperDay:"100000",sitperMonth:"0",sitperAnnum:"0",sittotal:"0"},s={prodperSec:"50",prodlimitTime:"1",prodperDay:"100000",prodperMonth:"0",prodperAnnum:"0",prodtotal:"0"};return A(h,{children:[u(Lu,{message:"\u8BF7\u6839\u636E\u9700\u8981\u5408\u7406\u8C03\u6574\uFF0C\u52FF\u4E00\u5473\u8FFD\u6C42\u6700\u9AD8\u503C\u9020\u6210\u8D44\u6E90\u5197\u4F59",type:"warning",showIcon:!0,style:{marginBottom:20,display:t==="2"?"flex":"none"}}),A(e,{ref:p,name:"concurrencySit",...k,initialValues:i,style:{display:t==="2"?"block":"none"},children:[u(mu,{level:5,children:"\u6D4B\u8BD5\u73AF\u5883"}),u(C,{}),u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",name:"sitperSec",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F41-100\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u79D2\u5E76\u53D1\u9650\u5236"})}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",name:"sitlimitTime",extra:"(\u8BA1\u7B97\u5468\u671F\u5FC5\u987B>1\uFF0C\u5EFA\u8BAE\u5468\u671F=1\uFF0C\u5355\u4F4D\uFF1A\u79D2)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8BA1\u7B97\u5468\u671F"})}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",name:"sitperDay",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F410W-100W\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u65E5\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",name:"sitperMonth",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u6708\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",name:"sitperAnnum",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u5E74\u9650\u989D"})}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",name:"sittotal",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D"})})]}),A(e,{ref:n,name:"concurrencyProduction",...k,initialValues:s,style:{display:t==="2"?"block":"none"},children:[u(mu,{level:5,children:"\u6B63\u5F0F\u73AF\u5883"}),u(C,{}),u(e.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",name:"prodperSec",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F41-100\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u79D2\u5E76\u53D1\u9650\u5236"})}),u(e.Item,{label:"\u8BA1\u7B97\u5468\u671F",name:"prodlimitTime",extra:"(\u8BA1\u7B97\u5468\u671F\u5FC5\u987B>1\uFF0C\u5EFA\u8BAE\u5468\u671F=1\uFF0C\u5355\u4F4D\uFF1A\u79D2)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8BA1\u7B97\u5468\u671F"})}),u(e.Item,{label:"\u6BCF\u65E5\u9650\u989D",name:"prodperDay",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u533A\u95F410W-100W\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u65E5\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u6708\u9650\u989D",name:"prodperMonth",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u6708\u9650\u989D"})}),u(e.Item,{label:"\u6BCF\u5E74\u9650\u989D",name:"prodperAnnum",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u6BCF\u5E74\u9650\u989D"})}),u(e.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",name:"prodtotal",extra:"(0=\u4E0D\u9650\u989D\uFF0C\u5EFA\u8BAE\u9650\u989D=0\uFF0C\u5355\u4F4D\uFF1A\u6B21)",rules:[{required:!0}],children:r?"":u(a,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D"})})]})]})});fu.displayName="Concurrency";const ee="_title_xm2oj_7",le="_process_xm2oj_12",Ae="_tag_xm2oj_16",I={"guide-box":"_guide-box_xm2oj_1",title:ee,process:le,tag:Ae,"tag-title":"_tag-title_xm2oj_23","tag-item":"_tag-item_xm2oj_27"},re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAACx0lEQVRIDb1Wz2tTQRCefW4DJYRqpdpGQURQLwo9KPYQtQd7LlgRxVtPQkHwXMSD+C949tKTSvWggietaMCDgiJGkSLSRgvRxBhT82udb5u3zduX9/qS2L7L25n5Zr6d/TE7giJ8KyU1Wq/RJClKKUF7hKIk3Hi8zOMlErSwTdL8rrh4vVE4EQbIFtWUatANJjoUhjM2QRnh0OxIQtwxOmvQlvBbWe1XFZpTik5Y+EiiEJQWMbo43C8WbQcfIWd1irO6y1nttMEdyYJynO1ZzvZpq5+HEGTUoCecWV8rqNsxZ1olh860khpCLGOjQq96zsyeHWfqxOiYu7zStWPP2pHduvedCqUaXb2QpJg086PH6Ty9+VRy3c3/8L5+mjw5aGTE1LGJxqDUhPo01tsfkNuPVrTzlXMjjF4nBNn8sx/rgZsjHyHrcfjAgdPrAKePftNhs34uh4NLzWlHu2e9zIY5wCV1BYkQaLWq6MHzHGW+lunSxFAEDz8EXJKzS/lNfs352Y/0609NGx6+yFMirnfDDwzTMJeD2hiGcW0u2ZqsqFiqu6bIf3BJFGK1gcuOhKSJ49s9qNVKg+4v+E+pB2QJ4DL30LJ5xN2DfTQzNezR/SzWOybkAEriieF9POiJZgkfvpQpdfmdpe1cZK4slnSJlzSUcCAuaexIIpDh5duirkaBgKYBXBKPJ2c4HgZODsXo+vTeQMj0zc9UWFw7wYEgGJhL4qWuVelaGBBLOj7zPhCCAxTlA5dEW7BcUJmwaqO4GJb/dn4NPJPgbgBc+vaiLfAYN0FwOfS1QBXPFlS6XUtxenSA8r8j7E9zkkcPxH3TRcsBDhjMe7NVD7ApiHiR0YPotsA3x+4UiIWY7muPKIYQgu49uAfhvHOQe/oQw+pnEM9DCAVI0YNg3SF388EXMXQCVgCzh5Zei7r12IpG2Cb/n63+P/Z6EznxxP+XAAAAAElFTkSuQmCC",pu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAACLklEQVRIDe1UPWgUQRR+M7teRNFC0C7pBJuIaJ/CwkIhqZLbu8DOxUZuN9qYTkltY6PJBdOcueTyc1FBMKRNioCFiBIQ7BSFKAEhNhbx5vnmcGBm9idqUlhkYJn3vve3783MB3C49pgAy7IHlagCEkez7Gk4Q7awMFu7b9p8U9FyWURhW+IDQOgCxm4DsA/alrUzwOvAoNu1JwpQ8uE24gTjXj9I+cTjfL35eGLTDXT1Uljtox8puDg3gXIlDqSER5yzoZOF3g0EzByhGadkpFZdTOlWB1LKMQQ4jm1Y3fnxJs0/E6MRUWiyhtWBimbAw2O+f0Z/A1f73mVm/QOD1UHHn7Odev3htpIDUb32dGW9pyji1FQe4Pf5mVoz1fgbTBYwvFHCJcbwogFZYhvgCwGdAhL4Ng3oiOXgKkFYfRWI0X4X34+e20EgojHqotcsQB19XmxM3TGxPDm3AN29T5yj3TbyzvmYSUsiKnmcvZ+rT742cSXnFlhs1JbcgDRdIt6jq10nW6JA4pqmJdgP9n8XQExSiYv9cweBiO+WRNxstVqeHmG5cuss4W+J+M5rLPeQtVPaTsyzSfwz/uzFWofmqJlTUv5cI0r6dtT3t3SMxU7qoRGBbjCOCaY70XVhbnr6xq4OVHsxjAcYyGVi0l1KTA8bPhKHXdZUo3zsESG8JLY7R38TuB/Alv0eKHipMfkcgQ9S8gJR6Vc3uSpwIKsooisjIzdPH0iyv03yC2F6uYFuCBCGAAAAAElFTkSuQmCC",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAACvklEQVRIDdVUTUhUURQ+540j4b9Q2xLKFoG4mMoiFBcSgVhgMT8ab8YWA84oQQRRUAkF5aqFvpkEA5+m0xgIgZAFolBBBEJZiYtQ2gSOCPlHVu/d05nwwptx3oCz88Hl3Hu+83+/dwH2+od2DbQGOk+ZptFmh2fSo6JMxnRt1IrlWQ9y720L1ximMYGIxQDUB4BLErOVBGeB6Bfj2RO0BkInDJMmAJWb7HDPoTiiwwO9n20DbwM+tb2QC8lPt1OsihZ/u8s06RXrbsd1LWrFct2nJBAEEUIs4GBBjxqaJaKyXANLv/Q7cCiI3YLw/X8DpkBpgViUxrnI9ARAgDPxwd6XyWAeNXz054bjWIvamTE2gbEVG4zOZgS3lTsSpBgT3THRqE/RWQ5I+J2PZyyqHdusCeJDkcs7PGwUZYXwYPUPlqTDWRPwiC4gwiGrkwK0MqJHhq26rq4uZX5haYD/mePMxPMjenRG4ikskkopOXgVCVFnXUKAS+JSzi8kuomgkVm3bAp841VDlySWtYNnunZfGtpJrxq+QiSu8zPRcaBE6U+sGi842ajHHzoX1yOvs3ZgF1TqW/zhOgDxmNmscTHayjoeRIKT3PnExcb6yaRd1g5koEzS4+88LMgc4+dhqrmp/qpSBOVi0xgHxB+OUofX7XabSb+cOggGb5QqJMbZf7lkX7F7bm4OxSY+J4ByZ77SNNzTsyaLyinB+u+1R4LEER7Hh4YG18b8YqKHL7iWgzUP9fem/Pk5jYiZVAMI0wTkGxufquZLrVZQCcQGtbeycikzJKCK1kBHlTSQsrJi/1fmuwgG+5xrWx8refafmL7veOa1/H495OC6tLXK1BERrDLl7hrCnE5fiUQi+crC5t8vlVyxk0fiY2oW8bo2omu3rEGte2bY7j6fGj7No2nIc0Ls6ZPIt91570Xrf86BGSCgfwmFAAAAAElFTkSuQmCC",Eu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAC6UlEQVRIDdVVS0hUYRQ+5840pmgvexOS2BMJosDc5MJFYW6jZiabmaiEmbyUhNAmndoHmTrlJIVjpZG9iAza5CKCiNbZwjHbDI0jZjg2zuM/nX/s5uV6x8W08sDlnP87j+8//+P+AMtd0NhAc3NzYWRy7joQrTL6co4RkwOhgGrmt+pBj8e/MhKLviSgWkT4DIBDer+ZTYClPJlz7FuaQFXVguj0jxeIWAigBAAIeVbXzIrqsYazvh2pJEgCU1Ek6vf7bdHpzDMkLFlXDHVIMGManQeYJRgJTzRwm8d41psnZ+ADYbblPMotTpnfAxRWXpFPhEqbFmKx4Lhm/49e2GSEicehzjeymNPrXUtx606nS63KVRxXw8jDjo5fufwavkCgIawzcUs1QPquDlpkKtNoZ/D9IocBMCX428k2Q6zpsK+na9TV0rLB1MmgKcFJt1qBIOqNSdaCFU8eBG9GJM4nz/o1HK12uNUyrjLMUFziRsmeIiOIilhPQtQYP0jP326fz1c8Eo6+I4J+XtCLlMqM2V2+48Y6cmzawcD9ro/sM02QSVNxuMJH+ueeik0V3EnS7vbW8zEfbGz0DwWD/lkZo4lpB5ozlyZBNXzb78niMmag9/ZrPuaxmUT0kDEnLwJACPP/6qhWzOG+UMnjLRab8k3DNJ0XgQ1srUh0wunx7ZeFBFFAQaW9r6dzTCus6bwIQqH274D4ljf5CK97Ea//YVQsd7Siem26yfoAve0401QrMqIKAXli4gDrV93dbb8dLt9kRqQvO9zecRIwhYVFg/3BGzGZ+4+AWy455Wnapy8obWEriMhgu+fSdkonnyMSvxeY5rfi1q7yjf38eyf76aY6vjdu7mgv789ukZg9yKnnZX6WQAFMZJAq0yIzLEG94FyilcddCqXKBEKKC48ikAwp5btwlc8/m0KOecYYY5I1/FiVS0BKluBRbyDEtvxyC1oiIFJPOWBr7iCmAIggKV+Willevj+PhBYZm43WawAAAABJRU5ErkJggg==",hu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAACOklEQVRIDe1Uv2sUURCeeXcm/oqFgbNSUCwONCBqa5qQIoqJlW4i3h42cpuz8jqb/ANa6LlimrtcTHKClppSrlAUUgiCpFNQiBgMRA4iys44L7jy9u3uRc/GwoVlZ75vZr793r63AP+vLVYA03in6BWBuJzGJ+HIuLAw698wuayZhPGE6xUC4lvA0AuI1wDwXcilPRH4MiDst/mYgAy/GDBXUWVGgehhRqnWXL362m608/FCaVBepMfGlQlMFCcdIrinFJ7f0zPwjIFTl9Ds0zGLVRvTecQBEVUYYBcHsLi+8SqpPhWTJZLWuEbEge5GUIWd2WwuvMdOD75JnfobRMTBZr3C9Vrt9qqOHbd05tHj1oEL7mTiqAzwl/kZfy6R/AnGBYxqJjiByMcNKBIGAB8F2BQgUKuyQNsiBXbiFEpLjlsetfG/yTs6cFyvIi4GTAFx9KHZuHvdxJxL5ZN7+2jZ9/22ies49pEjBQzvleJl85ZN8NascYpXTxFS63Mbnnqet9vkdNzRQbPhP7AbzFwP5yB4opCVbNKja21cFJER00lnB+Y0Kw6Hy/F6zqA+ibOGHAQRAS3yy0nXAkh0Tg/frnJjACQHiFfEyLCc/oNrG3gkfJ+uBeZnqpX8odzZen3qazisOVtd2qH2HW7W7rwMsY7fICxKeqJsJ8G/2ZwpqLmuHdiD0/K4A6KhcbfUbzf09R67Pz195buNb5VHBRheyN8uz4z5eOOK3rIpAngTmf/s9xsX+EeRHwGmuSv02zqeAAAAAElFTkSuQmCC",ne=[[{description:"\u4E0B\u8F7D\u7533\u8BF7\u8868",icon:pu},{description:"\u7EBF\u4E0B\u5370\u7AE0",icon:Eu},{description:"\u4E0A\u4F20\u626B\u63CF\u4EF6",icon:hu}],[{description:"\u4E0B\u8F7D\u7533\u8BF7\u51FD\u6A21\u677F",icon:pu},{description:"\u586B\u5199\u7533\u8BF7\u51FD",icon:te},{description:"\u7EBF\u4E0B\u5370\u7AE0",icon:Eu},{description:"\u4E0A\u4F20\u626B\u63CF\u4EF6",icon:hu}]],yu=M.forwardRef(({params:o},B)=>{const[p]=d.exports.useState(["https://www.baidu.com","https://www.baidu.com"]),[n,t]=Du.useMessage(),m=i=>{const F=/application\/vnd|application\/pdf|image\/jpeg/.test(i.type);return F||n.error("\u4E0A\u4F20\u53EA\u652F\u6301doc/docx/pdf/jpg\u683C\u5F0F"),F},r=i=>{console.log(i)};return A(h,{children:[t,A("div",{className:I["guide-box"],style:{display:o.value==="3"?"block":"none"},children:[A("div",{className:`${I.title} font-primary-color`,children:[u("img",{src:re,style:{marginRight:8}}),"\u64CD\u4F5C\u6307\u5F15"]}),u("div",{className:I.content,children:ne.map((i,s)=>A("div",{className:`${I.process} font-primary-color`,children:[A("div",{className:`${I.tag} ${I["tag-title"]}`,children:[s+1,".",s?"\u7533\u8BF7\u51FD":"\u7533\u8BF7\u8868"]}),i.map((F,g)=>A(M.Fragment,{children:[A("div",{className:`${I.tag} ${I["tag-item"]}`,children:[u("img",{src:F.icon}),F.description]}),g!==i.length-1&&u(ku,{})]},g))]},s))})]}),A(e,{ref:B,name:"uploadForm",...k,initialValues:{},style:{display:o.value==="3"?"block":"none"},children:[u(e.Item,{label:"\u7533\u8BF7\u8868\u4E0B\u8F7D\uFF1A",children:A(x.Link,{href:p[0],target:"_blank",children:[u(Bu,{}),"\u300A\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868.pdf\u300B\u4E0B\u8F7D"]})}),u(e.Item,{label:"\u7533\u8BF7\u8868\u4E0B\u8F7D\uFF1A",children:A(x.Link,{href:p[1],target:"_blank",children:[u(Bu,{}),"\u300A\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD\u6A21\u677F.docx\u300B\u4E0B\u8F7D"]})}),u(e.Item,{name:"fileUrl",label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868\uFF1A",valuePropName:"fileUrl",extra:"\u652F\u6301\u6587\u4EF6\u683C\u5F0F\uFF1Adoc/docx/pdf/jpg",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u7533\u8BF7\u8868"}],children:u(N,{maxCount:1,beforeUpload:m,customRequest:r,children:u(Y,{icon:u(uu,{}),children:"\u4E0A\u4F20\u6587\u4EF6"})})}),u(e.Item,{name:"fileUrl2",label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD\uFF1A",valuePropName:"fileUrl2",extra:"\u652F\u6301\u6587\u4EF6\u683C\u5F0F\uFF1Adoc/docx/pdf/jpg",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u7533\u8BF7\u51FD"}],children:u(N,{maxCount:1,beforeUpload:m,customRequest:r,children:u(Y,{icon:u(uu,{}),children:"\u4E0A\u4F20\u6587\u4EF6"})})})]})]})});yu.displayName="UploadForm";const{TextArea:ae}=a,{Text:$}=x,xu=M.forwardRef(({params:o},B)=>{const{value:p}=o,{accessFormStore:n}=y(),t=n.current.state===2,[m,r]=d.exports.useState(!1),[i,s]=d.exports.useState([]),F=b=>{},g=A("div",{children:[m?u(Qu,{}):u(du,{}),u("div",{style:{marginTop:8},children:"Upload"})]}),[R,v]=d.exports.useState(1),H=b=>{v(b.target.value)},[z,w]=d.exports.useState(),{themeStore:f}=y(),J=f.antdThemeColor;return u(h,{children:A(e,{ref:B,name:"accountInfo",...k,initialValues:{},style:{display:p==="4"?"block":"none"},children:[u(C,{}),u(e.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u4ECB\u7ECD",name:"description",rules:[{required:!0}],children:t?"":u(ae,{rows:4,placeholder:"\u8BF7\u7B80\u8981\u586B\u5199\u5E94\u7528\u4ECB\u7ECD",showCount:!0,maxLength:1e3})}),u(e.Item,{label:"\u6B63\u5F0F\u5E94\u7528\u622A\u56FE",name:"picture",rules:[{required:!0}],children:t?"":u(N,{listType:"picture-card",fileList:i,beforeUpload:b=>cu(b),customRequest:F,children:i.length>=5?null:g})}),u(e.Item,{label:"\u6B63\u5F0F\u4E0A\u7EBF\u65B0\u95FB\u901A\u544A",children:t?"":A(h,{children:[A(lu,{style:{color:J,marginTop:6},children:[u(qu,{}),u("span",{children:"\u4E0B\u5217\u65B9\u5F0F\u4E09\u9009\u4E00\u5373\u53EF\uFF0C\u4E0D\u586B\u5199\u53EF\u80FD\u5F71\u54CD\u5BA1\u6279\u7ED3\u679C"})]}),u(e.Item,{name:"notice",noStyle:!0,children:u(U.Group,{onChange:H,value:R,style:{width:"100%",marginTop:20},children:A(W,{gutter:[0,20],children:[u(V,{span:24,children:A(U,{value:1,style:{width:"100%"},children:[u($,{children:"\u65B9\u5F0F\u4E00\uFF1A\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"}),u(a,{placeholder:"\u8BF7\u7C98\u8D34\u7F51\u5740\u94FE\u63A5"})]})}),u(V,{span:24,children:A(U,{value:2,children:[u($,{children:"\u65B9\u5F0F\u4E8C\uFF1A\u4E0A\u4F20\u622A\u56FE"}),u(N,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:b=>cu(b),customRequest:F,children:z?u("img",{src:z,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):A("div",{children:[u(du,{}),u("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})]})}),u(V,{span:24,children:A(U,{value:3,children:[u($,{children:"\u65B9\u5F0F\u4E09\uFF1A\u4E0A\u4F20\u6587\u4EF6"}),u("br",{}),u(N,{maxCount:1,customRequest:F,children:u(Y,{icon:u(uu,{}),children:"Upload"})})]})})]})})})]})})]})})});xu.displayName="AccountInfo";const{Title:O}=x,ie=({open:o,setOpen:B,data:p})=>{const{basicInfo:n,abilityInfo:t,concurrency:m}=p,{sit:r,prod:i}=m;return A(Vu,{title:"\u63D0\u4EA4\u5BA1\u6838",open:o,width:800,onOk:()=>{},onCancel:()=>B(!1),children:[u(C,{}),A(h,{children:[u(O,{level:4,children:"\u57FA\u672C\u4FE1\u606F"}),A(l,{title:"\u63A5\u5165\u5E94\u7528\u4FE1\u606F",column:3,children:[u(l.Item,{label:"\u5E94\u7528\u540D\u79F0",children:n.appName||"-"}),u(l.Item,{label:"\u63A5\u5165\u7CFB\u7EDF\u7C7B\u578B",children:n.systemtype||"-"}),u(l.Item,{label:"\u7CFB\u7EDF\u6240\u5C5E\u7EA7\u522B",children:n.systemlevel||"-"}),u(l.Item,{label:"\u7CFB\u7EDF\u5BF9\u5916\u670D\u52A1\u8303\u56F4",children:n.systemRange||"-"}),u(l.Item,{label:"\u4F7F\u7528\u573A\u666F\u63CF\u8FF0",children:n.description||"-"})]}),A(l,{title:"\u7533\u8BF7\u5355\u4F4D\u4FE1\u606F",column:3,children:[u(l.Item,{label:"\u7533\u8BF7\u5355\u4F4D",children:n.applyCompany||"-"}),u(l.Item,{label:"\u5355\u4F4D\u7ECF\u529E\u4EBA",children:n.applyCompanyHandleMan||"-"}),u(l.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u7535\u8BDD",children:n.applyCompanyHandleManPhone||"-"}),u(l.Item,{label:"\u7ECF\u529E\u4EBA\u8054\u7CFB\u90AE\u7BB1",children:n.applyCompanyHandleManEmail||"-"})]}),A(l,{title:"\u627F\u5EFA\u5355\u4F4D\u4FE1\u606F",column:3,children:[u(l.Item,{label:"\u627F\u5EFA\u5355\u4F4D",children:n.undertakeCompany||"-"}),u(l.Item,{label:"\u9879\u76EE\u8D1F\u8D23\u4EBA",children:n.undertakeCompanyHandleMan||"-"}),u(l.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u7535\u8BDD",children:n.undertakeCompanyHandleManPhone||"-"}),u(l.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u90AE\u7BB1",children:n.undertakeCompanyHandleManEmail||"-"})]})]}),u(C,{}),A(h,{children:[u(O,{level:4,children:"\u57FA\u7840\u80FD\u529B\u4FE1\u606F"}),A(l,{column:3,children:[u(l.Item,{label:"\u63A5\u5165\u57FA\u7840\u80FD\u529B",children:t.basepower||"-"}),u(l.Item,{label:"\u63A5\u5165\u8D26\u53F7\u7C7B\u578B",children:t.accountType||"-"}),u(l.Item,{label:"\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F",children:Au(t.serviceVaildEnd).format(gu)||"-"}),u(l.Item,{label:"\u8BA4\u8BC1\u7C7B\u578B",children:t.authType||"-"}),u(l.Item,{label:"\u8BA4\u8BC1\u6A21\u5F0F",children:t.authMode||"-"}),u(l.Item,{label:"\u63A5\u5165\u65B9\u5F0F",children:t.accessMode||"-"}),u(l.Item,{label:"\u5E94\u7528ID\uFF08Android\uFF09",children:t.androidAppId||"-"}),u(l.Item,{label:"Bundle ID\uFF08IOS\uFF09",children:t.bundleId||"-"}),u(l.Item,{label:"\u5C0F\u7A0B\u5E8Fappid",children:t.appId||"-"}),u(l.Item,{label:"\u63A8\u9001\u8BA4\u8BC1\u7ED3\u679C\u5730\u5740",children:t.authResultAddress||"-"})]})]}),u(C,{}),A(h,{children:[u(O,{level:4,children:"\u5E76\u53D1\u914D\u7F6E"}),A(l,{title:"\u6D4B\u8BD5\u73AF\u5883",column:3,children:[u(l.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",children:r.sitperSec||"-"}),u(l.Item,{label:"\u8BA1\u7B97\u5468\u671F",children:r.sitlimitTime||"-"}),u(l.Item,{label:"\u6BCF\u65E5\u9650\u989D",children:r.sitperDay||"-"}),u(l.Item,{label:"\u6BCF\u6708\u9650\u989D",children:r.sitperMonth||"-"}),u(l.Item,{label:"\u6BCF\u5E74\u9650\u989D",children:r.sitperAnnum||"-"}),u(l.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",children:r.sittotal||"-"})]}),A(l,{title:"\u6B63\u5F0F\u73AF\u5883",column:3,children:[u(l.Item,{label:"\u6BCF\u79D2\u5E76\u53D1\u9650\u5236",children:i.prodperSec||"-"}),u(l.Item,{label:"\u8BA1\u7B97\u5468\u671F",children:i.prodlimitTime||"-"}),u(l.Item,{label:"\u6BCF\u65E5\u9650\u989D",children:i.prodperDay||"-"}),u(l.Item,{label:"\u6BCF\u6708\u9650\u989D",children:i.prodperMonth||"-"}),u(l.Item,{label:"\u6BCF\u5E74\u9650\u989D",children:i.prodperAnnum||"-"}),u(l.Item,{label:"\u8BA4\u8BC1\u603B\u6B21\u6570\u9650\u989D",children:i.prodtotal||"-"})]})]}),u(C,{}),A(h,{children:[u(O,{level:4,children:"\u4E0A\u4F20\u7533\u8BF7\u8868"}),A(l,{column:3,children:[u(l.Item,{label:"\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",children:r.sitperSec||"-"}),u(l.Item,{label:"\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",children:r.sitperSec||"-"})]})]})]})},Fe=64,oe=()=>{const{accessFormStore:o}=y(),[B,p]=d.exports.useState(0);d.exports.useEffect(()=>{const{state:c,id:E}=o.current;p(c)},[]);const n=[{label:"\u57FA\u672C\u4FE1\u606F",value:"0"},{label:"\u57FA\u7840\u80FD\u529B\u4FE1\u606F",value:"1"},{label:"\u5E76\u53D1\u914D\u7F6E",value:"2"},{label:"\u4E0A\u4F20\u7533\u8BF7\u8868",value:"3"},{label:"\u6B63\u5F0F\u8D26\u53F7\u4FE1\u606F",value:"4"}],[t,m]=d.exports.useState(),r=d.exports.useRef(null),i=d.exports.useRef(null),s=d.exports.useRef(null),F=d.exports.useRef(null),g=d.exports.useRef(null),R=c=>A(h,{children:[u(Wu,{ref:r,params:{value:c}}),u(ue,{ref:i,params:{value:c}}),u(fu,{ref:s,params:{value:c}}),u(yu,{ref:F,params:{value:c}}),u(xu,{ref:g,params:{value:c}})]}),[v,H]=d.exports.useState("0"),z=c=>{const{value:E}=c.target;H(E)},w=async c=>{if(!c||!c.current)return!1;try{return await c.current.validateFields(),!0}catch{return!1}},[f,J]=Du.useMessage(),b=async()=>await w(r)?await w(i)?await w(s.current.sitRef)?await w(s.current.sitRef)?await w(F)?!0:(f.warning("\u8BF7\u8865\u5145\u3010\u4E0A\u4F20\u7533\u8BF7\u8868\u3011\u4E2D\u7684\u5185\u5BB9"),!1):(f.warning("\u8BF7\u8865\u5145\u3010\u5E76\u53D1\u914D\u7F6E\u3011\u6B63\u5F0F\u73AF\u5883\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(f.warning("\u8BF7\u8865\u5145\u3010\u5E76\u53D1\u914D\u7F6E\u3011\u6D4B\u8BD5\u73AF\u5883\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(f.warning("\u8BF7\u8865\u5145\u3010\u57FA\u7840\u80FD\u529B\u4FE1\u606F\u3011\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(f.warning("\u8BF7\u8865\u5145\u3010\u57FA\u672C\u4FE1\u606F\u3011\u4E2D\u7684\u5FC5\u586B\u9879"),!1),Ru=async()=>{var E,S,T,Q,L,q,P;const c={...(E=r.current)==null?void 0:E.getFieldsValue(),...(S=i.current)==null?void 0:S.getFieldsValue(),...(Q=(T=s.current)==null?void 0:T.sitRef.current)==null?void 0:Q.getFieldsValue(),...(q=(L=s.current)==null?void 0:L.prodRef.current)==null?void 0:q.getFieldsValue(),...(P=F.current)==null?void 0:P.getFieldsValue()};c.serviceVaildEnd=Au(c.serviceVaildEnd).format(gu),console.log(c)},[ru,tu]=d.exports.useState(!1),vu=()=>{var c,E,S,T,Q,L,q,P,nu,au,iu,Fu,ou,su;if(!b())return!1;console.log({basicInfo:(c=r.current)==null?void 0:c.getFieldsValue(),abilityInfo:(E=i.current)==null?void 0:E.getFieldsValue(),concurrency:{sit:(T=(S=s.current)==null?void 0:S.sitRef.current)==null?void 0:T.getFieldsValue(),prod:(L=(Q=s.current)==null?void 0:Q.prodRef.current)==null?void 0:L.getFieldsValue()},uploadForm:(q=F.current)==null?void 0:q.getFieldsValue()}),m({basicInfo:(P=r.current)==null?void 0:P.getFieldsValue(),abilityInfo:(nu=i.current)==null?void 0:nu.getFieldsValue(),concurrency:{sit:(iu=(au=s.current)==null?void 0:au.sitRef.current)==null?void 0:iu.getFieldsValue(),prod:(ou=(Fu=s.current)==null?void 0:Fu.prodRef.current)==null?void 0:ou.getFieldsValue()},uploadForm:(su=F.current)==null?void 0:su.getFieldsValue()}),tu(!0)};return A(h,{children:[J,u(Pu,{offsetTop:Fe,children:A("div",{className:Yu.header,children:[u(U.Group,{options:n,onChange:z,value:v,optionType:"button",buttonStyle:"solid"}),B!==2&&A(lu,{children:[u(Y,{onClick:()=>Ru(),children:"\u4FDD\u5B58\u8349\u7A3F"}),u(Y,{type:"primary",onClick:vu,children:"\u63D0\u4EA4\u5BA1\u6838"})]})]})}),R(v),ru&&u(ie,{open:ru,setOpen:tu,data:t})]})},Re=()=>u(oe,{});export{Re as default};
