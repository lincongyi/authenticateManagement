import{V as j,W as M,$ as N,r as p,ab as P,v as W,j as m}from"./index.da6df52f.js";const G=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=t;return{[e]:Object.assign(Object.assign({},N(t)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},H=j("Divider",t=>{const e=M(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[G(e)]},{sizePaddingEdgeHorizontal:0});var I=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]]);return o};const T=t=>{const{getPrefixCls:e,direction:o,divider:r}=p.exports.useContext(P),{prefixCls:i,type:s="horizontal",orientation:l="center",orientationMargin:a,className:b,rootClassName:x,children:d,dashed:$,plain:u,style:v}=t,y=I(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),n=e("divider",i),[S,w]=H(n),z=l.length>0?`-${l}`:l,c=!!d,h=l==="left"&&a!=null,g=l==="right"&&a!=null,C=W(n,r==null?void 0:r.className,w,`${n}-${s}`,{[`${n}-with-text`]:c,[`${n}-with-text${z}`]:c,[`${n}-dashed`]:!!$,[`${n}-plain`]:!!u,[`${n}-rtl`]:o==="rtl",[`${n}-no-default-orientation-margin-left`]:h,[`${n}-no-default-orientation-margin-right`]:g},b,x),f=p.exports.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),O=Object.assign(Object.assign({},h&&{marginLeft:f}),g&&{marginRight:f});return S(m("div",{...Object.assign({className:C,style:Object.assign(Object.assign({},r==null?void 0:r.style),v)},y,{role:"separator"}),children:d&&s!=="vertical"&&m("span",{className:`${n}-inner-text`,style:O,children:d})}))},E=T;export{E as D};
