import{bE as r,r as n,aE as i,a as y,d as l,j as o,aK as F,bF as d}from"./index.c08dcc58.js";const g=()=>{const e=[{label:"\u5355\u4F4D\u4FE1\u606F",key:"company"},{label:"\u8D26\u53F7\u4FE1\u606F",key:"account"}],{pathname:t}=r(),[c,s]=n.exports.useState("");n.exports.useEffect(()=>{const a=e.find(p=>t.includes(p.key));s((a==null?void 0:a.key)||"company")},[t]);const u=i();return y(l,{children:[o(F,{style:{paddingTop:0},activeKey:c,onChange:a=>{s(a),u(`/app/myAccount/${a}Info`)},items:e}),o(d,{})]})};export{g as default};