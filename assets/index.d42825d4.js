import{i as s,a as u,aB as B,ah as c,j as e,F as t,S as o,I as C}from"./index.d57a3d71.js";import{T as l}from"./index.9fa8605e.js";import{R as a}from"./index.716f2d51.js";import"./getDataOrAriaProps.fd89ab75.js";import"./index.32853a3c.js";const x="_tips_1d6uc_1",f="_active_1d6uc_5",r={tips:x,active:f},{TextArea:A}=C,v=["\u786E\u8BA4","\u63D0\u4EA4\u7533\u8BF7","\u67E5\u770B\u5BA1\u6279\u8FDB\u5EA6"],$=({instanceId:D,open:d,setOpen:i})=>{const[n,F]=s.exports.useState(1),E=s.exports.useMemo(()=>v[n],[n]),m=p=>{const{value:h}=p.target;F(h)};return u(B,{title:"\u7533\u8BF7\u5EF6\u671F",centered:!0,open:d,onCancel:()=>i(!1),width:600,footer:[u(c,{onClick:()=>i(!1),children:"\u5173\u95ED"},"cancel"),u(c,{type:"primary",onClick:()=>{},children:E},"confirm")],children:e(t,{labelCol:{span:6},wrapperCol:{span:18},initialValues:{isExtended:1},children:[u(t.Item,{label:"\u5E94\u7528\u521B\u5EFA\u65F6\u95F4",children:"2023-05-17"}),u(t.Item,{label:"\u6709\u6548\u671F\u6B62",children:e(o,{children:["2023-05-17",u(l,{color:"error",children:"\u5DF2\u8FC7\u671F"}),u(l,{color:"warning",children:"\u5373\u5C06\u8FC7\u671F"})]})}),u(t.Item,{label:"\u662F\u5426\u5EF6\u957F\u6709\u6548\u671F",name:"isExtended",rules:[{required:!0}],children:u(a.Group,{onChange:m,children:e(o,{direction:"vertical",children:[e(a,{value:1,children:["\u6709\u6548\u671F\u5EF6\u957F1\u5E74",u("span",{className:`${r.tips} ${n===1&&r.active}`,children:"\u81EA\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65E5\u8D77\u59CB"})]}),e(a,{value:0,children:["\u6682\u4E0D\u5EF6\u671F",u("span",{className:`${r.tips} ${n===0&&r.active}`,children:"\u52FE\u9009\u786E\u8BA4\u540E\u5C06\u4E0D\u518D\u901A\u77E5\u63D0\u9192\u5EF6\u671F"})]})]})})}),u(t.Item,{label:"\u5907\u6CE8\u8BF4\u660E",name:"remark",children:u(A,{rows:2,placeholder:"\u8BF7\u586B\u5199\u5907\u6CE8\u8BF4\u660E",showCount:!0,maxLength:100})})]})})};export{$ as default};
//# sourceMappingURL=index.d42825d4.js.map
