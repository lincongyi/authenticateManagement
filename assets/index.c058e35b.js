import{a7 as X,b6 as k,r as y,m as ue,a as F,F as A,j as r,aK as ae,B as $,T as le,bj as z,R as Z,C as S,bk as ne,bl as ie,c0 as ce,aY as H,L as ee,M as re,bn as de,c1 as fe,c2 as pe,c3 as Fe,b as me,u as he,J as ye,D as ge}from"./index.9074d6bf.js";import{g as Ce,c as be,d as Ae,e as Ee}from"./ability.605d4753.js";import{d as R,D as Be}from"./zh-cn.4ede3759.js";import{T as ve,C as De}from"./Table.7c63735b.js";import{U as Ne}from"./UploadOutlined.8675a90f.js";import{R as W}from"./index.a2b66ec3.js";import{A as te}from"./index.a22e63dd.js";import"./useBreakpoint.4b24887f.js";import"./Pagination.921ed7d0.js";import"./index.34e46d12.js";const Ie="_header_17cy8_1",we="_name_17cy8_6",P={header:Ie,name:we,"form-tabs":"_form-tabs_17cy8_17"},Q=X.forwardRef(({formId:w,formList:v},E)=>{const[f]=k.useForm(),D={labelCol:{span:4},wrapperCol:{span:12},autoComplete:"off"};y.exports.useEffect(()=>{(async()=>{const e=v.reduce((a,t)=>{t.type==="privateKey"&&t.value?T({...b,[t.field]:{publicKey:t.value}}):["imageUpload"].includes(t.type)?N({...g,[t.field]:t.value}):["fileUpload"].includes(t.type)&&x({...i,[t.field]:t.value});let u=t.value;return t.type==="dateTime"&&t.value?u=R(t.value):t.type==="switch"&&!t.value&&(u=!1),{...a,[t.field]:u}},{});f.setFieldsValue(e)})()},[]);const[g,N]=y.exports.useState({}),O=(e,a)=>{new Promise(t=>{de(e.file,u=>{t(u)})}).then(t=>{const u=t.substring(t.indexOf("base64,")+7),c={uid:e.file.uid,name:e.file.name,status:"done",url:`data:image/png;base64,${u}`};f.setFieldValue(a,g[a]?[...g[a],c]:[c]),N({...g,[a]:g[a]?[...g[a],c]:[c]})})},n=(e,a)=>{const{uid:t}=e;return f.setFieldValue(a,g[a].filter(u=>u.uid!==t)),N({...g,[a]:g[a].filter(u=>u.uid!==t)}),!1},[M,V]=y.exports.useState(!1),[K,B]=y.exports.useState(),_=e=>{B(e.url),V(!0)},[U,q]=ue.useMessage(),[i,x]=y.exports.useState({}),J=(e,a)=>{if(a.ruleList.includes("all"))return!0;const{name:t}=e,u=t.substring(t.lastIndexOf(".")+1),l=a.ruleList.includes(u);return l||U.error(`\u4E0D\u652F\u6301\u4E0A\u4F20${u}\u683C\u5F0F\u6587\u4EF6`),l||z.LIST_IGNORE};let C;const Y=async(e,a)=>{const t=new FormData,{file:u}=e;t.append("file",u);try{const{data:l}=await fe(t),{fileName:c,url:p}=l;C={uid:e.file.uid,name:c,status:"done",url:p}}catch(l){console.log("error",l),C={uid:e.file.uid,name:e.file.name,status:"error",url:""}}finally{f.setFieldValue(a,i[a]?[...i[a],C]:[C]),x({...i,[a]:i[a]?[...i[a],C]:[C]})}},L=(e,a)=>{const{uid:t}=e;return f.setFieldValue(a,i[a].filter(u=>u.uid!==t)),x({...i,[a]:i[a].filter(u=>u.uid!==t)}),!1},[b,T]=y.exports.useState(),s=async e=>{const{data:a}=await pe();if(!a)return;const{publicKey:t,privateKey:u}=a;T({...b,[e]:{publicKey:t,privateKey:u}}),f.setFieldValue(e,t);const l=`\u516C\u94A5\uFF1A${t}
\u79C1\u94A5\uFF1A${u}`;Fe(l,"\u5BC6\u94A5\u5BF9")},[o,m]=y.exports.useState();y.exports.useEffect(()=>{const e=v.find(t=>t.type==="table");if(!e)return;const a=e.tableOptions.map((t,u)=>{const l=e.value&&e.value[u];return{...t,value:l==null?void 0:l.value}});m(a)},[]);const d=(e,a)=>{const{id:t}=a,u={id:t,value:e},l=o.findIndex(p=>p.id===t);if(l===-1)return;const c=f.getFieldValue("upEndTime");if(c)c[l]=u,f.setFieldValue("upEndTime",c);else{const p=Array(o==null?void 0:o.length);p[l]=u,f.setFieldValue("upEndTime",p)}},h=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"key"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",render:e=>r(A,{children:r(H,{defaultValue:e.value,placeholder:"\u8BF7\u9009\u62E9\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",options:e.options,onChange:a=>d(a,e)})})}];return F(A,{children:[q,r(k,{ref:E,form:f,name:w.toString(),...D,children:v.map(e=>r(X.Fragment,{children:e.cnName!=="\u63A5\u5165\u80FD\u529B\u6709\u6548\u671F\u6B62"&&r(k.Item,{noStyle:["imageUpload","fileUpload"].includes(e.type),name:["imageUpload","fileUpload"].includes(e.type)?void 0:e.field,label:!["imageUpload","fileUpload"].includes(e.type)&&e.cnName,rules:[{required:e.required,message:`${["dateTime","radio","checkbox","select","selectMultiple","table"].includes(e.type)?"\u8BF7\u9009\u62E9":"\u8BF7\u8F93\u5165"}${e.cnName}`},{validator(a,t){return e.type==="table"&&t&&t.some(l=>!l)?Promise.reject(new Error("\u8BF7\u5F55\u5165\u6240\u6709\u8C03\u7528\u5E76\u53D1\u4E0A\u9650")):Promise.resolve()}}],valuePropName:["switch","checkbox"].includes(e.type)?"checked":void 0,children:(()=>{var a,t;switch(e.type){case"text":return r(ee,{placeholder:e.placeholder,maxLength:e.maxLength,showCount:!0});case"textarea":return r(ee.TextArea,{placeholder:e.placeholder,maxLength:e.maxLength,showCount:!0});case"dateTime":return r(Be,{style:{minWidth:160},placeholder:e.placeholder});case"radio":return r(W.Group,{options:e.options||[]});case"checkbox":return r(De.Group,{options:e.options||[],defaultValue:e.value});case"select":return r(H,{options:e.options||[],placeholder:e.placeholder});case"selectMultiple":return r(H,{mode:"multiple",allowClear:!0,options:e.options||[],placeholder:e.placeholder});case"switch":return r(ce,{options:e.options||[],placeholder:e.placeholder,checkedChildren:(a=e.switchText)==null?void 0:a.split("/")[0],unCheckedChildren:(t=e.switchText)==null?void 0:t.split("/")[1]});case"imageUpload":return F(A,{children:[r(k.Item,{name:e.field,label:e.cnName,style:{marginBottom:0},rules:[{required:e.required,message:`\u8BF7\u8865\u5145${e.cnName}`}],children:r(z,{listType:"picture-card",maxCount:1,fileList:g[e.field],beforeUpload:u=>ne(u,e.fileSize),customRequest:u=>O(u,e.field),onPreview:_,onRemove:u=>n(u,e.field),children:(!g[e.field]||e.multiple>g[e.field].length)&&F(A,{children:[r(ie,{}),"\u9009\u62E9\u56FE\u7247"]})})}),F(Z,{children:[r(S,{span:20,offset:4,className:"font-secondary-color",children:"\u4E0A\u4F20\u56FE\u7247\u53EA\u5141\u8BB8JPG/PNG\u683C\u5F0F"}),F(S,{span:20,offset:4,className:"font-secondary-color",children:["\u652F\u6301\u56FE\u7247\u6587\u4EF6\u5927\u5C0F\uFF1A",e.fileSize,"M"]}),F(S,{span:20,offset:4,className:"font-secondary-color",children:["\u652F\u6301\u4E0A\u4F20\u56FE\u7247\u6570\u91CF\uFF1A",e.multiple,"\u5F20"]})]})]});case"fileUpload":return F(A,{children:[r(k.Item,{name:e.field,label:e.cnName,style:{marginBottom:0},rules:[{required:e.required,message:`\u8BF7\u8865\u5145${e.cnName}`}],children:r(z,{maxCount:1,fileList:i[e.field],beforeUpload:u=>J(u,e),customRequest:u=>Y(u,e.field),onRemove:u=>L(u,e.field),children:r($,{icon:r(Ne,{}),disabled:i[e.field]&&e.multiple<=i[e.field].length,children:"\u4E0A\u4F20\u6587\u4EF6"})})}),F(Z,{children:[r(S,{span:20,offset:4,className:"font-secondary-color",children:!e.ruleList.includes("all")&&`\u4E0A\u4F20\u6587\u4EF6\u53EA\u5141\u8BB8${e.ruleList.join()}\u683C\u5F0F`}),F(S,{span:20,offset:4,className:"font-secondary-color",children:["\u652F\u6301\u6587\u4EF6\u5927\u5C0F\uFF1A",e.fileSize,"M"]}),F(S,{span:20,offset:4,className:"font-secondary-color",children:["\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\uFF1A",e.multiple]})]})]});case"privateKey":return F(ae,{children:[r($,{type:"primary",onClick:()=>s(e.field),children:"\u751F\u6210\u5BC6\u94A5\u5BF9"}),b&&F(A,{children:[r("span",{style:{minWidth:50,display:"inline-block"},children:"\u516C\u94A5\uFF1A"}),r(le.Paragraph,{copyable:!0,style:{marginBottom:0},children:b[e.field].publicKey})]})]});case"table":return r(A,{children:r(ve,{rowKey:"id",bordered:!0,dataSource:o,columns:h,pagination:!1})});default:return r(A,{})}})()})},e.field))}),r(re,{open:M,footer:null,onCancel:()=>V(!1),children:r("img",{alt:"image",style:{width:"100%"},src:K})})]})});Q.displayName="DynamicForm";const Oe=()=>{const[w]=me(),v=he(),E=w.get("appId"),f=Number(w.get("capabilityId")),D=w.get("env");if(!E||!f||!D)return v(-1);const{myAppStore:g}=ye();g.setAppId(E);const[N,O]=y.exports.useState(),[n,M]=y.exports.useState(),[V,K]=y.exports.useState(),B=y.exports.useRef();y.exports.useEffect(()=>{(async()=>{const{data:s}=await Ce({id:f});O(s)})(),(async()=>{const{data:s}=await be({appId:E,capabilityId:f,env:D});if(!s)return v(-1);M(s.formList),K(JSON.parse(s.formList[0].defaultFormContent)),U(s.formList[0].formId)})()},[]);const[_,U]=y.exports.useState(0),q=s=>{const o=n.find(m=>m.formId===s.target.value);!o||U(o.formId)},i=y.exports.useRef([]),[x,J]=re.useModal(),[C,Y]=ue.useMessage(),L=(s,o)=>{const{type:m}=s;if(["radio","select"].includes(m)){const{options:d}=s;if(!d)return;const h=d.find(e=>e.value===o);return h==null?void 0:h.label}else if(["checkbox","selectMultiple"].includes(m)){const{options:d}=s;if(!d)return;const h=(o==null?void 0:o.reduce((e,a)=>{const t=d.find(l=>l.value===a),u=t?t.label:void 0;return[...e,u]},[]))||void 0;return h?h.toString():void 0}else{if(["dateTime"].includes(m)&&o)return R(o).isValid()&&R(o).format("YYYY-MM-DD");if(["switch"].includes(m)){const{switchText:d}=s;return d?(d==null?void 0:d.split("/"))[+!o]:void 0}else return["table"].includes(m)?s.tableOptions.map((d,h)=>({label:d.key,value:o&&o[h]?o[h].value:void 0})):o}},b=(s,o)=>{if(s==="dateTime")return o&&R(o).isValid()?R(o).format("YYYY-MM-DD"):o;if(s==="fileUpload"&&o){const m=o.filter(d=>d.status==="done");return m.length?m:void 0}else return o},T=async s=>{if(!n)return;if(s)try{await B.current.validateFields();for(let e=0;e<i.current.length;e++)await i.current[e].validateFields()}catch{return C.error("\u8BF7\u6838\u5BF9\u8868\u5355\u5FC5\u586B\u9879\u662F\u5426\u5DF2\u5168\u90E8\u5F55\u5165"),!1}const o=[];for(let e=0;e<(n==null?void 0:n.length);e++){const a=JSON.parse(n[e].formContent),t=a.map(l=>({...l,value:b(l.type,i.current[e].getFieldValue(l.field))}));let u={formContent:JSON.stringify(t),formId:n[e].formId,formName:n[e].formName};if(e===0){const c=JSON.parse(n[0].defaultFormContent).map(p=>({...p,labelValue:L(p,B.current.getFieldValue(p.field)),value:b(p.type,B.current.getFieldValue(p.field))}));u.defaultFormContent=JSON.stringify(c)}if(s){const l=a.map(c=>{const{cnName:p,dataType:I,type:j,field:G}=c;return{cnName:p,dataType:I,type:j,field:G,labelValue:L(c,i.current[e].getFieldValue(c.field)),value:b(c.type,i.current[e].getFieldValue(c.field))}});if(e===0){const p=JSON.parse(n[0].defaultFormContent).map(I=>{const{cnName:j,dataType:G,type:se,field:oe}=I;return{cnName:j,dataType:G,type:se,field:oe,labelValue:L(I,B.current.getFieldValue(I.field)),value:b(I.type,B.current.getFieldValue(I.field))}});u.defaultFormList=p}u={...u,form:l}}o.push(u)}if(!await x.confirm({title:`${s?"\u63D0\u4EA4\u5BA1\u6838":"\u4FDD\u5B58\u8349\u7A3F"}`,content:`${s?"\u63D0\u4EA4\u5BA1\u6838\u540E\u4F1A\u8FDB\u5165\u5BA1\u6279\u9636\u6BB5\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u63D0\u4EA4":"\u4FDD\u5B58\u8349\u7A3F\u4F1A\u8986\u76D6\u4E0A\u4E00\u6B21\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u662F\u5426\u786E\u8BA4\u4FDD\u5B58\uFF1F"}`}))return;const d=!!w.get("isEdit"),h={appId:E,capabilityId:f,formList:o,type:s,env:D};d?await Ee(h):await Ae(h),C.success({content:`\u5DF2\u6210\u529F${s?"\u63D0\u4EA4\u5BA1\u6838":"\u4FDD\u5B58\u8349\u7A3F"}`,duration:2,onClose:()=>v(`..?appId=${E}&capabilityId=${f}&env=${D}`)})};return F(A,{children:[J,Y,F("div",{className:P.header,children:[r("div",{className:`${P["left-side"]} ${P.name}`,children:N==null?void 0:N.name}),r("div",{className:P["right-side"],children:r(te,{offsetTop:80,children:F(ae,{children:[r($,{onClick:()=>T(0),children:"\u4FDD\u5B58\u8349\u7A3F"}),r($,{type:"primary",onClick:()=>T(1),children:"\u63D0\u4EA4\u5BA1\u6838"})]})})})]}),r(ge,{}),r("div",{className:P["form-tabs"],children:n&&!!n.length&&r(te,{offsetTop:80,style:{display:"inline-block"},children:r(W.Group,{size:"large",defaultValue:n[0].formId,buttonStyle:"solid",onChange:q,children:n.map(s=>r(W.Button,{value:s.formId,children:s.formName},s.formId))})})}),E&&D&&f&&n&&!!n.length&&n.map((s,o)=>F("div",{style:{display:_===s.formId?"block":"none"},children:[!o&&V&&r(Q,{ref:B,formId:"defaultForm",formList:V}),r(Q,{ref:m=>i.current[o]=m,formId:s.formId,formList:JSON.parse(s.formContent)})]},s.formId))]})};export{Oe as default};
