import{aI as i,r as t,a as s,c as m,j as a,C as e,bv as d,bw as p,B as h}from"./index.43a2e21b.js";import{c as v}from"./myAccount.cebde4bc.js";import{E as y}from"./EditOutlined.020e8724.js";const N="_column_1e0at_7",n={"account-wrap":"_account-wrap_1e0at_1",column:N,"column-value":"_column-value_1e0at_12"},f=()=>{const l=i(),[c,o]=t.exports.useState();t.exports.useEffect(()=>{(async()=>{const{data:r}=await v();o(r)})()},[]);const u=()=>{l("/app/myAccount/accountSettings")};return s(m,{className:n["account-wrap"],children:[a(e,{span:24,children:s("div",{className:n.column,children:[s("label",{className:"primary-color",children:[a(d,{style:{marginRight:8}}),"\u767B\u5F55\u8D26\u53F7\uFF1A"]}),a("span",{className:n["column-value"],children:c==null?void 0:c.accountNumber})]})}),a(e,{span:24,children:s("div",{className:n.column,children:[s("label",{className:"primary-color",children:[a(p,{style:{marginRight:8}}),"\u767B\u5F55\u5BC6\u7801\uFF1A"]}),a("span",{className:n["column-value"],children:c==null?void 0:c.password})]})}),a(e,{span:24,children:a(h,{type:"primary",icon:a(y,{}),onClick:u,children:"\u4FEE\u6539\u5BC6\u7801"})})]})};export{f as default};
