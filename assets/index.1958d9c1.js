import{r as u,j as n,F as h,R as x,C as f,a as g}from"./index.adc364ef.js";import{d as e,D as p}from"./zh-cn.b1f023e2.js";import{d as c,r as q,a as C}from"./date.c64a803a.js";import{C as b}from"./index.a54db9a0.js";const R="_subtitle_1qs9x_1",j="_colunm_1qs9x_6",D="_colunm01_1qs9x_11",P="_colunm02_1qs9x_19",$="_colunm03_1qs9x_27",v="_content_1qs9x_31",y="_icon01_1qs9x_51",F="_icon02_1qs9x_55",N="_icon03_1qs9x_59",s={subtitle:R,colunm:j,colunm01:D,colunm02:P,colunm03:$,content:v,icon01:y,icon02:F,icon03:N},{RangePicker:k}=p,V=({title:l,info:r,getData:m})=>{const[a,i]=u.exports.useState([e().add(-7,"d").format(c),e().format(c)]),_=(t,o)=>{i(o)},d=t=>{t||m(a)};return n(h,{children:n(b,{title:l,headStyle:{borderBottom:0},bordered:!1,extra:n(k,{defaultValue:[e(a[0],c),e(a[1],c)],presets:q,disabledDate:C,onChange:_,onOpenChange:d}),children:n(x,{gutter:20,children:r.map((t,o)=>n(f,{span:8,children:g("div",{className:`${s.colunm} ${s["colunm0"+(o+1)]}`,children:[n("div",{className:s.title,children:t.title}),n("div",{className:`${s.content} ${s["icon0"+(o+1)]}`,children:t.count})]},o)},o))})})})};export{V as default};
