import{bJ as i,r as n,z as p,h as m,t as y,j as o,aS as l}from"./index.a942f570.js";import{T as f}from"./index.6e5639ae.js";const x=()=>{const a=[{label:"\u5355\u4F4D\u4FE1\u606F",key:"company"},{label:"\u8D26\u53F7\u4FE1\u606F",key:"account"}],{pathname:e}=i(),[c,s]=n.exports.useState("");n.exports.useEffect(()=>{const t=a.find(r=>e.includes(r.key));s((t==null?void 0:t.key)||"company")},[e]);const u=p();return m(y,{children:[o(f,{activeKey:c,onChange:t=>{s(t),u(`/app/myAccount/${t}Info`)},items:a}),o(l,{})]})};export{x as default};
//# sourceMappingURL=index.3914b64c.js.map