import{z as i,r as o,h as n,q as m,j as a,s as e,B as p}from"./index.a942f570.js";import{c as d}from"./myAccount.03891002.js";import{E as h}from"./EditOutlined.a069ccba.js";const f="_column_1bz0e_6",s={"account-wrap":"_account-wrap_1bz0e_1",column:f,"column-value":"_column-value_1bz0e_11"},F=()=>{const t=i(),[c,l]=o.exports.useState();o.exports.useEffect(()=>{(async()=>{const{data:r}=await d();l(r)})()},[]);const u=()=>{t("/app/myAccount/accountSettings")};return n(m,{className:s["account-wrap"],children:[a(e,{span:24,children:n("div",{className:s.column,children:[a("label",{className:"font-primary-color",children:"\u767B\u5F55\u8D26\u53F7\uFF1A"}),a("span",{className:s["column-value"],children:c==null?void 0:c.accountNumber})]})}),a(e,{span:24,children:n("div",{className:s.column,children:[a("label",{className:"font-primary-color",children:"\u767B\u5F55\u5BC6\u7801\uFF1A"}),a("span",{className:s["column-value"],children:c==null?void 0:c.password})]})}),a(e,{span:24,children:a(p,{type:"primary",icon:a(h,{}),onClick:u,children:"\u4FEE\u6539\u5BC6\u7801"})})]})};export{F as default};
//# sourceMappingURL=index.10dd411b.js.map
