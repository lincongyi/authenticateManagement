import{aV as V,u as H,b6 as u,J as O,r as A,m as q,a,F as B,j as e,ci as M,aK as x,bd as J,L as d,bj as K,bk as W,bl as z,bm as G,B as o,bn as Q,cj as X,ck as Y}from"./index.adc364ef.js";import{A as Z}from"./ArrowLeftOutlined.8c75168f.js";const $="_content_rs47x_1",i={content:$,"back-column":"_back-column_rs47x_7","back-btn":"_back-btn_rs47x_12","result-box":"_result-box_rs47x_17","register-box":"_register-box_rs47x_22"},ee=()=>{const c=H(),b=()=>c(-1),[l]=u.useForm(),g={labelCol:{span:4},wrapperCol:{span:20}},{registerStore:r}=O(),{state:s}=r.registerInfo;A.exports.useEffect(()=>{s===-1&&c(-1)},[]);const F=[{title:"\u5BA1\u6838\u901A\u8FC7",subTitle:"\u8BF7\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\u8FDB\u884C\u767B\u5F55"},{title:"\u63D0\u793A",subTitle:"\u60A8\u8D26\u53F7\u6CE8\u518C\u7533\u8BF7\u7684\u5185\u5BB9\u5DF2\u63D0\u4EA4\u7ED9\u5E73\u53F0\u5BA1\u6838\u4E2D\uFF0C\u9884\u8BA13\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53CD\u9988\u7ED3\u679C\u4F1A\u4EE5\u77ED\u4FE1\u548C\u90AE\u4EF6\u7684\u5F62\u5F0F\uFF0C\u53D1\u9001\u5230\u5355\u4F4D\u7BA1\u7406\u5458\u624B\u673A\u53F7\u548C\u90AE\u7BB1\u4E2D\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536"},{title:"\u5BA1\u6838\u4E0D\u901A\u8FC7",subTitle:""}];if(s===2){const{comment:t}=r.registerInfo;F.at(-1).subTitle=t}const E=s===2?F.at(-1):F[s],h=["success","info","error"],I=s===2?h.at(-1):h[s],y=()=>c("/login"),[p,k]=q.useMessage(),v=async()=>{const{processInstanceId:t}=r.registerInfo;await Y({instanceId:t}),p.warning({content:"\u50AC\u529E\u4FE1\u606F\u5DF2\u53D1\u9001\uFF015\u79D2\u540E\u81EA\u52A8\u5173\u95ED",duration:5,onClose:()=>{c("/register/tour")}})},C=[e(o,{onClick:b,children:"\u8FD4\u56DE"},"back")],f=[[e(o,{type:"primary",onClick:y,children:"\u53BB\u767B\u5F55"},"login"),...C],[e(o,{type:"primary",onClick:v,children:"\u50AC\u529E"},"urge"),...C],[]],_=s===2?f.at(-1):f[s],[D,w]=A.exports.useState(""),L=t=>{new Promise(n=>{Q(t.file,m=>{n(m)})}).then(n=>{const m=n.substring(n.indexOf("base64,")+7);w(n),l.setFieldValue("certificateFile",m)})},N=t=>(console.log("Upload event:",t),Array.isArray(t)?t:t==null?void 0:t.fileList),T=async t=>{const{state:n,comment:m,processInstanceId:U,...j}=r.registerInfo,{retMessage:P}=await X({...t,...j,instanceId:U});p.success({content:P,onClose:()=>{r.setRegisterInfo({taskId:"",state:1,processInstanceId:"",starter:"",comment:""})}})},R=t=>{console.log(t)},S=()=>{l.resetFields()};return a(B,{children:[k,s!==-1&&a(B,{children:[e(M,{isLogin:!1}),e("div",{className:"gray-bg",children:a("div",{className:i.content,children:[e("div",{className:i["back-column"],children:e("div",{className:i["back-btn"],onClick:b,children:a(x,{children:[e(Z,{style:{color:"#999"}}),"\u8FD4\u56DE"]})})}),e("div",{className:i["result-box"],children:e(J,{status:I,title:E.title,subTitle:E.subTitle,extra:_})}),s===2&&e("div",{className:i["register-box"],children:a(u,{form:l,name:"register",...g,colon:!1,onFinish:T,onFinishFailed:R,autoComplete:"off",children:[e(u.Item,{name:"companyName",label:"\u5355\u4F4D\u540D\u79F0",rules:[{required:!0}],children:e(d,{showCount:!0,maxLength:20})}),e(u.Item,{name:"companyShortName",label:"\u5355\u4F4D\u7B80\u79F0",children:e(d,{showCount:!0,maxLength:10})}),e(u.Item,{name:"certificateNum",label:"\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801",children:e(d,{showCount:!0,maxLength:20})}),e(u.Item,{name:"certificateFile",label:"\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66",valuePropName:"certificateFile",getValueFromEvent:N,children:e(K,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:t=>W(t),customRequest:L,children:D?e("img",{src:D,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):a("div",{children:[e(z,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})}),e(u.Item,{name:"areaCode",label:"\u63A5\u5165\u5730\u533A",children:e(G,{callback:t=>l.setFieldValue("areaCode",t)})}),e(u.Item,{wrapperCol:{...g.wrapperCol,offset:4},children:a(x,{children:[e(o,{onClick:S,children:"\u91CD\u7F6E"}),e(o,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})]})})]})})]})]})},ue=V(ee);export{ue as default};
