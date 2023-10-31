import{F as u,r as l,aE as V,m as j,a as n,d as h,j as e,B as d,D as f,I as F,U as M,i as O,e as R,bC as $,b as H,T as W,bD as z}from"./index.d120665a.js";import{b as G,d as J}from"./myAccount.1bb2d2ba.js";import{R as g}from"./index.84a2180f.js";const{Title:C}=W,Z=()=>{const[i]=u.useForm(),b={labelCol:{span:6},wrapperCol:{span:12}},E={required:"\u8BF7\u8F93\u5165${label}"},[c,K]=l.exports.useState({taskId:"",state:-1,processInstanceId:"",starter:"",comment:""}),[t,B]=l.exports.useState();l.exports.useEffect(()=>{(async()=>{const{data:a}=await G();i.setFieldsValue(a),a.areaList&&i.setFieldValue("areaCode",a.areaList[0].code),B(a),p(`data:image/png;base64,${a.certificatePhoto}`)})()},[]);const[o,p]=l.exports.useState(""),D=a=>{new Promise(s=>{z(a.file,r=>{s(r)})}).then(s=>{const r=s.substring(s.indexOf("base64,")+7);p(s),i.setFieldValue("certificateFile",r)})},m=V(),y=()=>m(-1),[A,x]=j.useMessage(),I=async a=>{if(!t)return;const{companyId:s,accountNumber:r,adminName:v,companyName:w,adminPhone:L}=t,{companyShortName:P,certificateNum:S,areaCode:q,adminEmail:T}=a,U=o.substring(o.indexOf("base64,")+7),{retMessage:k}=await J({companyId:s,adminAccountNumber:r,adminName:v,companyName:w,adminPhone:L,companyShortName:P,certificateNum:S,certificatePhoto:U,areaCode:q,adminEmail:T});A.success({content:k,duration:2,onClose(){m(-1)}})},N=a=>{console.log("Failed:",a)};return n(h,{children:[x,c.state===1?e(g,{title:"\u7533\u8BF7\u5BA1\u6838\u4E2D\uFF0C\u8BF7\u7A0D\u540E...",extra:e(d,{type:"primary",onClick:()=>m(-1),children:"\u8FD4\u56DE"},"console")}):n(h,{children:[c.state===2&&e(g,{title:`${c.comment}\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4\u4FE1\u606F\uFF0C\u518D\u63D0\u4EA4\u7533\u8BF7`,status:"error"}),n(u,{form:i,name:"settings",...b,colon:!1,onFinish:I,onFinishFailed:N,validateMessages:E,autoComplete:"off",children:[e(C,{level:5,children:"\u5355\u4F4D\u673A\u6784\u57FA\u672C\u4FE1\u606F"}),e(f,{}),e(u.Item,{label:"\u5355\u4F4D\u540D\u79F0",rules:[{required:!0}],children:t==null?void 0:t.companyName}),e(u.Item,{name:"companyShortName",label:"\u5355\u4F4D\u7B80\u79F0",children:e(F,{showCount:!0,maxLength:10})}),e(u.Item,{name:"certificateNum",label:"\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801",children:e(F,{showCount:!0,maxLength:20})}),e(u.Item,{name:"certificateFile",label:"\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66",valuePropName:"certificateFile",children:e(M,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:a=>O(a),customRequest:D,children:o?e("img",{src:o,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):n("div",{children:[e(R,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})}),t&&e(u.Item,{name:"areaCode",label:"\u63A5\u5165\u5730\u533A",children:e($,{callback:a=>i.setFieldValue("areaCode",a),destinationList:t.areaList})}),e(C,{level:5,children:"\u5355\u4F4D\u7BA1\u7406\u5458\u4FE1\u606F"}),e(f,{}),e(u.Item,{label:"\u7BA1\u7406\u5458\u59D3\u540D",rules:[{required:!0}],children:t==null?void 0:t.adminName}),e(u.Item,{label:"\u7BA1\u7406\u5458\u624B\u673A\u53F7",required:!0,children:t==null?void 0:t.adminPhone}),e(u.Item,{name:"adminEmail",label:"\u7BA1\u7406\u5458\u90AE\u7BB1",required:!0,children:e(F,{showCount:!0,maxLength:40})}),e(u.Item,{wrapperCol:{offset:6,span:12},children:n(H,{children:[e(d,{onClick:y,children:"\u8FD4\u56DE"}),e(d,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4\u7533\u8BF7"})]})})]})]})]})};export{Z as default};
