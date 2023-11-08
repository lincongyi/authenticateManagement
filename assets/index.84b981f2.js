import{j as e,F,a as r,m as W,r as C,b5 as p,R as K,C as k,b6 as U,bp as Y,N as z,T as N,H as X,E as j,I as x,J as _,a7 as Z,az as $,aH as M,bq as ee,M as le,B as te}from"./index.65cdaf36.js";import{D as n}from"./index.e534a19a.js";import{T as H}from"./index.cda7d415.js";import{D as ue}from"./index.c219c1d6.js";import{d as ae}from"./myApp.93b9a707.js";import{T as re}from"./Table.bf4f2a46.js";import{E as Ae}from"./ExclamationCircleOutlined.3d04ecbf.js";import{u as ne}from"./index.a6fb334c.js";import{S as v}from"./index.fb1093d0.js";import"./useBreakpoint.a11f41e8.js";import"./Pagination.95e64a5c.js";import"./index.01b7792a.js";import"./index.ffd1abac.js";const se="_flex_i2ws4_1",V={flex:se,"copy-icon":"_copy-icon_i2ws4_10"},oe=({info:l})=>e(F,{children:l&&r(n,{bordered:!0,className:"tc",column:2,children:[e(n.Item,{label:"\u5BA1\u6279\u72B6\u6001\uFF1A",children:e(H,{color:["success","processing","error","default"][l.state],children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][l.state]||"-"})}),e(n.Item,{label:"\u6700\u8FD1\u5BA1\u6279\u65F6\u95F4\uFF1A",children:l.modTime||"-"}),e(n.Item,{label:"\u5BA1\u6279\u5355\u53F7\uFF1A",children:l.processInstanceId||"-"}),e(n.Item,{label:"\u7533\u8BF7\u65F6\u95F4\uFF1A",children:l.addTime||"-"}),e(n.Item,{label:"\u7533\u8BF7\u5355\u4F4D\uFF1A",children:l.companyName||"-"}),e(n.Item,{label:"\u5355\u4F4D\u7BA1\u7406\u5458\uFF1A",children:l.adminName||"-"}),e(n.Item,{label:"\u5BA1\u6279\u5355\u7C7B\u578B\uFF1A",children:l.processName||"-"}),e(n.Item,{label:"\u5E94\u7528\u670D\u52A1\u540D\u79F0\uFF1A",children:l.unifyName||"-"})]})}),{Link:J}=N,ie=({formInfo:l})=>{const s={labelCol:{span:8},wrapperCol:{span:16}},[a,t]=W.useMessage(),[m,g]=C.exports.useState(!1),d=async(f,B)=>{if(m)return a.info("\u8BF7\u52FF\u9891\u7E41\u8BF7\u6C42");g(!0);try{const b=await ae({url:f,fileName:B}),S=new Blob([b],{type:"application/pdf"}),y=URL.createObjectURL(S),Q=document.createElement("a");Q.href=y,Q.download=B,document.body.appendChild(Q),Q.click(),URL.revokeObjectURL(y),a.success("\u5DF2\u6210\u529F\u4E0B\u8F7D\u6587\u4EF6")}catch(b){console.log(b)}finally{setTimeout(()=>{g(!1)},3e3)}};return r(F,{children:[t,r(p,{name:"uploadFormInfo",...s,children:[e(p.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u8868",required:!0,children:r(K,{children:[r(k,{span:18,children:["\u300A",l.applyFileName,"\u300B"]}),e(k,{span:6,className:"tr",children:r(U,{children:[r(J,{href:l.applyFile,target:"_blank",children:[e(Y,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(J,{style:{cursor:m?"no-drop":"pointer"},onClick:()=>d(l.applyFile,l.applyFileName),children:[e(z,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})}),e(p.Item,{label:"\uFF08\u9644\u5370\u7AE0\uFF09\u57FA\u7840\u80FD\u529B\u63A5\u5165\u7533\u8BF7\u51FD",required:!0,style:{marginBottom:0},children:r(K,{children:[r(k,{span:18,children:["\u300A",l.applyLetterName,"\u300B"]}),e(k,{span:6,className:"tr",children:r(U,{children:[r(J,{href:l.applyLetter,target:"_blank",children:[e(Y,{style:{marginRight:4}}),"\u9884\u89C8"]}),r(J,{style:{cursor:m?"no-drop":"pointer"},onClick:()=>d(l.applyLetter,l.applyLetterName),children:[e(z,{style:{marginRight:4}}),"\u4E0B\u8F7D"]})]})})]})})]})]})},ce=({formInfo:l})=>r(p,{name:"uploadFormInfo",...{labelCol:{span:6},wrapperCol:{span:12}},children:[e(p.Item,{label:"\u63A5\u5165\u5E94\u7528\u540D\u79F0",required:!0,children:l.capabilityName}),e(p.Item,{label:"\u57FA\u7840\u670D\u52A1\u63A5\u5165\u65F6\u95F4",children:l.addTime}),e(p.Item,{label:"\u6709\u6548\u671F\u6B62",children:l.expireTime}),e(p.Item,{label:"\u662F\u5426\u5EF6\u957F\u6709\u6548\u671F",required:!0,children:["\u5426","\u662F"][l.type]}),e(p.Item,{label:"\u5EF6\u957F\u6709\u6548\u671F\u81F3",children:l.newExpireTime}),e(p.Item,{label:"\u5907\u6CE8\u8BF4\u660E",children:l.describe}),e(p.Item,{label:"\u63D0\u4EA4\u7533\u8BF7\u5EF6\u671F\u65F6\u95F4",children:l.applyTime})]}),de="_container_1m8mk_1",me="_different_1m8mk_14",I={container:de,"img-wrap":"_img-wrap_1m8mk_7",different:me},{Text:D}=N,Ee=({formInfo:l})=>{const s={labelCol:{span:4},wrapperCol:{span:12}},{formList:a,oldFormList:t}=l,[m,g]=C.exports.useState(),[d,f]=C.exports.useState(),[B,b]=C.exports.useState();C.exports.useEffect(()=>{const u=a.map(A=>({label:A.formName,key:A.formId.toString()}));g(u),f([...a[0].defaultFormList,...a[0].form||[]]),b([...t[0].defaultFormList,...t[0].form||[]])},[a]);const S=u=>{const A=a.findIndex(o=>o.formId===+u);A!==-1&&(A?(f(a[A].form),b(t[A].form)):(f([...a[A].defaultFormList,...a[A].form||[]]),b([...t[0].defaultFormList,...t[0].form||[]])))},y=u=>{if(!d||!B)return;const{type:A,cnName:o}=d[u];if(["table"].includes(A)){const i=d[u].labelValue,c=B[u].labelValue;let E=!1;for(let h=0;h<i.length;h++)if(JSON.stringify(i[h])!==JSON.stringify(c[h])){E=!0;break}return E?e(D,{type:"danger",children:o}):e(F,{children:o})}else if(["imageUpload","fileUpload"].includes(A)){const i=d[u].labelValue,c=B[u].labelValue;let E=!1;if(i.length!==c.length)E=!0;else for(let h=0;h<i.length;h++)if(i[h].uid!==c[h].uid){E=!0;break}return E?e(D,{type:"danger",children:o}):e(F,{children:o})}else return d[u].labelValue===B[u].labelValue?e(F,{children:o}):e(D,{type:"danger",children:o})},Q=(u,A)=>{if(!d||!B)return;const{type:o}=d[u];if(["table"].includes(o)){const i=d[u].labelValue,c=B[u].labelValue;return i[A].value===c[A].value}else if(["imageUpload","fileUpload"].includes(o)){const i=d[u].labelValue,c=B[u].labelValue;let E=!1;if(i[A]){const{uid:h}=i[A];E=c.some(R=>R.uid===h)}return E}return d[u].labelValue===B[u].labelValue},P=(u,A)=>{if(u.type==="imageUpload")return e(F,{children:u.labelValue.map((o,i)=>e("div",{className:`${I["img-wrap"]} ${!Q(A,i)&&I.different}
              `,children:e(x,{width:160,height:160,src:o.url})},o.uid))});if(u.type==="fileUpload")return e(F,{children:u.labelValue.map((o,i)=>e(N.Link,{href:o.url,target:"_blank",style:{color:Q(A,i)?"#1668dc":"#f00"},children:o.name},o.uid))});if(u.type==="table"){const o=[{title:"\u63A5\u53E3\u540D\u79F0",width:200,dataIndex:"label"},{title:"\u8C03\u7528\u5E76\u53D1\u4E0A\u9650\uFF08\u6BCF\u79D2\u5E76\u53D1\uFF09",dataIndex:"value"}],i=u.labelValue.map((c,E)=>({index:E,label:Q(A,E)?c.label:e(D,{type:"danger",children:c.label}),value:Q(A,E)?c.value:e(D,{type:"danger",children:c.value})}));return e(re,{rowKey:"index",bordered:!0,dataSource:i,columns:o,pagination:!1})}return Q(A)?u.value:e(D,{type:"danger",children:u.value})};return e(F,{children:m&&m.length?r(F,{children:[e(X,{onChange:S,items:m}),d&&!!d.length&&e(p,{...s,children:d.map((u,A)=>e("div",{children:e(p.Item,{label:y(A),children:P(u,A)})},u.field))})]}):e(j,{image:j.PRESENTED_IMAGE_SIMPLE})})},Fe=({formInfo:l})=>{const{before:s,after:a}=l,t=(m,g)=>s[m]===a[m]?e(N.Text,{children:g||a[m]}):e(N.Text,{type:"danger",children:g||a[m]});return r(F,{children:[r(n,{title:"\u5355\u4F4D\u673A\u6784\u57FA\u672C\u4FE1\u606F",bordered:!0,column:2,style:{marginBottom:20},children:[e(n.Item,{label:t("companyName","\u5355\u4F4D\u540D\u79F0\uFF1A"),children:a.companyName?t("companyName"):"-"}),e(n.Item,{label:t("companyShortName","\u5355\u4F4D\u7B80\u79F0\uFF1A"),children:a.companyShortName?t("companyShortName"):"-"}),e(n.Item,{label:t("certificateNum","\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\uFF1A"),children:a.certificateNum?t("certificateNum"):"-"}),e(n.Item,{label:t("certificatePhoto","\u4FE1\u7528\u4EE3\u7801\u8BC1\u4E66\uFF1A"),children:a.certificatePhoto?e("div",{className:`${I["img-wrap"]} ${s.certificatePhoto!==a.certificatePhoto&&I.different}`,children:e(x,{width:80,src:`data:image/png;base64,${a.certificatePhoto}`,fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="})}):r(F,{children:[e(Ae,{style:{marginRight:4}}),"\u672A\u4E0A\u4F20"]})}),e(n.Item,{label:t("areaCode","\u63A5\u5165\u5730\u533A\uFF1A"),children:a.areaCode?t("areaCode"):"-"})]}),r(n,{title:"\u5355\u4F4D\u7BA1\u7406\u5458\u4FE1\u606F",bordered:!0,column:2,children:[e(n.Item,{label:t("adminName","\u7BA1\u7406\u5458\u59D3\u540D\uFF1A"),children:a.adminName?t("adminName"):"-"}),e(n.Item,{label:"\u7BA1\u7406\u5458\u8D26\u53F7\uFF1A",children:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).accountNumber:"-"}),e(n.Item,{label:t("adminPhone","\u7BA1\u7406\u5458\u624B\u673A\u53F7\uFF1A"),children:a.adminPhone?t("adminPhone"):"-"}),e(n.Item,{label:t("adminEmail","\u7BA1\u7406\u5458\u90AE\u7BB1\uFF1A"),children:a.adminEmail?t("adminEmail"):"-"})]})]})},ge=({applyKey:l,info:s})=>r(F,{children:[["ACCESS_CAPABILITY","PROD_CAPABILITY"].includes(l)&&e("div",{className:I.container,children:e(ue,{formList:s.formList})}),["APPLY_FILE_CAPABILITY"].includes(l)&&e("div",{className:I.container,children:e(ie,{formInfo:s})}),["DELAY_CAPABILITY"].includes(l)&&e("div",{className:I.container,children:e(ce,{formInfo:s})}),["ADD_NUM_APPLICATION"].includes(l)&&e(F,{children:e(n,{title:s.apiName,bordered:!0,column:2,children:r(n.Item,{label:"\u589E\u52A0\u7528\u91CF",children:[s.num,"\u6B21"]})})}),["STOP_APPLICATION","START_APPLICATION"].includes(l)&&e(F,{children:e(n,{title:s.apiName,bordered:!0,column:2,children:e(n.Item,{label:l==="STOP_APPLICATION"?"\u505C\u7528\u539F\u56E0":"\u542F\u7528\u539F\u56E0",children:s.describe})})}),["CAPABILITY_UPDATE"].includes(l)&&e(Ee,{formInfo:s}),["UPDATE_COMPANY_INFO"].includes(l)&&e("div",{className:I.container,children:e(Fe,{formInfo:s})})]}),w="data:image/png;base64,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",he="_flex_dly6u_8",T={"user-item":"_user-item_dly6u_1",flex:he,"sign-list-wrap":"_sign-list-wrap_dly6u_14"},Be=({list:l})=>{const{themeStore:s}=_(),a=s.antdThemeColor;return e(F,{children:l.map(t=>r(Z.Fragment,{children:[r("div",{className:T["user-item"],children:[r("p",{className:T.flex,children:[e("img",{src:w,style:{marginRight:10}}),t.nickName,t.isPassUser&&(t.passState?e($,{style:{color:"#FF3B30",marginLeft:4}}):e(M,{style:{color:a,marginLeft:4}}))]}),r(U,{children:[t.completeTime&&e(N.Text,{type:"secondary",children:["\u5BA1\u6279\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u4E0D\u901A\u8FC7","\u64A4\u56DE"][t.passState]}),t.completeTime]})]}),!!t.signList.length&&e("div",{className:T["sign-list-wrap"],children:t.signList.map((m,g)=>r("p",{className:T.flex,children:[e("img",{src:w,style:{marginRight:10}}),m.name,!m.isPass&&e(M,{style:{color:a,marginLeft:4}})]},g))})]},t.id))})},pe=({item:l})=>{const s=![0,1].includes(l.isPass)||!l.isPass&&l.isLastNode;return r("div",{style:{fontWeight:"bold"},children:[l.name,"\uFF08",l.userCount,"\uFF09",e(N.Text,{strong:!0,style:{fontSize:14,color:["blue","gray","red","orange"][l.isPass]},children:["\u5DF2\u901A\u8FC7","\u5BA1\u6279\u4E2D","\u5BA1\u6279\u672A\u901A\u8FC7","\u64A4\u56DE"][l.isPass]}),s&&e(H,{style:{marginLeft:8,fontWeight:"normal"},children:"\u5DF2\u7ED3\u675F"})]})},Pe=({instanceId:l,open:s,setOpen:a,callback:t})=>{const{dictionaryStore:m}=ne(),[g,d]=C.exports.useState(),[f,B]=C.exports.useState(0),[b,S]=C.exports.useState(),[y,Q]=C.exports.useState(),[P,u]=C.exports.useState(),A=(i,c)=>[{title:e("p",{style:{fontWeight:"bold",color:"#1e2636"},children:c?"\u5BA1\u6279\u7ED3\u675F\u6284\u9001":"\u63D0\u4EA4\u5BA1\u6279\u6284\u9001"}),icon:e("div",{className:V["copy-icon"]}),status:"process",description:e(F,{children:i.map((E,h)=>e(Z.Fragment,{children:r("p",{className:V.flex,children:[e("img",{src:w,style:{marginRight:10}}),E.name]})},h))})}];C.exports.useEffect(()=>{!l||(async()=>{const{data:i}=await ee({instanceId:l});if(!i)return;d(i);const{nodes:c,startCopyList:E,endCopyList:h}=i,R=c.map((L,q)=>{const G=q===c.length-1;return{title:e(pe,{item:{...L,isLastNode:G}}),description:e(Be,{list:L.sysUsers})}}),O=c.findIndex(L=>!L.isPass);B(O),S(R),Q(A(E,0)),u(A(h,1))})()},[l]);const o=()=>{t(),a(!1)};return e(le,{title:"\u67E5\u770B\u5BA1\u6279\u8BE6\u60C5",centered:!0,open:s,onCancel:o,width:840,footer:[e(te,{onClick:()=>o(),children:"\u5173\u95ED"},"cancel")],children:r("div",{className:"modal-content",children:[e("div",{className:"title",children:"\u5BA1\u6279\u5355\u4FE1\u606F"}),g&&e(oe,{info:g}),g&&r(F,{children:[e("div",{className:"title",children:m.processKeyListMap[g.key]}),e(ge,{applyKey:g.key,info:g.info})]}),e("div",{className:"title",children:"\u5BA1\u6279\u8FDB\u5EA6"}),e(v,{direction:"vertical",items:y}),e(v,{direction:"vertical",current:f,items:b}),e(v,{direction:"vertical",items:P})]})})};export{Pe as default};
