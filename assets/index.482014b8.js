import{u as i,r as t,a as s,R as m,j as a,C as e,b3 as d,b4 as p,B as h,b5 as y}from"./index.0be4eecc.js";import{c as N}from"./myAccount.3ab85870.js";const _="_column_1e0at_7",n={"account-wrap":"_account-wrap_1e0at_1",column:_,"column-value":"_column-value_1e0at_12"},g=()=>{const l=i(),[c,u]=t.exports.useState();t.exports.useEffect(()=>{(async()=>{const{data:r}=await N();u(r)})()},[]);const o=()=>{l("/app/myAccount/accountSettings")};return s(m,{className:n["account-wrap"],children:[a(e,{span:24,children:s("div",{className:n.column,children:[s("label",{className:"primary-color",children:[a(d,{style:{marginRight:8}}),"\u767B\u5F55\u8D26\u53F7\uFF1A"]}),a("span",{className:n["column-value"],children:c==null?void 0:c.accountNumber})]})}),a(e,{span:24,children:s("div",{className:n.column,children:[s("label",{className:"primary-color",children:[a(p,{style:{marginRight:8}}),"\u767B\u5F55\u5BC6\u7801\uFF1A"]}),a("span",{className:n["column-value"],children:c==null?void 0:c.password})]})}),a(e,{span:24,children:a(h,{type:"primary",icon:a(y,{}),onClick:o,children:"\u4FEE\u6539\u5BC6\u7801"})})]})};export{g as default};
