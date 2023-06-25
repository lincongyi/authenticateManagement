import{R as w,i as o,a as t,j as i,c as R,C as y}from"./index.ab090dd5.js";import{d as C}from"./zh-cn.dd85d38f.js";import{d as $,r as S,a as q}from"./date.bf360c6b.js";import{g as L,a as O,b as j,c as k}from"./myApp.7eed8a08.js";import{i as D}from"./index.ac9f3c72.js";import{C as A}from"./index.62ae816f.js";import{D as I}from"./index.50046777.js";import"./mock.25560f9e.js";import"./index.17c3ee87.js";import"./SwapRightOutlined.b03ea0f9.js";const G="_title_1ua4i_1",M="_success_1ua4i_18",V="_percentage_1ua4i_18",H="_fail_1ua4i_21",J="_amount_1ua4i_27",K="_card01_1ua4i_64",Q="_card02_1ua4i_67",T="_card03_1ua4i_70",U="_card04_1ua4i_73",W="_card05_1ua4i_76",X="_card06_1ua4i_79",Y="_count_1ua4i_83",Z="_description_1ua4i_87",e={title:G,"decoration-line":"_decoration-line_1ua4i_6","decoration-square":"_decoration-square_1ua4i_12",success:M,percentage:V,fail:H,amount:J,"space-between":"_space-between_1ua4i_32","left-side":"_left-side_1ua4i_35","right-side":"_right-side_1ua4i_36","card-wrap":"_card-wrap_1ua4i_49","card-content":"_card-content_1ua4i_54",card01:K,card02:Q,card03:T,card04:U,card05:W,card06:X,count:Y,description:Z},E=[],N=a=>{E.push(a),window.onresize=()=>{E.forEach(r=>r.resize())}};let p;const tt=({chartData:a})=>{const r={xAxis:{type:"category",boundaryGap:!1,data:a.xAxis},yAxis:{type:"value"},series:[{data:a.yAxis,type:"line",areaStyle:{}}]};return o.exports.useEffect(()=>{if(!p){const s=document.getElementById("amount");if(!s)return;p=D(s)}return p.setOption(r),p.resize(),N(p),()=>{p=null,window.onresize=()=>{}}},[r]),t("div",{id:"amount",style:{height:352}})},et=w.memo(tt);let m;const at=({chartData:a})=>{const r={xAxis:{type:"category",data:a.xAxis},yAxis:{type:"value"},series:[{data:a.yAxis,type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]};return o.exports.useEffect(()=>{if(!m){const s=document.getElementById("percentage");if(!s)return;m=D(s)}return m.setOption(r),m.resize(),N(m),()=>{m=null,window.onresize=()=>{}}},[r]),t("div",{id:"percentage",style:{height:352}})},st=w.memo(at);let _;const nt=({chartData:a})=>{const r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a.yAxis,axisLabel:{show:!0,interval:0,formatter:function(s){let h="";const u=s.length,d=5;if(u>d){const g=Math.ceil(u/d);for(let c=0;c<g;c++){let f="";const l=c*d,b=l+d;c===g-1?f=s.substring(l,u):f=s.substring(l,b)+`
`,h+=f}}else h=s;return h}}},series:[{type:"bar",data:a.xAxis}]};return o.exports.useEffect(()=>{if(!_){const s=document.getElementById("distribution");if(!s)return;_=D(s)}return _.setOption(r),_.resize(),N(_),()=>{_=null,window.onresize=()=>{}}},[r]),t("div",{id:"distribution",style:{height:352}})},rt=w.memo(nt),{RangePicker:it}=I,ft=()=>{const[a,r]=o.exports.useState([C().add(-7,"d").format($),C().format($)]),s=(n,x)=>{r(x)},h=n=>{n||(g(),l(),B(),F())},[u,d]=o.exports.useState(),g=async()=>{const{data:n}=await L({startDate:a[0],endDate:a[1]});d(n)},[c,f]=o.exports.useState(),l=async()=>{const{data:n}=await O({startDate:a[0],endDate:a[1]});f(n)},[b,z]=o.exports.useState(),B=async()=>{const{data:n}=await j({startDate:a[0],endDate:a[1]});z(n)},[v,P]=o.exports.useState(),F=async()=>{const{data:n}=await k({startDate:a[0],endDate:a[1]});P(n.list)};return o.exports.useEffect(()=>{g(),l(),B(),F()},[]),i(R,{gutter:[20,20],children:[t(y,{span:24,children:t(it,{defaultValue:[C(a[0]),C(a[1])],presets:S,disabledDate:q,onChange:s,onOpenChange:h})}),u&&t(y,{span:12,children:t(A,{title:i("div",{className:e.title,children:[t("span",{className:e["decoration-line"]}),"\u8BA4\u8BC1\u603B\u91CF\uFF1A",t("span",{className:e.amount,children:u.total})]}),children:t(et,{chartData:u})})}),c&&t(y,{span:12,children:t(A,{title:i("div",{className:`${e.title} ${e["space-between"]}`,children:[i("div",{className:`${e["left-side"]} ${e.success}`,children:[t("span",{className:e["decoration-square"]}),"\u8BA4\u8BC1\u6210\u529F\u7387\uFF1A",i("span",{className:e.percentage,children:[c.success,"%"]})]}),i("div",{className:`${e["right-side"]} ${e.fail}`,children:[t("span",{className:e["decoration-square"]}),"\u8BA4\u8BC1\u5931\u8D25\u7387\uFF1A",i("span",{className:e.percentage,children:[c.fail,"%"]})]})]}),children:t(st,{chartData:c})})}),t(y,{span:12,children:t(A,{style:{height:457},title:i("div",{className:e.title,children:[t("span",{className:e["decoration-square"]}),"\u5404\u8BC1\u4EF6\u7C7B\u578B\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:t("div",{className:e["card-wrap"],children:v&&v.map((n,x)=>i("div",{className:`${e["card-content"]} ${e["card0"+(x+1)]}`,children:[t("div",{className:`${e.count} font-primary-color`,children:n.count}),t("div",{className:e.description,children:n.description})]},x))})})}),b&&t(y,{span:12,children:t(A,{title:i("div",{className:e.title,children:[t("span",{className:e["decoration-square"]}),"\u5404\u63A5\u5165\u65B9\u5F0F\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:t(rt,{chartData:b})})})]})};export{ft as default};
//# sourceMappingURL=index.3db5f6e8.js.map
