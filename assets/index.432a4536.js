import{F as o,r as n,u as j,h as u,t as i,j as e,q as l,s as a,I as q,B as s,p as C,y as z,aw as L,b0 as R,M as G,v as H}from"./index.a942f570.js";import{D as J}from"./zh-cn.c4d394e3.js";import K from"./UploadModal.5b1ca379.js";import Q from"./AddModal.a15f06e8.js";import V from"./CheckModal.8d53d142.js";import X from"./UpdateModal.2db60621.js";import Y from"./SettingsModal.d2264305.js";import{r as Z,a as _}from"./date.b16e65e9.js";import{T as $}from"./Table.c50d7474.js";import{A as p}from"./index.2318c436.js";import{D as E}from"./index.ddfd8ecd.js";import{U as ee}from"./UploadOutlined.dfb05ebf.js";import{E as te}from"./ExclamationCircleOutlined.9f2bf0fe.js";import"./index.module.eeaf38e8.js";import"./index.557fd4e0.js";import"./EditOutlined.a069ccba.js";import"./styleChecker.009a5822.js";import"./issue-app-icon-03.6a3d2157.js";import"./MobileOutlined.8eb1c369.js";import"./LikeOutlined.052537d6.js";import"./index.82fd8ce2.js";import"./css.d6e3059f.js";import"./useBreakpoint.416e4c07.js";import"./extendsObject.46729a45.js";import"./index.fcd8c0ee.js";import"./getDataOrAriaProps.fd89ab75.js";const{RangePicker:ue}=J,Ie=()=>{const[y]=o.useForm(),k=t=>{console.log("Success:",t)},f=t=>{console.log("Failed:",t)},[x,d]=n.exports.useState(!1),g=()=>{d(!0)},{themeStore:B}=j(),O=B.antdThemeColor,[D,c]=n.exports.useState(!1),A=()=>{c(!0)},[b,F]=n.exports.useState(!1),M=t=>{F(!0)},[I,m]=n.exports.useState(!1),S=t=>{m(!0)},v=t=>{G.confirm({title:"\u6E29\u99A8\u63D0\u793A",icon:e(te,{}),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{H.success({content:"\u5220\u9664\u6210\u529F"})}})},[T,U]=n.exports.useState(!1),[h,P]=n.exports.useState({current:1,pageSize:10,total:31}),w=t=>{P({...h,...t})},N=[{title:"\u5E8F\u53F7",dataIndex:"key",key:"key"},{title:"\u95EE\u9898\u7F16\u53F7",dataIndex:"number",key:"number"},{title:"\u95EE\u9898",dataIndex:"issue",key:"issue",ellipsis:!0},{title:"\u5BF9\u5E94\u5E94\u7528",dataIndex:"apps",key:"apps",className:"table-column",render:()=>e(L,{title:"\u5357\u6C99\u5206\u5C40\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3001\u5357\u6C99\u5206\u5C40\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF082\u4E2A\uFF09",placement:"topLeft",children:e(i,{children:u(p.Group,{children:[e(p,{shape:"square",size:"large",style:{backgroundColor:O},children:"app"}),e(p,{shape:"square",size:"large",style:{backgroundColor:"#FFBF24"},children:"app"})]})})})},{title:"\u6709\u5E2E\u52A9",dataIndex:"helpCount",key:"helpCount",sorter:(t,r)=>t.helpCount-r.helpCount},{title:"\u65E0\u5E2E\u52A9",dataIndex:"unhelpCount",key:"unhelpCount",sorter:(t,r)=>t.unhelpCount-r.unhelpCount},{title:"\u6392\u5E8F",dataIndex:"sort",key:"sort",defaultSortOrder:"ascend",sortDirections:["ascend","descend","ascend"],sorter:(t,r)=>t.sort-r.sort},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"date",key:"date"},{title:"\u63A8\u8350",dataIndex:"isDisplay",key:"isDisplay",render:t=>u(C,{children:[e(R,{color:t?"#52c41a":"#ff7875"}),t?"\u662F":"\u5426"]})},{title:"\u64CD\u4F5C",key:"action",width:250,render:t=>u(i,{children:[e(s,{type:"link",onClick:()=>M(),children:"\u8BE6\u60C5"}),e(E,{type:"vertical"}),e(s,{type:"link",onClick:()=>S(),children:"\u4FEE\u6539"}),e(E,{type:"vertical"}),e(s,{type:"link",style:{color:"#ff7875"},onClick:()=>v(),children:"\u5220\u9664"})]})}],W=[{key:"1",number:"W00001",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:11,unhelpCount:11,sort:1,date:"2023-01-01",isDisplay:1},{key:"2",number:"W00002",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:2,unhelpCount:12,sort:2,date:"2023-01-01",isDisplay:1},{key:"3",number:"W00003",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:3,unhelpCount:13,sort:3,date:"2023-01-01",isDisplay:0},{key:"4",number:"W00004",issue:"\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F\u5982\u4F55\u6CE8\u518C\uFF1F",apps:"",helpCount:44,unhelpCount:4,sort:4,date:"2023-01-01",isDisplay:1}];return u(i,{children:[e(l,{children:e(a,{span:24,children:u(o,{form:y,name:"search",onFinish:k,onFinishFailed:f,autoComplete:"off",children:[u(l,{gutter:20,children:[e(a,{span:6,children:e(o.Item,{label:"\u95EE\u9898",name:"issues",children:e(q,{placeholder:"\u8BF7\u8F93\u5165\u95EE\u9898",allowClear:!0,maxLength:30})})}),e(a,{span:12,children:e(o.Item,{label:"\u521B\u5EFA\u65F6\u95F4",name:"date",children:e(ue,{presets:Z,disabledDate:_})})})]}),e(l,{children:e(a,{span:24,className:"tr",children:e(o.Item,{children:e(s,{type:"primary",htmlType:"submit",children:"\u67E5\u8BE2"})})})}),e(l,{children:e(a,{span:24,className:"tr",children:e(o.Item,{children:u(C,{children:[e(s,{icon:e(ee,{}),onClick:g,children:"\u6279\u91CF\u5BFC\u5165"}),e(s,{icon:e(z,{}),onClick:A,children:"\u65B0\u589E"})]})})})})]})})}),e(l,{children:e(a,{span:24,children:e($,{className:"issue-table",columns:N,dataSource:W,pagination:h,onChange:w})})}),e(K,{open:x,setOpen:d}),e(Q,{open:D,setOpen:c}),e(V,{open:b,setOpen:F}),e(X,{open:I,setOpen:m}),e(Y,{open:T,setOpen:U})]})};export{Ie as default};
//# sourceMappingURL=index.432a4536.js.map
