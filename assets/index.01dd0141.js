import{bI as i,i as n,aG as p,j as m,d as y,a as o,bJ as l}from"./index.d57a3d71.js";import{T as f}from"./index.a4567f8c.js";const g=()=>{const e=[{label:"\u5355\u4F4D\u4FE1\u606F",key:"company"},{label:"\u8D26\u53F7\u4FE1\u606F",key:"account"}],{pathname:t}=i(),[c,s]=n.exports.useState("");n.exports.useEffect(()=>{const a=e.find(r=>t.includes(r.key));s((a==null?void 0:a.key)||"company")},[t]);const u=p();return m(y,{children:[o(f,{activeKey:c,onChange:a=>{s(a),u(`/app/myAccount/${a}Info`)},items:e}),o(l,{})]})};export{g as default};
//# sourceMappingURL=index.01dd0141.js.map
