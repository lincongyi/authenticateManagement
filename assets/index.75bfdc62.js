import{aK as x,R as B,r as c,j as e,a as i,c as S,C as f}from"./index.da6df52f.js";import{d as D,D as q}from"./zh-cn.28cf50cb.js";import{d as P,r as L,a as O}from"./date.de12fa86.js";import{M as j}from"./mock.e26da107.js";import{i as E}from"./index.ac9f3c72.js";import{C as b}from"./index.b0adfb1e.js";import"./index.213e6dc9.js";const I="_title_1ua4i_1",M="_success_1ua4i_18",G="_percentage_1ua4i_18",K="_fail_1ua4i_21",U="_amount_1ua4i_27",V="_card01_1ua4i_64",H="_card02_1ua4i_67",J="_card03_1ua4i_70",Q="_card04_1ua4i_73",T="_card05_1ua4i_76",W="_card06_1ua4i_79",X="_count_1ua4i_83",Y="_description_1ua4i_87",a={title:I,"decoration-line":"_decoration-line_1ua4i_6","decoration-square":"_decoration-square_1ua4i_12",success:M,percentage:G,fail:K,amount:U,"space-between":"_space-between_1ua4i_32","left-side":"_left-side_1ua4i_35","right-side":"_right-side_1ua4i_36","card-wrap":"_card-wrap_1ua4i_49","card-content":"_card-content_1ua4i_54",card01:V,card02:H,card03:J,card04:Q,card05:T,card06:W,count:X,description:Y},F="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";j.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{list:[{description:"\u7B2C\u4E8C\u4EE3\u5C45\u6C11\u8EAB\u4EFD\u8BC1",count:"@integer(100, 500)"},{description:"\u6E2F\u6FB3\u5C45\u6C11\u6765\u5F80\u5185\u5730\u901A\u884C\u8BC1",count:"@integer(100, 500)"},{description:"\u53F0\u6E7E\u5C45\u6C11\u6765\u5F80\u5927\u9646\u901A\u884C\u8BC1",count:"@integer(100, 500)"},{description:"\u6E2F\u6FB3\u53F0\u5C45\u6C11\u5C45\u4F4F\u8BC1",count:"@integer(100, 500)"},{description:"\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1",count:"@integer(100, 500)"},{description:"\u666E\u901A\u62A4\u7167",count:"@integer(100, 500)"}]}});const Z=({startDate:t,endDate:s})=>x.post(`${F}/user/getAmount`),tt=({startDate:t,endDate:s})=>x.post(`${F}/user/getPercentage`),et=({startDate:t,endDate:s})=>x.post(`${F}/user/getDistribution`),at=({startDate:t,endDate:s})=>x.post(`${F}/user/getDistributionList`),z=[],w=t=>{z.push(t),window.onresize=()=>{z.forEach(s=>s.resize())}};let p;const st=({chartData:t})=>{const s={xAxis:{type:"category",boundaryGap:!1,data:t.xAxis},yAxis:{type:"value"},series:[{data:t.yAxis,type:"line",areaStyle:{}}]};return c.exports.useEffect(()=>{if(!p){const n=document.getElementById("amount");if(!n)return;p=E(n)}return p.setOption(s),p.resize(),w(p),()=>{p=null,window.onresize=()=>{}}},[s]),e("div",{id:"amount",style:{height:352}})},nt=B.memo(st);let m;const rt=({chartData:t})=>{const s={xAxis:{type:"category",data:t.xAxis},yAxis:{type:"value"},series:[{data:t.yAxis,type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]};return c.exports.useEffect(()=>{if(!m){const n=document.getElementById("percentage");if(!n)return;m=E(n)}return m.setOption(s),m.resize(),w(m),()=>{m=null,window.onresize=()=>{}}},[s]),e("div",{id:"percentage",style:{height:352}})},it=B.memo(rt);let g;const ut=({chartData:t})=>{const s={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.yAxis,axisLabel:{show:!0,interval:0,formatter:function(n){let h="";const o=n.length,d=5;if(o>d){const _=Math.ceil(o/d);for(let u=0;u<_;u++){let C="";const l=u*d,y=l+d;u===_-1?C=n.substring(l,o):C=n.substring(l,y)+`
`,h+=C}}else h=n;return h}}},series:[{type:"bar",data:t.xAxis}]};return c.exports.useEffect(()=>{if(!g){const n=document.getElementById("distribution");if(!n)return;g=E(n)}return g.setOption(s),g.resize(),w(g),()=>{g=null,window.onresize=()=>{}}},[s]),e("div",{id:"distribution",style:{height:352}})},ct=B.memo(ut),{RangePicker:ot}=q,Ct=()=>{const[t,s]=c.exports.useState([D().add(-7,"d").format(P),D().format(P)]),n=(r,A)=>{s(A)},h=r=>{r||(_(),l(),N(),$())},[o,d]=c.exports.useState(),_=async()=>{const{data:r}=await Z({startDate:t[0],endDate:t[1]});d(r)},[u,C]=c.exports.useState(),l=async()=>{const{data:r}=await tt({startDate:t[0],endDate:t[1]});C(r)},[y,k]=c.exports.useState(),N=async()=>{const{data:r}=await et({startDate:t[0],endDate:t[1]});k(r)},[v,R]=c.exports.useState(),$=async()=>{const{data:r}=await at({startDate:t[0],endDate:t[1]});R(r.list)};return c.exports.useEffect(()=>{_(),l(),N(),$()},[]),i(S,{gutter:[20,20],children:[e(f,{span:24,children:e(ot,{defaultValue:[D(t[0]),D(t[1])],presets:L,disabledDate:O,onChange:n,onOpenChange:h})}),o&&e(f,{span:12,children:e(b,{title:i("div",{className:a.title,children:[e("span",{className:a["decoration-line"]}),"\u8BA4\u8BC1\u603B\u91CF\uFF1A",e("span",{className:a.amount,children:o.total})]}),children:e(nt,{chartData:o})})}),u&&e(f,{span:12,children:e(b,{title:i("div",{className:`${a.title} ${a["space-between"]}`,children:[i("div",{className:`${a["left-side"]} ${a.success}`,children:[e("span",{className:a["decoration-square"]}),"\u8BA4\u8BC1\u6210\u529F\u7387\uFF1A",i("span",{className:a.percentage,children:[u.success,"%"]})]}),i("div",{className:`${a["right-side"]} ${a.fail}`,children:[e("span",{className:a["decoration-square"]}),"\u8BA4\u8BC1\u5931\u8D25\u7387\uFF1A",i("span",{className:a.percentage,children:[u.fail,"%"]})]})]}),children:e(it,{chartData:u})})}),e(f,{span:12,children:e(b,{style:{height:457},title:i("div",{className:a.title,children:[e("span",{className:a["decoration-square"]}),"\u5404\u8BC1\u4EF6\u7C7B\u578B\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:e("div",{className:a["card-wrap"],children:v&&v.map((r,A)=>i("div",{className:`${a["card-content"]} ${a["card0"+(A+1)]}`,children:[e("div",{className:`${a.count} font-primary-color`,children:r.count}),e("div",{className:a.description,children:r.description})]},A))})})}),y&&e(f,{span:12,children:e(b,{title:i("div",{className:a.title,children:[e("span",{className:a["decoration-square"]}),"\u5404\u63A5\u5165\u65B9\u5F0F\u8BA4\u8BC1\u91CF\u5206\u5E03\uFF1A"]}),children:e(ct,{chartData:y})})})]})};export{Ct as default};
