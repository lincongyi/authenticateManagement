import{b as m,r as t,aS as c,j as s,F as f,R as p,C as l,E as r}from"./index.0be4eecc.js";import g from"./MessageTemplate.d4cfaf30.js";import"./index.22586f1a.js";import"./index.b866a3db.js";const h=()=>{const[o]=m(),n=Number(o.get("id")),[a,i]=t.exports.useState();return t.exports.useEffect(()=>{(async()=>{const{data:e}=await c({id:n});!e||i(e)})()},[]),s(f,{children:a?s(p,{style:{marginTop:20},children:s(l,{xs:{span:20,offset:2},xxl:{span:16,offset:4},children:s(g,{info:a})})}):s(r,{image:r.PRESENTED_IMAGE_SIMPLE})})};export{h as default};
