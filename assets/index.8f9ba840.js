import{r as d,j as l,d as t,a as b,aK as g,F as c,aG as i,aF as I,T as y}from"./index.c52fca20.js";import{T as E}from"./Table.1bb7f34d.js";const C=({formList:n})=>{const m={labelCol:{span:4},wrapperCol:{span:12}},[r,p]=d.exports.useState(),[u,s]=d.exports.useState();d.exports.useEffect(()=>{const e=n.map(a=>({label:a.formName,key:a.formId.toString()}));p(e),s([...n[0].defaultFormList,...n[0].form||[]])},[n]);const f=e=>{const a=n.find(o=>o.formId===+e);if(!a)return;const F=r==null?void 0:r.findIndex(o=>o.key===e);s(F?a.form:[...a.defaultFormList,...a.form||[]])},h=e=>{if(e.type==="imageUpload")return l(t,{children:e.labelValue.map(a=>l("div",{style:{marginRight:10,display:"inline-block "},children:l(I,{width:200,height:200,src:a.url})},a.uid))});if(e.type==="fileUpload")return l(t,{children:e.labelValue.map(a=>l(y.Link,{href:a.url,target:"_blank",children:a.name},a.uid))});if(e.type==="table"){const a=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}];return l(E,{rowKey:"label",bordered:!0,dataSource:e.labelValue,columns:a,pagination:!1})}return e.labelValue};return l(t,{children:r&&r.length?b(t,{children:[l(g,{onChange:f,items:r}),u&&!!u.length&&l(c,{...m,children:u.map(e=>l(t,{children:e.cnName!=="\u63A5\u5165\u670D\u52A1\u6709\u6548\u671F\u6B62"&&l(c.Item,{label:e.cnName,children:h(e)},e.field)}))})]}):l(i,{image:i.PRESENTED_IMAGE_SIMPLE})})};export{C as D};
