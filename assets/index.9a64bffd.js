import{R as h,r as c,j as s,d as y,aJ as d}from"./index.318fb3af.js";import{d as n,D as x}from"./zh-cn.64a3fe25.js";import{i as C}from"./index.ac9f3c72.js";import{d as i,r as S,a as b}from"./date.af483887.js";import{M as w}from"./mock.fee450d4.js";import{C as A}from"./index.ded6b4a6.js";const D=({chartData:e})=>{let t;const a={xAxis:{type:"category",data:e.xAxis},yAxis:{type:"value"},series:[{data:e.yAxis,type:"line"}]};return c.exports.useEffect(()=>{if(!t){const r=document.getElementById("line");if(!r)return;t=C(r),t.setOption(a),t.resize()}return window.onresize=()=>t.resize(),()=>{window.onresize=()=>{}}},[a]),s(y,{children:s("div",{id:"line",style:{height:352}})})},k=h.memo(D),u="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";w.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{"news|5":[{id:"@increment( 10 )",message:"@cparagraph(1, 3)"}]}});const O=()=>d.post(`${u}/getNews`),P=e=>d.post(`${u}/getMyAppInfo`,e),_=e=>d.post(`${u}/getService`,e),M=e=>d.post(`${u}/getStatistics`,e),{RangePicker:R}=x,j=()=>{const[e,t]=c.exports.useState([n().add(-7,"d").format(i),n().format(i)]),a=(o,p)=>{t(p)},r=o=>{o||g()},[m,f]=c.exports.useState(),g=async(o="",p="")=>{const{data:l}=await M({startTime:o,endTime:p});f(l)};return c.exports.useEffect(()=>{g()},[]),s(A,{title:"\u8C03\u7528\u6570\u91CF\u7EDF\u8BA1",headStyle:{borderBottom:0},bordered:!1,extra:s(R,{defaultValue:[n(e[0],i),n(e[1],i)],presets:S,disabledDate:b,onChange:a,onOpenChange:r}),children:m&&s(k,{chartData:m})})},I=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{j as S,P as a,_ as b,O as g,I as i};
