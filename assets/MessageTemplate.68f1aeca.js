import{a,aK as m,j as s,aL as A,u as E,F as o,D as g,R as D,C as B,T as y,a7 as C}from"./index.9074d6bf.js";import{T as f}from"./index.7271830f.js";import{D as v}from"./index.4e1ef676.js";const T="_title_1us63_1",N="_date_1us63_8",L="_content_1us63_18",k="_tips_1us63_29",r={title:T,date:N,content:L,tips:k},{Link:w,Text:x}=y,j={"\u3010\u5BA1\u6279\u7BA1\u7406\u3011":"","\u3010\u6211\u7684\u5355\u4F4D\u4FE1\u606F\u3011":"/app/myAccount/companyInfo","\u3010\u6211\u7684\u5E94\u7528\u3011":"/app/myApps","\u3010\u5F00\u53D1\u6587\u6863\u3011":"/app/devDocument","\u3010\u57FA\u7840\u80FD\u529B\u4E2D\u5FC3\u3011":"/app/appServiceCenter","\u3010\u5FAE\u8B66\u5F00\u653E\u5E73\u53F0\u7BA1\u7406\u7AEF\u3011":"/app/main","\u3010\u5355\u4F4D\u8D26\u53F7\u8BBE\u7F6E\u3011":"/app/myAccount/companyInfo","\u3010\u5FAE\u8B66\u5F00\u653E\u5E73\u53F0\u673A\u6784\u7AEF\u3011":"/login"},b=({info:n})=>{const p=JSON.parse(n.list).map(e=>{const t=e.items.map((u,l)=>{switch(u.type){case 1:return u;case 2:return{...u,children:s(f,{color:["success","processing","error","default"][u.children],children:["\u5BA1\u6279\u901A\u8FC7","\u5F85\u5BA1\u6279","\u4E0D\u901A\u8FC7","\u64A4\u56DE"][u.children]})};case 3:return{...u,children:a(m,{children:[s(A,{status:["success","warning","error"][u.children]}),s(x,{type:["success","warning","danger"][u.children],children:["\u5BA1\u6279\u901A\u8FC7","\u5F85\u5BA1\u6279","\u5BA1\u6279\u9A73\u56DE"][u.children]})]})};default:return u}});return{...e,items:t}}),d=E(),i=e=>{const t=/【[\u4e00-\u9fa5]+】/g;if(!t.test(e))return e;const u=e.match(t),[l,...F]=e.split(t);return a(o,{children:[l,F.map((h,c)=>a(C.Fragment,{children:[s(w,{onClick:()=>d(j[u[c]]),children:u[c]}),h]},c))]})};return a(o,{children:[s("div",{className:r.title,children:i(n.title)}),s("div",{className:r.date,children:n.sendTime}),s(g,{}),s("div",{className:r.content,children:i(n.content)}),p.map((e,t)=>s(D,{children:s(B,{span:e.items.length>=6?24:12,children:s(v,{title:"\u5355\u4F4D\u6CE8\u518C\u4FE1\u606F",column:e.items.length>=6?2:1,bordered:!0,style:{margin:"20px 0"},items:e.items})})},t)),s("div",{className:r.tips,children:n.tips})]})};export{b as default};
