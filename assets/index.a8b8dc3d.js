import{j as e,F as g,a as r,r as C,H,b6 as B,a7 as M,E as U,I as x,T as S,m as le,R as z,C as J,aK as K,bq as j,N as Y,J as Z,az as ae,aH as O,br as te,M as ue,B as re}from"./index.adc364ef.js";import{D as d}from"./index.c34794ff.js";import{T as q}from"./index.8deae0dd.js";import{T as G}from"./Table.04b49b5b.js";import{d as ne}from"./myApp.1769575d.js";import{E as oe}from"./ExclamationCircleOutlined.b2c9139d.js";import{u as se}from"./index.6c7b9695.js";import{S as ie}from"./index.a7c64556.js";const ce="_flex_i9hkx_1",de="_uncopy_i9hkx_17",me="_approve_i9hkx_21",k={flex:ce,"user-item":"_user-item_i9hkx_10",uncopy:de,approve:me},Ee=({info:A})=>e(g,{children:A&&r(d,{bordered:!0,className:"tc",column:2,children:[e(d.Item,{label:"\u5BA1\u6279\u72B6\u6001\uFF1A",children:e(q,{color:["success","processing","error","default"][A.state],children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][A.state]||"-"})}),e(d.Item,{label:"\u6700\u8FD1\u5BA1\u6279\u65F6\u95F4\uFF1A",children:A.modTime||"-"}),e(d.Item,{label:"\u5BA1\u6279\u5355\u53F7\uFF1A",children:A.processInstanceId||"-"}),e(d.Item,{label:"\u7533\u8BF7\u65F6\u95F4\uFF1A",children:A.addTime||"-"}),e(d.Item,{label:"\u7533\u8BF7\u5355\u4F4D\uFF1A",children:A.companyName||"-"}),e(d.Item,{label:"\u5355\u4F4D\u7BA1\u7406\u5458\uFF1A",children:A.adminName||"-"}),e(d.Item,{label:"\u5BA1\u6279\u5355\u7C7B\u578B\uFF1A",children:A.processName||"-"}),e(d.Item,{label:"\u5E94\u7528\u670D\u52A1\u540D\u79F0\uFF1A",children:A.unifyName||"-"})]})}),ge=({formList:A})=>{const s={labelCol:{span:4},wrapperCol:{span:12}},[l,a]=C.exports.useState(),[E,F]=C.exports.useState();C.exports.useEffect(()=>{const u=A.map(o=>({label:o.formName,key:o.formId.toString()}));a(u),F([...A[0].defaultFormList,...A[0].form||[]])},[A]);const h=u=>{const o=A.find(I=>I.formId===+u);if(!o)return;const N=l==null?void 0:l.findIndex(I=>I.key===u);F(N?o.form:[...o.defaultFormList,...o.form||[]])},b=u=>{if(u.type==="imageUpload")return e(g,{children:u.labelValue.map(o=>e("div",{style:{marginRight:10,display:"inline-block "},children:e(x,{width:200,height:200,src:o.url})},o.uid))});if(u.type==="fileUpload")return e(g,{children:u.labelValue.map(o=>e(S.Link,{href:o.url,target:"_blank",children:o.name},o.uid))});if(u.type==="table"){const o=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}];return e(G,{rowKey:"label",bordered:!0,dataSource:u.labelValue,columns:o,pagination:!1})}return u.labelValue};return e(g,{children:l&&l.length?r(g,{children:[e(H,{onChange:h,items:l}),E&&!!E.length&&e(B,{...s,children:E.map(u=>e(M.Fragment,{children:e(B.Item,{label:u.cnName,children:b(u)})},u.field))})]}):e(U,{image:U.PRESENTED_IMAGE_SIMPLE})})},{Link:P}=S,Fe=({formInfo:A})=>{const s={labelCol:{span:8},wrapperCol:{span:16}},[l,a]=le.useMessage(),[E,F]=C.exports.useState(!1),h=(u,o)=>{const N=/\.png|\.jpg/;if(u.includes(".pdf")||N.test(o))return window.open(o);l.info("\u6682\u4E0D\u652F\u6301\u9884\u89C8\u8BE5\u683C\u5F0F\u6587\u4EF6")},b=async(u,o)=>{if(E)return l.info("\u8BF7\u52FF\u9891\u7E41\u8BF7\u6C42");F(!0);try{const N=await ne({url:o,fileName:u}),I=new Blob([N],{type:"application/pdf"}),f=URL.createObjectURL(I),y=document.createElement("a");y.href=f,y.download=u,document.body.appendChild(y),y.click(),URL.revokeObjectURL(f),l.success("\u5DF2\u6210\u529F\u4E0B\u8F7D\u6587\u4EF6")}catch(N){console.log(N)}finally{setTimeout(()=>{F(!1)},3e3)}};return r(g,{children:[a,r(B,{name:"uploadFormInfo",...s,children:[e(B.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",required:!0,children:r(z,{children:[e(J,{span:18,children:A.applyFileName}),e(J,{span:6,className:"tr",children:r(K,{children:[r(P,{onClick:()=>h(A.applyFileName,A.applyFile),children:[e(j,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(P,{style:{cursor:E?"no-drop":"pointer"},onClick:()=>b(A.applyFileName,A.applyFile),children:[e(Y,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})}),e(B.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",required:!0,style:{marginBottom:0},children:r(z,{children:[e(J,{span:18,children:A.applyLetterName}),e(J,{span:6,className:"tr",children:r(K,{children:[r(P,{onClick:()=>h(A.applyLetterName,A.applyLetter),children:[e(j,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(P,{style:{cursor:E?"no-drop":"pointer"},onClick:()=>b(A.applyLetter,A.applyLetterName),children:[e(Y,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})})]})]})},he=({formInfo:A})=>r(B,{name:"uploadFormInfo",...{labelCol:{span:6},wrapperCol:{span:12}},children:[e(B.Item,{label:"\u63A5\u5165\u5E94\u7528\u540D\u79F0",required:!0,children:A.capabilityName}),e(B.Item,{label:"\u57FA\u7840\u670D\u52A1\u63A5\u5165\u65F6\u95F4",children:A.addTime}),e(B.Item,{label:"\u6709\u6548\u671F\u6B62",children:A.expireTime}),e(B.Item,{label:"\u662F\u5426\u5EF6\u957F\u6709\u6548\u671F",required:!0,children:["\u5426","\u662F"][A.type]}),e(B.Item,{label:"\u5EF6\u957F\u6709\u6548\u671F\u81F3",children:A.newExpireTime}),e(B.Item,{label:"\u5907\u6CE8\u8BF4\u660E",children:A.describe}),e(B.Item,{label:"\u63D0\u4EA4\u7533\u8BF7\u5EF6\u671F\u65F6\u95F4",children:A.applyTime})]}),pe="_container_1m8mk_1",Qe="_different_1m8mk_14",D={container:pe,"img-wrap":"_img-wrap_1m8mk_7",different:Qe},{Text:T}=S,Be=({formInfo:A})=>{const s={labelCol:{span:4},wrapperCol:{span:12}},{formList:l,oldFormList:a}=A,[E,F]=C.exports.useState(),[h,b]=C.exports.useState(),[u,o]=C.exports.useState();C.exports.useEffect(()=>{const t=l.map(n=>({label:n.formName,key:n.formId.toString()}));F(t),b([...l[0].defaultFormList,...l[0].form||[]]),o([...a[0].defaultFormList,...a[0].form||[]])},[l]);const N=t=>{const n=l.findIndex(m=>m.formId===+t);n!==-1&&(n?(b(l[n].form),o(a[n].form)):(b([...l[n].defaultFormList,...l[n].form||[]]),o([...a[0].defaultFormList,...a[0].form||[]])))},I=t=>{if(!h||!u)return;const{type:n,cnName:m}=h[t];if(["table"].includes(n)){const i=h[t].labelValue,c=u[t].labelValue;let p=!1;for(let Q=0;Q<i.length;Q++)if(JSON.stringify(i[Q])!==JSON.stringify(c[Q])){p=!0;break}return p?e(T,{type:"danger",children:m}):e(g,{children:m})}else if(["imageUpload","fileUpload"].includes(n)){const i=h[t].labelValue,c=u[t].labelValue;let p=!1;if(i.length!==c.length)p=!0;else for(let Q=0;Q<i.length;Q++)if(i[Q].uid!==c[Q].uid){p=!0;break}return p?e(T,{type:"danger",children:m}):e(g,{children:m})}else return h[t].labelValue===u[t].labelValue?e(g,{children:m}):e(T,{type:"danger",children:m})},f=(t,n)=>{if(!h||!u)return;const{type:m}=h[t];if(["table"].includes(m)){const i=h[t].labelValue,c=u[t].labelValue;return i[n].value===c[n].value}else if(["imageUpload","fileUpload"].includes(m)){const i=h[t].labelValue,c=u[t].labelValue;let p=!1;if(i[n]){const{uid:Q}=i[n];p=c.some(R=>R.uid===Q)}return p}return h[t].labelValue===u[t].labelValue},y=(t,n)=>{if(t.type==="imageUpload")return e(g,{children:t.labelValue.map((m,i)=>e("div",{className:`${D["img-wrap"]} ${!f(n,i)&&D.different}
              `,children:e(x,{width:160,height:160,src:m.url})},m.uid))});if(t.type==="fileUpload")return e(g,{children:t.labelValue.map((m,i)=>e(S.Link,{href:m.url,target:"_blank",style:{color:f(n,i)?"#1668dc":"#f00"},children:m.name},m.uid))});if(t.type==="table"){const m=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}],i=t.labelValue.map((c,p)=>({index:p,label:f(n,p)?c.label:e(T,{type:"danger",children:c.label}),value:f(n,p)?c.value:e(T,{type:"danger",children:c.value})}));return e(G,{rowKey:"index",bordered:!0,dataSource:i,columns:m,pagination:!1})}return f(n)?t.value:e(T,{type:"danger",children:t.value})};return e(g,{children:E&&E.length?r(g,{children:[e(H,{onChange:N,items:E}),h&&!!h.length&&e(B,{...s,children:h.map((t,n)=>e("div",{children:e(B.Item,{label:I(n),children:y(t,n)})},t.field))})]}):e(U,{image:U.PRESENTED_IMAGE_SIMPLE})})},Ce=({formInfo:A})=>{const{before:s,after:l}=A,a=(E,F)=>s[E]===l[E]?e(S.Text,{children:F||l[E]}):e(S.Text,{type:"danger",children:F||l[E]});return r(g,{children:[r(d,{title:"\u5355\u4F4D\u673A\u6784\u57FA\u672C\u4FE1\u606F",bordered:!0,column:2,style:{marginBottom:20},children:[e(d.Item,{label:a("companyName","\u5355\u4F4D\u540D\u79F0\uFF1A"),children:l.companyName?a("companyName"):"-"}),e(d.Item,{label:a("companyShortName","\u5355\u4F4D\u7B80\u79F0\uFF1A"),children:l.companyShortName?a("companyShortName"):"-"}),e(d.Item,{label:a("certificateNum","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\uFF1A"),children:l.certificateNum?a("certificateNum"):"-"}),e(d.Item,{label:a("certificatePhoto","\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66\uFF1A"),children:l.certificatePhoto?e("div",{className:`${D["img-wrap"]} ${s.certificatePhoto!==l.certificatePhoto&&D.different}`,children:e(x,{width:80,src:`data:image/png;base64,${l.certificatePhoto}`,fallback:"data:image/png;base64,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"})}):r(g,{children:[e(oe,{style:{marginRight:4}}),"\u672A\u4E0A\u4F20"]})}),e(d.Item,{label:a("areaCode","\u63A5\u5165\u5730\u533A\uFF1A"),children:l.areaCode?a("areaCode"):"-"})]}),r(d,{title:"\u5355\u4F4D\u7BA1\u7406\u5458\u4FE1\u606F",bordered:!0,column:2,children:[e(d.Item,{label:a("adminName","\u7BA1\u7406\u5458\u59D3\u540D\uFF1A"),children:l.adminName?a("adminName"):"-"}),e(d.Item,{label:"\u7BA1\u7406\u5458\u8D26\u53F7\uFF1A",children:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).accountNumber:"-"}),e(d.Item,{label:a("adminPhone","\u7BA1\u7406\u5458\u624B\u673A\u53F7\uFF1A"),children:l.adminPhone?a("adminPhone"):"-"}),e(d.Item,{label:a("adminEmail","\u7BA1\u7406\u5458\u90AE\u7BB1\uFF1A"),children:l.adminEmail?a("adminEmail"):"-"})]})]})},Ne=({applyKey:A,info:s})=>r(g,{children:[["ACCESS_CAPABILITY","PROD_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(ge,{formList:s.formList})}),["APPLY_FILE_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(Fe,{formInfo:s})}),["DELAY_CAPABILITY"].includes(A)&&e("div",{className:D.container,children:e(he,{formInfo:s})}),["ADD_NUM_APPLICATION"].includes(A)&&e(g,{children:e(d,{title:s.apiName,bordered:!0,column:2,children:r(d.Item,{label:"\u589E\u52A0\u7528\u91CF",children:[s.num,"\u6B21"]})})}),["STOP_APPLICATION","START_APPLICATION"].includes(A)&&e(g,{children:e(d,{title:s.apiName,bordered:!0,column:2,children:e(d.Item,{label:A==="STOP_APPLICATION"?"\u505C\u7528\u539F\u56E0":"\u542F\u7528\u539F\u56E0",children:s.describe})})}),["CAPABILITY_UPDATE"].includes(A)&&e(Be,{formInfo:s}),["UPDATE_COMPANY_INFO"].includes(A)&&e("div",{className:D.container,children:e(Ce,{formInfo:s})})]}),V="data:image/png;base64,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",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADkUlEQVRYCcVXTUgVURT+7rw/TfMZWYaJGGSUkotIKhQygqKEZy1cRPuCoAhpF7ToB1pEi6SCNkEgQVLajwVthIoS3GVPqERNxZ9n4csS/3rvds7VGWee7zkz/uDAMPfn3O8795xzzz0j4PApqQn7x4U8JCFDkCiGkHlSijxeLoQcgBQDEOgQEC8ypGgJN5RMO4EWdkKFNeEtEvErBH5aSpllJ8/zQogxUrJeQLva01AytNialApsP/89MDM8dZnIawksYzGQlHMC46TEbV9u4EZnXdFUMrmkCqhdi1ijlNifbJHbMSHQKqTnZDJrLFBg26n20tg/2Uwk+W6JbOT7vfAd72rY1W6WsyjAO48j1rYK5DpnvwZPmdkSmj7DPpdk9lUkZ6p85mAunddQQAXcCvlcB0/25bhiLn1OuUCZXsQ6lxztOprTL50OTXq2syu8vEad86UeNRNpwC9weM96VFdkU9oAztzqNc2amsSlOIFzgjPcXxEfcZpkTDCq6SEnVpRmKtKjZVnITPeo8Zv1Q7j/fCRR3OhzssqU2iavSq8OM5yxmhp7d65DdXk2qg4EsTFLGdI8jebW35Z+Yoc3zNxeldsTZ1P0iwvTECLSUHkQW3P8KaSA9q4J9A7bXwXM7aUAKE6JNDdxNpSDmsoNKMpPSypKu8GvsRhygrOWsNu9AULcGt9qxkCKxuifGAJ+48RapCan42j6ECU3zPqeJ1/bmN8AIG5Nv1KNwSSNJy2jOHjhKy7W9eFb36QhEYnO4PqjQRzbF+QbUI1/6Z7AjyF787Mwcy+MHgPe2ojHgcb3UfUeoWg/QUft4ZufuFdbgDSTdZo/LR58ZlRSWXq5mCAX7jBP2LXfto2B3weXCrA522cRd2x+XiXkoKYqGQuE887Lj9bdhnsm0OPQ/IqFqigKQnQ4p7RKviJzdw3M1xluzK+QiFvjGs4K67xHrsPdpoixwJX5aRVza1xAqhrOgHHXaHwXRV9kGh1k/u5BZ9HPDMzJ3JqqXqmAdEc7Lx2j03HnaQTPSBFXD3Ey95pfxyq98b3M1aurHSxDmLn0sszIr1w6c/W6DFxHS5mDuXTh2fw511vTopR1YLN4vKKKmv1zOq3kR5Xluul1YMMF+kD3492fuXReSXcwFmMm/hMw5wIFeJC19OWmVwqhXaNsMc5jS3r414wwGCtx5zqeJQb0QfNX/aatxc+pWQlur9bv+X+pp3qmDVM0FgAAAABJRU5ErkJggg==",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADTklEQVRYCcVXzU9TQRCffX0t1BIUSj8FCYZyKIabxngxHLxoQuLZ/8KriQcTr/4XnkmaeDNpwonoSbF4KOFDoO0rcGltH6WUdWZf99Hmvbb7SCuTNG87OzO/2dmd2VkGipTL5QIF42wVgK8BsDRwSALjSaHOWQEYFHBuG+cyyVg4u7y8fKFimg0Syma/xS/5+XvO4Q0CTA6St+ZZhTH4rLPxD6urT0r9dHo6kM/nx/YOi++A87doINTPSJ+5GjD2aWEu8TGVSjXc5FwdsFZtruOqn7opeeVhNDZ1FnztFg2HA183NlauLvkX3ONZr0B95RkcMZ//5Yvnz7Y65bocoJU3ufl96OASEZ3ws+Djzkhoco72/JKb6yMDJyCMKmEQlsS1HaADN6w9l8bdvoQhDnd7UmyBCP2VuYO8m552N6x+vJpfCy7SVogIUJ7/R3ByLNTGBEYV7rh0dqJeZHovTNM0mAlPQyIeFUI/trAw9iRWuR8PR/R2eVWscE5rmOMwPTUF8VgUopEw6LouhPI7u07hLg6fJGyUptrune7dnRSgsegMBAIBhwHj5NTBczL4GjqAFwvmhwpNTIQggSuNxSIQHB/vqVKpVsE0z3vOX0+wtI7Y1o12zXWM5h/MQjIRh4nQHcccMTjmVrPZtCNhlFVWT4qQ1Owr1dW0xSTjPq2raNrSrVYLSkYZ/H6/zTPKeKZVCK9z68QMEC4UDaAfHbSF+TmgrSBqNC5gd/8AlhYf4qVnOVip/lUMP1lgHLcAmwngS/R3ENFK6ReZCYtU+3N4DCuP0uDz+WxV5dWTBocibgF1Mt7o5PQMfv76DXQ2xsa6M6CsGn6CRGyshNRG3YxKRvdeVzH8daXTL/H4NjrAMvKv1y+Fu1av22qewi+0WEajBhKdqNhWPA729g9tDeX0s8ArhK1R90oNpG3F46BkGOLUW+E3lbUJk7DFbUjdK2rWlLU7BLEGiVQslowO7sBhrY0JwgHRImH3OlCthwDViANMSWVCLNmWCQdIkVpnDMumspEbChIGYUl12wHq26l1xtw8kpND/6Jtwuh8I9gOEJhokXT2aiROIDi15TL0cnGuN8ytPkykZ7f6NJNO0NeKxi08TjudoPGonuf/AJC3ZTjRyK9QAAAAAElFTkSuQmCC",Ie="_flex_dly6u_8",w={"user-item":"_user-item_dly6u_1",flex:Ie,"sign-list-wrap":"_sign-list-wrap_dly6u_14"},ye=({list:A})=>{const{themeStore:s}=Z(),l=s.antdThemeColor;return e(g,{children:A.map(a=>r(M.Fragment,{children:[r("div",{className:w["user-item"],children:[r("p",{className:w.flex,children:[e("img",{src:V,style:{marginRight:10}}),e("span",{className:"font-primary-color",children:a.nickName}),a.isPassUser&&(a.passState?e(ae,{style:{color:"#FF3B30",marginLeft:4}}):e(O,{style:{color:l,marginLeft:4}}))]}),r(K,{children:[a.completeTime&&e(S.Text,{type:"secondary",children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][a.passState]}),a.completeTime]})]}),!!a.signList.length&&e("div",{className:w["sign-list-wrap"],children:a.signList.map((E,F)=>r("p",{className:w.flex,children:[e("img",{src:V,style:{marginRight:10}}),E.name,!E.isPass&&e(O,{style:{color:l,marginLeft:4}})]},F))})]},a.id))})},Se=({item:A})=>{const{themeStore:s}=Z(),l=s.antdThemeColor,a=![0,1].includes(A.isPass)||!A.isPass&&A.isLastNode;return r("div",{className:"font-primary-color",style:{fontWeight:"bold"},children:[A.name,"\uFF08",A.userCount,"\u4EBA\uFF09",e(S.Text,{strong:!0,style:{fontSize:14,color:[l,"gray","red","orange"][A.isPass]},children:["\u5DF2\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u672A\u901A\u8FC7","\u64A4\u56DE"][A.isPass]}),a&&e(q,{style:{marginLeft:8,fontWeight:"normal"},children:"\u5DF2\u7ED3\u675F"})]})},De=({instanceId:A,open:s,setOpen:l,callback:a})=>{const{dictionaryStore:E}=se(),[F,h]=C.exports.useState(),[b,u]=C.exports.useState(0),[o,N]=C.exports.useState(),[I,f]=C.exports.useState(),y=(i,c)=>i.length?[{title:r("p",{style:{fontWeight:"bold",color:"#1e2636"},children:["\u6284\u9001\u4EBA\uFF08",i.length,"\u4EBA\uFF09",e("span",{className:c?"primary-color":k.uncopy,style:{fontSize:14},children:c?"\u5DF2\u6284\u9001":"\u672A\u6284\u9001"})]}),icon:e("img",{src:c?be:fe}),description:e(g,{children:i.map((p,Q)=>e(M.Fragment,{children:r("div",{className:k["user-item"],children:[r("p",{className:k.flex,children:[e("img",{src:V,style:{marginRight:10}}),e("span",{className:"font-primary-color",children:p.name})]}),r(K,{children:[e(S.Text,{type:"secondary",children:c?"\u5DF2\u6284\u9001":"\u672A\u6284\u9001"}),c&&p.completeTime]})]})},Q))})}]:[],[t,n]=C.exports.useState(-1);C.exports.useEffect(()=>{!A||(async()=>{const{data:i}=await te({instanceId:A});if(!i)return;h(i);const{nodes:c,isStartCopy:p,isEndCopy:Q,startCopyList:R,endCopyList:W}=i,X=c.map((L,ee)=>{const Ae=ee===c.length-1;return{title:e(Se,{item:{...L,isLastNode:Ae}}),description:e(ye,{list:L.sysUsers})}});R.length||n(0);const v=c.findIndex(L=>!L.isPass);u(v+1);const _=v!==-1?c[v]:c[0],{isPass:$}=_;N($===1?"process":"error"),f([...y(R,p),...X,...y(W,Q)])})()},[A]);const m=()=>{a&&a(),l(!1)};return e(ue,{title:"\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5",centered:!0,open:s,onCancel:m,width:840,footer:[e(re,{onClick:()=>m(),children:"\u5173\u95ED"},"cancel")],children:r("div",{className:`modal-content ${k["modal-content"]}`,children:[e("div",{className:"title",children:"\u5BA1\u6279\u5355\u4FE1\u606F"}),F&&e(Ee,{info:F}),F&&r(g,{children:[e("div",{className:"title",children:E.processKeyListMap[F.key]}),e(Ne,{applyKey:F.key,info:F.info})]}),e("div",{className:"title",children:"\u5BA1\u6279\u8FDB\u5EA6"}),e(ie,{className:k.approve,direction:"vertical",initial:t,current:b,status:o,items:I})]})})},Ke=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{De as C,ge as D,Ke as i};
