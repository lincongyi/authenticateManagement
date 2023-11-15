import{aV as U,aI as $,r,F as t,m as S,a as s,d as j,j as u,B as p,aY as y,U as f,c2 as O}from"./index.8fb74e68.js";import{a as R}from"./ability.335dcdd7.js";import{b as P}from"./myApp.fdb8f3db.js";import{D as V}from"./index.865e0806.js";import{U as v}from"./UploadOutlined.a9158490.js";const M="_header_zn0qe_1",T="_title_zn0qe_6",k="_section_zn0qe_17",G="_guide_zn0qe_27",H="_step_zn0qe_36",Y="_icon01_zn0qe_58",J="_icon02_zn0qe_61",K="_icon03_zn0qe_64",Q="_arrow_zn0qe_67",W="_download_zn0qe_81",a={header:M,title:T,section:k,guide:G,step:H,"step-item":"_step-item_zn0qe_40","step-icon":"_step-icon_zn0qe_53",icon01:Y,icon02:J,icon03:K,arrow:Q,download:W},se=()=>{const[_]=U(),h=$(),B=_.get("clientId"),d=Number(_.get("capabilityId")),[F,q]=r.exports.useState();(!B||!d)&&h(-1),r.exports.useEffect(()=>{(async()=>{const{data:e}=await R({id:d});!e||q(e)})()},[]);const[l]=t.useForm(),w={labelCol:{span:6},wrapperCol:{span:12},autoComplete:"off"},[A,b]=r.exports.useState(),[E,C]=r.exports.useState(),[N,x]=S.useMessage(),g=e=>{const{name:n}=e,o=n.substring(n.lastIndexOf(".")+1),c=["doc","docx","pdf","png","jpg"].includes(o);return c||N.error(`\u4E0D\u652F\u6301\u4E0A\u4F20${o}\u683C\u5F0F\u6587\u4EF6`),c||f.LIST_IGNORE};let i;const D=async(e,n)=>{const o=new FormData,{file:c}=e;o.append("file",c);try{const{data:m}=await O(o),{fileName:z,url:L}=m;i={uid:e.file.uid,name:z,status:"done",url:L}}catch(m){console.log("error",m),i={uid:e.file.uid,name:e.file.name,status:"error",url:""}}finally{n?C([i]):b([i]),l.setFieldValue(n?"applyLetter":"applyFile",i.url)}},I=async()=>{try{await l.validateFields();const e={...l.getFieldsValue(),applyFileName:A[0].name,applyLetterName:E[0].name,capabilityId:d,clientId:B};await P(e),N.success({content:"\u63D0\u4EA4\u6210\u529F",onClose:()=>h(-1)})}catch(e){console.log(e)}};return s(j,{children:[x,s("div",{className:a.header,children:[s("div",{className:a.title,children:["\u4E0A\u4F20\u7533\u8BF7\u8868 - ",F==null?void 0:F.name]}),u(p,{type:"primary",onClick:I,children:"\u63D0\u4EA4"})]}),u(V,{}),s("div",{className:a.section,children:[u("div",{className:a.guide,children:"\u64CD\u4F5C\u6307\u5F15"}),s("div",{className:a.step,children:[s("div",{className:a["step-item"],children:[u("i",{className:`${a["step-icon"]} ${a.icon01}`}),"\u4E0B\u8F7D\u7533\u8BF7\u8868"]}),u("div",{className:a.arrow}),s("div",{className:a["step-item"],children:[u("i",{className:`${a["step-icon"]} ${a.icon02}`}),"\u7EBF\u4E0B\u5370\u7AE0"]}),u("div",{className:a.arrow}),s("div",{className:a["step-item"],children:[u("i",{className:`${a["step-icon"]} ${a.icon03}`}),"\u4E0A\u4F20\u626B\u63CF\u4EF6"]})]})]}),u("div",{className:a.section,children:s(t,{form:l,name:"uploadForm",...w,children:[u(t.Item,{label:"\u7533\u8BF7\u8868\u4E0B\u8F7D\uFF1A",children:s("div",{className:"flex",children:["\u300A\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868.pdf\u300B",s("div",{className:a.download,children:[u(y,{}),"\u4E0B\u8F7D"]})]})}),u(t.Item,{label:"\u7533\u8BF7\u51FD\u4E0B\u8F7D\uFF1A",children:s("div",{className:"flex",children:["\u300A\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD.pdf\u300B",s("div",{className:a.download,children:[u(y,{}),"\u4E0B\u8F7D"]})]})}),u(t.Item,{name:"applyFile",label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868\uFF1A",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u7533\u8BF7\u8868"}],children:u(f,{maxCount:1,fileList:A,beforeUpload:e=>g(e),customRequest:e=>D(e,0),children:u(p,{icon:u(v,{}),children:"\u4E0A\u4F20\u6587\u4EF6"})})}),u(t.Item,{name:"applyLetter",label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD\uFF1A",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u7533\u8BF7\u8868"}],children:u(f,{maxCount:1,fileList:E,beforeUpload:e=>g(e),customRequest:e=>D(e,1),children:u(p,{icon:u(v,{}),children:"\u4E0A\u4F20\u6587\u4EF6"})})})]})})]})};export{se as default};