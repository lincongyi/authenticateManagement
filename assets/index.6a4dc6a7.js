import{o as j,aG as H,F as s,u as O,i as D,a as e,d as B,j as n,c4 as V,S as x,c5 as q,I as d,ar as G,as as M,at as W,bG as z,ah as o,bH as J,c6 as K,aE as A,c7 as Q}from"./index.9e9e2773.js";import{R as X}from"./index.ff34f0d5.js";const Y="_content_rs47x_1",i={content:Y,"back-column":"_back-column_rs47x_7","back-btn":"_back-btn_rs47x_12","result-box":"_result-box_rs47x_17","register-box":"_register-box_rs47x_22"},Z=()=>{const c=H(),E=()=>c(-1),[l]=s.useForm(),g={labelCol:{span:4},wrapperCol:{span:20}},{registerStore:r}=O(),{state:u}=r.registerInfo;D.exports.useEffect(()=>{u===-1&&c(-1)},[]);const F=[{title:"\u5BA1\u6838\u901A\u8FC7",subTitle:"\u8BF7\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\u8FDB\u884C\u767B\u5F55"},{title:"\u63D0\u793A",subTitle:"\u60A8\u8D26\u53F7\u6CE8\u518C\u7533\u8BF7\u7684\u5185\u5BB9\u5DF2\u63D0\u4EA4\u7ED9\u5E73\u53F0\u5BA1\u6838\u4E2D\uFF0C\u9884\u8BA13\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53CD\u9988\u7ED3\u679C\u4F1A\u4EE5\u77ED\u4FE1\u548C\u90AE\u4EF6\u7684\u5F62\u5F0F\uFF0C\u53D1\u9001\u5230\u5355\u4F4D\u7BA1\u7406\u5458\u624B\u673A\u53F7\u548C\u90AE\u7BB1\u4E2D\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536"},{title:"\u5BA1\u6838\u4E0D\u901A\u8FC7",subTitle:""}];if(u===2){const{comment:t}=r.registerInfo;F.at(-1).subTitle=t}const h=u===2?F.at(-1):F[u],b=["success","info","error"],I=u===2?b.at(-1):b[u],y=()=>c("/login"),k=async()=>{const{processInstanceId:t}=r.registerInfo;await Q({instanceId:t}),A.warning({content:"\u50AC\u529E\u4FE1\u606F\u5DF2\u53D1\u9001\uFF015\u79D2\u540E\u81EA\u52A8\u5173\u95ED",duration:5,onClose:()=>{c("/register/tour")}})},p=[e(o,{onClick:E,children:"\u8FD4\u56DE"},"back")],C=[[e(o,{type:"primary",onClick:y,children:"\u53BB\u767B\u5F55"},"login"),...p],[e(o,{type:"primary",onClick:k,children:"\u50AC\u529E"},"urge"),...p],[]],v=u===2?C.at(-1):C[u],[f,_]=D.exports.useState(""),w=t=>{new Promise(a=>{J(t.file,m=>{a(m)})}).then(a=>{const m=a.substring(a.indexOf("base64,")+7);_(a),l.setFieldValue("certificateFile",m)})},L=t=>(console.log("Upload event:",t),Array.isArray(t)?t:t==null?void 0:t.fileList),N=async t=>{const{state:a,comment:m,processInstanceId:S,...U}=r.registerInfo,{retMessage:P}=await K({...t,...U,instanceId:S});A.success({content:P,onClose:()=>{r.setRegisterInfo({taskId:"",state:1,processInstanceId:"",starter:"",comment:""})}})},T=t=>{console.log(t)},R=()=>{l.resetFields()};return e(B,{children:u!==-1&&n(B,{children:[e(V,{isLogin:!1}),e("div",{className:"gray-bg",children:n("div",{className:i.content,children:[e("div",{className:i["back-column"],children:e("div",{className:i["back-btn"],onClick:E,children:n(x,{children:[e(q,{style:{color:"#999"}}),"\u8FD4\u56DE"]})})}),e("div",{className:i["result-box"],children:e(X,{status:I,title:h.title,subTitle:h.subTitle,extra:v})}),u===2&&e("div",{className:i["register-box"],children:n(s,{form:l,name:"register",...g,colon:!1,onFinish:N,onFinishFailed:T,autoComplete:"off",children:[e(s.Item,{name:"companyName",label:"\u5355\u4F4D\u540D\u79F0",rules:[{required:!0}],children:e(d,{showCount:!0,maxLength:20})}),e(s.Item,{name:"companyShortName",label:"\u5355\u4F4D\u7B80\u79F0",children:e(d,{showCount:!0,maxLength:10})}),e(s.Item,{name:"certificateNum",label:"\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801",children:e(d,{showCount:!0,maxLength:20})}),e(s.Item,{name:"certificateFile",label:"\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66",valuePropName:"certificateFile",getValueFromEvent:L,children:e(G,{listType:"picture-card",maxCount:1,showUploadList:!1,beforeUpload:M,customRequest:w,children:f?e("img",{src:f,alt:"avatar",style:{maxWidth:"100%",maxHeight:"100%"}}):n("div",{children:[e(W,{}),e("div",{style:{marginTop:8},children:"\u9009\u62E9\u56FE\u7247"})]})})}),e(s.Item,{name:"areaCode",label:"\u63A5\u5165\u5730\u533A",children:e(z,{callback:t=>l.setFieldValue("areaCode",t)})}),e(s.Item,{wrapperCol:{...g.wrapperCol,offset:4},children:n(x,{children:[e(o,{onClick:R,children:"\u91CD\u7F6E"}),e(o,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})]})})]})})]})})},te=j(Z);export{te as default};
//# sourceMappingURL=index.6a4dc6a7.js.map
