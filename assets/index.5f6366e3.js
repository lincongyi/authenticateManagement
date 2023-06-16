import{F as u,i as o,bF as j,aG as R,j as i,d,a as e,ah as l,I as m,ar as $,as as G,at as H,bG as z,S as K,bH as W,aE as Y}from"./index.bd1b03b0.js";import J from"./UpdatePhoneModal.f00deb90.js";import Q from"./UpdateEmailModal.f2c77bf1.js";import{b as X,e as Z}from"./myAccount.c807f0a3.js";import{R as x}from"./index.caf3a21b.js";import{E as y}from"./EditOutlined.6b3d49fc.js";const I={"update-btn":"_update-btn_iaqlz_1"},ie=()=>{const[r]=u.useForm(),D={labelCol:{span:6},wrapperCol:{span:12}},P={required:"\u8BF7\u8F93\u5165${label}"},[p,A]=o.exports.useState({taskId:"",state:-1,processInstanceId:"",starter:"",comment:""}),[t,h]=o.exports.useState();o.exports.useEffect(()=>{(async()=>{const{data:a}=await X(),{data:s}=await j({userId:a.accountNumber,key:"UPDATE_COMPANY_INFO"});if(r.setFieldsValue(a),a.areaList&&r.setFieldValue("areaCode",a.areaList[0].code),h(a),B(`data:image/png;base64,${a.certificatePhoto}`),s){const{state:n,processInstanceId:E,starter:f,comment:b}=s.instanceInfo;A({taskId:s.taskId,state:n,processInstanceId:E,starter:f,comment:b})}})()},[]);const[N,C]=o.exports.useState(!1),k=()=>{C(!0)},[O,g]=o.exports.useState(!1),w=()=>{g(!0)},[c,B]=o.exports.useState(""),S=a=>{new Promise(s=>{W(a.file,n=>{s(n)})}).then(s=>{const n=s.substring(s.indexOf("base64,")+7);B(s),r.setFieldValue("certificateFile",n)})},F=R(),U=()=>F(-1),L=async a=>{if(!t)return;const{userId:s,adminName:n,adminPhone:E,adminEmail:f}=t,{companyName:b,companyShortName:q,certificateNum:v,areaCode:_}=a,T=c.substring(c.indexOf("base64,")+7),{retMessage:V}=await Z({userId:s,companyName:b,companyShortName:q,adminName:n,adminPhone:E,adminEmail:f,certificateNum:v,certificatePhoto:T,areaCode:_});Y.success({content:V,duration:2,onClose(){F(-1)}})},M=a=>{console.log("Failed:",a)};return i(d,{children:[p.state===1?e(x,{title:"\u7533\u8BF7\u5BA1\u6838\u4E2D\uFF0C\u8BF7\u7A0D\u540E...",extra:e(l,{type:"primary",onClick:()=>F(-1),children:"\u8FD4\u56DE"},"console")}):i(d,{children:[p.state===2&&e(x,{title:`${p.comment}\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4\u4FE1\u606F\uFF0C\u518D\u63D0\u4EA4\u7533\u8BF7`,status:"error"}),i(u,{form:r,name:"settings",...D,colon:!1,onFinish:L,onFinishFailed:M,validateMessages:P,autoComplete:"off",children:[e(u.Item,{label:"\u5355\u4F4D\u540D\u79F0",name:"companyName",rules:[{required:!0}],children:e(m,{showCount:!0,maxLength:20})}),e(u.Item,{name:"companyShortName",label:"\u5355\u4F4D\u7B80\u79F0",children:e(m,{showCount:!0,maxLength:10})}),e(u.Item,{name:"adminName",label:"\u5355\u4F4D\u7BA1\u7406\u5458\u59D3\u540D",rules:[{required:!0}],children:e(m,{showCount:!0,maxLength:20})}),e(u.Item,{label:"\u7BA1\u7406\u5458\u624B\u673A\u53F7",required:!0,children:i(d,{children:[t==null?void 0:t.adminPhone,e(l,{type:"text",className:I["update-btn"],icon:e(y,{}),onClick:k,children:"\u4FEE\u6539"})]})}),e(u.Item,{label:"\u7BA1\u7406\u5458\u90AE\u7BB1",required:!0,children:i(d,{children:[t==null?void 0:t.adminEmail,e(l,{type:"text",className:I["update-btn"],icon:e(y,{}),onClick:w,children:"\u4FEE\u6539"})]})}),e(u.Item,{name:"certificateNum",label:"\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801",children:e(m,{showCount:!0,maxLength:20})}),e(u.Item,{name:"certificateFile",label:"\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66",valuePropName:"certificateFile",children:e($,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:G,customRequest:S,children:c?e("img",{src:c,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):i("div",{children:[e(H,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})}),t&&e(u.Item,{name:"areaCode",label:"\u63A5\u5165\u5730\u533A",children:e(z,{callback:a=>r.setFieldValue("areaCode",a),destinationList:t.areaList})}),e(u.Item,{wrapperCol:{offset:6,span:12},children:i(K,{children:[e(l,{onClick:U,children:"\u8FD4\u56DE"}),e(l,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4\u7533\u8BF7"})]})})]})]}),(t==null?void 0:t.adminPhone)&&e(J,{open:N,setOpen:C,companyInfo:t,callback:a=>h({...t,adminPhone:a})}),(t==null?void 0:t.adminEmail)&&e(Q,{open:O,setOpen:g,companyInfo:t,callback:a=>h({...t,adminEmail:a})})]})};export{ie as default};
//# sourceMappingURL=index.5f6366e3.js.map
