import{r as u,j as n,t as h,q as p,s as x,h as f}from"./index.a942f570.js";import{d as e,D as g}from"./zh-cn.c4d394e3.js";import{d as c,r as q,a as b}from"./date.b16e65e9.js";import{C}from"./index.7e364061.js";import"./index.6e5639ae.js";const R="_subtitle_1qs9x_1",j="_colunm_1qs9x_6",D="_colunm01_1qs9x_11",P="_colunm02_1qs9x_19",$="_colunm03_1qs9x_27",v="_content_1qs9x_31",y="_icon01_1qs9x_51",N="_icon02_1qs9x_55",k="_icon03_1qs9x_59",s={subtitle:R,colunm:j,colunm01:D,colunm02:P,colunm03:$,content:v,icon01:y,icon02:N,icon03:k},{RangePicker:F}=g,z=({title:r,info:l,getData:m})=>{const[a,i]=u.exports.useState([e().add(-7,"d").format(c),e().format(c)]),_=(t,o)=>{i(o)},d=t=>{t||m(a)};return n(h,{children:n(C,{title:r,headStyle:{borderBottom:0},bordered:!1,extra:n(F,{defaultValue:[e(a[0],c),e(a[1],c)],presets:q,disabledDate:b,onChange:_,onOpenChange:d}),children:n(p,{gutter:20,children:l.map((t,o)=>n(x,{span:8,children:f("div",{className:`${s.colunm} ${s["colunm0"+(o+1)]}`,children:[n("div",{className:s.title,children:t.title}),n("div",{className:`${s.content} ${s["icon0"+(o+1)]}`,children:t.count})]},o)},o))})})})};export{z as default};
//# sourceMappingURL=index.e759f0fe.js.map