import{j as e,F as m,a as r,r as b,H as O,b6 as Q,a7 as v,E as P,I as V,T as S,m as W,R as M,C as R,aK as w,bq as z,N as j,J as X,az as _,aH as x,br as $,M as ee,B as Ae}from"./index.dd71fd61.js";import{D as c}from"./index.322eefd7.js";import{T as H}from"./index.46d79bef.js";import{T as Z}from"./Table.3f43c7d0.js";import{d as le}from"./myApp.fab43f91.js";import{E as ue}from"./ExclamationCircleOutlined.fc9532b8.js";import{u as ae}from"./index.f6e9b1d8.js";import{S as te}from"./index.90b111bc.js";const re="_flex_cv94f_1",Y={flex:re,"user-item":"_user-item_cv94f_10"},ne=({info:A})=>e(m,{children:A&&r(c,{bordered:!0,className:"tc",column:2,children:[e(c.Item,{label:"\u5BA1\u6279\u72B6\u6001\uFF1A",children:e(H,{color:["success","processing","error","default"][A.state],children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][A.state]||"-"})}),e(c.Item,{label:"\u6700\u8FD1\u5BA1\u6279\u65F6\u95F4\uFF1A",children:A.modTime||"-"}),e(c.Item,{label:"\u5BA1\u6279\u5355\u53F7\uFF1A",children:A.processInstanceId||"-"}),e(c.Item,{label:"\u7533\u8BF7\u65F6\u95F4\uFF1A",children:A.addTime||"-"}),e(c.Item,{label:"\u7533\u8BF7\u5355\u4F4D\uFF1A",children:A.companyName||"-"}),e(c.Item,{label:"\u5355\u4F4D\u7BA1\u7406\u5458\uFF1A",children:A.adminName||"-"}),e(c.Item,{label:"\u5BA1\u6279\u5355\u7C7B\u578B\uFF1A",children:A.processName||"-"}),e(c.Item,{label:"\u5E94\u7528\u670D\u52A1\u540D\u79F0\uFF1A",children:A.unifyName||"-"})]})}),se=({formList:A})=>{const o={labelCol:{span:4},wrapperCol:{span:12}},[u,a]=b.exports.useState(),[d,E]=b.exports.useState();b.exports.useEffect(()=>{const t=A.map(s=>({label:s.formName,key:s.formId.toString()}));a(t),E([...A[0].defaultFormList,...A[0].form||[]])},[A]);const F=t=>{const s=A.find(y=>y.formId===+t);if(!s)return;const N=u==null?void 0:u.findIndex(y=>y.key===t);E(N?s.form:[...s.defaultFormList,...s.form||[]])},f=t=>{if(t.type==="imageUpload")return e(m,{children:t.labelValue.map(s=>e("div",{style:{marginRight:10,display:"inline-block "},children:e(V,{width:200,height:200,src:s.url})},s.uid))});if(t.type==="fileUpload")return e(m,{children:t.labelValue.map(s=>e(S.Link,{href:s.url,target:"_blank",children:s.name},s.uid))});if(t.type==="table"){const s=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}];return e(Z,{rowKey:"label",bordered:!0,dataSource:t.labelValue,columns:s,pagination:!1})}return t.labelValue};return e(m,{children:u&&u.length?r(m,{children:[e(O,{onChange:F,items:u}),d&&!!d.length&&e(Q,{...o,children:d.map(t=>e(v.Fragment,{children:t.cnName!=="\u63A5\u5165\u80FD\u529B\u6709\u6548\u671F\u6B62"&&e(Q.Item,{label:t.cnName,children:f(t)})},t.field))})]}):e(P,{image:P.PRESENTED_IMAGE_SIMPLE})})},{Link:L}=S,oe=({formInfo:A})=>{const o={labelCol:{span:8},wrapperCol:{span:16}},[u,a]=W.useMessage(),[d,E]=b.exports.useState(!1),F=(t,s)=>{const N=/\.png|\.jpg/;if(t.includes(".pdf")||N.test(s))return window.open(s);u.info("\u6682\u4E0D\u652F\u6301\u9884\u89C8\u8BE5\u683C\u5F0F\u6587\u4EF6")},f=async(t,s)=>{if(d)return u.info("\u8BF7\u52FF\u9891\u7E41\u8BF7\u6C42");E(!0);try{const N=await le({url:s,fileName:t}),y=new Blob([N],{type:"application/pdf"}),I=URL.createObjectURL(y),B=document.createElement("a");B.href=I,B.download=t,document.body.appendChild(B),B.click(),URL.revokeObjectURL(I),u.success("\u5DF2\u6210\u529F\u4E0B\u8F7D\u6587\u4EF6")}catch(N){console.log(N)}finally{setTimeout(()=>{E(!1)},3e3)}};return r(m,{children:[a,r(Q,{name:"uploadFormInfo",...o,children:[e(Q.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",required:!0,children:r(M,{children:[e(R,{span:18,children:A.applyFileName}),e(R,{span:6,className:"tr",children:r(w,{children:[r(L,{onClick:()=>F(A.applyFileName,A.applyFile),children:[e(z,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(L,{style:{cursor:d?"no-drop":"pointer"},onClick:()=>f(A.applyFileName,A.applyFile),children:[e(j,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})}),e(Q.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",required:!0,style:{marginBottom:0},children:r(M,{children:[e(R,{span:18,children:A.applyLetterName}),e(R,{span:6,className:"tr",children:r(w,{children:[r(L,{onClick:()=>F(A.applyLetterName,A.applyLetter),children:[e(z,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(L,{style:{cursor:d?"no-drop":"pointer"},onClick:()=>f(A.applyLetter,A.applyLetterName),children:[e(j,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})})]})]})},ie=({formInfo:A})=>r(Q,{name:"uploadFormInfo",...{labelCol:{span:6},wrapperCol:{span:12}},children:[e(Q.Item,{label:"\u63A5\u5165\u5E94\u7528\u540D\u79F0",required:!0,children:A.capabilityName}),e(Q.Item,{label:"\u57FA\u7840\u670D\u52A1\u63A5\u5165\u65F6\u95F4",children:A.addTime}),e(Q.Item,{label:"\u6709\u6548\u671F\u6B62",children:A.expireTime}),e(Q.Item,{label:"\u662F\u5426\u5EF6\u957F\u6709\u6548\u671F",required:!0,children:["\u5426","\u662F"][A.type]}),e(Q.Item,{label:"\u5EF6\u957F\u6709\u6548\u671F\u81F3",children:A.newExpireTime}),e(Q.Item,{label:"\u5907\u6CE8\u8BF4\u660E",children:A.describe}),e(Q.Item,{label:"\u63D0\u4EA4\u7533\u8BF7\u5EF6\u671F\u65F6\u95F4",children:A.applyTime})]}),ce="_container_1m8mk_1",de="_different_1m8mk_14",D={container:ce,"img-wrap":"_img-wrap_1m8mk_7",different:de},{Text:T}=S,me=({formInfo:A})=>{const o={labelCol:{span:4},wrapperCol:{span:12}},{formList:u,oldFormList:a}=A,[d,E]=b.exports.useState(),[F,f]=b.exports.useState(),[t,s]=b.exports.useState();b.exports.useEffect(()=>{const l=u.map(n=>({label:n.formName,key:n.formId.toString()}));E(l),f([...u[0].defaultFormList,...u[0].form||[]]),s([...a[0].defaultFormList,...a[0].form||[]])},[u]);const N=l=>{const n=u.findIndex(i=>i.formId===+l);n!==-1&&(n?(f(u[n].form),s(a[n].form)):(f([...u[n].defaultFormList,...u[n].form||[]]),s([...a[0].defaultFormList,...a[0].form||[]])))},y=l=>{if(!F||!t)return;const{type:n,cnName:i}=F[l];if(["table"].includes(n)){const g=F[l].labelValue,h=t[l].labelValue;let p=!1;for(let C=0;C<g.length;C++)if(JSON.stringify(g[C])!==JSON.stringify(h[C])){p=!0;break}return p?e(T,{type:"danger",children:i}):e(m,{children:i})}else if(["imageUpload","fileUpload"].includes(n)){const g=F[l].labelValue,h=t[l].labelValue;let p=!1;if(g.length!==h.length)p=!0;else for(let C=0;C<g.length;C++)if(g[C].uid!==h[C].uid){p=!0;break}return p?e(T,{type:"danger",children:i}):e(m,{children:i})}else return F[l].labelValue===t[l].labelValue?e(m,{children:i}):e(T,{type:"danger",children:i})},I=(l,n)=>{if(!F||!t)return;const{type:i}=F[l];if(["table"].includes(i)){const g=F[l].labelValue,h=t[l].labelValue;return g[n].value===h[n].value}else if(["imageUpload","fileUpload"].includes(i)){const g=F[l].labelValue,h=t[l].labelValue;let p=!1;if(g[n]){const{uid:C}=g[n];p=h.some(U=>U.uid===C)}return p}return F[l].labelValue===t[l].labelValue},B=(l,n)=>{if(l.type==="imageUpload")return e(m,{children:l.labelValue.map((i,g)=>e("div",{className:`${D["img-wrap"]} ${!I(n,g)&&D.different}
              `,children:e(V,{width:160,height:160,src:i.url})},i.uid))});if(l.type==="fileUpload")return e(m,{children:l.labelValue.map((i,g)=>e(S.Link,{href:i.url,target:"_blank",style:{color:I(n,g)?"#1668dc":"#f00"},children:i.name},i.uid))});if(l.type==="table"){const i=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}],g=l.labelValue.map((h,p)=>({index:p,label:I(n,p)?h.label:e(T,{type:"danger",children:h.label}),value:I(n,p)?h.value:e(T,{type:"danger",children:h.value})}));return e(Z,{rowKey:"index",bordered:!0,dataSource:g,columns:i,pagination:!1})}return I(n)?l.value:e(T,{type:"danger",children:l.value})};return e(m,{children:d&&d.length?r(m,{children:[e(O,{onChange:N,items:d}),F&&!!F.length&&e(Q,{...o,children:F.map((l,n)=>e("div",{children:e(Q.Item,{label:y(n),children:B(l,n)})},l.field))})]}):e(P,{image:P.PRESENTED_IMAGE_SIMPLE})})},Ee=({formInfo:A})=>{const{before:o,after:u}=A,a=(d,E)=>o[d]===u[d]?e(S.Text,{children:E||u[d]}):e(S.Text,{type:"danger",children:E||u[d]});return r(m,{children:[r(c,{title:"\u5355\u4F4D\u673A\u6784\u57FA\u672C\u4FE1\u606F",bordered:!0,column:2,style:{marginBottom:20},children:[e(c.Item,{label:a("companyName","\u5355\u4F4D\u540D\u79F0\uFF1A"),children:u.companyName?a("companyName"):"-"}),e(c.Item,{label:a("companyShortName","\u5355\u4F4D\u7B80\u79F0\uFF1A"),children:u.companyShortName?a("companyShortName"):"-"}),e(c.Item,{label:a("certificateNum","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\uFF1A"),children:u.certificateNum?a("certificateNum"):"-"}),e(c.Item,{label:a("certificatePhoto","\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66\uFF1A"),children:u.certificatePhoto?e("div",{className:`${D["img-wrap"]} ${o.certificatePhoto!==u.certificatePhoto&&D.different}`,children:e(V,{width:80,src:`data:image/png;base64,${u.certificatePhoto}`,fallback:"data:image/png;base64,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"})}):r(m,{children:[e(ue,{style:{marginRight:4}}),"\u672A\u4E0A\u4F20"]})}),e(c.Item,{label:a("areaCode","\u63A5\u5165\u5730\u533A\uFF1A"),children:u.areaCode?a("areaCode"):"-"})]}),r(c,{title:"\u5355\u4F4D\u7BA1\u7406\u5458\u4FE1\u606F",bordered:!0,column:2,children:[e(c.Item,{label:a("adminName","\u7BA1\u7406\u5458\u59D3\u540D\uFF1A"),children:u.adminName?a("adminName"):"-"}),e(c.Item,{label:"\u7BA1\u7406\u5458\u8D26\u53F7\uFF1A",children:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).accountNumber:"-"}),e(c.Item,{label:a("adminPhone","\u7BA1\u7406\u5458\u624B\u673A\u53F7\uFF1A"),children:u.adminPhone?a("adminPhone"):"-"}),e(c.Item,{label:a("adminEmail","\u7BA1\u7406\u5458\u90AE\u7BB1\uFF1A"),children:u.adminEmail?a("adminEmail"):"-"})]})]})},Fe=({applyKey:A,info:o})=>r(m,{children:[["ACCESS_CAPABILITY","PROD_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(se,{formList:o.formList})}),["APPLY_FILE_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(oe,{formInfo:o})}),["DELAY_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(ie,{formInfo:o})}),["ADD_NUM_APPLICATION"].includes(A)&&e(m,{children:e(c,{title:o.apiName,bordered:!0,column:2,children:r(c.Item,{label:"\u589E\u52A0\u7528\u91CF",children:[o.num,"\u6B21"]})})}),["STOP_APPLICATION","START_APPLICATION"].includes(A)&&e(m,{children:e(c,{title:o.apiName,bordered:!0,column:2,children:e(c.Item,{label:A==="STOP_APPLICATION"?"\u505C\u7528\u539F\u56E0":"\u542F\u7528\u539F\u56E0",children:o.describe})})}),["CAPABILITY_UPDATE"].includes(A)&&e(me,{formInfo:o}),["UPDATE_COMPANY_INFO"].includes(A)&&e("div",{className:D.container,children:e(Ee,{formInfo:o})})]}),K="data:image/png;base64,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",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADkUlEQVRYCcVXTUgVURT+7rw/TfMZWYaJGGSUkotIKhQygqKEZy1cRPuCoAhpF7ToB1pEi6SCNkEgQVLajwVthIoS3GVPqERNxZ9n4csS/3rvds7VGWee7zkz/uDAMPfn3O8795xzzz0j4PApqQn7x4U8JCFDkCiGkHlSijxeLoQcgBQDEOgQEC8ypGgJN5RMO4EWdkKFNeEtEvErBH5aSpllJ8/zQogxUrJeQLva01AytNialApsP/89MDM8dZnIawksYzGQlHMC46TEbV9u4EZnXdFUMrmkCqhdi1ijlNifbJHbMSHQKqTnZDJrLFBg26n20tg/2Uwk+W6JbOT7vfAd72rY1W6WsyjAO48j1rYK5DpnvwZPmdkSmj7DPpdk9lUkZ6p85mAunddQQAXcCvlcB0/25bhiLn1OuUCZXsQ6lxztOprTL50OTXq2syu8vEad86UeNRNpwC9weM96VFdkU9oAztzqNc2amsSlOIFzgjPcXxEfcZpkTDCq6SEnVpRmKtKjZVnITPeo8Zv1Q7j/fCRR3OhzssqU2iavSq8OM5yxmhp7d65DdXk2qg4EsTFLGdI8jebW35Z+Yoc3zNxeldsTZ1P0iwvTECLSUHkQW3P8KaSA9q4J9A7bXwXM7aUAKE6JNDdxNpSDmsoNKMpPSypKu8GvsRhygrOWsNu9AULcGt9qxkCKxuifGAJ+48RapCan42j6ECU3zPqeJ1/bmN8AIG5Nv1KNwSSNJy2jOHjhKy7W9eFb36QhEYnO4PqjQRzbF+QbUI1/6Z7AjyF787Mwcy+MHgPe2ojHgcb3UfUeoWg/QUft4ZufuFdbgDSTdZo/LR58ZlRSWXq5mCAX7jBP2LXfto2B3weXCrA522cRd2x+XiXkoKYqGQuE887Lj9bdhnsm0OPQ/IqFqigKQnQ4p7RKviJzdw3M1xluzK+QiFvjGs4K67xHrsPdpoixwJX5aRVza1xAqhrOgHHXaHwXRV9kGh1k/u5BZ9HPDMzJ3JqqXqmAdEc7Lx2j03HnaQTPSBFXD3Ey95pfxyq98b3M1aurHSxDmLn0sszIr1w6c/W6DFxHS5mDuXTh2fw511vTopR1YLN4vKKKmv1zOq3kR5Xluul1YMMF+kD3492fuXReSXcwFmMm/hMw5wIFeJC19OWmVwqhXaNsMc5jS3r414wwGCtx5zqeJQb0QfNX/aatxc+pWQlur9bv+X+pp3qmDVM0FgAAAABJRU5ErkJggg==",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADTklEQVRYCcVXzU9TQRCffX0t1BIUSj8FCYZyKIabxngxHLxoQuLZ/8KriQcTr/4XnkmaeDNpwonoSbF4KOFDoO0rcGltH6WUdWZf99Hmvbb7SCuTNG87OzO/2dmd2VkGipTL5QIF42wVgK8BsDRwSALjSaHOWQEYFHBuG+cyyVg4u7y8fKFimg0Syma/xS/5+XvO4Q0CTA6St+ZZhTH4rLPxD6urT0r9dHo6kM/nx/YOi++A87doINTPSJ+5GjD2aWEu8TGVSjXc5FwdsFZtruOqn7opeeVhNDZ1FnztFg2HA183NlauLvkX3ONZr0B95RkcMZ//5Yvnz7Y65bocoJU3ufl96OASEZ3ws+Djzkhoco72/JKb6yMDJyCMKmEQlsS1HaADN6w9l8bdvoQhDnd7UmyBCP2VuYO8m552N6x+vJpfCy7SVogIUJ7/R3ByLNTGBEYV7rh0dqJeZHovTNM0mAlPQyIeFUI/trAw9iRWuR8PR/R2eVWscE5rmOMwPTUF8VgUopEw6LouhPI7u07hLg6fJGyUptrune7dnRSgsegMBAIBhwHj5NTBczL4GjqAFwvmhwpNTIQggSuNxSIQHB/vqVKpVsE0z3vOX0+wtI7Y1o12zXWM5h/MQjIRh4nQHcccMTjmVrPZtCNhlFVWT4qQ1Owr1dW0xSTjPq2raNrSrVYLSkYZ/H6/zTPKeKZVCK9z68QMEC4UDaAfHbSF+TmgrSBqNC5gd/8AlhYf4qVnOVip/lUMP1lgHLcAmwngS/R3ENFK6ReZCYtU+3N4DCuP0uDz+WxV5dWTBocibgF1Mt7o5PQMfv76DXQ2xsa6M6CsGn6CRGyshNRG3YxKRvdeVzH8daXTL/H4NjrAMvKv1y+Fu1av22qewi+0WEajBhKdqNhWPA729g9tDeX0s8ArhK1R90oNpG3F46BkGOLUW+E3lbUJk7DFbUjdK2rWlLU7BLEGiVQslowO7sBhrY0JwgHRImH3OlCthwDViANMSWVCLNmWCQdIkVpnDMumspEbChIGYUl12wHq26l1xtw8kpND/6Jtwuh8I9gOEJhokXT2aiROIDi15TL0cnGuN8ytPkykZ7f6NJNO0NeKxi08TjudoPGonuf/AJC3ZTjRyK9QAAAAAElFTkSuQmCC",pe="_flex_dly6u_8",J={"user-item":"_user-item_dly6u_1",flex:pe,"sign-list-wrap":"_sign-list-wrap_dly6u_14"},Qe=({list:A})=>{const{themeStore:o}=X(),u=o.antdThemeColor;return e(m,{children:A.map(a=>r(v.Fragment,{children:[r("div",{className:J["user-item"],children:[r("p",{className:J.flex,children:[e("img",{src:K,style:{marginRight:10}}),a.nickName,a.isPassUser&&(a.passState?e(_,{style:{color:"#FF3B30",marginLeft:4}}):e(x,{style:{color:u,marginLeft:4}}))]}),r(w,{children:[a.completeTime&&e(S.Text,{type:"secondary",children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][a.passState]}),a.completeTime]})]}),!!a.signList.length&&e("div",{className:J["sign-list-wrap"],children:a.signList.map((d,E)=>r("p",{className:J.flex,children:[e("img",{src:K,style:{marginRight:10}}),d.name,!d.isPass&&e(x,{style:{color:u,marginLeft:4}})]},E))})]},a.id))})},Be=({item:A})=>{const o=![0,1].includes(A.isPass)||!A.isPass&&A.isLastNode;return r("div",{style:{fontWeight:"bold"},children:[A.name,"\uFF08",A.userCount,"\u4EBA\uFF09",e(S.Text,{strong:!0,style:{fontSize:14,color:["blue","gray","red","orange"][A.isPass]},children:["\u5DF2\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u672A\u901A\u8FC7","\u64A4\u56DE"][A.isPass]}),o&&e(H,{style:{marginLeft:8,fontWeight:"normal"},children:"\u5DF2\u7ED3\u675F"})]})},Ce=({instanceId:A,open:o,setOpen:u,callback:a})=>{const{dictionaryStore:d}=ae(),[E,F]=b.exports.useState(),[f,t]=b.exports.useState(0),[s,N]=b.exports.useState(),y=(B,l)=>[{title:r("p",{style:{fontWeight:"bold",color:"#1e2636"},children:["\u6284\u9001\u4EBA\uFF08",B.length,"\u4EBA\uFF09",e("span",{className:"primary-color",style:{fontSize:14},children:l?"\u5DF2\u6284\u9001":"\u672A\u6284\u9001"})]}),icon:e("img",{src:l?ge:he}),description:e(m,{children:B.map((n,i)=>e(v.Fragment,{children:r("div",{className:Y["user-item"],children:[r("p",{className:Y.flex,children:[e("img",{src:K,style:{marginRight:10}}),n.name]}),r(w,{children:[e(S.Text,{type:"secondary",children:l?"\u5DF2\u6284\u9001":"\u672A\u6284\u9001"}),l&&n.completeTime]})]})},i))})}];b.exports.useEffect(()=>{!A||(async()=>{const{data:B}=await $({instanceId:A});if(!B)return;F(B);const{nodes:l,state:n,isStartCopy:i,isEndCopy:g,startCopyList:h,endCopyList:p}=B,C=l.map((k,q)=>{const G=q===l.length-1;return{title:e(Be,{item:{...k,isLastNode:G}}),description:e(Qe,{list:k.sysUsers})}}),U=l.findIndex(k=>!k.isPass);t(U+1+(n!==1?1:0)),N([...y(h,i),...C,...y(p,g)])})()},[A]);const I=()=>{a&&a(),u(!1)};return e(ee,{title:"\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5",centered:!0,open:o,onCancel:I,width:840,footer:[e(Ae,{onClick:()=>I(),children:"\u5173\u95ED"},"cancel")],children:r("div",{className:"modal-content",children:[e("div",{className:"title",children:"\u5BA1\u6279\u5355\u4FE1\u606F"}),E&&e(ne,{info:E}),E&&r(m,{children:[e("div",{className:"title",children:d.processKeyListMap[E.key]}),e(Fe,{applyKey:E.key,info:E.info})]}),e("div",{className:"title",children:"\u5BA1\u6279\u8FDB\u5EA6"}),e(te,{direction:"vertical",initial:-1,current:f,items:s})]})})},ke=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Ce as C,se as D,ke as i};
