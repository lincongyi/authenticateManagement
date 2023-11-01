import{R as fe,r as $,ad as K,v as W,a as N,j as o,aR as he,C as ue,X as xe,Y as Se,a1 as ye,l as Z,aC as k,c as ve,aU as be,aV as Ce,d as Pe}from"./index.c08dcc58.js";import{e as ze,P as Oe}from"./Pagination.cf26b4de.js";import{u as Be}from"./useBreakpoint.f3804dee.js";const Y=fe.createContext({});Y.Consumer;var ee=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};const Ne=t=>{var{prefixCls:e,className:i,avatar:n,title:a,description:s}=t,f=ee(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:h}=$.exports.useContext(K),p=h("list",e),x=W(`${p}-item-meta`,i),S=N("div",{className:`${p}-item-meta-content`,children:[a&&o("h4",{className:`${p}-item-meta-title`,children:a}),s&&o("div",{className:`${p}-item-meta-description`,children:s})]});return N("div",{...Object.assign({},f,{className:x}),children:[n&&o("div",{className:`${p}-item-meta-avatar`,children:n}),(a||s)&&S]})},Ie=(t,e)=>{var{prefixCls:i,children:n,actions:a,extra:s,className:f,colStyle:h}=t,p=ee(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:x,itemLayout:S}=$.exports.useContext(Y),{getPrefixCls:C}=$.exports.useContext(K),l=()=>{let u;return $.exports.Children.forEach(n,v=>{typeof v=="string"&&(u=!0)}),u&&$.exports.Children.count(n)>1},b=()=>S==="vertical"?!!s:!l(),d=C("list",i),y=a&&a.length>0&&o("ul",{className:`${d}-item-action`,children:a.map((u,v)=>N("li",{children:[u,v!==a.length-1&&o("em",{className:`${d}-item-action-split`})]},`${d}-item-action-${v}`))},"actions"),z=o(x?"div":"li",{...Object.assign({},p,x?{}:{ref:e},{className:W(`${d}-item`,{[`${d}-item-no-flex`]:!b()},f)}),children:S==="vertical"&&s?[N("div",{className:`${d}-item-main`,children:[n,y]},"content"),o("div",{className:`${d}-item-extra`,children:s},"extra")]:[n,y,he(s,{key:"extra"})]});return x?o(ue,{ref:e,flex:1,style:h,children:z}):z},te=$.exports.forwardRef(Ie);te.Meta=Ne;const je=te,Me=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:s,itemPaddingLG:f,marginLG:h,borderRadiusLG:p}=t;return{[`${e}`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:p,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${a}px ${h}px`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:s}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:f}}}},Le=t=>{const{componentCls:e,screenSM:i,screenMD:n,marginLG:a,marginSM:s,margin:f}=t;return{[`@media screen and (max-width:${n})`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i})`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:s}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${f}px`}}}}}},we=t=>{const{componentCls:e,antCls:i,controlHeight:n,minHeight:a,paddingSM:s,marginLG:f,padding:h,itemPadding:p,colorPrimary:x,itemPaddingSM:S,itemPaddingLG:C,paddingXS:l,margin:b,colorText:d,colorTextDescription:y,motionDurationSlow:P,lineWidth:z,headerBg:u,footerBg:v,emptyTextPadding:I,metaMarginBottom:G,avatarMarginRight:j,titleMarginBottom:R,descriptionFontSize:A}=t,M={};return["start","center","end"].forEach(L=>{M[`&-align-${L}`]={textAlign:L}}),{[`${e}`]:Object.assign(Object.assign({},ye(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:u},[`${e}-footer`]:{background:v},[`${e}-header, ${e}-footer`]:{paddingBlock:s},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:f},M),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:p,color:d,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:j},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:d},[`${e}-item-meta-title`]:{margin:`0 0 ${t.marginXXS}px 0`,color:d,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:d,transition:`all ${P}`,["&:hover"]:{color:x}}},[`${e}-item-meta-description`]:{color:y,fontSize:A,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none",["& > li"]:{position:"relative",display:"inline-block",padding:`0 ${l}px`,color:y,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center",["&:first-child"]:{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:z,height:Math.ceil(t.fontSize*t.lineHeight)-t.marginXXS*2,transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${h}px 0`,color:y,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:I,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:b,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:f},[`${e}-item-meta`]:{marginBlockEnd:G,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:R,color:d,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:h,marginInlineStart:"auto","> li":{padding:`0 ${h}px`,["&:first-child"]:{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,["&:last-child"]:{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:n},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:C},[`${e}-sm ${e}-item`]:{padding:S},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},Ee=xe("List",t=>{const e=Se(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[we(e),Me(e),Le(e)]},t=>({contentWidth:220,itemPadding:`${t.paddingContentVertical}px 0`,itemPaddingSM:`${t.paddingContentVerticalSM}px ${t.paddingContentHorizontal}px`,itemPaddingLG:`${t.paddingContentVerticalLG}px ${t.paddingContentHorizontalLG}px`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}));var He=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};function Te(t){var e,{pagination:i=!1,prefixCls:n,bordered:a=!1,split:s=!0,className:f,rootClassName:h,style:p,children:x,itemLayout:S,loadMore:C,grid:l,dataSource:b=[],size:d,header:y,footer:P,loading:z=!1,rowKey:u,renderItem:v,locale:I}=t,G=He(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const j=i&&typeof i=="object"?i:{},[R,A]=$.exports.useState(j.defaultCurrent||1),[M,L]=$.exports.useState(j.defaultPageSize||10),{getPrefixCls:ie,renderEmpty:X,direction:ne,list:O}=$.exports.useContext(K),ae={current:1,total:0},J=r=>(g,T)=>{var F;A(g),L(T),i&&i[r]&&((F=i==null?void 0:i[r])===null||F===void 0||F.call(i,g,T))},re=J("onChange"),oe=J("onShowSizeChange"),le=(r,g)=>v?(typeof u=="function"?u(r):u?r[u]:r.key,o(Pe,{children:v(r,g)})):null,se=()=>!!(C||i||P),c=ie("list",n),[ce,de]=Ee(c);let B=z;typeof B=="boolean"&&(B={spinning:B});const _=B&&B.spinning;let w="";switch(d){case"large":w="lg";break;case"small":w="sm";break}const me=W(c,{[`${c}-vertical`]:S==="vertical",[`${c}-${w}`]:w,[`${c}-split`]:s,[`${c}-bordered`]:a,[`${c}-loading`]:_,[`${c}-grid`]:!!l,[`${c}-something-after-last-item`]:se(),[`${c}-rtl`]:ne==="rtl"},O==null?void 0:O.className,f,h,de),m=ze(ae,{total:b.length,current:R,pageSize:M},i||{}),U=Math.ceil(m.total/m.pageSize);m.current>U&&(m.current=U);const q=i?o("div",{className:W(`${c}-pagination`,`${c}-pagination-align-${(e=m==null?void 0:m.align)!==null&&e!==void 0?e:"end"}`),children:o(Oe,{...Object.assign({},m,{onChange:re,onShowSizeChange:oe})})}):null;let D=Z(b);i&&b.length>(m.current-1)*m.pageSize&&(D=Z(b).splice((m.current-1)*m.pageSize,m.pageSize));const ge=Object.keys(l||{}).some(r=>["xs","sm","md","lg","xl","xxl"].includes(r)),Q=Be(ge),E=$.exports.useMemo(()=>{for(let r=0;r<k.length;r+=1){const g=k[r];if(Q[g])return g}},[Q]),pe=$.exports.useMemo(()=>{if(!l)return;const r=E&&l[E]?l[E]:l.column;if(r)return{width:`${100/r}%`,maxWidth:`${100/r}%`}},[l==null?void 0:l.column,E]);let V=_&&o("div",{style:{minHeight:53}});if(D.length>0){const r=D.map((g,T)=>le(g,T));V=l?o(ve,{gutter:l.gutter,children:$.exports.Children.map(r,g=>o("div",{style:pe,children:g},g==null?void 0:g.key))}):o("ul",{className:`${c}-items`,children:r})}else!x&&!_&&(V=o("div",{className:`${c}-empty-text`,children:I&&I.emptyText||(X==null?void 0:X("List"))||o(be,{componentName:"List"})}));const H=m.position||"bottom",$e=$.exports.useMemo(()=>({grid:l,itemLayout:S}),[JSON.stringify(l),S]);return ce(o(Y.Provider,{value:$e,children:N("div",{...Object.assign({style:Object.assign(Object.assign({},O==null?void 0:O.style),p),className:me},G),children:[(H==="top"||H==="both")&&q,y&&o("div",{className:`${c}-header`,children:y}),N(Ce,{...Object.assign({},B),children:[V,x]}),P&&o("div",{className:`${c}-footer`,children:P}),C||(H==="bottom"||H==="both")&&q]})}))}Te.Item=je;export{Te as L};
