import{i as h,r as c,j as s,t as y,bk as d}from"./index.a942f570.js";import{d as n,D as x}from"./zh-cn.c4d394e3.js";import{i as C}from"./index.ac9f3c72.js";import{d as i,r as S,a as b}from"./date.b16e65e9.js";import{M as w}from"./mock.93fd5af7.js";import{C as k}from"./index.7e364061.js";const A=({chartData:e})=>{let t;const a={xAxis:{type:"category",data:e.xAxis},yAxis:{type:"value"},series:[{data:e.yAxis,type:"line"}]};return c.exports.useEffect(()=>{if(!t){const r=document.getElementById("line");if(!r)return;t=C(r),t.setOption(a),t.resize()}return window.onresize=()=>t.resize(),()=>{window.onresize=()=>{}}},[a]),s(y,{children:s("div",{id:"line",style:{height:352}})})},D=h.memo(A),u="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";w.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{"news|5":[{id:"@increment( 10 )",message:"@cparagraph(1, 3)"}]}});const O=()=>d.post(`${u}/getNews`),P=e=>d.post(`${u}/getMyAppInfo`,e),_=e=>d.post(`${u}/getService`,e),M=e=>d.post(`${u}/getStatistics`,e),{RangePicker:j}=x,v=()=>{const[e,t]=c.exports.useState([n().add(-7,"d").format(i),n().format(i)]),a=(o,p)=>{t(p)},r=o=>{o||g()},[m,f]=c.exports.useState(),g=async(o="",p="")=>{const{data:l}=await M({startTime:o,endTime:p});f(l)};return c.exports.useEffect(()=>{g()},[]),s(k,{title:"\u8C03\u7528\u6570\u91CF\u7EDF\u8BA1",headStyle:{borderBottom:0},bordered:!1,extra:s(j,{defaultValue:[n(e[0],i),n(e[1],i)],presets:S,disabledDate:b,onChange:a,onOpenChange:r}),children:m&&s(D,{chartData:m})})},I=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,P as a,_ as b,O as g,I as i};
//# sourceMappingURL=index.18db6c26.js.map