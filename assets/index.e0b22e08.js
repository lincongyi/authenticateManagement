import{k as u,a as o,e as p,C as f,l as h,c as g,d as x,j as q}from"./index.a49703b8.js";import{d as e}from"./zh-cn.9a48d670.js";import{d as c,r as C,a as b}from"./date.69f91935.js";import{C as P}from"./index.9588d637.js";import{D as R}from"./index.3a7ae777.js";import"./index.0b398046.js";import"./SwapRightOutlined.13a712e5.js";const j="_subtitle_1qs9x_1",v="_colunm_1qs9x_6",D="_colunm01_1qs9x_11",$="_colunm02_1qs9x_19",k="_colunm03_1qs9x_27",y="_content_1qs9x_31",N="_icon01_1qs9x_51",F="_icon02_1qs9x_55",S="_icon03_1qs9x_59",s={subtitle:j,colunm:v,colunm01:D,colunm02:$,colunm03:k,content:y,icon01:N,icon02:F,icon03:S},{RangePicker:w}=R,H=({title:r,info:l,getData:i})=>{const[a,m]=u.exports.useState([e().add(-7,"d").format(c),e().format(c)]),d=(t,n)=>{m(n)},_=t=>{t||i(a)};return o(p,{children:o(P,{title:r,headStyle:{borderBottom:0},bordered:!1,extra:o(f,{locale:h,children:o(w,{defaultValue:[e(a[0],c),e(a[1],c)],presets:C,disabledDate:b,onChange:d,onOpenChange:_})}),children:o(g,{gutter:20,children:l.map((t,n)=>o(x,{span:8,children:q("div",{className:`${s.colunm} ${s["colunm0"+(n+1)]}`,children:[o("div",{className:s.title,children:t.title}),o("div",{className:`${s.content} ${s["icon0"+(n+1)]}`,children:t.count})]},n)},n))})})})};export{H as default};
//# sourceMappingURL=index.e0b22e08.js.map
