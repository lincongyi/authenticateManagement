import{k as d,j as u,e as r,a as e,aj as l}from"./index.d93c8983.js";const m="_select_k9558_27",h="_active_k9558_34",c={"method-title":"_method-title_k9558_1","method-list":"_method-list_k9558_8","method-item":"_method-item_k9558_13",select:m,active:h},p=""+new URL("accountSetting-method-01.fd9dbf19.png",import.meta.url).href,B=""+new URL("accountSetting-method-02.2233c0a1.png",import.meta.url).href,E=""+new URL("accountSetting-method-03.153e50fb.png",import.meta.url).href,C=({onNext:n})=>{const s=[{icon:p,description:"\u4EBA\u8138\u8BC6\u522B",type:2},{icon:B,description:"\u624B\u673A\u9A8C\u8BC1",type:0},{icon:E,description:"\u90AE\u7BB1\u9A8C\u8BC1",type:1}],[o,i]=d.exports.useState(2),a=t=>i(t);return u(r,{children:[e("p",{className:`${c["method-title"]} font-primary-color`,children:"\u60A8\u53EF\u4EE5\u901A\u8FC7\u9009\u62E9\u4EE5\u4E0B\u4E09\u79CD\u8BA4\u8BC1\u65B9\u5F0F\u4E2D\u7684\u4E00\u79CD\uFF0C\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1"}),e("div",{className:c["method-list"],children:s.map(t=>u("div",{className:`${c["method-item"]} ${o===t.type&&c.active}`,onClick:()=>a(t.type),children:[e("i",{className:`${c.select}`}),e("img",{src:t.icon}),e("p",{className:"font-primary-color",children:t.description})]},t.type))}),e("div",{className:"tc",children:e(l,{type:"primary",onClick:()=>n({type:o}),children:"\u4E0B\u4E00\u6B65"})})]})};export{C as default};
//# sourceMappingURL=Methods.d150b231.js.map
