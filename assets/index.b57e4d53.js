import{R as h,k as c,a as s,e as C,bm as d,C as y,l as x}from"./index.ce7f2286.js";import{d as n}from"./zh-cn.ca84b43d.js";import{i as S}from"./index.ac9f3c72.js";import{d as i,r as b,a as w}from"./date.f739b860.js";import{M as k}from"./mock.97cadb82.js";import{C as A}from"./index.274f6b44.js";import{D}from"./index.8bf4f122.js";const v=({chartData:e})=>{let t;const a={xAxis:{type:"category",data:e.xAxis},yAxis:{type:"value"},series:[{data:e.yAxis,type:"line"}]};return c.exports.useEffect(()=>{if(!t){const r=document.getElementById("line");if(!r)return;t=S(r),t.setOption(a),t.resize()}return window.onresize=()=>t.resize(),()=>{window.onresize=()=>{}}},[a]),s(C,{children:s("div",{id:"line",style:{height:352}})})},M=h.memo(v),u="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";k.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{"news|5":[{id:"@increment( 10 )",message:"@cparagraph(1, 3)"}]}});const I=()=>d.post(`${u}/getNews`),L=e=>d.post(`${u}/getMyAppInfo`,e),N=e=>d.post(`${u}/getService`,e),R=e=>d.post(`${u}/getStatistics`,e),{RangePicker:z}=D,F=()=>{const[e,t]=c.exports.useState([n().add(-7,"d").format(i),n().format(i)]),a=(o,p)=>{t(p)},r=o=>{o||l()},[m,f]=c.exports.useState(),l=async(o="",p="")=>{const{data:g}=await R({startTime:o,endTime:p});f(g)};return c.exports.useEffect(()=>{l()},[]),s(A,{title:"\u8C03\u7528\u6570\u91CF\u7EDF\u8BA1",headStyle:{borderBottom:0},bordered:!1,extra:s(y,{locale:x,children:s(z,{defaultValue:[n(e[0],i),n(e[1],i)],presets:b,disabledDate:w,onChange:a,onOpenChange:r})}),children:m&&s(M,{chartData:m})})},q=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{F as S,L as a,N as b,I as g,q as i};
//# sourceMappingURL=index.b57e4d53.js.map
