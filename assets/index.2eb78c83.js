import{aG as i,i as o,j as s,c as m,a,C as e,ah as p}from"./index.bd1b03b0.js";import{c as d}from"./myAccount.c807f0a3.js";import{E as h}from"./EditOutlined.6b3d49fc.js";const f="_column_1bz0e_6",n={"account-wrap":"_account-wrap_1bz0e_1",column:f,"column-value":"_column-value_1bz0e_11"},F=()=>{const t=i(),[c,l]=o.exports.useState();o.exports.useEffect(()=>{(async()=>{const{data:r}=await d();l(r)})()},[]);const u=()=>{t("/app/myAccount/accountSettings")};return s(m,{className:n["account-wrap"],children:[a(e,{span:24,children:s("div",{className:n.column,children:[a("label",{className:"font-primary-color",children:"\u767B\u5F55\u8D26\u53F7\uFF1A"}),a("span",{className:n["column-value"],children:c==null?void 0:c.accountNumber})]})}),a(e,{span:24,children:s("div",{className:n.column,children:[a("label",{className:"font-primary-color",children:"\u767B\u5F55\u5BC6\u7801\uFF1A"}),a("span",{className:n["column-value"],children:c==null?void 0:c.password})]})}),a(e,{span:24,children:a(p,{type:"primary",icon:a(h,{}),onClick:u,children:"\u4FEE\u6539\u5BC6\u7801"})})]})};export{F as default};
//# sourceMappingURL=index.2eb78c83.js.map
