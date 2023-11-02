import{j as e,d,a as r,m as O,F as B,c as U,C as S,b as K,bG as z,aN as M,T as f,r as C,aK as q,aG as w,aF as j,u as W,R as X,am as _,ax as V,bH as $,M as ee,B as ue}from"./index.c52fca20.js";import{D as n}from"./index.da45b459.js";import{T as x}from"./index.06d46e80.js";import{D as le}from"./index.8f9ba840.js";import{T as te}from"./Table.1bb7f34d.js";import{E as ae}from"./ExclamationCircleOutlined.23dcfc45.js";import{u as re}from"./index.11225de7.js";import{S as v}from"./index.aad19cf1.js";import"./useBreakpoint.00aa8cd3.js";import"./Pagination.fdfbd77b.js";import"./index.0809a7e8.js";import"./index.b6117a9a.js";import"./index.4d51213d.js";import"./index.287424bd.js";import"./index.e16ae36e.js";const Ae="_flex_16zd3_1",ne={flex:Ae},se=({info:u})=>e(d,{children:u&&r(n,{bordered:!0,className:"tc",column:2,children:[e(n.Item,{label:"\u5BA1\u6279\u72B6\u6001\uFF1A",children:e(x,{color:["success","processing","error","default"][u.state],children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][u.state]||"-"})}),e(n.Item,{label:"\u6700\u8FD1\u5BA1\u6279\u65F6\u95F4\uFF1A",children:u.modTime||"-"}),e(n.Item,{label:"\u5BA1\u6279\u5355\u53F7\uFF1A",children:u.processInstanceId||"-"}),e(n.Item,{label:"\u7533\u8BF7\u65F6\u95F4\uFF1A",children:u.addTime||"-"}),e(n.Item,{label:"\u7533\u8BF7\u5355\u4F4D\uFF1A",children:u.companyName||"-"}),e(n.Item,{label:"\u5355\u4F4D\u7BA1\u7406\u5458\uFF1A",children:u.adminName||"-"}),e(n.Item,{label:"\u5BA1\u6279\u5355\u7C7B\u578B\uFF1A",children:u.processName||"-"}),e(n.Item,{label:"\u5E94\u7528\u670D\u52A1\u540D\u79F0\uFF1A",children:u.unifyName||"-"})]})}),{Link:k}=f,ie=({formInfo:u})=>{const s={labelCol:{span:8},wrapperCol:{span:16}},[a,l]=O.useMessage(),F=m=>{m?a.info("\u9884\u89C8\u7533\u8BF7\u51FD"):a.info("\u9884\u89C8\u7533\u8BF7\u8868")},g=()=>{a.info("\u6682\u672A\u652F\u6301\u4E0B\u8F7D")};return r(d,{children:[l,r(B,{name:"uploadFormInfo",...s,children:[e(B.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",required:!0,children:r(U,{children:[r(S,{span:18,children:["\u300A",u.applyFileName,"\u300B"]}),e(S,{span:6,className:"tr",children:r(K,{children:[r(k,{onClick:()=>F(0),children:[e(z,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(k,{onClick:g,children:[e(M,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})}),e(B.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",required:!0,style:{marginBottom:0},children:r(U,{children:[r(S,{span:18,children:["\u300A",u.applyLetterName,"\u300B"]}),e(S,{span:6,className:"tr",children:r(K,{children:[r(k,{onClick:()=>F(1),children:[e(z,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(k,{onClick:g,children:[e(M,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})})]})]})},oe=({formInfo:u})=>r(B,{name:"uploadFormInfo",...{labelCol:{span:6},wrapperCol:{span:12}},children:[e(B.Item,{label:"\u63A5\u5165\u5E94\u7528\u540D\u79F0",required:!0,children:u.capabilityName}),e(B.Item,{label:"\u57FA\u7840\u670D\u52A1\u63A5\u5165\u65F6\u95F4",children:u.addTime}),e(B.Item,{label:"\u6709\u6548\u671F\u6B62",children:u.expireTime}),e(B.Item,{label:"\u662F\u5426\u5EF6\u957F\u6709\u6548\u671F",required:!0,children:["\u5426","\u662F"][u.type]}),e(B.Item,{label:"\u5EF6\u957F\u6709\u6548\u671F\u81F3",children:u.newExpireTime}),e(B.Item,{label:"\u5907\u6CE8\u8BF4\u660E",children:u.describe}),e(B.Item,{label:"\u63D0\u4EA4\u7533\u8BF7\u5EF6\u671F\u65F6\u95F4",children:u.applyTime})]}),ce="_container_1m8mk_1",de="_different_1m8mk_14",I={container:ce,"img-wrap":"_img-wrap_1m8mk_7",different:de},{Text:b}=f,me=({formInfo:u})=>{const s={labelCol:{span:4},wrapperCol:{span:12}},{formList:a,oldFormList:l}=u,[F,g]=C.exports.useState(),[m,N]=C.exports.useState(),[Q,y]=C.exports.useState();C.exports.useEffect(()=>{const t=a.map(A=>({label:A.formName,key:A.formId.toString()}));g(t),N([...a[0].defaultFormList,...a[0].form||[]]),y([...l[0].defaultFormList,...l[0].form||[]])},[a]);const T=t=>{const A=a.findIndex(i=>i.formId===+t);A!==-1&&(A?(N(a[A].form),y(l[A].form)):(N([...a[A].defaultFormList,...a[A].form||[]]),y([...l[0].defaultFormList,...l[0].form||[]])))},L=t=>{if(!m||!Q)return;const{type:A,cnName:i}=m[t];if(["table"].includes(A)){const o=m[t].labelValue,c=Q[t].labelValue;let E=!1;for(let h=0;h<o.length;h++)if(JSON.stringify(o[h])!==JSON.stringify(c[h])){E=!0;break}return E?e(b,{type:"danger",children:i}):e(d,{children:i})}else if(["imageUpload","fileUpload"].includes(A)){const o=m[t].labelValue,c=Q[t].labelValue;let E=!1;if(o.length!==c.length)E=!0;else for(let h=0;h<o.length;h++)if(o[h].uid!==c[h].uid){E=!0;break}return E?e(b,{type:"danger",children:i}):e(d,{children:i})}else return m[t].labelValue===Q[t].labelValue?e(d,{children:i}):e(b,{type:"danger",children:i})},p=(t,A)=>{if(!m||!Q)return;const{type:i}=m[t];if(["table"].includes(i)){const o=m[t].labelValue,c=Q[t].labelValue;return o[A].value===c[A].value}else if(["imageUpload","fileUpload"].includes(i)){const o=m[t].labelValue,c=Q[t].labelValue;let E=!1;if(o[A]){const{uid:h}=o[A];E=c.some(R=>R.uid===h)}return E}return m[t].labelValue===Q[t].labelValue},P=(t,A)=>{if(t.type==="imageUpload")return e(d,{children:t.labelValue.map((i,o)=>e("div",{className:`${I["img-wrap"]} ${!p(A,o)&&I.different}
              `,children:e(j,{width:160,height:160,src:i.url})},i.uid))});if(t.type==="fileUpload")return e(d,{children:t.labelValue.map((i,o)=>e(f.Link,{href:i.url,target:"_blank",style:{color:p(A,o)?"#1668dc":"#f00"},children:i.name},i.uid))});if(t.type==="table"){const i=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}],o=t.labelValue.map((c,E)=>({index:E,label:p(A,E)?c.label:e(b,{type:"danger",children:c.label}),value:p(A,E)?c.value:e(b,{type:"danger",children:c.value})}));return e(te,{rowKey:"index",bordered:!0,dataSource:o,columns:i,pagination:!1})}return p(A)?t.value:e(b,{type:"danger",children:t.value})};return e(d,{children:F&&F.length?r(d,{children:[e(q,{onChange:T,items:F}),m&&!!m.length&&e(B,{...s,children:m.map((t,A)=>e("div",{children:e(B.Item,{label:L(A),children:P(t,A)})},t.field))})]}):e(w,{image:w.PRESENTED_IMAGE_SIMPLE})})},Ee=({formInfo:u})=>{const{before:s,after:a}=u,l=(F,g)=>s[F]===a[F]?e(f.Text,{children:g||a[F]}):e(f.Text,{type:"danger",children:g||a[F]});return r(d,{children:[r(n,{title:"\u5355\u4F4D\u673A\u6784\u57FA\u672C\u4FE1\u606F",bordered:!0,column:2,style:{marginBottom:20},children:[e(n.Item,{label:l("companyName","\u5355\u4F4D\u540D\u79F0\uFF1A"),children:a.companyName?l("companyName"):"-"}),e(n.Item,{label:l("companyShortName","\u5355\u4F4D\u7B80\u79F0\uFF1A"),children:a.companyShortName?l("companyShortName"):"-"}),e(n.Item,{label:l("certificateNum","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\uFF1A"),children:a.certificateNum?l("certificateNum"):"-"}),e(n.Item,{label:l("certificatePhoto","\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66\uFF1A"),children:a.certificatePhoto?e("div",{className:`${I["img-wrap"]} ${s.certificatePhoto!==a.certificatePhoto&&I.different}`,children:e(j,{width:80,src:`data:image/png;base64,${a.certificatePhoto}`,fallback:"data:image/png;base64,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"})}):r(d,{children:[e(ae,{style:{marginRight:4}}),"\u672A\u4E0A\u4F20"]})}),e(n.Item,{label:l("areaCode","\u63A5\u5165\u5730\u533A\uFF1A"),children:a.areaCode?l("areaCode"):"-"})]}),r(n,{title:"\u5355\u4F4D\u7BA1\u7406\u5458\u4FE1\u606F",bordered:!0,column:2,children:[e(n.Item,{label:l("adminName","\u7BA1\u7406\u5458\u59D3\u540D\uFF1A"),children:a.adminName?l("adminName"):"-"}),e(n.Item,{label:"\u7BA1\u7406\u5458\u8D26\u53F7\uFF1A",children:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).accountNumber:"-"}),e(n.Item,{label:l("adminPhone","\u7BA1\u7406\u5458\u624B\u673A\u53F7\uFF1A"),children:a.adminPhone?l("adminPhone"):"-"}),e(n.Item,{label:l("adminEmail","\u7BA1\u7406\u5458\u90AE\u7BB1\uFF1A"),children:a.adminEmail?l("adminEmail"):"-"})]})]})},Fe=({applyKey:u,info:s})=>r(d,{children:[["ACCESS_CAPABILITY","PROD_CAPABILITY"].includes(u)&&e("div",{className:I.container,children:e(le,{formList:s.formList})}),["APPLY_FILE_CAPABILITY"].includes(u)&&e("div",{className:I.container,children:e(ie,{formInfo:s})}),["DELAY_CAPABILITY"].includes(u)&&e("div",{className:I.container,children:e(oe,{formInfo:s})}),["ADD_NUM_APPLICATION"].includes(u)&&e(d,{children:e(n,{title:s.apiName,bordered:!0,column:2,children:r(n.Item,{label:"\u589E\u52A0\u7528\u91CF",children:[s.num,"\u6B21"]})})}),["STOP_APPLICATION","START_APPLICATION"].includes(u)&&e(d,{children:e(n,{title:s.apiName,bordered:!0,column:2,children:e(n.Item,{label:u==="STOP_APPLICATION"?"\u505C\u7528\u539F\u56E0":"\u542F\u7528\u539F\u56E0",children:s.describe})})}),["CAPABILITY_UPDATE"].includes(u)&&e(me,{formInfo:s}),["UPDATE_COMPANY_INFO"].includes(u)&&e("div",{className:I.container,children:e(Ee,{formInfo:s})})]}),Y="data:image/png;base64,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",ge="_flex_dly6u_8",J={"user-item":"_user-item_dly6u_1",flex:ge,"sign-list-wrap":"_sign-list-wrap_dly6u_14"},he=({list:u})=>{const{themeStore:s}=W(),a=s.antdThemeColor;return e(d,{children:u.map(l=>r(X.Fragment,{children:[r("div",{className:J["user-item"],children:[r("p",{className:J.flex,children:[e("img",{src:Y,style:{marginRight:10}}),l.nickName,l.isPassUser&&(l.passState?e(_,{style:{color:"#FF3B30",marginLeft:4}}):e(V,{style:{color:a,marginLeft:4}}))]}),r(K,{children:[l.completeTime&&e(f.Text,{type:"secondary",children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][l.passState]}),l.completeTime]})]}),!!l.signList.length&&e("div",{className:J["sign-list-wrap"],children:l.signList.map((F,g)=>r("p",{className:J.flex,children:[e("img",{src:Y,style:{marginRight:10}}),F.name,!F.isPass&&e(V,{style:{color:a,marginLeft:4}})]},g))})]},l.id))})},Be=({item:u})=>{const s=![0,1].includes(u.isPass)||!u.isPass&&u.isLastNode;return r("div",{style:{fontWeight:"bold"},children:[u.name,"\uFF08",u.userCount,"\uFF09",e(f.Text,{strong:!0,style:{fontSize:14,color:["blue","gray","red","orange"][u.isPass]},children:["\u5DF2\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u672A\u901A\u8FC7","\u64A4\u56DE"][u.isPass]}),s&&e(x,{style:{marginLeft:8,fontWeight:"normal"},children:"\u5DF2\u7ED3\u675F"})]})},Re=({instanceId:u,open:s,setOpen:a,callback:l})=>{const{dictionaryStore:F}=re(),[g,m]=C.exports.useState(),[N,Q]=C.exports.useState(0),[y,T]=C.exports.useState(),[L,p]=C.exports.useState(),[P,t]=C.exports.useState(),A=(o,c)=>[{title:e("p",{style:{fontWeight:"bold",color:"#1e2636"},children:c?"\u5BA1\u6279\u7ED3\u675F\u6284\u9001":"\u63D0\u4EA4\u5BA1\u6279\u6284\u9001"}),status:"process",description:e(d,{children:o.map(E=>e(d,{children:r("p",{className:ne.flex,children:[e("img",{src:Y,style:{marginRight:10}}),E.name]})}))})}];C.exports.useEffect(()=>{!u||(async()=>{const{data:o}=await $({instanceId:u});if(!o)return;m(o);const{nodes:c,startCopyList:E,endCopyList:h}=o,R=c.map((D,G)=>{const H=G===c.length-1;return{title:e(Be,{item:{...D,isLastNode:H}}),description:e(he,{list:D.sysUsers})}}),Z=c.findIndex(D=>D.isPass);Q(Z),T(R),p(A(E,0)),t(A(h,1))})()},[u]);const i=()=>{l(),a(!1)};return e(ee,{title:"\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5",centered:!0,open:s,onCancel:i,width:840,footer:[e(ue,{onClick:()=>i(),children:"\u5173\u95ED"},"cancel")],children:r("div",{className:"modal-content",children:[e("div",{className:"title",children:"\u5BA1\u6279\u5355\u4FE1\u606F"}),g&&e(se,{info:g}),g&&r(d,{children:[e("div",{className:"title",children:F.processKeyListMap[g.key]}),e(Fe,{applyKey:g.key,info:g.info})]}),e("div",{className:"title",children:"\u5BA1\u6279\u8FDB\u5EA6"}),e(v,{direction:"vertical",items:L}),e(v,{direction:"vertical",current:N,items:y}),e(v,{direction:"vertical",items:P})]})})};export{Re as default};
