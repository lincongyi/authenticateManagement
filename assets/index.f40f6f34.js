import{bI as p,r as n,aI as i,a as y,d as l,j as o,bJ as m}from"./index.4ac89328.js";import{T as d}from"./index.cf3875d0.js";const b=()=>{const e=[{label:"\u5355\u4F4D\u4FE1\u606F",key:"company"},{label:"\u8D26\u53F7\u4FE1\u606F",key:"account"}],{pathname:t}=p(),[c,s]=n.exports.useState("");n.exports.useEffect(()=>{const a=e.find(r=>t.includes(r.key));s((a==null?void 0:a.key)||"company")},[t]);const u=i();return y(l,{children:[o(d,{style:{paddingTop:0},activeKey:c,onChange:a=>{s(a),u(`/app/myAccount/${a}Info`)},items:e}),o(m,{})]})};export{b as default};
