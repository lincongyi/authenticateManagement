import{bK as i,k as n,aI as p,j as m,e as y,a as o,bL as l}from"./index.d93c8983.js";import{T as f}from"./index.63d47ef2.js";const x=()=>{const e=[{label:"\u5355\u4F4D\u4FE1\u606F",key:"company"},{label:"\u8D26\u53F7\u4FE1\u606F",key:"account"}],{pathname:t}=i(),[c,s]=n.exports.useState("");n.exports.useEffect(()=>{const a=e.find(r=>t.includes(r.key));s((a==null?void 0:a.key)||"company")},[t]);const u=p();return m(y,{children:[o(f,{activeKey:c,onChange:a=>{s(a),u(`/app/myAccount/${a}Info`)},items:e}),o(l,{})]})};export{x as default};
//# sourceMappingURL=index.4734a003.js.map
