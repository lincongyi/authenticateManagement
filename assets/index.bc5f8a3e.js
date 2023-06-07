import{R as w,k as o,a as t,j as i,c as R,d as y,C as S,l as q}from"./index.db61cdac.js";import{d as C}from"./zh-cn.bfc8a1e2.js";import{d as $,r as k,a as L}from"./date.31e520b9.js";import{g as O,a as j,b as I,c as G}from"./myApp.6dff7daf.js";import{i as D}from"./index.ac9f3c72.js";import{C as A}from"./index.aef74caf.js";import{D as M}from"./index.9c78e1c3.js";import"./mock.a368f369.js";import"./index.3d5d0473.js";import"./SwapRightOutlined.aa6b129a.js";const V="_title_1ua4i_1",H="_success_1ua4i_18",J="_percentage_1ua4i_18",K="_fail_1ua4i_21",Q="_amount_1ua4i_27",T="_card01_1ua4i_64",U="_card02_1ua4i_67",W="_card03_1ua4i_70",X="_card04_1ua4i_73",Y="_card05_1ua4i_76",Z="_card06_1ua4i_79",tt="_count_1ua4i_83",et="_description_1ua4i_87",e={title:V,"decoration-line":"_decoration-line_1ua4i_6","decoration-square":"_decoration-square_1ua4i_12",success:H,percentage:J,fail:K,amount:Q,"space-between":"_space-between_1ua4i_32","left-side":"_left-side_1ua4i_35","right-side":"_right-side_1ua4i_36","card-wrap":"_card-wrap_1ua4i_49","card-content":"_card-content_1ua4i_54",card01:T,card02:U,card03:W,card04:X,card05:Y,card06:Z,count:tt,description:et},E=[],N=a=>{E.push(a),window.onresize=()=>{E.forEach(r=>r.resize())}};let p;const at=({chartData:a})=>{const r={xAxis:{type:"category",boundaryGap:!1,data:a.xAxis},yAxis:{type:"value"},series:[{data:a.yAxis,type:"line",areaStyle:{}}]};return o.exports.useEffect(()=>{if(!p){const s=document.getElementById("amount");if(!s)return;p=D(s)}return p.setOption(r),p.resize(),N(p),()=>{p=null,window.onresize=()=>{}}},[r]),t("div",{id:"amount",style:{height:352}})},st=w.memo(at);let m;const nt=({chartData:a})=>{const r={xAxis:{type:"category",data:a.xAxis},yAxis:{type:"value"},series:[{data:a.yAxis,type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]};return o.exports.useEffect(()=>{if(!m){const s=document.getElementById("percentage");if(!s)return;m=D(s)}return m.setOption(r),m.resize(),N(m),()=>{m=null,window.onresize=()=>{}}},[r]),t("div",{id:"percentage",style:{height:352}})},rt=w.memo(nt);let h;const it=({chartData:a})=>{const r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a.yAxis,axisLabel:{show:!0,interval:0,formatter:function(s){let _="";const u=s.length,d=5;if(u>d){const g=Math.ceil(u/d);for(let c=0;c<g;c++){let f="";const l=c*d,b=l+d;c===g-1?f=s.substring(l,u):f=s.substring(l,b)+`
`,_+=f}}else _=s;return _}}},series:[{type:"bar",data:a.xAxis}]};return o.exports.useEffect(()=>{if(!h){const s=document.getElementById("distribution");if(!s)return;h=D(s)}return h.setOption(r),h.resize(),N(h),()=>{h=null,window.onresize=()=>{}}},[r]),t("div",{id:"distribution",style:{height:352}})},ct=w.memo(it),{RangePicker:ot}=M,bt=()=>{const[a,r]=o.exports.useState([C().add(-7,"d").format($),C().format($)]),s=(n,x)=>{r(x)},_=n=>{n||(g(),l(),v(),F())},[u,d]=o.exports.useState(),g=async()=>{const{data:n}=await O({startDate:a[0],endDate:a[1]});d(n)},[c,f]=o.exports.useState(),l=async()=>{const{data:n}=await j({startDate:a[0],endDate:a[1]});f(n)},[b,P]=o.exports.useState(),v=async()=>{const{data:n}=await I({startDate:a[0],endDate:a[1]});P(n)},[B,z]=o.exports.useState(),F=async()=>{const{data:n}=await G({startDate:a[0],endDate:a[1]});z(n.list)};return o.exports.useEffect(()=>{g(),l(),v(),F()},[]),i(R,{gutter:[20,20],children:[t(y,{span:24,children:t(S,{locale:q,children:t(ot,{defaultValue:[C(a[0]),C(a[1])],presets:k,disabledDate:L,onChange:s,onOpenChange:_})})}),u&&t(y,{span:12,children:t(A,{title:i("div",{className:e.title,children:[t("span",{className:e["decoration-line"]}),"\u8BA4\u8BC1\u603B\u91CF\uFF1A",t("span",{className:e.amount,children:u.total})]}),children:t(st,{chartData:u})})}),c&&t(y,{span:12,children:t(A,{title:i("div",{className:`${e.title} ${e["space-between"]}`,children:[i("div",{className:`${e["left-side"]} ${e.success}`,children:[t("span",{className:e["decoration-square"]}),"\u8BA4\u8BC1\u6210\u529F\u7387\uFF1A",i("span",{className:e.percentage,children:[c.success,"%"]})]}),i("div",{className:`${e["right-side"]} ${e.fail}`,children:[t("span",{className:e["decoration-square"]}),"\u8BA4\u8BC1\u5931\u8D25\u7387\uFF1A",i("span",{className:e.percentage,children:[c.fail,"%"]})]})]}),children:t(rt,{chartData:c})})}),t(y,{span:12,children:t(A,{style:{height:457},title:i("div",{className:e.title,children:[t("span",{className:e["decoration-square"]}),"\u5404\u8BC1\u4EF6\u7C7B\u578B\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:t("div",{className:e["card-wrap"],children:B&&B.map((n,x)=>i("div",{className:`${e["card-content"]} ${e["card0"+(x+1)]}`,children:[t("div",{className:`${e.count} font-primary-color`,children:n.count}),t("div",{className:e.description,children:n.description})]},x))})})}),b&&t(y,{span:12,children:t(A,{title:i("div",{className:e.title,children:[t("span",{className:e["decoration-square"]}),"\u5404\u63A5\u5165\u65B9\u5F0F\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:t(ct,{chartData:b})})})]})};export{bt as default};
//# sourceMappingURL=index.bc5f8a3e.js.map
