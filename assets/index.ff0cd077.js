import{aL as c,r as t,bq as m,j as s,d as f,c as p,C as l,aG as r}from"./index.116a6914.js";import d from"./MessageTemplate.2cab05a0.js";import"./index.c8828e88.js";import"./index.c9def567.js";const h=()=>{const[o]=c(),n=Number(o.get("id")),[a,i]=t.exports.useState();return t.exports.useEffect(()=>{(async()=>{const{data:e}=await m({id:n});!e||i(e)})()},[]),s(f,{children:a?s(p,{style:{marginTop:20},children:s(l,{xs:{span:20,offset:2},xxl:{span:16,offset:4},children:s(d,{info:a})})}):s(r,{image:r.PRESENTED_IMAGE_SIMPLE})})};export{h as default};