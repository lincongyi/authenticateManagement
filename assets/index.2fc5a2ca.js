import{R as h,i as c,a as s,d as y,bk as d}from"./index.bd1b03b0.js";import{d as n}from"./zh-cn.2900bb97.js";import{i as x}from"./index.ac9f3c72.js";import{d as i,r as C,a as S}from"./date.6aa6cc66.js";import{M as b}from"./mock.93028f60.js";import{C as w}from"./index.0ad08a46.js";import{D as k}from"./index.b6a7e72a.js";const A=({chartData:e})=>{let t;const a={xAxis:{type:"category",data:e.xAxis},yAxis:{type:"value"},series:[{data:e.yAxis,type:"line"}]};return c.exports.useEffect(()=>{if(!t){const r=document.getElementById("line");if(!r)return;t=x(r),t.setOption(a),t.resize()}return window.onresize=()=>t.resize(),()=>{window.onresize=()=>{}}},[a]),s(y,{children:s("div",{id:"line",style:{height:352}})})},D=h.memo(A),u="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";b.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{"news|5":[{id:"@increment( 10 )",message:"@cparagraph(1, 3)"}]}});const P=()=>d.post(`${u}/getNews`),_=e=>d.post(`${u}/getMyAppInfo`,e),I=e=>d.post(`${u}/getService`,e),M=e=>d.post(`${u}/getStatistics`,e),{RangePicker:R}=k,v=()=>{const[e,t]=c.exports.useState([n().add(-7,"d").format(i),n().format(i)]),a=(o,p)=>{t(p)},r=o=>{o||f()},[m,g]=c.exports.useState(),f=async(o="",p="")=>{const{data:l}=await M({startTime:o,endTime:p});g(l)};return c.exports.useEffect(()=>{f()},[]),s(w,{title:"\u8C03\u7528\u6570\u91CF\u7EDF\u8BA1",headStyle:{borderBottom:0},bordered:!1,extra:s(R,{defaultValue:[n(e[0],i),n(e[1],i)],presets:C,disabledDate:S,onChange:a,onOpenChange:r}),children:m&&s(D,{chartData:m})})},L=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,_ as a,I as b,P as g,L as i};
//# sourceMappingURL=index.2fc5a2ca.js.map
