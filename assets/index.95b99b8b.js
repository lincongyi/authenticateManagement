import{r as u,j as n,d as h,c as p,C as x,a as f}from"./index.0174d8c9.js";import{d as c,D as g}from"./zh-cn.298c932b.js";import{d as e,r as q,a as C}from"./date.e484b8f8.js";import{C as b}from"./index.2f755632.js";import"./index.730091d4.js";const R="_subtitle_1qs9x_1",j="_colunm_1qs9x_6",D="_colunm01_1qs9x_11",P="_colunm02_1qs9x_19",$="_colunm03_1qs9x_27",v="_content_1qs9x_31",y="_icon01_1qs9x_51",N="_icon02_1qs9x_55",k="_icon03_1qs9x_59",s={subtitle:R,colunm:j,colunm01:D,colunm02:P,colunm03:$,content:v,icon01:y,icon02:N,icon03:k},{RangePicker:F}=g,z=({title:r,info:l,getData:m})=>{const[a,i]=u.exports.useState([c().add(-7,"d").format(e),c().format(e)]),_=(t,o)=>{i(o)},d=t=>{t||m(a)};return n(h,{children:n(b,{title:r,headStyle:{borderBottom:0},bordered:!1,extra:n(F,{defaultValue:[c(a[0],e),c(a[1],e)],presets:q,disabledDate:C,onChange:_,onOpenChange:d}),children:n(p,{gutter:20,children:l.map((t,o)=>n(x,{span:8,children:f("div",{className:`${s.colunm} ${s["colunm0"+(o+1)]}`,children:[n("div",{className:s.title,children:t.title}),n("div",{className:`${s.content} ${s["icon0"+(o+1)]}`,children:t.count})]},o)},o))})})})};export{z as default};
